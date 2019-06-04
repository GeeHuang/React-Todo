import React from 'react';
import Nav from './Nav';
import Footer from './Footer'; 
import TodoItem from './TodoItem';
import todosData from '../todosData';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id){
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if(todo.id === id){
                    todo.completed = !todo.completed;
                }
                return todo;
            })
            return {
                todos: updatedTodos
            }
        });
        
    }

    render() {
        const TodoItems = this.state.todos.map(item => <TodoItem key= {item.id} item= {item} handleChange= {this.handleChange} />);
        return (
            <div>
               <Nav /> 
                <div className="todo-list">
                    {TodoItems}
                </div> 
            
               <Footer /> 
            </div>
        )
    }
}
