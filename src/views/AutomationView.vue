<template>
  <div class="automation-view">
    <div class="view-header">
      <h1 class="view-title">
        <Cog class="title-icon" />
        Automation Hub
      </h1>
      <p class="view-description">Configure automated tasks, rules, and system behaviors</p>
    </div>

    <div class="automation-stats">
      <div class="stat-card">
        <div class="stat-value">32</div>
        <div class="stat-label">Active Rules</div>
        <div class="stat-change positive">+5 this week</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">1,456</div>
        <div class="stat-label">Tasks Completed</div>
        <div class="stat-change positive">+22%</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">7.2h</div>
        <div class="stat-label">Time Saved</div>
        <div class="stat-change">This week</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">96.8%</div>
        <div class="stat-label">Reliability</div>
        <div class="stat-change positive">+1.2%</div>
      </div>
    </div>

    <div class="automation-actions">
      <button class="btn btn-primary">
        <Plus class="btn-icon" />
        New Rule
      </button>
      <button class="btn btn-secondary">
        <Settings class="btn-icon" />
        Configure
      </button>
      <button class="btn btn-secondary">
        <Activity class="btn-icon" />
        Monitor
      </button>
      <button class="btn btn-secondary">
        <FileText class="btn-icon" />
        Logs
      </button>
    </div>

    <div class="automation-content">
      <div class="automation-rules">
        <h3 class="section-title">Automation Rules</h3>
        <div class="rules-list">
          <div v-for="rule in mockRules" :key="rule.id" class="rule-card">
            <div class="rule-header">
              <div class="rule-info">
                <h4 class="rule-name">{{ rule.name }}</h4>
                <p class="rule-description">{{ rule.description }}</p>
              </div>
              <div class="rule-toggle">
                <label class="toggle-switch">
                  <input type="checkbox" :checked="rule.enabled" />
                  <span class="toggle-slider"></span>
                </label>
              </div>
            </div>

            <div class="rule-trigger">
              <div class="trigger-section">
                <span class="trigger-label">When:</span>
                <div class="trigger-condition">
                  <component :is="rule.trigger.icon" class="trigger-icon" />
                  <span>{{ rule.trigger.condition }}</span>
                </div>
              </div>
              <ArrowRight class="arrow-icon" />
              <div class="action-section">
                <span class="action-label">Then:</span>
                <div class="action-items">
                  <div v-for="action in rule.actions" :key="action.id" class="action-item">
                    <component :is="action.icon" class="action-icon" />
                    <span>{{ action.description }}</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="rule-stats">
              <div class="rule-stat">
                <span class="stat-label">Last Triggered</span>
                <span class="stat-value">{{ rule.lastTriggered }}</span>
              </div>
              <div class="rule-stat">
                <span class="stat-label">Executions</span>
                <span class="stat-value">{{ rule.executions }}</span>
              </div>
              <div class="rule-stat">
                <span class="stat-label">Success Rate</span>
                <span class="stat-value">{{ rule.successRate }}%</span>
              </div>
            </div>

            <div class="rule-actions">
              <button class="rule-btn">
                <Edit class="btn-icon" />
                Edit
              </button>
              <button class="rule-btn">
                <Copy class="btn-icon" />
                Duplicate
              </button>
              <button class="rule-btn">
                <BarChart3 class="btn-icon" />
                Analytics
              </button>
              <button class="rule-btn danger">
                <Trash class="btn-icon" />
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="automation-templates">
        <h3 class="section-title">Quick Setup Templates</h3>
        <div class="templates-grid">
          <div v-for="template in mockTemplates" :key="template.id" class="template-card">
            <div class="template-header">
              <div class="template-icon">
                <component :is="template.icon" />
              </div>
              <div class="template-category">{{ template.category }}</div>
            </div>
            <div class="template-info">
              <h4 class="template-name">{{ template.name }}</h4>
              <p class="template-description">{{ template.description }}</p>
            </div>
            <div class="template-actions">
              <button class="template-btn">
                <Plus class="btn-icon" />
                Use Template
              </button>
              <button class="template-btn secondary">
                <Eye class="btn-icon" />
                Preview
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="automation-activity">
        <h3 class="section-title">Recent Activity</h3>
        <div class="activity-list">
          <div v-for="activity in mockActivity" :key="activity.id" class="activity-item">
            <div class="activity-icon" :class="activity.type">
              <component :is="getActivityIcon(activity.type)" />
            </div>
            <div class="activity-info">
              <div class="activity-message">{{ activity.message }}</div>
              <div class="activity-time">{{ activity.timestamp }}</div>
            </div>
            <div class="activity-status">
              <span class="status-badge" :class="activity.status">{{ activity.status }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="automation-metrics">
        <h3 class="section-title">Performance Metrics</h3>
        <div class="metrics-grid">
          <div class="metric-card">
            <div class="metric-header">
              <Clock class="metric-icon" />
              <span>Execution Times</span>
            </div>
            <div class="metric-chart">
              <div class="time-chart">
                <div class="time-bar" style="height: 40%">
                  <span class="time-value">2.1s</span>
                </div>
                <div class="time-bar" style="height: 60%">
                  <span class="time-value">3.8s</span>
                </div>
                <div class="time-bar" style="height: 30%">
                  <span class="time-value">1.5s</span>
                </div>
                <div class="time-bar" style="height: 80%">
                  <span class="time-value">4.2s</span>
                </div>
                <div class="time-bar" style="height: 50%">
                  <span class="time-value">2.7s</span>
                </div>
              </div>
            </div>
            <div class="metric-summary">Avg: 2.86s</div>
          </div>

          <div class="metric-card">
            <div class="metric-header">
              <CheckCircle class="metric-icon" />
              <span>Success Rate</span>
            </div>
            <div class="success-rate">
              <div class="rate-circle">
                <div class="rate-fill" style="stroke-dasharray: 90 10"></div>
                <span class="rate-text">96.8%</span>
              </div>
            </div>
            <div class="metric-summary">247 of 255 successful</div>
          </div>

          <div class="metric-card">
            <div class="metric-header">
              <TrendingUp class="metric-icon" />
              <span>Efficiency Trend</span>
            </div>
            <div class="trend-indicators">
              <div class="trend-item">
                <span class="trend-label">Time Saved</span>
                <span class="trend-value positive">+15%</span>
              </div>
              <div class="trend-item">
                <span class="trend-label">Error Rate</span>
                <span class="trend-value positive">-8%</span>
              </div>
              <div class="trend-item">
                <span class="trend-label">Productivity</span>
                <span class="trend-value positive">+23%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  Cog,
  Plus,
  Settings,
  Activity,
  FileText,
  Edit,
  Copy,
  BarChart3,
  Trash,
  Eye,
  ArrowRight,
  Clock,
  CheckCircle,
  TrendingUp,
  Mail,
  Database,
  Users,
  Calendar,
  Bell,
  Shield,
  FileCheck,
  AlertTriangle,
} from 'lucide-vue-next'
import { ref } from 'vue'

