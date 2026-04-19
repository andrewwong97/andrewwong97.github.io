import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import App from '../App.js';

const renderAt = (path) => render(
  <MemoryRouter initialEntries={[path]}><App /></MemoryRouter>
);

describe('App', () => {
  it('renders without crashing', () => {
    renderAt('/');
  });

  it('shows expected content', async () => {
    renderAt('/');
    await screen.findByText(/Andrew Wong/);
  });
});