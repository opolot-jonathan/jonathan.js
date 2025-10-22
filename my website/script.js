document.getElementById("greetBtn").addEventListener("click", function () {
  document.getElementById("greeting").textContent = "Hello there! Thanks for visiting 😊";
});

function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  document.getElementById("clock").textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock(); // Initial call




