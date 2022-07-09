import React, { useState } from 'react';
  

import logo from './logo.svg';
import './App.css';
import Demo1 from './Demo1';
import Demo2 from './Demo2';
import Home from './Home';

function App() {
	
   const menus = [ 'Home', 'Demo 1', 'Demo 2'];
   const [menu, setMenu] = useState(menus[0]);

   const getMenuClass = (m) => (m===menu)?  'nav-link active' : 'nav-link';

   const goMenu = (m) => setMenu(m);

   
  return (
    <div id="rootContent" className="App m-2">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      
      	<div className="bd-example" >
			<nav className="nav nav-pills nav-fill">
			 { menus.map( (m) => 
				  <a  key={m} className={getMenuClass(m)} 
				  	  onClick={ (ev)=>goMenu(m) } >{m}</a>
			  )}
			  
			</nav>
		</div>
		
	    {menu==='Home' && 
	    <div class="my-1" >
		   <Home />
		</div>}
      
		
	    {menu==='Demo 1' && 
	    <div class="my-1" >
			<Demo1 inputFromParent={ {greeting : 'Whats\'up?' } } />
		</div>}
		
		
	    {menu==='Demo 2' && 
	    <div class="my-1" >
			<Demo2 inputFromParent={ 
				{data : [ {id:1, value:'a'}, {id:2, value:'b'}, {id:3, value:'c'}] }
			} />
		</div>}
		
		

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