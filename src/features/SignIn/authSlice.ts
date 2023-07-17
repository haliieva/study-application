import {createSlice} from '@reduxjs/toolkit';

export interface AuthState {
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setIsAuthenticated: (state, {payload}) => ({
      ...state,
      isAuthenticated: payload,
    }),
    setUserData: (state, {payload}) => ({
      ...state,
      name: payload.name,
      token: payload.id,
    }),
  },
});

export const {setIsAuthenticated, setUserData} = authSlice.actions;

export default authSlice.reducer;
