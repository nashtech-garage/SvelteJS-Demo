import { ControlKeys, FeaturedControls, MixedTypesValues, GroupProductValues } from '../types/home';

export const featuredControls = [
  { key: ControlKeys.ALL, value: FeaturedControls[ControlKeys.ALL] },
  { key: ControlKeys.ORANGES, value: FeaturedControls[ControlKeys.ORANGES] },
  { key: ControlKeys.FRESH_MEAT, value: FeaturedControls[ControlKeys.FRESH_MEAT] },
  { key: ControlKeys.VEGETABLES, value: FeaturedControls[ControlKeys.VEGETABLES] },
  { key: ControlKeys.FAST_FOOD, value: FeaturedControls[ControlKeys.FAST_FOOD] }
];
export const mixedTypes = [
  MixedTypesValues.ORANGES_MIX_FRESH_MEAT,
  MixedTypesValues.VEGETABLES_MIX_FAST_FOOD,
  MixedTypesValues.VEGETABLES_MIX_FRESH_MEAT,
  MixedTypesValues.FAST_FOOD_MIX_ORANGES,
  MixedTypesValues.FRESH_MEAT_MIX_VEGETABLES,
  MixedTypesValues.ORANGES_MIX_FAST_FOOD,
  MixedTypesValues.FRESH_MEAT_MIX_VEGETABLES,
  MixedTypesValues.FAST_FOOD_MIX_VEGETABLES
];

export const GroupLatestProducts = [
  GroupProductValues.LATEST_PRODUCTS,
  GroupProductValues.TOP_RATED_PRODUCTS,
  GroupProductValues.REVIEW_PRODUCTS
];
