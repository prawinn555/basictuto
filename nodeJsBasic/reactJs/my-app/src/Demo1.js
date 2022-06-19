import React, { useState } from 'react';
  
function Demo2(props) {
  
  const [counter, setCounter] = useState(0);
  const myFunction = (e) => {
    // alert("The value of counter is " + counter)
    setCounter(counter + 1);
  }
  console.log('props', props);
  
  return (
    <div>
        
		<p>Hello there, { JSON.stringify(props.inputFromParent) } </p>
  		<p>current counter : {counter}</p>
      <button onClick={myFunction}>Click me!</button>
    </div>
  );
}

export default Demo2;