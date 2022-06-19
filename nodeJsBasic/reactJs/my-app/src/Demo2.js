import React from 'react';
  
class Demo2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '56546'
    };

    this.handleChange = (evt) => {
	    // non généric doee
	    // this.setState({value: evt.target.value});
	    
	 	// generique code
	    const name = evt.target.name;
	    const value =
	    evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
	    console.log('change', name, value);
	    const s = {};
	    s[name] = value;
	    this.setState(s);
	  };
    this.handleSubmit = (buttonId, event) => {
	    alert('Submit by button ' +buttonId +' : value='+ this.state.value);
	  };
  }

  render() {
	// use if condition.
	let divPositiveNumber = (parseInt(this.state.value)>0)?
	  <div>YES {parseInt(this.state.value)}</div> :
	  null;
	
    return (
      <form >
      
		<p>Data from parent, { JSON.stringify(this.props.inputFromParent) } </p>
		
        <label>
          Input :
          <input name='value' value={this.state.value} onChange={this.handleChange} />
        </label>
        <br/>
        <b>Example how to add extra parameter to event.</b><br/>
        The two buttons call the same function with différent button ID (A ou B).
        <input type="button" value="Button A (send)" 
        	onClick={
			  (event) => this.handleSubmit('A', event)
			}
        />
        <input type="button" value="Button B (send)" 
        	onClick={
			  (event) => this.handleSubmit('B', event)
			}
        />
        
        <br/>
		state value : {this.state.value} <br/>
		
		<b>test 'if' condition using variable (is the input a number positif ?):</b><br/>
		{divPositiveNumber}
		<br/>
		<b>test 'if' condition 'inline':</b><br/>
		{(parseInt(this.state.value)>0) &&
	  		<div>YES {parseInt(this.state.value)}</div> 
		}
		{  !(parseInt(this.state.value)>0) &&
	  		<div>Not a positif number</div> 
		}
		<b>test 'for' loop (inputFromParent) :</b><br/>
		{this.props.inputFromParent.data.map( (item, index) => 
	  		<div key={index} ><div>Item {index} {item}</div><br/></div>
		)}
		
		
      </form>
    );
  }
}


export default Demo2;