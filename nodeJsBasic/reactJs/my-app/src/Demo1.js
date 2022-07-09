import React, { useState } from 'react';
  
function Demo2(props) {
  
  const [counter, setCounter] = useState(0);
  const handleClick = (e) => {
    // alert("The value of counter is " + counter)
    setCounter(counter + 1);
  }
  console.log('props', props);
  
  return (
    <div>
    	<p>Let's learn to write a basic component.</p>
        <h1>Features</h1>
        
        <ul>
          <li>Data binding (display data on pages)</li>
          <li>Receiving input from the parent component</li>
          <li>Event management (on click)</li>
          <li>Using states</li>
        </ul>
        
        <h1>Receiving input from the parent component</h1>
		<p>Hello there, </p>
		
		<div  class="alert alert-primary">
			{ JSON.stringify(props.inputFromParent) } 
		</div>
		
		
		<p>(this is the input from the parent component App.js) </p>
		
		<h1>Using events and states</h1>
		 
		<p>This component has a 'counter' state, initially 0. 
		Each time, you click on the button, the counter will increase by 1.
		The current counter value (state) is updated automatically.
		</p>  
		
		    
  		<p>Current counter value : {counter}</p>
        
        <button onClick={handleClick}
           class="btn btn-primary"
        >Click me!</button>
      
      <div class="my-2"></div>
      
      
        		  <a 	href="https://github.com/prawinn555/basictuto/blob/main/nodeJsBasic/reactJs/my-app/src/Demo1.js"
				        target="_blank"
						class="link-info m-1">🌐 Code of this demo</a>
						
    </div>
  );
}

export default Demo2;