import DeviceInfo from 'react-native-device-info';
import { Platform } from 'react-native';

export const isTablet = () => DeviceInfo.isTablet();
export const isAndroid = () => Platform.OS === 'android';
export const iosLessFourteen = () =>
  parseInt(Platform.Version as string, 10) < 14;
