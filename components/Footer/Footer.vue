<script setup>
import LineMdTwitterXAlt from '~/components/Footer/SocialNetwork/LineMdTwitterXAlt.vue'
import LogosFacebook from '~/components/Footer/SocialNetwork/LogosFacebook.vue'
import SkillIconsInstagram from '~/components/Footer/SocialNetwork/SkillIconsInstagram.vue'
import LogosGithubIcon from '~/components/Footer/SocialNetwork/LogosGithubIcon.vue'
import LogosLinkedinIcon from '~/components/Footer/SocialNetwork/LogosLinkedinIcon.vue'

</script>

<template>
    <footer>    
        <div class="footer--container">
            <div class="footer--container-left-side">
                <logo />
                <div class="footer--container-left-side-social-network">
                    <div class="footer--container-left-side-social-network-link">
                        <a href="#"><LogosFacebook /></a>
                        <a href="#"><LineMdTwitterXAlt /></a>
                        <a href="#"><SkillIconsInstagram /></a>
                        <a href="#"><LogosGithubIcon /></a>
                        <a href="#"><LogosLinkedinIcon /></a>
                    </div>
                </div>
            </div>
            <div class="footer--container-right-side">
                <div class="footer--container-right-side-single-container">
                    <h3>Quick Link</h3>
                    <div class="footer--container-right-side-single-container-link">
                        <NuxtLink to="/">Home</NuxtLink>
                        <NuxtLink to="/products">Products</NuxtLink>
                        <NuxtLink to="/about">About</NuxtLink>
                        <NuxtLink to="/contact">Contact Us</NuxtLink>
                    </div>
                </div>
                <div class="footer--container-right-side-single-container">
                    <h3>Our Products</h3>
                    <div class="footer--container-right-side-single-container-link">
                        <NuxtLink to="/products">our services</NuxtLink>
                        <NuxtLink to="/products">Type of products</NuxtLink>
                    </div>
                </div>
                <div class="footer--container-right-side-single-container">
                    <h3>Our Compagny</h3>
                    <div class="footer--container-right-side-single-container-link">
                        <NuxtLink to="/about">About Us</NuxtLink>
                        <NuxtLink to="#">legal information</NuxtLink>
                        <NuxtLink to="#">site map</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>

export default {
    mounted() {

    }
}
</script>

<style lang='scss'>
@use '~/Style/variable.scss' as v;

.footer--container {
    margin: 1rem 3rem;
    display: flex;
    flex-direction: row;
    border-top: v.$border--bottom;
    padding: 1.5rem;
    
    &-left-side {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        &-social-network {

            &-link {
                display: flex;
                align-items: center;
                gap: 1rem;

               & a {

                    & svg {
                        width: 25px;
                        height: 25px;
                    }
                }
            } 
        }


            

    }

    &-right-side {
        flex: 3;
        display: flex;
        justify-content: space-evenly;
        gap: 1.5rem;

        &-single-container {
            display: flex;
            flex-direction: column;

            & h3 {
                color: v.$primary--color;
                font-size: 1.5rem;
                font-variant: small-caps;
            }

            &-link {
                display: flex;
                flex-direction: column;

                & a {
                    color: grey;
                    text-decoration: none;
                    font-size: 0.9rem;
                }

            }
        }
    }
}

</style>
