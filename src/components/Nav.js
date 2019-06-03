import React from 'react';

export default class Nav extends React.Component {

    constructor() {
        super();
        this.state = {
            name: 'G',
            age: 26
        }
    }

    render() {
        return(
            <div>
                <h1>{this.state.name}</h1>
                <h1>{this.state.age} years old</h1>
            </div> 
            )
    }
};