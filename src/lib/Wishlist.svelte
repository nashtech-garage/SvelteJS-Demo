<script>
	export const ssr = true;
import { browser, dev, building, version } from '$app/environment';

import { Col, Container, Row } from 'sveltestrap';
import { Table } from 'sveltestrap';
// import { count } from "$lib/stores"
export let wishlist;
// 	function increment() {
// 		count.update((n) => n + 1);
// 	}

// 	if (browser) {
//   console.log('wishlist')

// }
</script>

<!-- <h1>{$count}</h1> -->
<!-- <button on:click={increment}>Add more</button> -->
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
						{#each wishlist as item}
						<tr>
								<td class="shoping__cart__item">
										<img src={item.imgPath} alt="">
										<h5>{item.title}</h5>
								</td>
								<td class="shoping__cart__price">
										${item.price}
								</td>
								<!-- *** -->
								<td class="shoping__cart__quantity">
										<div class="quantity">
												<div class="pro-qty">
														<input type="text" value="1">
												</div>
										</div>
								</td>
								<td class="shoping__cart__total">
										${item.price * item.quantity}
								</td>
								<td class="shoping__cart__item__close">
										<span class="icon_close"></span>
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

.primary-btn.cart-btn {
	color: $para-color;
	padding: 14px 30px 12px;
	background: $background;

	span {
			font-size: 14px;
	}

	&.cart-btn-right {
			float: right;
	}
}

// .shoping__continue {}

.shoping__discount {
	margin-top: 45px;

	h5 {
			font-size: 20px;
			color: $normal-color;
			font-weight: 700;
			margin-bottom: 25px;
	}

	form {

			input {
					width: 255px;
					height: 46px;
					border: 1px solid #cccccc;
					font-size: 16px;
					color: #b2b2b2;
					text-align: center;
					display: inline-block;
					margin-right: 15px;

					&::placeholder {
							color: #b2b2b2;
					}
			}

			button {
					padding: 15px 30px 11px;
					font-size: 12px;
					letter-spacing: 4px;
					background: $para-color;
			}
	}
}

.shoping__checkout {
	background: $background;
	padding: 30px;
	padding-top: 20px;
	margin-top: 50px;

	h5 {
			color: $normal-color;
			font-weight: 700;
			font-size: 20px;
			margin-bottom: 28px;
	}

	ul {
			margin-bottom: 28px;

			li {
					font-size: 16px;
					color: $normal-color;
					font-weight: 700;
					list-style: none;
					overflow: hidden;
					border-bottom: 1px solid $border;
					padding-bottom: 13px;
					margin-bottom: 18px;

					&:last-child {
							padding-bottom: 0;
							border-bottom: none;
							margin-bottom: 0;
					}

					span {
							font-size: 18px;
							color: #dd2222;
							float: right;
					}
			}
	}

	.primary-btn {
			display: block;
			text-align: center;
	}
}
</style>
