<script lang="ts">

  import { fly } from 'svelte/transition';
  export let listItem: any = [];
  let isOpen = true;

  function toggleSlide() {
    isOpen = !isOpen;
  }
</script>


<div class="hero__categories">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="hero__categories__all {isOpen ? 'slide-open' : ''}" on:click="{toggleSlide}">
    <i class="fa fa-bars"></i>
    <span>All Departments</span>
  </div>
  {#if isOpen}
    <ul transition:fly="{{ y: -30, duration: 100 }}">
      {#each listItem as item (item.id)}
        <li><a href="#">{item.name}t</a></li>
      {/each}
    </ul>
  {/if}
</div>

<style>
  .hero__categories__all {
    z-index: 2;
  }
</style>
