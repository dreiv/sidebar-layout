<template>
  <div class="reports-view">
    <div class="view-header">
      <h1 class="view-title">
        <BarChart3 class="title-icon" />
        Reports & Analytics
      </h1>
      <p class="view-description">Generate and view detailed reports and analytics</p>
    </div>

    <div class="reports-stats">
      <div class="stat-card">
        <div class="stat-value">24</div>
        <div class="stat-label">Total Reports</div>
        <div class="stat-change positive">+3 this week</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">156</div>
        <div class="stat-label">Data Points</div>
        <div class="stat-change">Updated daily</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">89%</div>
        <div class="stat-label">Accuracy Rate</div>
        <div class="stat-change positive">+2%</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">12</div>
        <div class="stat-label">Scheduled Reports</div>
        <div class="stat-change">Next: 2h</div>
      </div>
    </div>

    <div class="reports-actions">
      <button class="btn btn-primary">
        <Plus class="btn-icon" />
        New Report
      </button>
      <button class="btn btn-secondary">
        <Download class="btn-icon" />
        Export All
      </button>
      <button class="btn btn-secondary">
        <Calendar class="btn-icon" />
        Schedule
      </button>
      <button class="btn btn-secondary">
        <Settings class="btn-icon" />
        Configure
      </button>
    </div>

    <div class="reports-content">
      <div class="quick-reports">
        <h3 class="section-title">Quick Reports</h3>
        <div class="quick-reports-grid">
          <div v-for="report in quickReports" :key="report.id" class="quick-report-card">
            <div class="report-icon">
              <component :is="report.icon" />
            </div>
            <div class="report-info">
              <h4 class="report-name">{{ report.name }}</h4>
              <p class="report-description">{{ report.description }}</p>
            </div>
            <button class="generate-btn">
              <Play class="btn-icon" />
              Generate
            </button>
          </div>
        </div>
      </div>

      <div class="recent-reports">
        <h3 class="section-title">Recent Reports</h3>
        <div class="reports-table">
          <table>
            <thead>
              <tr>
                <th>Report Name</th>
                <th>Type</th>
                <th>Generated</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="report in recentReports" :key="report.id">
                <td class="report-name-cell">
                  <div class="report-name">{{ report.name }}</div>
                  <div class="report-subtitle">{{ report.description }}</div>
                </td>
                <td>
                  <span class="report-type" :class="report.type">{{ report.type }}</span>
                </td>
                <td class="report-date">{{ report.generated }}</td>
                <td>
                  <span class="report-status" :class="report.status">{{ report.status }}</span>
                </td>
                <td class="actions">
                  <button class="action-btn">
                    <Eye class="action-icon" />
                  </button>
                  <button class="action-btn">
                    <Download class="action-icon" />
                  </button>
                  <button class="action-btn">
                    <Share class="action-icon" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="report-charts">
        <h3 class="section-title">Analytics Overview</h3>
        <div class="charts-grid">
          <div class="chart-card">
            <div class="chart-header">
              <h4>Monthly Revenue</h4>
              <span class="chart-period">Last 6 months</span>
            </div>
            <div class="chart-container">
              <div class="bar-chart">
                <div class="bar" style="height: 60%">
                  <span class="bar-value">$45k</span>
                </div>
                <div class="bar" style="height: 80%">
                  <span class="bar-value">$62k</span>
                </div>
                <div class="bar" style="height: 45%">
                  <span class="bar-value">$38k</span>
                </div>
                <div class="bar" style="height: 90%">
                  <span class="bar-value">$72k</span>
                </div>
                <div class="bar" style="height: 75%">
                  <span class="bar-value">$58k</span>
                </div>
                <div class="bar" style="height: 95%">
                  <span class="bar-value">$78k</span>
                </div>
              </div>
              <div class="chart-labels">
                <span>Jul</span>
                <span>Aug</span>
                <span>Sep</span>
                <span>Oct</span>
                <span>Nov</span>
                <span>Dec</span>
              </div>
            </div>
          </div>

          <div class="chart-card">
            <div class="chart-header">
              <h4>User Activity</h4>
              <span class="chart-period">This week</span>
            </div>
            <div class="activity-metrics">
              <div class="metric">
                <div class="metric-label">Daily Active Users</div>
                <div class="metric-value">1,247</div>
                <div class="metric-trend positive">+12%</div>
              </div>
              <div class="metric">
                <div class="metric-label">Session Duration</div>
                <div class="metric-value">23m 45s</div>
                <div class="metric-trend positive">+8%</div>
              </div>
              <div class="metric">
                <div class="metric-label">Page Views</div>
                <div class="metric-value">8,934</div>
                <div class="metric-trend negative">-3%</div>
              </div>
            </div>
          </div>

          <div class="chart-card">
            <div class="chart-header">
              <h4>Performance Metrics</h4>
              <span class="chart-period">Real-time</span>
            </div>
            <div class="performance-grid">
              <div class="perf-item">
                <div class="perf-circle" style="--progress: 85%">
                  <span>85%</span>
                </div>
                <div class="perf-label">CPU Usage</div>
              </div>
              <div class="perf-item">
                <div class="perf-circle" style="--progress: 62%">
                  <span>62%</span>
                </div>
                <div class="perf-label">Memory</div>
              </div>
              <div class="perf-item">
                <div class="perf-circle" style="--progress: 94%">
                  <span>94%</span>
                </div>
                <div class="perf-label">Disk I/O</div>
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
  BarChart3,
  Plus,
  Download,
  Calendar,
  Settings,
  Play,
  Eye,
  Share,
  TrendingUp,
  Users,
  DollarSign,
  Activity,
  PieChart,
} from 'lucide-vue-next'
import { ref } from 'vue'

