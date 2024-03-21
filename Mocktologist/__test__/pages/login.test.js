// import React from 'react';
// import { render, fireEvent, waitFor } from '@testing-library/react-native';
// import Login from '../../pages/login';
// import { useAuth } from '../../hooks/useAuth';

// jest.mock('../../hooks/useAuth', () => ({
//   useAuth: jest.fn(() => ({
//     login: jest.fn(),
//     token: null,
//   })),
// }));

// describe('Login component', () => {
//   it('renders correctly', () => {
//     const { getByPlaceholderText, getByText } = render(<Login />);
//     expect(getByPlaceholderText('Email')).toBeTruthy();
//     expect(getByPlaceholderText('Password')).toBeTruthy();
//     expect(getByText('Login')).toBeTruthy();
//   });

//   it('calls login function with correct credentials', async () => {
//     const { getByPlaceholderText, getByText } = render(<Login />);
//     const emailInput = getByPlaceholderText('Email');
//     const passwordInput = getByPlaceholderText('Password');
//     const loginButton = getByText('Login');

//     fireEvent.changeText(emailInput, 'test@example.com');
//     fireEvent.changeText(passwordInput, 'password');
//     fireEvent.press(loginButton);

//     await waitFor(() => {
//       expect(useAuth().login).toHaveBeenCalledWith({ email: 'test@example.com', password: 'password' });
//     });
//   });

//   it('displays error message for missing email or password', async () => {
//     const { getByText } = render(<Login />);
//     const loginButton = getByText('Login');

//     fireEvent.press(loginButton);

//     await waitFor(() => {
//       expect(getByText('Email or password missing.')).toBeTruthy();
//     });
//   });

// });
