import {NativeModules} from 'react-native';
import {jest} from '@jest/globals';

jest.mock('react-native-device-info', () => {
  return {
    getModel: jest.fn(),
    isTablet: jest.fn(),
  };
});
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
jest.mock('react-native-keyboard-aware-scroll-view', () => {
  const KeyboardAwareScrollView = require('react-native').ScrollView;
  return {KeyboardAwareScrollView};
});

jest.mock('@react-navigation/native', () => {
  const navigation = jest.requireActual('@react-navigation/native');
  return {
    ...navigation,
    useNavigation: () => ({
      navigate: mockedNavigate,
      goBack: mockedGoBack,
    }),
    useRoute: mockUseRoute,
  };
});

jest.mock('@react-native-google-signin/google-signin', () => {
  const mockGoogleSignin = jest.requireActual(
    '@react-native-google-signin/google-signin',
  );

  mockGoogleSignin.GoogleSignin.hasPlayServices = () => Promise.resolve(true);
  mockGoogleSignin.GoogleSignin.configure = () => Promise.resolve();
  mockGoogleSignin.GoogleSignin.currentUserAsync = () => {
    return Promise.resolve({
      name: 'name',
      email: 'test@example.com',
    });
  };
  return mockGoogleSignin;
});

NativeModules.RNGoogleSignin = {
  BUTTON_SIZE_ICON: 0,
  BUTTON_SIZE_STANDARD: 0,
  BUTTON_SIZE_WIDE: 0,
  BUTTON_COLOR_AUTO: 0,
  BUTTON_COLOR_LIGHT: 0,
  BUTTON_COLOR_DARK: 0,
  SIGN_IN_CANCELLED: '0',
  IN_PROGRESS: '1',
  PLAY_SERVICES_NOT_AVAILABLE: '2',
  SIGN_IN_REQUIRED: '3',
  configure: jest.fn(),
  currentUserAsync: jest.fn(),
};

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

export const mockedNavigate = jest.fn();
export const mockedGoBack = jest.fn();
export const mockUseRoute = jest.fn(() => ({params: {}}));
export {NativeModules};
