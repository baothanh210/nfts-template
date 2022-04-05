import {ref} from 'vue'
const active = ref(false)
export const useIsOpen = () => {
    const menuMobile = document.querySelector('.menuMobile')
    const sectionHeader = document.querySelector('.sectionHeader')
    active.value = !active.value
    if(active.value){
        // menuMobile.classList.remove('-left-full','w-0','absolute')
        menuMobile.classList.add('left-0','w-full','bg-gray-200','top-0')
    }
    else{
        menuMobile.classList.remove('left-0','w-full','bg-gray-200')
      
    }
}
