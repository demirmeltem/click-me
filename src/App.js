import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    constructor(){
        super();

        this.state = {
           black: true
        }
    }

    changeColor(){
       this.setState({black: !this.state.black})
    }

    render(){
        let btn_class = this.state.black ? "blackButton" : "whiteButton";

        return (
             <button className={btn_class} onClick={this.changeColor.bind(this)}> 
                <div onClick={this.props.onClick}>Click me! This div has been clicked {this.props.clicks} times. </div>               
             </button>
        )
    }
}

export default App;
