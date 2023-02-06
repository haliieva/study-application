import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
import {
  StackNavigationProp,
  StackScreenProps,
} from '@react-navigation/stack/lib/typescript/src/types';
import {darkGrey, white} from '../assets/colors';
import {RootNavigatorParams} from '../navigation/entities';
import {isAndroid} from '../utils/common';

const Drawer = ({
  navigation,
}: {
  navigation: StackNavigationProp<RootNavigatorParams>;
}) => {
  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  return (
    <TouchableOpacity onPress={openDrawer} style={styles.drawerBtn}>
      <Text>open</Text>
    </TouchableOpacity>
  );
};

const Header = ({navigation}: StackScreenProps<RootNavigatorParams>) => ({
  title: 'Hi',
  headerStyle: styles.headerContainer,
  headerTintColor: white,
  headerTitleStyle: styles.headerTitle,
  headerRight: () => <Drawer navigation={navigation} />,
  gestureEnabled: false,
});

export default Header;

const styles = StyleSheet.create({
  threeDotsBtn: {
    flex: 1,
    justifyContent: 'center',
    marginRight: 10,
  },
  headerContainer: {
    backgroundColor: darkGrey,
    height: isAndroid() ? 70 : 100,
  },
  headerTitle: {
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  accountBtn: {
    marginLeft: 15,
  },
  drawerBtn: {
    marginRight: 15,
  },
});
