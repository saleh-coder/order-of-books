<script>
    import Header from "./Header.svelte";
    import Footer from "./Footer.svelte";
    import SideArea from "./SideArea.svelte";
</script>
<div class="flex flex-col min-h-screen bg-black text-white">
  <Header />
  <div class="flex-1 flex gap-5 max-w-7xl mx-auto w-full p-5">
  <main class="flex-1 ">
    <slot></slot> 
  </main>
  <SideArea />
  </div>
  <Footer />
</div>