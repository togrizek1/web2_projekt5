<template>
    <div class="content-position">
        <div class="content-container">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    name: "ContentContainer",
};
</script>

<style scoped>
.content-position {
    display: flex;
    justify-content: center;
}

.content-container {
    display: flex;
    flex-direction: column;
    margin: 3rem;
    padding: 3rem;
    background-color: #353d3d;
    border-radius: 8px;
}
</style>
