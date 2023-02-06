import React, {FC} from 'react';
import {Image, Text, useWindowDimensions, View} from 'react-native';
import styles from '../styles';
import {Item} from '../entities';

interface Props {
  item: Item;
}

const OnBoardingItem: FC<Props> = ({item}) => {
  const {width} = useWindowDimensions();
  const path: string = '../../../assets/images/' + `${item.image}`;

  return (
    <View style={[styles.container, {width}]}>
      <Image
        source={require('../../../assets/images/computer.png')}
        style={[styles.image, {width, resizeMode: 'contain'}]}
      />
      <View style={{flex: 0.3}}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

export default OnBoardingItem;
