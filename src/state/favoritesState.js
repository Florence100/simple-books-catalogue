import { getFavorites, saveFavorites } from '../services/favoritesStorage';
import createBookDto from '../dto/bookDto';

let favorites = getFavorites();

export function getFavoritesState() {
    return favorites;
}

export function toggleFavorite(book) {
    const exists = favorites.find(b => b.key === book.key);

    if (exists) {
        favorites = favorites.filter(b => b.key !== book.key);
    } else {
        const bookDto = createBookDto(book);
        favorites.push(bookDto);
    }

    saveFavorites(favorites);

    return favorites;
}

export function isInFavorite(book) {
    const exists = favorites.find(b => b.key === book.key);

    return exists ? true : false;
}