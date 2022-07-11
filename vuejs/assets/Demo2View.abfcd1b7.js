import{_ as v,C as c}from"./duotone-sea.cb8aed15.js";import{o as r,c as m,a as e,t as o,d as g,v as _,F as p,e as b,b as l,w as h,f as w,g as u}from"./index.7fc1b266.js";const x={data(){return{message:"hello"}},methods:{doubleValue(){this.message+=this.message}}};function V(d,t,a,f,s,n){return r(),m(p,null,[e("p",null,"Message is: "+o(s.message),1),g(e("input",{"onUpdate:modelValue":t[0]||(t[0]=i=>s.message=i),placeholder:"edit me"},null,512),[[_,s.message]]),e("button",{onClick:t[1]||(t[1]=(...i)=>n.doubleValue&&n.doubleValue(...i))},"Double value")],64)}var T=v(x,[["render",V]]);const I={__name:"FormTestComposition",setup(d){const t=b("hello");function a(){t.value+=t.value}return(f,s)=>(r(),m(p,null,[e("p",null,"Message is: "+o(t.value),1),g(e("input",{"onUpdate:modelValue":s[0]||(s[0]=n=>t.value=n),placeholder:"edit me"},null,512),[[_,t.value]]),e("button",{onClick:a},"Double value")],64))}},k=w('<h1>Demo 2 : Form data binding 2 styles Options API et composition API </h1><p> There are two style of programmings in VueJS : <a target="_blank" href="https://vuejs.org/guide/introduction.html"> Options API et composition API.</a> In this tutorial, we will learn <ul><li>How to use the 2 styles of code</li><li>How to bind form data to a component</li><li>How to manage a component&#39;s state. A state contains information that the component hold. In our example, the form input value is the component&#39;s state. </li><li>Basic event handling (@onclick). </li></ul></p><h2>Example 1 : Options API</h2><p>Running code :</p>',4),C={class:"alert alert-info"},D=e("p",null,"The code :",-1),y=e("h2",null,"Example 2 : Composition API",-1),A=e("p",null,"Running code (same as the first example) : ",-1),M={class:"alert alert-info"},H=e("p",null,"The code",-1),P=e("h2",null,"Comparison and discussion",-1),F=e("p",null,[u(" In the two examples, the HTML templates are identical. "),e("ul",null,[e("li",null,"In the first example, the compoent exports an object with 'data' and 'methods' fields, that is used in HTML template. "),e("li",null,[u("In the 2nd example, the keyword <script ... > is necessary. The compoent just defines constant(s) which represent a state. and function(s) to be used in the template. The state constant is created with the 'ref' function, which produces a 'holder' for the value. To access the actual value (to read or to modify the state value), we use the expression such as "),e("i",null,"message.value"),u(" in the example. ")])])],-1),j={__name:"Demo2View",setup(d){return(t,a)=>(r(),m(p,null,[e("div",null,[k,e("div",C,[l(T)]),D,l(c,{language:"html"},{default:h(()=>[e("pre",null,`<script>
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
<\/script>

<template>
  <p>Message is: `+o(t.message)+`</p>
	<input v-model="message" placeholder="edit me" />
  <button @click="doubleValue" >Double value</button>
</template>
    `,1)]),_:1}),y,A,e("div",M,[l(I)]),H,l(c,{language:"html"},{default:h(()=>[e("pre",null,`<script setup lang="ts" >
import { ref } from 'vue'
const message = ref('hello')
function doubleValue() {
  message.value+=message.value;
}
<\/script>"allowJs": true
"allowJs": true
<template>
  <p>Message is: `+o(t.message)+`</p>
	<input v-model="message" placeholder="edit me" />
  <button @click="doubleValue" >Double value</button>
</template>
    `,1)]),_:1})]),P,F],64))}};export{j as default};
