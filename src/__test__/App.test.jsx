import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import App from '../App.jsx';

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

  it('falls back to the landing page for unrouted placeholder pages', async () => {
    renderAt('/coffee');
    await screen.findByText(/Pick a door/);
  });

  it('falls back to the landing page for unknown paths', async () => {
    renderAt('/does-not-exist');
    await screen.findByText(/Pick a door/);
  });
});