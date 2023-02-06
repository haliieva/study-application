import screenNames from './screenNames';

export type MainNavigatorParams = {
  [screenNames.DASHBOARD]: undefined;
  [screenNames.SETTINGS]: undefined;
  [screenNames.HISTORY]: undefined;
};

export type RootNavigatorParams = {
  [screenNames.MAIN]: MainNavigatorParams;
};

export type DashboardStackNavigatorParams = {
  [screenNames.MAIN]: undefined;
};
