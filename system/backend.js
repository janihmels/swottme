export default backend = (rubric, call, input) => {
  const url = 'https://swott-me.appspot.com';
  //const url = 'http://10.0.2.2:8080';
  return fetch(`${url}/${rubric}/${call}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(input),
  })
  .then( result => result.json());
}