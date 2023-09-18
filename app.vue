<script setup>
import Header from '~/components/Header/Header.vue'
import Footer from '~/components/Footer/Footer.vue'

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

</script>

<template>
  <div>
    <div class="progScroll" ></div>
    <Header />
    <div class="app--container">
      <NuxtPage />
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  mounted() {
    this.scroll();
  },
  methods: {
    scroll() {
      const barre = document.querySelector('.progScroll');

      window.addEventListener('scroll', () => {
        const y = document.documentElement.scrollHeight - window.innerHeight;
        const posY = window.scrollY;
        const larg = document.documentElement.clientWidth;
        const calcul = (posY / y) * larg;

        const scale = (calcul * 100 / larg) + '%';

        barre.style.transform = `scaleX(${scale})`;
      });
    }
  }
}
</script>

<style lang="scss">

@use "./Style/variable.scss" as v;

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    overflow-x: hidden;
}

::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    background-color: rgb(34, 1, 71);

    @media(max-width: 800px) {
        display: none;
    }
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
    background: linear-gradient(105deg, rgb(18, 2, 34) 18%, rgb(34, 1, 71) 100%);
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
    margin: auto;

    @media (max-width: 800px) {
      background: linear-gradient(95deg, rgb(18, 2, 34) 18%, rgb(34, 1, 71) 100%);
    }
}

.app--container {
    margin: 1rem 3rem;

    @media(max-width : 500px) {
      margin: 1rem;
    }
}

.progScroll {
    position: fixed;
    top: 0;
    left: 0;
    height: 2px;
    border-radius: 0 .5rem .5rem 0;
    background-color: v.$primary--color;
    z-index: 999999;
    transform-origin: left;
    transform: scaleX(0%);
    width: 100%;
}

</style>
