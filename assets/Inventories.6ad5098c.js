import{Q as f,a as H,e as J,b as K}from"./excel.4c4e60d9.js";import{c6 as W,c5 as X,r as m,aI as y,a5 as x,u as v,P as i,a3 as V,bb as o,b as Y,d as t,ac as b,bV as N,c3 as k,a6 as E,a4 as S}from"./index.293eafd3.js";import{Q as T}from"./QInput.f16f250f.js";import{Q as Z,a as ee,p as te,c as ae,d as ne}from"./paginations.cf71abf1.js";import{a as re,Q as $}from"./QCard.065a5152.js";import{a as oe}from"./uid.31575970.js";import{a as se,u as le}from"./index.af0e9988.js";import{g as ie,p as A}from"./module_calls.421761b7.js";import"./use-dark.ae53736e.js";import"./QSeparator.df20a2a7.js";import"./rtl.8da4134e.js";import"./helpers.73a7253f.js";const U=[{name:"product",required:!0,label:"Product",align:"left",field:r=>r.name,format:r=>`${r}`,sortable:!0},{name:"buying_price",align:"center",label:"Buying Price",field:"buying_price",sortable:!0},{name:"quantity",align:"center",label:"Quantity",field:"quantity",sortable:!0},{name:"user",align:"center",label:"Created By",field:"user",sortable:!0},{name:"created_at",align:"center",label:"Created On",field:"created_at",sortable:!0},{name:"actions",align:"center",label:"Actions",field:"created_at"}],_=W(),u=_==null?void 0:_.token,ue=X("inventories",{state:()=>({inventories:[]}),actions:{async fetchInventories(){if(u){const r=await ie("inventories",u);return this.inventories=r==null?void 0:r.data,this.inventories}},async createInventory(r){var d;if(r.uuid=(d=_==null?void 0:_.user)==null?void 0:d.uuid,u)return await A(r,"inventories",u)},async updateInventory(r){if(u)return await A(r,"update_inventory",u)},async deleteInventory(r){if(u)return await A(r,"delete_inventory",u)}}});const de={class:"q-pa-md"},ce={key:0},me={key:1},ve={class:"text-h6"},pe={class:"text-center error_msg"},xe={__name:"Inventories",setup(r){const d=oe(),w=se(),I=ue(),Q=te(10),c=m(!1),g=m(!1),C=m(""),h=m(""),s=m(""),q=m(""),p=m(""),{data:B,isLoading:z,isError:D}=le("inventories",()=>I.fetchInventories()),P=async a=>{if(confirm(`Continue with the operation. Delete ${a.name} ?`)){const e=await I.deleteInventory({uuid:a.uuid});e.status==="success"?(w.refetchQueries("inventories"),l(e.message,"green","top")):l("There was an error","red","top-right")}},L=()=>{h.value="Add New Inventory",c.value=!0,g.value=!1},F=a=>{g.value=!0,h.value=`Edit ${a.name}`,s.value=a.name,q.value=a.uuid,c.value=!0},M=async()=>{if(p.value="",s.value.trim()){const a=await I.createInventory({name:s.value.trim()});a.status==="success"?(w.refetchQueries("inventories"),s.value="",c.value=!1,l(a.message,"green","top")):(p.value=a.message,l(a.message,"red","top-right"))}else p.value="Name is required!",l("Name is required!","red","top-right")},O=async()=>{const a={name:s.value.trim(),uuid:q.value};if(a.name){const n=await I.updateInventory(a);n.status==="success"?(w.refetchQueries("inventories"),s.value="",c.value=!1,g.value=!1,h.value="",l(n.message,"green","top")):l("There was an error","red","top-right")}else p.value="Name is required!",l("Name is required!","red","top-right")},R=()=>{c.value=!1,s.value="",q.value="",p.value=""},l=(a,n,e)=>{d.notify({message:a,color:n,position:e})},j=a=>{const n=a.map(e=>({name:e.name,inventories:e.inventories.length,created_at:e.created_at}));J(n,U,K,d,"InventoriesData")};return(a,n)=>(y(),x("div",de,[v(z)?(y(),x("div",ce,"Loading inventories...")):v(D)?(y(),x("div",me,"An error has occurred: "+i(v(D)),1)):(y(),V(Z,{key:2,title:"Inventories",rows:v(B),columns:v(U),pagination:v(Q),"onUpdate:pagination":n[2]||(n[2]=e=>Y(Q)?Q.value=e:null),separator:"cell","row-key":"name",filter:C.value,dense:""},{body:o(e=>[t(H,{props:e},{default:o(()=>[t(f,{key:"product",props:e},{default:o(()=>[b(i(e.row.product),1)]),_:2},1032,["props"]),t(f,{key:"buying_price",props:e},{default:o(()=>[b(i(e.row.buying_price),1)]),_:2},1032,["props"]),t(f,{key:"quantity",props:e},{default:o(()=>[b(i(e.row.quantity),1)]),_:2},1032,["props"]),t(f,{key:"user",props:e},{default:o(()=>[b(i(e.row.user),1)]),_:2},1032,["props"]),t(f,{key:"created_at",props:e},{default:o(()=>[b(i(e.row.created_at),1)]),_:2},1032,["props"]),t(f,{key:"actions",props:e},{default:o(()=>[t(N,{color:"blue",name:"edit",onClick:G=>F(e.row),style:{cursor:"pointer"},size:"20px",class:"q-mr-md"},null,8,["onClick"]),t(N,{color:"red",name:"delete",onClick:G=>P(e.row),style:{cursor:"pointer"},size:"20px"},null,8,["onClick"])]),_:2},1032,["props"])]),_:2},1032,["props"])]),"top-right":o(()=>[t(T,{borderless:"",dense:"",outlined:"",rounded:"",debounce:"300",modelValue:C.value,"onUpdate:modelValue":n[0]||(n[0]=e=>C.value=e),placeholder:"Search",class:"q-mr-md"},{append:o(()=>[t(N,{name:"search"})]),_:1},8,["modelValue"]),t(k,{onClick:L,round:"",dense:"",color:"primary",size:"small",icon:"add"}),t(k,{dense:"",flat:"",color:"primary","icon-right":"archive",label:"Export",class:"q-ml-sm","no-caps":"",onClick:n[1]||(n[1]=e=>j(v(B)))})]),_:1},8,["rows","columns","pagination","filter"])),t(ee,{modelValue:c.value,"onUpdate:modelValue":n[4]||(n[4]=e=>c.value=e),persistent:""},{default:o(()=>[t(re,{style:{width:"500px"}},{default:o(()=>[t($,null,{default:o(()=>[E("div",ve,i(h.value),1)]),_:1}),t($,{class:"q-pt-none"},{default:o(()=>[t(T,{outlined:"",dense:"",label:"Name",modelValue:s.value,"onUpdate:modelValue":n[3]||(n[3]=e=>s.value=e)},null,8,["modelValue"])]),_:1}),E("div",pe,[E("small",null,i(p.value),1)]),t(ae,{align:"right"},{default:o(()=>[t(k,{flat:"",label:"Cancel",color:"red",onClick:R}),t(ne),s.value&&!g.value?(y(),V(k,{key:0,flat:"",label:"Add Inventory",color:"primary",onClick:M})):S("",!0),s.value&&g.value?(y(),V(k,{key:1,flat:"",label:"Edit Inventory",color:"primary",onClick:O})):S("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}};export{xe as default};
