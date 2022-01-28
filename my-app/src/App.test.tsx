import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {addMessage, addPost, changePostState, state} from "./redux/state";

test('renders learn react link', () => {
  render(<App state={state} addPost={addPost} addMessage={addMessage}  changePostState={changePostState}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
