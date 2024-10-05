document.addEventListener("DOMContentLoaded", function () {
    // Sidenav Initialization
    const menus = document.querySelector(".sidenav");
    M.Sidenav.init(menus, { edge: "right" });
    // Modal popup
    const modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
    // 
    var elems = document.querySelectorAll(".carousel");
    var instances = M.Carousel.init(elems, {
      fullWidth: true,
      indicators: true,
    });
});
