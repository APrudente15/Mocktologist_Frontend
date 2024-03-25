import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import Profile from '../../pages/profile';

jest.mock('expo-image-picker', () => ({
  launchImageLibraryAsync: jest.fn(),
}));


describe('Profile Component', () => {
  test('renders correctly', () => {
    const { getByText, getByPlaceholderText } = render(<Profile />);
    
    // Assert presence of UI elements
    expect(getByText('Profile')).toBeTruthy();
    expect(getByPlaceholderText('First Name')).toBeTruthy();
    expect(getByPlaceholderText('Last Name')).toBeTruthy();
    expect(getByPlaceholderText('Email')).toBeTruthy();
    expect(getByText('Update Details')).toBeTruthy();
  });

  test('update user details', async () => {
    const { getByText, getByPlaceholderText } = render(<Profile />);

    // Simulate user input
    fireEvent.changeText(getByPlaceholderText('First Name'), 'John');
    fireEvent.changeText(getByPlaceholderText('Last Name'), 'Doe');
    fireEvent.changeText(getByPlaceholderText('Email'), 'john.doe@example.com');
    fireEvent.press(getByText('Update Details'));

    // Wait for the asynchronous update process to complete
    await waitFor(() => {
      expect(getByText('User details updated.')).toBeTruthy();
    });
  });

  test('toggle vegan switch', () => {
    const { getByTestId } = render(<Profile />);

    const switchControl = getByTestId('vegan-switch');
    
    // Check initial state
    expect(switchControl.props.value).toBe(false);

    // Simulate toggle
    fireEvent(switchControl, 'onValueChange', true);

    // Check if state has changed
    expect(switchControl.props.value).toBe(true);
  });

  // Add more tests as needed...
});
