<script>
  export let href = "/";
  export let text = "";
</script>

<li>
 <a {href} class="flex gap-2 items-center cursor-pointer px-4 py-2
 text-zinc-300 hover:text-white hover:bg-white/10">

  <slot></slot>
  <span>{text}</span>
 </a>
</li>