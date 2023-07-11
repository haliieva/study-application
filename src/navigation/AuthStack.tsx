import React, {ReactElement} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import screenNames from './screenNames';
import SignIn from '../features/SignIn';
import {AuthStackNavigatorParams} from './entities';

const Stack = createStackNavigator<AuthStackNavigatorParams>();

const AuthStack: React.FC = (): ReactElement => {
  return (
    <Stack.Navigator initialRouteName={screenNames.SIGN_IN}>
      <Stack.Screen
        name={screenNames.SIGN_IN}
        component={SignIn}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
