import{v as i,x as l,o,d as u,a as c,t as d,r as m,m as p}from"./app.5ef000a2.js";const f={class:"text-sm text-red-600"},v={__name:"InputError",props:{message:String},setup(t){return(s,e)=>i((o(),u("div",null,[c("p",f,d(t.message),1)],512)),[[l,t.message]])}},g=["value"],h={__name:"TextInput",props:{modelValue:String},emits:["update:modelValue"],setup(t,{expose:s}){const e=m(null);return p(()=>{e.value.hasAttribute("autofocus")&&e.value.focus()}),s({focus:()=>e.value.focus()}),(r,a)=>(o(),u("input",{ref_key:"input",ref:e,class:"border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",value:t.modelValue,onInput:a[0]||(a[0]=n=>r.$emit("update:modelValue",n.target.value))},null,40,g))}};export{h as _,v as a};
