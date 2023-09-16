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
    <div>
        <nav class="navigation--bar">
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

<style lang="scss">
    @use "~/Style/variable.scss" as v;

.navigation--bar {
   display: flex;
   margin: 2rem 6rem;
   margin-bottom: 1rem;
   flex-direction: column;

        &-menu {
            display: flex;
            flex-direction: row;
            gap: 2.5rem; 
            justify-content: end;

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
                                }

                            }

                            &:hover{
                               text-shadow: 1px 0 30px white;
                            }
                        }


                }

        }
}

</style>