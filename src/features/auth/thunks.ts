import {createAsyncThunk} from '@reduxjs/toolkit';

export const signInThunk = createAsyncThunk(
  'auth/signin',
  async (
    payload: {
      email: string;
      password: string;
    },
    {dispatch, rejectWithValue},
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
