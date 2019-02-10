import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';

import Header from '../src/components/Header';
import SearchForm from '../src/components/SearchForm';
import ToDoList from '../src/components/ToDoListBlock';
import AddForm from '../src/components/AddForm';

const MainWrapper = styled.div`
  width: 60%;
  margin: 0 auto;
`

class App extends Component {

  maxId = 100

  state = {
    TasksData: [
      this.createTodoItem('Add your task')
    ],
    filter: 'all',
    term: ''
  }

  createTodoItem (label) {
    return {
      text: label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }
  deleteItem = (id) => {
    this.setState(( {TasksData} ) => {
      const idx = TasksData.findIndex((el) => el.id === id)
      const newArray = [
        ...TasksData.slice(0, idx),
        ...TasksData.slice(idx + 1)
      ]

      return {
        TasksData: newArray
      }
    })
  }
  addItem = (addText) => {
    const newItem = this.createTodoItem(addText)
    this.setState(( {TasksData} ) => {
      const newArr = [
        ...TasksData,
        newItem
      ]
      return {
        TasksData: newArr
      }
    })
  }
  toggleProperty (arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id)
    const oldItem = arr[idx]
    const newItem = {...oldItem, [propName]: !oldItem[propName]}

    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)
    ]
  }
  onToggleImportant = (id) => {
    this.setState(( {TasksData} ) => {
      return {
        TasksData: this.toggleProperty(TasksData, id, 'important')
      }
    })
  }
  onToggleDone = (id) => {
    this.setState(( {TasksData} ) => {
      return {
        TasksData: this.toggleProperty(TasksData, id, 'done')
      }
    })
  }
  onSearchChange = (term) => {
    this.setState({term})
  }
  search (items, term) {
    if (term.length === 0) {
      return items
    } else {
      return items.filter((item) => item.text.toLowerCase().indexOf(term.toLowerCase()) > -1)
    }
  }
  filter (items, filter) {
    switch(filter) {
      case 'all': 
        return items;
      case 'active': 
        return items.filter((item) => !item.done);
      case 'done': 
        return items.filter((item) => item.done);
      default: 
        return items;
    }
  }
  onFilterChange = (filter) => {
    this.setState({filter})
  }
  render() {

    const doneCount = this.state.TasksData.filter((el) => el.done).length
    const taskCount = this.state.TasksData.length - doneCount
    const visibleItems = this.filter(this.search(this.state.TasksData, this.state.term), this.state.filter)

    return (
      <MainWrapper>
        <Header todo={taskCount} done={doneCount} />
        <SearchForm 
          filter={this.state.filter} 
          onFilterChange={this.onFilterChange} 
          onSearchChange={this.onSearchChange} 
        />
        <ToDoList 
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
          onDeleted={this.deleteItem}
          todos={visibleItems}
        />
        <AddForm onAdded={this.addItem} />
      </MainWrapper>
    );
  }
}

export default App;