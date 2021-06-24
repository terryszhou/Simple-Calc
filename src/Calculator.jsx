// FUNCTIONAL VERSION
import { useState } from 'react'

const Calculator = () => {
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [sign, setSign] = useState("+")
    const [sum, setSum] = useState(0)

    const findSum = (e) => {
        e.preventDefault()
        setSum(
            Function (
                'return ' + `${num1} ${sign} ${num2}`
            )()
        )}

    return (
        <body>
        <div class="container-box">
            <div class="container">
                <h1>Math with React!</h1>
                <div class="math-box">
                    <form onSubmit={findSum}>
                        <input type="number"
                            name="num1"
                            placeholder="Enter #"
                            step="any"
                            value={num1}
                            onChange={e => setNum1(e.target.value)}
                        />
                        <select value={sign} onChange={e => setSign(e.target.value)}>
                            <option value="+">+</option>
                            <option value="-">−</option>
                            <option value="*">×</option>
                            <option value="/">÷</option>
                            <option value="**">^</option>
                            <option value="%">mod</option>
                        </select>
                        <input type="number"
                            name="num2"
                            placeholder="Enter #"
                            step="any"
                            value={num2}
                            onChange={e => setNum2(e.target.value)}
                        />
                        <button>=</button>
                    </form>
                    <h3>Math results go here!</h3>
                    <span class="answer">{sum}</span>
                </div>
            </div>
        </div>
        </body>
    )
}
export default Calculator

// CLASS-BASED VERSION
// import React, { Component } from 'react'

// export default class Calculator extends Component {
//     constructor(props) {
//         super()
//         this.state = {
//             num1: 0,
//             num2: 0,
//             sign: "+",
//             sum: 0
//         }
//     }

//     setNum = (e, num) => {
//         this.setState({ [num]: e.target.value})
//     }

//     setSign = (e) => {
//         this.setState({ sign: e.target.value})
//         console.log(this.state.sign)
//     }

//     findSum = (e) => {
//         e.preventDefault()
//         // this.setState({ sum: eval(`${parseFloat(this.state.num1)} ${this.state.sign} ${parseFloat(this.state.num2)}`) })
//         this.setState({ sum: parseFloat((new Function('return (' + `${parseFloat(this.state.num1)} ${this.state.sign} ${parseFloat(this.state.num2)}` + ')')()).toFixed(3))
//         })
//     }

//     render() {
//         return (
//             <body>
//             <div class="container-box">
//                 <div class="container">
//                     <h1>Math with React!</h1>
//                     <div class="math-box">
//                         <form onSubmit={(e) => this.findSum(e)}>
//                             <input type="number"
//                                 name="num1"
//                                 placeholder="Enter #"
//                                 step="any"
//                                 value={this.state.num1}
//                                 onChange={(e) => this.setNum(e, 'num1')}
//                             />
//                             <select value={this.state.sign} onChange={(e) => this.setSign(e)}>
//                                 <option value="+">+</option>
//                                 <option value="-">−</option>
//                                 <option value="*">×</option>
//                                 <option value="/">÷</option>
//                                 <option value="**">^</option>
//                                 <option value="%">mod</option>
//                             </select>
//                             <input type="number"
//                                 name="num2"
//                                 placeholder="Enter #"
//                                 step="any"
//                                 value={this.state.num2}
//                                 onChange={(e) => this.setNum(e, 'num2')}
//                             />
//                             <button>=</button>
//                         </form>
//                         <h3>Math results go here!</h3>
//                         <span class="answer">{this.state.sum}</span>
//                     </div>
//                 </div>
//             </div>
//             </body>
//         )
//     }
// }