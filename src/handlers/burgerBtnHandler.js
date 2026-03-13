export default function initBurgerBtnHandler() {
    const burgerBtn = document.querySelector('.open-favorite-btn');
    const favorites = document.querySelector('.favorites');
    const closeBtn = document.querySelector('.close-btn');
    const coverage = document.querySelector('.coverage');

    burgerBtn.addEventListener('click', () => {
        favorites.style.display = 'block';
        coverage.classList.add('isVisible');
    })

    closeBtn?.addEventListener('click', () => {
        favorites.style.display = 'none';
        coverage.classList.remove('isVisible');
    })

    coverage?.addEventListener('click', () => {
        favorites.style.display = 'none';
        coverage.classList.remove('isVisible');
    })
}