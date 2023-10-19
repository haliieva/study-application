import React, {FC, useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Animated, {
  Easing,
  FadeInLeft,
  FadeInRight,
  FadeOutLeft,
  SlideInDown,
  SlideInLeft,
  SlideInRight,
  SlideInUp,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {useFocusEffect} from '@react-navigation/native';
import {Button, Heading, Text} from 'native-base';
import Wrapper from '../../../components/Wrapper';
import {blue, darkBlue} from '../../../assets/colors';

interface Props {}

const ReanimatedSquare: FC<Props> = () => {
  const size = 100;
  const progress = useSharedValue(1);
  const scale = useSharedValue(2);
  const offset = useSharedValue(20);
  const offsetX = useSharedValue(200);

  useFocusEffect(() => {
    progress.value = withRepeat(withSpring(0.5), 3, true);
    scale.value = withRepeat(withSpring(1), 3, true);
  });

  // const animatedStyles = useAnimatedStyle(() => ({
  //   opacity: progress.value,
  //   borderRadius: (progress.value * size) / 2,
  //   transform: [
  //     {scale: scale.value},
  //     {rotate: `${progress.value * 2 * Math.PI}rad`},
  //   ],
  // }));

  let mockedItems = [
    {name: '1'},
    {name: '2'},
    {name: '3'},
    {name: '4'},
    {name: '5'},
  ];

  const renderItem = ({item}: {item: {name: string}}) => {
    return (
      <Animated.View
        entering={FadeInLeft.duration(500)}
        exiting={FadeOutLeft.duration(500)}
        style={styles.item}>
        <Text fontSize="16px" color="white">
          {item.name}
        </Text>
      </Animated.View>
    );
  };

  const [items, setItems] = useState(mockedItems);

  const addItem = () => {
    let newItems: any = [];
    newItems.push({name: String(1 + items.length)});
    setItems(prevState => [...prevState, ...newItems]);
  };
  const removeItem = () => {
    const newItems = [...items.slice(0, items.length - 1)];
    setItems(newItems);
  };

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{translateY: offset.value}],
  }));
  const animatedStyles2 = useAnimatedStyle(() => ({
    transform: [{translateX: offsetX.value}],
  }));

  useEffect(() => {
    offset.value = withRepeat(
      withTiming(-offset.value, {
        duration: 1000,
        easing: Easing.linear,
      }),
      -1,
      true,
    );
    offsetX.value = withRepeat(withSpring(-offset.value), -1, true);
  }, []);

  return (
    <Wrapper>
      <Animated.View entering={SlideInLeft}>
        <Heading textAlign={'center'} mt={4} mb={2} color="blue">
          Reanimated animations
        </Heading>
      </Animated.View>
      <Animated.Text style={styles.text} entering={SlideInRight}>
        Reanimated animations
      </Animated.Text>
      {/*<View style={styles.container}>*/}
      {/*  <Animated.View*/}
      {/*    entering={SlideInDown}*/}
      {/*    style={[styles.box, animatedStyles]}*/}
      {/*  />*/}
      {/*</View>*/}
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyles]} />
        {/*<FlatList*/}
        {/*  style={styles.listContainer}*/}
        {/*  keyExtractor={item => item.name}*/}
        {/*  data={items}*/}
        {/*  renderItem={renderItem}*/}
        {/*/>*/}
        {/*<View style={styles.buttonsContainer}>*/}
        {/*  <View style={{flexDirection: 'row'}}>*/}
        {/*    <Button _text={{color: 'white'}} onPress={addItem}>*/}
        {/*      Add*/}
        {/*    </Button>*/}
        {/*    <Button _text={{color: 'white'}} onPress={removeItem} ml={2}>*/}
        {/*      Remove*/}
        {/*    </Button>*/}
        {/*  </View>*/}
        {/*</View>*/}
      </View>
      <View style={styles.container2}>
        <Animated.View style={[styles.box, animatedStyles2]} />
      </View>
    </Wrapper>
  );
};

export default ReanimatedSquare;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: 'green',
    height: 160,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    marginTop: 10,
    backgroundColor: 'white',
    height: 160,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 50,
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: darkBlue,
    borderRadius: 20,
  },
  item: {
    height: 50,
    backgroundColor: blue,
    marginVertical: 4,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  listContainer: {flexGrow: 1},
  text: {textAlign: 'center', color: blue, fontSize: 16},
  buttonsContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
});
