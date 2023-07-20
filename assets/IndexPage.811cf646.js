import{Q as m,a as b}from"./QCard.ad75a669.js";import{Q as c}from"./QInput.b6b22fe0.js";import{r as u,c5 as h,j as Q,aI as v,a3 as V,bb as t,a6 as l,d as o,P as x,bE as q}from"./index.4cc15ae0.js";import{Q as P}from"./QPage.cc72e21c.js";import{u as k}from"./auth-store.6c427520.js";import{a as B}from"./use-quasar.b9178eb8.js";import"./use-dark.f889e447.js";import"./helpers.73a7253f.js";const C={class:"q-gutter-y-md",style:{width:"60%"}},E=l("p",{style:{"font-weight":"bolder","font-size":"larger"}}," Login to the Sales App ",-1),L=l("hr",null,null,-1),S={style:{color:"red"}},T={__name:"IndexPage",setup(I){u("login");const r=u(!1),n=u(""),p=B(),f=h(),g=k(),a=Q({name:"",email:"",password:""}),_=async()=>{const s={email:a.email.trim(),password:a.password.trim()};if(s.email&&s.password){r.value=!0;const e=await g.login(s);e.status==="success"?y(e.message,"green"):w(e.message)}else d("Email and password are required","red")},d=(s,e)=>{p.notify({message:s,color:e,position:"top"})},w=s=>{n.value=s,d(s,"red"),setTimeout(()=>n.value="",1e4)},y=(s,e)=>{r.value=!1,d(s,e),f.push("/dashboard")};return(s,e)=>(v(),V(P,{class:"flex flex-center"},{default:t(()=>[l("div",C,[o(b,{bordered:""},{default:t(()=>[o(m,{class:"text-center"},{default:t(()=>[E,L]),_:1}),o(m,null,{default:t(()=>[o(c,{rounded:"",dense:"",outlined:"",type:"email",label:"Email",modelValue:a.email,"onUpdate:modelValue":e[0]||(e[0]=i=>a.email=i),class:"q-mb-sm"},null,8,["modelValue"]),o(c,{rounded:"",dense:"",outlined:"",type:"password",label:"Password",modelValue:a.password,"onUpdate:modelValue":e[1]||(e[1]=i=>a.password=i),class:"q-mb-sm"},null,8,["modelValue"]),l("small",S,x(n.value),1),o(q,{icon:"mail",dense:"",label:"Login",dark:"",color:"primary",onClick:_,class:"full-width",loading:r.value,rounded:""},null,8,["loading"])]),_:1})]),_:1})])]),_:1}))}};export{T as default};
