import React from 'react'

export default ({ cat, actions }) => {
  return (
    <div>
      <h2>{cat.name}</h2>
      <h3>{cat.title}</h3>
      <p>{cat.job}</p>
      <button onClick={actions.deleteACat(cat.id)}> Delete</button>
    </div>
  )
}
