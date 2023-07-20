import{Q as $}from"./QPage.cc72e21c.js";import{a as n,Q as r}from"./QCard.ad75a669.js";import{g as i}from"./get-css-var.23548d6a.js";import{u as y}from"./index.14e2de4d.js";import{u as w}from"./sale-store.5d6c452c.js";import{j as S,r as b,aQ as k,aI as p,a3 as q,bb as l,d as t,a6 as s,a5 as g,ac as u,P as h,u as d,a4 as v}from"./index.4cc15ae0.js";import{u as C}from"./account-store.ad923363.js";import"./use-dark.f889e447.js";import"./module_calls.421761b7.js";import"./helpers.73a7253f.js";const B={__name:"BarChart",setup(x){const o=w(),m=S({title:{text:"Sales Records for the last seven days",align:"left"},chart:{id:"apex-column"},colors:[i("primary"),i("secondary"),i("negative")],xaxis:{categories:[]},plotOptions:{bar:{horizontal:!1,columnWidth:"55%",endingShape:"rounded"}}}),f=b([{name:"Sales",data:[]}]);return y("sales",()=>o.fetchSevenDaysSales(),{onSuccess:_=>{m.xaxis.categories=_.map(c=>c.day),f.value[0].data=_.map(c=>c.sales)}}),(_,c)=>{const a=k("apexchart");return p(),q(n,{class:"q-pa-sm"},{default:l(()=>[t(a,{height:"300",type:"bar",options:m,series:f.value},null,8,["options","series"])]),_:1})}}},P={__name:"PieChart",setup(x){const o=C();y("product_sales",()=>o.fetchProductSales(),{onSuccess:_=>{f.value=_.map(c=>c.quantity),m.labels=_.map(c=>c.name)}});const m=S({title:{text:"Todays Product Sales",align:"left"},chart:{id:"apex-donut"},colors:[i("secondary"),i("accent"),i("positive"),i("primary"),i("negative"),i("info")],markers:{size:4,hover:{sizeOffset:6}},labels:[]}),f=b([]);return(_,c)=>{const a=k("apexchart");return p(),q(n,null,{default:l(()=>[t(r,null,{default:l(()=>[t(a,{height:"300",type:"pie",options:m,series:f.value},null,8,["options","series"])]),_:1})]),_:1})}}},Q={class:"row q-col-gutter-sm q-ml-xs q-mr-sm q-py-sm"},N={class:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},T={class:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},V={__name:"Main",setup(x){return(o,m)=>(p(),q($,null,{default:l(()=>[s("div",Q,[s("div",N,[t(B)]),s("div",T,[t(P)])])]),_:1}))}},z={class:"row q-col-gutter-sm q-ml-xs q-mr-sm q-py-sm"},A={class:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},D=s("div",{class:"text-center q-pa-sm"},[s("b",null,"Today Sales")],-1),M=s("hr",null,null,-1),O={class:"row q-pa-sm"},j={class:"q-pa-xs col-xs-12 col-sm-6 col-md-6"},E=s("hr",null,null,-1),I={class:"q-ma-sm"},R={class:"q-pa-xs col-xs-12 col-sm-6 col-md-6"},W=s("hr",null,null,-1),F={class:"q-ma-sm"},G={class:"q-pa-xs col-xs-12 col-sm-6 col-md-6"},H=s("hr",null,null,-1),J={class:"q-ma-sm"},K={key:0,class:"q-pa-xs col-xs-12 col-sm-6 col-md-6"},L=s("hr",null,null,-1),U={class:"q-ma-sm"},X={class:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},Y=s("div",{class:"text-center q-pa-sm"},[s("b",null,"All Sales")],-1),Z=s("hr",null,null,-1),ss={class:"row q-pa-sm"},as={class:"q-pa-xs col-xs-12 col-sm-6 col-md-6"},ts=s("hr",null,null,-1),es={class:"q-ma-sm"},ls={class:"q-pa-xs col-xs-12 col-sm-6 col-md-6"},os=s("hr",null,null,-1),cs={class:"q-ma-sm"},_s={class:"q-pa-xs col-xs-12 col-sm-6 col-md-6"},ns=s("hr",null,null,-1),ds={class:"q-ma-sm"},rs={key:0,class:"q-pa-xs col-xs-12 col-sm-6 col-md-6"},is=s("hr",null,null,-1),ms={class:"q-ma-sm"},us={__name:"Stats",setup(x){const o=C();return y("account_stats_today",()=>o.fetchTodaySalesStats()),y("account_stats_all",()=>o.fetchAllSalesStats()),(m,f)=>(p(),g("div",z,[s("div",A,[t(n,null,{default:l(()=>{var _,c;return[D,M,s("div",O,[s("div",j,[t(n,{dark:"",class:"bg-primary"},{default:l(()=>[t(r,{class:"text-center"},{default:l(()=>{var a,e;return[u(" Total Sales "),E,s("h5",I,h((e=(a=d(o))==null?void 0:a.today_sales_data[0])==null?void 0:e.total_daily_sales),1)]}),_:1})]),_:1})]),s("div",R,[t(n,{dark:"",class:"bg-info"},{default:l(()=>[t(r,{class:"text-center"},{default:l(()=>{var a,e;return[u(" Cash Sales "),W,s("h5",F,h((e=(a=d(o))==null?void 0:a.today_sales_data[1])==null?void 0:e.total_daily_cash_sales),1)]}),_:1})]),_:1})]),s("div",G,[t(n,{dark:"",class:"bg-warning"},{default:l(()=>[t(r,{class:"text-center"},{default:l(()=>{var a,e;return[u(" Mpesa Sales "),H,s("h5",J,h((e=(a=d(o))==null?void 0:a.today_sales_data[2])==null?void 0:e.total_daily_mpesa_sales),1)]}),_:1})]),_:1})]),((c=(_=d(o))==null?void 0:_.today_sales_data[3])==null?void 0:c.total_daily_pending_sales)>0?(p(),g("div",K,[t(n,{dark:"",style:{"background-color":"red"}},{default:l(()=>[t(r,{class:"text-center"},{default:l(()=>{var a,e;return[u(" Number of Pending Bills "),L,s("h5",U,h((e=(a=d(o))==null?void 0:a.today_sales_data[3])==null?void 0:e.total_daily_pending_sales),1)]}),_:1})]),_:1})])):v("",!0)])]}),_:1})]),s("div",X,[t(n,null,{default:l(()=>{var _,c;return[Y,Z,s("div",ss,[s("div",as,[t(n,{dark:"",class:"bg-primary"},{default:l(()=>[t(r,{class:"text-center"},{default:l(()=>{var a,e;return[u(" Total Sales "),ts,s("h5",es,h((e=(a=d(o))==null?void 0:a.all_sales_data[0])==null?void 0:e.total_sales),1)]}),_:1})]),_:1})]),s("div",ls,[t(n,{dark:"",class:"bg-info"},{default:l(()=>[t(r,{class:"text-center"},{default:l(()=>{var a,e;return[u(" Cash Sales "),os,s("h5",cs,h((e=(a=d(o))==null?void 0:a.all_sales_data[1])==null?void 0:e.total_cash_sales),1)]}),_:1})]),_:1})]),s("div",_s,[t(n,{dark:"",class:"bg-warning"},{default:l(()=>[t(r,{class:"text-center"},{default:l(()=>{var a,e;return[u(" Mpesa Sales "),ns,s("h5",ds,h((e=(a=d(o))==null?void 0:a.all_sales_data[2])==null?void 0:e.total_mpesa_sales),1)]}),_:1})]),_:1})]),((c=(_=d(o))==null?void 0:_.all_sales_data[3])==null?void 0:c.total_pending_sales)>0?(p(),g("div",rs,[t(n,{dark:"",style:{"background-color":"red"}},{default:l(()=>[t(r,{class:"text-center"},{default:l(()=>{var a,e;return[u(" Number of Pending Bills "),is,s("h5",ms,h((e=(a=d(o))==null?void 0:a.all_sales_data[3])==null?void 0:e.total_pending_sales),1)]}),_:1})]),_:1})])):v("",!0)])]}),_:1})])]))}},hs={class:"q-pa-sm"},Cs={__name:"Dashboard",setup(x){return(o,m)=>(p(),g("div",hs,[t(us),t(V)]))}};export{Cs as default};