const mockRules = ref([
  {
    id: 1,
    name: 'New User Welcome Email',
    description: 'Send welcome email when new user registers',
    enabled: true,
    trigger: {
      icon: Users,
      condition: 'New user registration',
    },
    actions: [
      { id: 1, icon: Mail, description: 'Send welcome email' },
      { id: 2, icon: Calendar, description: 'Schedule onboarding call' },
    ],
    lastTriggered: '2 hours ago',
    executions: 45,
    successRate: 98.2,
  },
  {
    id: 2,
    name: 'Daily Backup Notification',
    description: 'Notify admin when daily backup completes',
    enabled: true,
    trigger: {
      icon: Database,
      condition: 'Backup job completion',
    },
    actions: [
      { id: 1, icon: Bell, description: 'Send notification' },
      { id: 2, icon: FileCheck, description: 'Log backup status' },
    ],
    lastTriggered: '12 hours ago',
    executions: 30,
    successRate: 100,
  },
  {
    id: 3,
    name: 'Security Alert Response',
    description: 'Lock account and notify admin on suspicious activity',
    enabled: false,
    trigger: {
      icon: Shield,
      condition: 'Failed login attempts > 5',
    },
    actions: [
      { id: 1, icon: Shield, description: 'Lock user account' },
      { id: 2, icon: Mail, description: 'Alert security team' },
    ],
    lastTriggered: '3 days ago',
    executions: 8,
    successRate: 95.5,
  },
])

