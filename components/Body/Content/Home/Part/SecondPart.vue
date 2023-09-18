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
    <section class="home--second-part">
        <div class="home--second-part-text">
            <div class="home--second-part-text-container">
                <h2 class="home--second-part-text-container-title" v-html="props.language === 'fr' ? data.fr.secondPart.title : data.en.secondPart.title"></h2>
                <p class="home--second-part-text-container-presentation" v-html="props.language === 'fr' ? data.fr.secondPart.first : data.en.secondPart.first">
                </p>

                <p class="home--second-part-text-container-presentation" v-html="props.language === 'fr' ? data.fr.secondPart.second : data.en.secondPart.second">
                </p>
                <p class="home--second-part-text-container-presentation" v-html="props.language === 'fr' ? data.fr.secondPart.third : data.en.secondPart.third">
                </p>
                <NuxtLink to="/products" class="home--second-part-text-container-button">{{ props.language === 'fr' ? 'Nos Produits' : 'See Our Products' }} <Icon name="uil:arrow-right" /></NuxtLink>
            </div>
        </div>
        <div class="home--second-part-picture">
            <div class="home--second-part-picture-container">
                <img src="~/assets/security.jpg" alt="security" loading="lazy">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    mounted() {
        const secondPart_text = document.querySelector('.home--second-part-text');
        const secondPart_picture = document.querySelector('.home--second-part-picture');

        gsap.to(secondPart_text, {
            scrollTrigger: {
                trigger: secondPart_text,
                start: 'top 80%',
                end: 'bottom 20%',
                // scrub: true,
                markers: false,
            },
            x: 180,
            duration: 1.5,
        })

        gsap.to(secondPart_picture, {
            scrollTrigger: {
                trigger: secondPart_text,
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
    
.home--second-part {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    min-height: 90vh;

    &-text {
        flex: 1;
        position: relative;
        right: 150px;

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

            & .second-part-color {
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
            justify-content: center;
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