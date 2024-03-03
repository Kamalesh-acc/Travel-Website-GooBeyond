window.addEventListener('scroll', function() {
    document.getElementById("navbarEl").style.opacity = 1;
    document.getElementById("navbarEl").classList.add("navi-bg", "navbar-light", "shadow-lg");
    document.getElementById("navbarEl").classList.remove("transparency", "navbar-dark");

})


//-----------------------


let customerForm = document.getElementById("customer-form");
let email = document.getElementById("email").value;
let phone = document.getElementById("phone").value;
let opinion = document.getElementById("opinion").value;
customerForm.addEventListener("submit", function(event) {
    event.preventDefault();

    customerForm.style.display = "none";
    document.getElementById("submittedMessage1").classList.add("d-block");
    document.getElementById("submittedMessage2").classList.add("d-block");
});
//-----------------------footer


let footerBtn = document.getElementById("footer-btn");

footerBtn.addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("footer-input").value;
    document.getElementById("footer-input").value = "";
    document.getElementById("success-msg").classList.remove("d-none");
    console.log("Email submitted:", email);

});
/*-------------------*/
let currentIndex = 0;
const totalItems = document.querySelectorAll('.carousel-item1').length;

function updateCarousel() {
    const wrapper = document.querySelector('.carousel-wrapper');
    const itemWidth = document.querySelector('.carousel-item1').offsetWidth;
    wrapper.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
}

function nextSlide() {
    if (currentIndex < totalItems - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
}



function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalItems - 1;
    }
    updateCarousel();
}