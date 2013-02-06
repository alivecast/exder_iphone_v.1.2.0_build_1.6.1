// ランダム文字列 -------------------------------------------------------------
function randPassWord(length) {
	length = length || '';
	var rand = 'abcdefghijklmnopqrstuvwxyz' + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + '0123456789';
	// var rand = 'abcdef' + '0123456789';
	rand = rand.split('');
	var pass = '';
	for (var i = 0; i < length; i++) {
		pass += rand[Math.floor(Math.random() * rand.length)];
	}
	return pass;
}

// base64 encode ---------------------------------------------------------------
function encBase64(str) {
	b64_str = base64.encode(str, 1);
	return b64_str;
}

// base64 decode ----------------------------------------------------------------
function decBase64(b64_str) {
	str = base64.decode(b64_str, 1);
	return str;
}

// AES128 encode CBC ------------------------------------------------------------
function encAesObj(obj) {
//	console.log('::encAesObj::');
	var key = CryptoJS.enc.Hex.parse(randPassWord(32));
	var iv = CryptoJS.enc.Hex.parse(randPassWord(32));
	var str = JSON.stringify(obj);
	var encrypted = CryptoJS.AES.encrypt(str, key, {
		iv : iv
	});
	var enc = {};
	enc['key'] = encrypted.key;
	enc['iv'] = encrypted.iv;
	// enc['enc'] = encrypted;
	enc['enc'] = encrypted.ciphertext.toString(CryptoJS.enc.Base64);
	var encText = encBase64(JSON.stringify(enc));
	return encText;
}

// AES128 decode CBC -------------------------------------------------------------
function decAesObj(encText) {
//	console.log('::decAesObj::encText: ' + encText);
	// base64エンコードされてないファイル読み込みの暫定処置
	if (encText.match(/^{/)) {
		var enc = JSON.parse(encText);
	} else {
		var enc = JSON.parse(decBase64(encText));
	}
	if (enc.key || enc.enc) {
//		console.log('Key ari');
		var key = enc.key;
		var iv = enc.iv;
		var enc = enc.enc;
		var objText = CryptoJS.AES.decrypt(enc, key, {
			iv : iv
		});
		objText = objText.toString(CryptoJS.enc.Utf8);
		var obj = JSON.parse(objText);
	} else {
//		console.log('Key nashi');
		var obj = enc;
	}
//	console.log("objText: " + obj);
	return obj;
}

function getLocalStorage(fname) {
	var value = window.localStorage.getItem(fname);
	return value;
}

function setLocalStorage(fname, value) {
	window.localStorage.removeItem(fname);
	window.localStorage.setItem(fname, value);
}

function remLocalStorage(fname) {
	window.localStorage.removeItem(fname);
}

// fnが関数ならそのまま返し、文字列なら関数名にして返す
function $FN(fn) {
	return ( typeof fn == 'function') ? fn : Function('x', 'return ' + fn);
}

// ファイル書込処理(書き込み成功ならokfn関数を実行、失敗ならerrfn関数を実行)
function setFile(fname, jsonObj, okfn, errfn) {
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, write, setNG);
	function write(fileSystem) {
		fileSystem.root.getFile(fname, {
			create : true,
			exclusive : false
		}, function(fileEntry) {
			fileEntry.createWriter(function(writer) {
				writer.onwrite = function(evt) {
					console.log("書き込み成功");
				};
				writer.onerror = function(evt) {
				//	console.log('書き込みに失敗' + evt.toString());
				};
				// 内容を書き込み
				// var jsonText = JSON.stringify(jsonObj);
				// writer.write(jsonText);
				// callback = $FN(okfn);
				// return callback(jsonText);

				// 暗号化
				var encText = encAesObj(jsonObj);
			//	console.log('setFile::encText: ' + encText);
				writer.write(encText);
				callback = $FN(okfn);
				return callback(encText);

			}, setNG);
		}, setNG);
	}

	function setNG(error) {
		console.log("ファイルを書き込めませんでした。");
		callback = $FN(errfn);
		return callback()
	}

}

// ファイル読み込み処理(読み込み成功ならokfn関数を実行、失敗ならerrfn関数を実行)
function getFile(fname, okfn, errfn) {
	var text = {};
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, read, noFile);
	function read(fileSystem) {
		fileSystem.root.getFile(fname, {}, function(fileEntry) {
			fileEntry.file(function(file) {
				var reader = new FileReader();
				reader.onloadend = function(evt) {
					// ここに読み込み完了後の処理を書く
					text = evt.target.result;
					if (text) {
						console.log("getFile::正常にファイルを読み込みました。");
						var encText = text;
						var obj = decAesObj(encText);
						callback = $FN(okfn);
						return callback(obj);
					} else {
						console.log("getFile::正常にファイルを読み込みましたが、データがありません。");
						noFile();
					}

				};
				reader.readAsText(file, "utf-8");
			}, noFile)
		}, noFile);
	}

	function noFile(error) {
		console.log("ファイルを読み込めませんでした。");
		callback = $FN(errfn);
		return callback()
	}

}

// ファイル削除
function delFile(fname) {
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem) {
		fileSystem.root.getFile(fname, {
			create : false
		}, function(fileEntry) {
			fileEntry.remove(function() {
				console.log('File removed:' + fname);
			}, fail);
		}, fail);
	}, fail);
}

// ファイル操作　error処理
function fail(error) {
	console.log("ファイル処理失敗: " + error.code);
}

// 設定ファイルの読み込み
function getonOrdering(callfn) {
	// ファイルの読み込み
	console.log("Start ordering");
	var fname = 'ordering';
	getFile(fname, getonOrderingOK, getonOrderingNG);

	function getonOrderingOK(json) {
		//alert('getonOrdering: ' + JSON.stringify(json));
		console.log("OK : ordering");
		getonMSG(json, callfn);
	}

	function getonOrderingNG() {
		console.log("NG : ordering");
		location.href = "index.html";
		return false;
	}

}

// 超重要メッセージの出力
function getonMSG(json, callfn) {
	// URLの取得
	var callback = $FN(callfn);
	$.ajax({
		type : "POST",
		url : "http://exorder.jp/app/msg.php",
		data : "id1=alivecast&id2=sugoi&app_code=" + json.app_code + "&app_ver=" + json.app_ver,
		success : function(data) {
			if (data) {
				console.log("重要ＭＳＧ");
				button = 'OK';
				title = '【重要メッセージ】';
				navigator.notification.alert(data, callback(json), title, button);
			} else {
				return callback(json);
			}
		},
		error : function() {
			$.ajax({
				type : "POST",
				url : "http://www.alivecast.jp/exorder/msg.php",
				data : "id1=alivecast&id2=sugoi&app_code=" + json.app_code + "&app_ver=" + json.app_ver,
				success : function(data) {
					if (data) {
						console.log("重要ＭＳＧ");
						button = 'OK';
						title = '【重要メッセージ】';
						navigator.notification.alert(data, callback(json), title, button);
					} else {
						return callback(json);
					}
				},
				error : function() {
					return callback(json);
				}
			});
		}
	});
}
