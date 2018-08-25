"use strict";

/**
 * @name initHamburger
 * @description Init hamburger logic with animated
 */
function initHamburger() {
  var btn = document.querySelector("[hamburger-js]");

  btn.addEventListener("click", function (e) {
    e.currentTarget.classList.toggle("is-active");
  });
}

/**
 * @description Document DOM ready.
 */
(function () {
  /**
   *
   * @type {*|jQuery|HTMLElement}
   * @private
   */
  var _document = document,
      _window = window;

  /**
   * =============================================
   * CALLBACK
   * =============================================
   */

  /**
   * =============================================
   * =============================================
   */

  /**
   * @description Init all method
   */
  var initNative = function initNative() {
    initHamburger();
    // ...
  };
  initNative();
})();

/*!
*
* Include lib:
*
* */