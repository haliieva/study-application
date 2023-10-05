import React, {FC} from 'react';
import {View} from 'react-native';
import OnBoarding from '../components/OnBoarding';

interface Props {}

const Content: FC<Props> = () => {
  return (
    <View>
      <OnBoarding />
    </View>
  );
};

export default Content;
