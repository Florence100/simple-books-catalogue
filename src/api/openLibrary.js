export async function searchBooks(query) {
    const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('Network error');
    }

    const data = await response.json();

    console.log('data', data)
    return data.docs;
}