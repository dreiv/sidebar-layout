<template>
  <div class="view-container">
    <h1><File class="view-header-icon" /> Files</h1>
    <div class="content-section">
      <div class="file-list">
        <div class="file-item" v-for="file in files" :key="file.id">
          <span class="file-icon">{{ file.icon }}</span>
          <span class="file-name">{{ file.name }}</span>
          <span class="file-size">{{ file.size }}</span>
        </div>
      </div>
      <p>Manage your files and documents. Upload, organize, and share your content with ease.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { File } from 'lucide-vue-next'

const files = ref([
  { id: 1, name: 'Project Proposal.pdf', icon: '📄', size: '2.3 MB' },
  { id: 2, name: 'Design Assets.zip', icon: '🗂️', size: '15.7 MB' },
  { id: 3, name: 'Meeting Notes.docx', icon: '📝', size: '1.2 MB' },
  { id: 4, name: 'Budget Spreadsheet.xlsx', icon: '📊', size: '856 KB' },
  { id: 5, name: 'Presentation.pptx', icon: '📑', size: '4.1 MB' },
])
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

.file-list {
  background: var(--color-bg-primary);
  border-radius: var(--radius-lg);
  box-shadow: 0 var(--space-2) var(--space-sm) var(--color-shadow-medium);
  margin: var(--space-3xl) 0;
}

.file-item {
  display: flex;
  align-items: center;
  padding: var(--space-xl) var(--space-3xl);
  border-bottom: var(--space-1) solid var(--color-border-lighter);
  gap: var(--space-xl);
}

.file-item:last-child {
  border-bottom: none;
}

.file-icon {
  font-size: 24px;
}

.file-name {
  flex: 1;
  font-weight: 500;
}

.file-size {
  color: var(--color-text-tertiary);
  font-size: 0.9em;
}
</style>
