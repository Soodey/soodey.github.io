const smokeContainer = document.querySelector('.smoke-container');

function createSmoke() {
    const smoke = document.createElement('div');
    smoke.classList.add('smoke');
    smoke.style.left = Math.random() * 100 + '%';
    smoke.style.top = Math.random() * 100 + '%';
    smoke.style.animationDelay = Math.random() * 5 + 's';
    smokeContainer.appendChild(smoke);

    setTimeout(() => {
        smoke.remove();
    }, 8000); // Remove after animation duration
}

setInterval(createSmoke, 1000); // Create a smoke every second