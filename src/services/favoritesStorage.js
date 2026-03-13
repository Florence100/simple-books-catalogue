const KEY = 'favoriteBooks';

export function getFavorites() {
    return JSON.parse(localStorage.getItem(KEY)) || [];
}

export function saveFavorites(books) {
    localStorage.setItem(KEY, JSON.stringify(books));
}