<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  Search,
  User,
  Clock,
  FileText,
  Star,
  HelpCircle,
  MessageSquare,
  Settings,
  LogOut,
  ChevronRight,
  Bell,
  Calendar,
  Bookmark,
} from 'lucide-vue-next'
import { MAIN_MENU_ITEMS } from '../../constants/navigation'

defineProps<{ isExpanded: boolean }>()
defineEmits<{ (e: 'toggle'): void }>()

const searchQuery = ref('')

// Mock data for different sections
const recentItems = ref([
  { id: 1, name: 'Project Alpha Report', icon: FileText, time: '2 hours ago' },
  { id: 2, name: 'Team Meeting Notes', icon: FileText, time: '1 day ago' },
  { id: 3, name: 'Budget Analysis', icon: FileText, time: '3 days ago' },
  { id: 4, name: 'Customer Database Export', icon: FileText, time: '1 week ago' },
  { id: 5, name: 'Marketing Campaign Results', icon: FileText, time: '2 weeks ago' },
  { id: 6, name: 'Sales Quarterly Review', icon: FileText, time: '3 weeks ago' },
])

// Computed property to filter recent items based on search query
const filteredRecentItems = computed(() => {
  if (!searchQuery.value.trim()) {
    return recentItems.value.slice(0, 3) // Show only first 3 items when no search
  }

  return recentItems.value.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.value.toLowerCase()),
  )
})

const favoriteItems = ref([
  { id: 1, name: 'Dashboard Overview', icon: Star, path: '/about?sidebar=dashboard' },
  { id: 2, name: 'User Management', icon: User, path: '/about?sidebar=users' },
  { id: 3, name: 'Analytics Report', icon: FileText, path: '/about?sidebar=analytics' },
])

const quickActions = ref([
  { id: 1, name: 'Schedule Meeting', icon: Calendar, action: 'schedule' },
  { id: 2, name: 'Create Report', icon: FileText, action: 'create' },
  { id: 3, name: 'View Notifications', icon: Bell, action: 'notifications' },
])

const helpItems = ref([
  { id: 1, name: 'Getting Started', icon: HelpCircle },
  { id: 2, name: 'Contact Support', icon: MessageSquare },
  { id: 3, name: 'Documentation', icon: FileText },
])
</script>

