export const API_ROOT = 'http://localhost:3000'

export const getHeaders = () => {
  if (localStorage.token) {
    return ({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.token}`
    })
  } else {
    return ({
      'Content-Type': 'application/json',
      Accept: 'application/json'
    })
  }
}

export const fetchBackend = (model, method, id,  body, updateState, setError) => {
  fetch(API_ROOT + '/' + model + '/' + id, {
    method: method,
    headers: getHeaders(),
    body: body ? JSON.stringify(body) : null
  })
    .then(resp => resp.json())
    .then(json => updateState(json))
    .catch(e => setError(e.message))
}

export const throwError = e => {throw Error(e)}

