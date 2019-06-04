import React from 'react';
//import Nav from './Nav';

  /*
    Challenge:

        Given a stateless functional component:
        1. Follow the steps necessary to add state to it,
            // class-based component
            // constructor method
        2. Have state keep track of whether the user is logged in or not
            // isLoggedIn: Boolean (true or false)
        3. Add a button that logs the user in/out
            // event listener (onClick)
            a. extra challenge - make the button display "log in" if they're not logged in and "log out" if they are
                // Conditional Rendering
        4. Display text that says "Logged in" if the user is logged in, or "Logged out" if they're not.
            // Conditional Rendering
    */

export default class Footer extends React.Component {
    constructor() {
        super();
        this.state = {isLoggedIn: false};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(){
        this.setState(prevState => {
            return {isLoggedIn : !prevState.isLoggedIn}
        });
    }

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({
    //             isLoggedIn: false
    //         });
    //     }, (1500));
    // }

    render(){
        const style = { 
            transform: "translateX(100px)",
        }
        let buttonText = this.state.isLoggedIn ? "in" : "out";
        let text = this.state.isLoggedIn ? "logout" : "login";
        return(
            // <div>
            //     <Nav is isLoggedIn = {this.state.isLoggedIn} /> 
            // </div>
            <div>
                <p>{text}</p>
                <button style={this.state.isLoggedIn ? style:null} type="submit" onClick = {this.handleChange}>G is Logged {buttonText}</button>
            </div>
            
            )
    }
};