import React from 'react';
import ReactDom from 'react-dom';
import {render, fireEvent, cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from "react-router-dom";
import Rules from './rules';
import { ExceptionMap } from 'antd/lib/result';
afterEach(cleanup)

it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(<Router><Rules/></Router>, div);
  });
  
for (let i=0; i<9; i++){
    test('place name doesn not accept string over 40 character and null value', () =>{
        render(<Router><Rules/></Router>);
        const rule = screen.getByTestId('rule' + i);
        expect(rule).toBeInTheDocument();
    });
}



