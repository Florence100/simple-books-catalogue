import { toggleFavorite } from '../state/favoritesState';
import renderFavoriteBooks from '../ui/renderFavoriteBooks';
import renderFavoriteCount from '../ui/renderFavoriteCount';

export function addClickHandler(btn) {
    btn.addEventListener('click', (e) => {
        const bookInfo = JSON.parse(btn.getAttribute('data-book'));
        const bookKey = bookInfo.key;
        
        toggleFavorite(bookInfo);

        const btns = document.querySelectorAll(`[data-key="${bookKey}"]`);
        btns.forEach((btn) => {
            btn.classList.toggle('active');
        })

        renderFavoriteBooks();
        renderFavoriteCount();
    })
}