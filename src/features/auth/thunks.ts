import {createAsyncThunk} from '@reduxjs/toolkit';

export const signInThunk = createAsyncThunk(
  'auth/signIn',
  async (
    payload: {
      email: string;
      password: string;
    },
    {rejectWithValue},
  ) => {
    try {
      const {email, password} = payload;
      console.log(email);
      return;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const signOutThunk = createAsyncThunk(
  'auth/signUp',
  async ({rejectWithValue}) => {
    try {
      console.log('Signed out');
      return;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);
