import{Q as b,a as G,e as H,b as J}from"./excel.f2d77cbb.js";import{b$ as K,b_ as W,r as m,aI as f,a5 as C,u as c,P as v,a3 as x,bb as n,b as X,d as a,ac as V,bV as N,bY as g,a6 as q,a4 as T}from"./index.51a259cb.js";import{Q as U}from"./QInput.3cac8ad5.js";import{Q as Z,a as ee,p as te}from"./paginations.773ea2d0.js";import{Q as B}from"./QCardSection.c70e5739.js";import{Q as ae,a as re}from"./QCardActions.9ad23381.js";import{Q as se}from"./QCard.0e884d39.js";import{u as ne}from"./use-quasar.b3f68725.js";import{a as oe,u as le}from"./index.3312b787.js";import{g as ie,p as E}from"./module_calls.421761b7.js";import"./use-dark.c8311098.js";import"./QSeparator.14c12cc4.js";import"./QList.11dc4b6b.js";import"./helpers.73a7253f.js";const z=[{name:"name",required:!0,label:"Name",align:"left",field:s=>s.name,format:s=>`${s}`,sortable:!0},{name:"users",align:"center",label:"Users",field:"users",sortable:!0},{name:"created_at",align:"center",label:"Created On",field:"created_at",sortable:!0},{name:"actions",align:"center",label:"Actions",field:"created_at"}],$=K(),i=$==null?void 0:$.token,de=W("departments",{state:()=>({departments:[]}),actions:{async fetchDepartments(){if(i){const s=await ie("departments",i);return this.departments=s==null?void 0:s.data,this.departments}},async createDepartment(s){if(i){console.log(s);const d=await E(s,"departments",i);return console.log(d),d}},async updateDepartment(s){if(i)return await E(s,"update_department",i)},async deleteDepartment(s){if(i)return await E(s,"delete_department",i)}}});const ue={class:"q-pa-md"},me={key:0},ce={key:1},pe={class:"text-h6"},fe={class:"text-center error_msg"},qe={__name:"Departments",setup(s){const d=ne(),h=oe(),y=de(),k=te(10),u=m(!1),_=m(!1),w=m(""),D=m(""),o=m(""),Q=m(""),p=m(""),{data:A,isLoading:I,isError:S}=le("departments",()=>y.fetchDepartments()),L=async t=>{if(confirm(`Continue with the operation. Delete ${t.name} ?`)){const e=await y.deleteDepartment({uuid:t.uuid});e.status==="success"?(h.refetchQueries("departments"),l(e.message,"green","top")):l("There was an error","red","top-right")}},F=()=>{D.value="Add New Department",u.value=!0,_.value=!1},M=t=>{_.value=!0,D.value=`Edit ${t.name}`,o.value=t.name,Q.value=t.uuid,u.value=!0},O=async()=>{if(p.value="",o.value.trim()){const t=await y.createDepartment({name:o.value.trim()});t.status==="success"?(h.refetchQueries("departments"),o.value="",u.value=!1,l(t.message,"green","top")):(p.value=t.message,l(t.message,"red","top-right"))}else p.value="Name is required!",l("Name is required!","red","top-right")},P=async()=>{const t={name:o.value.trim(),uuid:Q.value};if(t.name){const r=await y.updateDepartment(t);r.status==="success"?(h.refetchQueries("departments"),o.value="",u.value=!1,_.value=!1,D.value="",l(r.message,"green","top")):l("There was an error","red","top-right")}else p.value="Name is required!",l("Name is required!","red","top-right")},R=()=>{u.value=!1,o.value="",Q.value="",p.value=""},l=(t,r,e)=>{d.notify({message:t,color:r,position:e})},Y=t=>{const r=t.map(e=>({name:e.name,users:e.users.length,created_at:e.created_at}));H(r,z,J,d,"DepartmentsData")};return(t,r)=>(f(),C("div",ue,[c(I)?(f(),C("div",me,"Loading departments...")):c(S)?(f(),C("div",ce,"An error has occurred: "+v(c(S)),1)):(f(),x(Z,{key:2,title:"Departments",rows:c(A),columns:c(z),pagination:c(k),"onUpdate:pagination":r[2]||(r[2]=e=>X(k)?k.value=e:null),separator:"cell","row-key":"name",filter:w.value,dense:""},{body:n(e=>[a(G,{props:e},{default:n(()=>[a(b,{key:"name",props:e},{default:n(()=>[V(v(e.row.name),1)]),_:2},1032,["props"]),a(b,{key:"users",props:e},{default:n(()=>[V(v(e.row.users.length),1)]),_:2},1032,["props"]),a(b,{key:"created_at",props:e},{default:n(()=>[V(v(e.row.created_at),1)]),_:2},1032,["props"]),a(b,{key:"actions",props:e},{default:n(()=>[a(N,{color:"blue",name:"edit",onClick:j=>M(e.row),style:{cursor:"pointer"},size:"20px",class:"q-mr-md"},null,8,["onClick"]),a(N,{color:"red",name:"delete",onClick:j=>L(e.row),style:{cursor:"pointer"},size:"20px"},null,8,["onClick"])]),_:2},1032,["props"])]),_:2},1032,["props"])]),"top-right":n(()=>[a(U,{borderless:"",dense:"",outlined:"",rounded:"",debounce:"300",modelValue:w.value,"onUpdate:modelValue":r[0]||(r[0]=e=>w.value=e),placeholder:"Search",class:"q-mr-md"},{append:n(()=>[a(N,{name:"search"})]),_:1},8,["modelValue"]),a(g,{onClick:F,round:"",dense:"",color:"primary",size:"small",icon:"add"}),a(g,{dense:"",flat:"",color:"primary","icon-right":"archive",label:"Export",class:"q-ml-sm","no-caps":"",onClick:r[1]||(r[1]=e=>Y(c(A)))})]),_:1},8,["rows","columns","pagination","filter"])),a(ee,{modelValue:u.value,"onUpdate:modelValue":r[4]||(r[4]=e=>u.value=e),persistent:""},{default:n(()=>[a(se,{style:{width:"500px"}},{default:n(()=>[a(B,null,{default:n(()=>[q("div",pe,v(D.value),1)]),_:1}),a(B,{class:"q-pt-none"},{default:n(()=>[a(U,{outlined:"",dense:"",label:"Name",modelValue:o.value,"onUpdate:modelValue":r[3]||(r[3]=e=>o.value=e)},null,8,["modelValue"])]),_:1}),q("div",fe,[q("small",null,v(p.value),1)]),a(ae,{align:"right"},{default:n(()=>[a(g,{flat:"",label:"Cancel",color:"red",onClick:R}),a(re),o.value&&!_.value?(f(),x(g,{key:0,flat:"",label:"Add Department",color:"primary",onClick:O})):T("",!0),o.value&&_.value?(f(),x(g,{key:1,flat:"",label:"Edit Department",color:"primary",onClick:P})):T("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}};export{qe as default};
