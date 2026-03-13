import { getFavoritesState } from '../state/favoritesState';

export default function renderFavoriteCount() {
    const books = getFavoritesState();
    const count = books.length;

    const container = document.querySelector('.favorites-count');

    if (count === 0) {
        container.textContent = 'No books saved';
    } else if (count === 1) {
        container.textContent = `${count} book saved`;
    } else {
        container.textContent = `${count} books saved`;
    }
}