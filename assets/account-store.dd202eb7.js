import{c9 as r,c8 as l}from"./index.248bff09.js";import{g as c,p as o}from"./module_calls.421761b7.js";const a=r(),t=a==null?void 0:a.token,_=l("accounts",{state:()=>({today_sales_data:[],all_sales_data:[],product_sales:[]}),actions:{async fetchSalesExpense(){if(t){const s=await c("sales_expense",t);return s==null?void 0:s.data}},async fetchTodaySalesStats(){if(t){const s=await c("sales_stats",t);return this.today_sales_data=s,this.today_sales_data}},async fetchAllSalesStats(){if(t){const s=await c("all_sales_stats",t);return this.all_sales_data=s,this.all_sales_data}},async fetchProductSales(){if(t){const s=await c("product_sales",t);return this.product_sales=s,this.product_sales}},async fetchAccounts(){if(t){const s=await c("accounts",t);return this.roles=s==null?void 0:s.data,this.roles}},async createAccount(s){var e;if(s.user_uuid=(e=a==null?void 0:a.user)==null?void 0:e.uuid,t)return await o(s,"accounts",t)},async updateAccount(s){var e;if(s.user_uuid=(e=a==null?void 0:a.user)==null?void 0:e.uuid,t)return await o(s,"update_accounts",t)}}});export{_ as u};
