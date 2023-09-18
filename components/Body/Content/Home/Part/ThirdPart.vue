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
    <section class="home--third-part">
        <div class="home--third-part-text">
            <div class="home--third-part-text-container">
                <h2 class="home--third-part-text-container-title" v-html="props.language === 'fr' ? data.fr.thirdPart.title : data.en.thirdPart.title"></h2>
                <p class="home--third-part-text-container-presentation" v-html="props.language === 'fr' ? data.fr.thirdPart.first : data.en.thirdPart.first">
                </p>

                <p class="home--third-part-text-container-presentation" v-html="props.language === 'fr' ? data.fr.thirdPart.second : data.en.thirdPart.second">
                </p>
                <p class="home--third-part-text-container-presentation" v-html="props.language === 'fr' ? data.fr.thirdPart.third : data.en.thirdPart.third">
                </p>
                <NuxtLink to="/products" class="home--third-part-text-container-button">{{ props.language === 'fr' ? 'Nos Produits' : 'See Our Products' }} <Icon name="uil:arrow-right" /></NuxtLink>
            </div>
        </div>
        <div class="home--third-part-picture">
            <div class="home--third-part-picture-container">
                <img src="~/assets/seo.jpg" alt="seo" loading="lazy">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    mounted() {
        const thirdPart_text = document.querySelector('.home--third-part-text');
        const thirdPart_picture = document.querySelector('.home--third-part-picture');

        gsap.to(thirdPart_text, {
            scrollTrigger: {
                trigger: thirdPart_text,
                start: 'top 80%',
                end: 'bottom 20%',
                // scrub: true,
                markers: false,
            },
            x: -180,
            duration: 1.5,
        })

        gsap.to(thirdPart_picture, {
            scrollTrigger: {
                trigger: thirdPart_text,
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
    
.home--third-part {
    display: flex;
    flex-direction: row-reverse;
    gap: 3rem;
    min-height: 90vh;

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

            & .third-part-color {
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

        &-container {
            display: flex;
            justify-content: start;
            align-items: center;
            height: 100%;
            max-height: 500px;
            width: 100%;
            max-width: 500px;

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