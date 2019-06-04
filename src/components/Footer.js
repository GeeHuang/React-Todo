import React from 'react';
import Nav from './Nav';


    /**
     * Challenge: Wire up the partially-finished travel form so that it works!
     * Remember to use the concept of controlled forms
     * https://reactjs.org/docs/forms.html
     * 
     * All information should be populating the text below the form in real-time
     * as you're filling it out
     * 
     * This exercise is adapted from the V School curriculum on vanilla JS forms:
     * https://coursework.vschool.io/travel-form/
     * 
     * All of our challenges and learning resources are open for the public
     * to play around with and learn from at https://coursework.vschool.io
     */


export default class Footer extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            isVegan: false,
            isKosher: false,
            isLactoseFree: false,
            gender: "",
            location: "nyc"
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? 
            this.setState({
                [name]: checked
            })
        :
        this.setState({
            [name]: value
        }) 
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoggedIn: false
            });
        }, (1500));
    }

    render(){
        return(
            <div>
                <Nav is isLoggedIn = {this.state.isLoggedIn} /> 
                <br/>
                
                <main>
                    <form >
                        <input type="text" 
                                value={this.state.firstName} 
                                name="firstName" 
                                placeholder="First Name" 
                                onChange={this.handleChange}/>
                        <br />
                        <input type="text" 
                                value={this.state.lastName} 
                                name="lastName" 
                                placeholder="Last Name" 
                                onChange={this.handleChange}/>
                        <br />
                        <input type="text" 
                                value={this.state.age} 
                                name="age" 
                                placeholder="Age" 
                                onChange={this.handleChange}/>
                        <br />
                        
                        {/* Create radio buttons for gender here */}
                        <label><input type="radio" name="gender" value="male" checked={this.state.gender === "male"} onChange={this.handleChange}/>Male</label>
                        <label><input type="radio" name="gender" value="female" checked={this.state.gender === "female"} onChange={this.handleChange}/>Female</label>
                        <br />
                        
                        {/* Create select box for location here */}
                        <label>Select your location:</label>
                        <select value= {this.state.location} onChange={this.handleChange} name="location">
                        <option value="nyc">NYC</option>
                        <option value="toronto">Toronto</option>
                        <option value="texas">Texas</option>
                        </select>
                        <br />
                        
                        {/* Create check boxes for dietary restrictions here */}
                        <label>
                        <input 
                            type="checkbox"
                            name="isVegan"
                            onChange={this.handleChange}
                            checked={this.state.isVegan}
                        /> Vegan?
                    </label>
                    <br />
                    
                    <label>
                        <input 
                            type="checkbox"
                            name="isKosher"
                            onChange={this.handleChange}
                            checked={this.state.isKosher}
                        /> Kosher?
                    </label>
                    <br />
                    
                    <label>
                        <input 
                            type="checkbox"
                            name="isLactoseFree"
                            onChange={this.handleChange}
                            checked={this.state.isLactoseFree}
                        /> Lactose Free?
                    </label>
                    <br />
                        
                        <button>Submit</button>
                    </form>
                    <hr />
                    <h2>Entered information:</h2>
                    <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                    <p>Your age: {this.state.age}</p>
                    <p>Your gender: {this.state.gender}</p>
                    <p>Your destination: {this.state.location}</p>
                    <p>
                        Your dietary restrictions: 
                    </p>
                    <p>Vegan: {this.state.isVegan ? "Yes" : "No"}</p>
                    <p>Kosher: {this.state.isKosher ? "Yes" : "No"}</p>
                    <p>Lactose Free: {this.state.isLactoseFree ? "Yes" : "No"}</p>
                </main>
        
            </div>
            
            )
    }
};