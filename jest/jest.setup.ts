import {jest} from '@jest/globals';

jest.mock('react-native-device-info', () => {
  return {
    getModel: jest.fn(),
    isTablet: jest.fn(),
  };
});
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

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

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

export const mockedNavigate = jest.fn();
export const mockedGoBack = jest.fn();
export const mockUseRoute = jest.fn(() => ({params: {}}));
