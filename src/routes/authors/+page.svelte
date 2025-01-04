<script lang="ts">
    import ItemAuthor from "../../components/author/ItemAuthor.svelte";
    import Title from "../../components/shared/Title.svelte";
    import authors from "../../constant/authors";
</script>

<div class="flex flex-col gap-5"> 
<Title 
   main="Authors" 
   sub="Meet the authors who write the stories you love!"
/>

  <div class="grid grid-cols-2 gap-5"> 
    {#each authors as author}
    <ItemAuthor author={author}/>
    {/each}
  </div>
</div>