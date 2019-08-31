
import React, { Component } from 'react';
import './MainMenu.css';

class MainMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {sliderValue: 55};
      }

    sliderAction() {
        var slider = document.getElementById("myRange");
        var output = document.getElementById("demo");
        output.innerHTML = slider.value;

        slider.oninput = function() {
            slider.innerHTML = this.value;
        }
    }
  
    render() {
    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <a href="#news">Generate New Array</a>
                </div>
                <div className="columns">
                    <a href="#news">Change Array Size and Sorting Speed</a>
                    <input type="range" min="1" max="100" value={this.state.sliderValue} class="slider" id="myRange" onChange={this.sliderAction} />
                    <p>Value: <span id="demo">{ this.state.sliderValue }</span></p>
                </div>
                <div id="sort-options">
                    <a class="active" href="#home">Merge Sort</a>
                    <a href="#news">Bubble Sort</a>
                    <a href="#contact">Quick Sort</a>
                    <a href="#about">Heap Sort</a>
                </div>
            </header>
        </div>
    );
  }
}

export default MainMenu;

