import React,{Component} from 'react';
import './css/App.css';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'


// to run this app, type    yarn dev   in the console.  this command will start sass and the react dev environment

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      count:0
    }
  }

  incrementCount = () => {
    const newCount = this.state.count + 1
    this.setState({ count: newCount})
  }

  // header and footer are functional components.  this component and main are class based.
  render(){
    return (
      <div className="App">
        <Header />
        <Main count={this.state.count} incrementCount={this.incrementCount} />
        <Footer />
      </div>
    );
  }
}

export default App;
