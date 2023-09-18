<script setup>
import FirstPart from '~/components/Body/Content/Home/Part/FirstPart.vue';
import SecondPart from '~/components/Body/Content/Home/Part/SecondPart.vue';
import ThirdPart from '~/components/Body/Content/Home/Part/ThirdPart.vue';

import { useLanguageStore } from '~/store/language';
import { storeToRefs } from 'pinia'

const store = useLanguageStore();
const { language } = storeToRefs(store) 

</script>

<template>
    <div class="home--corps">
        <div class="home--corps-firstPart">
            <FirstPart :language="language" />
        </div> 
        
        <div class="home--corps-secondPart">
            <SecondPart :language="language" />
        </div>

        <div class="home--corps-thirdPart">
            <ThirdPart :language="language" />
        </div>
    </div>
</template>

<style lang="scss">

.home--corps {
    @media(max-width : 1000px) {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
}
    
</style>