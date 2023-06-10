function moveHerta() {
    let herta = document.getElementById('herta-sprite');
    let position = 0;
    let interval = setInterval(animate, 1);

    function animate() {
        if (position == 400) {
            clearInterval(interval)
        } else {
            position++;
            herta.style.left = position + "px";
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const kuruBtn = document.getElementById('btn');
    kuruBtn.addEventListener('click', moveHerta);
});