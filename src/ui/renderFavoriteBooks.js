import createBookCard from '../components/createBookCard';
import { getFavoritesState } from '../state/favoritesState';

export default function renderFavoriteBooks() {
    const container = document.querySelector('.favorites-list');
    container.innerHTML = '';

    const books = getFavoritesState();

    books.forEach((book) => {
        const card = createBookCard(book, true);
        container.appendChild(card);
    })
}