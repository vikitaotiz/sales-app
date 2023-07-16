import{Q as y,a as P,e as j,b as G}from"./excel.c4e68fad.js";import{r as i,aI as c,a5 as w,u,P as m,a3 as C,bb as s,b as H,d as t,ac as R,bV as x,c3 as f,a6 as V,a4 as A}from"./index.45153cc6.js";import{Q as D}from"./QInput.ab909322.js";import{Q as J,a as K,p as W,c as X,d as Y}from"./paginations.c737fe8f.js";import{a as Z,Q as T}from"./QCard.f00deb23.js";import{a as ee}from"./uid.86e7d13e.js";import{a as ae,u as te}from"./index.830cf3e9.js";import{u as le}from"./role-store.f6c27634.js";import"./use-dark.0d0b0ba9.js";import"./QSeparator.a467f888.js";import"./rtl.0b6f6848.js";import"./module_calls.421761b7.js";import"./helpers.73a7253f.js";const $=[{name:"name",required:!0,label:"Name",align:"left",field:v=>v.name,format:v=>`${v}`,sortable:!0},{name:"users",align:"center",label:"Users",field:"users",sortable:!0},{name:"created_at",align:"center",label:"Created On",field:"created_at",sortable:!0},{name:"actions",align:"center",label:"Actions",field:"created_at"}];const se={class:"q-pa-md"},oe={key:0},re={key:1},ne={class:"text-h6"},ie={class:"text-center error_msg"},Qe={__name:"Roles",setup(v){const N=ee(),b=ae(),_=le(),h=W(10),n=i(!1),p=i(!1),k=i(""),g=i(""),o=i(""),Q=i(""),d=i(""),{data:q,isLoading:S,isError:E}=te("roles",()=>_.fetchRoles()),U=async a=>{if(confirm(`Continue with the operation. Delete ${a.name} ?`)){const e=await _.deleteRole({uuid:a.uuid});e.status==="success"?(b.refetchQueries("roles"),r(e.message,"green","top")):r("There was an error","red","top-right")}},B=()=>{g.value="Add New Role",n.value=!0,p.value=!1},z=a=>{p.value=!0,g.value=`Edit ${a.name}`,o.value=a.name,Q.value=a.uuid,n.value=!0},I=async()=>{if(d.value="",o.value.trim()){const a=await _.createRole({name:o.value.trim()});a.status==="success"?(b.refetchQueries("roles"),o.value="",n.value=!1,r(a.message,"green","top")):(d.value=a.message,r(a.message,"red","top-right"))}else d.value="Name is required!",r("Name is required!","red","top-right")},L=async()=>{const a={name:o.value.trim(),uuid:Q.value};if(a.name){const l=await _.updateRole(a);l.status==="success"?(b.refetchQueries("roles"),o.value="",n.value=!1,p.value=!1,g.value="",r(l.message,"green","top")):r("There was an error","red","top-right")}else d.value="Name is required!",r("Name is required!","red","top-right")},F=()=>{n.value=!1,o.value="",Q.value="",d.value=""},r=(a,l,e)=>{N.notify({message:a,color:l,position:e})},M=a=>{const l=a.map(e=>({name:e.name,users:e.users.length,created_at:e.created_at}));j(l,$,G,N,"RolesData")};return(a,l)=>(c(),w("div",se,[u(S)?(c(),w("div",oe,"Loading roles...")):u(E)?(c(),w("div",re,"An error has occurred: "+m(u(E)),1)):(c(),C(J,{key:2,title:"Roles",rows:u(q),columns:u($),pagination:u(h),"onUpdate:pagination":l[2]||(l[2]=e=>H(h)?h.value=e:null),separator:"cell","row-key":"name",filter:k.value,dense:""},{body:s(e=>[t(P,{props:e},{default:s(()=>[t(y,{key:"name",props:e},{default:s(()=>[R(m(e.row.name),1)]),_:2},1032,["props"]),t(y,{key:"users",props:e},{default:s(()=>[R(m(e.row.users.length),1)]),_:2},1032,["props"]),t(y,{key:"created_at",props:e},{default:s(()=>[R(m(e.row.created_at),1)]),_:2},1032,["props"]),t(y,{key:"actions",props:e},{default:s(()=>[t(x,{color:"blue",name:"edit",onClick:O=>z(e.row),style:{cursor:"pointer"},size:"20px",class:"q-mr-md"},null,8,["onClick"]),t(x,{color:"red",name:"delete",onClick:O=>U(e.row),style:{cursor:"pointer"},size:"20px"},null,8,["onClick"])]),_:2},1032,["props"])]),_:2},1032,["props"])]),"top-right":s(()=>[t(D,{borderless:"",dense:"",outlined:"",rounded:"",debounce:"300",modelValue:k.value,"onUpdate:modelValue":l[0]||(l[0]=e=>k.value=e),placeholder:"Search",class:"q-mr-md"},{append:s(()=>[t(x,{name:"search"})]),_:1},8,["modelValue"]),t(f,{onClick:B,round:"",dense:"",color:"primary",size:"small",icon:"add"}),t(f,{dense:"",flat:"",color:"primary","icon-right":"archive",label:"Export",class:"q-ml-sm","no-caps":"",onClick:l[1]||(l[1]=e=>M(u(q)))})]),_:1},8,["rows","columns","pagination","filter"])),t(K,{modelValue:n.value,"onUpdate:modelValue":l[4]||(l[4]=e=>n.value=e),persistent:""},{default:s(()=>[t(Z,{style:{width:"500px"}},{default:s(()=>[t(T,null,{default:s(()=>[V("div",ne,m(g.value),1)]),_:1}),t(T,{class:"q-pt-none"},{default:s(()=>[t(D,{outlined:"",dense:"",label:"Name",modelValue:o.value,"onUpdate:modelValue":l[3]||(l[3]=e=>o.value=e)},null,8,["modelValue"])]),_:1}),V("div",ie,[V("small",null,m(d.value),1)]),t(X,{align:"right"},{default:s(()=>[t(f,{flat:"",label:"Cancel",color:"red",onClick:F}),t(Y),o.value&&!p.value?(c(),C(f,{key:0,flat:"",label:"Add Role",color:"primary",onClick:I})):A("",!0),o.value&&p.value?(c(),C(f,{key:1,flat:"",label:"Edit Role",color:"primary",onClick:L})):A("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}};export{Qe as default};
