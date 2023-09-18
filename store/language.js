import { defineStore } from 'pinia';

export const useLanguageStore = defineStore("language", () => {
    const cookieLanguage = useCookie('language').value
    const language = cookieLanguage ? ref(cookieLanguage) : ref('fr')
    
    function change(newLanguage) {
        language.value = newLanguage
    }

    return {language, change}
})