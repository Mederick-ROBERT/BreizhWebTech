<script setup>
useHead({
  title: 'BreizhWebTech',
  lang: 'fr',
  meta: [
    { name: 'description', content: 'Site Officiel de BreizhWebTech. Venez commander votre site, l\'améliorer ou le remettre au gout du jour.' }
  ],
})

useSeoMeta({
  title: 'BreizhWebTech',
  ogTitle: 'BreizhWebTech',
  description: 'Site Officiel de BreizhWebTech. Venez commander votre site, l\'améliorer ou le remettre au gout du jour.',
  ogDescription: 'Site Officiel de BreizhWebTech. Venez commander votre site, l\'améliorer ou le remettre au gout du jour.',
})

import Header from '~/components/Header/Header.vue'
import Footer from '~/components/Footer/Footer.vue'

</script>

<template>
  <div>
    <Header />
    <div class="app--container">
      <NuxtPage />
    </div>
    <Footer />
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
    background-color: rgb(34, 1, 71);
}

::-webkit-scrollbar-thumb {
    border: 5px solid rgb(34, 1, 71);
    background-clip: content-box;
}

::-webkit-scrollbar-thumb:hover {
    border-radius: 10px;
    border: 3.5px solid rgb(34, 1, 71);
    background-clip: content-box;
    background-color: v.$primary--color;
}

body {
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
    scrollbar-gutter: stable both-edges;
}

.app--container {
    margin: 1rem 3rem;
}



</style>
