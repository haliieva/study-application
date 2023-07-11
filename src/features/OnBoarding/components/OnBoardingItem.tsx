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
      <View style={{flex: 1, marginTop: 25}}>
        <Image
          source={item.image}
          style={{width: width - 32, height: '100%'}}
        />
      </View>
      <View style={{marginBottom: 25, height: '10%'}}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </View>
  );
};

export default OnBoardingItem;
