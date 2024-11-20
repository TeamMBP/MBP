// Script to handle "Add to Cart" buttons
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn-add-to-cart');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Producto añadido al carrito.');
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn-flip');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('https://discord.gg/zggXydNXnU');
        });
    });
});
const audioPlayer = document.getElementById('audio-player');
const playButton = document.getElementById('play-button');
const volumeSlider = document.getElementById('volume-slider');

// Configuración inicial
audioPlayer.volume = 0.5; // Volumen inicial al 50%

// Control de reproducción (Play/Pause)
playButton.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playButton.textContent = 'Pause';
    } else {
        audioPlayer.pause();
        playButton.textContent = 'Play';
    }
});

// Control del volumen
volumeSlider.addEventListener('input', () => {
    audioPlayer.volume = volumeSlider.value;
});
