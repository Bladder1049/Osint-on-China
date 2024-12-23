export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark'
} as const

export const STORAGE_KEYS = {
  THEME: 'theme'
} as const

export type Theme = typeof THEMES[keyof typeof THEMES]