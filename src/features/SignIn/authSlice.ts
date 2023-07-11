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
  },
});

// Action creators are generated for each case reducer function
export const {setIsAuthenticated} = authSlice.actions;

export default authSlice.reducer;
