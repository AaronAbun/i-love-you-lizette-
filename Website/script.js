// Optional: Add a little sparkle effect
const heart = document.querySelector('.heart');
if (heart) {
    heart.addEventListener('click', () => {
        heart.classList.add('sparkle');
        setTimeout(() => heart.classList.remove('sparkle'), 600);
    });
}
