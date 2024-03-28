import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import Register from '../../pages/register';

describe('Register component', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText, getByText } = render(<Register />);
    expect(getByPlaceholderText('First Name')).toBeTruthy();
    expect(getByPlaceholderText('Last Name')).toBeTruthy();
    expect(getByPlaceholderText('Email')).toBeTruthy();
    expect(getByPlaceholderText('Password')).toBeTruthy();
  });

  it('handles registration correctly', async () => { //not sure how to get the register button, tried getby testId but kept returning not defined in the console
    const { getByPlaceholderText, getByText } = render(<Register />);
    const firstNameInput = getByPlaceholderText('First Name');
    const lastNameInput = getByPlaceholderText('Last Name');
    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');
    const registerButton = getByText('Register');

    fireEvent.changeText(firstNameInput, 'John');
    fireEvent.changeText(lastNameInput, 'Doe');
    fireEvent.changeText(emailInput, 'john.doe@example.com');
    fireEvent.changeText(passwordInput, 'password');
    fireEvent.press(registerButton);

    await waitFor(() => {
      expect(getByText('Successfully registered.')).toBeTruthy();
    });
  });

  it('handles empty fields correctly', async () => { //Multiple elementts with text register
    const { getByText } = render(<Register />);
    const registerButton = getByText('Register');

    fireEvent.press(registerButton);

    await waitFor(() => {
      expect(getByText('One or more fields are empty')).toBeTruthy();
    });
  });

  it('handles registration error correctly', async () => {
    const { getByPlaceholderText, getByText } = render(<Register />);
    const firstNameInput = getByPlaceholderText('First Name');
    const lastNameInput = getByPlaceholderText('Last Name');
    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');
    const registerButton = getByText('Register');

    jest.spyOn(global, 'fetch').mockImplementationOnce(() => Promise.resolve({ ok: false }));

    fireEvent.changeText(firstNameInput, 'John');
    fireEvent.changeText(lastNameInput, 'Doe');
    fireEvent.changeText(emailInput, 'john.doe@example.com');
    fireEvent.changeText(passwordInput, 'password');
    fireEvent.press(registerButton);

    await waitFor(() => {
      expect(getByText('Error during signup.')).toBeTruthy();
    });
  });

});
