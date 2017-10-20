import React from 'react'

export default ({ cat }) => {
  return (
    <div>
      <h2>{cat.name}</h2>
      <h3>{cat.title}</h3>
      <p>{cat.job}</p>
    </div>
  )
}
