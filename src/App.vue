<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import MainContent from './components/MainContent.vue'
import Menu from './components/Menu/Menu.vue'
import Sidebar from './components/Sidebar/Sidebar.vue'
import { useMenuState } from './composables/useMenuState'
import { useSidebarState } from './composables/useSidebarState'

const { isExpanded, width, toggle, expand, setWidth } = useSidebarState()
const { isExpanded: isMenuExpanded, toggle: toggleMenu } = useMenuState()

const handleNavigation = () => {
  if (!isExpanded.value) expand()
}
</script>

<template>
  <div class="app-layout">
    <AppHeader @toggle-menu="toggleMenu" />
    <div class="app-container">
      <Menu :is-expanded="isMenuExpanded" @toggle="toggleMenu" />

      <MainContent />

      <Sidebar
        :is-expanded="isExpanded"
        :width="width"
        @toggle="toggle"
        @navigate="handleNavigation"
        @resize="setWidth"
      />
    </div>
  </div>
</template>

<style scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.app-container {
  display: flex;
  flex-grow: 1;
  font-family: Arial, sans-serif;
  overflow: hidden;
}

/* Mobile/Tablet responsive styles */
@media (max-width: 768px) {
  .app-container {
    position: relative;
  }
}
</style>
