import React from 'react';
import List from "./List";
import ItemForm from "./ItemForm";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      groceries: [
        { id: 1, item: "Banana", complete: true, },
        { id: 2, item: "Orange", complete: false, },
        { id: 3, item: "Cherries", complete: false, },
        // new item...
      ]
    };

    this.addItem = this.addItem.bind(this);
  }

  getUniqueId = () => {
    //NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  addItem(name) {
    const {groceries} = { name, id: this.getUniqueId(), complete: false, };
    this.setState({ groceries: [groceries, ...this.state.groceries], });
  };

  handleClick = (id) => {
    this.setState({
      groceries: this.state.groceries.map( grocery => {
        if (grocery.id === id) {
          return {
            ...grocery, 
            complete: !grocery.complete,
          }
        }
        return grocery;
      })
    })
  }

  render() {
    return (
      <div>
        <ItemForm addItem={this.addItem} />
        <List name="Grocery List" items={this.state.groceries} itemClick={this.handleClick} />
      </div>
    )
  }
};

export default App;