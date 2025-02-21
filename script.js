document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("htb");
    const modal = document.getElementById("modal");

    toggleBtn.addEventListener("click", function () {
        if (modal.classList.contains("modal--inactive")) {
            modal.classList.remove("modal--inactive");
            toggleBtn.classList.remove("header__toggle-btn--hamburger");
            toggleBtn.classList.add("header__toggle-btn--x");
        } else {
            modal.classList.add("modal--inactive");
            toggleBtn.classList.remove("header__toggle-btn--x");
            toggleBtn.classList.add("header__toggle-btn--hamburger");
        }
    });

    // إغلاق القائمة عند الضغط خارجها
    document.addEventListener("click", function (event) {
        if (!modal.contains(event.target) && !toggleBtn.contains(event.target)) {
            modal.classList.add("modal--inactive");
            toggleBtn.classList.remove("header__toggle-btn--x");
            toggleBtn.classList.add("header__toggle-btn--hamburger");
        }
    });
});