import{b$ as s,b_ as c}from"./index.cc8e0a4c.js";import{g as n,p as o}from"./module_calls.421761b7.js";const i=[{name:"name",required:!0,label:"Name",align:"left",field:e=>e.name,format:e=>`${e}`,sortable:!0},{name:"category",align:"center",label:"Category",field:"category",sortable:!0},{name:"user",align:"center",label:"Created By",field:"user",sortable:!0},{name:"created_at",align:"center",label:"Created On",field:"created_at",sortable:!0},{name:"actions",align:"center",label:"Actions",field:"created_at"}],r=s(),t=r==null?void 0:r.token,m=c("products",{state:()=>({products:[]}),actions:{async fetchProducts(){if(t){const e=await n("products",t);return this.products=e==null?void 0:e.data,this.products}},async createProduct(e){var a;if(e.uuid=(a=r==null?void 0:r.user)==null?void 0:a.uuid,t)return await o(e,"products",t)},async updateProduct(e){if(t)return await o(e,"update_product",t)},async deleteProduct(e){if(t)return await o(e,"delete_product",t)}}});export{i as p,m as u};
