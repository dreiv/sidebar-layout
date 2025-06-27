<script setup lang="ts">
import { computed, toRef } from 'vue'

import { useSidebarResize } from '@/composables/useSidebarResize'
import { SIDEBAR_CONFIG } from '@/constants/navigation'

import SidebarNavigation from './SidebarNavigation.vue'
import SidebarContent from './SidebarContent.vue'

const props = defineProps<{ isExpanded: boolean; width: number }>()
const emit = defineEmits<{
  (e: 'toggle'): void
  (e: 'navigate', routeName: string): void
  (e: 'resize', width: number): void
}>()

const { isResizing, dragIndicatorPosition, startResize } = useSidebarResize(
  toRef(props, 'isExpanded'),
  toRef(props, 'width'),
  (newWidth: number) => emit('resize', newWidth),
)

const sidebarStyle = computed(() => ({
  width: props.isExpanded
    ? `clamp(${SIDEBAR_CONFIG.MIN_WIDTH}px, ${props.width}px, 90vw)`
    : `${SIDEBAR_CONFIG.COLLAPSED_WIDTH}px`,
}))
</script>

<template>
  <div>
    <Transition name="backdrop">
      <div v-if="isExpanded" class="overlay-backdrop sidebar-backdrop" @click="$emit('toggle')" />
    </Transition>

    <div class="sidebar" :style="sidebarStyle">
      <div v-if="props.isExpanded" class="sidebar-resize-handle" @mousedown="startResize" />

      <div class="sidebar-content">
        <SidebarNavigation
          :is-expanded
          @toggle="$emit('toggle')"
          @navigate="$emit('navigate', $event)"
        />
        <SidebarContent :is-expanded />
      </div>

      <Teleport to="body">
        <div
          v-if="isResizing"
          class="drag-indicator"
          :style="{ left: `${dragIndicatorPosition}px` }"
        />
      </Teleport>
    </div>
  </div>
</template>

<style scoped>
/* Sidebar - fixed width based on state */
.sidebar {
  background-color: var(--color-bg-secondary);
  border-left: var(--space-1) solid var(--color-border-light);
  transition: width 0.3s ease;
  overflow: hidden;
  flex-shrink: 0;
  position: relative;
  height: calc(100vh - var(--header-height));
}

/* Resize handle */
.sidebar-resize-handle {
  position: absolute;
  top: 0;
  left: 0;
  width: var(--space-sm);
  height: 100%;
  background-color: transparent;
  cursor: col-resize;
  z-index: var(--z-resize-handle);
  display: flex;
  align-items: center;
  justify-content: center;
}

.sidebar-resize-handle::before {
  content: '⋮⋮';
  font-size: var(--space-lg);
  pointer-events: none;
  user-select: none;
}

.sidebar-resize-handle:hover {
  background-color: var(--color-bg-hover);
}

.sidebar-content {
  display: flex;
  height: 100%;
}

/* Mobile responsive styles - overlay behavior under tablet breakpoint */
@media (max-width: 768px) {
  .sidebar {
    position: fixed;
    top: var(--header-height);
    right: 0;
    height: calc(100vh - var(--header-height));
    z-index: var(--z-sidebar-mobile);
    border-left: var(--space-1) solid var(--color-border-light);
    box-shadow: calc(var(--space-4) * -1) 0 var(--space-xl) var(--color-shadow-medium);
  }
}

/* Drag indicator - global styles via teleport */
:global(.drag-indicator) {
  position: fixed;
  top: var(--header-height);
  width: var(--space-2);
  height: calc(100vh - var(--header-height));
  background-color: var(--color-primary);
  z-index: var(--z-drag-indicator);
  pointer-events: none;
}
</style>
