<template>
  <div class="view-container">
    <h1><LineChart class="view-header-icon" /> Analytics</h1>
    <div class="content-section">
      <div class="analytics-grid">
        <div class="chart-card">
          <h3>Monthly Revenue</h3>
          <div class="chart-container">
            <svg class="chart" viewBox="0 0 100 60">
              <!-- X-axis -->
              <line x1="0" y1="50" x2="100" y2="50" stroke="var(--color-text-tertiary)" />

              <!-- Bars -->
              <rect x="5" y="25" width="10" height="25" fill="var(--color-primary)">
                <title>Jan: $1200</title>
              </rect>
              <text x="10" y="58" font-size="5" fill="var(--color-text-tertiary)">J</text>

              <rect x="20" y="15" width="10" height="35" fill="var(--color-primary)">
                <title>Feb: $1900</title>
              </rect>
              <text x="25" y="58" font-size="5" fill="var(--color-text-tertiary)">F</text>

              <text
                x="40"
                y="4"
                font-size="5"
                font-weight="bold"
                fill="var(--color-primary-hover)"
                text-anchor="middle"
              >
                $2800
              </text>
              <rect x="35" y="5" width="10" height="45" fill="var(--color-primary-hover)">
                <title>Mar: $2800</title>
              </rect>
              <text x="40" y="58" font-size="5" fill="var(--color-text-tertiary)">M</text>

              <rect x="50" y="20" width="10" height="30" fill="var(--color-primary)">
                <title>Apr: $2100</title>
              </rect>
              <text x="55" y="58" font-size="5" fill="var(--color-text-tertiary)">A</text>

              <rect x="65" y="10" width="10" height="40" fill="var(--color-primary)">
                <title>May: $2500</title>
              </rect>
              <text x="70" y="58" font-size="5" fill="var(--color-text-tertiary)">M</text>

              <text x="85" y="28" font-size="5" fill="var(--color-text-dark)" text-anchor="middle">
                $1500
              </text>
              <rect x="80" y="30" width="10" height="20" fill="var(--color-primary)">
                <title>Jun: $1500</title>
              </rect>
              <text x="85" y="58" font-size="5" fill="var(--color-text-tertiary)">J</text>
            </svg>
          </div>
        </div>
        <div class="chart-card">
          <h3>User Growth</h3>
          <div class="chart-container">
            <svg class="chart" viewBox="0 0 100 55">
              <!-- Axes -->
              <line x1="5" y1="0" x2="5" y2="50" stroke="var(--color-text-tertiary)" />
              <line x1="5" y1="50" x2="95" y2="50" stroke="var(--color-text-tertiary)" />

              <text x="20" y="25" font-size="5" fill="var(--color-text-dark)" text-anchor="middle">
                +50
              </text>
              <text
                x="95"
                y="4"
                font-size="5"
                font-weight="bold"
                fill="var(--color-primary-hover)"
                text-anchor="middle"
              >
                +190
              </text>
              <polyline
                fill="none"
                stroke="var(--color-primary)"
                stroke-width="2"
                points="5,40 20,30 35,20 50,25 65,15 80,10 95,7"
              />
              <circle cx="20" cy="30" r="2" fill="var(--color-primary-hover)">
                <title>+50 users</title>
              </circle>
              <circle cx="65" cy="15" r="2" fill="var(--color-primary-hover)">
                <title>+120 users</title>
              </circle>
              <circle cx="95" cy="7" r="2" fill="var(--color-primary-hover)">
                <title>+190 users</title>
              </circle>
            </svg>
          </div>
        </div>
        <div class="chart-card">
          <h3>Traffic Sources</h3>
          <div class="chart-container pie-chart-container">
            <svg class="chart pie-chart" viewBox="-10 -10 120 120">
              <path d="M 50,50 L 50,0 A 50,50 0 0 1 100,50 Z" fill="var(--color-primary)">
                <title>Organic: 50%</title>
              </path>
              <path
                d="M 50,50 L 100,50 A 50,50 0 0 1 2.03,65.06 Z"
                fill="var(--color-primary-hover)"
              >
                <title>Referral: 40%</title>
              </path>
              <path d="M 50,50 L 2.03,65.06 A 50,50 0 0 1 50,0 Z" fill="var(--color-accent)">
                <title>Direct: 10%</title>
              </path>
            </svg>
            <div class="legend">
              <div class="legend-item">
                <span class="legend-color" style="background-color: var(--color-primary)"></span>
                Organic (50%)
              </div>
              <div class="legend-item">
                <span
                  class="legend-color"
                  style="background-color: var(--color-primary-hover)"
                ></span>
                Referral (40%)
              </div>
              <div class="legend-item">
                <span class="legend-color" style="background-color: var(--color-accent)"></span>
                Direct (10%)
              </div>
            </div>
          </div>
        </div>
        <div class="chart-card">
          <h3>Performance Metrics</h3>
          <div class="metric-list">
            <div class="metric">Page Load Speed: 2.3s</div>
            <div class="metric">Bounce Rate: 34%</div>
            <div class="metric">Conversion Rate: 3.2%</div>
          </div>
        </div>
      </div>
      <p>Track your application's performance with detailed analytics and insights.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LineChart } from 'lucide-vue-next'
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

.analytics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-3xl);
  margin: var(--space-3xl) 0;
}

.chart-card {
  background: var(--color-bg-primary);
  padding: var(--space-4xl);
  border-radius: var(--radius-lg);
  box-shadow: 0 var(--space-2) var(--space-sm) var(--color-shadow-medium);
}

.chart-card h3 {
  margin-bottom: var(--space-3xl);
  color: var(--color-text-dark);
}

.chart-container {
  height: 200px;
  background: var(--color-bg-secondary);
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-tertiary);
  padding: var(--space-md);
  position: relative;
}

.pie-chart-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-lg);
}

.chart {
  width: 100%;
  height: 100%;
}

.pie-chart {
  max-height: 120px;
}

.chart rect:hover,
.chart circle:hover,
.chart path:hover {
  opacity: 0.8;
  cursor: pointer;
}

.legend {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  font-size: 0.9em;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

.legend-color {
  width: var(--space-lg);
  height: var(--space-lg);
  border-radius: var(--radius-sm);
}

.metric {
  padding: var(--space-lg);
  background: var(--color-bg-secondary);
  border-radius: var(--radius-sm);
  margin-bottom: var(--space-md);
  font-weight: 500;
}
</style>
