// constants

const constants = [
  'ADD_TODO',
  'DELETE_TODO',
  'GET_CATS_IF_NOT_FETCHED',
  'RECEIVE_CATS'
].reduce(
  function (acc, curr) {
    acc[curr] = curr
    return acc
  },
  {}
)
// wtf, not sure why this doesnt work
// export default constants
module.exports = constants
// {
//   ADD_TODO: 'ADD_TODO',
//   DELETE_TODO: 'DELETE_TODO'
// }
