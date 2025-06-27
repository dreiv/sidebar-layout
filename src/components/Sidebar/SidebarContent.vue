<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import DashboardView from '../../views/DashboardView.vue'
import FilesView from '../../views/FilesView.vue'
import UsersView from '../../views/UsersView.vue'
import AnalyticsView from '../../views/AnalyticsView.vue'
import CalendarView from '../../views/CalendarView.vue'
import MessagesView from '../../views/MessagesView.vue'
import OrdersView from '../../views/OrdersView.vue'
import DatabaseView from '../../views/DatabaseView.vue'
import SecurityView from '../../views/SecurityView.vue'
import ReportsView from '../../views/ReportsView.vue'
import WorkflowsView from '../../views/WorkflowsView.vue'
import AutomationView from '../../views/AutomationView.vue'
import NotificationsView from '../../views/NotificationsView.vue'
import SettingsView from '../../views/SettingsView.vue'
import MainSidebarContent from './MainSidebarContent.vue'

defineProps<{ isExpanded: boolean }>()

const route = useRoute()

// Determine which sidebar content to show based on query parameter
const sidebarView = computed(() => {
  const sidebarParam = route.query.sidebar as string
  return sidebarParam || 'dashboard' // Default to dashboard instead of 'default'
})

// Component mapping
const sidebarComponents = {
  dashboard: DashboardView,
  files: FilesView,
  users: UsersView,
  analytics: AnalyticsView,
  calendar: CalendarView,
  messages: MessagesView,
  orders: OrdersView,
  database: DatabaseView,
  security: SecurityView,
  reports: ReportsView,
  workflows: WorkflowsView,
  automation: AutomationView,
  notifications: NotificationsView,
  settings: SettingsView,
  default: MainSidebarContent,
}

// Get the current component to display
const currentComponent = computed(() => {
  return (
    sidebarComponents[sidebarView.value as keyof typeof sidebarComponents] ||
    sidebarComponents.default
  )
})
</script>

<template>
  <div v-if="isExpanded" class="sidebar-content-area">
    <Transition name="route" mode="out-in">
      <component :is="currentComponent" :key="sidebarView" />
    </Transition>
  </div>
</template>

<style scoped>
/* Content area - takes remaining space when expanded */
.sidebar-content-area {
  flex: 1;
  padding: var(--space-2xl);
  overflow: auto;
  background-color: var(--color-bg-primary);
}

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  color: var(--color-text-secondary);
  font-style: italic;
}

/* Router transition styles */
.route-enter-active,
.route-leave-active {
  transition: all 0.3s ease;
}

.route-enter-from {
  opacity: 0;
  transform: translateX(var(--space-2xl));
}

.route-leave-to {
  opacity: 0;
  transform: translateX(calc(-1 * var(--space-2xl)));
}
</style>
