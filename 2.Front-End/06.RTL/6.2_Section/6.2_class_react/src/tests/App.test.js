import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from '../components/App';

afterEach(() => jest.clearAllMocks());

it('fetches a joke, first form', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke),
  });

  render(<App />);
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith(
    'https://icanhazdadjoke.com/',
    { headers: { Accept: 'application/json' } },
  );
});

it('fetches a joke, second form', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(joke),
  }));

  render(<App />);
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } });
});

it('fetches a joke, third form', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  global.fetch = jest.fn(async () => ({
    json: async () => joke
  }));

  render(<App />);
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } });
});

it('fetches when button is clicked', async () => {
  const firstJoke = {
    id: 'MyNameIsNot7',
    joke: "But is it t'see or t'eat",
    status: 200,
  };

  const secondJoke = {
    id: 'MyNameIsIndeed7',
    joke: "Do you like pineapplere juice?",
    status: 200,
  };

  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValueOnce({
    json: jest.fn().mockResolvedValue(firstJoke),
  });

  render (<App />);
  const newJokeButton = screen.getByRole('button', { name: 'New Joke' });
  const renderFirstJoke = await screen.findByText(firstJoke.joke);
  const seachSecondJoke = screen.queryByText(secondJoke.joke);
  // const newJokeButton = await screen.findByRole('button', { name: 'New Joke' });

  expect(renderFirstJoke).toBeInTheDocument();
  expect(seachSecondJoke).not.toBeInTheDocument();
  expect(newJokeButton).toBeInTheDocument();
  expect(global.fetch).toBeCalledTimes(1);

  global.fetch.mockResolvedValueOnce({
    json: jest.fn().mockResolvedValue(secondJoke),
  });

  userEvent.click(newJokeButton);
  
  const renderSecondJoke = await screen.findByText(secondJoke.joke);
  const seachFirstJoke = screen.queryByText(firstJoke.joke);

  expect(renderSecondJoke).toBeInTheDocument();
  expect(seachFirstJoke).not.toBeInTheDocument();
  expect(global.fetch).toBeCalledTimes(2);
})