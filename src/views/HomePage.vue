<script>
import { useBookStore } from '@/stores/useBookStore';
import HeaderComponent from "@/components/Header.vue";
import ContentContainer from "@/components/Container.vue";
import axios from "axios";

export default {
    name: 'HomePage',
    components: {
        HeaderComponent,
        ContentContainer,
    },
    data() {
        return {
            newBook: {
                title: '',
                author: '',
                status: 'in-progress',
            },
            books: [],
            bookAdded: false,
        };
    },
    computed: {
        filteredTitles() {
            if (this.newBook.author) {
                return this.books
                    .filter(book => book.author === this.newBook.author)
                    .map(book => book.title).sort();
            }
            return [...new Set(this.books.map((book) => book.title))].sort();
        },
        filteredAuthors() {
            if (this.newBook.title) {
                return this.books
                    .filter(book => book.title === this.newBook.title)
                    .map(book => book.author);
            }
            return [...new Set(this.books.map((book) => book.author))].sort();
        },
    },
    methods: {
        async fetchBooks() {
            try {
                const response = await axios.get("https://676fe818b353db80c323e297.mockapi.io/api/books/books");
                this.books = response.data;
            } catch (error) {
                console.error("Error fetching books:", error);
            }
        },
        addBook() {
            const bookStore = useBookStore();

            const selectedBook = this.books.find(
                book => book.title === this.newBook.title && book.author === this.newBook.author
            );

            if (selectedBook) {
                const updatedBook = {
                    id: selectedBook.id,
                    title: selectedBook.title,
                    author: selectedBook.author,
                    status: this.newBook.status,
                    pagesNum: selectedBook.pagesNum,
                    currentPageNum:
                        this.newBook.status === 'finished' ? selectedBook.pagesNum : 0,
                };

                bookStore.addBook(updatedBook);

                this.bookAdded = true;

                setTimeout(() => {
                    this.bookAdded = false;
                }, 3000);

            } else {
                console.error("Book not found in the list.");
            }

            this.resetSelections();
        },
        resetSelections() {
            this.newBook.title = '';
            this.newBook.author = '';
        }
    },
    mounted() {
        this.fetchBooks(); 
    },
};
</script>

<template>
    <ContentContainer>
        <HeaderComponent title="Dobrodošli u BookTracker!"
            description="Pratite što čitate, bilježite napredak i planirajte nova čitanja." />
        <main>
            <form @submit.prevent="addBook">
                <div class="form-input">
                    <label for="title">Naslov</label>
                    <select id="title" v-model="newBook.title" required>
                        <option v-for="title in filteredTitles" :key="title" :value="title">
                            {{ title }}
                        </option>
                    </select>
                </div>

                <div class="form-input">
                    <label for="author">Autor</label>
                    <select id="author" v-model="newBook.author" required>
                        <option v-for="author in filteredAuthors" :key="author" :value="author">
                            {{ author }}
                        </option>
                    </select>
                </div>

                <div class="form-input">
                    <label for="status">Status</label>
                    <select id="status" v-model="newBook.status" required>
                        <option value="in-progress">Trenutno čitam</option>
                        <option value="finished">Pročitano</option>
                    </select>
                </div>

                <div class="button-container">
                    <button type="submit">Dodaj knjigu</button>
                    <button type="button" @click="resetSelections" class="clear-button">Očisti selekciju</button>
                </div>
            </form>
            <div class="confirmation-container">
                <div v-if="bookAdded" class="confirmation-message">
                    Knjiga je uspješno dodana!
                </div>
            </div>
        </main>
    </ContentContainer>
</template>

<style scoped>

form {
    max-width: 400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: #fff;
}

label {
    font-weight: bold;
}

select,
button {
    padding: 10px;
    font-size: 1rem;
}

select{
    border-radius: 4px;
}

select:hover {
    cursor: pointer;
}

button {
    background-color: #63837f;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    width: 40%;
}

button:hover {
    background-color: #4b625f;
}

.form-input {
    display: flex;
    flex-direction: column;
}

.button-container {
    display: flex;
    justify-content: center;
    gap: 1rem;
}

.confirmation-container {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
}

.confirmation-message {
    background-color: #63837f;
    color: white;
    padding: 1rem;
    font-size: 1.2rem;
    border-radius: 4px;
}

</style>