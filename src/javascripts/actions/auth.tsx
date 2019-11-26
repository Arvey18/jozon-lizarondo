import { API } from '../constant';

export const LOGIN = (username: string, password: string) => () => {
  console.log('login');
  const url = `${API}/api/token/`;
  console.log(url);
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
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
