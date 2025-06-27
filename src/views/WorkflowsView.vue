<template>
  <div class="workflows-view">
    <div class="view-header">
      <h1 class="view-title">
        <Workflow class="title-icon" />
        Workflows & Processes
      </h1>
      <p class="view-description">Manage automated workflows and business processes</p>
    </div>

    <div class="workflows-stats">
      <div class="stat-card">
        <div class="stat-value">18</div>
        <div class="stat-label">Active Workflows</div>
        <div class="stat-change positive">+3 this month</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">247</div>
        <div class="stat-label">Executions Today</div>
        <div class="stat-change positive">+15%</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">99.2%</div>
        <div class="stat-label">Success Rate</div>
        <div class="stat-change positive">+0.3%</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">45s</div>
        <div class="stat-label">Avg Execution Time</div>
        <div class="stat-change positive">-12s</div>
      </div>
    </div>

    <div class="workflows-actions">
      <button class="btn btn-primary">
        <Plus class="btn-icon" />
        Create Workflow
      </button>
      <button class="btn btn-secondary">
        <Play class="btn-icon" />
        Run Workflow
      </button>
      <button class="btn btn-secondary">
        <Upload class="btn-icon" />
        Import
      </button>
      <button class="btn btn-secondary">
        <Download class="btn-icon" />
        Export
      </button>
    </div>

    <div class="workflows-content">
      <div class="workflows-list">
        <h3 class="section-title">Recent Workflows</h3>
        <div class="workflows-grid">
          <div v-for="workflow in mockWorkflows" :key="workflow.id" class="workflow-card">
            <div class="workflow-header">
              <div class="workflow-info">
                <h4 class="workflow-name">{{ workflow.name }}</h4>
                <p class="workflow-description">{{ workflow.description }}</p>
              </div>
              <div class="workflow-status">
                <span class="status-indicator" :class="workflow.status"></span>
                <span class="status-text">{{ workflow.status }}</span>
              </div>
            </div>

            <div class="workflow-stats">
              <div class="workflow-stat">
                <span class="stat-label">Last Run</span>
                <span class="stat-value">{{ workflow.lastRun }}</span>
              </div>
              <div class="workflow-stat">
                <span class="stat-label">Executions</span>
                <span class="stat-value">{{ workflow.executions }}</span>
              </div>
              <div class="workflow-stat">
                <span class="stat-label">Success Rate</span>
                <span class="stat-value">{{ workflow.successRate }}%</span>
              </div>
            </div>

            <div class="workflow-steps">
              <div class="steps-preview">
                <div v-for="step in workflow.steps.slice(0, 3)" :key="step.id" class="step-node">
                  <component :is="step.icon" class="step-icon" />
                </div>
                <div v-if="workflow.steps.length > 3" class="step-more">
                  +{{ workflow.steps.length - 3 }}
                </div>
              </div>
            </div>

            <div class="workflow-actions">
              <button class="workflow-btn">
                <Play class="btn-icon" />
                Run
              </button>
              <button class="workflow-btn">
                <Edit class="btn-icon" />
                Edit
              </button>
              <button class="workflow-btn">
                <Copy class="btn-icon" />
                Clone
              </button>
              <button class="workflow-btn danger">
                <Trash class="btn-icon" />
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="workflow-templates">
        <h3 class="section-title">Workflow Templates</h3>
        <div class="templates-grid">
          <div v-for="template in mockTemplates" :key="template.id" class="template-card">
            <div class="template-icon">
              <component :is="template.icon" />
            </div>
            <div class="template-info">
              <h4 class="template-name">{{ template.name }}</h4>
              <p class="template-description">{{ template.description }}</p>
            </div>
            <button class="use-template-btn">
              <Plus class="btn-icon" />
              Use Template
            </button>
          </div>
        </div>
      </div>

      <div class="execution-history">
        <h3 class="section-title">Recent Executions</h3>
        <div class="execution-table">
          <table>
            <thead>
              <tr>
                <th>Workflow</th>
                <th>Started</th>
                <th>Duration</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="execution in mockExecutions" :key="execution.id">
                <td class="workflow-name-cell">{{ execution.workflow }}</td>
                <td class="execution-time">{{ execution.started }}</td>
                <td class="execution-duration">{{ execution.duration }}</td>
                <td>
                  <span class="execution-status" :class="execution.status">
                    {{ execution.status }}
                  </span>
                </td>
                <td class="actions">
                  <button class="action-btn">
                    <Eye class="action-icon" />
                  </button>
                  <button class="action-btn">
                    <RotateCcw class="action-icon" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  Workflow,
  Plus,
  Play,
  Upload,
  Download,
  Edit,
  Copy,
  Trash,
  Eye,
  RotateCcw,
  Mail,
  Database,
  FileText,
  Users,
  Calendar,
  MessageSquare,
} from 'lucide-vue-next'
import { ref } from 'vue'

