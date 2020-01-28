import React, { Component } from 'react'

class Main extends Component {

  constructor(props){
    super(props)
    this.state = {
      inputValue:'',
    }
  }

  colorChange = (event) => {
    this.setState({
      inputValue:event.target.value
    })
  }

  // the first input modifies the state in app.js
  // the second input modifies this components state.
  render() {
    return (
      <div className='main'  style={{backgroundColor:this.state.inputValue}}>
        <div>I'm the main component</div>
        <div>
          <input type="button" value={`I've been clicked ${this.props.count} times`} onClick={()=>this.props.incrementCount()}/>
        </div>
        <div>
          <input type="text" value={this.state.inputValue} onChange={(event)=>this.colorChange(event)}/>
        </div>
      </div>
    )
  }
}

export default Main
