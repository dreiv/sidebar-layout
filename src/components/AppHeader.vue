<template>
  <header class="app-header">
    <div class="header-left">
      <button class="menu-btn" @click="$emit('toggleMenu')">
        <Menu />
      </button>
      <div class="logo">
        <Box />
      </div>
      <span class="app-name">MoKy</span>
    </div>
    <div class="header-right">
      <button class="header-action-btn">
        <Search />
      </button>
      <button class="header-action-btn">
        <Bell />
      </button>
      <button class="header-action-btn">
        <HelpCircle />
      </button>
      <div class="user-menu">
        <img src="https://i.pravatar.cc/40" alt="User Avatar" class="user-avatar" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Box, Search, Bell, HelpCircle, Menu } from 'lucide-vue-next'

defineEmits<{ (e: 'toggleMenu'): void }>()
</script>

<style scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-primary);
  color: white;
  padding: 0 var(--space-3xl);
  height: var(--header-height);
  flex-shrink: 0;
  position: relative;
  z-index: var(--z-header);
}

.header-left,
.header-right {
  display: flex;
  align-items: center;
  gap: var(--space-xl);
}

.logo {
  width: var(--space-5xl);
  height: var(--space-5xl);
}

.logo svg {
  width: 100%;
  height: 100%;
}

.app-name {
  font-size: var(--space-3xl);
  font-weight: bold;
}

.menu-btn {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: var(--space-sm);
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* Hide menu button on desktop */
@media (min-width: 1200px) {
  .menu-btn {
    display: none;
  }
}

.header-action-btn {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: var(--space-sm);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header-action-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.user-menu {
  display: flex;
  align-items: center;
}

.user-avatar {
  width: var(--space-7xl);
  height: var(--space-7xl);
  border-radius: 50%;
  border: 2px solid white;
}
</style>
