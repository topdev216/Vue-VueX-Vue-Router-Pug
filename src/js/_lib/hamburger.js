

/**
 * @name initHamburger
 * @description Init hamburger logic with animated
 */
function initHamburger() {
  const btn = document.querySelector("[hamburger-js]"),
    sideBar = document.getElementById("sidebar");

  btn.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("is-active");

    sideBar.classList.toggle("is-open");
  });
}