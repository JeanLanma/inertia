import{o,d as l,a as e,t as s}from"./app.e9d8bd02.js";const r={class:"QuotePDF px-[69px] py-[48px]"},c={class:"flex justify-between"},a=e("div",null,[e("img",{class:"w-[350px]",src:"/assets/freetravelers-logo.jpg",alt:"Logo Freetravelers"})],-1),d={class:"border-collapse border w-[517px]",style:{width:"517px"},border:"1"},i=e("thead",null,null,-1),h=e("tr",{style:{height:"30px"}},[e("td",{style:{height:"30px"},class:"border"},"Cupon de sevicio / srevice coupon")],-1),n={style:{height:"40px"}},_={style:{height:"40px"},class:"border"},p=e("tr",{style:{height:"30px"}},[e("td",{style:{height:"30px"},class:"border"},"Lugar y fecha / Date and place")],-1),u={style:{height:"40px"}},x={style:{height:"40px"},class:"border"},v={__name:"QuotePDF",props:{quote:Object},setup(t){return(g,y)=>(o(),l("div",r,[e("div",c,[a,e("div",null,[e("table",d,[i,e("tbody",null,[h,e("tr",n,[e("td",_,s(t.quote.id),1)]),p,e("tr",u,[e("td",x,s(t.quote.created_at),1)])])])])])]))}};export{v as default};
