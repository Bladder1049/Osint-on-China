<script lang="ts">
  import NavItem from './NavItem.svelte'
  
  export let pathName: string
  
  const navItems = [
    { href: '/', label: 'home' },
    { href: '/#about', label: 'about' },
    { href: '/services', label: 'services' },
    { href: '/articles', label: 'articles' },
    { href: '/#contact', label: 'contact' }
  ]
</script>

<ul class="relative flex flex-wrap items-center gap-2 md:gap-5">
  {#each navItems as { href, label }}
    <NavItem {href} {label} {pathName} />
  {/each}
</ul>