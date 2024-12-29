<script>
import HeaderComponent from "@/components/Header.vue";
import ContentContainer from "@/components/Container.vue";

export default {
    name: 'NotFoundPage',
    components: {
        HeaderComponent,
        ContentContainer,
    },
}
</script>

<template>
    <ContentContainer>
        <HeaderComponent title="NotFound :-(" description="Zgubili ste se!" />
        <div class="container">
            <RouterLink to="/" class="nav-link">Početna stranica</RouterLink>
        </div>
    </ContentContainer>
</template>

<style scoped>
.container {
    background-color: #63837f;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 4px;
}

.container:hover {
    background-color: #4b625f;
}

.nav-link {
    font-size: 1.2rem;
    color: #ffffff;
    text-decoration: none;
    padding: 0.5rem;
    margin-left: 1rem;
    margin-right: 1rem;
    transition: color 0.3s ease;
}

</style>