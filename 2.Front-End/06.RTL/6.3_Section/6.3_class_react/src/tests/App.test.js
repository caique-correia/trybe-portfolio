import React from 'react';
import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../components/renderWithRouter';
import App from '../components/App';

describe('Teste de aplicação completo', () => {
  it('Testa renderização /App', () => {
    renderWithRouter(<App />);

    const homeTitle = screen.getByRole('heading', {
      name: 'Você está na página Início',
    });
    expect(homeTitle).toBeInTheDocument();
  });

  it('Testa renderização About', () => {
    const { history } = renderWithRouter(<App />);
    const aboutLink = screen.getByRole('link', { name: 'Sobre' });
    expect(aboutLink).toBeInTheDocument();
    userEvent.click(aboutLink);

    const { pathname } = history.location;
    expect(pathname).toBe('/about');

    const aboutTitle = screen.getByRole('heading', { name: 'Você está na página Sobre' });
    expect(aboutTitle).toBeInTheDocument();
  });

  it('Testa renderização NoMatch', () => {
    const { history } = renderWithRouter(<App />)

    act(() => {
      history.push('/non/existent/page')
    })

    const notFoundTitle = screen.getByRole('heading', { name: 'Página não encontrada' });
    expect(notFoundTitle).toBeInTheDocument();
  })
});