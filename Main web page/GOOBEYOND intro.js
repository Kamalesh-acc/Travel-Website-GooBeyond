let myFormEl = document.getElementById("opinionForm");

myFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("opinionForm").style.display = "none";
    document.getElementById("submittedMessage").classList.add("d-block");
});






//-----------------------------
let greet = document.getElementById("greet");



let greetLi = ["Hey! ", "Bonjour!", "Konichiwa!", "Namaste!", "Hola!", "Sawasdee Ka!", "Howzit!"];

let index = 0;

function displayGreeting() {
    if (index < greetLi.length) {
        let greeting = greetLi[index];
        greet.textContent = greeting;
        index += 1;


        if (index === greetLi.length) {
            index = 0;
        }
    }
}


displayGreeting()
setInterval(displayGreeting, 2000);
//-----------------------
window.addEventListener('scroll', function() {
    document.getElementById("navbarEl").style.opacity = 1;
    document.getElementById("navbarEl").classList.add("navi-bg", "navbar-light", "shadow-lg");
    document.getElementById("navbarEl").classList.remove("transparency", "navbar-dark");

})


//-----------------------footer


let footerBtn = document.getElementById("footer-btn");

footerBtn.addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("footer-input").value;
    document.getElementById("footer-input").value = "";
    document.getElementById("success-msg").classList.remove("d-none");
    console.log("Email submitted:", email);

});