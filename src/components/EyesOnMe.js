// Code EyesOnMe Component Here
import React, { Component } from 'react';

// export default class EyesOnMe extends Component {
    
//     handleFocus = () => {
//         console.log('Good!')
//     }

//     handleBlur = () => {
//         console.log('Hey! Eyes on me!')
//     }

//     render() {
//         return (
//             <div>
//                 <button 
//                 onFocus={this.handleFocus}
//                 onBlur={this.handleBlur}>Hey</button>
//             </div>
//         )
//     }
// }

export default class EyesOnMe extends Component {

    handleFocus = (event) => {
        console.log("Good!")
    }

    handleBlur = (event) => {
        console.log("Hey! Eyes on me!")
    }

    render() {
        return(
            <div>
                <button onFocus={this.handleFocus} onBlur={this.handleBlur} >Click ME</button>
            </div>
        )
    }
}