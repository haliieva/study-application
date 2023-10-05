import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import screenNames from './screenNames';
import {MainNavigatorParams} from './entities';
import History from '../components/History/screen';
import Settings from '../components/Settings/screen';
import OnBoarding from '../components/OnBoarding/components/OnBoarding';
import {Options} from '../components/MainOptions';

const Tab = createBottomTabNavigator<MainNavigatorParams>();

const MainStack = () => {
  return (
    <Tab.Navigator
      initialRouteName={screenNames.DASHBOARD}
      screenOptions={Options}>
      <Tab.Screen name={screenNames.DASHBOARD} component={OnBoarding} />
      <Tab.Screen name={screenNames.DOCUMENTS} component={History} />
      <Tab.Screen name={screenNames.SETTINGS} component={Settings} />
    </Tab.Navigator>
  );
};
export default MainStack;
