function setInitFlg(initFlg) {
	// 計測用
	setLocalStorage('time', parseInt(new Date().getTime()));
	// 商品情報の有無 ordered:商品詳細画面で購入ボタンが押された get:barcodeで読んだ
	setLocalStorage('purchased_item_flg', initFlg.purchased_item_flg);
	// barcode.html barcode表示：false 商品表示:true
	setLocalStorage('show_item_flg', initFlg.show_item_flg);
	// 設定・購入操作した最後の時間
	setLocalStorage('passTime', initFlg.passTime);
	// 説明ページのURL
	setLocalStorage('page', initFlg.page);
	// 初期起動フラグ　true:初回起動 false:次回起動以降
	setLocalStorage('appFirst', initFlg.appFirst);
	// 送料表示 enable:表示  disable:非表示
	setLocalStorage('shippingCost', initFlg.shippingCost);
	// 購入時に暗証番号を true:必要とする false:必要ない
	setLocalStorage('inputPasscode', initFlg.inputPasscode);
	// 暗証番号の入力が true:済んでいる false:済んでいない
	setLocalStorage('inputedPass', initFlg.inputedPass);
	// 注文時のキャンセル説明フラグ enable:表示　disable:非表示
	setLocalStorage('cancelAttention', initFlg.cancelAttention);
	// 利用者情報の誕生月を true:触った false:触ってない
	setLocalStorage('touchMonth', initFlg.touchMonth);
	// 利用者情報の誕生日を true:触った false:触ってない
	setLocalStorage('touchDate', initFlg.touchDate);
	// 暗証番号入力画面のボタン名称 order:購入する setting:設定画面へ
	setLocalStorage('passInputBtn', initFlg.passInputBtn);
	// 購入ボタンが buy:押された
	setLocalStorage('kbn', initFlg.kbn);
	// 注文情報のハッシュ初期化
	setLocalStorage('order_params', initFlg.order_params);
	// 戻るボタンにセットする初期値
	setLocalStorage('before', initFlg.before);
	// 設定・購入操作した最後の時間
	//	setLocalStorage('passTime', initFlg.passTime);
	// 注文時のキャンセル説明を true:表示する false:非表示
	setLocalStorage('cancelAttention', initFlg.cancelAttention);
	// qr_id 初期値
	setLocalStorage("qr_id", initFlg.qr_id);
	// barcode読み取り結果の初期化
	setLocalStorage('barcodeParams', initFlg.barcodeParams);
	// 商品バージョンの初期値
	setLocalStorage("item_version", initFlg.item_version);
	// 顧客IDの初期値
	setLocalStorage("customer_id", initFlg.customer_id);
	// 注文商品情報の保存
	setLocalStorage("order", initFlg.order);
	// サーバからの商品情報の保存ハッシュ
	setLocalStorage('show_item_params', initFlg.show_item_params);
	// 保存した数量の初期化フラグ true:初期化
	setLocalStorage('initBackAmount', initFlg.initBackAmount);
	// お届け先が　true:存在する false:存在しない
	//getLocalStorage('is_addressee_flg', initFlg.initBackAmount);
	// 暗証番号関連の初期値
	setLocalStorage('passcodeNew_customer_pass', initFlg.passcodeNew_customer_pass);
	setLocalStorage('passcodeNew_re_pass', initFlg.passcodeNew_re_pass);
	setLocalStorage('passcodeNew_customer_qes', initFlg.passcodeNew_customer_qes);
	setLocalStorage('passcodeNew_customer_ans', initFlg.passcodeNew_customer_ans);
	// お届け先の初期化
	setLocalStorage('address_name', initFlg.address_name);
	// 設定状況フラグ初期化
	setLocalStorage('chSetting', initFlg.chSetting);
	// 支払い方法のフラグ pay_card:クレジット pay_cod:代引 order_commission: 代引手数料
	setLocalStorage('address_name', initFlg.address_name);
	// カード登録入力値保存用ハッシュの初期化
	setLocalStorage('scd', initFlg.scd);
	// 生年月日の初期値
	setLocalStorage('date', initFlg.date);
	// 購入数量の初期値
	setLocalStorage('order_amount', initFlg.order_amount);
	// show_order.html 購入商品表示：true 一覧表示:false
	setLocalStorage('show_order_flg', initFlg.show_order_flg);
	// 購入履歴更新時間の初期化
	setLocalStorage('final_update', initFlg.final_update);
}


