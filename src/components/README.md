# Vue Sidebar Components

This directory contains a modular, reusable sidebar system for Vue 3 applications.

## Architecture

### Components

#### `MainContent.vue`

- **Purpose**: Static main content area
- **Features**: Responsive layout, feature cards, usage instructions
- **Props**: None (static content)

#### `Sidebar/Sidebar.vue`

- **Purpose**: Main sidebar container with resize functionality
- **Features**: Responsive behavior, resize handle, width management
- **Props**: `isExpanded`, `width`
- **Events**: `toggle`, `navigate`, `resize`

#### `Sidebar/SidebarNavigation.vue`

- **Purpose**: Vertical navigation strip with icons and tooltips
- **Features**: Active route highlighting, hover tooltips, responsive tooltips
- **Props**: `isExpanded`
- **Events**: `toggle`, `navigate`

#### `Sidebar/SidebarContent.vue`

- **Purpose**: Content area for router views
- **Features**: Smooth transitions, conditional rendering
- **Props**: `isExpanded`

#### `UI/AppBackdrop.vue`

- **Purpose**: Mobile overlay backdrop
- **Features**: Smooth transitions, click-to-close
- **Props**: `visible`
- **Events**: `click`

### Composables

#### `useSidebarState.ts`

- **Purpose**: Sidebar state management with localStorage persistence
- **Returns**: `isExpanded`, `width`, `toggle`, `expand`, `collapse`, `setWidth`
- **Features**: Width constraints, reactive state, localStorage persistence
- **Storage Keys**: `sidebar-expanded`, `sidebar-width`

#### `useSidebarResize.ts`

- **Purpose**: Drag-to-resize functionality
- **Parameters**: `isExpanded`, `currentWidth`, `onWidthChange`
- **Returns**: `isResizing`, `dragIndicatorPosition`, `startResize`, `cleanup`
- **Features**: Mouse event handling, width constraints, cleanup

### Constants

#### `navigation.ts`

- **Purpose**: Navigation configuration and sidebar settings
- **Exports**: `NAVIGATION_ITEMS`, `SIDEBAR_CONFIG`, `NavigationItem` type
- **Features**: Centralized configuration, TypeScript types

## Usage

```vue
<script setup lang="ts">
import { useSidebarState } from '@/composables/useSidebarState'
import MainContent from '@/components/MainContent.vue'
import Sidebar from '@/components/Sidebar/Sidebar.vue'
import AppBackdrop from '@/components/UI/AppBackdrop.vue'

const { isExpanded, width, toggle, expand, setWidth } = useSidebarState()
</script>

<template>
  <div class="app-container">
    <MainContent />
    <AppBackdrop :visible="isExpanded" @click="toggle" />
    <Sidebar
      :is-expanded="isExpanded"
      :width="width"
      @toggle="toggle"
      @navigate="expand"
      @resize="setWidth"
    />
  </div>
</template>
```

## Features

- **Responsive Design**: Desktop sidebar pushes content, mobile/tablet overlays
- **Resizable**: Drag handle with min/max width constraints
- **Smooth Animations**: CSS transitions for all state changes
- **TypeScript**: Full type safety and intelliSense
- **Modular**: Each component has a single responsibility
- **Performant**: Proper event cleanup and optimized re-renders
- **Accessible**: Keyboard navigation, ARIA labels, semantic HTML

## Responsive Behavior

- **Desktop (>1024px)**: Sidebar pushes main content, tooltips enabled
- **Tablet/Mobile (≤1024px)**: Sidebar overlays content, backdrop appears, tooltips disabled

## Configuration

Modify `src/constants/navigation.ts` to customize:

- Navigation items (icons, labels, routes)
- Sidebar dimensions (min/max width, default width, collapsed width)
- Resize handle width
