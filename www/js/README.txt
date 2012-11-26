main.js 関数一覧

// base64 encode ---------------------------------------------------------------

function encBase64(str) //=> b64_str

// base64 decode ----------------------------------------------------------------

function decBase64(b64_str) //=> str;

// JSON encode ------------------------------------------------------------------

function encJson(obj) //=> json;

// JSON decode ------------------------------------------------------------------

function decJson(json) //=> obj; // obj.params = value

// AES128 encrypt CBC -----------------------------------------------------------

function encAes(plaintext) //=> { encrypted:encrypted, key:key, iv:iv }

// AES128 decrypt CBC -----------------------------------------------------------

function decAes(str, key, iv) //=> plaintext

// ランダム文字列 ------------------------------------------------------------------

function randPass(length) //=> HEXのlength文字分の文字列

// GET受け取り --------------------------------------------------------------------

function getQuery() //=> {key:value, key:value, …}

// timeStamp から Date型文字列 -----------------------------------------------------

function getDate(timestamp) //=> 2012年10月10日

// timeStamp から DateTime型文字列 -------------------------------------------------

function getDateTime(timestamp) //=> 2012年10月10日 12:00:00


// 桁区切り -----------------------------------------------------------------------

function currency(str) //=> "10,000"