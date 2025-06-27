import { useLocalStorage } from '@vueuse/core'
import { SIDEBAR_CONFIG } from '@/constants/navigation'

export function useSidebarState() {
  const isExpanded = useLocalStorage('sidebar-expanded', false)
  const width = useLocalStorage('sidebar-width', SIDEBAR_CONFIG.DEFAULT_WIDTH)

  const toggle = () => {
    isExpanded.value = !isExpanded.value
  }

  const expand = () => {
    isExpanded.value = true
  }

  const collapse = () => {
    isExpanded.value = false
  }

  const setWidth = (newWidth: number) => {
    const constrainedWidth = Math.max(
      SIDEBAR_CONFIG.MIN_WIDTH,
      Math.min(SIDEBAR_CONFIG.MAX_WIDTH, newWidth),
    )
    width.value = constrainedWidth
  }

  return {
    isExpanded,
    width,
    toggle,
    expand,
    collapse,
    setWidth,
  }
}
