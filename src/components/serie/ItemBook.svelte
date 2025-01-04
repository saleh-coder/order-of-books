<script lang="ts">
  import { IconBrandAmazon } from "@tabler/icons-svelte";
  export let book: any = null;
</script>

{#if book}
  <a
    href={book.link}
    target="_blank"
    class="flex flex-col rounded-md overflow-hidden bg-zinc-800"
  >
    <img src={book.image} alt={`Cover image of ${book.title}`} class="h-96" />
    <div class="flex-1 flex flex-col p-5 gap-2">
      <span class="flex-1 font-bold text-center">{book.title}</span>
      <button class="button blue">
        <IconBrandAmazon size={25} />
        <span>Book link</span>
      </button>
    </div>
  </a>
{/if}