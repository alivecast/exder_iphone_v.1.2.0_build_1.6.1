function setInitFlg(initFlg) {
	var storage = {};
	// 計測用
	setLocalStorage(storage, 'time', parseInt(new Date().getTime()));
	// 商品情報の有無 ordered:商品詳細画面で購入ボタンが押された get:barcodeで読んだ
	setLocalStorage(storage, 'purchased_item_flg', initFlg.purchased_item_flg);
	// barcode.html barcode表示：false 商品表示:true
	setLocalStorage(storage, 'show_item_flg', initFlg.show_item_flg);
	// 設定・購入操作した最後の時間
	setLocalStorage(storage, 'passTime', initFlg.passTime);
	// 説明ページのURL
	setLocalStorage(storage, 'page', initFlg.page);
	// 初期起動フラグ　true:初回起動 false:次回起動以降
	setLocalStorage(storage, 'appFirst', initFlg.appFirst);
	// 送料表示 enable:表示  disable:非表示
	setLocalStorage(storage, 'shippingCost', initFlg.shippingCost);
	// 購入時に暗証番号を true:必要とする false:必要ない
	setLocalStorage(storage, 'inputPasscode', initFlg.inputPasscode);
	// 暗証番号の入力が true:済んでいる false:済んでいない
	setLocalStorage(storage, 'inputedPass', initFlg.inputedPass);
	// 注文時のキャンセル説明フラグ enable:表示　disable:非表示
	setLocalStorage(storage, 'cancelAttention', initFlg.cancelAttention);
	// 利用者情報の誕生月を true:触った false:触ってない
	setLocalStorage(storage, 'touchMonth', initFlg.touchMonth);
	// 利用者情報の誕生日を true:触った false:触ってない
	setLocalStorage(storage, 'touchDate', initFlg.touchDate);
	// 暗証番号入力画面のボタン名称 order:購入する setting:設定画面へ
	setLocalStorage(storage, 'passInputBtn', initFlg.passInputBtn);
	// 購入ボタンが buy:押された
	setLocalStorage(storage, 'kbn', initFlg.kbn);
	// 注文情報のハッシュ初期化
	setLocalStorage(storage, 'order_params', initFlg.order_params);
	// 戻るボタンにセットする初期値
	setLocalStorage(storage, 'before', initFlg.before);
	// 設定・購入操作した最後の時間
	//	setLocalStorage(storage, 'passTime', initFlg.passTime);
	// 注文時のキャンセル説明を true:表示する false:非表示
	setLocalStorage(storage, 'cancelAttention', initFlg.cancelAttention);
	// qr_id 初期値
	setLocalStorage(storage, "qr_id", initFlg.qr_id);
	// barcode読み取り結果の初期化
	setLocalStorage(storage, 'barcodeParams', initFlg.barcodeParams);
	// 商品バージョンの初期値
	setLocalStorage(storage, "item_version", initFlg.item_version);
	// 顧客IDの初期値
	setLocalStorage(storage, "customer_id", initFlg.customer_id);
	// 注文商品情報の保存
	setLocalStorage(storage, "order", initFlg.order);
	// サーバからの商品情報の保存ハッシュ
	setLocalStorage(storage, 'show_item_params', initFlg.show_item_params);
	// 保存した数量の初期化フラグ true:初期化
	setLocalStorage(storage, 'initBackAmount', initFlg.initBackAmount);
	// お届け先が　true:存在する false:存在しない
	//getLocalStorage('is_addressee_flg', initFlg.initBackAmount);
	// 暗証番号関連の初期値
	setLocalStorage(storage, 'passcodeNew_customer_pass', initFlg.passcodeNew_customer_pass);
	setLocalStorage(storage, 'passcodeNew_re_pass', initFlg.passcodeNew_re_pass);
	setLocalStorage(storage, 'passcodeNew_customer_qes', initFlg.passcodeNew_customer_qes);
	setLocalStorage(storage, 'passcodeNew_customer_ans', initFlg.passcodeNew_customer_ans);
	// お届け先の初期化
	setLocalStorage(storage, 'address_name', initFlg.address_name);
	// 設定状況フラグ初期化
	setLocalStorage(storage, 'chSetting', initFlg.chSetting);
	// 支払い方法のフラグ pay_card:クレジット pay_cod:代引 order_commission: 代引手数料
	setLocalStorage(storage, 'address_name', initFlg.address_name);
	// カード登録入力値保存用ハッシュの初期化
	setLocalStorage(storage, 'scd', initFlg.scd);
	// 生年月日の初期値
	setLocalStorage(storage, 'date', initFlg.date);
	// 購入数量の初期値
	setLocalStorage(storage, 'order_amount', initFlg.order_amount);
	// show_order.html 購入商品表示：true 一覧表示:false
	setLocalStorage(storage, 'show_order_flg', initFlg.show_order_flg);
	// 購入履歴更新時間の初期化
	setLocalStorage(storage, 'final_update', initFlg.final_update);
	console.log('init read finish');
}

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
			console.log('hrefStorageAll setStorageOK');
			window.location.href = url;
		}

		function setStorageNG() {
			console.log('hrefStorageAll setStorageNG');
			window.location.href = url;
		}

	}

}

