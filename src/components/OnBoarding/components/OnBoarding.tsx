import React, {FC, useRef, useState} from 'react';
import {Animated, FlatList, View} from 'react-native';
import slides from '../slides';
import OnBoardingItem from './OnBoardingItem';
import styles from '../styles';
import Paginator from './Paginator';
import {Items} from '../entities';

interface Props {}

const OnBoarding: FC<Props> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({viewableItems}: any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const renderItem = ({item}: Items) => {
    return <OnBoardingItem item={item} />;
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 3}}>
        <FlatList
          data={slides}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={item => item.id}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          scrollEventThrottle={32}
          ref={slidesRef}
        />
      </View>
      <Paginator data={slides} scrollX={scrollX} />
    </View>
  );
};

export default OnBoarding;
