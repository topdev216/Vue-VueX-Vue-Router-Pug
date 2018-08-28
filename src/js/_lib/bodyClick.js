

/**
 * @name initBodyClickClosest
 * @description
 */
function initBodyClickClosest() {
  const   body    = document.getElementsByTagName("body")[0];

  const   strSelectorClosest  = ".sidebar, .hamburger";

  body.addEventListener("click", function(ev) {
    let evTarget        = ev.target.closest(strSelectorClosest),
      sidebar = document.querySelectorAll(".sidebar");

    if(!evTarget) {
      sidebar.forEach(function(item){
        item.classList.remove("is-open");
      });
    }
  });
}