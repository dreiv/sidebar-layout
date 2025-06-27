import { ref, onUnmounted, type Ref } from 'vue'
import { SIDEBAR_CONFIG } from '@/constants/navigation'

export function useSidebarResize(
  isExpanded: Readonly<Ref<boolean>>,
  currentWidth: Readonly<Ref<number>>,
  onWidthChange: (width: number) => void,
) {
  const isResizing = ref(false)
  const dragIndicatorPosition = ref(0)

  let startX = 0
  let startWidth = 0

  const startResize = (event: MouseEvent) => {
    if (!isExpanded.value) return

    isResizing.value = true
    startX = event.clientX
    startWidth = currentWidth.value
    dragIndicatorPosition.value = startX

    document.addEventListener('mousemove', handleResize)
    document.addEventListener('mouseup', stopResize)
    document.body.style.cursor = 'col-resize'
    document.body.style.userSelect = 'none'
  }

  const handleResize = (event: MouseEvent) => {
    if (!isResizing.value) return

    const deltaX = startX - event.clientX
    const newWidth = Math.max(
      SIDEBAR_CONFIG.MIN_WIDTH,
      Math.min(SIDEBAR_CONFIG.MAX_WIDTH, startWidth + deltaX),
    )

    const constrainedDeltaX = newWidth - startWidth
    const constrainedPosition = startX - constrainedDeltaX

    dragIndicatorPosition.value = constrainedPosition
  }

  const stopResize = () => {
    if (!isResizing.value) return

    const deltaX = startX - dragIndicatorPosition.value
    const newWidth = Math.max(
      SIDEBAR_CONFIG.MIN_WIDTH,
      Math.min(SIDEBAR_CONFIG.MAX_WIDTH, startWidth + deltaX),
    )

    onWidthChange(newWidth)

    isResizing.value = false
    document.removeEventListener('mousemove', handleResize)
    document.removeEventListener('mouseup', stopResize)
    document.body.style.cursor = ''
    document.body.style.userSelect = ''
  }

  const cleanup = () => {
    document.removeEventListener('mousemove', handleResize)
    document.removeEventListener('mouseup', stopResize)
  }

  onUnmounted(cleanup)

  return {
    isResizing,
    dragIndicatorPosition,
    startResize,
    cleanup,
  }
}
