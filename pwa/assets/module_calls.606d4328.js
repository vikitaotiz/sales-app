import{b as o,f as r}from"./helpers.22d5b68c.js";const i=async(a,s)=>{const t=await fetch(`${o}/${a}`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`}});return r(t.status),t.json()},d=async(a,s,t)=>{const e=await fetch(`${o}/${s}`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify(a)});return r(e.status),e.json()};export{i as g,d as p};
