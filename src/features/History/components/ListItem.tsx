import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {grey, lightBlue} from '../../../assets/colors';

interface Props {
  task: any;
}

const ListItem: FC<Props> = ({task}) => {
  const translateX = useSharedValue(0);

  const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onActive: event => {
      translateX.value = event.translationX;
    },
    onEnd: event => {
      translateX.value = withTiming(0);
    },
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
    ],
  }));

  return (
    <PanGestureHandler onGestureEvent={panGesture}>
      <Animated.View
        style={[
          {
            flexDirection: 'row',
            justifyContent: 'center',
          },
          animatedStyle,
        ]}>
        <View
          style={{
            backgroundColor: grey,
            height: 50,
            width: '90%',
            marginVertical: 10,
            borderRadius: 10,
            shadowOpacity: 0.1,
            shadowOffset: {width: 0, height: 20},
            shadowRadius: 10,
            elevation: 5,
          }}
        />
      </Animated.View>
    </PanGestureHandler>
  );
};

export default ListItem;

const styles = StyleSheet.create({});
