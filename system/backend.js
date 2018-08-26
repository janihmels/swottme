export default backend = (rubric, call, input) => {
  return fetch(`http://10.0.2.2:8080/${rubric}/${call}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(input),
  })
  .then( result => result.json());
}