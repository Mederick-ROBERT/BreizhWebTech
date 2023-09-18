<script setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { index } from '~/Text/index'

gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
    language: String,
})

const data = index();

</script>

<template>
    <section class="home--first-part">
        <div class="home--first-part-text">
            <div class="home--first-part-text-container">
                <h2 class="home--first-part-text-container-title" v-html="props.language === 'fr' ? data.fr.firstPart.title : data.en.firstPart.title"></h2> 
                <p class="home--first-part-text-container-presentation" v-html="props.language === 'fr' ? data.fr.firstPart.first : data.en.firstPart.first">
                </p>

                <p class="home--first-part-text-container-presentation" v-html="props.language === 'fr' ? data.fr.firstPart.second : data.en.firstPart.second">
                </p>
                <p class="home--first-part-text-container-presentation" v-html="props.language === 'fr' ? data.fr.firstPart.third : data.en.firstPart.third">
                </p>
                <NuxtLink to="/products" class="home--first-part-text-container-button">{{ props.language === 'fr' ? 'Nos Produits' : 'See Our Products' }} <Icon name="uil:arrow-right" /></NuxtLink>
            </div>
        </div>
        <div class="home--first-part-picture">
            <div class="home--first-part-picture-container">
                <img src="~/assets/techno.png" alt="techno" loading="lazy">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    mounted() {
        const firstPart_text = document.querySelector('.home--first-part-text');
        const firstPart_picture = document.querySelector('.home--first-part-picture');

        gsap.to(firstPart_text, {
            scrollTrigger: {
                trigger: firstPart_text,
                start: 'top 80%',
                end: 'bottom 20%',
                // scrub: true,
                markers: false,
            },
            x: -150,
            duration: 1.5,
        })

        gsap.to(firstPart_picture, {
            scrollTrigger: {
                trigger: firstPart_text,
                start: 'top 80%',
                end: 'bottom 20%',
                // scrub: true,
                markers: false,
            },
            y: -180,
            duration: 1.5,
        })
    }
}

</script>

<style lang="scss">
@use "~/Style/variable.scss" as v;
    
.home--first-part {
    display: flex;
    flex-direction: row-reverse;
    gap: 2rem;
    min-height: 90vh;

    @media(max-width : 1000px) {
        flex-direction: column;
        gap: 4rem;
    }

    &-text {
        flex: 1;
        position: relative;
        right: -150px;

        &-container {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            justify-content: center;
            height: 100%;

            &-title {
                font-variant: small-caps;
                font-size: 1.9rem;
            }

            & .first-part-color {
                color: v.$primary--color;
            }

            &-presentation {
                white-space: break-spaces;
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
        position: relative;
        bottom: -150px;

        @media(max-width : 1000px) {
             justify-content: end;   
        }

        &-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100%;
            max-height: 480px;
            max-width: 500px;

            @media(max-width : 1000px) {
                max-height: 325px;
                max-width: 325px;
                width: 100%;
            }

            img {
                width: 100%;
                height: fit-content;
                border-radius: 0.5rem;
                object-fit: contain;
                background: rgb(63,9,107);
                background: linear-gradient(50deg, rgba(63,9,107,1) 36%, rgba(18,5,77,1) 100%);
                box-shadow: 6px 12px 20px -3px v.$primary--color;
            }
        }
    }
}

</style>