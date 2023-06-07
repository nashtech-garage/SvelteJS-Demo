<script>
	// export const ssr = true;
import { browser, dev, building, version } from '$app/environment';

import { Col, Container, Row } from 'sveltestrap';
import { Table } from 'sveltestrap';

// import { count } from "$lib/stores"
export let wishlist;
$: modifiedWishlist = [...wishlist];
function increment(id) {
	const foundIdx = modifiedWishlist.findIndex(item => item.id === id);
	if (foundIdx > -1) {
		modifiedWishlist[foundIdx].quantity++
		localStorage.setItem('wishlist', JSON.stringify(modifiedWishlist))

	}
}

function decrement(id) {
	const foundIdx = modifiedWishlist.findIndex(item => item.id === id);
	if (foundIdx > -1) {
		modifiedWishlist[foundIdx].quantity = modifiedWishlist[foundIdx].quantity 
		? modifiedWishlist[foundIdx].quantity - 1 
		: 0
		localStorage.setItem('wishlist', JSON.stringify(modifiedWishlist))

		// modifiedWishlist = modifiedWishlist
	}
}

function remove(id) {
	modifiedWishlist = modifiedWishlist.filter(w => w.id !== id);
	localStorage.setItem('wishlist', JSON.stringify(modifiedWishlist))
}

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

	/* Shop Details */
.product-details {
    padding-top: 80px;
}

.product__details__pic__item {
    margin-bottom: 20px;

    img {
        min-width: 100%;
    }
}

.product__details__pic__slider {

    img {
        cursor: pointer;
    }

    &.owl-carousel .owl-item img {
        width: auto;
    }
}

.product__details__text {

    h3 {
        color: $heading-color-2;
        font-weight: 700;
        margin-bottom: 16px;
    }

    .product__details__rating {
        font-size: 14px;
        margin-bottom: 12px;

        i {
            margin-right: -2px;
            color: #EDBB0E;
        }

        span {
            color: #dd2222;
            margin-left: 4px;
        }
    }

    .product__details__price {
        font-size: 30px;
        color: #dd2222;
        font-weight: 600;
        margin-bottom: 15px;
    }

    p {
        margin-bottom: 45px;
    }

    .primary-btn {
        padding: 16px 28px 14px;
        margin-right: 6px;
        margin-bottom: 5px;
    }

    .heart-icon {
        display: inline-block;
        font-size: 16px;
        color: $para-color;
        padding: 13px 16px 13px;
        background: $background;
    }

    ul {
        border-top: 1px solid $border;
        padding-top: 40px;
        margin-top: 50px;

        li {
            font-size: 16px;
            color: $normal-color;
            list-style: none;
            line-height: 36px;

            b {
                font-weight: 700;
                width: 170px;
                display: inline-block;
            }

            span {

                samp {
                    color: #dd2222;
                }
            }

            .share {
                display: inline-block;

                a {
                    display: inline-block;
                    font-size: 15px;
                    color: $normal-color;
                    margin-right: 25px;

                    &:last-child {
                        margin-right: 0;
                    }
                }
            }
        }
    }
}

.product__details__quantity {
    display: inline-block;
    margin-right: 6px;
}

.pro-qty {
    width: 140px;
    height: 50px;
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
}

.product__details__tab {
    padding-top: 85px;

    .nav-tabs {
        border-bottom: none;
        justify-content: center;
        position: relative;

        &:before {
            position: absolute;
            left: 0;
            top: 12px;
            height: 1px;
            width: 370px;
            background: $border;
            content: '';
        }

        &:after {
            position: absolute;
            right: 0;
            top: 12px;
            height: 1px;
            width: 370px;
            background: $border;
            content: '';
        }

        li {
            margin-bottom: 0;
            margin-right: 65px;

            &:last-child {
                margin-right: 0;
            }

            a {
                font-size: 16px;
                color: #999999;
                font-weight: 700;
                border: none;
                border-top-left-radius: 0;
                border-top-right-radius: 0;
                padding: 0;
            }
        }
    }

    .product__details__tab__desc {
        padding-top: 44px;

        h6 {
            font-weight: 700;
            color: #333333;
            margin-bottom: 26px;
        }

        p {
            color: #666666;
        }
    }
}


.related-product {
    padding-bottom: 30px;
}

.related__product__title {
    margin-bottom: 70px;
}
}
</style>
