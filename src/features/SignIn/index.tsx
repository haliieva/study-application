import React, {FC} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
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
import {Box, Heading, HStack, VStack, Button, Text} from 'native-base';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';
import Wrapper from '../../components/Wrapper';
import {blue, white} from '../../assets/colors';
import {setIsAuthenticated, setUserData} from './authSlice';
import Input from '../../components/Input';
import {isTablet} from '../../utils/common';

interface Props {}

const Content: FC<Props> = () => {
  const dispatch = useDispatch();

  const getResponseInfo = (error: any, result: any) => {
    if (error) {
      console.log('Error fetching data: ' + error.toString());
    } else {
      dispatch(
        setUserData({
          name: result.name,
          token: result.id,
        }),
      );
    }
  };

  const onLogout = () => {
    dispatch(
      setUserData({
        name: null,
        token: null,
      }),
    );
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

  const onLoginFinished = (error: any, result: any) => {
    if (error) {
      console.log(error);
      console.log('Login has error: ' + result.error);
    } else if (result.isCancelled) {
      console.log('Login is cancelled.');
    } else {
      AccessToken.getCurrentAccessToken().then(data => {
        console.log(data?.accessToken.toString());
        const processRequest = new GraphRequest(
          '/me?fields=name,picture.type(large)',
          null,
          getResponseInfo,
        );
        // Start the graph request.
        new GraphRequestManager().addRequest(processRequest).start();
      });
    }
  };

  return (
    <Wrapper styles={styles.container}>
      <HStack flexGrow={1} safeArea>
        <KeyboardAwareScrollView
          enableOnAndroid
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.content}>
          <VStack alignItems="center">
            <Heading style={styles.title}>Sign in</Heading>
          </VStack>
          <Formik initialValues={{email: '', password: ''}} onSubmit={() => {}}>
            {({handleChange, handleBlur, values, errors, touched}) => (
              <VStack>
                <Box>
                  <Input
                    name="Email"
                    value={values.email}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    error={errors.email}
                    touched={touched.email}
                    keyboardType={'email-address'}
                  />
                  <Input
                    name="Password"
                    value={values.password}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    error={errors.password}
                    touched={touched.password}
                    secure
                  />
                </Box>
                <Button color="darkBlue" mt={4} onPress={signIn}>
                  Sign In
                </Button>
              </VStack>
            )}
          </Formik>
          <View style={styles.googleBtnContainer}>
            <Button color="blue" onPress={onGoogleSignIn}>
              Sign in with Google
            </Button>
            <GoogleSigninButton
              style={styles.googleBtn}
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
              permissions={['public_profile']}
              onLoginFinished={onLoginFinished}
              onLogoutFinished={onLogout}
            />
          </View>
          <VStack alignItems="flex-end" mt={2}>
            <TouchableOpacity style={styles.signUpBtn} onPress={() => {}}>
              <Text style={styles.forgotText}>Forgot password</Text>
            </TouchableOpacity>
            <HStack mt={2}>
              <Text style={styles.text}>Are you registered?</Text>
              <TouchableOpacity style={styles.signUpBtn} onPress={() => {}}>
                <Text>Sign Up</Text>
              </TouchableOpacity>
            </HStack>
          </VStack>
        </KeyboardAwareScrollView>
      </HStack>
    </Wrapper>
  );
};

export default Content;

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    marginHorizontal: isTablet() ? 60 : 15,
  },
  container: {justifyContent: 'center', alignItems: 'center'},
  signUpBtn: {
    fontSize: 14,
    paddingLeft: 5,
  },
  text: {
    color: white,
    fontSize: 14,
  },
  title: {
    alignSelf: 'center',
    color: blue,
    fontSize: 30,
    fontWeight: '800',
  },
  googleBtn: {width: 200, height: 48},
  googleBtnContainer: {marginTop: 6},
  forgotText: {textDecorationLine: 'underline'},
});
