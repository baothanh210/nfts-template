import {ref} from 'vue'
const useHandleMenu = () => {
    const active = ref(false)
    const onToggleMenu = () => {
        active.value = !active.value
    }
    return { active, onToggleMenu };
}
export default useHandleMenu
