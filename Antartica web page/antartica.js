window.addEventListener('scroll', function() {
    document.getElementById("navbarEl").style.opacity = 1;
    document.getElementById("navbarEl").classList.add("navi-bg", "navbar-light", "shadow-lg");
    document.getElementById("navbarEl").classList.remove("transparency", "navbar-dark");

})


//-----------------------


let footerBtn = document.getElementById("footer-btn");

footerBtn.addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("footer-input").value;
    document.getElementById("footer-input").value = "";
    document.getElementById("success-msg").classList.remove("d-none");
    console.log("Email submitted:", email);

});