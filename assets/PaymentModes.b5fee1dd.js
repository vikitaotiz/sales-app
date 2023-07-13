import{Q as f,a as R,e as Y,b as j}from"./excel.f2d77cbb.js";import{r as d,aI as c,a5 as C,u as i,P as u,a3 as M,bb as o,b as G,d as a,ac as b,bV as P,bY as y,a6 as x,a4 as E}from"./index.51a259cb.js";import{Q as A}from"./QInput.3cac8ad5.js";import{Q as H,a as J,p as K}from"./paginations.773ea2d0.js";import{Q as D}from"./QCardSection.c70e5739.js";import{Q as W,a as X}from"./QCardActions.9ad23381.js";import{Q as Z}from"./QCard.0e884d39.js";import{u as ee}from"./use-quasar.b3f68725.js";import{a as ae,u as te}from"./index.3312b787.js";import{u as se}from"./payment-mode-store.a8eb091b.js";import"./use-dark.c8311098.js";import"./QSeparator.14c12cc4.js";import"./QList.11dc4b6b.js";import"./module_calls.421761b7.js";import"./helpers.73a7253f.js";const T=[{name:"name",required:!0,label:"Name",align:"left",field:_=>_.name,format:_=>`${_}`,sortable:!0},{name:"user",align:"center",label:"Users",field:"user",sortable:!0},{name:"sales",align:"center",label:"sales",field:"user",sortable:!0},{name:"created_at",align:"center",label:"Created On",field:"created_at",sortable:!0},{name:"actions",align:"center",label:"Actions",field:"created_at"}];const oe={class:"q-pa-md"},le={key:0},re={key:1},ne={class:"text-h6"},de={class:"text-center error_msg"},Ce={__name:"PaymentModes",setup(_){const V=ee(),k=ae(),v=se(),Q=K(10),n=d(!1),p=d(!1),h=d(""),g=d(""),l=d(""),w=d(""),m=d(""),{data:N,isLoading:$,isError:q}=te("payment_modes",()=>v.fetchPaymentModes()),S=async t=>{if(confirm(`Continue with the operation. Delete ${t.name} ?`)){const e=await v.deletePaymentMode({uuid:t.uuid});e.status==="success"?(k.refetchQueries("payment_modes"),r(e.message,"green","top")):r("There was an error","red","top-right")}},U=()=>{g.value="Add New PaymentMode",n.value=!0,p.value=!1},B=t=>{p.value=!0,g.value=`Edit ${t.name}`,l.value=t.name,w.value=t.uuid,n.value=!0},z=async()=>{if(m.value="",l.value.trim()){const t=await v.createPaymentMode({name:l.value.trim()});t.status==="success"?(k.refetchQueries("payment_modes"),l.value="",n.value=!1,r(t.message,"green","top")):(m.value=t.message,r(t.message,"red","top-right"))}else m.value="Name is required!",r("Name is required!","red","top-right")},I=async()=>{const t={name:l.value.trim(),uuid:w.value};if(t.name){const s=await v.updatePaymentMode(t);s.status==="success"?(k.refetchQueries("payment_modes"),l.value="",n.value=!1,p.value=!1,g.value="",r(s.message,"green","top")):r("There was an error","red","top-right")}else m.value="Name is required!",r("Name is required!","red","top-right")},L=()=>{n.value=!1,l.value="",w.value="",m.value=""},r=(t,s,e)=>{V.notify({message:t,color:s,position:e})},F=t=>{const s=t.map(e=>({name:e.name,users:e.users.length,created_at:e.created_at}));Y(s,T,j,V,"PaymentModesData")};return(t,s)=>(c(),C("div",oe,[i($)?(c(),C("div",le,"Loading payment_modes...")):i(q)?(c(),C("div",re,"An error has occurred: "+u(i(q)),1)):(c(),M(H,{key:2,title:"PaymentModes",rows:i(N),columns:i(T),pagination:i(Q),"onUpdate:pagination":s[2]||(s[2]=e=>G(Q)?Q.value=e:null),separator:"cell","row-key":"name",filter:h.value,dense:""},{body:o(e=>[a(R,{props:e},{default:o(()=>[a(f,{key:"name",props:e},{default:o(()=>[b(u(e.row.name),1)]),_:2},1032,["props"]),a(f,{key:"user",props:e},{default:o(()=>[b(u(e.row.user),1)]),_:2},1032,["props"]),a(f,{key:"sales",props:e},{default:o(()=>[b(u(e.row.sales),1)]),_:2},1032,["props"]),a(f,{key:"created_at",props:e},{default:o(()=>[b(u(e.row.created_at),1)]),_:2},1032,["props"]),a(f,{key:"actions",props:e},{default:o(()=>[a(P,{color:"blue",name:"edit",onClick:O=>B(e.row),style:{cursor:"pointer"},size:"20px",class:"q-mr-md"},null,8,["onClick"]),a(P,{color:"red",name:"delete",onClick:O=>S(e.row),style:{cursor:"pointer"},size:"20px"},null,8,["onClick"])]),_:2},1032,["props"])]),_:2},1032,["props"])]),"top-right":o(()=>[a(A,{borderless:"",dense:"",outlined:"",rounded:"",debounce:"300",modelValue:h.value,"onUpdate:modelValue":s[0]||(s[0]=e=>h.value=e),placeholder:"Search",class:"q-mr-md"},{append:o(()=>[a(P,{name:"search"})]),_:1},8,["modelValue"]),a(y,{onClick:U,round:"",dense:"",color:"primary",size:"small",icon:"add"}),a(y,{dense:"",flat:"",color:"primary","icon-right":"archive",label:"Export",class:"q-ml-sm","no-caps":"",onClick:s[1]||(s[1]=e=>F(i(N)))})]),_:1},8,["rows","columns","pagination","filter"])),a(J,{modelValue:n.value,"onUpdate:modelValue":s[4]||(s[4]=e=>n.value=e),persistent:""},{default:o(()=>[a(Z,{style:{width:"500px"}},{default:o(()=>[a(D,null,{default:o(()=>[x("div",ne,u(g.value),1)]),_:1}),a(D,{class:"q-pt-none"},{default:o(()=>[a(A,{outlined:"",dense:"",label:"Name",modelValue:l.value,"onUpdate:modelValue":s[3]||(s[3]=e=>l.value=e)},null,8,["modelValue"])]),_:1}),x("div",de,[x("small",null,u(m.value),1)]),a(W,{align:"right"},{default:o(()=>[a(y,{flat:"",label:"Cancel",color:"red",onClick:L}),a(X),l.value&&!p.value?(c(),M(y,{key:0,flat:"",label:"Add PaymentMode",color:"primary",onClick:z})):E("",!0),l.value&&p.value?(c(),M(y,{key:1,flat:"",label:"Edit PaymentMode",color:"primary",onClick:I})):E("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}};export{Ce as default};
