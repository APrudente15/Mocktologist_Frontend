import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Landing from '../../pages/landing';
import { NavigationContainer } from '@react-navigation/native';

describe('Landing component', () => {
  test('renders correctly', () => {
    const { getByText } = render(
      <NavigationContainer>
        <Landing />
      </NavigationContainer>
    );

    expect(getByText('A mocktail bar in your pocket.')).toBeTruthy();
    expect(getByText('Login')).toBeTruthy();
    expect(getByText('Register')).toBeTruthy();
  });

  test('navigates to Login screen when Login button is pressed', () => {
    const { getByText, getByTestId } = render(
      <NavigationContainer>
        <Landing />
      </NavigationContainer>
    );

    fireEvent.press(getByText('Login'));
    expect(getByTestId('LoginScreen')).toBeTruthy(); // Assuming you have a test ID set for the Login screen
  });

  test('navigates to Steps screen when Register button is pressed', () => {
    const { getByText, getByTestId } = render(
      <NavigationContainer>
        <Landing />
      </NavigationContainer>
    );

    fireEvent.press(getByText('Register'));
    expect(getByTestId('StepsScreen')).toBeTruthy(); // Assuming you have a test ID set for the Steps screen
  });
});
