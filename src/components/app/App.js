import React, { Component } from 'react'
import './App.css'
import ItemList from '../item-list/item-list'
import AddItem from '../add-item/add-item'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        { id: 0, item: 'Old AM radio.', reason: 'Hear crackles in the summer.' },
        { id: 1, item: 'Shovel', reason: 'Because I hate telephone wires.' },
        { id: 2, item: '2m/70cm dual band transceiver', reason: 'Because MORE RADIOS!'}
      ]
    }
  }

  onDeleteItem = ({ id }) => {
    const newItems = this.state.items.filter((item) => item.id !== id)
    this.setState({
      ...this.state,
      items: newItems
    })
  }

  onAddItem = ({ item, reason }) => {
    const maxId = this.state.items
      .reduce((acc, el) => Math.max(acc, el.id), 0)

    const nextMaxId = maxId + 1
    console.log(`Item: ${item} Reason: ${reason}, nextMaxId: ${nextMaxId}`)
  }

  render() {
    return (
      <div className="App">
        <AddItem onAddItem={this.onAddItem} />
        <ItemList items={this.state.items} onDeleteItem={this.onDeleteItem} />
      </div>
    )
  }
}

export default App
