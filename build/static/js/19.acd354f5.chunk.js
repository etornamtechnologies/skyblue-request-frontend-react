(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[19],{1024:function(e,t,a){"use strict";a.r(t);var n=a(4),c=a.n(n),s=a(275),r=a(265),l=a(0),i=a.n(l),o=a(122),d=a(9);var O=a(8),j=a(290),R=a(595),E=a(596),u=a(1020),p=a(14),b=function(e){var t=e.title,a=e.value;return Object(p.jsx)(u.a,{title:t,bordered:!1,children:Object(p.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"row",alignItems:"flex-end",justifyContent:"flex-end"},children:Object(p.jsx)("div",{style:{},children:Object(p.jsx)("span",{style:{fontWeight:"bold",fontSize:"30px",color:"#7e8082"},children:a})})})})},x=(a(1006),a(418),function(e){var t=e.data,a=t.countOfRequestPerCurrentMonth,n=t.countOfGRNForToday,c=(t.costPerDepartmentForCurrentMonth,t.approvedNumberRequestItemsAndUserDepartmentToday,t.countPaymentsMadeToday);t.requestPerCategoryForToday;return Object(p.jsxs)(i.a.Fragment,{children:[Object(p.jsx)(R.a,{children:Object(p.jsx)(E.a,{md:24,children:Object(p.jsx)("span",{className:"bs-page-title",children:"Dashboard"})})}),Object(p.jsx)(R.a,{children:Object(p.jsxs)(E.a,{md:24,children:[Object(p.jsxs)(R.a,{gutter:12,children:[Object(p.jsx)(E.a,{md:6,children:Object(p.jsx)(b,{title:"Number of requests this month",value:a})}),Object(p.jsx)(E.a,{md:6,children:Object(p.jsx)(b,{title:"Payments due in a week",value:a})}),Object(p.jsx)(E.a,{md:6,children:Object(p.jsx)(b,{title:"Payments made today",value:c})}),Object(p.jsx)(E.a,{md:6,children:Object(p.jsx)(b,{title:"GRN for today",value:n})})]}),Object(p.jsx)(R.a,{gutter:12,children:Object(p.jsx)(E.a,{md:12})})]})})]})});t.default=function(e){var t=i.a.useState({}),a=Object(r.a)(t,2),n=a[0],l=a[1],R=i.a.useState(!1),E=Object(r.a)(R,2),u=E[0],b=E[1],h=function(){var e=Object(s.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.prev=1,e.next=4,Object(d.a)({url:"/dashboard/data",method:"GET"});case 4:"OK"===(t=e.sent).status?(a=t.data,l(a)):Object(O.a)("error","Get Dashboard",t.message),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),Object(O.a)("error","get dashboard data","Failed!");case 11:b(!1);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();return i.a.useEffect((function(){h()}),[]),Object(p.jsx)(i.a.Fragment,{children:Object(p.jsx)(j.a,{children:u?Object(p.jsx)(o.a,{}):Object(p.jsx)(x,{data:n})})})}},266:function(e,t,a){"use strict";a.d(t,"e",(function(){return n})),a.d(t,"a",(function(){return c})),a.d(t,"d",(function(){return s})),a.d(t,"c",(function(){return r})),a.d(t,"b",(function(){return l}));var n=[{id:"ROLE_REGULAR",label:"REGULAR"},{id:"ROLE_HOD",label:"HOD"},{id:"ROLE_GENERAL_MANAGER",label:"GENERAL MANAGER"},{id:"ROLE_PROCUREMENT_OFFICER",label:"PROCUREMENT OFFICER"},{id:"ROLE_STORE_OFFICER",label:"STORE OFFICER"},{id:"ROLE_ACCOUNT_OFFICER",label:"ACCOUNT OFFICER"},{id:"ROLE_CHIEF_ACCOUNT_OFFICER",label:"CHIEF ACCOUNT OFFICER"},{id:"ROLE_ADMIN",label:"ADMINISTRATOR"},{id:"ROLE_AUDITOR",label:"AUDITOR"}],c={ROLE_REGULAR:"ROLE_REGULAR",ROLE_HOD:"ROLE_HOD",ROLE_GENERAL_MANAGER:"ROLE_GENERAL_MANAGER",ROLE_PROCUREMENT_OFFICER:"ROLE_PROCUREMENT_OFFICER",ROLE_STORE_OFFICER:"ROLE_STORE_OFFICER",ROLE_ACCOUNT_OFFICER:"ROLE_ACCOUNT_OFFICER",ROLE_CHIEF_ACCOUNT_OFFICER:"ROLE_CHIEF_ACCOUNT_OFFICER",ROLE_ADMIN:"ROLE_ADMIN",ROLE_AUDITOR:"ROLE_AUDITOR"},s=[{id:"SERVICE_REQUEST",label:"SERVICE_REQUEST"},{id:"GOODS_REQUEST",label:"GOODS_REQUEST"},{id:"PROJECT_AND_WORKS",label:"PROJECT_AND_WORKS"}],r=[{id:"Replace",label:"REPLACE"},{id:"Restock",label:"RESTOCK"},{id:"FreshNeed",label:"FRESH-NEED"}],l=[{id:"CASH",label:"CASH"},{id:"CHEQUE",label:"CHEQUE"},{id:"MOBILE-MONEY",label:"MOBILE MONEY"},{id:"VISA",label:"VISA"},{id:"BANK-TRANSFER",label:"BANK TRANSFER"}]},270:function(e,t,a){"use strict";a.d(t,"d",(function(){return c})),a.d(t,"a",(function(){return s})),a.d(t,"e",(function(){return r})),a.d(t,"b",(function(){return l})),a.d(t,"c",(function(){return i}));var n=a(266),c=[{title:"ID",dataIndex:"id",key:"id"},{title:"NAME",dataIndex:"name",key:"name"},{title:"REASON",dataIndex:"reason",key:"reason"},{title:"PURPOSE",dataIndex:"purpose",key:"purpose"},{title:"QUANTITY",dataIndex:"quantity",key:"quantity"},{title:"STATUS",dataIndex:"status",key:"status"}],s=[{title:"ID",dataIndex:"id",key:"id"},{title:"NAME",dataIndex:"name",key:"name"},{title:"DESCRIPTION",dataIndex:"description",key:"description"}],r=[{title:"Name",dataIndex:"name",key:"name"},{title:"Email",dataIndex:"email",key:"email"},{title:"Phone Number",dataIndex:"phone_no",key:"phone_no"},{title:"Location",dataIndex:"location",key:"location"},{title:"Bank",dataIndex:"bank",key:"bank"},{title:"Account Number",dataIndex:"accountNumber",key:"accountNumber"},{title:"DESCRIPTION",dataIndex:"description",key:"description"}],l=[{title:"Name",dataIndex:"fullName",key:"name"},{title:"Email",dataIndex:"email",key:"email"},{title:"Phone Number",dataIndex:"phoneNo",key:"phoneNo"},{title:"Department",dataIndex:"department",key:"department",render:function(e){return e.name}},{title:"Role",dataIndex:"role",key:"role",render:function(e){return e[0]}}],i={dashboardRoles:[n.a.ROLE_ADMIN,n.a.ROLE_GENERAL_MANAGER,n.a.ROLE_PROCUREMENT_OFFICER],createUserRoles:[n.a.ROLE_ADMIN],listUserRoles:[n.a.ROLE_ADMIN],editUserRoles:[n.a.ROLE_ADMIN],deleteUserRoles:[n.a.ROLE_ADMIN],listDepartmentsRoles:[n.a.ROLE_ADMIN],editDepartmentRoles:[n.a.ROLE_ADMIN],createDepartmentRoles:[n.a.ROLE_ADMIN],deleteDepartmentRoles:[n.a.ROLE_ADMIN],listSupplierRoles:[n.a.ROLE_ADMIN,n.a.ROLE_PROCUREMENT_OFFICER,n.a.ROLE_GENERAL_MANAGER],editSupplierRoles:[n.a.ROLE_ADMIN,n.a.ROLE_PROCUREMENT_OFFICER],createSupplierRoles:[n.a.ROLE_ADMIN,n.a.ROLE_PROCUREMENT_OFFICER],deleteSupplierRoles:[n.a.ROLE_ADMIN],ROLE_HODEndorseRoles:[n.a.ROLE_ADMIN,n.a.ROLE_HOD],generalManagerApproveRoles:[n.a.ROLE_ADMIN,n.a.ROLE_GENERAL_MANAGER],procurementOfficerApproveRoles:[n.a.ROLE_ADMIN,n.a.ROLE_PROCUREMENT_OFFICER],paymentListRoles:[n.a.ROLE_ADMIN,n.a.ROLE_GENERAL_MANAGER],createPaymentRoles:[n.a.ROLE_ADMIN,n.a.ROLE_PROCUREMENT_OFFICER],listQuotationRoles:[n.a.ROLE_PROCUREMENT_OFFICER,n.a.ROLE_ADMIN,n.a.ROLE_GENERAL_MANAGER],requestMenu:[n.a.ROLE_ADMIN,n.a.ROLE_GENERAL_MANAGER,n.a.ROLE_HOD],report:[n.a.ROLE_GENERAL_MANAGER,n.a.ROLE_AUDITOR]}},286:function(e,t,a){},290:function(e,t,a){"use strict";var n=a(1),c=a(56),s=a(265),r=a(0),l=a.n(r),i=a(1015),o=a(294),d=a(295),O=(a(286),a(65)),j=a(1032),R=a(1033),E=a(1034),u=a(1035),p=a(1036),b=a(1037),x=a(1038),h=a(1039),m=a(1040),I=a(1041),_=a(1042),N=a(1043),A=a(1044),L=a(1031),C=a(35),f=a(300),y=a(25),M=a(270),F=a(266),g=a(14),D=function(e){var t=l.a.useState(!1),a=Object(s.a)(t,2),n=a[0],c=a[1],r=i.a.Header,D=i.a.Sider,T=i.a.Content,S=i.a.Footer,U=Object(C.h)(),k=e.currentUser,v=Object(g.jsx)(o.a,{onClick:function(){console.log("menu click")},children:Object(g.jsx)(o.a.Item,{icon:Object(g.jsx)(j.a,{}),onClick:function(){return O.b()},children:"Logout"},"1")});return Object(g.jsxs)(i.a,{className:"bs-layout",children:[Object(g.jsxs)(D,{trigger:null,collapsible:!0,collapsed:n,children:[Object(g.jsxs)("div",{style:{color:"#fff",padding:"10px 0px 10px 20px",marginBottom:10,borderBottom:"1px #fff solid"},children:[Object(g.jsx)("img",{width:"30",height:"40",src:"https://www.blueskies.com/wp-content/uploads/2017/10/logo-01.png",alt:"",loading:"eager"}),Object(g.jsx)("span",{children:"Blueskies"})]}),Object(g.jsxs)(o.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["/app"],selectedKeys:[U.pathname],children:[Object(g.jsx)(o.a.Item,{children:Object(g.jsxs)(f.a,{to:"/app",children:[Object(g.jsx)(R.a,{}),Object(g.jsx)("span",{children:"Home"})]})},"/app"),O.c(k.role,M.c.dashboardRoles)&&Object(g.jsx)(o.a.Item,{children:Object(g.jsxs)(f.a,{to:"/app/dashboard",children:[Object(g.jsx)(E.a,{}),Object(g.jsx)("span",{children:"Dashboard"})]})},"/app/dashboard"),Object(g.jsx)(o.a.Item,{children:Object(g.jsxs)(f.a,{to:"/app/my-requests",children:[Object(g.jsx)(E.a,{}),Object(g.jsx)("span",{children:"My Requests"})]})},"/app/my-requests"),O.c(k.role,M.c.requestMenu)&&Object(g.jsxs)(o.a.SubMenu,{icon:Object(g.jsx)(u.a,{}),title:"Request Mgmt",children:[O.c(k.role,[F.a.ROLE_HOD])&&Object(g.jsx)(o.a.Item,{children:Object(g.jsx)(f.a,{to:"/app/requests/endorse",children:Object(g.jsx)("span",{children:"Endorse"})})},"/app/requests/endorse"),O.c(k.role,[F.a.ROLE_GENERAL_MANAGER])&&Object(g.jsx)(o.a.Item,{children:Object(g.jsx)(f.a,{to:"/app/requests/approve",children:Object(g.jsx)("span",{children:"Approve"})})},"/app/requests/approve")]},"/app/requests"),O.c(k.role,[F.a.ROLE_PROCUREMENT_OFFICER])&&Object(g.jsxs)(o.a.SubMenu,{icon:Object(g.jsx)(p.a,{}),title:"Procurement",children:[Object(g.jsx)(o.a.Item,{children:Object(g.jsx)(f.a,{to:"".concat(y.g,"/suppliers"),children:"Suppliers"})},"".concat(y.g,"/suppliers")),Object(g.jsx)(o.a.Item,{children:Object(g.jsx)(f.a,{to:"".concat(y.g,"/assign-suppliers"),children:"Assign Supplier"})},"".concat(y.g,"/assign-suppliers")),Object(g.jsx)(o.a.Item,{children:Object(g.jsx)(f.a,{to:"".concat(y.g,"/attach-document"),children:"Add Document"})},"".concat(y.g,"/attach-document")),Object(g.jsx)(o.a.Item,{children:Object(g.jsx)(f.a,{to:"".concat(y.g,"/local-purchase-orders"),children:"Local Purchase Orders"})},"".concat(y.g,"/local-purchase-orders")),Object(g.jsx)(o.a.Item,{children:Object(g.jsx)(f.a,{to:"".concat(y.g,"/add-local-purchase-order"),children:"Create LPO"})},"".concat(y.g,"/add-local-purchase-order")),Object(g.jsx)(o.a.Item,{children:Object(g.jsx)(f.a,{to:"".concat(y.g,"/request-categories"),children:"Request Categories"})},"".concat(y.g,"/request-categories"))]},y.g),O.c(k.role,[F.a.ROLE_STORE_OFFICER])&&Object(g.jsxs)(o.a.SubMenu,{title:"Store",icon:Object(g.jsx)(b.a,{}),children:[Object(g.jsx)(o.a.Item,{children:Object(g.jsx)(f.a,{to:"/app/stores/local-purchase-orders",children:"Local Purchase Orders"})},"/app/stores/local-purchase-orders"),Object(g.jsx)(o.a.Item,{children:Object(g.jsx)(f.a,{to:"/app/stores/receive-items",children:"Receive Goods"})},"/app/stores/receive-items")]},"/app/stores"),O.c(k.role,[F.a.ROLE_ACCOUNT_OFFICER,F.a.ROLE_CHIEF_ACCOUNT_OFFICER])&&Object(g.jsxs)(o.a.SubMenu,{title:"Payments",icon:Object(g.jsx)(x.a,{}),children:[Object(g.jsx)(o.a.Item,{children:Object(g.jsx)(f.a,{to:"/app/account/goods-receive-notes",children:"Goods Receive Notes"})},"/app/account/goods-receive-notes"),Object(g.jsx)(o.a.Item,{children:Object(g.jsx)(f.a,{to:"/app/account/payments",children:"Payments"})},"/app/account/payments"),Object(g.jsx)(o.a.Item,{children:Object(g.jsx)(f.a,{to:"/app/account/add-payment",children:"Make Payment"})},"/app/account/add-payment")]},"/app/account"),O.c(k.role,M.c.listDepartmentsRoles)&&Object(g.jsx)(o.a.Item,{children:Object(g.jsxs)(f.a,{to:"/app/departments",children:[Object(g.jsx)(h.a,{}),Object(g.jsx)("span",{children:"Departments"})]})},"/app/departments"),O.c(k.role,M.c.listUserRoles)&&Object(g.jsx)(o.a.Item,{children:Object(g.jsxs)(f.a,{to:"/app/employees",children:[Object(g.jsx)(m.a,{}),Object(g.jsx)("span",{children:"User Management"})]})},"/app/employees"),Object(g.jsx)(o.a.Item,{icon:Object(g.jsx)(I.a,{}),children:Object(g.jsx)(f.a,{to:"/app/settings",children:Object(g.jsx)("span",{children:"Settings"})})},"/app/settings"),O.c(k.role,M.c.report)&&Object(g.jsx)(o.a.Item,{icon:Object(g.jsx)(_.a,{}),children:Object(g.jsx)(f.a,{to:"/app/reports",children:Object(g.jsx)("span",{children:"Reports"})})},"/app/reports"),Object(g.jsx)(o.a.Item,{icon:Object(g.jsx)(j.a,{}),danger:!0,onClick:function(){O.b()},children:"Logout"},"11")]})]}),Object(g.jsxs)(i.a,{className:"bs-site-layout",children:[Object(g.jsxs)(r,{className:"bs-site-layout-background",style:{padding:0},children:[l.a.createElement(n?N.a:A.a,{className:"bs-trigger",onClick:function(){c(!n)}}),Object(g.jsx)("div",{style:{float:"right",marginRight:10,display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",cursor:"pointer",height:"100%"},children:Object(g.jsx)(d.a.Button,{overlay:v,placement:"bottomLeft",icon:Object(g.jsx)(L.a,{}),children:k.fullName})})]}),Object(g.jsx)(T,{className:"bs-site-layout-content",style:{margin:"24px 16px",padding:10,minHeight:380},children:e.children}),Object(g.jsx)(S,{style:{textAlign:"center"},children:"Blueskies Procurment Application \xa92018 Created by Tech-Bridge"})]})]})};t.a=Object(c.b)((function(e){return{currentUser:e.auth.user}}),null)((function(e){return Object(g.jsx)(D,Object(n.a)({},e))}))},418:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return r}));var n=a(428),c=a.n(n);function s(e){return c.a(e,"ddd mmm dd yyyy HH:MM")}function r(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}}}]);
//# sourceMappingURL=19.acd354f5.chunk.js.map