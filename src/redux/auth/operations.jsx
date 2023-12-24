import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuth = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuth = () => {
  axios.defaults.headers.common.Authorization = '';
};
// REGISTER
export const register = createAsyncThunk(
  'auth/register',
  async (creds, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', creds);
      setAuth(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// LOGIN
export const logIn = createAsyncThunk('auth/logIn', async (creds, thunkAPI) => {
  try {
    const response = await axios.post('/users/login', creds);
    setAuth(response.data.token);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
// LOG OUT
export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuth();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
// REFRESHER
export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    if (!token) {
      return thunkAPI.rejectWithValue('Not Valid');
    }
    setAuth(token);
    try {
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);