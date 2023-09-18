<script setup>

import Navigation from '~/components/Header/Navigation/Navigation.vue'

import { useLanguageStore } from '~/store/language';

const store = useLanguageStore();

function handleChangeLanguage(language) {
    store.change(language)

    document.cookie = `language=${language}; path=/`;
    
}

</script>

<template>
    <header>
        <Logo />
        <div>
            <Navigation />
        </div>
    </header>
    <span class="change-language"><span v-on:click="handleChangeLanguage('fr')"><Icon name="twemoji:flag-france" /></span> - <span v-on:click="handleChangeLanguage('en')"><Icon name="twemoji:flag-for-flag-united-kingdom" /></span></span>
    
</template>

<style lang="scss">

@use "./Style/variable.scss" as v;
@import url(https://fonts.bunny.net/css?family=aldrich:400);

header {
    margin: 0 3rem;
    border-bottom: v.$border--bottom;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 800px) {
        margin: 0;
        padding: 0 1.5rem;
        position: fixed;
        top: 0;
        width: 100vw;
        background: linear-gradient(110deg, rgb(18, 2, 34) 18%, rgb(34, 1, 71) 100%);
        border: none;
        z-index: 99999999;
        border-bottom: 1px solid rgba(119, 0, 255, 0.432);
    }

    @media (max-width: 500px) {
        padding: 0 0.5rem;      
    }
}

.change-language {
    position: absolute;
    top: 0.5rem;
    right: 1rem;
    cursor: pointer;

    @media (max-width: 800px) {
        top: 5.5rem;
        right: 1rem;
    }
}
    
</style>