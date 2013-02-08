
// JSON encode ------------------------------------------------------------------
function encJson(obj) {
	json = JSON.stringify(obj);
	return json;
}

// JSON decode ------------------------------------------------------------------
function decJson(json) {
	obj = JSON.parse(json);
	return obj;
	// obj.params = value
}

// htmlでのGET受け取り -------------------------------------------------------------
function getQuery() {
	if (1 < document.location.search.length) {
		// 最初の1文字(?記号)を除いた文字列を取得する
		var query = document.location.search.substring(1);

		// クエリの区切り記号(&)で文字列を配列に分割する
		var parameters = query.split('&');
		var result = new Object();
		for (var i = 0; i < parameters.length; i++) {
			// パラメータ名とパラメータ値に分割する
			var element = parameters[i].split('=');
			var paramKey = decodeURIComponent(element[0]);
			console.log("paramKey " + paramKey);
			var paramValue = decodeURIComponent(element[1]);
			console.log("paramValue " + paramValue);
			// パラメータ名をキーとして連想配列に追加する
			result[paramKey] = paramValue;
		}
		return result;
	}
	return null;
}

//
function getDate(timestamp) {
	var ts = parseInt(timestamp);
	var d = new Date(ts * 1000);
	var year = d.getFullYear();
	var month = d.getMonth() + 1;
	var day = d.getDate();
	return String(year) + '年' + String(month) + '月' + String(day) + '日';
}

function getDateTime(timestamp) {
	var ts = parseInt(timestamp);
	var d = new Date(ts * 1000);
	var year = d.getFullYear();
	var month = d.getMonth() + 1;
	var day = d.getDate();
	var hour = (d.getHours() < 10 ) ? '0' + d.getHours() : d.getHours();
	var min = (d.getMinutes() < 10 ) ? '0' + d.getMinutes() : d.getMinutes();
	var sec = (d.getSeconds() < 10 ) ? '0' + d.getSeconds() : d.getSeconds();
	// return String(year) + '年' + String(month) + '月' + String(day) + '日 ' + String(hour) + ':' + String(min) + ':' + String(sec);
	return String(year) + '年' + String(month) + '月' + String(day) + '日 ' + String(hour) + ':' + String(min);
}

// 桁区切り
function currency(str) {
	var num = new String(str).replace(/,/g, "");
	while (num != ( num = num.replace(/^(-?\d+)(\d{3})/, "$1,$2")));
	return num;
}

// 通信エラーメッセージ文
function networdERR(callfn, title) {
	message = '通信が混み合っているか、通信環境がよくないため、しばらく時間をおいて操作を行ってください。';
	button = 'OK';
	callback = $FN(callfn);
	if (title == '' || title == null) {
	} else {
		title = '通信エラー';
	}
	// navigator.notification.alert(message, callback, title, button);
	navigator.notification.alert(
		message, 
		function(){
			window.location.href = 'netError.html'
		}, 
		title, 
		button
	);
}

// ネットワーク状態を調べる
function check_network() {
	var rc;
	switch(navigator.network.connection.type){
		case Connection.UNKNOWN: rc='unknown'; break;
		case Connection.ETHERNET: rc='ethernet'; break;
		case Connection.WIFI: rc='wifi'; break;
		case Connection.CELL_2G: rc='2G'; break;
		case Connection.CELL_3G: rc='3G'; break;
		case Connection.CELL_4G: rc='4G'; break;
		default: rc='none'; break;
	}
	console.log('ネットワーク: ' + rc);
	return rc;
}

// 桁区切り
function setPrice(price) {
	// 桁区切り
	var str = String(price);
	var num = new String(str).replace(/,/g, "");
	while (num != ( num = num.replace(/^(-?\d+)(\d{3})/, "$1,$2")));
	num += '円';
	return num;
}

function popup(type, title, message) {
		new $pop(message, {
			type : type,
			title : title,
			width : 220,
			height : 120,
			close : false,
			modal : true
		});
}

function errorFocus(obj){
	var p = obj.offset();
//	alert(JSON.stringify(p));
	$.mobile.silentScroll(-56 + -100 + p.top);
}
