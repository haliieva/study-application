import 'react-native-gesture-handler';
import React, {ReactElement, useRef} from 'react';
import moment, {Moment} from 'moment';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import RNBootSplash from 'react-native-bootsplash';
import {useSelector} from 'react-redux';
import {navigationRef} from '../services/navigationService';
import screenNames from './screenNames';
import MainStack from './MainStack';
import {RootNavigatorParams} from './entities';
import AuthStack from './AuthStack';
import {RootState} from '../store';

const Stack = createStackNavigator<RootNavigatorParams>();

const Navigation: React.FC = (): ReactElement => {
  const {isAuthenticated} = useSelector((state: RootState) => state.auth);

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
        {isAuthenticated ? (
          <Stack.Screen
            name={screenNames.MAIN}
            options={{gestureEnabled: false, headerShown: false}}
            component={MainStack}
          />
        ) : (
          <Stack.Screen
            name={screenNames.AUTH}
            options={{gestureEnabled: false, headerShown: false}}
            component={AuthStack}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
