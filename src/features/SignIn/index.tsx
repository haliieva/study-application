import React, {FC, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {
  LoginButton,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';
import {useDispatch} from 'react-redux';
import Wrapper from '../../components/Wrapper';
import {blue} from '../../assets/colors';
import {setIsAuthenticated} from './authSlice';

interface Props {}

const Content: FC<Props> = () => {
  const [userName, setUserName] = useState('');
  const [token, setToken] = useState('');
  const dispatch = useDispatch();

  const getResponseInfo = (error: any, result: any) => {
    if (error) {
      console.log('Error fetching data: ' + error.toString());
    } else {
      console.log(JSON.stringify(result));
      setUserName('Welcome ' + result.name);
      setToken('User Token: ' + result.id);
    }
  };

  const onLogout = () => {
    setUserName(null);
    setToken(null);
  };

  const onGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      dispatch(setIsAuthenticated(true));
      console.log(JSON.stringify(userInfo));
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('SIGN_IN_CANCELLED');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('IN_PROGRESS');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('PLAY_SERVICES_NOT_AVAILABLE');
      } else {
        console.log('ERROR IS: ' + JSON.stringify(error));
      }
    }
  };

  // const onGoogleSignOut = async () => {
  //   try {
  //     await GoogleSignin.revokeAccess();
  //     await GoogleSignin.signOut();
  //     console.log('success');
  //   } catch (error: any) {
  //     console.log('ERROR IS: ' + JSON.stringify(error));
  //   }
  // };
  const signIn = () => {
    dispatch(setIsAuthenticated(true));
  };

  return (
    <Wrapper styles={{justifyContent: 'center', alignItems: 'center'}}>
      <View>
        <Text style={styles.title}>Sign in</Text>
        <Button title="Sign in" color="blue" onPress={signIn} />
        <Button
          title="Sign in with Google"
          color="blue"
          onPress={onGoogleSignIn}
        />
        <GoogleSigninButton
          style={{width: 200, height: 48}}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Light}
          onPress={onGoogleSignIn}
        />
        {/*<Button*/}
        {/*  title={'Sign out from Google'}*/}
        {/*  color="blue"*/}
        {/*  onPress={onGoogleSignOut}*/}
        {/*/>*/}
      </View>
      <View>
        <LoginButton
          readPermissions={['public_profile']}
          onLoginFinished={(error, result) => {
            if (error) {
              console.log(error);
              console.log('Login has error: ' + result.error);
            } else if (result.isCancelled) {
              console.log('Login is cancelled.');
            } else {
              AccessToken.getCurrentAccessToken().then(data => {
                console.log(data.accessToken.toString());
                const processRequest = new GraphRequest(
                  '/me?fields=name,picture.type(large)',
                  null,
                  getResponseInfo,
                );
                // Start the graph request.
                new GraphRequestManager().addRequest(processRequest).start();
              });
            }
          }}
          onLogoutFinished={onLogout}
        />
      </View>
    </Wrapper>
  );
};

export default Content;

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
    color: blue,
    fontSize: 30,
    fontWeight: '800',
  },
});
