const canvas = document.getElementById("rocketCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;

let countdown = 11;
let rocketY = canvas.height - 150; // Initial position of the rocket

const rocketImage = new Image();
rocketImage.src = "rocket.png"; 

// Draw rocket on canvas
function drawRocket() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    ctx.drawImage(rocketImage, canvas.width / 2 - 50, rocketY, 100, 200); // Draw the rocket
}

// Countdown function
function startCountdown() {
    const countdownElement = document.getElementById("countdown");
    const interval = setInterval(() => {
        countdownElement.innerHTML = `Count Down: ${countdown}`;
        countdown--;

        if (countdown < 0) {
            clearInterval(interval); 
            launchRocket(); // Start the rocket launch
        }
    }, 1000);
}

// Launch rocket
function launchRocket() {
    const launchInterval = setInterval(() => {
        if (rocketY > 0) {
            rocketY -= 5; // Move the rocket up
            drawRocket();
        } else {
            clearInterval(launchInterval); // Stop when the rocket reaches the top
        }
    }, 50);
}

// Start countdown when the page loads
window.onload = function() {
    startCountdown();
};
