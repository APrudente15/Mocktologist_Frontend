import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import Landing from '../../pages/landing';
import { AuthProvider } from '../../hooks/useAuth'; // Assuming AuthProvider wraps the entire app and provides useAuth context

describe('Landing component', () => {
  it('navigates to Login screen when Login button is pressed', () => {
    const navigate = jest.fn();
    const useNavigationMock = jest.fn().mockReturnValue({ navigate });

    const { getByText } = render(
      <NavigationContainer>
        <AuthProvider>
          <Landing />
        </AuthProvider>
      </NavigationContainer>,
      { wrapper: ({ children }) => (
        <AuthProvider>
          <Landing />
        </AuthProvider>
      )}
    );

    fireEvent.press(getByText('Login'));

    expect(navigate).toHaveBeenCalledWith('Login');
  });

  it('navigates to Register screen when Register button is pressed', () => {
    const navigate = jest.fn();
    const useNavigationMock = jest.fn().mockReturnValue({ navigate });

    const { getByText } = render(
      <NavigationContainer>
        <AuthProvider>
          <Landing />
        </AuthProvider>
      </NavigationContainer>,
      { wrapper: ({ children }) => (
        <AuthProvider>
          <Landing />
        </AuthProvider>
      )}
    );

    fireEvent.press(getByText('Register'));

    expect(navigate).toHaveBeenCalledWith('Register');
  });
});
