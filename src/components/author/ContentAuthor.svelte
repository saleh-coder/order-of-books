<script lang="ts">
  import {marked} from 'marked';
  export let author: any = null;
</script>

{#if author}
  <div class="flex flex-col gap-5">
    <img 
    src={author.image} 
    alt={`Photo of ${author.name}`} 
    class="h-96 object-cover rounded-md" />
  <article class="prose lg:prose-xl prose-invert">
    {@html marked.parse(author.biography)}
  </article>
  </div>
{/if}
