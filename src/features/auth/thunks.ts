import {createAsyncThunk} from '@reduxjs/toolkit';
import {setIsAuthenticated} from './authSlice';

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
      return;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const signOutThunk = createAsyncThunk(
  'auth/signUp',
  async (_, {dispatch, rejectWithValue}) => {
    try {
      dispatch(setIsAuthenticated(false));
      return;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const getImages = createAsyncThunk(
  'auth/getImages',
  async (_, {rejectWithValue}) => {
    try {
      const options = {
        method: 'GET',
        headers: {
          Authorization:
            'Client-ID TFlwlUIelRQPTRypNW3kkpyBjjXalztGG9oSotwo-58',
        },
      };
      const response = await fetch(
        'https://api.unsplash.com/search/photos?page=1&query=cats',
        options,
      );
      const {results} = await response.json();
      return results.map((imageObj: any) => {
        return imageObj.urls;
      });
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  },
);
