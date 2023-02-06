import React, {FC} from 'react';
import {Animated, useWindowDimensions, View} from 'react-native';
import styles from '../../styles';

interface Props {
  data: any;
  scrollX: any;
}

const Paginator: FC<Props> = ({data, scrollX}) => {
  const {width} = useWindowDimensions();

  return (
    <View style={{flexDirection: 'row', height: 64}}>
      {data.map((_, index) => {
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: 'clamp',
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            style={[styles.dot, {width: dotWidth, opacity}]}
            key={index.toString()}
          />
        );
      })}
    </View>
  );
};

export default Paginator;
