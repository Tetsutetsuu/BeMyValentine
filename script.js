function moveButton() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    const noBtn = document.getElementById('noButton');
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

function nextPage() {
    alert("Yay! I'll pick you up at 7! ❤️");
}