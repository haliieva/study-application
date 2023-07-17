import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {white} from '../assets/colors';
import {setIsAuthenticated} from '../features/SignIn/authSlice';

export const HeaderTitle = () => {
  return (
    <View>
      <Text style={styles.headerTitle}>Social</Text>
    </View>
  );
};

export const SignOut = () => {
  const dispatch = useDispatch();
  const signOut = () => dispatch(setIsAuthenticated(false));

  return (
    <View style={styles.signOutBtn}>
      <Button onPress={signOut} title="Sign out" color={white} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: white,
    fontSize: 18,
  },
  signOutBtn: {marginRight: 15},
});
