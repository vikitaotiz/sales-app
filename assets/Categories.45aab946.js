import{Q as v,a as G}from"./QTr.154b384c.js";import{b$ as H,b_ as J,r as c,aI as f,a5 as N,u as m,P as g,a3 as q,bb as s,b as K,d as a,ac as w,bV as E,bY as C,a6 as $,a4 as T}from"./index.29739106.js";import{Q as B}from"./QInput.0db28501.js";import{Q as W,a as X,p as Z,c as ee,d as ae}from"./paginations.52192600.js";import{a as te,Q as U}from"./QCard.b052ba04.js";import{e as re,a as oe}from"./excel.5d19a2ad.js";import{u as se}from"./use-quasar.85c6fbda.js";import{a as le,u as ne}from"./index.1f244ee4.js";import{g as ie,p as A}from"./module_calls.421761b7.js";import"./use-dark.b013d156.js";import"./QList.1a5a573c.js";import"./helpers.73a7253f.js";const z=[{name:"name",required:!0,label:"Name",align:"left",field:o=>o.name,format:o=>`${o}`,sortable:!0},{name:"products",align:"center",label:"Products",field:"products",sortable:!0},{name:"user",align:"center",label:"Created By",field:"user",sortable:!0},{name:"created_at",align:"center",label:"Created On",field:"created_at",sortable:!0},{name:"actions",align:"center",label:"Actions",field:"created_at"}],y=H(),i=y==null?void 0:y.token,ue=J("categories",{state:()=>({categories:[]}),actions:{async fetchCategories(){if(i){const o=await ie("categories",i);return this.categories=o==null?void 0:o.data,this.categories}},async createCategory(o){var u;if(o.uuid=(u=y==null?void 0:y.user)==null?void 0:u.uuid,i)return await A(o,"categories",i)},async updateCategory(o){if(i)return await A(o,"update_category",i)},async deleteCategory(o){if(i)return await A(o,"delete_category",i)}}});const de={class:"q-pa-md"},ce={key:0},me={key:1},ge={class:"text-h6"},pe={class:"text-center error_msg"},Ne={__name:"Categories",setup(o){const u=se(),b=le(),h=ue(),Q=Z(10),d=c(!1),_=c(!1),x=c(""),k=c(""),l=c(""),V=c(""),p=c(""),{data:D,isLoading:I,isError:S}=ne("categories",()=>h.fetchCategories()),L=async t=>{if(confirm(`Continue with the operation. Delete ${t.name} ?`)){const e=await h.deleteCategory({uuid:t.uuid});e.status==="success"?(b.refetchQueries("categories"),n(e.message,"green","top")):n("There was an error","red","top-right")}},P=()=>{k.value="Add New Category",d.value=!0,_.value=!1},F=t=>{_.value=!0,k.value=`Edit ${t.name}`,l.value=t.name,V.value=t.uuid,d.value=!0},M=async()=>{if(p.value="",l.value.trim()){const t=await h.createCategory({name:l.value.trim()});t.status==="success"?(b.refetchQueries("categories"),l.value="",d.value=!1,n(t.message,"green","top")):(p.value=t.message,n(t.message,"red","top-right"))}else p.value="Name is required!",n("Name is required!","red","top-right")},O=async()=>{const t={name:l.value.trim(),uuid:V.value};if(t.name){const r=await h.updateCategory(t);r.status==="success"?(b.refetchQueries("categories"),l.value="",d.value=!1,_.value=!1,k.value="",n(r.message,"green","top")):n("There was an error","red","top-right")}else p.value="Name is required!",n("Name is required!","red","top-right")},R=()=>{d.value=!1,l.value="",V.value="",p.value=""},n=(t,r,e)=>{u.notify({message:t,color:r,position:e})},Y=t=>{const r=t.map(e=>({name:e.name,products:e.products.length,created_at:e.created_at}));re(r,z,oe,u,"CategoriesData")};return(t,r)=>(f(),N("div",de,[m(I)?(f(),N("div",ce,"Loading categories...")):m(S)?(f(),N("div",me,"An error has occurred: "+g(m(S)),1)):(f(),q(W,{key:2,title:"Categories",rows:m(D),columns:m(z),pagination:m(Q),"onUpdate:pagination":r[2]||(r[2]=e=>K(Q)?Q.value=e:null),separator:"cell","row-key":"name",filter:x.value,dense:""},{body:s(e=>[a(G,{props:e},{default:s(()=>[a(v,{key:"name",props:e},{default:s(()=>[w(g(e.row.name),1)]),_:2},1032,["props"]),a(v,{key:"products",props:e},{default:s(()=>[w(g(e.row.products.length),1)]),_:2},1032,["props"]),a(v,{key:"user",props:e},{default:s(()=>[w(g(e.row.user),1)]),_:2},1032,["props"]),a(v,{key:"created_at",props:e},{default:s(()=>[w(g(e.row.created_at),1)]),_:2},1032,["props"]),a(v,{key:"actions",props:e},{default:s(()=>[a(E,{color:"blue",name:"edit",onClick:j=>F(e.row),style:{cursor:"pointer"},size:"20px",class:"q-mr-md"},null,8,["onClick"]),a(E,{color:"red",name:"delete",onClick:j=>L(e.row),style:{cursor:"pointer"},size:"20px"},null,8,["onClick"])]),_:2},1032,["props"])]),_:2},1032,["props"])]),"top-right":s(()=>[a(B,{borderless:"",dense:"",outlined:"",rounded:"",debounce:"300",modelValue:x.value,"onUpdate:modelValue":r[0]||(r[0]=e=>x.value=e),placeholder:"Search",class:"q-mr-md"},{append:s(()=>[a(E,{name:"search"})]),_:1},8,["modelValue"]),a(C,{onClick:P,round:"",dense:"",color:"primary",size:"small",icon:"add"}),a(C,{dense:"",flat:"",color:"primary","icon-right":"archive",label:"Export",class:"q-ml-sm","no-caps":"",onClick:r[1]||(r[1]=e=>Y(m(D)))})]),_:1},8,["rows","columns","pagination","filter"])),a(X,{modelValue:d.value,"onUpdate:modelValue":r[4]||(r[4]=e=>d.value=e),persistent:""},{default:s(()=>[a(te,{style:{width:"500px"}},{default:s(()=>[a(U,null,{default:s(()=>[$("div",ge,g(k.value),1)]),_:1}),a(U,{class:"q-pt-none"},{default:s(()=>[a(B,{outlined:"",dense:"",label:"Name",modelValue:l.value,"onUpdate:modelValue":r[3]||(r[3]=e=>l.value=e)},null,8,["modelValue"])]),_:1}),$("div",pe,[$("small",null,g(p.value),1)]),a(ee,{align:"right"},{default:s(()=>[a(C,{flat:"",label:"Cancel",color:"red",onClick:R}),a(ae),l.value&&!_.value?(f(),q(C,{key:0,flat:"",label:"Add Category",color:"primary",onClick:M})):T("",!0),l.value&&_.value?(f(),q(C,{key:1,flat:"",label:"Edit Category",color:"primary",onClick:O})):T("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}};export{Ne as default};