const mockWorkflows = ref([
  {
    id: 1,
    name: 'Email Notification Workflow',
    description: 'Sends automated email notifications for new orders',
    status: 'active',
    lastRun: '2 hours ago',
    executions: 45,
    successRate: 98.5,
    steps: [
      { id: 1, icon: Database },
      { id: 2, icon: FileText },
      { id: 3, icon: Mail },
      { id: 4, icon: Users },
    ],
  },
  {
    id: 2,
    name: 'Data Backup Process',
    description: 'Daily backup of critical business data',
    status: 'active',
    lastRun: '12 hours ago',
    executions: 30,
    successRate: 100,
    steps: [
      { id: 1, icon: Database },
      { id: 2, icon: FileText },
      { id: 3, icon: Upload },
    ],
  },
  {
    id: 3,
    name: 'User Onboarding Flow',
    description: 'Welcome new users with setup tasks',
    status: 'paused',
    lastRun: '3 days ago',
    executions: 12,
    successRate: 95.2,
    steps: [
      { id: 1, icon: Users },
      { id: 2, icon: Mail },
      { id: 3, icon: Calendar },
      { id: 4, icon: MessageSquare },
      { id: 5, icon: FileText },
    ],
  },
])

const mockTemplates = ref([
  {
    id: 1,
    name: 'Order Processing',
    description: 'Automate order confirmation and fulfillment',
    icon: FileText,
  },
  {
    id: 2,
    name: 'Customer Support',
    description: 'Route and assign customer inquiries',
    icon: MessageSquare,
  },
  {
    id: 3,
    name: 'Data Sync',
    description: 'Synchronize data between systems',
    icon: Database,
  },
  {
    id: 4,
    name: 'Approval Process',
    description: 'Multi-step approval workflow',
    icon: Users,
  },
])

const mockExecutions = ref([
  {
    id: 1,
    workflow: 'Email Notification Workflow',
    started: '15:30:22',
    duration: '2.3s',
    status: 'completed',
  },
  {
    id: 2,
    workflow: 'Data Backup Process',
    started: '03:00:00',
    duration: '4m 12s',
    status: 'completed',
  },
  {
    id: 3,
    workflow: 'User Onboarding Flow',
    started: '14:45:10',
    duration: '1.8s',
    status: 'failed',
  },
  {
    id: 4,
    workflow: 'Email Notification Workflow',
    started: '14:20:05',
    duration: '3.1s',
    status: 'running',
  },
])
</script>

<style scoped>
.workflows-view {
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
  color: #8b5cf6;
}

.view-description {
  color: #6b7280;
  font-size: 1rem;
  margin: 0;
}

