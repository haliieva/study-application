import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {white} from '../assets/colors';
import {signOutThunk} from '../features/auth/thunks';
import {AppDispatch} from '../store';

export const HeaderTitle = () => {
  return (
    <View>
      <Text style={styles.headerTitle}>Social</Text>
    </View>
  );
};

export const SignOut = () => {
  const dispatch = useDispatch<AppDispatch>();
  const signOut = () => dispatch(signOutThunk());

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