const quickReports = ref([
  {
    id: 1,
    name: 'Sales Summary',
    description: 'Overview of sales performance',
    icon: DollarSign,
  },
  {
    id: 2,
    name: 'User Analytics',
    description: 'User engagement and behavior',
    icon: Users,
  },
  {
    id: 3,
    name: 'Performance Report',
    description: 'System performance metrics',
    icon: Activity,
  },
  {
    id: 4,
    name: 'Growth Analysis',
    description: 'Business growth trends',
    icon: TrendingUp,
  },
  {
    id: 5,
    name: 'Market Share',
    description: 'Competitive analysis',
    icon: PieChart,
  },
])

const recentReports = ref([
  {
    id: 1,
    name: 'Monthly Sales Report',
    description: 'December 2024 sales analysis',
    type: 'sales',
    generated: '2024-01-15',
    status: 'completed',
  },
  {
    id: 2,
    name: 'User Engagement Analysis',
    description: 'Q4 user behavior insights',
    type: 'analytics',
    generated: '2024-01-14',
    status: 'completed',
  },
  {
    id: 3,
    name: 'Performance Monitoring',
    description: 'System performance overview',
    type: 'performance',
    generated: '2024-01-14',
    status: 'processing',
  },
  {
    id: 4,
    name: 'Security Audit',
    description: 'Monthly security assessment',
    type: 'security',
    generated: '2024-01-13',
    status: 'completed',
  },
  {
    id: 5,
    name: 'Financial Summary',
    description: 'Year-end financial report',
    type: 'financial',
    generated: '2024-01-12',
    status: 'scheduled',
  },
])
</script>

<style scoped>
.reports-view {
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
  color: #059669;
}

.view-description {
  color: #6b7280;
  font-size: 1rem;
  margin: 0;
}

.reports-stats {
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

.reports-actions {
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
  background: #059669;
  color: white;
}

.btn-primary:hover {
  background: #047857;
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

.reports-content {
  display: grid;
  gap: 2rem;
}

.section-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 1rem 0;
}

.quick-reports {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.quick-reports-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
}

.quick-report-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  transition: all 0.2s;
}

.quick-report-card:hover {
  border-color: #059669;
  box-shadow: 0 2px 8px rgba(5, 150, 105, 0.1);
}

.report-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
  background: #ecfdf5;
  color: #059669;
}

.report-info {
  flex: 1;
}

.report-name {
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 0.25rem 0;
}

.report-description {
  color: #6b7280;
  font-size: 0.875rem;
  margin: 0;
}

.generate-btn {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem 1rem;
  border: 1px solid #059669;
  border-radius: 0.375rem;
  background: white;
  color: #059669;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;
}

.generate-btn:hover {
  background: #059669;
  color: white;
}

.recent-reports {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.reports-table {
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

.report-name-cell .report-name {
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.25rem;
}

.report-name-cell .report-subtitle {
  color: #6b7280;
  font-size: 0.875rem;
}

.report-type {
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
}

.report-type.sales {
  background: #dcfce7;
  color: #166534;
}

.report-type.analytics {
  background: #dbeafe;
  color: #1e40af;
}

.report-type.performance {
  background: #fef3c7;
  color: #92400e;
}

.report-type.security {
  background: #fee2e2;
  color: #991b1b;
}

.report-type.financial {
  background: #f3e8ff;
  color: #7c2d12;
}

.report-date {
  color: #6b7280;
  font-size: 0.875rem;
}

.report-status {
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
}

.report-status.completed {
  background: #d1fae5;
  color: #065f46;
}

.report-status.processing {
  background: #fef3c7;
  color: #92400e;
}

.report-status.scheduled {
  background: #dbeafe;
  color: #1e40af;
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

.report-charts {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.charts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.chart-card {
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.chart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.chart-header h4 {
  margin: 0;
  font-weight: 600;
  color: #1f2937;
}

.chart-period {
  color: #6b7280;
  font-size: 0.875rem;
}

.bar-chart {
  display: flex;
  align-items: end;
  gap: 0.5rem;
  height: 8rem;
  margin-bottom: 0.5rem;
}

.bar {
  flex: 1;
  background: #059669;
  border-radius: 0.25rem 0.25rem 0 0;
  position: relative;
  display: flex;
  align-items: end;
  justify-content: center;
  padding-bottom: 0.5rem;
}

.bar-value {
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
}

.chart-labels {
  display: flex;
  justify-content: space-between;
  color: #6b7280;
  font-size: 0.875rem;
}

.activity-metrics {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.metric {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.metric-label {
  color: #6b7280;
  font-size: 0.875rem;
}

.metric-value {
  font-weight: 600;
  color: #1f2937;
}

.metric-trend {
  font-size: 0.875rem;
  font-weight: 600;
}

.metric-trend.positive {
  color: #10b981;
}

.metric-trend.negative {
  color: #ef4444;
}

.performance-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.perf-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.perf-circle {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: 4px solid #e5e7eb;
  border-top-color: #059669;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #1f2937;
  position: relative;
}

.perf-circle::before {
  content: '';
  position: absolute;
  top: -4px;
  left: -4px;
  right: -4px;
  bottom: -4px;
  border-radius: 50%;
  border: 4px solid transparent;
  border-top-color: #059669;
  transform: rotate(calc(var(--progress) * 3.6deg));
}

.perf-label {
  color: #6b7280;
  font-size: 0.875rem;
  text-align: center;
}

tbody tr:hover {
  background: #f9fafb;
}
</style>