.workflows-stats {
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

.workflows-actions {
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
  background: #8b5cf6;
  color: white;
}

.btn-primary:hover {
  background: #7c3aed;
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

.workflows-content {
  display: grid;
  gap: 2rem;
}

.section-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 1rem 0;
}

.workflows-list {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.workflows-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
}

.workflow-card {
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 1.5rem;
  transition: all 0.2s;
}

.workflow-card:hover {
  border-color: #8b5cf6;
  box-shadow: 0 4px 12px rgba(139, 92, 246, 0.1);
}

.workflow-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.workflow-name {
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 0.25rem 0;
}

.workflow-description {
  color: #6b7280;
  font-size: 0.875rem;
  margin: 0;
}

.workflow-status {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.status-indicator {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
}

.status-indicator.active {
  background: #10b981;
}

.status-indicator.paused {
  background: #f59e0b;
}

.status-text {
  font-size: 0.875rem;
  font-weight: 500;
  color: #6b7280;
  text-transform: capitalize;
}

.workflow-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
  padding: 1rem 0;
  border-top: 1px solid #f3f4f6;
  border-bottom: 1px solid #f3f4f6;
}

.workflow-stat {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.workflow-stat .stat-label {
  color: #9ca3af;
  font-size: 0.75rem;
  text-transform: uppercase;
  font-weight: 500;
}

.workflow-stat .stat-value {
  color: #1f2937;
  font-weight: 600;
  font-size: 0.875rem;
}

.workflow-steps {
  margin-bottom: 1rem;
}

.steps-preview {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.step-node {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: #f3e8ff;
  color: #8b5cf6;
}

.step-icon {
  width: 1rem;
  height: 1rem;
}

.step-more {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: #f3f4f6;
  color: #6b7280;
  font-size: 0.75rem;
  font-weight: 500;
}

.workflow-actions {
  display: flex;
  gap: 0.5rem;
}

.workflow-btn {
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

.workflow-btn:hover {
  background: #f9fafb;
}

.workflow-btn.danger {
  color: #dc2626;
  border-color: #fca5a5;
}

.workflow-btn.danger:hover {
  background: #fef2f2;
}

.workflow-templates {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.templates-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.template-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  transition: all 0.2s;
}

.template-card:hover {
  border-color: #8b5cf6;
  box-shadow: 0 2px 8px rgba(139, 92, 246, 0.1);
}

.template-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
  background: #f3e8ff;
  color: #8b5cf6;
}

.template-info {
  flex: 1;
}

.template-name {
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 0.25rem 0;
  font-size: 0.875rem;
}

.template-description {
  color: #6b7280;
  font-size: 0.75rem;
  margin: 0;
}

.use-template-btn {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.375rem 0.75rem;
  border: 1px solid #8b5cf6;
  border-radius: 0.375rem;
  background: white;
  color: #8b5cf6;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.2s;
}

.use-template-btn:hover {
  background: #8b5cf6;
  color: white;
}

.execution-history {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.execution-table {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 0.75rem;
  text-align: left;
  border-bottom: 1px solid #e5e7eb;
}

th {
  background: #f9fafb;
  font-weight: 600;
  color: #374151;
  font-size: 0.875rem;
}

.workflow-name-cell {
  font-weight: 500;
  color: #1f2937;
}

.execution-time,
.execution-duration {
  color: #6b7280;
  font-size: 0.875rem;
  font-family: 'Monaco', 'Menlo', monospace;
}

.execution-status {
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
}

.execution-status.completed {
  background: #d1fae5;
  color: #065f46;
}

.execution-status.running {
  background: #dbeafe;
  color: #1e40af;
}

.execution-status.failed {
  background: #fee2e2;
  color: #991b1b;
}

.actions {
  display: flex;
  gap: 0.5rem;
}

.action-btn {
  padding: 0.25rem;
  border: none;
  background: transparent;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.2s;
}

.action-btn:hover {
  background: #f3f4f6;
}

.action-icon {
  width: 1rem;
  height: 1rem;
  color: #6b7280;
}

tbody tr:hover {
  background: #f9fafb;
}
</style>
