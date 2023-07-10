import screenNames from './screenNames';

export type MainNavigatorParams = {
  [screenNames.DASHBOARD]: undefined;
  [screenNames.SETTINGS]: undefined;
  [screenNames.DOCUMENTS]: undefined;
};

export type AuthStackNavigatorParams = {
  [screenNames.SIGN_IN]: undefined;
};

export type RootNavigatorParams = {
  [screenNames.MAIN]: MainNavigatorParams;
  [screenNames.AUTH]: AuthStackNavigatorParams;
};
