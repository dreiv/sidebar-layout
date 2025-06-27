<template>
  <div class="orders-view">
    <div class="view-header">
      <h1 class="view-title">
        <ShoppingCart class="title-icon" />
        Orders Management
      </h1>
      <p class="view-description">Manage customer orders and transactions</p>
    </div>

    <div class="orders-stats">
      <div class="stat-card">
        <div class="stat-value">127</div>
        <div class="stat-label">Active Orders</div>
        <div class="stat-change positive">+12%</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">$23,456</div>
        <div class="stat-label">Today's Revenue</div>
        <div class="stat-change positive">+8%</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">45</div>
        <div class="stat-label">Pending</div>
        <div class="stat-change negative">-3%</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">98.5%</div>
        <div class="stat-label">Fulfillment Rate</div>
        <div class="stat-change positive">+2%</div>
      </div>
    </div>

    <div class="orders-actions">
      <button class="btn btn-primary">
        <Plus class="btn-icon" />
        New Order
      </button>
      <button class="btn btn-secondary">
        <Download class="btn-icon" />
        Export Orders
      </button>
      <button class="btn btn-secondary">
        <Filter class="btn-icon" />
        Filter
      </button>
    </div>

    <div class="orders-table">
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in mockOrders" :key="order.id">
            <td class="order-id">#{{ order.id }}</td>
            <td>{{ order.customer }}</td>
            <td class="amount">${{ order.amount }}</td>
            <td>
              <span class="status" :class="order.status.toLowerCase()">
                {{ order.status }}
              </span>
            </td>
            <td>{{ order.date }}</td>
            <td class="actions">
              <button class="action-btn">
                <Eye class="action-icon" />
              </button>
              <button class="action-btn">
                <Edit class="action-icon" />
              </button>
              <button class="action-btn">
                <Trash class="action-icon" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ShoppingCart, Plus, Download, Filter, Eye, Edit, Trash } from 'lucide-vue-next'
import { ref } from 'vue'

const mockOrders = ref([
  {
    id: '1001',
    customer: 'John Smith',
    amount: '245.99',
    status: 'Completed',
    date: '2024-01-15',
  },
  {
    id: '1002',
    customer: 'Sarah Johnson',
    amount: '89.50',
    status: 'Pending',
    date: '2024-01-15',
  },
  {
    id: '1003',
    customer: 'Mike Wilson',
    amount: '567.25',
    status: 'Processing',
    date: '2024-01-14',
  },
  {
    id: '1004',
    customer: 'Emily Brown',
    amount: '123.75',
    status: 'Shipped',
    date: '2024-01-14',
  },
  {
    id: '1005',
    customer: 'David Lee',
    amount: '445.00',
    status: 'Cancelled',
    date: '2024-01-13',
  },
])
</script>

<style scoped>
.orders-view {
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
  color: #3b82f6;
}

.view-description {
  color: #6b7280;
  font-size: 1rem;
  margin: 0;
}

.orders-stats {
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
}

.stat-change.positive {
  color: #10b981;
}

.stat-change.negative {
  color: #ef4444;
}

.orders-actions {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
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
  background: #3b82f6;
  color: white;
}

.btn-primary:hover {
  background: #2563eb;
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

.orders-table {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
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

td {
  color: #1f2937;
}

.order-id {
  font-family: 'Monaco', 'Menlo', monospace;
  font-weight: 600;
}

.amount {
  font-weight: 600;
  color: #059669;
}

.status {
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
}

.status.completed {
  background: #d1fae5;
  color: #065f46;
}

.status.pending {
  background: #fef3c7;
  color: #92400e;
}

.status.processing {
  background: #dbeafe;
  color: #1e40af;
}

.status.shipped {
  background: #e0e7ff;
  color: #3730a3;
}

.status.cancelled {
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

.action-btn:hover .action-icon {
  color: #374151;
}

tbody tr:hover {
  background: #f9fafb;
}
</style>
