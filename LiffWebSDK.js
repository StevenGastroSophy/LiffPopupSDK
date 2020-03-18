/**
 * 把 不會開新視窗的 Liff SDK包成 會開新視窗的 Liff SDK
 * @param {string} liffId - your LIFF APP ID
 * @param {array} scopeArray - an array of liff api methods as string
 * @param {function} callback - function invoked when login success with userInfo as its parameter
 *
 * @example
 * const liffWeb = new LiffWeb();
 * liffWeb.init('your liff id', ['getProfile', 'getDecodedIDToken']);
 * const callback = (liffInfo) => {console.log(liffInfo.profile.displayName);console.log(liffInfo.decodedIDToken.email);}
 * liffWeb.login(callback);
 */

class LiffWeb {
  constructor() {
    this.liffId = "";
    this.scopeArray = [];
    this.setLiffInfo = () => {};
    window.liffWeb = this;
  }

  init(liffId, scopeArray) {
    this.liffId = liffId;
    this.scopeArray = scopeArray;
  }

  _getWindowSizeString() {
    const w = "575";
    const h = "600";
    // When the user clicks on a link that opens a new window using window.open. Make the window appear on the same monitor as its' parent.

    // window.screenX will give the position of the current monitor screen.
    // suppose monitor width is 1360
    // for monitor 1 window.screenX = 0;
    // for monitor 2 window.screenX = 1360;
    const dualScreenLeft =
      window.screenLeft != undefined ? window.screenLeft : window.screenX;
    const dualScreenTop =
      window.screenTop != undefined ? window.screenTop : window.screenY;

    const width = window.innerWidth
      ? window.innerWidth
      : document.documentElement.clientWidth
      ? document.documentElement.clientWidth
      : screen.width;
    const height = window.innerHeight
      ? window.innerHeight
      : document.documentElement.clientHeight
      ? document.documentElement.clientHeight
      : screen.height;

    // same monitor, the center of its parent.
    const left = width / 2 - w / 2 + dualScreenLeft;
    const top = height / 2 - h / 2 + dualScreenTop;

    return `width=${w}, height=${h}, top=${top}, left=${left}`;
  }

  login(callback = liffInfo => {}) {
    const newWindow = window.open(
      `YOUR_LOGIN_POPUP_LINK`,
      "Liff",
      this._getWindowSizeString()
    );

    // detect whether the new window is still open every 0.5 second.
    const checkNewWindow = () => {
      if (newWindow.closed) {
        handleUnexpectedClose();
        clearInterval(timer);
      }
    };
    const timer = setInterval(checkNewWindow, 500);

    if (window.focus) newWindow.focus();
    this.setLiffInfo = liffInfo => {
      if (typeof newWindow !== "undefined") {
        clearInterval(timer);
        callback(liffInfo);
        newWindow.close();
      }
    };
  }

  logout() {
    const newWindow = window.open(
      `YOUR_LOGOUT_POPUP_LINK`,
      "Liff",
      this._getWindowSizeString()
    );
    if (window.focus) newWindow.focus();
  }
}
