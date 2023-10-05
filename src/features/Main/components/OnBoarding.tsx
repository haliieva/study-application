import React, {FC, useEffect, useRef, useState} from 'react';
import {Animated, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import OnBoardingItem from './OnBoardingItem';
import Paginator from './Paginator';
import {Items} from '../entities';
import Wrapper from '../../../components/Wrapper';
import {AppDispatch, RootState} from '../../../store';
import {getImages} from '../../auth/thunks';

interface Props {}

const OnBoarding: FC<Props> = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {images} = useSelector((state: RootState) => state.auth);

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
  useEffect(() => {
    dispatch(getImages());
  }, []);

  return (
    <Wrapper styles={{alignItems: 'center', justifyContent: 'center'}}>
      <FlatList
        data={images ?? []}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={(_, index) => index.toString()}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        scrollEventThrottle={32}
        ref={slidesRef}
      />
      {images && <Paginator data={images} scrollX={scrollX} />}
    </Wrapper>
  );
};

export default OnBoarding;
