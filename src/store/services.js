export function getCats () {
  return fetch('https://api.calweb.xyz/cats?_limit=20')
    .then(res => res.json())
    .catch(err => console.log(err))
}
// export default { getCats }
