import { searchBooks } from "../api/openLibrary";
import renderBooks from "../ui/renderBooks";

export function initSearch() {
    const searchForm = document.querySelector('.search-form');

    searchForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const input = searchForm.querySelector('.search-input');
        const query = input.value.trim();

        if (!query) return;

        const books = await searchBooks(query);

        console.log(books)

        renderBooks(books);
    })
}