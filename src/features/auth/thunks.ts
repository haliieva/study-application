import {createAsyncThunk} from '@reduxjs/toolkit';
import {setIsAuthenticated} from './authSlice';

export const signInThunk = createAsyncThunk(
  'auth/signin',
  async (payload, {dispatch, rejectWithValue}) => {
    try {
      const {email, password} = payload;
      dispatch(setIsAuthenticated(true));
      return;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);
