import React from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {Provider} from 'react-redux';
import {NativeBaseProvider} from 'native-base';
import Navigation from './src/navigation';
import {store} from './src/store';
import theme from './src/theme/index';

const App = () => {
  GoogleSignin.configure({
    iosClientId:
      '1000485064136-mi93v830ggsls9jnjiip8guh30m8h8jt.apps.googleusercontent.com',
    // offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  });

  return (
    <NativeBaseProvider theme={theme}>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </NativeBaseProvider>
  );
};

export default App;
