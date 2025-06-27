<template>
  <div class="view-container">
    <h1><Users class="view-header-icon" /> Users</h1>
    <div class="content-section">
      <div class="user-grid">
        <div class="user-card" v-for="user in users" :key="user.id">
          <div class="user-avatar">{{ user.avatar }}</div>
          <h3>{{ user.name }}</h3>
          <p class="user-role">{{ user.role }}</p>
          <p class="user-email">{{ user.email }}</p>
        </div>
      </div>
      <p>Manage user accounts, permissions, and access controls for your organization.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Users } from 'lucide-vue-next'

const users = ref([
  { id: 1, name: 'John Doe', role: 'Administrator', email: 'john@example.com', avatar: '👨‍💼' },
  { id: 2, name: 'Jane Smith', role: 'Developer', email: 'jane@example.com', avatar: '👩‍💻' },
  { id: 3, name: 'Mike Johnson', role: 'Designer', email: 'mike@example.com', avatar: '👨‍🎨' },
  { id: 4, name: 'Sarah Wilson', role: 'Manager', email: 'sarah@example.com', avatar: '👩‍💼' },
])
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

.user-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-3xl);
  margin: var(--space-3xl) 0;
}

.user-card {
  background: var(--color-bg-primary);
  padding: var(--space-4xl);
  border-radius: var(--radius-lg);
  box-shadow: 0 var(--space-2) var(--space-sm) var(--color-shadow-medium);
  text-align: center;
}

.user-avatar {
  font-size: var(--space-8xl);
  margin-bottom: var(--space-xl);
}

.user-card h3 {
  margin: var(--space-md) 0 var(--space-xs) 0;
  color: var(--color-text-dark);
}

.user-role {
  color: var(--color-primary);
  font-weight: 500;
  margin: var(--space-xs) 0;
}

.user-email {
  color: var(--color-text-tertiary);
  font-size: 0.9em;
}
</style>
