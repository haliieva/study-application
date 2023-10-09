import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import screenNames from './screenNames';
import {MainNavigatorParams} from './entities';
import History from '../features/History/screen';
import OnBoarding from '../features/Main/components/OnBoarding';
import {HeaderTitle, SignOut} from '../components/MainOptions';
import {blue, boulder, darkBlue, middleGrey, white} from '../assets/colors';
import {isAndroid} from '../utils/common';
import ReanimatedSquare from '../features/Settings/screen/ReanimatedSquare';

const Tab = createBottomTabNavigator<MainNavigatorParams>();

const MainStack = () => {
  return (
    <Tab.Navigator
      initialRouteName={screenNames.DASHBOARD}
      screenOptions={{
        headerStyle: styles.headerContainer,
        headerTitleStyle: styles.headerTitle,
        headerTitleAlign: 'center',
        headerTitle: () => <HeaderTitle />,
        headerRight: () => <SignOut />,
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: darkBlue,
        tabBarInactiveTintColor: white,
      }}>
      <Tab.Screen name={screenNames.DASHBOARD} component={OnBoarding} />
      <Tab.Screen name={screenNames.DOCUMENTS} component={History} />
      <Tab.Screen name={screenNames.SETTINGS} component={ReanimatedSquare} />
    </Tab.Navigator>
  );
};
export default MainStack;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: blue,
  },
  headerTitle: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: white,
    fontSize: 18,
  },
  tabBarStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: blue,
    borderTopWidth: isAndroid() ? StyleSheet.hairlineWidth : 0.4,
    borderTopColor: isAndroid() ? middleGrey : boulder,
  },
});
