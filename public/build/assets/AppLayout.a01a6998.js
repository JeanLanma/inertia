import{o,d as n,r as j,i as x,j as M,k as N,g as i,n as f,a as e,e as p,t as y,l as k,m as D,p as F,q as g,s as C,v as L,x as B,b as d,w as a,T as q,c as _,L as S,H as E,f as c,F as $,h as z,y as P}from"./app.ae36ff1f.js";import{_ as I}from"./_plugin-vue_export-helper.cdc0426e.js";const O={},V={src:"/assets/freetravelers-logo.jpg"};function H(l,r){return o(),n("img",V)}const R=I(O,[["render",H]]),U={class:"max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"},G={class:"flex items-center justify-between flex-wrap"},J={class:"w-0 flex-1 flex items-center min-w-0"},K={key:0,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},Q=e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),W=[Q],X={key:1,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},Y=e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"},null,-1),Z=[Y],ee={class:"ml-3 font-medium text-sm text-white truncate"},te={class:"shrink-0 sm:ml-3"},se=e("svg",{class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),oe=[se],re={__name:"Banner",setup(l){const r=j(!0),s=x(()=>{var t;return((t=M().props.value.jetstream.flash)==null?void 0:t.bannerStyle)||"success"}),h=x(()=>{var t;return((t=M().props.value.jetstream.flash)==null?void 0:t.banner)||""});return N(h,async()=>{r.value=!0}),(t,b)=>(o(),n("div",null,[r.value&&i(h)?(o(),n("div",{key:0,class:f({"bg-indigo-500":i(s)=="success","bg-red-700":i(s)=="danger"})},[e("div",U,[e("div",G,[e("div",J,[e("span",{class:f(["flex p-2 rounded-lg",{"bg-indigo-600":i(s)=="success","bg-red-600":i(s)=="danger"}])},[i(s)=="success"?(o(),n("svg",K,W)):p("",!0),i(s)=="danger"?(o(),n("svg",X,Z)):p("",!0)],2),e("p",ee,y(i(h)),1)]),e("div",te,[e("button",{type:"button",class:f(["-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition",{"hover:bg-indigo-600 focus:bg-indigo-600":i(s)=="success","hover:bg-red-600 focus:bg-red-600":i(s)=="danger"}]),"aria-label":"Dismiss",onClick:b[0]||(b[0]=k(u=>r.value=!1,["prevent"]))},oe,2)])])])],2)):p("",!0)]))}},ne={class:"relative"},A={__name:"Dropdown",props:{align:{type:String,default:"right"},width:{type:String,default:"48"},contentClasses:{type:Array,default:()=>["py-1","bg-white"]}},setup(l){const r=l;let s=j(!1);const h=u=>{s.value&&u.key==="Escape"&&(s.value=!1)};D(()=>document.addEventListener("keydown",h)),F(()=>document.removeEventListener("keydown",h));const t=x(()=>({48:"w-48"})[r.width.toString()]),b=x(()=>r.align==="left"?"origin-top-left left-0":r.align==="right"?"origin-top-right right-0":"origin-top");return(u,m)=>(o(),n("div",ne,[e("div",{onClick:m[0]||(m[0]=T=>C(s)?s.value=!i(s):s=!i(s))},[g(u.$slots,"trigger")]),L(e("div",{class:"fixed inset-0 z-40",onClick:m[1]||(m[1]=T=>C(s)?s.value=!1:s=!1)},null,512),[[B,i(s)]]),d(q,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:a(()=>[L(e("div",{class:f(["absolute z-50 mt-2 rounded-md shadow-lg",[i(t),i(b)]]),style:{display:"none"},onClick:m[2]||(m[2]=T=>C(s)?s.value=!1:s=!1)},[e("div",{class:f(["rounded-md ring-1 ring-black ring-opacity-5",l.contentClasses])},[g(u.$slots,"content")],2)],2),[[B,i(s)]])]),_:3})]))}},ae={key:0,type:"submit",class:"block w-full px-4 py-2 text-sm leading-5 text-gray-700 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"},ie=["href"],w={__name:"DropdownLink",props:{href:String,as:String},setup(l){return(r,s)=>(o(),n("div",null,[l.as=="button"?(o(),n("button",ae,[g(r.$slots,"default")])):l.as=="a"?(o(),n("a",{key:1,href:l.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"},[g(r.$slots,"default")],8,ie)):(o(),_(i(S),{key:2,href:l.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"},{default:a(()=>[g(r.$slots,"default")]),_:3},8,["href"]))]))}},le={__name:"NavLink",props:{href:String,active:Boolean},setup(l){const r=l,s=x(()=>r.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition");return(h,t)=>(o(),_(i(S),{href:l.href,class:f(i(s))},{default:a(()=>[g(h.$slots,"default")]),_:3},8,["href","class"]))}},v={__name:"ResponsiveNavLink",props:{active:Boolean,href:String,as:String},setup(l){const r=l,s=x(()=>r.active?"block pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition":"block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition");return(h,t)=>(o(),n("div",null,[l.as=="button"?(o(),n("button",{key:0,class:f([i(s),"w-full text-left"])},[g(h.$slots,"default")],2)):(o(),_(i(S),{key:1,href:l.href,class:f(i(s))},{default:a(()=>[g(h.$slots,"default")]),_:3},8,["href","class"]))]))}},de={class:"min-h-screen bg-gray-100"},ue={class:"bg-white border-b border-gray-100"},ce={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},he={class:"flex justify-between h-16"},pe={class:"flex"},fe={class:"shrink-0 flex items-center"},ge={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},me={class:"hidden sm:flex sm:items-center sm:ml-6"},ve={class:"ml-3 relative"},_e={class:"inline-flex rounded-md"},be={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition"},ye=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),we={class:"w-60"},xe=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),ke=e("div",{class:"border-t border-gray-100"},null,-1),$e=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),Se=["onSubmit"],Ce={class:"flex items-center"},je={key:0,class:"mr-2 h-5 w-5 text-green-400",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",stroke:"currentColor",viewBox:"0 0 24 24"},Te=e("path",{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),Me=[Te],Le={class:"ml-3 relative"},Be={key:0,class:"flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"},ze=["src","alt"],Pe={key:1,class:"inline-flex rounded-md"},Ae={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition"},Ne=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),De=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Account ",-1),Fe=e("div",{class:"border-t border-gray-100"},null,-1),qe=["onSubmit"],Ee={class:"-mr-2 flex items-center sm:hidden"},Ie={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},Oe={class:"pt-2 pb-3 space-y-1"},Ve={class:"pt-4 pb-1 border-t border-gray-200"},He={class:"flex items-center px-4"},Re={key:0,class:"shrink-0 mr-3"},Ue=["src","alt"],Ge={class:"font-medium text-base text-gray-800"},Je={class:"font-medium text-sm text-gray-500"},Ke={class:"mt-3 space-y-1"},Qe=["onSubmit"],We=e("div",{class:"border-t border-gray-200"},null,-1),Xe=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),Ye=e("div",{class:"border-t border-gray-200"},null,-1),Ze=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),et=["onSubmit"],tt={class:"flex items-center"},st={key:0,class:"mr-2 h-5 w-5 text-green-400",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",stroke:"currentColor",viewBox:"0 0 24 24"},ot=e("path",{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),rt=[ot],nt={key:0,class:"bg-white shadow"},at={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},dt={__name:"AppLayout",props:{title:String},setup(l){const r=j(!1),s=t=>{P.Inertia.put(route("current-team.update"),{team_id:t.id},{preserveState:!1})},h=()=>{P.Inertia.post(route("logout"))};return(t,b)=>(o(),n("div",null,[d(i(E),{title:l.title},null,8,["title"]),d(re),e("div",de,[e("nav",ue,[e("div",ce,[e("div",he,[e("div",pe,[e("div",fe,[d(i(S),{href:t.route("dashboard")},{default:a(()=>[d(R,{class:"block h-10 w-auto"})]),_:1},8,["href"])]),e("div",ge,[d(le,{href:t.route("quote"),active:t.route().current("quote")},{default:a(()=>[c(" Cotizador ")]),_:1},8,["href","active"])])]),e("div",me,[e("div",ve,[t.$page.props.jetstream.hasTeamFeatures?(o(),_(A,{key:0,align:"right",width:"60"},{trigger:a(()=>[e("span",_e,[e("button",be,[c(y(t.$page.props.user.current_team.name)+" ",1),ye])])]),content:a(()=>[e("div",we,[t.$page.props.jetstream.hasTeamFeatures?(o(),n($,{key:0},[xe,d(w,{href:t.route("teams.show",t.$page.props.user.current_team)},{default:a(()=>[c(" Team Settings ")]),_:1},8,["href"]),t.$page.props.jetstream.canCreateTeams?(o(),_(w,{key:0,href:t.route("teams.create")},{default:a(()=>[c(" Create New Team ")]),_:1},8,["href"])):p("",!0),ke,$e,(o(!0),n($,null,z(t.$page.props.user.all_teams,u=>(o(),n("form",{key:u.id,onSubmit:k(m=>s(u),["prevent"])},[d(w,{as:"button"},{default:a(()=>[e("div",Ce,[u.id==t.$page.props.user.current_team_id?(o(),n("svg",je,Me)):p("",!0),e("div",null,y(u.name),1)])]),_:2},1024)],40,Se))),128))],64)):p("",!0)])]),_:1})):p("",!0)]),e("div",Le,[d(A,{align:"right",width:"48"},{trigger:a(()=>[t.$page.props.jetstream.managesProfilePhotos?(o(),n("button",Be,[e("img",{class:"h-8 w-8 rounded-full object-cover",src:t.$page.props.user.profile_photo_url,alt:t.$page.props.user.name},null,8,ze)])):(o(),n("span",Pe,[e("button",Ae,[c(y(t.$page.props.user.name)+" ",1),Ne])]))]),content:a(()=>[De,d(w,{href:t.route("profile.show")},{default:a(()=>[c(" Profile ")]),_:1},8,["href"]),t.$page.props.jetstream.hasApiFeatures?(o(),_(w,{key:0,href:t.route("api-tokens.index")},{default:a(()=>[c(" API Tokens ")]),_:1},8,["href"])):p("",!0),Fe,e("form",{onSubmit:k(h,["prevent"])},[d(w,{as:"button"},{default:a(()=>[c(" Log Out ")]),_:1})],40,qe)]),_:1})])]),e("div",Ee,[e("button",{class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition",onClick:b[0]||(b[0]=u=>r.value=!r.value)},[(o(),n("svg",Ie,[e("path",{class:f({hidden:r.value,"inline-flex":!r.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:f({hidden:!r.value,"inline-flex":r.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),e("div",{class:f([{block:r.value,hidden:!r.value},"sm:hidden"])},[e("div",Oe,[d(v,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:a(()=>[c(" Dashboard ")]),_:1},8,["href","active"]),d(v,{href:t.route("quote"),active:t.route().current("quote")},{default:a(()=>[c(" Cotizador ")]),_:1},8,["href","active"])]),e("div",Ve,[e("div",He,[t.$page.props.jetstream.managesProfilePhotos?(o(),n("div",Re,[e("img",{class:"h-10 w-10 rounded-full object-cover",src:t.$page.props.user.profile_photo_url,alt:t.$page.props.user.name},null,8,Ue)])):p("",!0),e("div",null,[e("div",Ge,y(t.$page.props.user.name),1),e("div",Je,y(t.$page.props.user.email),1)])]),e("div",Ke,[d(v,{href:t.route("profile.show"),active:t.route().current("profile.show")},{default:a(()=>[c(" Profile ")]),_:1},8,["href","active"]),t.$page.props.jetstream.hasApiFeatures?(o(),_(v,{key:0,href:t.route("api-tokens.index"),active:t.route().current("api-tokens.index")},{default:a(()=>[c(" API Tokens ")]),_:1},8,["href","active"])):p("",!0),e("form",{method:"POST",onSubmit:k(h,["prevent"])},[d(v,{as:"button"},{default:a(()=>[c(" Log Out ")]),_:1})],40,Qe),t.$page.props.jetstream.hasTeamFeatures?(o(),n($,{key:1},[We,Xe,d(v,{href:t.route("teams.show",t.$page.props.user.current_team),active:t.route().current("teams.show")},{default:a(()=>[c(" Team Settings ")]),_:1},8,["href","active"]),t.$page.props.jetstream.canCreateTeams?(o(),_(v,{key:0,href:t.route("teams.create"),active:t.route().current("teams.create")},{default:a(()=>[c(" Create New Team ")]),_:1},8,["href","active"])):p("",!0),Ye,Ze,(o(!0),n($,null,z(t.$page.props.user.all_teams,u=>(o(),n("form",{key:u.id,onSubmit:k(m=>s(u),["prevent"])},[d(v,{as:"button"},{default:a(()=>[e("div",tt,[u.id==t.$page.props.user.current_team_id?(o(),n("svg",st,rt)):p("",!0),e("div",null,y(u.name),1)])]),_:2},1024)],40,et))),128))],64)):p("",!0)])])],2)]),t.$slots.header?(o(),n("header",nt,[e("div",at,[g(t.$slots,"header")])])):p("",!0),e("main",null,[g(t.$slots,"default")])])]))}};export{dt as _};
