import{_ as i}from"./AppLayout.a01a6998.js";import o from"./DeleteTeamForm.ab34923f.js";import{S as r}from"./SectionBorder.546cbd5c.js";import l from"./TeamMemberManager.b8c68689.js";import n from"./UpdateTeamNameForm.b87f603c.js";import{o as m,c,w as s,a,b as t,d as p,F as d,e as f}from"./app.ae36ff1f.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Modal.c9a3e017.js";import"./SectionTitle.7bc6dbf9.js";import"./ConfirmationModal.bde319d9.js";import"./DangerButton.b5fb2bd1.js";import"./SecondaryButton.dc087224.js";import"./ActionMessage.e753b4ef.js";import"./DialogModal.2dd96fb3.js";import"./FormSection.1a42e272.js";import"./TextInput.98953259.js";import"./InputLabel.ee9b9604.js";import"./PrimaryButton.ee0ece35.js";const u=a("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Team Settings ",-1),x={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},D={__name:"Show",props:{team:Object,availableRoles:Array,permissions:Object},setup(e){return(b,h)=>(m(),c(i,{title:"Team Settings"},{header:s(()=>[u]),default:s(()=>[a("div",null,[a("div",x,[t(n,{team:e.team,permissions:e.permissions},null,8,["team","permissions"]),t(l,{class:"mt-10 sm:mt-0",team:e.team,"available-roles":e.availableRoles,"user-permissions":e.permissions},null,8,["team","available-roles","user-permissions"]),e.permissions.canDeleteTeam&&!e.team.personal_team?(m(),p(d,{key:0},[t(r),t(o,{class:"mt-10 sm:mt-0",team:e.team},null,8,["team"])],64)):f("",!0)])])]),_:1}))}};export{D as default};
