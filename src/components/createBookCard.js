import { addClickHandler } from '../handlers/favoriteHandler';
import { isInFavorite } from '../state/favoritesState';
import createBookDto from '../dto/bookDto';

export default function createBookCard(book, isFaforiteCard=false) {
    const card = document.createElement('article');
    card.className = isFaforiteCard ? 'book-card book-card--favorite' : 'book-card';

    const coverId = book.cover_i || '';

    let cover;

    if (coverId) {
        cover = document.createElement('img');
        cover.className = 'book-cover';
        cover.setAttribute('src', `https://covers.openlibrary.org/b/id/${coverId}.jpg`);
        cover.setAttribute('alt', 'A book cover');
    } else {
        cover = document.createElement('div');
        cover.className = 'fallback';
        cover.textContent = 'No image';
    }

    const bookInfo = document.createElement('div');
    bookInfo.className = 'book-info';

    const title = document.createElement('div');
    const bookAuthor = document.createElement('div');
    const publishYear = document.createElement('div');
    
    title.className = 'book-title';
    title.textContent = book.title || '';

    bookAuthor.className = 'book-author';
    bookAuthor.textContent = book.author_name || '';

    publishYear.className = 'book-publish';
    publishYear.textContent = book.first_publish_year || '';

    bookInfo.appendChild(title);
    bookInfo.appendChild(bookAuthor);
    bookInfo.appendChild(publishYear);

    const favoriteBtn = document.createElement('button');

    favoriteBtn.classList.add('book-favorite-toggle');

    if (!isFaforiteCard) {
        favoriteBtn.classList.add('book-favorite-toggle--page');
    }

    const isFavorite = isInFavorite(book);

    isFavorite && favoriteBtn.classList.add('active');
    
    favoriteBtn.setAttribute('aria-label', isFavorite? 'Remove from favorites' : 'Add to favorites');

    const bookDto = createBookDto(book);

    favoriteBtn.setAttribute('data-book', JSON.stringify(bookDto));
    favoriteBtn.setAttribute('data-key', book.key);

    favoriteBtn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
                d="M12.6667 9.33333C13.66 8.36 14.6667 7.19333 14.6667 5.66667C14.6667 4.69421 14.2804 3.76158 13.5928 3.07394C12.9051 2.38631 11.9725 2 11 2C9.82671 2 9.00004 2.33333 8.00004 3.33333C7.00004 2.33333 6.17337 2 5.00004 2C4.02758 2 3.09495 2.38631 2.40732 3.07394C1.71968 3.76158 1.33337 4.69421 1.33337 5.66667C1.33337 7.2 2.33337 8.36667 3.33337 9.33333L8.00004 14L12.6667 9.33333Z" 
                stroke-width="1.33333" 
                stroke-linecap="round" 
                stroke-linejoin="round"
            />
        </svg>
    `;

    addClickHandler(favoriteBtn);

    card.appendChild(cover);
    card.appendChild(bookInfo);
    card.appendChild(favoriteBtn);

    return card;
}