import{bW as B,r as I,aI as _,a5 as b,d as e,bb as t,u as h,b as k,bV as C,a6 as l,M as q,P as o,ac as r,F as V,aO as N,a3 as L,bY as P,aL as j,aJ as A}from"./index.cc8e0a4c.js";import{Q as E}from"./QInput.84e9bbf0.js";import{Q as y}from"./QSeparator.7d727be5.js";import{l as g,j as Q,k as i}from"./QList.17de517e.js";import{Q as p}from"./QCardSection.c4d9c7a4.js";import{Q as F}from"./QCard.202a61f3.js";import{Q as M,p as O}from"./paginations.423e3bf9.js";import{u as T}from"./sale-store.d13b1b87.js";import{u as U}from"./index.aacaa6ad.js";import{p as $}from"./print.15699711.js";import"./use-dark.9af58fdb.js";import"./module_calls.421761b7.js";import"./helpers.73a7253f.js";import"./_commonjsHelpers.6150b38b.js";const d=n=>(j("data-v-a2f14546"),n=n(),A(),n),z={class:"q-pa-md"},D={class:"q-pa-xs col-xs-12 col-sm-6 col-md-3"},H={class:"text-center"},J=d(()=>l("br",null,null,-1)),K=d(()=>l("br",null,null,-1)),R=d(()=>l("hr",null,null,-1)),W=d(()=>l("hr",null,null,-1)),Y={__name:"Bills",setup(n){const u=O(10),c=I(""),w=T(),{data:S}=U("bills",()=>w.fetchBills()),v=f=>{const s=[];f.forEach(a=>{s.push({name:a.name,quantity:a.quantity})}),$({printable:s,properties:["name","quantity"],type:"json",gridHeaderStyle:"color: red;  border: 2px solid #3971A5;",gridStyle:"border: 2px solid #3971A5;"})};return(f,s)=>(_(),b("div",z,[e(M,{grid:"",flat:"",bordered:"",title:"Sold/Pending Bills",rows:h(S),"row-key":"user",filter:c.value,pagination:h(u),"onUpdate:pagination":s[1]||(s[1]=a=>k(u)?u.value=a:null)},{"top-right":t(()=>[e(E,{rounded:"",outlined:"",dense:"",debounce:"300",modelValue:c.value,"onUpdate:modelValue":s[0]||(s[0]=a=>c.value=a),placeholder:"Search"},{append:t(()=>[e(C,{name:"search"})]),_:1},8,["modelValue"])]),item:t(a=>[l("div",D,[e(F,{bordered:"",class:q(`${a.row.status=="pending"?"sale_pending":""}`)},{default:t(()=>[e(p,null,{default:t(()=>[l("div",H,[l("strong",null,"Created by : "+o(a.row.user),1),r(),J,l("small",null,"Created On : "+o(a.row.created_at),1),r(),K,l("small",null,"Status : "+o(a.row.status),1)]),e(y,{class:"q-mb-sm"}),e(g,{dense:"",bordered:"",separator:"",class:"bill"},{default:t(()=>[e(Q,null,{default:t(()=>[e(i,null,{default:t(()=>[r("Name")]),_:1}),e(i,{side:"",style:{color:"white"}},{default:t(()=>[r("Quantity")]),_:1})]),_:1})]),_:1}),e(g,{dense:"",bordered:"",separator:""},{default:t(()=>[(_(!0),b(V,null,N(a.row.sales,(m,x)=>(_(),L(Q,{key:x},{default:t(()=>[e(i,null,{default:t(()=>[r(o(m.name),1)]),_:2},1024),e(i,{side:""},{default:t(()=>[r(o(m.quantity),1)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]),_:2},1024),e(y),e(p,{class:"flex flex-center"},{default:t(()=>[l("b",null,"Ksh "+o(a.row.selling_price),1),R,l("small",null,"Mode : "+o(a.row.payment_mode),1)]),_:2},1024),W,e(p,{style:{padding:"0"}},{default:t(()=>[e(P,{class:"full-width",dense:"",flat:"",onClick:m=>v(a.row.sales),label:"Print Bill",icon:"download",color:"primary"},null,8,["onClick"])]),_:2},1024)]),_:2},1032,["class"])])]),_:1},8,["rows","filter","pagination"])]))}};var ce=B(Y,[["__scopeId","data-v-a2f14546"]]);export{ce as default};
