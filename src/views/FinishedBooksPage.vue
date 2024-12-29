<script>
import HeaderComponent from "@/components/Header.vue";
import ContentContainer from "@/components/Container.vue";
import BookList from "@/components/BookList.vue";
import { useBookStore } from '@/stores/useBookStore';

export default {
    name: 'FinishedBooksPage',
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
        <HeaderComponent title="Pročitane knjige" description="Popis svih knjiga koje ste pročitali." />
        <main>
            <BookList @delete-book="handleDeleteBook" status="finished" />
        </main>
    </ContentContainer>
</template>

<style scoped>
</style>