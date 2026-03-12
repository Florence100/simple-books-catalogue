import createBookCard from './createBookCard';

export default function renderBooks(books) {
    const container = document.querySelector('.books-list');
    container.innerHTML = '';

    books.forEach((book) => {
        const card = createBookCard(book);
        container.appendChild(card);
    })
}