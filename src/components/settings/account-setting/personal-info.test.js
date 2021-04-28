import React from 'react';
import ReactDom from 'react-dom';
import {render, fireEvent, cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PersonalInfo from '../account-setting/personal-info';
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer';
afterEach(cleanup)

it('profile renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(<PersonalInfo/>, div);
  });
  

// it("email contains @", () =>{
//     const {getByTestId} = render(<PersonalInfo />)
//     expect(getByTestId("personalInfo-emailId").
// })

it("email is not null", () =>{
    const {getByTestId} = render(<PersonalInfo />);
    expect(getByTestId("personalInfo-emailId")).not.toBeNull;
})

it("firstName is not null", () =>{
    const {getByTestId} = render(<PersonalInfo />);
    expect(getByTestId("personalInfo-firstName")).not.toBeNull;
})

it("lastName is not null", () =>{
    const {getByTestId} = render(<PersonalInfo />);
    expect(getByTestId("personalInfo-lastName")).not.toBeNull;
})

test('national code must at least 10 digits', () =>{
    render(<PersonalInfo />);
    const inputNationalCode = screen.getByTestId('personalInfo-nationalId');
    userEvent.type(inputNationalCode, '12345');
    expect(inputNationalCode).not.toHaveValue('12345');
});

test('email must be valid', () =>{
    render(<PersonalInfo />);
    const inputEmailId= screen.getByTestId('personalInfo-emailId');
    userEvent.type(inputEmailId, 'abdskdw.321dmwi.com');
    expect(inputEmailId).not.toHaveValue('abdskdw.321dmwi.com');
});

// it("matches snapShot", () =>{
//     const tree = renderer.create(<PersonalInfo />).toJSON();
//     expect(tree).toMatchSnapshot();
// })

