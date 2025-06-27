<template>
  <div class="notifications-view">
    <div class="view-header">
      <h1 class="view-title">
        <Bell class="title-icon" />
        Notifications & Alerts
      </h1>
      <p class="view-description">Stay updated with the latest notifications and system alerts</p>
    </div>

    <div class="content-section">
      <div class="notifications-list">
        <div
          class="notification-item"
          v-for="notification in notifications"
          :key="notification.id"
          :class="{ unread: !notification.read }"
        >
          <div class="notification-icon">
            <component :is="notification.icon" />
          </div>
          <div class="notification-content">
            <h4>{{ notification.title }}</h4>
            <p>{{ notification.message }}</p>
            <span class="notification-time">{{ notification.time }}</span>
          </div>
          <div class="notification-actions">
            <button v-if="!notification.read" class="mark-read-btn">Mark Read</button>
          </div>
        </div>
      </div>
      <p>Stay informed about important system events and user activities.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Bell, User, Settings, FileText, CreditCard, Shield } from 'lucide-vue-next'

const notifications = ref([
  {
    id: 1,
    title: 'New User Registration',
    message: 'John Doe has joined your organization',
    icon: User,
    time: '2 minutes ago',
    read: false,
  },
  {
    id: 2,
    title: 'System Update',
    message: 'System maintenance completed successfully',
    icon: Settings,
    time: '1 hour ago',
    read: false,
  },
  {
    id: 3,
    title: 'File Uploaded',
    message: 'New document uploaded to project folder',
    icon: FileText,
    time: '3 hours ago',
    read: true,
  },
  {
    id: 4,
    title: 'Payment Received',
    message: 'Monthly subscription payment processed',
    icon: CreditCard,
    time: '1 day ago',
    read: true,
  },
  {
    id: 5,
    title: 'Security Alert',
    message: 'Login from new device detected',
    icon: Shield,
    time: '2 days ago',
    read: true,
  },
])
</script>

<style scoped>
.notifications-view {
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
  color: #f59e0b;
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

.notifications-list {
  background: var(--color-bg-primary);
  border-radius: var(--radius-lg);
  box-shadow: 0 var(--space-2) var(--space-sm) var(--color-shadow-medium);
  margin: var(--space-3xl) 0;
}

.notification-item {
  display: flex;
  align-items: flex-start;
  padding: var(--space-3xl);
  border-bottom: var(--space-1) solid var(--color-border-lighter);
  gap: var(--space-xl);
}

.notification-icon svg {
  width: var(--space-4xl);
  height: var(--space-4xl);
  color: var(--color-primary);
}

.notification-item:last-child {
  border-bottom: none;
}

.notification-item.unread {
  background: var(--color-bg-light-blue);
  border-left: var(--space-4) solid var(--color-primary);
}

.notification-icon {
  font-size: 24px;
  margin-top: var(--space-xs);
}

.notification-content {
  flex: 1;
}

.notification-content h4 {
  margin: 0 0 var(--space-sm) 0;
  color: var(--color-text-dark);
}

.notification-content p {
  margin: 0 0 var(--space-sm) 0;
  color: var(--color-text-tertiary);
  line-height: 1.4;
}

.notification-time {
  font-size: 0.85em;
  color: var(--color-text-muted);
}

.mark-read-btn {
  background: var(--color-primary);
  color: var(--color-bg-primary);
  border: none;
  padding: var(--space-6) var(--space-lg);
  border-radius: var(--radius-sm);
  cursor: pointer;
  font-size: 0.85em;
}
</style>
