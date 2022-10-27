<<<<<<<< HEAD:public/build/assets/LogoutOtherBrowserSessionsForm.ebff22e0.js
import{r as p,u as v,o as n,c as k,w as o,d as a,F as x,g as b,e as B,a as s,b as l,f as i,G as S,n as C,h as r,t as c}from"./app.e9d8bd02.js";import{_ as L}from"./ActionMessage.5aa91a0e.js";import{_ as M}from"./Modal.d892bca6.js";import{_ as O}from"./DialogModal.6621b7f9.js";import{_ as V,a as $}from"./TextInput.5d9b285c.js";import{_ as w}from"./PrimaryButton.c31f5045.js";import{_ as F}from"./SecondaryButton.75dbb22c.js";import"./SectionTitle.51a2a6aa.js";import"./_plugin-vue_export-helper.cdc0426e.js";const I=r(" Browser Sessions "),N=r(" Manage and log out your active sessions on other browsers and devices. "),z=s("div",{class:"max-w-xl text-sm text-gray-600"}," If necessary, you may log out of all of your other browser sessions across all of your devices. Some of your recent sessions are listed below; however, this list may not be exhaustive. If you feel your account has been compromised, you should also update your password. ",-1),K={key:0,class:"mt-5 space-y-6"},T={key:0,fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor",class:"w-8 h-8 text-gray-500"},U=s("path",{d:"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"},null,-1),j=[U],D={key:1,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",class:"w-8 h-8 text-gray-500"},E=s("path",{d:"M0 0h24v24H0z",stroke:"none"},null,-1),H=s("rect",{x:"7",y:"4",width:"10",height:"16",rx:"1"},null,-1),P=s("path",{d:"M11 5h2M12 17v.01"},null,-1),A=[E,H,P],G={class:"ml-3"},q={class:"text-sm text-gray-600"},J={class:"text-xs text-gray-500"},Q={key:0,class:"text-green-500 font-semibold"},R={key:1},W={class:"flex items-center mt-5"},X=r(" Log Out Other Browser Sessions "),Y=r(" Done. "),Z=r(" Log Out Other Browser Sessions "),ss=r(" Please enter your password to confirm you would like to log out of your other browser sessions across all of your devices. "),es={class:"mt-4"},os=r(" Cancel "),ts=r(" Log Out Other Browser Sessions "),hs={__name:"LogoutOtherBrowserSessionsForm",props:{sessions:Array},setup(m){const d=p(!1),_=p(null),t=v({password:""}),y=()=>{d.value=!0,setTimeout(()=>_.value.focus(),250)},h=()=>{t.delete(route("other-browser-sessions.destroy"),{preserveScroll:!0,onSuccess:()=>u(),onError:()=>_.value.focus(),onFinish:()=>t.reset()})},u=()=>{d.value=!1,t.reset()};return(rs,f)=>(n(),k(M,null,{title:o(()=>[I]),description:o(()=>[N]),content:o(()=>[z,m.sessions.length>0?(n(),a("div",K,[(n(!0),a(x,null,b(m.sessions,(e,g)=>(n(),a("div",{key:g,class:"flex items-center"},[s("div",null,[e.agent.is_desktop?(n(),a("svg",T,j)):(n(),a("svg",D,A))]),s("div",G,[s("div",q,c(e.agent.platform?e.agent.platform:"Unknown")+" - "+c(e.agent.browser?e.agent.browser:"Unknown"),1),s("div",null,[s("div",J,[r(c(e.ip_address)+", ",1),e.is_current_device?(n(),a("span",Q,"This device")):(n(),a("span",R,"Last active "+c(e.last_active),1))])])])]))),128))])):B("",!0),s("div",W,[l(w,{onClick:y},{default:o(()=>[X]),_:1}),l(L,{on:i(t).recentlySuccessful,class:"ml-3"},{default:o(()=>[Y]),_:1},8,["on"])]),l(O,{show:d.value,onClose:u},{title:o(()=>[Z]),content:o(()=>[ss,s("div",es,[l(V,{ref_key:"passwordInput",ref:_,modelValue:i(t).password,"onUpdate:modelValue":f[0]||(f[0]=e=>i(t).password=e),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",onKeyup:S(h,["enter"])},null,8,["modelValue","onKeyup"]),l($,{message:i(t).errors.password,class:"mt-2"},null,8,["message"])])]),footer:o(()=>[l(F,{onClick:u},{default:o(()=>[os]),_:1}),l(w,{class:C(["ml-3",{"opacity-25":i(t).processing}]),disabled:i(t).processing,onClick:h},{default:o(()=>[ts]),_:1},8,["class","disabled"])]),_:1},8,["show"])]),_:1}))}};export{hs as default};
========
import{r as p,u as v,o as n,c as k,w as o,d as a,F as x,g as b,e as B,a as s,b as l,f as i,G as S,n as C,h as r,t as c}from"./app.f2476175.js";import{_ as L}from"./ActionMessage.2ac877ba.js";import{_ as M}from"./Modal.e874a7c6.js";import{_ as O}from"./DialogModal.f9870878.js";import{_ as V,a as $}from"./TextInput.e0a8b244.js";import{_ as w}from"./PrimaryButton.8abf28c7.js";import{_ as F}from"./SecondaryButton.25349559.js";import"./SectionTitle.054b0286.js";import"./_plugin-vue_export-helper.cdc0426e.js";const I=r(" Browser Sessions "),N=r(" Manage and log out your active sessions on other browsers and devices. "),z=s("div",{class:"max-w-xl text-sm text-gray-600"}," If necessary, you may log out of all of your other browser sessions across all of your devices. Some of your recent sessions are listed below; however, this list may not be exhaustive. If you feel your account has been compromised, you should also update your password. ",-1),K={key:0,class:"mt-5 space-y-6"},T={key:0,fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor",class:"w-8 h-8 text-gray-500"},U=s("path",{d:"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"},null,-1),j=[U],D={key:1,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",class:"w-8 h-8 text-gray-500"},E=s("path",{d:"M0 0h24v24H0z",stroke:"none"},null,-1),H=s("rect",{x:"7",y:"4",width:"10",height:"16",rx:"1"},null,-1),P=s("path",{d:"M11 5h2M12 17v.01"},null,-1),A=[E,H,P],G={class:"ml-3"},q={class:"text-sm text-gray-600"},J={class:"text-xs text-gray-500"},Q={key:0,class:"text-green-500 font-semibold"},R={key:1},W={class:"flex items-center mt-5"},X=r(" Log Out Other Browser Sessions "),Y=r(" Done. "),Z=r(" Log Out Other Browser Sessions "),ss=r(" Please enter your password to confirm you would like to log out of your other browser sessions across all of your devices. "),es={class:"mt-4"},os=r(" Cancel "),ts=r(" Log Out Other Browser Sessions "),hs={__name:"LogoutOtherBrowserSessionsForm",props:{sessions:Array},setup(m){const d=p(!1),_=p(null),t=v({password:""}),y=()=>{d.value=!0,setTimeout(()=>_.value.focus(),250)},h=()=>{t.delete(route("other-browser-sessions.destroy"),{preserveScroll:!0,onSuccess:()=>u(),onError:()=>_.value.focus(),onFinish:()=>t.reset()})},u=()=>{d.value=!1,t.reset()};return(rs,f)=>(n(),k(M,null,{title:o(()=>[I]),description:o(()=>[N]),content:o(()=>[z,m.sessions.length>0?(n(),a("div",K,[(n(!0),a(x,null,b(m.sessions,(e,g)=>(n(),a("div",{key:g,class:"flex items-center"},[s("div",null,[e.agent.is_desktop?(n(),a("svg",T,j)):(n(),a("svg",D,A))]),s("div",G,[s("div",q,c(e.agent.platform?e.agent.platform:"Unknown")+" - "+c(e.agent.browser?e.agent.browser:"Unknown"),1),s("div",null,[s("div",J,[r(c(e.ip_address)+", ",1),e.is_current_device?(n(),a("span",Q,"This device")):(n(),a("span",R,"Last active "+c(e.last_active),1))])])])]))),128))])):B("",!0),s("div",W,[l(w,{onClick:y},{default:o(()=>[X]),_:1}),l(L,{on:i(t).recentlySuccessful,class:"ml-3"},{default:o(()=>[Y]),_:1},8,["on"])]),l(O,{show:d.value,onClose:u},{title:o(()=>[Z]),content:o(()=>[ss,s("div",es,[l(V,{ref_key:"passwordInput",ref:_,modelValue:i(t).password,"onUpdate:modelValue":f[0]||(f[0]=e=>i(t).password=e),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",onKeyup:S(h,["enter"])},null,8,["modelValue","onKeyup"]),l($,{message:i(t).errors.password,class:"mt-2"},null,8,["message"])])]),footer:o(()=>[l(F,{onClick:u},{default:o(()=>[os]),_:1}),l(w,{class:C(["ml-3",{"opacity-25":i(t).processing}]),disabled:i(t).processing,onClick:h},{default:o(()=>[ts]),_:1},8,["class","disabled"])]),_:1},8,["show"])]),_:1}))}};export{hs as default};
>>>>>>>> master:public/build/assets/LogoutOtherBrowserSessionsForm.d6e25a4f.js
