<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { ChevronsLeft, ChevronsRight } from 'lucide-vue-next'

import { NAVIGATION_ITEMS, type NavigationItem } from '@/constants/navigation'

defineProps<{ isExpanded: boolean }>()
const emit = defineEmits<{
  (e: 'toggle'): void
  (e: 'navigate', routeName: string): void
}>()

const route = useRoute()
const router = useRouter()

const handleNavigation = (item: NavigationItem) => {
  const currentQuery = { ...route.query }
  if (currentQuery.sidebar !== item.name) {
    emit('navigate', item.name)
    router.push({
      name: route.name,
      query: { ...currentQuery, sidebar: item.name },
    })
  }
}
</script>

<template>
  <div class="sidebar-navigation">
    <div class="sidebar-toggle" @click="emit('toggle')" :title="isExpanded ? 'Collapse' : 'Expand'">
      <component :is="isExpanded ? ChevronsRight : ChevronsLeft" class="toggle-icon" />
    </div>

    <div
      v-for="item in NAVIGATION_ITEMS"
      :key="item.name"
      class="nav-item"
      :class="{
        active:
          route.query.sidebar === item.name || (!route.query.sidebar && item.name === 'dashboard'),
      }"
      @click="handleNavigation(item)"
      :title="item.label"
    >
      <component :is="item.icon" class="nav-icon" />
    </div>
  </div>
</template>

<style scoped>
/* Navigation section - vertical strip 40px wide */
.sidebar-navigation {
  width: var(--space-7xl);
  background-color: var(--color-bg-tertiary);
  border-right: var(--space-1) solid var(--color-border-lighter);
  display: flex;
  flex-direction: column;
  padding: var(--space-md) 0;
  flex-shrink: 0;
}

/* Toggle button at the top of navigation */
.sidebar-toggle {
  width: var(--space-7xl);
  height: var(--space-7xl);
  background-color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  flex-shrink: 0;
  margin-bottom: var(--space-md);
}

.sidebar-toggle:hover {
  background-color: var(--color-primary-hover);
}

.toggle-icon {
  width: var(--space-3xl);
  height: var(--space-3xl);
  color: white;
  stroke-width: 2.5;
}

.nav-item {
  width: var(--space-7xl);
  height: var(--space-7xl);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: var(--radius-md);
  margin: var(--space-2);
  position: relative;
}

.nav-item:hover {
  background-color: var(--color-bg-hover);
}

.nav-item.active {
  background-color: var(--color-primary);
  right: calc(var(--space-4) * -1);
}

.nav-item.active .nav-icon {
  color: white;
}

.nav-icon {
  width: var(--space-3xl);
  height: var(--space-3xl);
  color: var(--color-text-dark);
  transition: color 0.2s ease;
  stroke-width: 2;
}
</style>
