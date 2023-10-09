import React, {FC, useEffect, useRef} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import Wrapper from '../../../components/Wrapper';
import {darkBlue} from '../../../assets/colors';

interface Props {}

const Settings: FC<Props> = () => {
  const progress = useRef(new Animated.Value(0.5)).current;
  const scale = useRef(new Animated.Value(1)).current;
  const size = 100;

  useEffect(() => {
    Animated.loop(
      Animated.parallel([
        Animated.sequence([
          Animated.spring(progress, {toValue: 1, useNativeDriver: true}),
          Animated.spring(progress, {toValue: 0.5, useNativeDriver: true}),
        ]),
        Animated.sequence([
          Animated.spring(scale, {toValue: 2, useNativeDriver: true}),
          Animated.spring(scale, {toValue: 1, useNativeDriver: true}),
        ]),
      ]),
      {iterations: 3},
    ).start();
  }, []);

  return (
    <Wrapper>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Animated.View
          style={[
            styles.box,
            {
              borderRadius: Animated.multiply(progress, size / 2),
              opacity: progress,
              transform: [
                {scale},
                {
                  rotate: progress.interpolate({
                    inputRange: [0.5, 1],
                    outputRange: ['180deg', '360deg'],
                  }),
                },
              ],
            },
          ]}
        />
      </View>
    </Wrapper>
  );
};

export default Settings;

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: darkBlue,
  },
});
