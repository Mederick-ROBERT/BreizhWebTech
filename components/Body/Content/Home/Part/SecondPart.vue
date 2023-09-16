<script setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

</script>

<template>
    <section class="home--second-part">
        <div class="home--second-part-text">
            <div class="home--second-part-text-container">
                <h2 class="home--second-part-text-container-title">Security : <span class="second-part-color">Of Utmost Importance.</span></h2>
                <p class="home--second-part-text-container-presentation">At our company, the security of our websites is our top priority.
                    We are committed to ensuring maximum protection against a wide range of online threats. 
                    To achieve this, we have implemented robust measures against <span class="second-part-color">XSS (Cross-Site Scripting) attacks, CSRF (Cross-Site Request Forgery), brute force attacks, and many others.</span>
                </p>

                <p class="home--second-part-text-container-presentation">We employ <span class="second-part-color">secure coding techniques, advanced firewalls, and regularly update our systems to prevent known vulnerabilities.</span> 
                    Furthermore, we conduct routine penetration tests to identify and rectify any potential weaknesses.
                </p>
                <p class="home--second-part-text-container-presentation">We constantly vigilantly ensure that our sites remain shielded from online threats so that our users can browse with confidence. 
                    <span class="second-part-color">The security of your data and personal information is our commitment,</span> and we spare no effort to maintain it at an optimal level.
                </p>
                <NuxtLink to="/products" class="home--second-part-text-container-button">See Our Products <Icon name="uil:arrow-right" /></NuxtLink>
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