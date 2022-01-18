import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {dialogs, messages, postData} from "./index";

test('renders learn react link', () => {
  render(<App dialogsData={dialogs} messagesData={messages} postData={postData}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
