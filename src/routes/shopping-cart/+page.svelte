<script lang='ts'>
  import { onMount } from 'svelte';
  import type { TWishlistStorage, TFeaturedProductItem } from '../../types/home';

  import itemGenerator from '$lib/Home/FeaturedProducts/ItemData';

  import Wishlist from '../../lib/Wishlist.svelte'
  let wishlist: TWishlistStorage[] & TFeaturedProductItem[] = [];
  onMount(() => {
    const storageData: TWishlistStorage[] = JSON.parse(localStorage.getItem('wishlist'))
  
    if (storageData && storageData.length) {
      const productList = itemGenerator(8);
      wishlist = storageData.map(w => {
        const found: TFeaturedProductItem  = productList.find(p => p.id === w.id)
        return {...w, ...found}
      })
    }
    
  });

</script>

<Wishlist wishlist={wishlist}/>