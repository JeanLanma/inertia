import{u as d,E as r,o as g,c as b,w as o,y,b as e,a as V,l as C,h as a}from"./app.936f432c.js";import{_ as j}from"./AppLayout.34881b9b.js";import{_ as x}from"./DangerButton.f7fc1a81.js";import{_ as J}from"./FormSection.3fdf4ad7.js";import{_ as S,a as B}from"./TextInput.374d23f2.js";import{_ as I}from"./PrimaryButton.ffb5a9c0.js";import{_ as E}from"./InputLabel.84773a96.js";import{_ as F}from"./_plugin-vue_export-helper.cdc0426e.js";import"./SectionTitle.091a8e41.js";const L={components:{JetLabel:E,JetInput:S,JetButton:I,AppLayout:j,JetInputError:B,JetDangerButton:x,FormSection:J},props:{errors:Object},setup(){const m=d({title:null,slug:null});function t(){y.Inertia.post(route("category.store"),m)}return{form:m,submit:t}}},h=a(" Create Category "),w=a(" Create a Category "),A=a("Title"),N=a("Slug"),T=a("Send");function $(m,t,l,n,k,v){const _=r("jet-label"),i=r("jet-input"),u=r("JetInputError"),c=r("jet-button"),p=r("FormSection"),f=r("AppLayout");return g(),b(f,{title:"Create Team"},{default:o(()=>[e(p,null,{title:o(()=>[h]),description:o(()=>[w]),form:o(()=>[V("form",{onSubmit:t[2]||(t[2]=C((...s)=>n.submit&&n.submit(...s),["prevent"]))},[e(_,{for:"title"},{default:o(()=>[A]),_:1}),e(i,{type:"text",modelValue:n.form.title,"onUpdate:modelValue":t[0]||(t[0]=s=>n.form.title=s)},null,8,["modelValue"]),e(u,{message:l.errors.title},null,8,["message"]),e(_,{for:"slug"},{default:o(()=>[N]),_:1}),e(i,{type:"text",modelValue:n.form.slug,"onUpdate:modelValue":t[1]||(t[1]=s=>n.form.slug=s)},null,8,["modelValue"]),e(u,{message:l.errors.slug},null,8,["message"]),e(c,null,{default:o(()=>[T]),_:1})],32)]),_:1})]),_:1})}const P=F(L,[["render",$]]);export{P as default};
