import React from 'react';
import ReactDom from 'react-dom';
import {render, fireEvent, cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Details from './details';
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer';
afterEach(cleanup)

it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(<Details/>, div);
  });
  
test('place name doesn not accept string over 40 character and null value', () =>{
    render(<Details/>);
    const inputPlaceName = screen.getByTestId('details-placeName');
    userEvent.type(inputPlaceName, 'seaSide villa in front of the jungle and near to facilities in city.');
    expect(inputPlaceName).not.toHaveValue('seaSide villa in front of the jungle and near to facilities in city.');
    expect(inputPlaceName).not.toBeNull;

});


test('Area doesn not accept string and null value', () =>{
    render(<Details/>);
    const inputArea = screen.getByTestId('details-area');
    userEvent.type(inputArea, 'This is string input');
    expect(inputArea).not.toHaveValue('This is string input');
    expect(inputArea).not.toBeNull;

});

test('Price doesn not accept string and null value', () =>{
    render(<Details/>);
    const inputPrice = screen.getByTestId('details-price');
    userEvent.type(inputPrice, 'This is string input');
    expect(inputPrice).not.toHaveValue('This is string input');
    expect(inputPrice).not.toBeNull;

});


