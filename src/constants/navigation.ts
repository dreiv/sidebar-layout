import type { FunctionalComponent } from 'vue'
import {
  LayoutDashboard,
  File,
  Users,
  LineChart,
  Bell,
  Settings,
  Info,
  Phone,
  Briefcase,
  Calendar,
  MessageSquare,
  ShoppingCart,
  Database,
  Shield,
  BarChart3,
  Workflow,
  Cog,
  type LucideProps,
} from 'lucide-vue-next'

export interface NavigationItem {
  name: string
  icon: FunctionalComponent<LucideProps>
  label: string
  description: string
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    name: 'dashboard',
    icon: LayoutDashboard,
    label: 'Dashboard',
    description: 'Overview of your system metrics and performance',
  },
  {
    name: 'files',
    icon: File,
    label: 'Files',
    description: 'Manage your files and documents',
  },
  {
    name: 'users',
    icon: Users,
    label: 'Users',
    description: 'User management and permissions',
  },
  {
    name: 'analytics',
    icon: LineChart,
    label: 'Analytics',
    description: 'Detailed analytics and insights',
  },
  {
    name: 'calendar',
    icon: Calendar,
    label: 'Calendar',
    description: 'Schedule and manage events',
  },
  {
    name: 'messages',
    icon: MessageSquare,
    label: 'Messages',
    description: 'Communication and chat management',
  },
  {
    name: 'orders',
    icon: ShoppingCart,
    label: 'Orders',
    description: 'Manage customer orders and transactions',
  },
  {
    name: 'database',
    icon: Database,
    label: 'Database',
    description: 'Database management and queries',
  },
  {
    name: 'security',
    icon: Shield,
    label: 'Security',
    description: 'Security settings and monitoring',
  },
  {
    name: 'reports',
    icon: BarChart3,
    label: 'Reports',
    description: 'Generate and view detailed reports',
  },
  {
    name: 'workflows',
    icon: Workflow,
    label: 'Workflows',
    description: 'Manage automated workflows and processes',
  },
  {
    name: 'automation',
    icon: Cog,
    label: 'Automation',
    description: 'Configure automated tasks and rules',
  },
  {
    name: 'notifications',
    icon: Bell,
    label: 'Notifications',
    description: 'System notifications and alerts',
  },
  {
    name: 'settings',
    icon: Settings,
    label: 'Settings',
    description: 'Application and account settings',
  },
]

// Main menu items for the left sidebar menu (removed home)
export const MAIN_MENU_ITEMS: NavigationItem[] = [
  {
    name: 'about',
    icon: Info,
    label: 'About',
    description: 'Learn more about our company',
  },
  {
    name: 'services',
    icon: Briefcase,
    label: 'Services',
    description: 'Explore our comprehensive solutions',
  },
  {
    name: 'contact',
    icon: Phone,
    label: 'Contact',
    description: 'Get in touch with our team',
  },
]

export const SIDEBAR_CONFIG = {
  COLLAPSED_WIDTH: 40,
  DEFAULT_WIDTH: 300,
  MIN_WIDTH: 200,
  MAX_WIDTH: 600,
  RESIZE_HANDLE_WIDTH: 8,
} as const
