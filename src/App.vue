<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav>
      <div class="nav-container">
        <RouterLink to="/" class="nav-link">Početna stranica</RouterLink>
        <RouterLink to="/in-progress" class="nav-link">Knjige u tijeku</RouterLink>
        <RouterLink to="/finished" class="nav-link">Pročitane knjige</RouterLink>
      </div>
    </nav>
  </header>
  <RouterView />
</template>

<style scoped>
nav {
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #353d3d;
}

.nav-container {
  display: flex;
  justify-content: center;
  width: 50vw;
}

.nav-link {
  font-size: 1.2rem;
  color: #cfd7d8;
  text-decoration: none;
  padding: 0.5rem;
  margin-left: 1rem;
  margin-right: 1rem;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #ffffff;
}

.router-link-active {
  font-weight: bold;
  text-decoration: underline;
  color: #ffffff;
}
</style>
