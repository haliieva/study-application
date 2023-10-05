import {Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';

export const isTablet = () => DeviceInfo.isTablet();
export const isAndroid = () => Platform.OS === 'android';
export const iosLessFourteen = () =>
  parseInt(Platform.Version as string, 10) < 14;
export const getChangePercentage = (price: number, priceChange: number) => {
  return (priceChange / price) * 100;
};
