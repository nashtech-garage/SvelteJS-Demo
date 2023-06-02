/**Category types */
export enum CategoryTypes {
  FRESH_FRUIT = 'Fresh Fruit',
  DRIED_FRUIT = 'Dried Fruit',
  VEGETABLES = 'Vegetables',
  FRUIT_DRINK = 'Fruit Drinks',
  FRESH_MEAT = 'Fresh Meat'
}

export type TCategoryTitle = `${CategoryTypes}`;
export type TCategoryItem = {
  title: TCategoryTitle;
  image: string;
};
/**
 * Featured Products types
 */
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

/**
 * Group order product types
 */
export enum GroupProductValues {
  LATEST_PRODUCTS = 'Latest Products',
  TOP_RATED_PRODUCTS = 'Top Rated Products',
  REVIEW_PRODUCTS = 'Review Products'
}

export type TGroupProductItem = Omit<TFeaturedProductItem, 'mixedTypes'>;
