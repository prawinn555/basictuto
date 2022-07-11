<script setup >
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo m-2" src="@/assets/logo.svg" width="35" height="35" />

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/demo1">Demo1</RouterLink>
        <RouterLink to="/demo2">Demo2</RouterLink>
        <RouterLink to="/demo3">Demo3</RouterLink>
      </nav>
    </div>
  </header>
  <div class="m-3" >
  	<RouterView />
  </div>
</template>

<style>
@import '@/assets/base.css';



header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  text-align: center;
  width: 100%;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

</style>
