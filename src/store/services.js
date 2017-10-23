const API_URL = 'https://api.calweb.xyz/cats'

export function getCats () {
  return fetch(`${API_URL}?_limit=20`)
    .then(res => res.json())
    .catch(err => console.log(err))
}

export function deleteCat (catId) {
  return fetch(`${API_URL}/${catId}`, { method: 'DELETE' })
    .then(res => res.json())
    .catch(err => console.log(err))
}
// export default { getCats }
