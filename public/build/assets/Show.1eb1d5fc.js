import{_ as c}from"./AppLayout.f265cea1.js";import p from"./DeleteUserForm.1d16fbcb.js";import l from"./LogoutOtherBrowserSessionsForm.4c5bd5bd.js";import{S as s}from"./SectionBorder.29dbaa2a.js";import f from"./TwoFactorAuthenticationForm.1fbff92b.js";import u from"./UpdatePasswordForm.cc65de8d.js";import d from"./UpdateProfileInformationForm.514a6f15.js";import{o,c as _,w as n,a as i,d as r,b as t,e as a,F as h}from"./app.081518bb.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Modal.c5d29333.js";import"./SectionTitle.19fa3b0c.js";import"./DangerButton.f7806ee4.js";import"./DialogModal.596c2704.js";import"./TextInput.437544e6.js";import"./SecondaryButton.71365a84.js";import"./ActionMessage.01319e59.js";import"./PrimaryButton.7df6d34e.js";import"./InputLabel.437d52d3.js";import"./FormSection.8c3f989a.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Profile ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={key:0},k={key:1},y={key:2},G={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,x)=>(o(),_(c,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[e.$page.props.jetstream.canUpdateProfileInformation?(o(),r("div",w,[t(d,{user:e.$page.props.user},null,8,["user"]),t(s)])):a("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),r("div",k,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),r("div",y,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),r(h,{key:3},[t(s),t(p,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{G as default};
