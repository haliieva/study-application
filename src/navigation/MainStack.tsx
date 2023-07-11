import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import screenNames from './screenNames';
import {MainNavigatorParams} from './entities';
import History from '../features/History/screen';
import Settings from '../features/Settings/screen';
import OnBoarding from '../features/OnBoarding/components/OnBoarding';
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
