import React from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {Provider} from 'react-redux';
import Navigation from './src/navigation';
import {store} from './src/store';

const App = () => {
  GoogleSignin.configure({
    iosClientId:
      '1000485064136-mi93v830ggsls9jnjiip8guh30m8h8jt.apps.googleusercontent.com',
    // offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  });

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
