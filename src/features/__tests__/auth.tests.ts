import {signInThunk} from '../auth/thunks';
import authReducer from '../auth/authSlice';

describe('Auth reducer', () => {
  const initialState = {isAuthenticated: false};
  it('signInThunk pending', () => {
    const expectedState = {loading: true, isAuthenticated: false};
    const result = authReducer(initialState, signInThunk.pending);
    expect(result).toEqual({...initialState, ...expectedState});
  });
  it('signInThunk success', () => {
    const expectedState = {
      ...initialState,
      loading: false,
      isAuthenticated: true,
    };
    const result = authReducer(initialState, signInThunk.fulfilled);
    expect(result).toEqual(expectedState);
  });
  it('signInThunk failure', () => {
    const authError = {
      message: 'auth error',
    };

    const expectedState = {
      ...initialState,
      authError,
      isAuthenticated: false,
      loading: false,
    };
    // @ts-ignore
    const result = authReducer(initialState, signInThunk.rejected(authError));
    expect(result).toEqual(expectedState);
  });
});
