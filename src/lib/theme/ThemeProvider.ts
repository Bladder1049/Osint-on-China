import { THEMES, STORAGE_KEYS, type Theme } from './constants'

export class ThemeProvider {
  static getInitialTheme(): Theme {
    if (typeof window === 'undefined') return THEMES.LIGHT
    
    const savedTheme = window.localStorage.getItem(STORAGE_KEYS.THEME) as Theme
    if (savedTheme) return savedTheme
    
    return window.matchMedia('(prefers-color-scheme: dark)').matches 
      ? THEMES.DARK 
      : THEMES.LIGHT
  }

  static setTheme(theme: Theme): void {
    if (typeof window === 'undefined') return
    
    localStorage.setItem(STORAGE_KEYS.THEME, theme)
    document.documentElement.classList.toggle('dark', theme === THEMES.DARK)
  }
}