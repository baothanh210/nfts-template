import {ref} from 'vue'
let active = ref(false)
export function useIsOpen(){
    const menuMobile = document.querySelector('.menuMobile')
    const sectionHeader = document.querySelector('.sectionHeader')
    active.value = !active.value
    if(active.value){
        menuMobile.classList.remove('-left-full','w-0','absolute')
        menuMobile.classList.add('left-0','w-full','h-screen','bg-gray-200','top-0')
       
    }
    else{
        menuMobile.classList.remove('left-0','w-full','h-screen','bg-gray-200')
        menuMobile.classList.add('-left-full','w-0')
      
    }
    
    
   
}
