<script>
import HeaderComponent from "@/components/Header.vue";
import ContentContainer from "@/components/Container.vue";
import BookList from "@/components/BookList.vue";
import { useBookStore } from '@/stores/useBookStore';

export default {
    name: 'InProgressPage',
    components: {
        HeaderComponent,
        ContentContainer,
        BookList,
    },
    methods: {
        handleDeleteBook(book) {
            const bookStore = useBookStore();
            bookStore.removeBook(book);
        },
    },
}
</script>

<template>
    <ContentContainer>
        <HeaderComponent title="U tijeku" description="Popis svih knjiga koje trenutno čitate." />
        <main>
            <BookList @delete-book="handleDeleteBook" status="in-progress" />
        </main>
    </ContentContainer>
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
    width: 60px;
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
    background-color: #4caf50;
    transition: width 0.3s ease;
}

.progress-percentage {
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
}

</style>