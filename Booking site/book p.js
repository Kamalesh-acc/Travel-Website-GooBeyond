let totalTxt = document.getElementById("total-txt");
let total = 0;
let seats = document.getElementById("bookedd-seats");
let s = false;
let d = false;

let bookedDate = document.getElementById("bookedd-date");
let dateSubmitted = "";

function updateDate(date) {
    bookedDate.textContent = date;
    dateSubmitted = date;
}

function plus() {
    total++;
    updateSeatCount();
}

function minus() {
    if (total > 0) {
        total--;
        updateSeatCount();
    }
}

function updateSeatCount() {
    totalTxt.textContent = total;
    seats.textContent = total;
}

let seatErr = document.getElementById("seatErr");

function checkSubmitSeat() {
    if (total === 0) {
        seatErr.classList.remove("d-none");
        return false;
    }
    seatErr.classList.add("d-none");
    return true;
}

let dateErr = document.getElementById("dateErr");

function checkSubmitdate() {
    if (dateSubmitted === "") {
        dateErr.classList.remove("d-none");
        return false;
    }
    dateErr.classList.add("d-none");
    return true;
}

function submitted() {
    if (s && d) {
        $('#confirmationModal').modal('show');
    }
}

document.getElementById("book-form").addEventListener("submit", function(event) {
    event.preventDefault();
    s = checkSubmitSeat();
    d = checkSubmitdate();
    submitted();
});
//--------------------//

function toggleActive(button) {
    var activeButton = document.querySelector(".book-button.active");
    if (activeButton) {
        activeButton.classList.remove("active");
    }
    button.classList.add("active");
}