<script setup>

</script>

<template>
    <div class="profil--container">
        <div class="profil--container-personal">
            <div class="profil--container-personal-presentation">
                <h2>Médérick <span class="profil-color">ROBERT</span></h2>
                <p>Fondateur de BreizhWebTech</p>
            </div>
            <div class="profil--container-personal-picture">
                <img src="~/assets/profil.png" alt="Photo de profil">
            </div>
            <div class="profil--container-personal-information">
                <p><Icon name="material-symbols:my-location"/> Eure, Normandie</p>
                <p class="not-small-caps"><Icon name="material-symbols:alternate-email-rounded" /> mederick.robert@breizhwebtech.fr</p>
            </div>
        </div>
        <div class="profil--container-social">
            <a href="https://twitter.com/Mederick_ROBERT" target="_blank"><Icon name="line-md:twitter-x-alt" /></a>
            <a href="https://www.linkedin.com/in/mederick-robert/" target="_blank"><Icon name="line-md:linkedin" /></a>    
            <a href="https://github.com/Mederick-ROBERT" target="_blank"><Icon name="line-md:github" /></a>
        </div>
        <div class="profil--container-contact">
            <NuxtLink to="/contact" class="profil--container-contact-button"><Icon name="material-symbols:mail-outline" /> Me contacter</NuxtLink>
        </div>
    </div>
</template>

<script>

export default {
    mounted() {

    }
}
</script>

<style lang='scss'>
@use '~/Style/variable.scss' as v;

.profil--container {
    width: 100%;
    height: 100%;
    border: 3px solid v.$primary--color;
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    &-personal {
        font-variant: small-caps;
        margin: 2rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;

        &-presentation {

            h2 {
               font-weight: lighter; 
            }

            p {
                font-size: 0.8rem;
            }
            
        }

        &-picture {
            width: 100%;
            margin: auto;
            height: 250px;
            
            & img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 2rem;
            }
        }

        &-information {
            display: flex;
            flex-direction: column;
            gap: .5rem;

            .not-small-caps {
                 font-variant: normal;
            }

            svg {
                
                width: 20px;
                height: 20px;
                margin-right: 0.5rem;

                path {
                    fill: v.$primary--color;
                };
            }
           
        }
    }

    &-social {
        display: flex;
        width: 80%;
        margin: auto;
        justify-content: space-evenly;


        a {
            border: 1px solid rgba(255, 255, 255, 0.637);
            border-radius: 50%;
            width: 40px;
            height: 40px;
            padding: .3rem;
            text-align: center;
            transition: all 0.3s ease-in-out;
            display: inline-block;

            svg {
                width: 15px;
                height: 15px;
                color: rgba(255, 255, 255, 0.637);
                transition: all 0.3s ease-in-out;
            }

            &:hover {
                border: 1px solid  v.$primary--color;

                & svg {
                    color: v.$primary--color;
                }
            }
        }

    }

    &-contact {
        width: 80%;
        margin: auto;
        margin-bottom: 2rem;
        margin-top: 1rem;
        text-align: center;

        &-button {
            border-radius: 2rem;
            padding: .5rem 2rem;
            transition: all 0.3s ease-in-out;
            display: inline-block;
            color: white;
            font-weight: bold;
            font-size: 0.8rem;
            text-decoration: none;
            background-color: v.$primary--color;
            display: flex;
            align-items: center;
            gap: .5rem;
            width: fit-content;
            margin: auto;

            &:hover {
               transform: scale(1.1);
            }
        }
    }

    .profil-color {
        color: v.$primary--color;
    }
}

</style>
