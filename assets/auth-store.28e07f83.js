import{c5 as n,c6 as i}from"./index.45153cc6.js";import{b as a}from"./helpers.73a7253f.js";const r=async(s,e)=>(await fetch(`${a}/${e}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)})).json(),c=async(s,e)=>(await fetch(`${a}/${s}`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`}})).json(),l=n("auth",{state:()=>({user:i()}),actions:{saveUser(s){localStorage.setItem("auth_user",JSON.stringify(s))},removeUser(){localStorage.removeItem("auth_user")},async login(s){const e=await r(s,"login");return this.saveUser(e),this.user=e,e},async register(s){const e=await r(s,"register");return this.saveUser(e),this.user=e,e},async logout(){var s,e;if((s=this.user)!=null&&s.token){this.user=null;const t=await c("logout",(e=this.user)==null?void 0:e.token);if(this.removeUser(),t.status==="success")return t}else alert("Logout. There was an error")}}});export{l as u};
