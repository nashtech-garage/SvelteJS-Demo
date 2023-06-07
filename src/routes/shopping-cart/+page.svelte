<script>
    import { onMount } from 'svelte';
		import itemGenerator from '$lib/Home/FeaturedProducts/ItemData';

    import Wishlist from '../../lib/Wishlist.svelte'
		let wishlist = [];
    onMount(() => {
			const storageData = JSON.parse(localStorage.getItem('wishlist'))
		
			if (storageData && storageData.length) {
				const productList = itemGenerator(8);
				wishlist = storageData.map(w => {
					const found = productList.find(p => p.id === w.id)
					return {...w, ...found}
				})
			}
			
		});
	
</script>

<Wishlist wishlist={wishlist}/>
