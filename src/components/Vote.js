import React, { Component } from 'react'
import "./vote.css"
export default class Vote extends Component {

    state={
        count:1,
        cnt1:1,
        cnt2:1,
        cnt3:1,
    }
    inc1=()=>{
        let i=this.state.count
        i++
        this.setState({count:i})
    }
    inc2=()=>
    {
        let k=this.state.cnt1
        k++
        this.setState({cnt1:k})
    }
    inc3=()=>
    {
        let j=this.state.cnt2
        j++
        this.setState({cnt2:j})
    }
    inc4=()=>
    {
        let l=this.state.cnt3
        l++
        this.setState({cnt3:l})
    }

    render() {
        return (
            <table border cellPadding="20px" cellSpacing="20px" rules="all">
                <h1 id="h1">vote your language</h1>
                <tr>
                    <td>{this.state.count}</td>
                    <td>PHP</td>
                    <td> <button onClick={this.inc1}>click here</button></td>
                </tr>
                <tr id="h2">
                    <td>{this.state.cnt1}</td>
                    <td>GO</td>
                    <td><button onClick={this.inc2}>click here</button></td>
                </tr>
                <tr id="h2">
                    <td>{this.state.cnt2}</td>
                    <td>JAVA</td>
                    <td><button  onClick={this.inc3}>click here</button></td>
                </tr>
                <tr id="h2">
                    <td>{this.state.cnt3}</td>
                    <td>PYTHON</td>
                    <td><button  onClick={this.inc4}>click here</button></td>
                </tr>
            </table>
        )
    }
}
