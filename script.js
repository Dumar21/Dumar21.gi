setTimeout(function() {
    // Fade out y ocultar la animación
    const container = document.getElementById('container');
    if (container) {
        container.style.animation = 'fadeOut 0.5s forwards';

        // Mostrar perfiles después de que la animación se desvanezca
        setTimeout(function() {
            container.style.display = 'none';
            document.getElementById('profiles-container').style.display = 'block';
        }, 500);
    }
}, 5000);

// Función para mostrar el contenido después de seleccionar perfil
function showContent() {
    document.getElementById('profiles-container').style.display = 'none';
    document.getElementById('content-section').style.display = 'block';
}

// Función para reproducir video al hacer clic en una miniatura
function openVideo(videoSrc) {
    const videoPlayer = document.getElementById('video-player');
    const videoContainer = document.getElementById('fullscreen-video');

    videoPlayer.src = videoSrc;
    videoContainer.classList.add('show');
    videoPlayer.play();
}

// Cerrar el video al hacer clic fuera del video o en el botón de cierre
function closeVideo() {
    const videoContainer = document.getElementById('fullscreen-video');
    const videoPlayer = document.getElementById('video-player');
    videoContainer.classList.remove('show');
    videoPlayer.pause();
    videoPlayer.src = '';
}

document.getElementById('fullscreen-video').addEventListener('click', function (event) {
    if (event.target.id === 'fullscreen-video') {
        closeVideo();
    }
});

const cantidadImagenes = 6;
let index = 1;
const portada = document.getElementById("portada");

function cambiarImagen() {
    index = (index % cantidadImagenes) + 1; // Cambia el índice de la imagen
    portada.style.opacity = "0"; // Desvanece la imagen
    setTimeout(() => {
        portada.src = `imagenes/${index}.jpg`; // Cambia la fuente de la imagen
        portada.onload = () => {
            portada.style.opacity = "1"; // Vuelve a mostrar la imagen
        };
    }, 500); // Espera 500ms antes de cambiar la imagen
}

// Cambia la imagen cada 10 segundos
setInterval(cambiarImagen, 10000);

// Inicializa la primera imagen
portada.src = `imagenes/${index}.jpg`;