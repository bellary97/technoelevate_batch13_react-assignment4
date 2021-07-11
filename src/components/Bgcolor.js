import React, { Component } from 'react'
import "./bg.css"
export default class Bgcolor extends Component {
    mefunction=()=>{
        document.body.style.backgroundColor=document.getElementById("background").value;
    }
    render() {
        return (
            <div>
                <select id="background" onChange={this.mefunction}>
                    <option value="" selected disabled hidden>CHOOSE COLOR</option>
                    <option value="blue">BLUE</option>
                    <option value="green">GREEN</option>
                    <option value="orange">ORANGE</option>
                    <option value="red">RED</option>
                </select>
            </div>
        )
    }
}