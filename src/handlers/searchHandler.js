import { searchBooks } from '../services/openLibraryApi';
import renderBooks from '../ui/renderBooks';
import { renderLoading, renderEmptyQuery, renderNotFound, renderError } from '../ui/renderState';

export default function initSearchHandler() {
    const searchForm = document.querySelector('.search-form');

    searchForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const input = searchForm.querySelector('.search-input');
        const query = input.value.trim();

        if (!query) {
            renderEmptyQuery();
            return;
        }

        const searchBtn = searchForm.querySelector('.search-btn');

        try {
            renderLoading();
            searchBtn.setAttribute('disabled', '');

            const books = await searchBooks(query);

            if (!books.length) {
                renderNotFound();
                return;
            }

            renderBooks(books);
        } catch(err) {
            renderError();
        } finally {
            searchBtn.removeAttribute('disabled');
        }
    })
}