import{Q as u,a as R,e as j,b as G}from"./excel.c4e68fad.js";import{r as c,aI as f,a5 as P,u as m,P as s,a3 as b,bb as r,b as H,d as t,ac as d,bV as C,c3 as v,a6 as x,a4 as E}from"./index.45153cc6.js";import{Q as D}from"./QInput.ab909322.js";import{Q as J,a as K,p as O,c as W,d as X}from"./paginations.c737fe8f.js";import{a as Y,Q as T}from"./QCard.f00deb23.js";import{a as Z}from"./uid.86e7d13e.js";import{a as ee,u as te}from"./index.830cf3e9.js";import{p as A}from"./product_columns.7602ac4c.js";import{u as ae}from"./product-store.3801730d.js";import"./use-dark.0d0b0ba9.js";import"./QSeparator.a467f888.js";import"./rtl.0b6f6848.js";import"./module_calls.421761b7.js";import"./helpers.73a7253f.js";const re={class:"q-pa-md"},oe={key:0},se={key:1},le={class:"text-h6"},ue={class:"text-center error_msg"},Pe={__name:"Products",setup(de){const V=Z(),k=ee(),g=ae(),w=O(10),i=c(!1),_=c(!1),h=c(""),y=c(""),l=c(""),Q=c(""),p=c(""),{data:N,isLoading:S,isError:q}=te("products",()=>g.fetchProducts()),$=async a=>{if(confirm(`Continue with the operation. Delete ${a.name} ?`)){const e=await g.deleteProduct({uuid:a.uuid});e.status==="success"?(k.refetchQueries("products"),n(e.message,"green","top")):n("There was an error","red","top-right")}},B=()=>{y.value="Add New Product",i.value=!0,_.value=!1},U=a=>{_.value=!0,y.value=`Edit ${a.name}`,l.value=a.name,Q.value=a.uuid,i.value=!0},z=async()=>{if(p.value="",l.value.trim()){const a=await g.createProduct({name:l.value.trim()});a.status==="success"?(k.refetchQueries("products"),l.value="",i.value=!1,n(a.message,"green","top")):(p.value=a.message,n(a.message,"red","top-right"))}else p.value="Name is required!",n("Name is required!","red","top-right")},I=async()=>{const a={name:l.value.trim(),uuid:Q.value};if(a.name){const o=await g.updateProduct(a);o.status==="success"?(k.refetchQueries("products"),l.value="",i.value=!1,_.value=!1,y.value="",n(o.message,"green","top")):n("There was an error","red","top-right")}else p.value="Name is required!",n("Name is required!","red","top-right")},L=()=>{i.value=!1,l.value="",Q.value="",p.value=""},n=(a,o,e)=>{V.notify({message:a,color:o,position:e})},F=a=>{const o=a.map(e=>({name:e.name,products:e.products.length,created_at:e.created_at}));j(o,A,G,V,"ProductsData")};return(a,o)=>(f(),P("div",re,[m(S)?(f(),P("div",oe,"Loading products...")):m(q)?(f(),P("div",se,"An error has occurred: "+s(m(q)),1)):(f(),b(J,{key:2,title:"Products",rows:m(N),columns:m(A),pagination:m(w),"onUpdate:pagination":o[2]||(o[2]=e=>H(w)?w.value=e:null),separator:"cell","row-key":"name",filter:h.value,dense:""},{body:r(e=>[t(R,{props:e},{default:r(()=>[t(u,{key:"name",props:e},{default:r(()=>[d(s(e.row.name),1)]),_:2},1032,["props"]),t(u,{key:"product_code",props:e},{default:r(()=>[d(s(e.row.product_code),1)]),_:2},1032,["props"]),t(u,{key:"buying_price",props:e},{default:r(()=>[d(s(e.row.buying_price),1)]),_:2},1032,["props"]),t(u,{key:"selling_price",props:e},{default:r(()=>[d(s(e.row.selling_price),1)]),_:2},1032,["props"]),t(u,{key:"category",props:e},{default:r(()=>[d(s(e.row.category),1)]),_:2},1032,["props"]),t(u,{key:"measurement",props:e},{default:r(()=>[d(s(e.row.measurement),1)]),_:2},1032,["props"]),t(u,{key:"department",props:e},{default:r(()=>[d(s(e.row.department),1)]),_:2},1032,["props"]),t(u,{key:"user",props:e},{default:r(()=>[d(s(e.row.user),1)]),_:2},1032,["props"]),t(u,{key:"created_at",props:e},{default:r(()=>[d(s(e.row.created_at),1)]),_:2},1032,["props"]),t(u,{key:"actions",props:e},{default:r(()=>[t(C,{color:"blue",name:"edit",onClick:M=>U(e.row),style:{cursor:"pointer"},size:"20px",class:"q-mr-md"},null,8,["onClick"]),t(C,{color:"red",name:"delete",onClick:M=>$(e.row),style:{cursor:"pointer"},size:"20px"},null,8,["onClick"])]),_:2},1032,["props"])]),_:2},1032,["props"])]),"top-right":r(()=>[t(D,{borderless:"",dense:"",outlined:"",rounded:"",debounce:"300",modelValue:h.value,"onUpdate:modelValue":o[0]||(o[0]=e=>h.value=e),placeholder:"Search",class:"q-mr-md"},{append:r(()=>[t(C,{name:"search"})]),_:1},8,["modelValue"]),t(v,{onClick:B,round:"",dense:"",color:"primary",size:"small",icon:"add"}),t(v,{dense:"",flat:"",color:"primary","icon-right":"archive",label:"Export",class:"q-ml-sm","no-caps":"",onClick:o[1]||(o[1]=e=>F(m(N)))})]),_:1},8,["rows","columns","pagination","filter"])),t(K,{modelValue:i.value,"onUpdate:modelValue":o[4]||(o[4]=e=>i.value=e),persistent:""},{default:r(()=>[t(Y,{style:{width:"500px"}},{default:r(()=>[t(T,null,{default:r(()=>[x("div",le,s(y.value),1)]),_:1}),t(T,{class:"q-pt-none"},{default:r(()=>[t(D,{outlined:"",dense:"",label:"Name",modelValue:l.value,"onUpdate:modelValue":o[3]||(o[3]=e=>l.value=e)},null,8,["modelValue"])]),_:1}),x("div",ue,[x("small",null,s(p.value),1)]),t(W,{align:"right"},{default:r(()=>[t(v,{flat:"",label:"Cancel",color:"red",onClick:L}),t(X),l.value&&!_.value?(f(),b(v,{key:0,flat:"",label:"Add Product",color:"primary",onClick:z})):E("",!0),l.value&&_.value?(f(),b(v,{key:1,flat:"",label:"Edit Product",color:"primary",onClick:I})):E("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}};export{Pe as default};
