import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import {BrowserRouter} from "react-router-dom";
import Photos from "./photos";
import Categories from "./categories";


describe('photos page test', () => {
  test('render page', () => {
    render(<BrowserRouter><Photos/></BrowserRouter>);
  });


  test('upload button render', () => {
    render(<BrowserRouter><Photos /></BrowserRouter>);
    expect(screen.getByText("Upload")).toBeInTheDocument()
  });


  test('next button render', () => {
    render(<BrowserRouter><Photos /></BrowserRouter>);
    expect(screen.getByText('Next')).toBeInTheDocument();
  });

  test('next button disabled', () => {
    render(<BrowserRouter><Photos /></BrowserRouter>);
    expect(screen.getByText('Next')).toBeDisabled();
  });


  test('back button render', () => {
    render(<BrowserRouter><Photos /></BrowserRouter>);
    expect(screen.getByText('Back')).toBeInTheDocument();
  });


  test('back button enabled', () => {
    render(<BrowserRouter><Photos /></BrowserRouter>);
    expect(screen.getByText('Back')).toBeEnabled();
  });



  test('add file', async () => {
    window.URL.createObjectURL = function() {};


    await act(async () => {
      render(<BrowserRouter><Photos /></BrowserRouter>);
      const input = screen.getByTestId("hello")
      await fireEvent.change(input, {
        target: {
          files: [new File(['(⌐□_□)'], 'hello.png', { type: 'image/png' })],
        },
      })
    });

    screen.debug()
  });


  //
  //
  //
  // facilities.map(facility => {
  //   test('next button render on facility '.concat(facility.label).concat(" selection."), () => {
  //     render(<BrowserRouter><Facilities /></BrowserRouter>);
  //       userEvent.click(screen.getAllByText(facility.label)[0])
  //       expect(screen.getByText('Next')).toBeInTheDocument();
  //   });
  // });
  //
  //
  //   facilities.map(facility => {
  //   test('next button enabled on facility '.concat(facility.label).concat(" selection."), () => {
  //     render(<BrowserRouter><Facilities /></BrowserRouter>);
  //       userEvent.click(screen.getAllByText(facility.label)[0])
  //       expect(screen.getByText('Next')).toBeEnabled();
  //   });
  // });
  //
  //
  //   facilities.map(facility => {
  //   sessionStorage.removeItem('add-villa-selected-facilities-id')
  //   sessionStorage.removeItem('add-villa-selected-facilities-label')
  //   test('save selected facility '.concat(facility.label).concat(" on selection."), () => {
  //     render(<BrowserRouter><Facilities /></BrowserRouter>);
  //       userEvent.click(screen.getAllByText(facility.label)[0])
  //       userEvent.click(screen.getByText('Next'))
  //       expect(sessionStorage.getItem('add-villa-selected-facilities-id') && true).toBe(true);
  //       expect(sessionStorage.getItem('add-villa-selected-facilities-label') && true).toBe(true);
  //   });
  // });

});