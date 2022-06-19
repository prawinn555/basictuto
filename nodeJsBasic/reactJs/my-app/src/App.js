import logo from './logo.svg';
import './App.css';
import Demo1 from './Demo1';
import Demo2 from './Demo2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
		<div className="demoBlock" >
			<h1>Demo1 : events & state</h1>
			<Demo1 inputFromParent={ {greeting : 'Whats\'up?' } } />
		</div>
		
		<div className="demoBlock" >
			<h1>Demo2 : input binding, loop, if/else</h1>
			<Demo2 inputFromParent={ {data : ['a', 'b', 'c'] }} />
		</div>
		
    </div>
  );
}

export default App;


/*
Note on syntaxe


====================================
functional style
   - no 'this' in HTML template.
   - use setXXX(value), where XXX is the state attribute.
===================================
import React, { useState } from 'react';
  
function App(props) {
  
  const [counter, setCounter] = useState(0);
  const myFunction = (e) => {
    alert("The value of counter is " + counter)
    setCounter(counter + 1);
  }
  
  return (
    <div>
        
	<p>Hello, {props.name}</p>
  
      <button onClick={myFunction}>Click me!</button>
    </div>
  );
}
  
export default App;
========================================
Class style
   - Must use 'this' in HTML template.
   - use setState({...})
========================================
import React, { useState } from 'react';
  
  
class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
    this.myFunction = this.myFunction.bind(this);
  }
  
  myFunction(e) {
    alert("The value of counter is " + this.state.counter)
    this.setState({ counter: this.state.counter + 1 })
  }
  
  render() {
    return (
      <div >
        <p>Hello From GFG</p>
  
        <button onClick={this.myFunction}>
         Click me!
        </button>
      </div>
    );
  }
}
  
export default App;





 */