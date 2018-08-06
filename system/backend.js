export default backend = (rubric, call, input) => {
  return fetch(`http://localhost:8080/${rubric}/${call}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(input),
  })
  .then( result => result.json());
}