import React from 'react';
import ReactDom from 'react-dom';
import {render, fireEvent} from '@testing-library/react';
import PersonalInfo from '../account-setting/personal-info';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(<PersonalInfo/>, div);
  });
  

it("renders submit button correctly", () =>{
    const {getByTestId} = render(<PersonalInfo />)
    expect(getByTestId("personalInfo-submit")).toHaveTextContent("Submit")
})