const API_URL = 'https://icanhazdadjoke.com/';
const worstJoke = document.getElementById('jokeContainer');

const fetchJoke = () => {
  const requestInfo = {
    method: 'GET',
    headers: { Accept: 'application/json' }
  };

  fetch(API_URL, requestInfo)
  .then((response) => response.json())
  .then((data) => worstJoke.innerText = data.joke);
};

window.onload = () => fetchJoke();
