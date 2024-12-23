<script lang="ts">
  import { Link, Text } from '@utils'
  
  export let href: string
  export let label: string
  export let pathName: string
</script>

<li>
  <Link
    {href}
    className="hover:text-orange-500 duration-300 ease-in-out transition focus:text-orange-500"
    {pathName}
  >
    <Text>{label}</Text>
  </Link>
</li>