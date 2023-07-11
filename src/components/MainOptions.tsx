import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {blue, boulder, darkBlue, middleGrey, white} from '../assets/colors';
import {isAndroid} from '../utils/common';
import {setIsAuthenticated} from '../features/SignIn/authSlice';

const HeaderTitle = () => {
  return (
    <View>
      <Text style={styles.headerTitle}>Social</Text>
    </View>
  );
};

const SignOut = () => {
  const dispatch = useDispatch();
  const signOut = () => dispatch(setIsAuthenticated(false));

  return (
    <View style={{marginRight: 15}}>
      <Button onPress={signOut} title="Sign out" color={white} />
    </View>
  );
};

export const Options = () => ({
  headerStyle: styles.headerContainer,
  headerTitleStyle: styles.headerTitle,
  headerTitleAlign: 'center',
  headerTitle: () => <HeaderTitle />,
  headerRight: () => <SignOut />,
  tabBarStyle: styles.tabBarStyle,
  tabBarActiveTintColor: darkBlue,
  tabBarInactiveTintColor: white,
  gestureEnabled: false,
});

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
  headerRight: {
    flexDirection: 'row',
  },
  tabBarStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: blue,
    borderTopWidth: isAndroid() ? StyleSheet.hairlineWidth : 0.4,
    borderTopColor: isAndroid() ? middleGrey : boulder,
  },
});
