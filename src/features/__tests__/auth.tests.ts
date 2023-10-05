import {signInThunk, signOutThunk} from '../auth/thunks';
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

  it('signOutThunk pending', () => {
    const result = authReducer(initialState, signOutThunk.pending());
    expect(result).toEqual({...initialState, loading: true});
  });
  it('signOutHunk fulfilled', () => {
    const expectedState = {...initialState, loading: true};
    const result = authReducer(expectedState, signOutThunk.fulfilled());
    expect(result).toEqual({
      ...expectedState,
      loading: false,
      isAuthenticated: false,
    });
  });
  it('signOutHunk rejected', () => {
    const expectedState = {...initialState, loading: false};
    const result = authReducer(expectedState, signOutThunk.rejected());
    expect(result).toEqual(expectedState);
  });
});
