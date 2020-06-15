//Functional Component
// import React from 'react';

// const App = ({greeting}) => {
//   return (
//     <div>
//       <h1>{greeting}</h1>
//     </div>
//   );
// };

// export default App;

// Class Component
import React, { Component } from 'react'

class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             text: 'How are you today? ',
             placeholder: 'Enter reply here',
             hasLoaded: false,
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(e) {
        this.setState({
            input: e.target.value
        })
    }
    handleClick() {
        this.setState(prevState => ({
            hasLoaded: !prevState.hasLoaded,
        }))
    }
    componentDidMount() {
        this.setState({
            hasLoaded: true,
        })
    }

    render() {
        if (this.state.hasLoaded) {
            return (
              <React.Fragment>
                <h1>Loading...</h1>
                <button onClick={this.handleClick}>Submit</button>
              </React.Fragment>
            );
        } else {
            return (
              <React.Fragment>
                <h1>{this.props.greeting}</h1>
                {this.state.text}
                <input 
                value={this.state.input}
                placeholder={this.state.placeholder} 
                onChange={this.handleChange} 
                />
                <button onClick={this.handleClick}>Submit</button>
              </React.Fragment>
            );
        }
    }
}

export default App
