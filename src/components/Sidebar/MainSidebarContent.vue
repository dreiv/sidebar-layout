<template>
  <div class="sidebar-view">
    <h3>Quick Start</h3>
    <p>
      Welcome! Use the sidebar navigation to access different tools and features, or explore our
      main site using the left menu.
    </p>

    <div class="quick-actions">
      <h4>Popular Features</h4>
      <div class="action-buttons">
        <button class="action-btn" @click="setDashboard">Dashboard</button>
        <button class="action-btn" @click="setUsers">User Management</button>
        <button class="action-btn" @click="setAnalytics">Analytics</button>
      </div>
    </div>

    <div class="sidebar-stats">
      <h4>System Status</h4>
      <div class="stat-item">
        <span class="stat-label">Active Users:</span>
        <span class="stat-value">1,247</span>
      </div>
      <div class="stat-item">
        <span class="stat-label">System Load:</span>
        <span class="stat-value">23%</span>
      </div>
      <div class="stat-item">
        <span class="stat-label">Uptime:</span>
        <span class="stat-value">99.9%</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

// Functions to set sidebar content
const setDashboard = () => {
  router.push({
    name: route.name,
    query: { ...route.query, sidebar: 'dashboard' },
  })
}

const setUsers = () => {
  router.push({
    name: route.name,
    query: { ...route.query, sidebar: 'users' },
  })
}

const setAnalytics = () => {
  router.push({
    name: route.name,
    query: { ...route.query, sidebar: 'analytics' },
  })
}
</script>

<style scoped>
.sidebar-view {
  padding: 1rem;
}

.sidebar-view h3 {
  color: var(--color-text-primary);
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.sidebar-view p {
  color: var(--color-text-secondary);
  line-height: 1.5;
  margin-bottom: 1.5rem;
}

.quick-actions {
  margin-bottom: 2rem;
}

.quick-actions h4 {
  color: var(--color-text-primary);
  margin-bottom: 1rem;
  font-size: 1rem;
}

.action-buttons {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.action-btn {
  padding: 0.5rem 1rem;
  background-color: var(--color-accent);
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
  font-size: 0.9rem;
}

.action-btn:hover {
  background-color: var(--color-accent-dark);
}

.sidebar-stats h4 {
  color: var(--color-text-primary);
  margin-bottom: 1rem;
  font-size: 1rem;
}

.stat-item {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--color-border-light);
}

.stat-item:last-child {
  border-bottom: none;
}

.stat-label {
  color: var(--color-text-secondary);
  font-size: 0.9rem;
}

.stat-value {
  color: var(--color-accent);
  font-weight: 600;
  font-size: 0.9rem;
}
</style>
