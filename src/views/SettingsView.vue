<template>
  <div class="settings-view">
    <div class="view-header">
      <h1 class="view-title">
        <Settings class="title-icon" />
        Application Settings
      </h1>
      <p class="view-description">Configure your application preferences and account settings</p>
    </div>

    <div class="content-section">
      <div class="settings-sections">
        <div class="settings-group">
          <h3>Account Settings</h3>
          <div class="setting-item">
            <label>Profile Picture</label>
            <button class="setting-button">Upload New</button>
          </div>
          <div class="setting-item">
            <label>Email Notifications</label>
            <input type="checkbox" checked />
          </div>
        </div>

        <div class="settings-group">
          <h3>Application Settings</h3>
          <div class="setting-item">
            <label>Theme</label>
            <select class="setting-select">
              <option>Light</option>
              <option>Dark</option>
              <option>Auto</option>
            </select>
          </div>
          <div class="setting-item">
            <label>Language</label>
            <select class="setting-select">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
          </div>
        </div>
      </div>
      <p>Customize your experience and manage system preferences.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Settings } from 'lucide-vue-next'
</script>

<style scoped>
.settings-view {
  padding: 1.5rem;
  max-width: 100%;
}

.view-header {
  margin-bottom: 2rem;
}

.view-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.875rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 0.5rem 0;
}

.title-icon {
  width: 2rem;
  height: 2rem;
  color: #6b7280;
}

.view-description {
  color: #6b7280;
  font-size: 1rem;
  margin: 0;
}

.content-section {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.view-container {
  padding: var(--space-3xl);
}

h1 {
  display: flex;
  align-items: center;
  gap: var(--space-lg);
  color: var(--color-text-dark);
}

.settings-sections {
  margin: var(--space-3xl) 0;
}

.settings-group {
  background: var(--color-bg-primary);
  padding: var(--space-4xl);
  border-radius: var(--radius-lg);
  box-shadow: 0 var(--space-2) var(--space-sm) var(--color-shadow-medium);
  margin-bottom: var(--space-3xl);
}

.settings-group h3 {
  margin-bottom: var(--space-3xl);
  color: var(--color-text-dark);
  border-bottom: var(--space-1) solid var(--color-border-lighter);
  padding-bottom: var(--space-md);
}

.setting-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-xl) 0;
  border-bottom: var(--space-1) solid var(--color-border-gray);
}

.setting-item:last-child {
  border-bottom: none;
}

.setting-button {
  background: var(--color-primary);
  color: var(--color-bg-primary);
  border: none;
  padding: var(--space-sm) var(--space-2xl);
  border-radius: var(--radius-sm);
  cursor: pointer;
}

.setting-select {
  padding: var(--space-sm) var(--space-lg);
  border: var(--space-1) solid var(--color-border-light);
  border-radius: var(--radius-sm);
}
</style>
