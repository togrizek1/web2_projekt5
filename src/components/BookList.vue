<script>
import { useBookStore } from '@/stores/useBookStore';

export default {
    name: 'BookList',
    props: {
        status: {
            type: String,
            required: true,
        },
    },
    computed: {
        books() {
            const bookStore = useBookStore();
            return bookStore.books.filter(book => book.status === this.status);
        }
    },
    methods: {
        checkPageInput(book) {
            const bookStore = useBookStore();
            if (book.currentPageNum > book.pagesNum) {
                book.currentPageNum = book.pagesNum;
            } else if (book.currentPageNum < 0) {
                book.currentPageNum = 0;
            }

            if (book.currentPageNum === book.pagesNum) {
                book.status = 'finished';
            } else if (book.currentPageNum < book.pagesNum) {
                book.status = 'in-progress';
            }

            bookStore.addBook(book);
        },
        handleStatusChange(book) {
            const bookStore = useBookStore();

            if (book.status === 'finished' && book.currentPageNum !== book.pagesNum) {
                book.currentPageNum = book.pagesNum;
            } else if (book.status === 'in-progress' && book.currentPageNum === book.pagesNum) {
                book.currentPageNum = 0;
            }

            bookStore.addBook(book);
        },
        calculateProgress(book) {
            if (book.pagesNum > 0) {
                return Math.min(Math.floor((book.currentPageNum / book.pagesNum) * 100), 100);
            }
            return 0;
        },
        handleDelete(book) {
            this.$emit('delete-book', book);
        },
    },
}
</script>

<template>
    <div v-if="books.length > 0" class="content-container">
        <div v-for="book in books" :key="book.id">
            <div class="book-container">
                <div class="book-data">
                    <div class="text-container">
                        <div class="text-title">{{ book.title }}</div>
                        <div class="text-author">{{ book.author }}</div>
                    </div>
                    <div class="form-input">
                        <label for="status">Status</label>
                        <select id="status" v-model="book.status" @change="handleStatusChange(book)">
                            <option value="in-progress">Trenutno čitam</option>
                            <option value="finished">Pročitano</option>
                        </select>
                    </div>

                    <div class="progress-section">
                        <label for="currentPage">Stranica:</label>
                        <input type="number" id="currentPage" v-model.number="book.currentPageNum" :max="book.pagesNum"
                            :min="0" class="page-input" @input="checkPageInput(book)" />
                        / {{ book.pagesNum }}
                    </div>

                    <div class="progress-bar">
                        <div class="progress-bar-fill" :style="{ width: calculateProgress(book) + '%' }"></div>
                    </div>

                    <div class="progress-percentage">
                        {{ calculateProgress(book) }}% pročitanih stranica
                    </div>

                    <div class="delete-button-container">
                        <button @click="handleDelete(book)"><span>❎</span></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.content-container {
    width: 79vw;
    height: fit-content;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.book-container {
    display: flex;
    gap: 10px;
}

.book-data {
    display: flex;
    flex-direction: column;
    background-color: #55716d;
    padding: 1rem;
    width: 290px;
    height: 290px;
    color: white;
    border-radius: 8px;
    position: relative;
}

.form-input {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
}

select {
    padding: 10px;
    font-size: 1rem;
    border-radius: 4px;
}

select:hover {
    cursor: pointer;
}

.text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #7e9995;
    border-radius: 4px;
    margin-bottom: 1rem;
    gap: 10px;
    padding: 5px;
}

.text-title {
    font-size: 1.3rem;
    font-weight: 700;
}

.progress-section {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    margin-bottom: 1rem;
}

.page-input {
    width: fit-content;
    padding: 5px;
    font-size: 1rem;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.progress-bar {
    width: 100%;
    height: 10px;   
    background-color: #ddd;
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 0.5rem;
}

.progress-bar-fill {
    height: 100%;
    background-color: #4bcd4f;
    transition: width 0.3s ease;
}

.progress-percentage {
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
}

.delete-button-container {
    position: absolute;
    top: -10px;
    right: -10px;
    z-index: 10;
}

button {
    width: 20px;
    height: 20px;
    padding: 0;
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;    
    align-items: center;
    font-size: 1.5rem;
}

button:hover {
    font-size: 1.7rem;
}

</style>
