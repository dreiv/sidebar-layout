<template>
  <div class="view-container">
    <h1><LayoutDashboard class="view-header-icon" /> Dashboard</h1>
    <div class="content-section">
      <div class="stats-grid">
        <div class="stat-card">
          <h3>Total Users</h3>
          <p class="stat-number">1,247</p>
        </div>
        <div class="stat-card">
          <h3>Active Projects</h3>
          <p class="stat-number">23</p>
        </div>
        <div class="stat-card">
          <h3>Revenue</h3>
          <p class="stat-number">$12,450</p>
        </div>
      </div>
      <p>
        Welcome to your dashboard! Here you can see an overview of your system's performance and key
        metrics.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LayoutDashboard } from 'lucide-vue-next'
</script>

<style scoped>
.view-container {
  padding: var(--space-3xl);
}

h1 {
  display: flex;
  align-items: center;
  gap: var(--space-md);
}

.view-header-icon {
  width: var(--space-5xl);
  height: var(--space-5xl);
  stroke-width: 2;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space-3xl);
  margin: var(--space-3xl) 0;
}

.stat-card {
  background: var(--color-bg-primary);
  padding: var(--space-3xl);
  border-radius: var(--radius-lg);
  box-shadow: 0 var(--space-2) var(--space-sm) var(--color-shadow-medium);
  text-align: center;
}

.stat-number {
  font-size: 2em;
  font-weight: bold;
  color: var(--color-primary);
  margin: var(--space-md) 0;
}

.content-section p {
  margin-top: var(--space-3xl);
  line-height: 1.6;
  color: var(--color-text-medium);
}
</style>
