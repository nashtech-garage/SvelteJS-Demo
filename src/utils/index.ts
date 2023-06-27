import type { TWishlistStorage, TFeaturedProductItem } from '../types/home';

export const exFuntion = () => {
  return '';
};

export function sliceIntoChunks<T>(arr: T[], chunkSize: number): Array<Array<T>> {
  const res: Array<Array<T>> = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
}

export function getWishlist() {
  const strWishlist = localStorage.getItem('wishlist');
  if (strWishlist) return JSON.parse(strWishlist);
}

export function handleAddToCart(wishlist: TWishlistStorage[], newItem: TFeaturedProductItem) {
  const foundIdx = wishlist.findIndex((w: TWishlistStorage) => w.id === newItem.id);
  if (foundIdx > -1) {
    wishlist[foundIdx].quantity++
  } else {
    wishlist.push( {...newItem, quantity: 0 })
  }
  wishlist = wishlist;
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
}
