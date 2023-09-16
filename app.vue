<script setup>
useHead({
  title: 'BreizhWebTech',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
})

import Header from '~/components/Header/Header.vue'

</script>

<template>
  <div>
    <Header />
    <div class="app--container">
      <NuxtPage />
    </div>
  </div>
</template>

<style lang="scss">

@use "./Style/variable.scss" as v;

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

::-webkit-scrollbar {
    width: 10px;
    height: 10px;
}

::-webkit-scrollbar-thumb {
    border: 5px solid transparent;
    background-clip: content-box;
}

::-webkit-scrollbar-thumb:hover {
    border-radius: 10px;
    border: 3.5px solid transparent;
    background-clip: content-box;
    background-color: v.$primary--color;
}

body {
    // background-color: #181717;
    // background: rgb(24,23,23);
    // background: linear-gradient(110deg, rgba(24,23,23,1) 18%, rgb(34, 1, 71) 100%);
    background: rgb(45,4,88);
background: linear-gradient(110deg, rgb(18, 2, 34) 18%, rgb(34, 1, 71) 100%);
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: rgb(218, 215, 215);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    max-width: 1600px;
}

.app--container {
    margin: 1rem 3rem;
}

</style>
