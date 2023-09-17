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
}

.change-language {
    position: absolute;
    top: 0.5rem;
    right: 1rem;
    cursor: pointer;
}
    
</style>