<template>
  <div>
    <Transition name="backdrop">
      <div v-if="isExpanded" class="overlay-backdrop menu-backdrop" @click="$emit('toggle')" />
    </Transition>

    <div class="menu" :class="{ 'is-expanded': isExpanded }">
      <div class="menu-content">
        <!-- Main Navigation - Sticky at top -->
        <div class="menu-section navigation-section">
          <h3 class="section-title">Navigation</h3>
          <nav class="menu-nav">
            <router-link
              v-for="item in MAIN_MENU_ITEMS"
              :key="item.name"
              :to="{ name: item.name }"
              class="menu-link"
              @click="$emit('toggle')"
            >
              <component :is="item.icon" class="menu-icon" />
              <span class="menu-label">{{ item.label }}</span>
            </router-link>
          </nav>
        </div>

        <!-- Scrollable content area -->
        <div class="menu-scrollable">
          <!-- Quick Actions -->
          <div class="menu-section">
            <h3 class="section-title">Quick Actions</h3>
            <div class="action-list">
              <button v-for="action in quickActions" :key="action.id" class="action-item">
                <component :is="action.icon" class="action-icon" />
                <span class="action-label">{{ action.name }}</span>
                <ChevronRight class="action-arrow" />
              </button>
            </div>
          </div>

          <!-- Recent Items -->
          <div class="menu-section">
            <h3 class="section-title">
              Recent Items
              <span v-if="searchQuery.trim()" class="search-indicator">(Filtered)</span>
            </h3>

            <!-- Search within Recent Items -->
            <div class="search-container">
              <div class="search-input-wrapper">
                <Search class="search-icon" />
                <input
                  v-model="searchQuery"
                  type="text"
                  placeholder="Search recent files..."
                  class="search-input"
                />
              </div>
              <div v-if="searchQuery.trim()" class="search-results-info">
                {{ filteredRecentItems.length }} result{{
                  filteredRecentItems.length !== 1 ? 's' : ''
                }}
                found
              </div>
            </div>

            <div class="recent-list">
              <div v-if="filteredRecentItems.length === 0 && searchQuery.trim()" class="no-results">
                <FileText class="no-results-icon" />
                <span class="no-results-text">No recent items found for "{{ searchQuery }}"</span>
              </div>
              <div v-for="item in filteredRecentItems" :key="item.id" class="recent-item">
                <component :is="item.icon" class="recent-icon" />
                <div class="recent-info">
                  <span class="recent-name">{{ item.name }}</span>
                  <span class="recent-time">
                    <Clock class="time-icon" />
                    {{ item.time }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Favorites -->
          <div class="menu-section">
            <h3 class="section-title">Favorites</h3>
            <div class="favorites-list">
              <router-link
                v-for="item in favoriteItems"
                :key="item.id"
                :to="item.path"
                class="favorite-item"
                @click="$emit('toggle')"
              >
                <component :is="item.icon" class="favorite-icon" />
                <span class="favorite-name">{{ item.name }}</span>
                <Bookmark class="bookmark-icon" />
              </router-link>
            </div>
          </div>

          <!-- Help & Support -->
          <div class="menu-section">
            <h3 class="section-title">Help & Support</h3>
            <div class="help-list">
              <button v-for="item in helpItems" :key="item.id" class="help-item">
                <component :is="item.icon" class="help-icon" />
                <span class="help-name">{{ item.name }}</span>
              </button>
            </div>
          </div>
        </div>

        <!-- User Section - Sticky at bottom -->
        <div class="menu-section menu-footer">
          <div class="user-section">
            <div class="user-info">
              <div class="user-avatar">
                <User class="avatar-icon" />
              </div>
              <div class="user-details">
                <span class="user-name">John Doe</span>
                <span class="user-role">Administrator</span>
              </div>
            </div>
            <div class="user-actions">
              <button class="user-action-btn">
                <Settings class="action-icon" />
              </button>
              <button class="user-action-btn">
                <LogOut class="action-icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.menu {
  position: fixed;
  top: var(--header-height);
  left: 0;
  width: 300px;
  height: calc(100vh - var(--header-height));
  background-color: var(--color-bg-tertiary);
  border-right: 1px solid var(--color-border-light);
  box-shadow: 4px 0 12px var(--color-shadow-medium);
  z-index: var(--z-menu);
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.menu.is-expanded {
  transform: translateX(0);
}

.menu-content {
  display: flex;
  flex-direction: column;
  height: 100%;
}

/* Navigation section - sticky at top */
.navigation-section {
  flex-shrink: 0;
  background-color: var(--color-bg-tertiary);
  border-bottom: 1px solid var(--color-border-lighter);
  padding: 1.5rem !important;
  margin-bottom: 0 !important;
}

/* Scrollable content area */
.menu-scrollable {
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem 0;
}

.menu-scrollable .menu-section {
  padding: 0 1.5rem;
  margin-bottom: 1.5rem;
}

.menu-scrollable .menu-section:last-child {
  margin-bottom: 1.5rem;
}

/* User section - sticky at bottom */
.menu-footer {
  flex-shrink: 0;
  background-color: var(--color-bg-tertiary);
  border-top: 1px solid var(--color-border-lighter);
  padding: 1.5rem !important;
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}

.section-title {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-text-light);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0 0 0.75rem 0;
}

.menu-nav {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.menu-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  color: var(--color-text-dark);
  text-decoration: none;
  border-radius: var(--radius-md);
  transition: all 0.2s ease;
  font-weight: 500;
}

.menu-link:hover {
  background-color: var(--color-bg-hover);
  color: var(--color-text-primary);
}

.menu-link.router-link-active {
  background-color: var(--color-primary);
  color: white;
}

.menu-icon {
  width: 1.25rem;
  height: 1.25rem;
  flex-shrink: 0;
}

.menu-label {
  font-weight: 500;
}

/* Search Section */
.search-container {
  margin-bottom: 0.5rem;
}

.search-input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.search-icon {
  position: absolute;
  left: 0.75rem;
  width: 1rem;
  height: 1rem;
  color: var(--color-text-light);
  z-index: 1;
}

.search-input {
  width: 100%;
  padding: 0.75rem 0.75rem 0.75rem 2.5rem;
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  background: var(--color-bg-primary);
  transition: all 0.2s ease;
}

.search-input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px var(--color-primary-light);
}

.search-input::placeholder {
  color: var(--color-text-light);
}

.search-results-info {
  font-size: 0.75rem;
  color: var(--color-text-secondary);
  padding: 0.25rem 0.5rem;
  background: var(--color-bg-tertiary);
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border-lighter);
}

