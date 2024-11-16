import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App.js';


describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
  });

  it('shows expected content', async () => {
    render(<App />);
    await screen.findByText("Hi");
  });
});