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
  let newWishlist: TWishlistStorage[] = [];
  if (!(wishlist && wishlist.length)) {
    newWishlist.push({...newItem, quantity: 1 })
  } else {
    newWishlist = [...wishlist];
    const foundIdx = wishlist.findIndex((w: TWishlistStorage) => w.id === newItem.id);
    if (foundIdx > -1) {
      newWishlist[foundIdx].quantity++
    } else {
      newWishlist.push( {...newItem, quantity: 1 })
    }
  }
  localStorage.setItem('wishlist', JSON.stringify(newWishlist));
  return newWishlist;
}

export function formatNumber(number: any) {
  return new Intl.NumberFormat(
    'en-US', 
    { 
      minimumFractionDigits: 2,
      maximumFractionDigits: 2 
    })
    .format(number);
}