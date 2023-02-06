import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import screenNames from './screenNames';
import {MainNavigatorParams} from './entities';
import Content from '../components/OnBoarding/screen/Content';
import History from '../components/History/screen';
import Settings from '../components/Settings/screen';
import OnBoarding from '../components/OnBoarding/components/OnBoarding';

const Tab = createBottomTabNavigator<MainNavigatorParams>();

const MainStack = () => {
  return (
    <Tab.Navigator initialRouteName={screenNames.DASHBOARD} screenOptions={{}}>
      <Tab.Screen name={screenNames.DASHBOARD} component={OnBoarding} />
      <Tab.Screen name={screenNames.HISTORY} component={History} />
      <Tab.Screen name={screenNames.SETTINGS} component={Settings} />
    </Tab.Navigator>
  );
};

export default MainStack;
