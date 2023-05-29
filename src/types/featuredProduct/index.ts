export type TFeaturedProductItem = {
  image: string;
  title: string;
  price: number;
  mixedTypes: string;
};

export enum ControlKeys {
  ALL = '*',
  ORANGES = 'oranges',
  FRESH_MEAT = 'fresh-meat',
  VEGETABLES = 'vegetables',
  FAST_FOOD = 'fastfood'
}

export const FeaturedControls = {
  [ControlKeys.ALL]: 'All',
  [ControlKeys.ORANGES]: 'Oranges',
  [ControlKeys.FRESH_MEAT]: 'Fresh Meat',
  [ControlKeys.VEGETABLES]: 'Vegetables',
  [ControlKeys.FAST_FOOD]: 'Fastfood'
};

export enum MixedTypesValues {
  ORANGES_MIX_FRESH_MEAT = 'mix oranges fresh-meat',
  VEGETABLES_MIX_FAST_FOOD = 'mix vegetables fastfood',
  VEGETABLES_MIX_FRESH_MEAT = 'mix vegetables fresh-meat',
  FAST_FOOD_MIX_ORANGES = 'mix fastfood oranges',
  FRESH_MEAT_MIX_VEGETABLES = 'mix fresh-meat vegetables',
  ORANGES_MIX_FAST_FOOD = 'mix oranges fastfood',
  FAST_FOOD_MIX_VEGETABLES = 'mix fastfood vegetables'
}
