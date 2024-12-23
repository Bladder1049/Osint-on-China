// Theme related types
export type Theme = 'light' | 'dark'

export interface ThemeState {
  current: Theme
  toggle: () => void
}