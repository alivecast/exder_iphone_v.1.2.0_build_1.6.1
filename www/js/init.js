// その他のlocalStorageを取得
function getStorageAll(json) {
	console.log('getStorageAll:json: ' + json.stringify(json));
	if (json != null) {
		for (key in json) {
			window.localStorage.removeItem(key);
			window.localStorage.setItem(key, json.key);
			storage[key] = json.key;
		}
	}
}

//
function start(func) {
	console.log('start:');
	getFile('storage', getStorage, noGetStorage);
	function noGetStorage() {
		console.log('start:noGetStorage');
		return func();
	}
	function getStorage(json) {
		console.log('start:getStorage: ' + JSON.stringify(json));
		// localStorageに取得
		for (key in json) {
			setLocalStorage(storage, key, json[key]);
		//	storage[key] = json.key;
			console.log('LocalStorage: ' + key + ':' + json[key]);
		}
		return func();
	}

}

// localStorage の保存
function setStorageAll(json) {
	getFile('storage', getStorageOK, getStorageNG);
	function getStorageOK(obj) {
		if (obj != null) {
			for (key in obj) {
				json[key] = obj.key;
			}
		}
		setFile('storage', json, setStorageOK, setStorageNG);
		function setStorageOK(json) {
			console.log('hrefStorageAll setStorageOK');
		}

		function setStorageNG() {
			console.log('hrefStorageAll setStorageNG');
		}
	}
	function getStorageNG() {
		setFile('storage', json, setStorageOK, setStorageNG);
		function setStorageOK(json) {
			console.log('hrefStorageAll setStorageOK');
		}
		function setStorageNG() {
			console.log('hrefStorageAll setStorageNG');
		}
	}
}

// localStorage の保存後にページ遷移
function hrefStorageAll(url, json) {
	getFile('storage', getStorageOK, getStorageNG);
	function getStorageOK(obj) {
		if (obj != null) {
			for (key in obj) {
				json[key] = obj.key;
			}
		}
		setFile('storage', json, setStorageOK, setStorageNG);
		function setStorageOK(json) {
			console.log('hrefStorageAll setStorageOK');
			window.location.href = url;
		}

		function setStorageNG() {
			console.log('hrefStorageAll setStorageNG');
			window.location.href = url;
		}

	}

	function getStorageNG() {
		setFile('storage', json, setStorageOK, setStorageNG);
		function setStorageOK(json) {
			console.log('hrefStorageAll setStorageOK');
			window.location.href = url;
		}

		function setStorageNG() {
			console.log('hrefStorageAll setStorageNG');
			window.location.href = url;
		}
	}
}
