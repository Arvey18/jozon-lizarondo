import {API} from '../constant';

export const LOGIN = (username: string, password: string) => (
  dispatch: any
) => {
  console.log('login');
  const url = API + 'api/token/';
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({username: username, password: password}),
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return data;
    })
    .catch(error => {
      console.log(error);
    });
};
