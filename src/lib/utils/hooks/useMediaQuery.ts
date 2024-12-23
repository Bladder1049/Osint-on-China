import { onMount } from 'svelte'

export function useMediaQuery(query: string) {
  let matches = false
  
  onMount(() => {
    const media = window.matchMedia(query)
    matches = media.matches
    
    const listener = (e: MediaQueryListEvent) => {
      matches = e.matches
    }
    
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  })
  
  return matches
}