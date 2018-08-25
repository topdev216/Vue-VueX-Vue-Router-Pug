"use strict";

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
   * @name hoverMenuDropDown
   * @callback
   */
  var hoverMenuDropDown = function hoverMenuDropDown() {
    var hoverElements = document.querySelectorAll(".headerDropdown");

    hoverElements.forEach(function (val, idx) {
      val.addEventListener("mouseover", function (e) {
        var elem = e.currentTarget;

        elem.querySelector(".headerDropdown__wrap").classList.add("is-open");
      });
      val.addEventListener("mouseout", function (e) {
        var elem = e.currentTarget;

        elem.querySelector(".headerDropdown__wrap").classList.remove("is-open");
      });
    });
  };

  /**
   * @name dashboardTabs
   * @callback
   */
  var dashboardTabs = function dashboardTabs() {
    var buttons = document.querySelectorAll(".dashboard__tabs");

    buttons.forEach(function (val, idx) {
      val.addEventListener("click", function (e) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = buttons[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var elem = _step.value;

            elem.classList.remove("is-active");
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        e.currentTarget.classList.add("is-active");
      });
    });
  };

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

    hoverMenuDropDown();
    dashboardTabs();
  };
  initNative();
})();

/*!
*
* Include lib:
*
* */