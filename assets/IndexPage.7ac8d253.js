import{Q as m,a as b}from"./QCard.f00deb23.js";import{Q as c}from"./QInput.ab909322.js";import{r as u,c2 as h,j as Q,aI as v,a3 as V,bb as t,a6 as l,d as o,P as x,c3 as q}from"./index.45153cc6.js";import{Q as P}from"./QPage.dfd506d9.js";import{u as k}from"./auth-store.28e07f83.js";import{a as B}from"./uid.86e7d13e.js";import"./use-dark.0d0b0ba9.js";import"./helpers.73a7253f.js";const C={class:"q-gutter-y-md",style:{width:"60%"}},L=l("p",{style:{"font-weight":"bolder","font-size":"larger"}}," Login to the Sales App ",-1),S=l("hr",null,null,-1),E={style:{color:"red"}},T={__name:"IndexPage",setup(I){u("login");const r=u(!1),n=u(""),p=B(),f=h(),g=k(),a=Q({name:"",email:"",password:""}),_=async()=>{const s={email:a.email.trim(),password:a.password.trim()};if(s.email&&s.password){r.value=!0;const e=await g.login(s);e.status==="success"?y(e.message,"green"):w(e.message)}else d("Email and password are required","red")},d=(s,e)=>{p.notify({message:s,color:e,position:"top"})},w=s=>{n.value=s,d(s,"red"),setTimeout(()=>n.value="",1e4)},y=(s,e)=>{r.value=!1,d(s,e),f.push("/dashboard")};return(s,e)=>(v(),V(P,{class:"flex flex-center"},{default:t(()=>[l("div",C,[o(b,{bordered:""},{default:t(()=>[o(m,{class:"text-center"},{default:t(()=>[L,S]),_:1}),o(m,null,{default:t(()=>[o(c,{rounded:"",dense:"",outlined:"",type:"email",label:"Email",modelValue:a.email,"onUpdate:modelValue":e[0]||(e[0]=i=>a.email=i),class:"q-mb-sm"},null,8,["modelValue"]),o(c,{rounded:"",dense:"",outlined:"",type:"password",label:"Password",modelValue:a.password,"onUpdate:modelValue":e[1]||(e[1]=i=>a.password=i),class:"q-mb-sm"},null,8,["modelValue"]),l("small",E,x(n.value),1),o(q,{icon:"mail",dense:"",label:"Login",dark:"",color:"primary",onClick:_,class:"full-width",loading:r.value,rounded:""},null,8,["loading"])]),_:1})]),_:1})])]),_:1}))}};export{T as default};
