import { THEMES, STORAGE_KEYS, type Theme } from '../constants'

export const useTheme = () => {
  const getInitialTheme = (): Theme => {
    if (typeof window === 'undefined') return THEMES.LIGHT
    
    const savedTheme = window.localStorage.getItem(STORAGE_KEYS.THEME) as Theme
    if (savedTheme) return savedTheme
    
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    return prefersDark ? THEMES.DARK : THEMES.LIGHT
  }

  const setTheme = (theme: Theme) => {
    if (typeof window === 'undefined') return
    
    localStorage.setItem(STORAGE_KEYS.THEME, theme)
    document.documentElement.classList.toggle('dark', theme === THEMES.DARK)
  }

  return {
    getInitialTheme,
    setTheme
  }
}