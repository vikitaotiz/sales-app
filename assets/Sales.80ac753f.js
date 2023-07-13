import{Q as m,a as R,e as Y,b as j}from"./excel.f2d77cbb.js";import{r as u,aI as p,a5 as w,u as d,P as n,a3 as C,bb as s,b as G,d as a,ac as v,bV as q,bY as _,a6 as x,a4 as A}from"./index.51a259cb.js";import{Q as D}from"./QInput.3cac8ad5.js";import{Q as H,a as J,p as K}from"./paginations.773ea2d0.js";import{Q as T}from"./QCardSection.c70e5739.js";import{Q as W,a as X}from"./QCardActions.9ad23381.js";import{Q as Z}from"./QCard.0e884d39.js";import{u as ee}from"./use-quasar.b3f68725.js";import{a as ae,u as te}from"./index.3312b787.js";import{u as le}from"./sale-store.697522df.js";import"./use-dark.c8311098.js";import"./QSeparator.14c12cc4.js";import"./QList.11dc4b6b.js";import"./module_calls.421761b7.js";import"./helpers.73a7253f.js";const $=[{name:"name",required:!0,label:"Name",align:"left",field:g=>g.name,format:g=>`${g}`,sortable:!0},{name:"quantity",align:"center",label:"Quantity",field:"quantity",sortable:!0},{name:"status",align:"center",label:"Status",field:"status",sortable:!0},{name:"user",align:"center",label:"Created By",field:"user",sortable:!0},{name:"created_at",align:"center",label:"Created On",field:"created_at",sortable:!0},{name:"actions",align:"center",label:"Actions",field:"created_at"}];const se={class:"q-pa-md"},re={key:0},oe={key:1},ne={class:"text-h6"},ie={class:"text-center error_msg"},we={__name:"Sales",setup(g){const V=ee(),S=ae(),y=le(),k=K(10),i=u(!1),f=u(!1),Q=u(""),b=u(""),r=u(""),h=u(""),c=u(""),{data:N,isLoading:B,isError:E}=te("sales",()=>y.fetchSales()),U=async t=>{if(confirm(`Continue with the operation. Delete ${t.name} ?`)){const e=await y.deleteSale({uuid:t.uuid});e.status==="success"?(S.refetchQueries("sales"),o(e.message,"green","top")):o("There was an error","red","top-right")}},z=()=>{b.value="Add New Sale",i.value=!0,f.value=!1},I=t=>{f.value=!0,b.value=`Edit ${t.name}`,r.value=t.name,h.value=t.uuid,i.value=!0},L=async()=>{if(c.value="",r.value.trim()){const t=await y.createSale({name:r.value.trim()});t.status==="success"?(S.refetchQueries("sales"),r.value="",i.value=!1,o(t.message,"green","top")):(c.value=t.message,o(t.message,"red","top-right"))}else c.value="Name is required!",o("Name is required!","red","top-right")},F=async()=>{const t={name:r.value.trim(),uuid:h.value};if(t.name){const l=await y.updateSale(t);l.status==="success"?(S.refetchQueries("sales"),r.value="",i.value=!1,f.value=!1,b.value="",o(l.message,"green","top")):o("There was an error","red","top-right")}else c.value="Name is required!",o("Name is required!","red","top-right")},M=()=>{i.value=!1,r.value="",h.value="",c.value=""},o=(t,l,e)=>{V.notify({message:t,color:l,position:e})},O=t=>{const l=t.map(e=>({name:e.name,sales:e.sales.length,created_at:e.created_at}));Y(l,$,j,V,"SalesData")};return(t,l)=>(p(),w("div",se,[d(B)?(p(),w("div",re,"Loading sales...")):d(E)?(p(),w("div",oe,"An error has occurred: "+n(d(E)),1)):(p(),C(H,{key:2,title:"Sales",rows:d(N),columns:d($),pagination:d(k),"onUpdate:pagination":l[2]||(l[2]=e=>G(k)?k.value=e:null),separator:"cell","row-key":"name",filter:Q.value,dense:""},{body:s(e=>[a(R,{props:e},{default:s(()=>[a(m,{key:"name",props:e},{default:s(()=>[v(n(e.row.name),1)]),_:2},1032,["props"]),a(m,{key:"quantity",props:e},{default:s(()=>[v(n(e.row.quantity),1)]),_:2},1032,["props"]),a(m,{key:"status",props:e},{default:s(()=>[v(n(e.row.status),1)]),_:2},1032,["props"]),a(m,{key:"user",props:e},{default:s(()=>[v(n(e.row.user),1)]),_:2},1032,["props"]),a(m,{key:"created_at",props:e},{default:s(()=>[v(n(e.row.created_at),1)]),_:2},1032,["props"]),a(m,{key:"actions",props:e},{default:s(()=>[a(q,{color:"blue",name:"edit",onClick:P=>I(e.row),style:{cursor:"pointer"},size:"20px",class:"q-mr-md"},null,8,["onClick"]),a(q,{color:"red",name:"delete",onClick:P=>U(e.row),style:{cursor:"pointer"},size:"20px"},null,8,["onClick"])]),_:2},1032,["props"])]),_:2},1032,["props"])]),"top-right":s(()=>[a(D,{borderless:"",dense:"",outlined:"",rounded:"",debounce:"300",modelValue:Q.value,"onUpdate:modelValue":l[0]||(l[0]=e=>Q.value=e),placeholder:"Search",class:"q-mr-md"},{append:s(()=>[a(q,{name:"search"})]),_:1},8,["modelValue"]),a(_,{onClick:z,round:"",dense:"",color:"primary",size:"small",icon:"add"}),a(_,{dense:"",flat:"",color:"primary","icon-right":"archive",label:"Export",class:"q-ml-sm","no-caps":"",onClick:l[1]||(l[1]=e=>O(d(N)))})]),_:1},8,["rows","columns","pagination","filter"])),a(J,{modelValue:i.value,"onUpdate:modelValue":l[4]||(l[4]=e=>i.value=e),persistent:""},{default:s(()=>[a(Z,{style:{width:"500px"}},{default:s(()=>[a(T,null,{default:s(()=>[x("div",ne,n(b.value),1)]),_:1}),a(T,{class:"q-pt-none"},{default:s(()=>[a(D,{outlined:"",dense:"",label:"Name",modelValue:r.value,"onUpdate:modelValue":l[3]||(l[3]=e=>r.value=e)},null,8,["modelValue"])]),_:1}),x("div",ie,[x("small",null,n(c.value),1)]),a(W,{align:"right"},{default:s(()=>[a(_,{flat:"",label:"Cancel",color:"red",onClick:M}),a(X),r.value&&!f.value?(p(),C(_,{key:0,flat:"",label:"Add Sale",color:"primary",onClick:L})):A("",!0),r.value&&f.value?(p(),C(_,{key:1,flat:"",label:"Edit Sale",color:"primary",onClick:F})):A("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}};export{we as default};
