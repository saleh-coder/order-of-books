<script lang="ts">
  export let author: any = null;
</script>

{#if author}
<a 
   href="/authors/{author.id}" 
   class="flex flex-col rounded-md relative overflow-hidden border border-zinc-800"> 
  <img src={author.image} alt="Author's image" class="h-96 object-cover">
  <div 
    class="absolute bottom-0 left-0 right-0 p-2 bg-zinc-800 bg-opacity-70"
  >
    <span class="text-2xl font-black" >{author.name}</span>
  </div>
</a>
{/if}