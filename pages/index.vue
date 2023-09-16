<script setup>
import Typewriter from 'typewriter-effect/dist/core';

import { ref, onMounted } from 'vue';

</script>

<template>
    <div class="home--content">
        <div class="home--content-presentation">
            <div class="home--content-presentation-text">
                <div class="typewritter--text">
                    <div class="typewritter--text-contain">
                       <p>Order or improve your site in</p>
                        <div class="typewritter--container">
                            <!-- Techno en typeWritter -->
                        </div> 
                    </div>
                    
                    <div class="other--text">
                        <p>Here you'll find everything you need to order a showcase site,
                            a complete site with Back-Office and Front-Office, 
                            or upgrade contracts for your own website ...</p>
                        <NuxtLink class="other--text-button" to="/products">Get Started <Icon name="uil:arrow-right" /> </NuxtLink>
                    </div>
                    
                </div>

            </div>
            <div class="home--content-presentation-picture">
                <div class="home--content-presentation-picture-container">
                    <img src="~/assets/head-picture.jpg" alt="head-picture">
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
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
}
</script>

<style lang="scss"> 

@use "./Style/variable.scss" as v;

.home--content {

    &-presentation {
        height: calc(100vh - v.$header--height - 2rem );
        display: flex;
        flex-direction: row;
        gap: 1rem;

            &-text {
                flex: 1;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding-right: 1rem;
                padding-left: 1rem;

                & .typewritter--text-contain {
                    display: flex;
                    align-items: baseline;
                    gap: 0.5rem;
                    font-variant: small-caps;

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
                    }
                }
            }

            &-picture {
                flex: 1;
                display: flex;
                justify-content: center;
                align-items: center;

                &-container {
                    width: 100%;
                    height: 100%;
                    max-height: 450px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    
                    & img {
                        width: fit-content;
                        height: 100%;
                        object-fit: contain;
                        border-radius: 0.5rem;
                        box-shadow: 6px 12px 20px -3px v.$primary--color;
                    }
                }
            }
    }
}

</style>