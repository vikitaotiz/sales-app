const a="https://jbee.missnadhifu.com/laravel/public/api/v1",s=e=>{e===500&&(localStorage.removeItem("auth_user"),window.location.reload(!0))},i={url:"/",print_header:`
    <div style="text-align: center;">
    <b>JBEE LOUNGE AND BAR</b>
    <p>Phone : 0712345678</p>
    <p>ELDORET</p>
    </div>
`},n=e=>!!(e.length>0&&(e.some(t=>t.name==="Admin")||e.some(t=>t.name==="Cashier")));export{i as a,a as b,s as f,n as h};
