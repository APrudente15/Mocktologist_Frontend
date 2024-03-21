// import React from 'react';
// import { render, fireEvent } from '@testing-library/react-native';
// import Dash from '../../pages/dash';

// describe('Dash component', () => {
//   test('renders correctly when inactive', () => {
//     const { getByText, getByTestId } = render(<Dash />);
//     expect(getByText('Ready to make something new?')).toBeTruthy();
//     expect(getByText('+ New Mocktail')).toBeTruthy();
//     expect(getByTestId('bartender-image')).toBeTruthy();
//   });

//   test('renders correctly when active', () => {
//     const { getByText, getByTestId } = render(<Dash />);
//     fireEvent.press(getByText('How\'s it going, John?'));
//     expect(getByTestId('overlay')).toBeTruthy();
//     expect(getByTestId('popup')).toBeTruthy();
//   });

//   test('closes overlay and popup when popup button is pressed', () => {
//     const { getByText, queryByTestId } = render(<Dash />);
//     fireEvent.press(getByText('How\'s it going, John?'));
//     fireEvent.press(getByText('X'));
//     expect(queryByTestId('overlay')).toBeNull();
//     expect(queryByTestId('popup')).toBeNull();
//   });
// });
