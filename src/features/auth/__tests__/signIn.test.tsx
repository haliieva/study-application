import React from 'react';
import {fireEvent, waitFor} from '@testing-library/react-native';
import SignIn from '../signIn';
import {render} from '../../../../jest/test.utils';
import AL from '../../../utils/accessibilityLabels';
import {mockedNavigate} from '../../../../jest/jest.setup';
import screenNames from '../../../navigation/screenNames';

const {
  signIn: {signInButtonLabel, emailInputLabel, passwordInputLabel},
} = AL;

describe('auth screen test', () => {
  it('renders component', () => {
    render(<SignIn />);
  });

  it('should show validation errors if fields are empty', async () => {
    const {getByLabelText, queryByText, unmount} = render(<SignIn />);
    const btn = getByLabelText(signInButtonLabel);

    await waitFor(() => {
      fireEvent.press(btn);
    });
    const emailIsRequiredError = await waitFor(() =>
      queryByText('Email is required'),
    );
    const passwordIsRequiredError = await waitFor(() =>
      queryByText('Password is required'),
    );
    expect(emailIsRequiredError).not.toBeNull();
    expect(passwordIsRequiredError).not.toBeNull();
    unmount();
  });
  it('should show validation errors if fields are invalid', async () => {
    const {getByLabelText, queryByText, unmount} = render(<SignIn />);
    const email = getByLabelText(emailInputLabel);
    const password = getByLabelText(passwordInputLabel);
    const btn = getByLabelText(signInButtonLabel);

    await waitFor(() => {
      fireEvent.changeText(email, {target: {value: 'invalidemail'}});
    });
    await waitFor(() => {
      fireEvent.changeText(password, {target: {value: 'test!'}});
    });
    await waitFor(() => {
      fireEvent.press(btn);
    });
    const emailIsInvalidError = await waitFor(() =>
      queryByText('Email is invalid'),
    );
    const passwordIsRequiredError = await waitFor(() =>
      queryByText('Password is required'),
    );
    expect(emailIsInvalidError).not.toBeNull();
    expect(passwordIsRequiredError).toBeNull();
    unmount();
  });
  it('should navigate to sign up screen if sign up button pressed', async () => {
    const {getByText, unmount} = render(<SignIn />);
    const signUpButton = getByText('Sign Up');
    await waitFor(() => {
      fireEvent.press(signUpButton);
    });
    expect(mockedNavigate).toHaveBeenCalledWith(screenNames.SIGN_UP);
    unmount();
  });
  it("shouldn't show errors if fields are correct", async () => {
    const {getByLabelText, queryByText, unmount} = render(<SignIn />);
    const email = getByLabelText(emailInputLabel);
    const password = getByLabelText(passwordInputLabel);
    const btn = getByLabelText(signInButtonLabel);

    const credentials = {password: 'password!', username: 'valid@email.com'};

    await waitFor(() => {
      fireEvent.changeText(email, {target: {value: credentials.username}});
    });
    await waitFor(() => {
      fireEvent.changeText(password, {
        target: {value: credentials.password},
      });
    });
    await waitFor(() => {
      fireEvent.press(btn);
    });
    const emailIsInvalidError = queryByText('Email is invalid');
    const passwordIsRequiredError = queryByText('Password is required');

    expect(emailIsInvalidError).toBeNull();
    expect(passwordIsRequiredError).toBeNull();
    expect(thunks.signInThunk).toHaveBeenCalledWith(credentials);
    unmount();
  });
});
