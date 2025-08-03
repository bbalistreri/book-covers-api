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
    const searchForm = document.getElementById('search-form');
    const searchResultContainer = document.getElementById('search-result');
    const bookTitleInput = document.getElementById('book-title-input');
    const authorNameInput = document.getElementById('author-name-input');

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

    const createBookCard = (title, author, coverUrl) => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';

        const img = document.createElement('img');
        img.src = coverUrl;
        img.alt = `Cover of ${title}`;

        const titleElement = document.createElement('div');
        titleElement.className = 'title';
        titleElement.textContent = title;

        const authorElement = document.createElement('div');
        authorElement.className = 'author';
        authorElement.textContent = author;

        bookCard.appendChild(img);
        bookCard.appendChild(titleElement);
        bookCard.appendChild(authorElement);
        return bookCard;
    };

    const displayBooks = async () => {
        for (const book of books) {
            const coverUrl = await fetchCover(book.title, book.author);
            const bookCard = createBookCard(book.title, book.author, coverUrl);
            bookListContainer.appendChild(bookCard);
        }
    };

    const handleSearch = async (event) => {
        event.preventDefault();
        const title = bookTitleInput.value;
        const author = authorNameInput.value;
        searchResultContainer.innerHTML = ''; // Clear previous results
        const coverUrl = await fetchCover(title, author);
        const bookCard = createBookCard(title, author, coverUrl);
        searchResultContainer.appendChild(bookCard);
    };

    const handleTabSwitching = () => {
        const tabs = document.querySelectorAll('.tab-link');
        const tabContents = document.querySelectorAll('.tab-content');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const tabId = tab.getAttribute('data-tab');

                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                tabContents.forEach(content => {
                    if (content.id === tabId) {
                        content.classList.add('active');
                    } else {
                        content.classList.remove('active');
                    }
                });
            });
        });
    };

    displayBooks();
    searchForm.addEventListener('submit', handleSearch);
    handleTabSwitching();
});
