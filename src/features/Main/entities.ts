import {ImageSourcePropType} from 'react-native';

export interface Item {
  id: string;
  title: string;
  image: ImageSourcePropType;
}

export interface Items {
  item: Item;
}
