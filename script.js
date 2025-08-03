document.addEventListener('DOMContentLoaded', () => {
    const books = [
        { title: 'Hanuman Chalisa', author: 'Tulsidas' },
        { title: 'Shiv Chalisa', author: 'Unknown' },
        { title: 'Happiness Is a Serious Problem', author: 'Dennis Prager' },
        { title: 'My Gita', author: 'Devdutt Pattanaik' },
        { title: 'Focus on What Matters', author: 'Darius Foroux' },
        { title: 'Harry Potter and the Cursed Child', author: 'J.K. Rowling' },
        { title: 'Harry Potter and the Goblet of Fire', author: 'J.K. Rowling' },
        { title: 'Harry Potter and the Order of the Phoenix', author: 'J.K. Rowling' },
        { title: 'Harry Potter and the Deathly Hallows', author: 'J.K. Rowling' }
    ];

    const bookListContainer = document.getElementById('book-list');

    const fetchCover = async (title, author) => {
        try {
            const response = await fetch(`https://bookcover.longitood.com/bookcover?book_title=${encodeURIComponent(title)}&author_name=${encodeURIComponent(author)}`);
            if (!response.ok) {
                throw new Error('Book not found');
            }
            const data = await response.json();
            return data.url;
        } catch (error) {
            console.error(`Could not find cover for "${title}":`, error);
            return 'https://via.placeholder.com/150x220.png?text=No+Cover'; // Return a placeholder URL
        }
    };

    const displayBooks = async () => {
        for (const book of books) {
            const coverUrl = await fetchCover(book.title, book.author);

            const bookCard = document.createElement('div');
            bookCard.className = 'book-card';

            const img = document.createElement('img');
            img.src = coverUrl;
            img.alt = `Cover of ${book.title}`;

            const titleElement = document.createElement('div');
            titleElement.className = 'title';
            titleElement.textContent = book.title;

            const authorElement = document.createElement('div');
            authorElement.className = 'author';
            authorElement.textContent = book.author;

            bookCard.appendChild(img);
            bookCard.appendChild(titleElement);
            bookCard.appendChild(authorElement);
            bookListContainer.appendChild(bookCard);
        }
    };

    displayBooks();
});
