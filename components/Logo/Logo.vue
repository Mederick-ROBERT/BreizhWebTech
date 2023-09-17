<script setup>

</script>

<template>
    <div class="logo--content">
        <span class="logo--content-firstPart">
            BreizhWeb
            <span class="logo--content-secondPart">
                Tech
            </span>
        </span>
        <img src="~/assets/Logo.png" alt="Logo">
    </div>
</template>

<script>

export default {
    mounted() {

    }
}
</script>

<style lang='scss'>
@use "~/Style/variable.scss" as v;

.logo--content {
    font-size: 2rem;
    font-family: 'Aldrich', sans-serif;
    font-variant: small-caps;
    display: flex;
    flex-direction: row;
    height: 50px;
    align-items: center;
    gap: .5rem;
    width: fit-content;

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