.search-indicator {
  font-size: 0.6rem;
  color: var(--color-primary);
  font-weight: 500;
  margin-left: 0.5rem;
}

/* Quick Actions */
.action-list {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.action-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: none;
  border: none;
  color: var(--color-text-dark);
  border-radius: var(--radius-md);
  transition: all 0.2s ease;
  cursor: pointer;
  font-size: 0.875rem;
  width: 100%;
  text-align: left;
}

.action-item:hover {
  background-color: var(--color-bg-hover);
  color: var(--color-text-primary);
}

.action-icon {
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
  color: var(--color-primary);
}

.action-label {
  flex: 1;
  font-weight: 500;
}

.action-arrow {
  width: 0.875rem;
  height: 0.875rem;
  color: var(--color-text-light);
  transition: transform 0.2s ease;
}

.action-item:hover .action-arrow {
  transform: translateX(2px);
}

/* Recent Items */
.recent-list {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.recent-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  border-radius: var(--radius-md);
  transition: all 0.2s ease;
  cursor: pointer;
}

.recent-item:hover {
  background-color: var(--color-bg-hover);
}

.recent-icon {
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
  color: var(--color-text-secondary);
}

.recent-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.recent-name {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text-primary);
}

.recent-time {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  color: var(--color-text-light);
}

.time-icon {
  width: 0.75rem;
  height: 0.75rem;
}

.no-results {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1.5rem 0.75rem;
  text-align: center;
  color: var(--color-text-light);
}

.no-results-icon {
  width: 2rem;
  height: 2rem;
  color: var(--color-border-light);
}

.no-results-text {
  font-size: 0.875rem;
  color: var(--color-text-secondary);
}

/* Favorites */
.favorites-list {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.favorite-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  color: var(--color-text-dark);
  text-decoration: none;
  border-radius: var(--radius-md);
  transition: all 0.2s ease;
}

.favorite-item:hover {
  background-color: var(--color-bg-hover);
  color: var(--color-text-primary);
}

.favorite-icon {
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
  color: #f59e0b;
}

.favorite-name {
  flex: 1;
  font-size: 0.875rem;
  font-weight: 500;
}

.bookmark-icon {
  width: 0.875rem;
  height: 0.875rem;
  color: #f59e0b;
}

/* Help & Support */
.help-list {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.help-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: none;
  border: none;
  color: var(--color-text-dark);
  border-radius: var(--radius-md);
  transition: all 0.2s ease;
  cursor: pointer;
  font-size: 0.875rem;
  width: 100%;
  text-align: left;
}

.help-item:hover {
  background-color: var(--color-bg-hover);
  color: var(--color-text-primary);
}

.help-icon {
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
  color: #10b981;
}

.help-name {
  font-weight: 500;
}

/* User Section */
.user-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem;
  border-radius: 0.5rem;
  transition: all 0.2s ease;
}

.user-section:hover {
  background-color: var(--color-bg-hover);
}

.user-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: 1;
}

.user-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent-dark));
  border-radius: 50%;
  color: white;
}

.avatar-icon {
  width: 1.25rem;
  height: 1.25rem;
}

.user-details {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
}

.user-name {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-text-primary);
}

.user-role {
  font-size: 0.75rem;
  color: var(--color-text-secondary);
}

.user-actions {
  display: flex;
  gap: 0.25rem;
}

.user-action-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  background: none;
  border: none;
  border-radius: var(--radius-sm);
  color: var(--color-text-secondary);
  transition: all 0.2s ease;
  cursor: pointer;
}

.user-action-btn:hover {
  background-color: var(--color-bg-hover);
  color: var(--color-text-primary);
}

.user-action-btn .action-icon {
  width: 1rem;
  height: 1rem;
}

/* Desktop and Tablet - static positioning */
@media (min-width: 769px) {
  .menu {
    position: static;
    transform: none !important;
    box-shadow: none;
    border-right: 1px solid #e5e7eb;
    height: 100%;
    top: 0;
  }
}

/* Desktop - always visible */
@media (min-width: 1200px) {
  .menu {
    width: 300px !important;
  }
}

/* Tablet - toggleable width */
@media (min-width: 769px) and (max-width: 1199px) {
  .menu {
    width: 0;
    overflow: hidden;
    transition: width 0.3s ease;
  }

  .menu.is-expanded {
    width: 300px;
  }
}

/* Mobile - overlay */
@media (max-width: 768px) {
  .menu {
    width: 300px;
  }
}
</style>
