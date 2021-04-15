import React from 'react';
import ReactDom from 'react-dom';
import {render, fireEvent, cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer';
import Address from './address';
afterEach(cleanup)

it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(<Address />, div);
  });
  
test('Postal code doesn not accept string and null value', () =>{
    render(<Address />);
    const inputPostalCode = screen.getByTestId('address-postalCode');
    userEvent.type(inputPostalCode, 'This is postal code');
    expect(inputPostalCode).not.toHaveValue('This is postal code');
    expect(inputPostalCode).not.toBeNull;

});

test('Postal code must be more than 5 digits', () =>{
    render(<Address />);
    const inputPostalCode = screen.getByTestId('address-postalCode');
    userEvent.type(inputPostalCode, '123');
    expect(inputPostalCode).not.toHaveValue('123');
});

test('Postal code must less than 15 digits', () =>{
    render(<Address />);
    const inputPostalCode = screen.getByTestId('address-postalCode');
    userEvent.type(inputPostalCode, '123456789012345678');
    expect(inputPostalCode).not.toHaveValue('123456789012345678');
});



test('Full address does not accept null value.', () =>{
    render(<Address />);
    const inputFullAddress = screen.getByTestId('address-fullAddress');
    expect(inputFullAddress).not.toBeNull;

});

test('Country doesn not accept null value', () =>{
    render(<Address />);
    const countrySelect = screen.getByTestId('address-country');
    expect(countrySelect).not.toBeNull;
});

test('Region doesn not accept null value', () =>{
    render(<Address />);
    const regionSelect = screen.getByTestId('address-region');
    expect(regionSelect).not.toBeNull;
});