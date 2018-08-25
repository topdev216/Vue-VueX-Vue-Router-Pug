"use strict";

/**
 * @name initHamburger
 * @description Init hamburger logic with animated
 */
function initHamburger() {
  var btn = document.querySelector("[hamburger-js]"),
      sideBar = document.getElementById("sidebar");

  btn.addEventListener("click", function (e) {
    e.currentTarget.classList.toggle("is-active");

    sideBar.classList.toggle("is-open");
  });
}

/**
 * @name initBodyClickClosest
 * @description
 */
function initBodyClickClosest() {
  var body = document.getElementsByTagName("body")[0];

  var strSelectorClosest = ".sidebar, .hamburger";

  body.addEventListener("click", function (ev) {
    var evTarget = ev.target.closest(strSelectorClosest),
        sidebar = document.querySelectorAll(".sidebar");

    if (!evTarget) {
      sidebar.forEach(function (item) {
        item.classList.remove("is-open");
      });
    }
  });
}

/**
 * @name initPreventBehavior
 * @description
 */
function initPreventBehavior() {

  var link = document.querySelectorAll("a");

  link.forEach(function (val, idx) {

    val.addEventListener("click", function (e) {

      if (val.getAttribute("href") === "#") {
        e.preventDefault();
      }
    });
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
    initPreventBehavior();
    initBodyClickClosest();
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