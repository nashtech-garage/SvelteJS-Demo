<script lang="ts">
  import { onMount } from 'svelte';
  import { getWishlist } from "../../utils";

  import Wishlist from '$lib/Components/Wishlist.svelte';
  $: wishlist = [];
  onMount(() => {
    wishlist = getWishlist();
  });

</script>

<Wishlist wishlist={wishlist}/>