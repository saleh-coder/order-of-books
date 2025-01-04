<script lang='ts'>
  import ItemBook from "../serie/ItemBook.svelte";
  export let serie: any = null;
</script>

{#if serie}
<div class="flex flex-col gap-5">
  <h1 class="text-3xl font-black">{serie.title}</h1>
  <a href="/authors/{serie.author.id}" class="text-sm text-zinc-400 -mt-4">{serie.author.name}</a>
  <img src={serie.image} alt="Image of {serie.title}" class="h-96 object-cover" />
  <p class="text-lg text-zinc-400 text-justify">{serie.description}</p>

  <h2>List of Books</h2>
  <div class="grid grid-cols-3 gap-5">
    {#each serie.books as book}
      <ItemBook {book} />
    {/each}
  </div>
</div>
{/if}