import { ref } from 'vue'

const isMenuExpanded = ref(false)

export function useMenuState() {
  const toggle = () => {
    isMenuExpanded.value = !isMenuExpanded.value
  }

  const open = () => {
    isMenuExpanded.value = true
  }

  const close = () => {
    isMenuExpanded.value = false
  }

  return {
    isExpanded: isMenuExpanded,
    toggle,
    open,
    close,
  }
}
