import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import Diary from '../../pages/diary';
import { useAuth } from '../../hooks/useAuth';
import { useOverlayPopup } from '../../hooks/useOverlayPopup';

jest.mock('../../hooks/useAuth');
jest.mock('../../hooks/useOverlayPopup');

const mockNavigation = {
    navigate: jest.fn(),
  };

describe('Diary component', () => {
  test('fetches drinks and renders them correctly', async () => {
    const drinks = [
      { id: 1, name: 'Drink 1', body: 'Drink 1 body', image: 'drink1.jpg', rating: 4, tastes: ['Sweet', 'Bitter'], vegan: true },
      { id: 2, name: 'Drink 2', body: 'Drink 2 body', image: 'drink2.jpg', rating: 3, tastes: ['Sour', 'Fruity'], vegan: false }
    ];
    useAuth.mockReturnValue({ userId: '123', token: 'mockToken' });
    useOverlayPopup.mockReturnValue({ showOverlay: false, setShowOverlay: jest.fn(), showPopup: false, setShowPopup: jest.fn() });
    fetch.mockResponseOnce(JSON.stringify(drinks));

    const { getByText, getByTestId } = render(<Diary />);
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

    expect(getByText('Mix Diary')).toBeTruthy();
    expect(getByText('Drink 1')).toBeTruthy();
    expect(getByText('Drink 2')).toBeTruthy();
    expect(getByTestId('drink-thumbnail-1')).toBeTruthy();
    expect(getByTestId('drink-thumbnail-2')).toBeTruthy();
  });

  test('handles overlay and popup correctly', async () => {
    useAuth.mockReturnValue({ userId: '123', token: 'mockToken' });
    useOverlayPopup.mockReturnValue({ showOverlay: true, setShowOverlay: jest.fn(), showPopup: true, setShowPopup: jest.fn() });

    const { queryByTestId } = render(<Diary />);

    expect(queryByTestId('overlay')).toBeTruthy();
    expect(queryByTestId('popup')).toBeTruthy();
  });

  test('navigates to details screen when drink thumbnail is pressed', async () => {
    const drinks = [
      { id: 1, name: 'Drink 1', body: 'Drink 1 body', image: 'drink1.jpg', rating: 4, tastes: ['Sweet', 'Bitter'], vegan: true },
      { id: 2, name: 'Drink 2', body: 'Drink 2 body', image: 'drink2.jpg', rating: 3, tastes: ['Sour', 'Fruity'], vegan: false }
    ];
    useAuth.mockReturnValue({ userId: '123', token: 'mockToken' });
    useOverlayPopup.mockReturnValue({ showOverlay: false, setShowOverlay: jest.fn(), showPopup: false, setShowPopup: jest.fn() });
    fetch.mockResponseOnce(JSON.stringify(drinks));

    const { getByTestId } = render(<Diary navigation={mockNavigation} />);
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

    fireEvent.press(getByTestId('drink-thumbnail-1'));

    expect(mockNavigation.navigate).toHaveBeenCalledWith('Details', { drinkId: 1 });
  });

  test('displays error message when drink fetch fails', async () => {
    useAuth.mockReturnValue({ userId: '123', token: 'mockToken' });
    useOverlayPopup.mockReturnValue({ showOverlay: false, setShowOverlay: jest.fn(), showPopup: false, setShowPopup: jest.fn() });
    fetch.mockRejectOnce(new Error('Failed to fetch drinks'));

    const { getByText } = render(<Diary navigation={mockNavigation} />);
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

    expect(getByText('Failed to fetch drinks')).toBeTruthy();
  });

});
