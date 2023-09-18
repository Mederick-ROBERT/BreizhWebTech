<script setup>
import Typewriter from 'typewriter-effect/dist/core';

import HomeCorps from '~/components/Body/Content/Home/HomeCorps.vue';
// import { ref, computed } from 'vue';

import { index } from '~/Text/index'

import { useLanguageStore } from '~/store/language';
import { storeToRefs } from 'pinia'

const store = useLanguageStore();
const { language } = storeToRefs(store)    // permet de récupérer la valeur de la variable language dans le store dynamiquement

const data = index();

</script>

<template>
    <div class="home--content">
        <div class="home--content-presentation">
            <div class="home--content-presentation-text">
                <div class="typewritter--text">
                    <div class="typewritter--text-contain">
                        <p> {{ language === 'fr' ? data.fr.title : data.en.title }} <span class="typewritter--container"><!-- Techno en typeWritter --></span></p>
                    </div>
                    
                    <div class="other--text">
                        <p>{{ language === 'fr' ? data.fr.presentation : data.en.presentation }}</p>
                        <NuxtLink class="other--text-button" to="/products">{{ language === 'fr' ? 'Commencer' : 'Get Started' }} <Icon name="uil:arrow-right" /> </NuxtLink>
                    </div>
                    
                </div>

            </div>
            <div class="home--content-presentation-picture">
                <div class="home--content-presentation-picture-container">
                    <img src="~/assets/head-picture.jpg" alt="head-picture">
                </div>
            </div>
        </div>

        <div class="home--content-corps">
            <HomeCorps />
        </div>
    </div>  
</template>

<script>
export default defineComponent ({
  mounted() {
    new Typewriter('.typewritter--container', {
    strings: ['Laravel', 'Vue.js', 'React', 'Php', 'MySQL', 'Nuxt.js'],
    autoStart: true,
    loop: true,
    deleteSpeed: 50,
    delay: 100,
    pauseFor: 1000,
    cursor: '_',
    wrapperClassName: 'typewritter--wrapper'

    }) 
  }
})
</script>

<style lang="scss"> 

@use "./Style/variable.scss" as v;

.home--content {

    &-presentation {
        height: calc(100vh - v.$header--height - 2rem );
        display: flex;
        flex-direction: row;
        gap: 1rem;

        @media(max-width : 1000px) {
            flex-direction: column;
            gap: 1.5rem;
            margin-bottom: 8rem;
        }

        @media(max-width: 1300px) {
            gap: 2.5rem;
        }

        @media(max-width: 800px) {
            margin-top: calc(v.$header--height + 5vh) ;
            height: fit-content;
            margin-bottom: 0;
        }

            &-text {
                flex: 1;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding-right: 1rem;
                padding-left: 1rem;

                @media(max-width: 1300px) {
                    max-width: 600px; 
                }

                @media(max-width: 1000px) {
                    max-height: 280px; 
                    justify-content: center;
                }

                @media(max-width : 500px) {
                    max-height: 100%;
                }

                & .typewritter--text-contain {
                    display: flex;
                    align-items: baseline;
                    gap: 0.5rem;
                    font-variant: small-caps;
                    min-width: 720px;

                    @media(max-width: 1300px) {
                        min-width: 0;
                        max-width: 600px;
                    }

                    & p {
                        font-size: 1.8rem;
                    }
                }


                & .typewritter--container {
                    font-size: 2rem;
                    font-weight: bold;
                    color: v.$primary--color;
                    font-family: 'Montserrat', sans-serif;
                }


                & .other--text {
                    margin-top: 2rem;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;

                    & p {
                        white-space: break-spaces;
                        font-size: 1rem;
                    }

                    &-button {
                        color: white;
                        background-color: v.$primary--color;
                        text-decoration: none;
                        font-variant: small-caps;
                        padding: 0.5rem 1rem;
                        border-radius: 0.3rem;
                        width: fit-content;

                        &:hover {
                            transition: background-color 0.5s;
                            background-color: v.$primary--color-bis;
                            box-shadow: 7px 14px 15px -3px rgba(0, 0, 0, 0.5);
                        }
                    }
                }
            }

            &-picture {
                flex: 1;
                display: flex;
                justify-content: center;
                align-items: center;

                @media(max-width : 1000px) {
                    justify-content: end;
                }

                &-container {
                    width: 100%;
                    max-width: 550px;
                    height: fit-content;
                    max-height: 450px;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    @media(max-width : 1000px) {
                        max-width: 400px;
                        max-height: 400px;
                    }
                    
                    & img {
                        width: 100%;
                        height: 100%;
                        object-fit: contain;
                        border-radius: 0.5rem;
                        box-shadow: 6px 12px 20px -3px v.$primary--color;
                    }
                }
            }
    }

    &-corps {
        margin-top: 5rem;

        @media(max-width : 500px) {
            margin-top: 2rem;
        }
    }
}

</style>