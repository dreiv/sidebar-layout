<template>
  <div class="database-view">
    <div class="view-header">
      <h1 class="view-title">
        <Database class="title-icon" />
        Database Management
      </h1>
      <p class="view-description">Manage database connections, queries, and monitoring</p>
    </div>

    <div class="database-stats">
      <div class="stat-card">
        <div class="stat-value">5</div>
        <div class="stat-label">Active Connections</div>
        <div class="stat-indicator online"></div>
      </div>
      <div class="stat-card">
        <div class="stat-value">2.3GB</div>
        <div class="stat-label">Storage Used</div>
        <div class="stat-change">75% of 3GB</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">234ms</div>
        <div class="stat-label">Avg Query Time</div>
        <div class="stat-change positive">-15ms</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">99.9%</div>
        <div class="stat-label">Uptime</div>
        <div class="stat-change positive">+0.1%</div>
      </div>
    </div>

    <div class="database-actions">
      <button class="btn btn-primary">
        <Play class="btn-icon" />
        Run Query
      </button>
      <button class="btn btn-secondary">
        <Database class="btn-icon" />
        Backup
      </button>
      <button class="btn btn-secondary">
        <RefreshCw class="btn-icon" />
        Sync
      </button>
      <button class="btn btn-secondary">
        <Settings class="btn-icon" />
        Configure
      </button>
    </div>

    <div class="database-content">
      <div class="query-section">
        <h3 class="section-title">Query Editor</h3>
        <div class="query-editor">
          <textarea
            v-model="currentQuery"
            placeholder="Enter your SQL query here..."
            rows="8"
          ></textarea>
          <div class="query-actions">
            <button class="btn btn-sm btn-primary">Execute</button>
            <button class="btn btn-sm btn-secondary">Format</button>
            <button class="btn btn-sm btn-secondary">Save</button>
          </div>
        </div>
      </div>

      <div class="tables-section">
        <h3 class="section-title">Database Tables</h3>
        <div class="tables-grid">
          <div v-for="table in mockTables" :key="table.name" class="table-card">
            <div class="table-header">
              <Table class="table-icon" />
              <div class="table-info">
                <h4 class="table-name">{{ table.name }}</h4>
                <p class="table-rows">{{ table.rows }} rows</p>
              </div>
            </div>
            <div class="table-actions">
              <button class="table-btn">
                <Eye class="btn-icon" />
                View
              </button>
              <button class="table-btn">
                <Edit class="btn-icon" />
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="connections-section">
        <h3 class="section-title">Active Connections</h3>
        <div class="connections-list">
          <div v-for="connection in mockConnections" :key="connection.id" class="connection-item">
            <div class="connection-status" :class="connection.status"></div>
            <div class="connection-info">
              <div class="connection-name">{{ connection.name }}</div>
              <div class="connection-details">{{ connection.host }}:{{ connection.port }}</div>
            </div>
            <div class="connection-metrics">
              <span class="metric">{{ connection.queries }} queries</span>
              <span class="metric">{{ connection.duration }}</span>
            </div>
            <button class="connection-action">
              <X class="btn-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Database, Play, RefreshCw, Settings, Table, Eye, Edit, X } from 'lucide-vue-next'
import { ref } from 'vue'

const currentQuery = ref(`SELECT u.name, u.email, COUNT(o.id) as order_count
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.created_at >= '2024-01-01'
GROUP BY u.id, u.name, u.email
ORDER BY order_count DESC
LIMIT 10;`)

const mockTables = ref([
  { name: 'users', rows: 1234 },
  { name: 'orders', rows: 5678 },
  { name: 'products', rows: 890 },
  { name: 'categories', rows: 45 },
  { name: 'inventory', rows: 2345 },
  { name: 'transactions', rows: 8901 },
])

const mockConnections = ref([
  {
    id: 1,
    name: 'Main Database',
    host: 'prod-db-01',
    port: 5432,
    status: 'active',
    queries: 145,
    duration: '2h 34m',
  },
  {
    id: 2,
    name: 'Analytics DB',
    host: 'analytics-db',
    port: 5432,
    status: 'active',
    queries: 67,
    duration: '45m',
  },
  {
    id: 3,
    name: 'Cache Redis',
    host: 'cache-01',
    port: 6379,
    status: 'idle',
    queries: 23,
    duration: '12m',
  },
])
</script>

<style scoped>
.database-view {
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
  color: #7c3aed;
}

.view-description {
  color: #6b7280;
  font-size: 1rem;
  margin: 0;
}

.database-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.stat-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  position: relative;
}

.stat-value {
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.25rem;
}

.stat-label {
  color: #6b7280;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
}

.stat-change {
  font-size: 0.875rem;
  font-weight: 600;
  color: #6b7280;
}

.stat-change.positive {
  color: #10b981;
}

.stat-indicator {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
}

.stat-indicator.online {
  background: #10b981;
}

.database-actions {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  border: 1px solid transparent;
}

.btn-sm {
  padding: 0.375rem 0.75rem;
  font-size: 0.8rem;
}

.btn-primary {
  background: #7c3aed;
  color: white;
}

.btn-primary:hover {
  background: #6d28d9;
}

.btn-secondary {
  background: white;
  color: #374151;
  border-color: #d1d5db;
}

.btn-secondary:hover {
  background: #f9fafb;
}

.btn-icon {
  width: 1rem;
  height: 1rem;
}

.database-content {
  display: grid;
  gap: 2rem;
}

.section-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 1rem 0;
}

.query-section {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.query-editor textarea {
  width: 100%;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  padding: 0.75rem;
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 0.875rem;
  resize: vertical;
  margin-bottom: 1rem;
}

.query-actions {
  display: flex;
  gap: 0.5rem;
}

.tables-section {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.tables-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
}

.table-card {
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  padding: 1rem;
  transition: all 0.2s;
}

.table-card:hover {
  border-color: #7c3aed;
  box-shadow: 0 2px 8px rgba(124, 58, 237, 0.1);
}

.table-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.table-icon {
  width: 1.5rem;
  height: 1.5rem;
  color: #7c3aed;
}

.table-name {
  font-weight: 600;
  color: #1f2937;
  margin: 0;
  font-size: 1rem;
}

.table-rows {
  color: #6b7280;
  font-size: 0.875rem;
  margin: 0;
}

.table-actions {
  display: flex;
  gap: 0.5rem;
}

.table-btn {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.375rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;
  background: white;
  color: #374151;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.2s;
}

.table-btn:hover {
  background: #f9fafb;
}

.connections-section {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.connections-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.connection-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  transition: all 0.2s;
}

.connection-item:hover {
  background: #f9fafb;
}

.connection-status {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  flex-shrink: 0;
}

.connection-status.active {
  background: #10b981;
}

.connection-status.idle {
  background: #f59e0b;
}

.connection-info {
  flex: 1;
}

.connection-name {
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.25rem;
}

.connection-details {
  color: #6b7280;
  font-size: 0.875rem;
  font-family: 'Monaco', 'Menlo', monospace;
}

.connection-metrics {
  display: flex;
  gap: 1rem;
}

.metric {
  color: #6b7280;
  font-size: 0.875rem;
}

.connection-action {
  padding: 0.25rem;
  border: none;
  background: transparent;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.2s;
}

.connection-action:hover {
  background: #fee2e2;
  color: #dc2626;
}
</style>
