import{o as u,d as i}from"./app.ae36ff1f.js";const r=["id","min","max","name","value","placeholder"],s={__name:"InputNumber",props:["modelValue","placeHolder","idName","min","max","name","id"],setup(e){return(t,a)=>{var m,n,d,l;return u(),i("input",{id:(m=e.id)!=null?m:e.idName,min:(n=e.min)!=null?n:0,max:e.max,type:"number",name:(d=e.name)!=null?d:e.idName,value:e.modelValue,placeholder:(l=e.placeHolder)!=null?l:0,onInput:a[0]||(a[0]=o=>t.$emit("update:modelValue",o.target.value)),class:"w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"},null,40,r)}}};export{s as default};