const mockTemplates = ref([
  {
    id: 1,
    name: 'Lead Nurturing',
    description: 'Automate follow-up emails for new leads',
    category: 'Marketing',
    icon: Mail,
  },
  {
    id: 2,
    name: 'Inventory Alerts',
    description: 'Get notified when stock runs low',
    category: 'Operations',
    icon: AlertTriangle,
  },
  {
    id: 3,
    name: 'Task Assignment',
    description: 'Auto-assign tasks based on team availability',
    category: 'Project Management',
    icon: Users,
  },
  {
    id: 4,
    name: 'Data Validation',
    description: 'Validate and clean incoming data automatically',
    category: 'Data Management',
    icon: Database,
  },
])

const mockActivity = ref([
  {
    id: 1,
    type: 'success',
    message: 'Welcome email sent to new user john.doe@example.com',
    timestamp: '5 minutes ago',
    status: 'completed',
  },
  {
    id: 2,
    type: 'info',
    message: 'Daily backup notification delivered to admin',
    timestamp: '2 hours ago',
    status: 'completed',
  },
  {
    id: 3,
    type: 'warning',
    message: 'Security rule triggered for user account sarah.smith',
    timestamp: '4 hours ago',
    status: 'reviewed',
  },
  {
    id: 4,
    type: 'error',
    message: 'Failed to send notification - email service unavailable',
    timestamp: '6 hours ago',
    status: 'failed',
  },
])

const getActivityIcon = (type: string) => {
  switch (type) {
    case 'success':
      return CheckCircle
    case 'info':
      return Bell
    case 'warning':
      return AlertTriangle
    case 'error':
      return AlertTriangle
    default:
      return Activity
  }
}
</script>

