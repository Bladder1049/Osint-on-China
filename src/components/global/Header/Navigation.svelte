<script lang="ts">
  import { Link, Text } from '@utils'
  
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
    <li>
      <Link
        {href}
        className="hover:text-orange-500 duration-300 ease-in-out transition focus:text-orange-500"
        {pathName}
      >
        <Text>{label}</Text>
      </Link>
    </li>
  {/each}
</ul>