import{u as _,o as d,c as u,w as a,a as e,b as o,t as n,f as t,n as f,h as l}from"./app.5208142c.js";import{_ as h}from"./FormSection.4bdbb107.js";import{_ as g,a as v}from"./TextInput.91f27984.js";import{_ as i}from"./InputLabel.2b883a57.js";import{_ as $}from"./PrimaryButton.a426b72a.js";import"./SectionTitle.bd8d1e10.js";import"./_plugin-vue_export-helper.cdc0426e.js";const b=l(" Team Details "),w=l(" Create a new team to collaborate with others on projects. "),T={class:"col-span-6"},V={class:"flex items-center mt-2"},C=["src","alt"],x={class:"ml-4 leading-tight"},y={class:"text-sm text-gray-700"},B={class:"col-span-6 sm:col-span-4"},N=l(" Create "),q={__name:"CreateTeamForm",setup(k){const s=_({name:""}),c=()=>{s.post(route("teams.store"),{errorBag:"createTeam",preserveScroll:!0})};return(r,m)=>(d(),u(h,{onSubmitted:c},{title:a(()=>[b]),description:a(()=>[w]),form:a(()=>[e("div",T,[o(i,{value:"Team Owner"}),e("div",V,[e("img",{class:"object-cover w-12 h-12 rounded-full",src:r.$page.props.user.profile_photo_url,alt:r.$page.props.user.name},null,8,C),e("div",x,[e("div",null,n(r.$page.props.user.name),1),e("div",y,n(r.$page.props.user.email),1)])])]),e("div",B,[o(i,{for:"name",value:"Team Name"}),o(g,{id:"name",modelValue:t(s).name,"onUpdate:modelValue":m[0]||(m[0]=p=>t(s).name=p),type:"text",class:"block w-full mt-1",autofocus:""},null,8,["modelValue"]),o(v,{message:t(s).errors.name,class:"mt-2"},null,8,["message"])])]),actions:a(()=>[o($,{class:f({"opacity-25":t(s).processing}),disabled:t(s).processing},{default:a(()=>[N]),_:1},8,["class","disabled"])]),_:1}))}};export{q as default};
