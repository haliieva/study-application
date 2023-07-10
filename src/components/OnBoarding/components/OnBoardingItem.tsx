import React, {FC} from 'react';
import {Image, Text, useWindowDimensions, View} from 'react-native';
import styles from '../styles';
import {Item} from '../entities';

interface Props {
  item: Item;
}

const OnBoardingItem: FC<Props> = ({item}) => {
  const {width} = useWindowDimensions();

  return (
    <View style={[styles.container, {width}]}>
      <Image
        source={item.image}
        style={[styles.image, {width, resizeMode: 'contain'}]}
      />
      <View style={{}}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </View>
  );
};

export default OnBoardingItem;
