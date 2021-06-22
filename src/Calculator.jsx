import React, { Component } from 'react'

export default class Calculator extends Component {
    constructor(props) {
        super()
        this.state = {
            num1: 0,
            num2: 0,
            sign: "+",
            sum: 0
        }
    }


    setNum = (e, num) => {
        this.setState({ [num]: e.target.value})
    }

    setSign = (e) => {
        this.setState({ sign: e.target.value})
        console.log(this.state.sign)
    }

    findSum = (e) => {
        this.setState({ sum: eval(`${parseFloat(this.state.num1)} ${this.state.sign} ${parseFloat(this.state.num2)}`) })
    }

    render() {
        return (
            <div class="container">
                <h1>Add with React!</h1>
                <div class="add">
                    <input type="number"
                        name="num1"
                        placeholder="Enter your first number"
                        value={this.state.num1}
                        onChange={(e) => this.setNum(e, 'num1')}
                    />
                    {/* <span>+</span> */}
                    <select value={this.state.sign} onChange={(e) => this.setSign(e)}>
                        <option value="+">+</option>
                        <option value="-">−</option>
                        <option value="*">×</option>
                        <option value="/">÷</option>
                    </select>

                    <input type="number"
                        name="num2"
                        placeholder="Enter your second number"
                        value={this.state.num2}
                        onChange={(e) => this.setNum(e, 'num2')}
                    />
                    <button onClick={(e) => this.findSum(e)}>=</button>
                    <h3>Addition results go here!</h3>
                    <span class="answer">{this.state.sum}</span>
                </div>
            </div>
        )
    }
}