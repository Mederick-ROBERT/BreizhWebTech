<script setup>

// import { useNavigationStore } from '~/store/navigation';
import { useRoute } from 'vue-router';

// const store = useNavigationStore();
const route = useRoute();

// Utilisez un watcher pour mettre à jour route lorsque l'URL change
watch(() => route.path, (newPath) => {
  route.value = newPath;
});

</script>

<template>
    <div class="navigation--container">
        <nav class="navigation--bar">
            <span class="navigation--bar-toggle-menu" @click="toggleMenuOpen"><Icon name="solar:hamburger-menu-broken" /></span>
            <span class="navigation--bar-toggle-menu-close" @click="toggleMenuClose"><Icon name="akar-icons:cross" /></span>
            <ul class="navigation--bar-menu">
                <li class="navigation--bar-menu-link">
                    <NuxtLink to="/" :class="{ 'active': route.path === '/' }" >Home<!-- @click="store.change('home')" -->
                    <div class="selected-bar"></div>
                    </NuxtLink>
                </li>
                <li class="navigation--bar-menu-link">
                    <NuxtLink to="/products" :class="{ 'active': route.path === '/products' }">Products
                    <div class="selected-bar"></div>
                    </NuxtLink>
                </li>
                <li class="navigation--bar-menu-link">
                    <NuxtLink to="/about" :class="{ 'active': route.path === '/about' }">About
                    <div class="selected-bar"></div>
                    </NuxtLink>
                </li>
                <li class="navigation--bar-menu-link">
                    <NuxtLink to="/contact" :class="{ 'active': route.path === '/contact' }">Contact
                    <div class="selected-bar"></div>
                    </NuxtLink>
                </li>    
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    methods: {
        toggleMenuOpen() {
            this.openMenu();
            this.outToggle();
            this.enterToggle();
        },
        openMenu() {
            const menu = document.querySelector('.navigation--bar-menu');
            menu.classList.toggle('openMenu');
        },
        outToggle() {
            const toggle = document.querySelector('.navigation--bar-toggle-menu');
            toggle.classList.toggle('outToogle');
        },

        toggleMenuClose() {
            this.openMenu();
            this.outToggle();
            this.enterToggle();
        }, 
        enterToggle() {
            const close = document.querySelector('.navigation--bar-toggle-menu-close');
            close.classList.toggle('enterToogle');
        }
    }
}    
</script>

<style lang="scss">
    @use "~/Style/variable.scss" as v;

.navigation--container {

    @media (max-width: 800px) {

    }
}    

.navigation--bar {
   display: flex;
   margin: 2rem 6rem;
   margin-bottom: 1rem;
   flex-direction: column;

   @media (max-width: 800px) {
         margin: 1rem 0;
    }

        &-toggle-menu {
            cursor: pointer;
            margin-left: 8vw;
            transition: transform 0.5s ease-in-out;

            svg {
                width: 48px;
                height: 48px;  

                path {
                   stroke: v.$primary--color;
                }
                
            }
            
            @media (min-width : 800px) {
                display: none;
            
            
            }
        }

        &-toggle-menu-close {
            cursor: pointer;
            margin-left: 8vw;
            transition: transform 0.5s ease-in-out;
            transform: translateX(200%);
            position: absolute;

            svg {
                width: 40px;
                height: 40px;  

                path {
                   stroke: v.$primary--color;
                }
                
            }
            
            @media (min-width : 800px) {
                display: none;
            }
        }

        &-menu {
            display: flex;
            flex-direction: row;
            gap: 2.5rem; 
            justify-content: end;


            @media (max-width: 800px) {
                transform: translateX(100%);
                transition: transform 0.5s ease-in-out;
                margin: 0;
                position: fixed;
                bottom: 0;
                right: 0;
                width: 80vw;
                max-width: 300px;
                height: calc(100vh - v.$header--height + 4px);
                z-index: 1;
                background: rgb(45,4,88);
                background: linear-gradient(110deg, rgb(18, 2, 34) 18%, rgb(34, 1, 71) 100%);

                flex-direction: column;
                justify-content: start;
                padding: 4rem 2rem;
            }    

                &-link {
                    list-style: none;
                    position: relative;

                        & a {
                            color: inherit;
                            text-decoration: none;
                            font-family: v.$font--primary;
                            font-variant: small-caps;
                            font-size: 1.5rem;
                            letter-spacing: 0.15rem;

                            &.active {
                                color: v.$primary--color;
                                font-weight: bolder;
                                
                                & .selected-bar {
                                    height: 4px;
                                    width: 100%;
                                    border-radius: 0.5rem 0.5rem 0 0;
                                    background-color: v.$primary--color;
                                    position: absolute;
                                    bottom: -1rem;

                                    @media (max-width: 800px) {
                                        border-radius: 0;
                                        height: 1px;
                                        bottom: 1px;

                                    }
                                }

                            }

                            &:hover{
                               text-shadow: 1px 0 30px white;
                            }
                        }


                }

        }
}

.openMenu {
    transform: translateX(0);
}

.outToogle {
    transform: translateY(-150%);
}

.enterToogle {
    transform: translateX(0);
}

</style>