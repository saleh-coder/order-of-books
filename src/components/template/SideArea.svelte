<script>
    import Menu from "./Menu.svelte";
    import MenuItem from "./MenuItem.svelte";
    import { IconBooks, IconBrandFacebook, IconBrandInstagram, IconBrandYoutube, IconFriends, IconHome, IconRss, IconSquare1, IconSquare2, IconSquare3, IconUsers } from "@tabler/icons-svelte";
</script>
<aside class="flex flex-col w-72 self-start border border-zinc-800 rounded-md p-5 gap-10">
  <Menu title="Navigation">
   <MenuItem text="Home" href="/">
     <IconHome size={20} />
   </MenuItem>
   <MenuItem text="Characters" href="/">
     <IconFriends size={20} />
   </MenuItem>
   <MenuItem text="Authors" href="/authors">
     <IconUsers size={20} />
    </MenuItem>
   <MenuItem text="Series" href="/">
     <IconBooks size={20} />
    </MenuItem>
 </Menu>

  <Menu title="Popular Authors">
  <MenuItem text="J.K Rowling" href="/authors/j-k-rowling">
    <IconSquare1 size={20} />
  </MenuItem>
  <MenuItem text="J.R.R Tolkien" href="/authors/j-r-r-tolkien">
   <IconSquare2 size={20} />
    </MenuItem>
  <MenuItem text="George R.R Martin" href="/authors/george-r-r-martin">
    <IconSquare3 size={20} />
    </MenuItem>
 </Menu>

 <Menu title="Other Categories">
  <MenuItem text="Book News" href="/">
    <IconRss size={20} />
  </MenuItem>
  <MenuItem text="Newsletter Archives" href="/">
    <IconBooks size={20} />
  </MenuItem>
  <MenuItem text="Facebook" href="/">
    <IconBrandFacebook size={20} />
  </MenuItem>
  <MenuItem text="Instagram" href="/">
    <IconBrandInstagram size={20} />
  </MenuItem>
  <MenuItem text="Youtube" href="/">
    <IconBrandYoutube size={20} />
  </MenuItem>
 </Menu>
</aside>