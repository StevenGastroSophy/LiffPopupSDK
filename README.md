# LiffPopupSDK
Liff login with a popup window

把 Liff v2 SDK用一個彈出視窗包起來，就像 Google或 FB的 SDK一樣

----
## Demo
[Login](https://hg0v6.csb.app/)

CodeSandbox:
[Login](https://codesandbox.io/s/lifflogin-hg0v6) and
[Popup](https://codesandbox.io/s/liffpopup-ye99l)

## Before you get started

### 需要準備:

* 一個彈出視窗的**頁面**: Liff v2 SDK**僅**在這一頁引入。
* 一段開啟彈出視窗的 **JS**: 負責開啟彈出視窗，將接收 **liffInfo**的 function綁到 window上讓**彈出視窗來呼叫**。
* 一個登入**頁面**: 在這裡執行**開啟彈出視窗的 JS**。

### 如何準備:

* 一個彈出視窗的**頁面**: 可以參考 **PopupDemo.html**。
* 一段開啟彈出視窗的 **JS**: 修改 **LiffWebSDK.js** 裡的 `YOUR_LOGIN_POPUP_LINK`和 `YOUR_LOGOUT_POPUP_LINK`就可以直接使用了。
* 一個登入**頁面**: 可以參考 **LoginDemo.html**。

## liffInfo

liffInfo是一個包含回傳資料的 object，由**彈出視窗**產生後傳回**主視窗**。

### liffInfo.os
相當於官方文件中的 [liff.getOS()](https://developers.line.biz/en/reference/liff/#get-os)

對應的 scope為 **'getOS'**

### liff.language
相當於官方文件中的 [liff.getLanguage()](https://developers.line.biz/en/reference/liff/#get-language)

對應的 scope為 **'getLanguage'**

### liff.version
相當於官方文件中的 [liff.getVersion()](https://developers.line.biz/en/reference/liff/#get-version)

對應的 scope為 **'getVersion'**

### liff.isInClient
相當於官方文件中的 [liff.isInClient()](https://developers.line.biz/en/reference/liff/#is-in-client)

對應的 scope為 **'isInClient'**

### liff.accessToken
相當於官方文件中的 [liff.getAccessToken()](https://developers.line.biz/en/reference/liff/#get-access-token)

對應的 scope為 **'getAccessToken'**

### liff.decodedIDToken
相當於官方文件中的 [liff.getDecodedIDToken()](https://developers.line.biz/en/reference/liff/#get-decoded-id-token)

對應的 scope為 **'getDecodedIDToken'**

> Return value 

> Gets a Promise object containing the ID token payload.

在官方文件中提到 **liff.getDecodedIDToken()**會得到一個 Promise而非單純的資料。在這裡(**PopupDemo.html**)我選擇等到 Promise **resolved**才把資料放入 **liff.decodedIDToken**，所以 **liff.decodedIDToken**是單純的資料。

### liff.profile
相當於官方文件中的 [liff.getProfile()](https://developers.line.biz/en/reference/liff/#get-profile)

對應的 scope為 **'getProfile'**

> Return value 

> Returns a Promise object that contains the user's profile information.

在官方文件中提到 **liff.getProfile()**會得到一個 Promise而非單純的資料。在這裡(**PopupDemo.html**)我選擇等到 Promise **resolved**才把資料放入 **liff.profile**，所以 **liff.profile**是單純的資料。
