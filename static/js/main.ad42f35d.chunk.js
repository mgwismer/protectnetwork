(this.webpackJsonpprotectnetwork=this.webpackJsonpprotectnetwork||[]).push([[0],{30:function(e,t,a){e.exports=a.p+"static/media/proshield.5cfe51d5.png"},31:function(e,t,a){e.exports=a(49)},36:function(e,t,a){},41:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n,c=a(0),l=a.n(c),r=a(13),o=a.n(r),s=(a(36),a(6)),u=a(4),i=a(10),m=a(5),b=a(16),E=a(3),d=a(14);!function(e){e.ADD_RESIDENT="ADD_RESIDENT",e.UPDATE_RESIDENT="UPDATE_RESIDENT",e.DELETE_RESIDENT="DELETE_RESIDENT",e.ADD_CONTACT="ADD_CONTACT",e.UPDATE_CONTACT="UPDATE_CONTACT",e.DELETE_CONTACT="DELETE_CONTACT",e.ADD_CONTACT_TO_RESIDENT="ADD_CONTACT_TO_RESIDENT",e.ADD_CONTACT_TO_CONTACT="ADD_CONTACT_TO_CONTACT",e.CREATE_USER="CREATE_USER",e.MAKE_USER_ACTIVE="MAKE_USER_ACTIVE",e.MAKE_USER_INACTIVE="MAKE_USER_INACTIVE"}(n||(n={}));var p={residents:[],users:{},listOfUsers:[],activeUser:""};a(41);var v=Object(m.b)((function(e){return console.log("state",e),{residents:e.residents,contacts:e.users}}))((function(e){var t=e.residents,a=e.contacts;return l.a.createElement("div",null,l.a.createElement("div",{className:"frontpage-buttons"},l.a.createElement("button",{className:"frontpage-buttons__create"},l.a.createElement(s.b,{to:"/NewResident",style:{color:"black",textDecoration:"none",border:"0px"}},l.a.createElement("div",null,"Create New Resident"))),l.a.createElement("button",{className:"frontpage-buttons__create"},l.a.createElement(s.b,{to:"/Signup",style:{color:"black",textDecoration:"none",border:"0px"}},l.a.createElement("div",null,"Create New User"))),!!t.length&&!!a.length&&l.a.createElement("button",{className:"frontpage-buttons__add"},l.a.createElement(s.b,{to:"/ExistingResident",style:{color:"black",textDecoration:"none",border:"0px"}},"Add for existing Resident")),Object.keys(a).length>1&&l.a.createElement("button",{className:"frontpage-buttons__add"},l.a.createElement(s.b,{to:"/AddContactToContact",style:{color:"black",textDecoration:"none",border:"0px"}},"Add Contact to Contact"))),l.a.createElement("div",{className:"frontpage-footer"},"MVP created as part of",l.a.createElement("br",null),l.a.createElement("a",{href:"https://covid19challenge.mit.edu/beat-the-pandemic-2/"},"MIT Beat the Pandemic II hackathon"),l.a.createElement("br",null),"Track G"))})),O=a(1);a(43);function f(e,t){return{type:n.ADD_CONTACT,data:{activeUser:e,listOfContacts:t}}}function C(e){return console.log("make active user called"),{type:n.MAKE_USER_ACTIVE,data:e}}function j(){return{type:n.MAKE_USER_INACTIVE}}function g(e,t){return{type:n.CREATE_USER,data:{username:e,user:t}}}var N=function(){var e=Object(c.useState)(""),t=Object(O.a)(e,2),a=t[0],r=t[1],o=Object(c.useState)(""),u=Object(O.a)(o,2),i=u[0],m=u[1],b=Object(c.useState)(""),E=Object(O.a)(b,2),d=E[0],p=E[1],v=Object(c.useState)(""),f=Object(O.a)(v,2),C=f[0],j=f[1],g=Object(c.useCallback)((function(e){e.preventDefault();var t=Date.now().toString();console.log("submit",a,i,d,C,t);var c,l={id:t,residence:i,name:a,emergencyContactName:d,emergencyContactNumber:C,firstContacts:[]};R.dispatch((c=l,console.log("resident action",c),{type:n.ADD_RESIDENT,data:c})),r(""),m(""),p(""),j("")}),[a,i,d,C]),N=Object(c.useCallback)((function(e){e.preventDefault(),r(e.target.value)}),[]),h=Object(c.useCallback)((function(e){m(e.target.value)}),[]),T=Object(c.useCallback)((function(e){e.preventDefault(),p(e.target.value)}),[]),A=Object(c.useCallback)((function(e){j(e.target.value)}),[]);return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null," Add nursing home resident"),l.a.createElement("div",{className:"new-resident-form"},l.a.createElement("form",{onSubmit:g},l.a.createElement("div",{className:"new-resident-form-input"},l.a.createElement("label",null,"Name:",l.a.createElement("input",{type:"text",value:a,onChange:N}))),l.a.createElement("br",null),l.a.createElement("div",{className:"new-resident-form-input"},l.a.createElement("label",null,"Home:",l.a.createElement("input",{type:"text",value:i,onChange:h}))),l.a.createElement("br",null),l.a.createElement("div",{className:"new-resident-form-input"},l.a.createElement("label",null,"Emergency Contact:",l.a.createElement("input",{type:"text",value:d,onChange:T}))),l.a.createElement("br",null),l.a.createElement("div",{className:"new-resident-form-input"},"Emergency Contact Number:",l.a.createElement("label",null,l.a.createElement("input",{type:"text",value:C,onChange:A}))),l.a.createElement("div",{className:"new-resident-form-submit"},l.a.createElement("input",{type:"submit",value:"Submit"})))),l.a.createElement("button",{className:"new-resident-home"},l.a.createElement(s.b,{to:"/",style:{color:"black",textDecoration:"none",border:"0px"}},"Back to Home")))},h=a(25),T=(a(44),{option:function(e,t){return Object(E.a)(Object(E.a)({},e),{},{borderBottom:"1px dotted pink",color:t.isSelected?"red":"blue",padding:10,width:200})},menu:function(e){return{width:200,backgroundColor:"ivory"}},control:function(e){return Object(E.a)(Object(E.a)({},e),{},{backgroundColor:"ivory",width:200})},singleValue:function(e,t){var a=t.isDisabled?.5:1;return Object(E.a)(Object(E.a)({},e),{},{opacity:a,transition:"opacity 300ms"})}}),A=Object(m.b)((function(e){return{residents:e.residents,contacts:e.users}}))((function(e){var t=e.residents,a=(e.contacts,Object(c.useState)({value:"",label:""})),r=Object(O.a)(a,2),o=r[0],u=r[1],i=Object(c.useState)(""),m=Object(O.a)(i,2),b=m[0],E=m[1],d=Object(c.useState)({name:"",home:""}),p=Object(O.a)(d,2),v=p[0],f=p[1],C=Object(c.useState)({value:"",label:""}),j=Object(O.a)(C,2),g=j[0],N=j[1],A=Object(c.useState)(""),D=Object(O.a)(A,2),S=D[0],_=D[1],y=Object(c.useMemo)((function(){return t.map((function(e){return{value:e.id,label:"".concat(e.name," , ").concat(e.residence)}}))}),[]),k=Object(c.useCallback)((function(e){console.log("inp",e,t),u(e)}),[t]),U=Object(c.useCallback)((function(){console.log("sub",o.value),E(o.value);var e=t.filter((function(e){return o.value===e.id})).map((function(e){return{name:e.name,home:e.residence}}));console.log("found",e[0]),f(e[0])}),[o]),w=Object(c.useMemo)((function(){return[]}),[]),x=Object(c.useCallback)((function(e){N(e)}),[t]),I=Object(c.useCallback)((function(){console.log("contact submit",g),_(g.value)}),[g]),M=Object(c.useCallback)((function(){var e,t;console.log("handle add",b,S),R.dispatch((e=b,t=S,{type:n.ADD_CONTACT_TO_RESIDENT,data:{residentId:e,contactEmail:t}})),E(""),_("")}),[b,S]);return l.a.createElement("div",null,l.a.createElement("div",{className:"search-resident"},l.a.createElement("div",null,"Type in resident's name"),l.a.createElement("div",{className:"search-resident-select"},l.a.createElement(h.a,{value:o,options:y,styles:T,onChange:k,onKeyDown:U})),l.a.createElement("div",null,b&&"Found resident ".concat(v.name," in ").concat(v.home)),l.a.createElement("div",{className:"search-contact-text"},"Type in contact's email"),l.a.createElement("div",{className:"search-contact-select"},l.a.createElement(h.a,{value:g,options:w,styles:T,onChange:x,onKeyDown:I})),l.a.createElement("div",null,S&&"Found contact ".concat(S))),b&&S&&l.a.createElement("div",null,l.a.createElement("button",{className:"add-contact-to-resident-button",onClick:M,value:"Add"},"ADD")),l.a.createElement("button",{className:"add-to-resident-home"},l.a.createElement(s.b,{to:"/",style:{color:"black",textDecoration:"none",border:"0px"}},"Back to Home")))})),D={name:"",email:"",phone:"",id:"0"},S=Object(m.b)((function(e){return{activeUser:e.activeUser}}),(function(e){return Object(i.a)({addContact:f},e)}))((function(e){var t=e.activeUser,a=e.addContact,n=Object(c.useState)("0"),r=Object(O.a)(n,2),o=r[0],s=r[1],u=Object(c.useState)([D]),i=Object(O.a)(u,2),m=i[0],b=i[1],E=Object(c.useState)(0),p=Object(O.a)(E,2),v=p[0],f=p[1],C=Object(c.useState)("name"),j=Object(O.a)(C,2),g=j[0],N=j[1],h=Object(c.useCallback)((function(e){e.preventDefault(),a(t,m)}),[m]),T=Object(c.useCallback)((function(e){var t=Object(d.a)(m);m.forEach((function(t,a){return v===a&&(t[g]=e.target.value),t})),b(t)}),[v,m,g]),A=Object(c.useCallback)((function(){var e={name:"",email:"",phone:"",id:"".concat(parseInt(o)+1)};b((function(t){return[].concat(Object(d.a)(t),[e])})),s("".concat(parseInt(o)+1))}),[o]),S=Object(c.useCallback)((function(){document.activeElement&&"INPUT"===document.activeElement.tagName&&(N(document.activeElement.name.split(":")[0]),f(parseInt(document.activeElement.name.split(":")[1])))}),[]),_=Object(c.useCallback)((function(){var e=m;if(document.activeElement&&"INPUT"===document.activeElement.tagName){var t=parseInt(document.activeElement.name.split(":")[1]);e.splice(t,1)}b(Object(d.a)(e))}),[m]),y=Object(c.useMemo)((function(){return m.map((function(e,t){return l.a.createElement("div",{className:"new-resident-form-input"},l.a.createElement("div",null,"Add close contact"),l.a.createElement("label",null,"Name",l.a.createElement("input",{type:"text",name:"".concat("name",":").concat(t),value:"".concat(e.name),onFocus:S,onChange:T})),l.a.createElement("label",null,"Email",l.a.createElement("input",{type:"text",name:"".concat("email",":").concat(t),value:"".concat(e.email),onFocus:S,onChange:T})),l.a.createElement("label",null,"Phone",l.a.createElement("input",{type:"text",name:"".concat("phone",":").concat(t),value:"".concat(e.phone),onFocus:S,onChange:T})),l.a.createElement("label",null,l.a.createElement("input",{type:"button",name:"delete:".concat(t),value:"X",onClick:_})))}))}),[o,m,S,T]);return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null," Add contacts "),l.a.createElement("div",{className:"new-contact-form"},l.a.createElement("div",null,y,l.a.createElement("div",{className:"new-contact-add-btn"},l.a.createElement("input",{type:"submit",value:"Add Contact",onClick:A})),l.a.createElement("div",{className:"new-contact-form-submit"},l.a.createElement("input",{type:"submit",value:"Submit",onClick:h})))))})),_=Object(m.b)((function(e){return{contacts:e.users}}))((function(e){var t=e.contacts;console.log("contacts",t);var a=Object(c.useState)({value:"",name:""}),n=Object(O.a)(a,2);n[0],n[1];return l.a.createElement("div",null," hello ",JSON.stringify(t)," ")})),y=(a(45),Object(m.b)((function(e){return{users:e.listOfUsers}}),(function(e){return Object(i.a)({createUser:g,makeActiveUser:C},e)}))((function(e){var t=e.users,a=e.createUser,n=e.makeActiveUser,r=Object(c.useState)(""),o=Object(O.a)(r,2),s=o[0],i=o[1],m=Object(c.useState)(""),b=Object(O.a)(m,2),E=b[0],d=b[1],p=Object(c.useState)(""),v=Object(O.a)(p,2),f=v[0],C=v[1],j=Object(c.useState)(""),g=Object(O.a)(j,2),N=g[0],h=g[1],T=Object(c.useState)(""),A=Object(O.a)(T,2),D=A[0],S=A[1],_=Object(c.useState)(!1),y=Object(O.a)(_,2),k=y[0],U=y[1],w=Object(c.useState)(!1),x=Object(O.a)(w,2),I=x[0],R=x[1],M=Object(c.useState)(!1),P=Object(O.a)(M,2),K=P[0],V=P[1],F=Object(c.useCallback)((function(e){i(e.target.value),t.includes(e.target.value)?alert("user name already exists"):R(!0)}),[t]),B=Object(c.useCallback)((function(e){d(e.target.value),e.target.value.length>7&&U(!0)}),[]),L=Object(c.useCallback)((function(e){e.preventDefault(),C(e.target.value)}),[]),H=Object(c.useCallback)((function(e){h(e.target.value)}),[]),J=Object(c.useCallback)((function(e){e.preventDefault(),S(e.target.value)}),[]),W=Object(c.useCallback)((function(){I&&k?(a(s,{residentContactIDs:[],username:s,name:f,phone:D,email:N,password:E,firstContacts:[]}),n(s),C(""),h(""),S(""),V(!0)):alert("user name and password must be valid")}),[E,s,f,N,D]);return K?l.a.createElement(u.a,{to:"/NewContact"}):l.a.createElement("div",{className:"signup-container"},l.a.createElement("div",{className:"signup-input"},l.a.createElement("label",null,"Username"),l.a.createElement("input",{type:"text",value:s,onChange:F})),l.a.createElement("div",{className:"signup-input"},l.a.createElement("label",null,"password (at least 8 characters)"),l.a.createElement("input",{type:"text",value:E,onChange:B})),l.a.createElement("div",{className:"signup-input"},l.a.createElement("label",null,"Name:"),l.a.createElement("input",{type:"text",value:f,onChange:L})),l.a.createElement("div",{className:"signup-input"},l.a.createElement("label",null,"Email:"),l.a.createElement("input",{type:"text",value:N,onChange:H})),l.a.createElement("div",{className:"signup-input"},l.a.createElement("label",null,"Phone Number"),l.a.createElement("input",{type:"text",value:D,onChange:J})),l.a.createElement("div",{className:"signup-submit"},l.a.createElement("input",{type:"submit",value:"Submit",onClick:W})))}))),k=function(){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("input",{type:"button",name:"account",value:"UPDATE ACCOUNT"})),l.a.createElement("div",null,l.a.createElement("input",{type:"button",name:"contacts",value:"UPDATE CONTACTS"})),l.a.createElement("div",null,l.a.createElement("input",{type:"button",name:"send",value:"SEND ALERTS"})))},U=(a(46),Object(m.b)((function(e){return{listOfUsers:e.listOfUsers,activeUser:e.activeUser,users:e.users}}),(function(e){return Object(i.a)({makeActiveUser:C},e)}))((function(e){var t=e.activeUser,a=e.listOfUsers,n=e.users,r=e.makeActiveUser,o=Object(c.useState)(""),s=Object(O.a)(o,2),u=s[0],i=s[1],m=Object(c.useState)(""),b=Object(O.a)(m,2),E=b[0],d=b[1],p=Object(c.useCallback)((function(e){i(e.target.value)}),[]),v=Object(c.useCallback)((function(e){d(e.target.value)}),[]),f=Object(c.useCallback)((function(){if(a.includes(u)){var e=n[u].password;E===e?r(u):alert("Incorrect Password")}else alert("No user by that user name")}),[n,a,u,E]),C=Object(c.useMemo)((function(){return t?l.a.createElement(k,null):l.a.createElement("div",{className:"signin-container"},l.a.createElement("div",{className:"signin-input"},l.a.createElement("label",null,"Username"),l.a.createElement("input",{type:"text",value:u,onChange:p})),l.a.createElement("div",{className:"signin-input"},l.a.createElement("label",null,"password"),l.a.createElement("input",{type:"text",value:E,onChange:v})),l.a.createElement("div",{className:"signin-submit"},l.a.createElement("input",{type:"submit",value:"Submit",onClick:f})))}),[t,u,E,v,p]);return l.a.createElement(l.a.Fragment,null,C)}))),w=(a(47),a(30)),x=a.n(w),I=(a(48),Object(m.b)((function(e){return{activeUser:e.activeUser}}),(function(e){return Object(i.a)({deactivateUser:j},e)}))((function(e){var t=e.activeUser,a=e.deactivateUser;console.log("active user",t);var n=Object(c.useCallback)((function(){a()}),[]);return l.a.createElement("div",{className:"App-header"},l.a.createElement("div",{className:"App-header-text"},"Welcome to ProShield"),l.a.createElement("div",{className:"App-header-logo"},l.a.createElement("img",{width:"20px",src:x.a,alt:"logo"})),l.a.createElement("div",{className:"App-header-nav-buttons"},!t&&l.a.createElement("div",null,l.a.createElement("button",{className:"App-header-btn"},l.a.createElement(s.b,{to:"/Signin",style:{color:"white",textDecoration:"none",border:"0px"}},l.a.createElement("div",null," Signin "))),l.a.createElement("button",{className:"App-header-btn"},l.a.createElement(s.b,{to:"/Signup",style:{color:"white",textDecoration:"none",border:"0px"}},l.a.createElement("div",null," Signup ")))),!!t&&l.a.createElement("button",{className:"App-header-btn",onClick:n},l.a.createElement("div",null," Logout ")),l.a.createElement("button",{className:"App-header-btn"},l.a.createElement(s.b,{to:"/",style:{color:"white",textDecoration:"none",border:"0px"}},l.a.createElement("div",null," Home ")))))}))),R=Object(i.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(console.log("REDUCER HIT",t),t.type){case n.ADD_RESIDENT:var a=[].concat(Object(d.a)(e.residents),[t.data]);return Object(E.a)(Object(E.a)({},e),{},{residents:a});case n.ADD_CONTACT:var c=t.data,l=c.activeUser,r=c.listOfContacts,o=e.users[l];return o.firstContacts=r,console.log("in reducer",o),Object(E.a)(Object(E.a)({},e),{},{users:Object(E.a)(Object(E.a)({},e.users),{},Object(b.a)({},l,Object(E.a)({},o)))});case n.CREATE_USER:var s=t.data.username,u=[].concat(Object(d.a)(e.listOfUsers),[s]),i=Object(E.a)(Object(E.a)({},e.users),{},Object(b.a)({},s,t.data.user));return Object(E.a)(Object(E.a)({},e),{},{users:i,listOfUsers:u});case n.MAKE_USER_ACTIVE:return Object(E.a)(Object(E.a)({},e),{},{activeUser:t.data});case n.MAKE_USER_INACTIVE:return Object(E.a)(Object(E.a)({},e),{},{activeUser:""});case n.ADD_CONTACT_TO_RESIDENT:var m=e.residents.findIndex((function(e){return e.id===t.data.residentId})),v=e.residents[m];v.firstContacts.push(t.data.contactEmail);var O=Object(d.a)(e.residents);return Object(E.a)(Object(E.a)({},e),{},{residents:O});default:return e}}),p);var M=function(){return l.a.createElement(m.a,{store:R},l.a.createElement("div",{className:"App"},l.a.createElement(s.a,null,l.a.createElement(I,null),l.a.createElement(u.b,{exact:!0,path:"/",component:v}),l.a.createElement(u.b,{path:"/NewResident",component:N}),l.a.createElement(u.b,{path:"/NewContact",component:S}),l.a.createElement(u.b,{path:"/ExistingResident",component:A}),l.a.createElement(u.b,{path:"/AddContactToContact",component:_}),l.a.createElement(u.b,{path:"/Signup",component:y}),l.a.createElement(u.b,{path:"/Signin",component:U}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.ad42f35d.chunk.js.map