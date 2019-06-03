import React from 'react';
import TodoItem from './TodoItem';
import todosData from '../todosData';

export default class MainContent extends React.Component {
    constructor() {
        super();
        this.state = {
            todos : todosData
        }
    }

    handleChange(id) {
        console.log(id, 'Change');
    }

    render(){
        const todoItems = this.state.todos.map(item =>  <TodoItem key = {item.id} item = {item} handleChange = {this.handleChange}/>);

        return(
            <div className="todo-list">
                {todoItems}
            </div>
            )
    }
};  