import React, { Component } from 'react'
import Item from './Item'
export default class List extends Component {
  componentDidMount = () => {
    this.props.actions.fetchCats()
  }
  render = () => {
    const { cats } = this.props
    console.log('props', this.props);
    return (
      <div>
      {cats && cats.length
        ? cats.map(item => <Item key={item.id} cat={item} />)
        : null
      }
      </div>
    )
  }
}
