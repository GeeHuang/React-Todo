import React from 'react';
import Nav from './Nav';
import MainContent from './MainContent';
import Footer from './Footer'; 

export default class App extends React.Component {
    render() {
        return (
            <div>
               <Nav /> 
               <MainContent /> 
               <Footer /> 
            </div>
        )
    }
}
