import {createSlice} from '@reduxjs/toolkit';
import {getImages, signInThunk, signOutThunk} from './thunks';

export interface AuthState {
  isAuthenticated: boolean;
  loading?: boolean;
  images?: Array<any>;
}

const initialState: AuthState = {
  isAuthenticated: true,
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
      isAuthenticated: true,
    }));
    builder.addCase(signInThunk.rejected, (state, action) => ({
      ...state,
      loading: false,
      authError: action.error,
    }));
    builder.addCase(signOutThunk.pending, state => ({
      ...state,
      loading: true,
    }));
    builder.addCase(signOutThunk.fulfilled, state => ({
      ...state,
      loading: false,
      isAuthenticated: false,
    }));
    builder.addCase(signOutThunk.rejected, state => ({
      ...state,
      loading: false,
    }));
    builder.addCase(getImages.pending, state => ({
      ...state,
      loading: true,
      images: [],
    }));
    builder.addCase(getImages.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      images: action.payload,
    }));
    builder.addCase(getImages.rejected, state => ({
      ...state,
      loading: false,
      images: [],
    }));
  },
});

export const {setIsAuthenticated, setUserData} = authSlice.actions;

export default authSlice.reducer;
