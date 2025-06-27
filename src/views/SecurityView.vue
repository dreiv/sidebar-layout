<template>
  <div class="security-view">
    <div class="view-header">
      <h1 class="view-title">
        <Shield class="title-icon" />
        Security & Monitoring
      </h1>
      <p class="view-description">
        Monitor security events, manage access controls, and system protection
      </p>
    </div>

    <div class="security-stats">
      <div class="stat-card safe">
        <div class="stat-value">
          <Shield class="stat-icon" />
          Secure
        </div>
        <div class="stat-label">System Status</div>
        <div class="stat-change">Last scan: 2 hours ago</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">0</div>
        <div class="stat-label">Active Threats</div>
        <div class="stat-change positive">-3 from yesterday</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">247</div>
        <div class="stat-label">Blocked Attempts</div>
        <div class="stat-change">Last 24h</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">99.8%</div>
        <div class="stat-label">Uptime</div>
        <div class="stat-change positive">+0.2%</div>
      </div>
    </div>

    <div class="security-actions">
      <button class="btn btn-primary">
        <Scan class="btn-icon" />
        Run Security Scan
      </button>
      <button class="btn btn-secondary">
        <Lock class="btn-icon" />
        Review Access
      </button>
      <button class="btn btn-secondary">
        <AlertTriangle class="btn-icon" />
        View Alerts
      </button>
      <button class="btn btn-secondary">
        <FileText class="btn-icon" />
        Generate Report
      </button>
    </div>

    <div class="security-content">
      <div class="recent-events">
        <h3 class="section-title">Recent Security Events</h3>
        <div class="events-list">
          <div
            v-for="event in mockEvents"
            :key="event.id"
            class="event-item"
            :class="event.severity"
          >
            <div class="event-icon">
              <component :is="getEventIcon(event.type)" />
            </div>
            <div class="event-info">
              <div class="event-title">{{ event.title }}</div>
              <div class="event-description">{{ event.description }}</div>
              <div class="event-time">{{ event.timestamp }}</div>
            </div>
            <div class="event-status">
              <span class="status-badge" :class="event.status">{{ event.status }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="access-control">
        <h3 class="section-title">Access Control</h3>
        <div class="access-grid">
          <div class="access-card">
            <div class="access-header">
              <Users class="access-icon" />
              <h4>Active Sessions</h4>
            </div>
            <div class="access-value">{{ mockSessions.length }}</div>
            <div class="access-list">
              <div v-for="session in mockSessions" :key="session.id" class="session-item">
                <div class="session-user">{{ session.user }}</div>
                <div class="session-location">{{ session.location }}</div>
                <div class="session-time">{{ session.duration }}</div>
              </div>
            </div>
          </div>

          <div class="access-card">
            <div class="access-header">
              <Key class="access-icon" />
              <h4>Permissions</h4>
            </div>
            <div class="permissions-list">
              <div
                v-for="permission in mockPermissions"
                :key="permission.role"
                class="permission-item"
              >
                <div class="permission-role">{{ permission.role }}</div>
                <div class="permission-count">{{ permission.users }} users</div>
                <div class="permission-level" :class="permission.level">{{ permission.level }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="security-metrics">
        <h3 class="section-title">Security Metrics</h3>
        <div class="metrics-grid">
          <div class="metric-card">
            <div class="metric-header">
              <Activity class="metric-icon" />
              <span>Login Attempts</span>
            </div>
            <div class="metric-chart">
              <div class="chart-bar" style="height: 60%"></div>
              <div class="chart-bar" style="height: 80%"></div>
              <div class="chart-bar" style="height: 45%"></div>
              <div class="chart-bar" style="height: 90%"></div>
              <div class="chart-bar" style="height: 70%"></div>
            </div>
            <div class="metric-value">1,247 today</div>
          </div>

          <div class="metric-card">
            <div class="metric-header">
              <AlertTriangle class="metric-icon" />
              <span>Blocked IPs</span>
            </div>
            <div class="metric-value large">34</div>
            <div class="metric-change">+7 from yesterday</div>
          </div>

          <div class="metric-card">
            <div class="metric-header">
              <Lock class="metric-icon" />
              <span>Failed Logins</span>
            </div>
            <div class="metric-value large">12</div>
            <div class="metric-change positive">-8 from yesterday</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  Shield,
  Scan,
  Lock,
  AlertTriangle,
  FileText,
  Users,
  Key,
  Activity,
  UserX,
  Eye,
} from 'lucide-vue-next'
import { ref } from 'vue'

const mockEvents = ref([
  {
    id: 1,
    type: 'login',
    title: 'Successful Login',
    description: 'User admin logged in from 192.168.1.100',
    timestamp: '2 minutes ago',
    severity: 'info',
    status: 'resolved',
  },
  {
    id: 2,
    type: 'block',
    title: 'IP Address Blocked',
    description: 'Suspicious activity detected from 203.0.113.45',
    timestamp: '15 minutes ago',
    severity: 'warning',
    status: 'blocked',
  },
  {
    id: 3,
    type: 'failed',
    title: 'Failed Login Attempt',
    description: 'Multiple failed login attempts for user: john.doe',
    timestamp: '1 hour ago',
    severity: 'warning',
    status: 'monitoring',
  },
  {
    id: 4,
    type: 'scan',
    title: 'Security Scan Completed',
    description: 'Weekly security scan completed successfully',
    timestamp: '2 hours ago',
    severity: 'info',
    status: 'completed',
  },
])

const mockSessions = ref([
  { id: 1, user: 'admin', location: 'New York, US', duration: '2h 15m' },
  { id: 2, user: 'john.doe', location: 'London, UK', duration: '45m' },
  { id: 3, user: 'sarah.smith', location: 'Toronto, CA', duration: '1h 30m' },
])

const mockPermissions = ref([
  { role: 'Administrator', users: 3, level: 'high' },
  { role: 'Manager', users: 12, level: 'medium' },
  { role: 'User', users: 45, level: 'low' },
  { role: 'Guest', users: 8, level: 'minimal' },
])

const getEventIcon = (type: string) => {
  switch (type) {
    case 'login':
      return Users
    case 'block':
      return Shield
    case 'failed':
      return UserX
    case 'scan':
      return Eye
    default:
      return AlertTriangle
  }
}
</script>

<style scoped>
.security-view {
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
  color: #dc2626;
}

.view-description {
  color: #6b7280;
  font-size: 1rem;
  margin: 0;
}

.security-stats {
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
}

.stat-card.safe {
  border-color: #10b981;
  background: linear-gradient(135deg, #ecfdf5 0%, #f0fdf4 100%);
}

.stat-value {
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.stat-icon {
  width: 1.5rem;
  height: 1.5rem;
  color: #10b981;
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

.security-actions {
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

.btn-primary {
  background: #dc2626;
  color: white;
}

.btn-primary:hover {
  background: #b91c1c;
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

.security-content {
  display: grid;
  gap: 2rem;
}

.section-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 1rem 0;
}

.recent-events {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.events-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.event-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  transition: all 0.2s;
}

.event-item:hover {
  background: #f9fafb;
}

.event-item.warning {
  border-color: #f59e0b;
  background: #fffbeb;
}

.event-item.info {
  border-color: #3b82f6;
  background: #eff6ff;
}

.event-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: #f3f4f6;
}

.event-info {
  flex: 1;
}

.event-title {
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.25rem;
}

.event-description {
  color: #6b7280;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
}

.event-time {
  color: #9ca3af;
  font-size: 0.75rem;
}

.status-badge {
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
}

.status-badge.resolved {
  background: #d1fae5;
  color: #065f46;
}

.status-badge.blocked {
  background: #fee2e2;
  color: #991b1b;
}

.status-badge.monitoring {
  background: #fef3c7;
  color: #92400e;
}

.status-badge.completed {
  background: #dbeafe;
  color: #1e40af;
}

.access-control {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.access-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.access-card {
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.access-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.access-icon {
  width: 1.25rem;
  height: 1.25rem;
  color: #dc2626;
}

.access-header h4 {
  margin: 0;
  font-weight: 600;
  color: #1f2937;
}

.access-value {
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1rem;
}

.session-item,
.permission-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid #f3f4f6;
}

.session-user,
.permission-role {
  font-weight: 500;
  color: #1f2937;
}

.session-location,
.permission-count {
  color: #6b7280;
  font-size: 0.875rem;
}

.session-time {
  color: #9ca3af;
  font-size: 0.75rem;
}

.permission-level {
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
}

.permission-level.high {
  background: #fee2e2;
  color: #991b1b;
}

.permission-level.medium {
  background: #fef3c7;
  color: #92400e;
}

.permission-level.low {
  background: #dbeafe;
  color: #1e40af;
}

.permission-level.minimal {
  background: #f3f4f6;
  color: #6b7280;
}

.security-metrics {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.metric-card {
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 1rem;
}

.metric-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  color: #6b7280;
  font-size: 0.875rem;
}

.metric-icon {
  width: 1rem;
  height: 1rem;
}

.metric-chart {
  display: flex;
  align-items: end;
  gap: 0.25rem;
  height: 2rem;
  margin-bottom: 0.5rem;
}

.chart-bar {
  flex: 1;
  background: #dc2626;
  border-radius: 0.125rem;
  min-height: 0.25rem;
}

.metric-value {
  font-weight: 600;
  color: #1f2937;
}

.metric-value.large {
  font-size: 1.5rem;
  font-weight: 700;
}

.metric-change {
  color: #6b7280;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

.metric-change.positive {
  color: #10b981;
}
</style>
