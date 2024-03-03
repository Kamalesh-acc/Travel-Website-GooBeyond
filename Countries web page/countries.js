window.addEventListener('scroll', function() {
    document.getElementById("navbarEl").style.opacity = 1;
    document.getElementById("navbarEl").classList.add("navi-bg", "navbar-light", "shadow-lg");
    document.getElementById("navbarEl").classList.remove("transparency", "navbar-dark");

})

var modal = document.getElementById('myModal');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Function to close the modal when clicking the close button
function closeModal() {
    modal.style.display = 'none';
}
//-----------------------
function toggleReadMore() {
    let less = document.getElementById("countries-p-less");
    let more = document.getElementById("countries-p-more");

    more.classList.toggle("d-none");
    less.classList.toggle("d-none");
}

function toggleReadMore2() {
    let less2 = document.getElementById("countries-r2a");
    let more2 = document.getElementById("countries-r2b");

    more2.classList.toggle("d-none");
    less2.classList.toggle("d-none");
}

function toggleReadMore3() {
    let less3 = document.getElementById("countries-r3a");
    let more3 = document.getElementById("countries-r3b");

    more3.classList.toggle("d-none");
    less3.classList.toggle("d-none");
}

function toggleReadMore4() {
    let less3 = document.getElementById("countries-r4a");
    let more3 = document.getElementById("countries-r4b");

    more3.classList.toggle("d-none");
    less3.classList.toggle("d-none");
}

function toggleReadMore5() {
    let less3 = document.getElementById("countries-r5a");
    let more3 = document.getElementById("countries-r5b");

    more3.classList.toggle("d-none");
    less3.classList.toggle("d-none");
}

function toggleReadMore6() {
    let less3 = document.getElementById("countries-r6a");
    let more3 = document.getElementById("countries-r6b");

    more3.classList.toggle("d-none");
    less3.classList.toggle("d-none");
}

function toggleReadMore7() {
    let less3 = document.getElementById("countries-r7a");
    let more3 = document.getElementById("countries-r7b");

    more3.classList.toggle("d-none");
    less3.classList.toggle("d-none");
}

function toggleReadMore8() {
    let less3 = document.getElementById("countries-r8a");
    let more3 = document.getElementById("countries-r8b");

    more3.classList.toggle("d-none");
    less3.classList.toggle("d-none");
}

function toggleReadMore9() {
    let less3 = document.getElementById("countries-r9a");
    let more3 = document.getElementById("countries-r9b");

    more3.classList.toggle("d-none");
    less3.classList.toggle("d-none");
}

function toggleReadMore10() {
    let less3 = document.getElementById("countries-r10a");
    let more3 = document.getElementById("countries-r10b");

    more3.classList.toggle("d-none");
    less3.classList.toggle("d-none");
}

function toggleReadMore11() {
    let less3 = document.getElementById("countries-r11a");
    let more3 = document.getElementById("countries-r11b");

    more3.classList.toggle("d-none");
    less3.classList.toggle("d-none");
}
/*----------------------*/
let footerBtn = document.getElementById("footer-btn");

footerBtn.addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("footer-input").value;
    document.getElementById("footer-input").value = "";
    document.getElementById("success-msg").classList.remove("d-none");
    console.log("Email submitted:", email);

});
/*----------------------------------------- */
document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById('myModal');

    // Show modal after 10 seconds
    setTimeout(function() {
        modal.style.display = 'block';
    }, 10000);
});

function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}