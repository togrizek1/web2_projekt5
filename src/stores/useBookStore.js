import { defineStore } from 'pinia';

export const useBookStore = defineStore('bookStore', {
    state: () => ({
        books: JSON.parse(localStorage.getItem('books')) || [],
    }),

    actions: {
        addBook(book) {
            const existingBookIndex = this.books.findIndex(
                b => b.id === book.id
            );

            if (existingBookIndex > -1) {
                this.books[existingBookIndex] = { ...book };
            } else {
                this.books.push(book);
            }
            this.saveToLocalStorage();
        },
        removeBook(book) {
            this.books = this.books.filter(b => b.id !== book.id);
            this.saveToLocalStorage();
        },
        saveToLocalStorage() {
            localStorage.setItem('books', JSON.stringify(this.books));
        },
        reset() {
            this.books = [];
            this.saveToLocalStorage();
        },
    },
});