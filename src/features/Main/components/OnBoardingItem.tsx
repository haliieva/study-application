import React, {FC} from 'react';
import {Image, useWindowDimensions, View} from 'react-native';
import styles from '../styles';

interface Props {
  item: any;
}

const OnBoardingItem: FC<Props> = ({item}) => {
  const {width} = useWindowDimensions();
  return (
    <View style={[styles.container, {width}]}>
      <Image
        source={{uri: item.full}}
        style={{width: width - 32, height: '85%'}}
      />
    </View>
  );
};

export default OnBoardingItem;
