<script lang="ts">
  export let serie: any = null;
</script>

{#if serie}
<a 
 href="/series/{serie.id}" 
 class="flex flex-col rounded-md overflow-hidden border border-zinc-800" 
>
  <img src="{serie.image}" alt="{serie.title}" class="h-96 object-cover" />
  <div class="flex flex-col gap-2 p-5">
    <span class="text-2xl font-black">{serie.title}</span>
    <span class="text-sm text-zinc-400 text-justify">{serie.description}</span>
    <button class="button blue self-end">Read more</button>
  </div>
</a>
{/if}