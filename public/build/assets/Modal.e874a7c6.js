<<<<<<<< HEAD:public/build/assets/Modal.d892bca6.js
import{S as p}from"./SectionTitle.51a2a6aa.js";import{o as y,d as v,b as l,w as o,q as n,a as t,k as w,m as h,p as x,i as _,c as g,v as i,x as d,T as r,n as b,f as k,e as $,z as B}from"./app.e9d8bd02.js";const S={class:"md:grid md:grid-cols-3 md:gap-6"},C={class:"mt-5 md:mt-0 md:col-span-2"},E={class:"px-4 py-5 sm:p-6 bg-white shadow sm:rounded-lg"},M={__name:"ActionSection",setup(e){return(a,s)=>(y(),v("div",S,[l(p,null,{title:o(()=>[n(a.$slots,"title")]),description:o(()=>[n(a.$slots,"description")]),_:3}),t("div",C,[t("div",E,[n(a.$slots,"content")])])]))}},T={class:"fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50","scroll-region":""},z=t("div",{class:"absolute inset-0 bg-gray-500 opacity-75"},null,-1),N=[z],q={__name:"Modal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(e,{emit:a}){const s=e;w(()=>s.show,()=>{s.show?document.body.style.overflow="hidden":document.body.style.overflow=null});const m=()=>{s.closeable&&a("close")},u=c=>{c.key==="Escape"&&s.show&&m()};h(()=>document.addEventListener("keydown",u)),x(()=>{document.removeEventListener("keydown",u),document.body.style.overflow=null});const f=_(()=>({sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"})[s.maxWidth]);return(c,V)=>(y(),g(B,{to:"body"},[l(r,{"leave-active-class":"duration-200"},{default:o(()=>[i(t("div",T,[l(r,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:o(()=>[i(t("div",{class:"fixed inset-0 transform transition-all",onClick:m},N,512),[[d,e.show]])]),_:1}),l(r,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:o(()=>[i(t("div",{class:b(["mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto",k(f)])},[e.show?n(c.$slots,"default",{key:0}):$("",!0)],2),[[d,e.show]])]),_:3})],512),[[d,e.show]])]),_:3})]))}};export{M as _,q as a};
========
import{S as p}from"./SectionTitle.054b0286.js";import{o as y,d as v,b as l,w as o,q as n,a as t,k as w,m as h,p as x,i as _,c as g,v as i,x as d,T as r,n as b,f as k,e as $,z as B}from"./app.f2476175.js";const S={class:"md:grid md:grid-cols-3 md:gap-6"},C={class:"mt-5 md:mt-0 md:col-span-2"},E={class:"px-4 py-5 sm:p-6 bg-white shadow sm:rounded-lg"},M={__name:"ActionSection",setup(e){return(a,s)=>(y(),v("div",S,[l(p,null,{title:o(()=>[n(a.$slots,"title")]),description:o(()=>[n(a.$slots,"description")]),_:3}),t("div",C,[t("div",E,[n(a.$slots,"content")])])]))}},T={class:"fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50","scroll-region":""},z=t("div",{class:"absolute inset-0 bg-gray-500 opacity-75"},null,-1),N=[z],q={__name:"Modal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(e,{emit:a}){const s=e;w(()=>s.show,()=>{s.show?document.body.style.overflow="hidden":document.body.style.overflow=null});const m=()=>{s.closeable&&a("close")},u=c=>{c.key==="Escape"&&s.show&&m()};h(()=>document.addEventListener("keydown",u)),x(()=>{document.removeEventListener("keydown",u),document.body.style.overflow=null});const f=_(()=>({sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"})[s.maxWidth]);return(c,V)=>(y(),g(B,{to:"body"},[l(r,{"leave-active-class":"duration-200"},{default:o(()=>[i(t("div",T,[l(r,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:o(()=>[i(t("div",{class:"fixed inset-0 transform transition-all",onClick:m},N,512),[[d,e.show]])]),_:1}),l(r,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:o(()=>[i(t("div",{class:b(["mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto",k(f)])},[e.show?n(c.$slots,"default",{key:0}):$("",!0)],2),[[d,e.show]])]),_:3})],512),[[d,e.show]])]),_:3})]))}};export{M as _,q as a};
>>>>>>>> master:public/build/assets/Modal.e874a7c6.js
