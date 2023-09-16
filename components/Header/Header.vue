<script setup>

import Navigation from '~/components/Header/Navigation/Navigation.vue'

</script>

<template>
    <header>
        <div class="logo--content">
                <span class="logo--content-firstPart">
                    BreizhWeb
                    <span class="logo--content-secondPart">
                        Tech
                    </span>
                </span>
                <img src="~/assets/Logo.png" alt="Logo">
            </div>
        <div>
            <Navigation />
        </div>
    </header>
    
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

.logo--content {
    font-size: 2rem;
    font-family: 'Aldrich', sans-serif;
    font-variant: small-caps;
    display: flex;
    flex-direction: row;
    height: 50px;
    align-items: center;
    gap: .5rem;

    &-firstPart {
        height: fit-content;
        display: flex;
    }

    &-secondPart {
        color: v.$primary--color;
    }

    & img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
}
    
</style>