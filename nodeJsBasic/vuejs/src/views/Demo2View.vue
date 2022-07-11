<script setup>
import CodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
import "vue-code-highlight/themes/duotone-sea.css";
import FormTest from '@/components/FormTest.vue';
import FormTestComposition from '@/components/FormTestComposition.vue';
</script>


<template>
  <div>
    <h1>Demo 2 : Form data binding 2 styles Options API et composition API </h1>
    
    <p>
      There are two style of programmings in VueJS : 
	  <a target="_blank" href="https://vuejs.org/guide/introduction.html" >
	  		Options API et composition API.</a>
        In this tutorial, we will learn
		
		<ul>
			<li>How to use the 2 styles of code</li>
			<li>How to bind form data to a component</li>
			<li>How to manage a component's state. 
				A state contains information that the component hold.
				In our example, the form input value is the component's state.
			</li>
			<li>Basic event handling (@onclick).
			</li>

		</ul>
    </p>
    
	<h2>Example 1 : Options API</h2>
    <p>Running code :</p>

	<div class="alert alert-info" >
	<FormTest></FormTest>
	</div>

	<p>The code :</p>

    <CodeHighlight language="html"><pre>
&lt;script&gt;
export default {
  data() {
    return {
      message: 'hello'
    }
  },
  methods: {
    doubleValue() {
      this.message+=this.message
    }
  },
}
&lt;/script&gt;

&lt;template&gt;
  &lt;p&gt;Message is: {{ message }}&lt;/p&gt;
	&lt;input v-model=&quot;message&quot; placeholder=&quot;edit me&quot; /&gt;
  &lt;button @click=&quot;doubleValue&quot; &gt;Double value&lt;/button&gt;
&lt;/template&gt;
    </pre></CodeHighlight>



		

    
	<h2>Example 2 : Composition API</h2>
    <p>Running code (same as the first example) : </p>

	<div class="alert alert-info" >
	<FormTestComposition></FormTestComposition>
	</div>

	<p>The code</p>
    
    <CodeHighlight language="html"><pre>
&lt;script setup lang=&quot;ts&quot; &gt;
import { ref } from 'vue'
const message = ref('hello')
function doubleValue() {
  message.value+=message.value;
}
&lt;/script&gt;&quot;allowJs&quot;: true
&quot;allowJs&quot;: true
&lt;template&gt;
  &lt;p&gt;Message is: {{ message }}&lt;/p&gt;
	&lt;input v-model=&quot;message&quot; placeholder=&quot;edit me&quot; /&gt;
  &lt;button @click=&quot;doubleValue&quot; &gt;Double value&lt;/button&gt;
&lt;/template&gt;
    </pre></CodeHighlight>
    
  </div>
  

  <h2>Comparison and discussion</h2>
  
  <p>
	In the two examples, the HTML templates are identical.

	<ul>
		<li>In the first example, the compoent exports an object with 'data' and 'methods' fields, 
			that is used in HTML template. 
		</li>
		<li>In the 2nd example, the keyword &lt;script ... &gt; is necessary.
			The compoent just defines constant(s) which represent a state.
			and function(s) to be used in the template.
			The state constant is created with the 'ref' function, which produces a 'holder' for the value.
			To access the actual value (to read or to modify the state value), 
			we use the expression such as <i>message.value</i>  in the example.
		</li>
	</ul>
  </p>
  
</template>

<style>

</style>
