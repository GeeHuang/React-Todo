import React from 'react';

export default class Footer extends React.Component {
    constructor() {
        super();
        this.state = {isLoggedIn: true};
    }

    render(){
        const log = this.state.isLoggedIn ? 'in' : 'out';
        
        return(
            <div>
                 <h1>You're currently logged {log}</h1> 
            </div>
            )
    }
};