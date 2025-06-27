<template>
  <div class="main-content">
    <div class="content-area">
      <router-view v-slot="{ Component, route }">
        <Transition name="page" mode="out-in">
          <component :is="Component" :key="route.path" />
        </Transition>
      </router-view>
    </div>
  </div>
</template>

<style scoped>
/* Main Content - uses flexbox to take remaining space */
.main-content {
  flex: 1;
  background-color: var(--color-bg-secondary);
  overflow: auto;
}

.content-area {
  padding: var(--space-7xl);
  max-width: 1000px;
  margin: 0 auto;
}

.content-area h1 {
  color: var(--color-text-primary);
  font-size: 2.5em;
  margin-bottom: var(--space-3xl);
  font-weight: 700;
}

.content-area > p {
  font-size: 1.2em;
  line-height: 1.6;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-7xl);
}

.main-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-4xl);
  margin-bottom: var(--space-7xl);
}

.feature-card {
  background: var(--color-bg-primary);
  padding: var(--space-5xl);
  border-radius: var(--radius-xl);
  box-shadow: 0 4px 20px var(--color-shadow-light);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.feature-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px var(--color-shadow-dark);
}

.feature-card h3 {
  margin: 0 0 var(--space-xl) 0;
  color: var(--color-text-primary);
  font-size: 1.4em;
  font-weight: 600;
}

.feature-card p {
  margin: 0;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

.info-section {
  background: var(--color-bg-primary);
  padding: var(--space-6xl);
  border-radius: var(--radius-xl);
  box-shadow: 0 4px 20px var(--color-shadow-light);
}

.info-section h2 {
  color: var(--color-text-primary);
  font-size: 1.8em;
  margin-bottom: var(--space-3xl);
  font-weight: 600;
}

.info-section ul {
  list-style: none;
  padding: 0;
}

.info-section li {
  padding: var(--space-lg) 0;
  border-bottom: var(--space-1) solid var(--color-border-section);
  color: var(--color-text-secondary);
  line-height: 1.6;
  position: relative;
  padding-left: var(--space-4xl);
}

.info-section li:before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--color-primary);
  font-weight: bold;
}

.info-section li:last-child {
  border-bottom: none;
}

/* Page transition styles */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>
