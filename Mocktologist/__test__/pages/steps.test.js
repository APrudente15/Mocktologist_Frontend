import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import Steps from '../../pages/steps';

jest.mock('../../hooks/useAuth', () => ({
    useAuth: () => ({
      userId: 'mockUserId',
      token: 'mockToken',
    }),
  }));
  
  // Mocking the useOverlayPopup hook
  jest.mock('../../hooks/useOverlayPopup', () => ({
    useOverlayPopup: () => ({
      showOverlay: false,
      setShowOverlay: jest.fn(),
      showPopup: false,
      setShowPopup: jest.fn(),
      showPopupIng: false,
      setShowPopupIng: jest.fn(),
    }),
  }));
  
  // Mocking fetch
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ /* mocked response */ }),
    })
  );

describe('<Steps />', () => {
  test('renders correctly', () => {
    const { getByText } = render(<NavigationContainer> <Steps /> </NavigationContainer>);
    expect(getByText('Ingredients')).toBeDefined();
  });

  test('displays ingredients when "Ingredients" button is pressed', async () => {
    const { getByText } = render(<NavigationContainer> <Steps /> </NavigationContainer>);
    const ingredientsButton = getByText('Ingredients');
    fireEvent.press(ingredientsButton);
    await waitFor(() => expect(getByText('Ingredient 1')).toBeDefined());
  });

  test('displays confirmation modal when "Quit Mix" button is pressed', async () => {
    const { getByText } = render( <NavigationContainer> <Steps /> </NavigationContainer> );
    const quitMixButton = getByText('Quit Mix');
    fireEvent.press(quitMixButton);
    await waitFor(() => expect(getByText('Are you sure you want to quit?')).toBeDefined());
  });

});
