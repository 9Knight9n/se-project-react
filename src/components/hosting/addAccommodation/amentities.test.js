import React from 'react';
import ReactDom from 'react-dom';
import {render, fireEvent, cleanup, screen, getByTestId } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Amentities from './amentities';
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from "react-router-dom";
afterEach(cleanup)

it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(<Router><Amentities /></Router>, div);
  });
  
test('Normal capacity can not be 0', () =>{
    render(<Router><Amentities /></Router>);
    const { rerender } = render(<amentities-normalCapacity normalCapacity={1} />)
    rerender(<amentities-normalCapacity number={0} />)
    expect(screen.getByTestId('amentities-normalCapacity')).not.toHaveTextContent('0')

});

test('maximum capacity can not be 0', () =>{
    render(<Router><Amentities /></Router>);
    const { rerender } = render(<amentities-maxCapacity maxCapacity={1} />)
    rerender(<amentities-maxCapacity number={0} />)
    expect(screen.getByTestId('amentities-maxCapacity')).not.toHaveTextContent('0')

});

test('Number of bedrooms can not be lower than 0', () =>{
    render(<Router><Amentities /></Router>);
    const { rerender } = render(<amentities-bedrooms bedrooms={0} />)
    rerender(<amentities-bedrooms number={-1} />)
    expect(screen.getByTestId('amentities-bedrooms')).not.toHaveTextContent('-1')

});

test('Number of double beds can not be lower than 0', () =>{
    render(<Router><Amentities /></Router>);
    const { rerender } = render(<amentities-doubleBeds doubleBeds={0} />)
    rerender(<amentities-doubleBeds number={-1} />)
    expect(screen.getByTestId('amentities-doubleBeds')).not.toHaveTextContent('-1')

});

test('Number of single beds can not be lower than 0', () =>{
    render(<Router><Amentities /></Router>);
    const { rerender } = render(<amentities-singleBeds singleBeds={0} />)
    rerender(<amentities-singleBeds number={-1} />)
    expect(screen.getByTestId('amentities-singleBeds')).not.toHaveTextContent('-1')

});

test('Number of bathrooms can not be lower than 1', () =>{
    render(<Router><Amentities /></Router>);
    const { rerender } = render(<amentities-bathrooms bathrooms={1} />)
    rerender(<amentities-bathrooms number={0} />)
    expect(screen.getByTestId('amentities-bathrooms')).not.toHaveTextContent('0')

});

test('Number of showers can not be lower than 1', () =>{
    render(<Router><Amentities /></Router>);
    const { rerender } = render(<amentities-showers showers={1} />)
    rerender(<amentities-showers number={0} />)
    expect(screen.getByTestId('amentities-showers')).not.toHaveTextContent('0')

});

