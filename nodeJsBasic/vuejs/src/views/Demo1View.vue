<script setup >
import HelloWorld from '@/components/HelloWorld.vue';
import CodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
import "vue-code-highlight/themes/duotone-sea.css";

</script>


<template>
  <div>
    <h1>Demo 1 : How to add a subcomponent</h1>
    
    <p>
      This first example shows how to add a subcomponent and passing a parameter.
    </p>
    
    <p>Running code</p>
    <HelloWorld msg="Hello world" />

	<p>The code in the parent component (script and template) : </p>
	
		
    <CodeHighlight language="javascript"><pre>
		import HelloWorld from '@/components/HelloWorld.vue';
    </pre></CodeHighlight>
    
    <CodeHighlight language="html"><pre>
	    &lt;HelloWorld msg=&quot;Hello world&quot;  /&gt;
    </pre></CodeHighlight>

	<p>The code of the HelloWorld component : </p>
	
    <CodeHighlight language="html"><pre>
		&lt;script setup lang=&quot;ts&quot;&gt;
defineProps({
  msg: {
    type: String,
    required: true
  }
})
		&lt;/script&gt;
		
		&lt;template&gt;
		  &lt;div &gt;
		    &lt;p&gt;
		      HelloWorld component is receiving this message :
		    &lt;/p&gt;
		    &lt;div class=&quot;alert alert-info&quot;&gt;
		      {{msg}}
		    &lt;/div&gt;
		  &lt;/div&gt;
		&lt;/template&gt;
    </pre></CodeHighlight>
    

    
  </div>
  
  
  
</template>

<style>

</style>
