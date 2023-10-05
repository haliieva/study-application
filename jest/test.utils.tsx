import React, {ReactNode} from 'react';
import {Store} from 'redux';
import {render as rtlRender} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {NativeBaseProvider} from 'native-base';

type RenderWithRedux = {store: Store} & any;

const render = (
  ui: ReactNode,
  initialState: object = {},
  dispatch?: any,
): RenderWithRedux => {
  const inset = {
    frame: {x: 0, y: 0, width: 0, height: 0},
    insets: {top: 0, left: 0, right: 0, bottom: 0},
  };
  const mockStore = configureStore();
  let store;

  store = mockStore(initialState);
  if (dispatch) {
    store.dispatch = dispatch;
  }

  return {
    ...rtlRender(
      <NativeBaseProvider initialWindowMetrics={inset}>
        <Provider store={store}>{ui}</Provider>
      </NativeBaseProvider>,
    ),
    store,
  };
};
export * from '@testing-library/react-native';
export {render};
