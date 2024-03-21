import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import Profile from '../../pages/profile';
import { useAuth } from '../../hooks/useAuth';

jest.mock('../../hooks/useAuth', () => ({
  useAuth: jest.fn(() => ({
    token: 'mockToken',
    userid: 'mockUserId',
  })),
}));

describe('Profile component', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText, getByText } = render(<Profile />);
    expect(getByPlaceholderText('First Name')).toBeTruthy();
    expect(getByPlaceholderText('Last Name')).toBeTruthy();
    expect(getByPlaceholderText('Email')).toBeTruthy();
    expect(getByText('Update Details')).toBeTruthy();
  });

  it('updates user details when Update Details button is pressed', async () => {
    const { getByText, getByPlaceholderText } = render(<Profile />);
    const firstNameInput = getByPlaceholderText('First Name');
    const lastNameInput = getByPlaceholderText('Last Name');
    const emailInput = getByPlaceholderText('Email');
    const updateButton = getByText('Update Details');

    fireEvent.changeText(firstNameInput, 'John');
    fireEvent.changeText(lastNameInput, 'Doe');
    fireEvent.changeText(emailInput, 'john.doe@example.com');
    fireEvent.press(updateButton);

    await waitFor(() => {
      expect(getByText('User details updated.')).toBeTruthy();
    });
  });

  it('handles error when update fails', async () => {
    const { getByText } = render(<Profile />);
    
    jest.spyOn(global, 'fetch').mockImplementationOnce(() => Promise.resolve({ ok: false }));

    fireEvent.press(getByText('Update Details'));

    await waitFor(() => {
      expect(getByText('Could not update user details.')).toBeTruthy();
    });
  });

  it('toggles Vegan switch correctly', async () => {
    const { getByTestId } = render(<Profile />);
    const veganSwitch = getByTestId('vegan-switch');

    fireEvent.press(veganSwitch);
    expect(veganSwitch.props.value).toBe(true);

    fireEvent.press(veganSwitch);
    expect(veganSwitch.props.value).toBe(false);
  });

  it('initializes with correct initial state', () => {
    const { getByPlaceholderText } = render(<Profile />);
    expect(getByPlaceholderText('First Name').props.value).toBe('');
    expect(getByPlaceholderText('Last Name').props.value).toBe('');
    expect(getByPlaceholderText('Email').props.value).toBe('');
  });

  it('handles invalid input correctly', async () => {
    const { getByText } = render(<Profile />);
    const updateButton = getByText('Update Details');

    fireEvent.press(updateButton);

    await waitFor(() => {
      expect(getByText('Email or password missing.')).toBeTruthy();
    });
  });

  it('disables update button while updating details', async () => {
    const { getByText } = render(<Profile />);
    const updateButton = getByText('Update Details');

    fireEvent.press(updateButton);

    expect(updateButton.props.disabled).toBe(true);
  });

});