<style scoped>
.automation-view {
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

.automation-stats {
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

.automation-actions {
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
  background: #f59e0b;
  color: white;
}

.btn-primary:hover {
  background: #d97706;
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

.automation-content {
  display: grid;
  gap: 2rem;
}

.section-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 1rem 0;
}

.automation-rules {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.rules-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.rule-card {
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 1.5rem;
  transition: all 0.2s;
}

.rule-card:hover {
  border-color: #f59e0b;
  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.1);
}

.rule-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.rule-name {
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 0.25rem 0;
}

.rule-description {
  color: #6b7280;
  font-size: 0.875rem;
  margin: 0;
}

.toggle-switch {
  position: relative;
  display: inline-block;
  width: 3rem;
  height: 1.5rem;
}

.toggle-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.toggle-slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 1.5rem;
}

.toggle-slider:before {
  position: absolute;
  content: '';
  height: 1.125rem;
  width: 1.125rem;
  left: 0.1875rem;
  bottom: 0.1875rem;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}

input:checked + .toggle-slider {
  background-color: #f59e0b;
}

input:checked + .toggle-slider:before {
  transform: translateX(1.5rem);
}

.rule-trigger {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  padding: 1rem;
  background: #f9fafb;
  border-radius: 0.5rem;
}

.trigger-section,
.action-section {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.trigger-label,
.action-label {
  font-size: 0.75rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
}

.trigger-condition,
.action-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  background: white;
  border-radius: 0.375rem;
  font-size: 0.875rem;
}

.trigger-icon,
.action-icon {
  width: 1rem;
  height: 1rem;
  color: #f59e0b;
}

.arrow-icon {
  width: 1.25rem;
  height: 1.25rem;
  color: #9ca3af;
  flex-shrink: 0;
}

.action-section {
  flex: 1;
}

.action-items {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.rule-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
  padding: 1rem 0;
  border-top: 1px solid #f3f4f6;
  border-bottom: 1px solid #f3f4f6;
}

.rule-stat {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.rule-stat .stat-label {
  color: #9ca3af;
  font-size: 0.75rem;
  text-transform: uppercase;
  font-weight: 500;
}

.rule-stat .stat-value {
  color: #1f2937;
  font-weight: 600;
  font-size: 0.875rem;
}

.rule-actions {
  display: flex;
  gap: 0.5rem;
}

.rule-btn {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.375rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  background: white;
  color: #374151;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.2s;
}

.rule-btn:hover {
  background: #f9fafb;
}

.rule-btn.danger {
  color: #dc2626;
  border-color: #fca5a5;
}

.rule-btn.danger:hover {
  background: #fef2f2;
}

.automation-templates {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.templates-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.template-card {
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 1.5rem;
  transition: all 0.2s;
}

.template-card:hover {
  border-color: #f59e0b;
  box-shadow: 0 2px 8px rgba(245, 158, 11, 0.1);
}

.template-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.template-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  background: #fef3c7;
  color: #f59e0b;
}

.template-category {
  padding: 0.25rem 0.5rem;
  background: #f3f4f6;
  color: #6b7280;
  font-size: 0.75rem;
  border-radius: 9999px;
  font-weight: 500;
}

.template-name {
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 0.5rem 0;
}

.template-description {
  color: #6b7280;
  font-size: 0.875rem;
  margin: 0 0 1rem 0;
}

.template-actions {
  display: flex;
  gap: 0.5rem;
}

.template-btn {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;
}

.template-btn:not(.secondary) {
  background: #f59e0b;
  color: white;
  border: 1px solid #f59e0b;
}

.template-btn:not(.secondary):hover {
  background: #d97706;
}

.template-btn.secondary {
  background: white;
  color: #374151;
  border: 1px solid #d1d5db;
}

.template-btn.secondary:hover {
  background: #f9fafb;
}

.automation-activity {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.activity-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.activity-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #f3f4f6;
  border-radius: 0.5rem;
}

.activity-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
}

.activity-icon.success {
  background: #dcfce7;
  color: #16a34a;
}

.activity-icon.info {
  background: #dbeafe;
  color: #2563eb;
}

.activity-icon.warning {
  background: #fef3c7;
  color: #d97706;
}

.activity-icon.error {
  background: #fee2e2;
  color: #dc2626;
}

.activity-info {
  flex: 1;
}

.activity-message {
  color: #1f2937;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
}

.activity-time {
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

.status-badge.completed {
  background: #d1fae5;
  color: #065f46;
}

.status-badge.reviewed {
  background: #dbeafe;
  color: #1e40af;
}

.status-badge.failed {
  background: #fee2e2;
  color: #991b1b;
}

.automation-metrics {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.metric-card {
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.metric-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  color: #6b7280;
  font-size: 0.875rem;
  font-weight: 500;
}

.metric-icon {
  width: 1rem;
  height: 1rem;
}

.time-chart {
  display: flex;
  align-items: end;
  gap: 0.5rem;
  height: 4rem;
  margin-bottom: 1rem;
}

.time-bar {
  flex: 1;
  background: #f59e0b;
  border-radius: 0.125rem;
  position: relative;
  display: flex;
  align-items: end;
  justify-content: center;
  padding-bottom: 0.25rem;
}

.time-value {
  color: white;
  font-size: 0.6rem;
  font-weight: 600;
}

.success-rate {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.rate-circle {
  position: relative;
  width: 5rem;
  height: 5rem;
}

.rate-fill {
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  stroke: #f59e0b;
  stroke-width: 4;
  fill: none;
  stroke-dasharray: 100;
  stroke-linecap: round;
  transform: rotate(-90deg);
}

.rate-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 700;
  color: #1f2937;
}

.trend-indicators {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.trend-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.trend-label {
  color: #6b7280;
  font-size: 0.875rem;
}

.trend-value {
  font-weight: 600;
  font-size: 0.875rem;
}

.trend-value.positive {
  color: #10b981;
}

.metric-summary {
  color: #6b7280;
  font-size: 0.875rem;
  text-align: center;
}
</style>
