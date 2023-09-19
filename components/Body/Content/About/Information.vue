<script setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

</script>

<template>
    <section class="information--container">
        <div class="information--container-presentation">
            <h2>Qui sommes-nous ?</h2>
            <div class="information--container-presentation-text">
                <p>Ou du moins qui suis-je ? Je m'appelle <span class="color">Médérick Robert</span> et je suis le fondateur de BreizhWebTech. Agé de 20 ans et des poussières, <span class="color">j'ai toujours était passioné par l'informatique et la technologie.</span> 
                    Pour moi, l'interet réside dans l'exploration constante et l'apprentissage, principalement dans le dévellopement web. C'est pour cela que j'ai décidé de <span class="color">créer BreizhWebTech, pour partager ma passion et mes connaissances avec vous.</span></p>
                <p>Mon voyage dans le monde du développement a commencé après l'obtention de mon baccalauréat, et après <span class="color">un petit détour chez O'clock,</span> un établissement de formation à distance, j'ai décidé de me <span class="color">lancer dans l'aventure de l'entreprenariat.</span>
                    Vous trouverez ci-dessous un aperçu de mes compétences et de mon expérience pour en savoir un peu plus sur moi...
                </p>
            </div>
            <Icon name="uil:arrow-down" class="color arrow_down" />
        </div>
        <div class="information--container-parcours">
            <h2>Mon parcours</h2>
            <div class="information--container-parcours-duration">
                <div class="information--container-parcours-duration-once first">
                    <Icon class="top-circle color" name="ic:baseline-circle" />
                    <h3>2021</h3>
                    <div class="information--container-parcours-duration-once-work">
                        <p>Obtention du Baccalauréat Scientifique</p>
                    </div>
                </div>
                <div class="information--container-parcours-duration-once second">
                    <Icon class="top-circle color" name="ic:baseline-circle" />
                    <h3>2023</h3>
                    <div class="information--container-parcours-duration-once-work">
                        <p>Formation Développeur Web Full-Stack <span><a href="https://oclock.io/" target="_blank">O'clock</a> - Titre RNCP niveau 5 (bac+2) </span></p>
                        <p>Création de BreizhWebTech <span>entreprise de développement web et web-mobile.</span></p>
                    </div>
                </div>
                <div class="information--container-parcours-duration-once third">
                    <Icon class="top-circle color" name="ic:baseline-circle" />
                    <h3>2024</h3>
                    <div class="information--container-parcours-duration-once-work">
                        <p>Formation Concepteur Développeur d'applications en alternance <span><a href="https://oclock.io/" target="_blank">O'clock</a> - Titre RNCP niveau 6 (bac+3)</span></p>
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="information--container-skills">
            <h2>Mes Compétences</h2>
            <div class="information--container-skills-list">
                <div class="information--container-skills-list-once">
                    <p><Icon name="devicon:laravel" /> 80%</p>
                    <span>Laravel</span>                    
                </div>
                <div class="information--container-skills-list-once">
                    <p><Icon name="logos:php" /> 75%</p>
                    <span>Php</span>                    
                </div>
                <div class="information--container-skills-list-once">
                    <p><Icon name="logos:mysql" /> 75%</p>
                    <span>MySql</span>                    
                </div>
                <div class="information--container-skills-list-once">
                    <p><Icon name="devicon:vuejs" /> 65%</p>
                    <span>Vue.js</span>                    
                </div>
                <div class="information--container-skills-list-once">
                    <p><Icon name="devicon:react" /> 65%</p>
                    <span>React</span>                    
                </div>
                <div class="information--container-skills-list-once">
                    <p><Icon name="logos:nuxt-icon" /> 60%</p>
                    <span>Nuxt.js</span>                    
                </div>
                
                <div class="information--container-skills-list-once">
                    <p><Icon name="logos:python" /> 20%</p>
                    <span>Python</span> 
                    <span class="color">En apprentissage</span>                           
                </div>
                <div class="information--container-skills-list-once">
                    <p><Icon name="skill-icons:react-dark" /> 15%</p>
                    <span>Rect Native</span>
                    <span class="color">En apprentissage</span>                    
                </div>

                <div class="information--container-skills-list-once">
                    <p><Icon name="logos:kotlin-icon" /> 15%</p>
                    <span>Kotlin</span> 
                    <span class="color">En apprentissage</span>                           
                </div>
                <div class="information--container-skills-list-once">
                    <p><Icon name="logos:ruby" /> 10%</p>
                    <span>Ruby</span> 
                    <span class="color">En apprentissage</span>                           
                </div>
            </div>
        </div>
        <div class="information--container-projects"> <!-- FAIRE UN SLIDER AVEC SPLIDE -->
            <h2>Mes Projets</h2>
            <div class="information--container-projects-list">
                <!-- <div class="information--container-projects-list-once">
                    <p><Icon name="logos:laravel" /> BreizhWebTech</p>
                    <span>Site vitrine de l'entreprise</span>
                </div> -->
                <div class="information--container-projects-list-once">
                    <div class="information--container-projects-list-once-picture">
                        <a href="https://devweaversync.fr" target="_blank"><img src="~/assets/devweaversync.png" alt="DevWeaverSync"></a>
                    </div>
                    <div class="information--container-projects-list-once-text">
                        <div class="">
                            <h3><a href="https://devweaversync.fr" target="_blank">DevWeaverSync</a></h3>
                            <p>Projet de fin de formation - Formation Développeur Web Full-Stack </p>
                        </div>
                        
                        <div class="information--container-projects-list-once-text-techno">
                            <Icon name="logos:laravel" /><Icon name="devicon:react" /><Icon name="devicon:sass" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    mounted() {
        const first = document.querySelector('.first');
        const second = document.querySelector('.second');
        const third = document.querySelector('.third');

        const skills = document.querySelectorAll('.information--container-skills-list-once')

        gsap.to(first, { 
            scrollTrigger: {
                trigger: first,
                start: 'top 100%',
                end: 'bottom 20%',
                // scrub: true,
                markers: false,
            },
            y: -150,
            duration: 1.5,
        });

        gsap.to(second, { 
            scrollTrigger: {
                trigger: second,
                start: 'top 100%',
                end: 'bottom 20%',
                // scrub: true,
                markers: false,
            },
            y: -150,
            duration: 1.5,
        });

        gsap.to(third, { 
            scrollTrigger: {
                trigger: third,
                start: 'top 100%',
                end: 'bottom 20%',
                // scrub: true,
                markers: false,
            },
            y: -150,
            duration: 1,
        });

        for (const skill of skills) {
            gsap.fromTo(skill, { 
                scrollTrigger: {
                    trigger: skill,
                    start: 'top 100%',
                    end: 'bottom 20%',
                    // scrub: true,
                    markers: false,
                },
                y: 150,
                duration: 1, 
            }, { 
                scrollTrigger: {
                    trigger: skill,
                    start: 'top 100%',
                    end: 'bottom 20%',
                    // scrub: true,
                    markers: false,
                },
                y: 0,
                duration: 1,    
            });
        }
    }
}
</script>

