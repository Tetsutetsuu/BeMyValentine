function moveButton() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    const noBtn = document.getElementById('noButton');
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

function nextPage() {
    const container = document.querySelector('.container');
    
    // Change the content of the container
    container.innerHTML = `
        <h1>See you at Binondo, Feb 15! 🏮</h1>
        <img src="https://anchorland.com.ph/wp-content/uploads/2023/01/shutterstock_1158843757-2048x1343.jpg" alt="Binondo Manila">
        <p style="color: #d63384; font-size: 1.2rem; margin-top: 15px;">This is also our Monthsary Date:> ❤️</p>
    `;
}