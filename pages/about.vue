<script setup>
import Profil from '~/components/Body/Content/About/Profil.vue';
import Information from '~/components/Body/Content/About/Information.vue';
</script>

<template>
    <div class="about--container">
        <div class="about--container-profil">
            <Profil />
        </div>
        <div class="about--container-information">
            <Information />
        </div>
    </div>
</template>

<style lang="scss">
.about--container {
    min-height: calc(4 * 100vh);
    position: relative;

    &-profil {
        position: -webkit-sticky;
        position: sticky;
        width: 25vw;
        top: 20px;
        height: calc(100vh - 5vh );
    }

    &-information {
        position: absolute;
        top: 0;
        width: 70%;
        margin-left: 25vw;
        min-height: 300vh;
        // background-color: blue;
    }
}
</style>