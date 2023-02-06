import React, {RefObject} from 'react';
import {NavigationContainerRef} from '@react-navigation/native';

export const navigationRef: RefObject<any> = React.createRef();

export const navigate = (path: string, params: object = {}) => {
  navigationRef?.current?.navigate(path, params);
};
