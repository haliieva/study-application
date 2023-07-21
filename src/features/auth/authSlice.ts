import {createSlice} from '@reduxjs/toolkit';
import {signInThunk} from './thunks';

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
  extraReducers: builder => {
    builder.addCase(signInThunk.pending, state => ({
      ...state,
      loading: true,
    }));
    builder.addCase(signInThunk.fulfilled, state => ({
      ...state,
      loading: false,
    }));
    builder.addCase(signInThunk.rejected, (state, action) => ({
      ...state,
      loading: false,
      authError: action.error,
    }));
  },
});

export const {setIsAuthenticated, setUserData} = authSlice.actions;

export default authSlice.reducer;
