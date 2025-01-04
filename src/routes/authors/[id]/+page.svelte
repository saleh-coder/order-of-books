<script>
  import { page } from '$app/stores';
  import ContentAuthor from '../../../components/author/ContentAuthor.svelte'
</script>

<ContentAuthor author={$page.data.author}/>