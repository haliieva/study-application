import 'react-native-gesture-handler';
import React, {ReactElement, useRef} from 'react';
import moment, {Moment} from 'moment';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import RNBootSplash from 'react-native-bootsplash';
import {navigationRef} from '../services/navigationService';
import screenNames from './screenNames';
import MainStack from './MainStack';
import {RootNavigatorParams} from './entities';

const Stack = createStackNavigator<RootNavigatorParams>();

const Navigation: React.FC = (): ReactElement => {
  const routeNameRef = useRef<any>();
  const screenOpenTime = useRef<Moment>();
  const onReady = () => {
    routeNameRef.current = navigationRef.current?.getCurrentRoute()!.name;
    screenOpenTime.current = moment();
    RNBootSplash.hide({fade: true});
  };

  return (
    <NavigationContainer ref={navigationRef} onReady={onReady}>
      <Stack.Navigator>
        <Stack.Screen
          name={screenNames.MAIN}
          options={{gestureEnabled: false, headerShown: false}}
          component={MainStack}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
