<template>
  <div class="view-container">
    <h1><Calendar class="view-header-icon" /> Calendar</h1>
    <div class="content-section">
      <div class="calendar-header">
        <button class="nav-btn" @click="previousMonth">&lt;</button>
        <h2>{{ currentMonth }} {{ currentYear }}</h2>
        <button class="nav-btn" @click="nextMonth">&gt;</button>
      </div>

      <div class="calendar-grid">
        <div class="day-header" v-for="day in dayHeaders" :key="day">{{ day }}</div>
        <div
          v-for="date in calendarDays"
          :key="date.key"
          class="calendar-day"
          :class="{
            'other-month': !date.isCurrentMonth,
            today: date.isToday,
            'has-event': date.hasEvent,
          }"
        >
          <span class="day-number">{{ date.day }}</span>
          <div v-if="date.hasEvent" class="event-indicator"></div>
        </div>
      </div>

      <div class="upcoming-events">
        <h3>Upcoming Events</h3>
        <div class="event-list">
          <div v-for="event in upcomingEvents" :key="event.id" class="event-item">
            <div class="event-time">{{ event.time }}</div>
            <div class="event-details">
              <h4>{{ event.title }}</h4>
              <p>{{ event.description }}</p>
            </div>
            <div class="event-status" :class="event.priority">{{ event.priority }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Calendar } from 'lucide-vue-next'

const currentDate = ref(new Date())

const currentMonth = computed(() => {
  return currentDate.value.toLocaleDateString('en-US', { month: 'long' })
})

const currentYear = computed(() => {
  return currentDate.value.getFullYear()
})

const dayHeaders = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const calendarDays = computed(() => {
  const year = currentDate.value.getFullYear()
  const month = currentDate.value.getMonth()

  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  const startDate = new Date(firstDay)
  startDate.setDate(startDate.getDate() - firstDay.getDay())

  const days = []
  const today = new Date()

  for (let i = 0; i < 42; i++) {
    const date = new Date(startDate)
    date.setDate(startDate.getDate() + i)

    days.push({
      key: date.toISOString(),
      day: date.getDate(),
      isCurrentMonth: date.getMonth() === month,
      isToday: date.toDateString() === today.toDateString(),
      hasEvent: Math.random() > 0.8, // Random events for demo
    })
  }

  return days
})

const upcomingEvents = ref([
  {
    id: 1,
    title: 'Team Standup',
    description: 'Daily team sync meeting',
    time: '9:00 AM',
    priority: 'high',
  },
  {
    id: 2,
    title: 'Client Presentation',
    description: 'Present Q4 results to client',
    time: '2:00 PM',
    priority: 'high',
  },
  {
    id: 3,
    title: 'Code Review',
    description: 'Review pull requests',
    time: '4:30 PM',
    priority: 'medium',
  },
  {
    id: 4,
    title: 'Team Lunch',
    description: 'Monthly team lunch',
    time: '12:00 PM',
    priority: 'low',
  },
])

const previousMonth = () => {
  currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() - 1, 1)
}

const nextMonth = () => {
  currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1, 1)
}
</script>

<style scoped>
.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.nav-btn {
  background-color: var(--color-accent);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  font-weight: bold;
}

.nav-btn:hover {
  background-color: var(--color-accent-dark);
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
  background-color: var(--color-border-light);
  border: 1px solid var(--color-border-light);
  margin-bottom: 2rem;
}

.day-header {
  background-color: var(--color-bg-tertiary);
  padding: 0.75rem;
  text-align: center;
  font-weight: 600;
  color: var(--color-text-primary);
}

.calendar-day {
  background-color: var(--color-bg-primary);
  padding: 0.5rem;
  min-height: 80px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.calendar-day:hover {
  background-color: var(--color-bg-secondary);
}

.calendar-day.other-month {
  background-color: var(--color-bg-secondary);
  color: var(--color-text-tertiary);
}

.calendar-day.today {
  background-color: var(--color-accent);
  color: white;
}

.calendar-day.has-event .event-indicator {
  position: absolute;
  bottom: 4px;
  right: 4px;
  width: 8px;
  height: 8px;
  background-color: var(--color-accent);
  border-radius: 50%;
}

.calendar-day.today .event-indicator {
  background-color: white;
}

.day-number {
  font-weight: 500;
}

.upcoming-events h3 {
  margin-bottom: 1rem;
  color: var(--color-text-primary);
}

.event-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.event-item {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background-color: var(--color-bg-primary);
  border: 1px solid var(--color-border-light);
  border-radius: 0.5rem;
  align-items: center;
}

.event-time {
  font-weight: 600;
  color: var(--color-accent);
  min-width: 80px;
}

.event-details {
  flex: 1;
}

.event-details h4 {
  margin-bottom: 0.25rem;
  color: var(--color-text-primary);
}

.event-details p {
  color: var(--color-text-secondary);
  font-size: 0.9rem;
}

.event-status {
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
}

.event-status.high {
  background-color: #fee2e2;
  color: #dc2626;
}

.event-status.medium {
  background-color: #fef3c7;
  color: #d97706;
}

.event-status.low {
  background-color: #dcfce7;
  color: #16a34a;
}
</style>
