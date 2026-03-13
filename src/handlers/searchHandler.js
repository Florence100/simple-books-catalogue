import { searchBooks } from '../services/openLibraryApi';
import renderBooks from '../ui/renderBooks';

export function initSearchHandler() {
    const searchForm = document.querySelector('.search-form');

    searchForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const input = searchForm.querySelector('.search-input');
        const query = input.value.trim();

        if (!query) return;

        const books = await searchBooks(query);

        renderBooks(books);
    })
}