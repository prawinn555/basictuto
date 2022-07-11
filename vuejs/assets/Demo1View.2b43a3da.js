import{o as a,c as r,a as t,t as i,b as e,w as n}from"./index.7fc1b266.js";import{C as o}from"./duotone-sea.cb8aed15.js";const p=t("p",null," HelloWorld component is receiving this message : ",-1),c={class:"alert alert-info"},m={__name:"HelloWorld",props:{msg:{type:String,required:!0}},setup(l){return(s,d)=>(a(),r("div",null,[p,t("div",c,i(l.msg),1)]))}},_=t("h1",null,"Demo 1 : How to add a subcomponent",-1),u=t("p",null," This first example shows how to add a subcomponent and passing a parameter. ",-1),h=t("p",null,"Running code",-1),g=t("p",null,"The code in the parent component (script and template) : ",-1),f=t("pre",null,`		import HelloWorld from '@/components/HelloWorld.vue';
    `,-1),v=t("pre",null,`	    <HelloWorld msg="Hello world"  />
    `,-1),H=t("p",null,"The code of the HelloWorld component : ",-1),x={__name:"Demo1View",setup(l){return(s,d)=>(a(),r("div",null,[_,u,h,e(m,{msg:"Hello world"}),g,e(o,{language:"javascript"},{default:n(()=>[f]),_:1}),e(o,{language:"html"},{default:n(()=>[v]),_:1}),H,e(o,{language:"html"},{default:n(()=>[t("pre",null,`		<script setup lang="ts">
defineProps({
  msg: {
    type: String,
    required: true
  }
})
		<\/script>
		
		<template>
		  <div >
		    <p>
		      HelloWorld component is receiving this message :
		    </p>
		    <div class="alert alert-info">
		      `+i(s.msg)+`
		    </div>
		  </div>
		</template>
    `,1)]),_:1})]))}};export{x as default};
