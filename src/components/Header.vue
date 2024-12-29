<template>
    <header>
        <h1>{{ title }}</h1> <!-- Interpolation/One-way binding -->
        <p>{{ description }}</p>
    </header>
</template>

<script>
export default {
    name: 'HeaderComponent',
    props: {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
}
</script>

<style scoped> /* scoped style */
header {
    text-align: center;
    margin-bottom: 20px;
}

header h1 {
    font-size: 2rem;
    color: #fff;
}

header p {
    font-size: 1.2rem;
    color: #fff;
}
</style>
