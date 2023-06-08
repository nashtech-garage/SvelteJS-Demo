<script lang="ts">

	import { Col, Row } from 'sveltestrap';
	import { Table } from 'sveltestrap';
  import type { TFeaturedProductItem, TWishlistStorage } from '../types/home';
	
	export let wishlist: TWishlistStorage[] & TFeaturedProductItem[];
	$: modifiedWishlist = [...wishlist];
	function increment(id: string) {
		const foundIdx = modifiedWishlist.findIndex(item => item.id === id);
		if (foundIdx > -1) {
			modifiedWishlist[foundIdx].quantity++
			localStorage.setItem('wishlist', JSON.stringify(modifiedWishlist))
	
		}
	}
	
	function decrement(id: string) {
		const foundIdx = modifiedWishlist.findIndex(item => item.id === id);
		if (foundIdx > -1) {
			modifiedWishlist[foundIdx].quantity = modifiedWishlist[foundIdx].quantity 
			? modifiedWishlist[foundIdx].quantity - 1 
			: 0
			localStorage.setItem('wishlist', JSON.stringify(modifiedWishlist))
	
		}
	}
	
	function remove(id: string) {
		modifiedWishlist = modifiedWishlist.filter(w => w.id !== id);
		localStorage.setItem('wishlist', JSON.stringify(modifiedWishlist))
	}
	
	</script>
	
	<section class="shoping-cart spad">
	<div class="container">
		<Row>
			<Col>
				<div class="shoping__cart__table">
					<Table>
						<thead>
							<tr>
									<th class="shoping__product">Products</th>
									<th>Price</th>
									<th>Quantity</th>
									<th>Total</th>
									<th></th>
							</tr>
						</thead>
						<tbody>
							{#each modifiedWishlist as item}
							<tr>
									<td class="shoping__cart__item">
											<img src={item.image} alt="">
											<h5>{item.title}</h5>
									</td>
									<td class="shoping__cart__price">
											${item.price}
									</td>
									<!-- *** -->
									<td class="shoping__cart__quantity">
											<div class="quantity">
													<div class="pro-qty">
														<span on:click={() => decrement(item.id)} class="dec qtybtn">-</span>
														<input type="text" value={item.quantity}>
														<span on:click={() => increment(item.id)} class="inc qtybtn">+</span>
	
													</div>
											</div>
									</td>
									<td class="shoping__cart__total">
											${item.price * item.quantity}
									</td>
									<td class="shoping__cart__item__close">
											<span on:click={() => remove(item.id)} class="icon_close"></span>
									</td>
							</tr>
								{/each}
						</tbody>
				</Table>
				</div>
			</Col>
		</Row>
	</div>
	</section>
	
	<style lang="scss">
	/* Shop Cart */
	.shoping-cart {
		padding-top: 80px;
		padding-bottom: 80px;
	}
	
	.shoping__cart__table {
		margin-bottom: 30px;
				width: 100%;
				text-align: center;
	
				thead {
	
						tr {
								border-bottom: 1px solid $border;
						}
	
						th {
								font-size: 20px;
								font-weight: 700;
								color: $normal-color;
								padding-bottom: 20px;
	
								&.shoping__product {
										text-align: left;
								}
						}
				}
	
				tbody {
	
						tr {
	
								td {
										padding-top: 30px;
										padding-bottom: 30px;
										border-bottom: 1px solid $border;
	
										&.shoping__cart__item {
												width: 630px;
												text-align: left;
	
												img {
														display: inline-block;
														margin-right: 25px;
														width: 100px;
												}
	
												h5 {
														color: $normal-color;
														display: inline-block;
												}
										}
	
										&.shoping__cart__price {
												font-size: 18px;
												color: $normal-color;
												font-weight: 700;
												width: 100px;
										}
	
										&.shoping__cart__total {
												font-size: 18px;
												color: $normal-color;
												font-weight: 700;
												width: 110px;
										}
	
										&.shoping__cart__item__close {
												text-align: right;
	
												span {
														font-size: 24px;
														color: #b2b2b2;
														cursor: pointer;
												}
										}
	
										&.shoping__cart__quantity {
												width: 225px;
	
												.pro-qty {
														width: 120px;
														height: 40px;
														display: inline-block;
			position: relative;
			text-align: center;
			background: $background;
			margin-bottom: 5px;
	
			input {
					height: 100%;
					width: 100%;
					font-size: 16px;
					color: $para-color;
					width: 50px;
					border: none;
					background: $background;
					text-align: center;
			}
	
			.qtybtn {
					width: 35px;
					font-size: 16px;
					color: $para-color;
					cursor: pointer;
					display: inline-block;
			}
	
														input {
																color: $normal-color;
	
																&::placeholder {
																		color: $normal-color;
																}
														}
	
														.qtybtn {
																width: 15px;
														}
												}
										}
								}
						}
				}
	}
	
	</style>
	