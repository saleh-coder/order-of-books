<script>
  export let title = "Menu"
 </script>
<div class="flex flex-col gap-3">
  <span class="text-sm font-bold text-zinc-500">{title}</span>
  <ul class="flex flex-col">
    <slot></slot>
  </ul>
</div>