// function getInitFlg(initFlg) {
	// // 計測用
	// getLocalStorage('time', initFlg.time);
	// // 商品情報の有無 ordered:商品詳細画面で購入ボタンが押された get:barcodeで読んだ
	// getLocalStorage('purchased_item_flg', initFlg.purchased_item_flg);
	// // barcode.html barcode表示：false 商品表示:true
	// getLocalStorage('show_item_flg', initFlg.show_item_flg);
	// // 設定・購入操作した最後の時間
	// getLocalStorage('passTime', initFlg.passTime);
	// // 説明ページのURL
	// getLocalStorage('page', initFlg.page);
	// // 初期起動フラグ　true:初回起動 false:次回起動以降
	// getLocalStorage('appFirst', initFlg.appFirst);
	// // 送料表示 enable:表示  disable:非表示
	// getLocalStorage('shippingCost', initFlg.shippingCost);
	// // 購入時に暗証番号を true:必要とする false:必要ない
	// getLocalStorage('inputPasscode', initFlg.inputPasscode);
	// // 暗証番号の入力が true:済んでいる false:済んでいない
	// getLocalStorage('inputedPass', initFlg.inputedPass);
	// // 注文時のキャンセル説明フラグ enable:表示　disable:非表示
	// getLocalStorage('cancelAttention', initFlg.cancelAttention);
	// // 利用者情報の誕生月を true:触った false:触ってない
	// getLocalStorage('touchMonth', initFlg.touchMonth);
	// // 利用者情報の誕生日を true:触った false:触ってない
	// getLocalStorage('touchDate', initFlg.touchDate);
	// // 暗証番号入力画面のボタン名称 order:購入する setting:設定画面へ
	// getLocalStorage('passInputBtn', initFlg.passInputBtn);
	// // 購入ボタンが buy:押された
	// getLocalStorage('kbn', initFlg.kbn);
	// // 注文情報のハッシュ初期化
	// getLocalStorage('order_params', initFlg.order_params);
	// // 戻るボタンにセットする初期値
	// getLocalStorage('before', initFlg.before);
	// // 設定・購入操作した最後の時間
	// //	getLocalStorage('passTime', initFlg.);
	// // 注文時のキャンセル説明を true:表示する false:非表示
	// getLocalStorage('cancelAttention', initFlg.cancelAttention);
	// // qr_id 初期値
	// getLocalStorage("qr_id", initFlg.qr_id);
	// // barcode読み取り結果の初期化
	// getLocalStorage('barcodeParams', initFlg.barcodeParams);
	// // 商品バージョンの初期値
	// getLocalStorage("item_version", initFlg.item_version);
	// // 顧客IDの初期値
	// getLocalStorage("customer_id", initFlg.customer_id);
	// // 注文商品情報の保存
	// getLocalStorage("order", initFlg.order);
	// // サーバからの商品情報の保存ハッシュ
	// getLocalStorage('show_item_params', initFlg.show_item_params);
	// // 保存した数量の初期化フラグ true:初期化
	// getLocalStorage('initBackAmount', initFlg.initBackAmount);
	// // お届け先が　true:存在する false:存在しない
	// //getLocalStorage('is_addressee_flg', initFlg.initBackAmount);
	// // 暗証番号関連の初期値
	// getLocalStorage('passcodeNew_customer_pass', initFlg.passcodeNew_customer_pass);
	// getLocalStorage('passcodeNew_re_pass', initFlg.passcodeNew_re_pass);
	// getLocalStorage('passcodeNew_customer_qes', initFlg.passcodeNew_customer_qes);
	// getLocalStorage('passcodeNew_customer_ans', initFlg.passcodeNew_customer_ans);
	// // お届け先の初期化
	// getLocalStorage('address_name', initFlg.address_name);
	// // 設定状況フラグ初期化
	// getLocalStorage('chSetting', initFlg.chSetting);
	// // 支払い方法のフラグ pay_card:クレジット pay_cod:代引 order_commission: 代引手数料
	// getLocalStorage('address_name', initFlg.address_name);
	// // カード登録入力値保存用ハッシュの初期化
	// getLocalStorage('scd', initFlg.scd);
	// // 生年月日の初期値
	// getLocalStorage('date', initFlg.date);
	// // 購入数量の初期値
	// getLocalStorage('order_amount', initFlg.order_amount);
	// // show_order.html 購入商品表示：true 一覧表示:false
	// getLocalStorage('show_order_flg', initFlg.show_order_flg);
	// // 購入履歴更新時間の初期化
	// getLocalStorage('final_update', initFlg.final_update);
// }

