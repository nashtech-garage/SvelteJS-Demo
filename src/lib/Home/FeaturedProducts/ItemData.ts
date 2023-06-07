import { type TFeaturedProductItem, ControlKeys } from '../../../types/home';
import { featuredControls, mixedTypes } from '../../../constants/home';

const itemGenerator = (number: number = 0): TFeaturedProductItem[] => {
  const newArray = new Array(number);
  return [...newArray].map((_, index) => {
    const order = index + 1;
    return {
      id: index,
      image: `./images/FeaturedProducts/feature-${order}.jpg`,
      title: `${order}`,
      price: 30,
      mixedTypes: mixedTypes[index]
    };
  });
};

export default itemGenerator