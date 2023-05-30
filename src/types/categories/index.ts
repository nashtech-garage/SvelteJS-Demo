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
