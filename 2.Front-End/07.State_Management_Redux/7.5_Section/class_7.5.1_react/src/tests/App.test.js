import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRedux from './helpers/renderWithRedux';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

test('A página deve renderizar dois botões e o número "0"', () => {
  renderWithRedux(<App />);
  const buttonAdicionar = screen.queryAllByRole('button');

  expect(buttonAdicionar.length).toBe(2);
  expect(screen.getByText('0')).toBeInTheDocument();
});

test('Reprodução de detecção com alteração de estado inicial', () => {
  const initialState = {
    counterReducer: {
      count: 10
    }
  }

  renderWithRedux(<App />, { initialState });
  expect(screen.queryByText('0')).not.toBeInTheDocument();
  expect(screen.getByText('10')).toBeInTheDocument();
});

test('Botões funcionais', () => {
  renderWithRedux(<App />);

  const BTN1 = screen.getByRole('button', { name: 'Incrementa 1' });
  const BTN5 = screen.getByRole('button', { name: 'Incrementa 5' });

  expect(BTN1).toBeInTheDocument();
  expect(BTN5).toBeInTheDocument();

  userEvent.click(BTN1);
  expect(screen.getByText('1')).toBeInTheDocument();

  userEvent.click(BTN5);
  expect(screen.getByText('6')).toBeInTheDocument();
});

test('Reprodução de eventos com alteração de estado inicial', () => {
  const initialState = {
    counterReducer: {
      count: 5
    }
  }

  renderWithRedux(<App />, { initialState });

  const BTN1 = screen.getByRole('button', { name: 'Incrementa 1' });
  const BTN5 = screen.getByRole('button', { name: 'Incrementa 5' });

  expect(BTN1).toBeInTheDocument();
  expect(BTN5).toBeInTheDocument();

  userEvent.click(BTN1);
  expect(screen.getByText('6')).toBeInTheDocument();

  userEvent.click(BTN5);
  expect(screen.getByText('11')).toBeInTheDocument();
});