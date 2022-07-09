import React from 'react';
  
class Demo2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'David'
    };

    this.genericStateCopy = (evt) => {
	 	// generique code
	    const name = evt.target.name;
	    const value =
	    evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
	    console.log('change', name, value);
	    const s = {};
	    s[name] = value;
	    this.setState(s);
	  };
      this.handleAction = (buttonId, event) => {
	    alert('Action from the button ' +buttonId);
	  };
	  
	this.staff = ['David', 'Mark', 'Sophie'];
	
	this.isStaff = (enteredName) => {
		return this.staff.indexOf(enteredName)>=0;
	}
   }
    

  render() {

	
    return (
	<>
	
	<p>Let's learn to use forms.</p>
	
	<p>This component is written in the class-component style (not fonctional-component style)</p>
	
        <h1>Features</h1>
        
        <ul>
          <li>Creating and using a form</li>
          <li>Using 'if' conditions and loop (for)</li>
          <li>Creating action buttons and actions with arrow operators : Showing how to pass extra parameters on click</li>
        </ul>
        

	  <h1>
	    Creating and using a form
	  </h1>
        
        
        <p>The event 'onChange' on the input will call the function genericStateCopy,
			which will copy the input value to the state.
			The state attribute name is the same as the input name.
         
            Using this approach, we can reuse the same function to manny inputs.
        </p>
	
      <form >
		  <div class="form-group">
		    <label for="firstName">First Name</label>
			<input class="form-control"
				   id="firstName"
			       name='firstName' value={this.state.firstName} onChange={this.genericStateCopy} />
		  </div>
     </form>   
        
        <div class="alert alert-primary my-2" >
		State value : { JSON.stringify(this.state) } </div>
        
        
        <h1>Using 'if' conditions </h1>
        
        <p>
          In this example, we will test the first name entered is in the list of the staffs {JSON.stringify(this.staff) }.
          The result YES ou NO will be shown below.
        </p>
        
		  <div class="alert alert-primary" >
			{ this.isStaff(this.state.firstName)? 
		  		<div>YES</div> : <div>NO</div>
			}
		  </div>
		
		
        <h1>Using 'for' (loop) </h1>
        
        <p>In this example, we will show how to loop over a list received from the parent component.
        The looping is simply a map function of Array.
        React framework requires that each generated element from the loop has a unique ID, with the attribute 'key'.
        </p>
        
        <p>This is the data for making a loop</p>
		<div class="alert alert-primary" > { JSON.stringify(this.props.inputFromParent) } </div>
		
		<p>
		  <b>Example code</b>
		</p>
		<pre>{`
<ul>
{this.props.inputFromParent.data.map( (item, index) => 
	<li key={item.id} >Item index {index} {JSON.stringify(item) }</li>
)}
</ul>`}
		</pre>
		
		<p><b>Result</b></p>
		
		<ul>
		{this.props.inputFromParent.data.map( (item, index) => 
	  		<li key={item.id} >Item index {index} {JSON.stringify(item) }</li>
		)}
		</ul>
		
		
        <h1>Example how to add extra parameter to event.</h1>
        
        
        <p>
        The two buttons call the same function with différent button ID (A ou B).
        In this case, we can use the arrow operator like this :
        </p>
        
        <pre>{
          `onClick={(event) => this.handleAction('A', event)}`
		}	
        </pre>
        <input type="button" 
        	class="btn btn-primary me-2"
        	value="Button A (send)" 
        	onClick={
			  (event) => this.handleAction('A', event)
			}
        />
        <input type="button" 
           	class="btn btn-primary"
        	value="Button B (send)" 
        	onClick={
			  (event) => this.handleAction('B', event)
			}
        />
        

		
		
		<p class="my-2">
      
        		  <a 	href="https://github.com/prawinn555/basictuto/blob/main/nodeJsBasic/reactJs/my-app/src/Demo2.js"
				        target="_blank"
						class="link-info m-1">🌐 Code of this demo</a>
						
		</p>
     </>
    );
  }
}


export default Demo2;