

/**
 * @description Document DOM ready.
 */
(function() {
  /**
   *
   * @type {*|jQuery|HTMLElement}
   * @private
   */
  const _document = document,
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
  const hoverMenuDropDown = () => {
    const hoverElements = document.querySelectorAll(".headerDropdown");

    hoverElements.forEach((val, idx) => {
      val.addEventListener("mouseover", (e) => {
        const elem = e.currentTarget;

        elem.querySelector(".headerDropdown__wrap").classList.add("is-open");
      });
      val.addEventListener("mouseout", (e) => {
        const elem = e.currentTarget;

        elem.querySelector(".headerDropdown__wrap").classList.remove("is-open");
      });
    });
  };


  /**
   * @name dashboardTabs
   * @callback
   */
  const dashboardTabs = () => {
    const buttons = document.querySelectorAll(".dashboard__tabs");

    buttons.forEach((val, idx) => {
      val.addEventListener("click", (e) => {
        for(let elem of buttons) {
          elem.classList.remove("is-active");
        }
        e.currentTarget.classList.add("is-active");
      });
    })
  };

  /**
   * =============================================
   * =============================================
   */


  /**
   * @description Init all method
   */
  const initNative = () => {
    initPreventBehavior();
    initBodyClickClosest();
    initHamburger();
    // ...

    hoverMenuDropDown();
    dashboardTabs();
  };
  initNative();
})();
