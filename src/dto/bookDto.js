export default function bookDto(book) {
    return {
        key: book.key,
        cover_i: book.cover_i || null,
        title: book.title,
        author_name: book.author_name,
        first_publish_year: book.first_publish_year
    }
}