import renderWithRouterAndRedux from "./helpers/renderWithRouterAndRedux";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from '../App'

test('Acessa a rota /profile a partir na Home como "Tryber"', () => {
  renderWithRouterAndRedux(<App />)

  const nameInput = screen.getByRole('textbox');
  expect(nameInput).toBeInTheDocument();

  userEvent.type(nameInput, 'Tryber');
  expect(nameInput.value).toBe('Tryber');

  const loginButton = screen.getByRole('button');
  userEvent.click(loginButton);

  expect(screen.getByText('Boas vindas, Tryber')).toBeInTheDocument();
});

test('Acessa diretamente a rota /profile, não cadastrando o nome', () => {
  const initialEntries = ['/profile'];

  renderWithRouterAndRedux(<App />, { initialEntries });

  expect(screen.queryByText('Boas Vindas')).not.toBeInTheDocument();
  expect(screen.getByText('Você precisa realizar o login')).toBeInTheDocument();
});

test('Acessar diretamente a rota /profile, alterando artificialmente o estado global', () => {
  const initialEntries = ['/profile'];
  const initialState = { userName: 'Tryber' };

  renderWithRouterAndRedux(<App />, { initialState, initialEntries });

  expect(screen.queryByText('Você precisa realizar o login')).not.toBeInTheDocument();
  expect(screen.getByText('Boas vindas, Tryber')).toBeInTheDocument();
});