import React, { Component } from 'react'
import Item from './Item'
export default class List extends Component {
  componentWillMount(nextProps) {
    console.log('NEXTPROPS', nextProps);
    this.props.actions.fetchCats()
  }
  render = () => {
    const { cats, isPending } = this.props
    console.log('props', this.props);
    return (
      <div>
      {!isPending
        ? cats.map(item => <Item key={item.id} actions={this.props.actions} cat={item} />)
        : <h1>no cats, OKAY!!!??</h1>
      }
      </div>
    )
  }
}
