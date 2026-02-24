// Message button
function showMessage() {
    alert("Welcome to my website 😄");
}

// Dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// WhatsApp open
function openWhatsApp() {
    window.open("https://wa.me/919939931753", "_blank");
}

// Visitor Counter
let count = localStorage.getItem("visits");

if (count === null) {
    count = 1;
} else {
    count = Number(count) + 1;
}

localStorage.setItem("visits", count);

document.getElementById("visitorCount").innerText =
    "Visitors: " + count;
    if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js");
}