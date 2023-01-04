export const REQUEST_API = 'REQUEST_API';
export const GET_CHARACTER = 'GET_CHARACTER';
export const UPDATE_NAME = 'UPDATE_NAME';
export const RESCUE_NAME = 'RESCUE_NAME';
export const URL = 'https://anapioficeandfire.com/api/characters/'

export const requestAPI = () => ({ type: REQUEST_API });
export const getCharacter = (data) => ({ type: GET_CHARACTER, payload: data });
export const updateName = (number) => ({ type: UPDATE_NAME, payload: number })
export const rescueName = (number) => ({type: RESCUE_NAME, payload: number});

export const fetchAPI = (number) => {
  return (dispatch) => {
    dispatch(requestAPI());
    dispatch(rescueName(number))
    fetch(`${URL}${number}`)
      .then(response => response.json())
      .then(data => dispatch(getCharacter(data)))
    dispatch(updateName(''));
  }
}
