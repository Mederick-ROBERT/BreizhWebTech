<script setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

</script>

<template>
    <div class="home--first-part">
        <div class="home--first-part-text">
            <div class="home--first-part-text-container">
                <h2 class="home--first-part-text-container-title">What technologies are we <span class="first-part-color">using ?</span></h2>
                <p class="home--first-part-text-container-presentation">For web development, we employ a set of powerful technologies. 
                    <span class="first-part-color">On the Front-end, we utilize frameworks such as Vue.js, React, and Nuxt.js,</span> which streamline the creation of dynamic and responsive user interfaces using JavaScript as the foundational language. 
                    These frameworks enable us to design modern and user-friendly web applications.
                </p>

                <p class="home--first-part-text-container-presentation"><span class="first-part-color">On the server side, we rely on Laravel,</span> a robust PHP framework, for building robust and scalable web applications. 
                    PHP serves as the primary programming language for back-end development,<span class="first-part-color"> and we store data in a MySQL database,</span> providing efficient and secure data management.
                </p>
                <p class="home--first-part-text-container-presentation">By combining these front-end and back-end technologies, we can create interactive and high-performance websites that meet the needs of our clients and end users.
                </p>
                <NuxtLink to="/products" class="home--first-part-text-container-button">See Our Products <Icon name="uil:arrow-right" /></NuxtLink>
            </div>
        </div>
        <div class="home--first-part-picture">
            <div class="home--first-part-picture-container">
                <img src="~/assets/techno.png" alt="techno">
            </div>
        </div>
    </div>
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
            x: -180,
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

        &-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            max-height: 480px;
            width: 100%;

            img {
                width: fit-content;
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