<style lang='scss'>
@use '~/Style/variable.scss' as v;

.information--container {
    margin: 1rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 5rem;
    min-height: 85vh;
    width: 100%;


    & h2 {
        // border-bottom: 1px solid v.$primary--color;
        color: v.$primary--color;
        font-size: 2.5rem;
        font-variant: small-caps;
        margin-bottom: 2rem;
        text-transform: capitalize;
    }


    &-presentation {
        display: flex;
        flex-direction: column;
        min-height: 85vh;
        justify-content: center;
        position: relative;

        & p {
            font-size: 1rem;
            margin: 1rem 0;
            
        }

    }

    &-parcours {
        display: flex;
        flex-direction: column;
        min-height: 85vh;
        justify-content: center;
        position: relative;

        &-duration {
            padding: 1rem 3rem;

            &-once {
                border-left: 1px solid rgba(128, 128, 128, 0.514);
                position: relative;
                padding: 0 2.5rem;
                padding-bottom: 2rem;
                top: 150px;

                & .top-circle {
                    position: absolute;
                    top: -.1rem;
                    left: -.5rem;
                }

                h3 {
                    font-size: 1rem;
                    font-weight: lighter;
                    position: relative;
                    top: -.3rem;
                    margin-bottom: 1rem;
                    
                }

                p {
                    font-size: 1.5rem;
                    font-variant: small-caps;
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 1rem;

                    span {
                        font-size: 0.9rem;
                        font-variant: normal;
                        font-style: italic;
                        color: v.$primary--color;

                        a {
                            text-decoration: none;
                            color: v.$primary--color;
                            transition: all 0.2s ease-in-out;

                            &:hover {
                                color: rgba(255, 255, 255, 0.699);
                            }
                        }
                    }
                }
            }
        }
    }

    &-skills {
        display: flex;
        flex-direction: column;
        min-height: 85vh;
        justify-content: center;
        position: relative;

        &-list {
            display: grid;
            grid-template-columns: repeat(5, 150px);
            gap: 2rem;


            &-once {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: fit-content;

                & p {
                    padding: 2rem;
                    border: 1px solid rgba(128, 128, 128, 0.205);
                    width: fit-content;
                    border-radius: 5rem;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    align-items: center;
                    transition: all 0.3s ease-in-out;
                    font-size: 1.1rem;

                    svg {
                        width: 5rem;
                        height: 5rem;
                    }

                    &:hover {
                        border: 1px solid v.$primary--color;
                        color: v.$primary--color;
                        transform: scale(1.05);
                    }
                }

                & span {
                    font-size: .8rem;
                    font-variant: small-caps;
                    margin-top: 0.6rem;
                }
                
            }
        }

    }

    &-projects {
        display: flex;
        flex-direction: column;
        min-height: 85vh;
        justify-content: center;
        position: relative;

        &-list {
            display: flex;
            flex-direction: column;
            gap: 1rem;

            &-once {
                display: flex;
                flex-direction: row;
                border: 1px solid rgba(128, 128, 128, 0.205);
                padding: 1rem;
                border-radius: 2rem;
                transition: all 0.3s ease-in-out;

                &-picture {
                    width: 350px;
                    height: 250px;

                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: contain;
                    }
                }

                &-text {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    margin: 2rem 1.5rem;

                    h3 {
                        font-size: 2rem;
                        margin-bottom: .5rem;

                        a {
                            color: v.$primary--color;
                            text-decoration: none;
                            transition: all 0.2s ease-in-out;

                            &:hover {
                                color: rgba(255, 255, 255, 0.699);
                            }
                        }
                    }
                }

                &:hover {
                    border: 1px solid v.$primary--color;
                }
            }
        }
    }


    .color {
        color: v.$primary--color;
    }

    .arrow_down {
        width: 3rem;
        height: 3rem;
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        animation: arrowDown 1.5s infinite ease-in-out;
    }
    
}

@keyframes arrowDown {
    0% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(1rem);
    }

    100% {
        transform: translateY(0);
    }
}

</style>
