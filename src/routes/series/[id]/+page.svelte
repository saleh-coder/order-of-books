<script lang="ts">
  import { page } from '$app/stores'; 
  import ContentSerie from "../../../components/serie/ContentSerie.svelte";
</script>

{#if $page.data?.serie}
  <ContentSerie serie={$page.data.serie} />
{/if}
