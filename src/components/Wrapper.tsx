import React, {FC} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {beige} from '../assets/colors';

interface Props {
  children: React.ReactNode;
  styles?: any;
}

const Wrapper: FC<Props> = ({children, styles}) => {
  return (
    <SafeAreaView style={[defaultStyles.container, styles]}>
      {children}
    </SafeAreaView>
  );
};

export default Wrapper;

const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: beige,
  },
});
