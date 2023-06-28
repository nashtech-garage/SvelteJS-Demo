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
  id: Number,
 
};

export enum ControlKeys {
  ALL = '*',
  ORANGES = 'oranges',
  FRESH_MEAT = 'Fresh Meat',
  VEGETABLES = 'Vegetable',
  FAST_FOOD = 'Ocean Foods'
}

export const FeaturedControls = {
  [ControlKeys.ALL]: 'All',
  [ControlKeys.ORANGES]: 'Oranges',
  [ControlKeys.FRESH_MEAT]: 'Fresh Meat',
  [ControlKeys.VEGETABLES]: 'Vegetable',
  [ControlKeys.FAST_FOOD]: 'Ocean Foods'
};

export enum MixedTypesValues {
  ORANGES_MIX_FRESH_MEAT = 'Fresh Meat',
  VEGETABLES_MIX_FAST_FOOD = 'mix Vegetable Ocean Foods',
  VEGETABLES_MIX_FRESH_MEAT = 'mix Vegetable Fresh Meat',
  FAST_FOOD_MIX_ORANGES = 'mix Ocean Foods oranges',
  FRESH_MEAT_MIX_VEGETABLES = 'mix Fresh Meat Vegetable',
  ORANGES_MIX_FAST_FOOD = 'mix oranges Ocean Foods',
  FAST_FOOD_MIX_VEGETABLES = 'mix Ocean Foods Vegetable'
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

export type TWishlistStorage = {
   quantity: number
} & TFeaturedProductItem;