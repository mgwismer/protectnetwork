(this.webpackJsonpprotectnetwork=this.webpackJsonpprotectnetwork||[]).push([[0],{29:function(e,t,a){e.exports=a.p+"static/media/proshield.5cfe51d5.png"},31:function(e,t,a){e.exports=a(47)},36:function(e,t,a){},41:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n,c=a(0),l=a.n(c),r=a(12),o=a.n(r),s=(a(36),a(6)),u=a(3),i=a(13),m=a(9),b=a(16),d=a(4),E=a(14);!function(e){e.ADD_RESIDENT="ADD_RESIDENT",e.UPDATE_RESIDENT="UPDATE_RESIDENT",e.DELETE_RESIDENT="DELETE_RESIDENT",e.ADD_CONTACT="ADD_CONTACT",e.UPDATE_CONTACT="UPDATE_CONTACT",e.DELETE_CONTACT="DELETE_CONTACT",e.ADD_CONTACT_TO_RESIDENT="ADD_CONTACT_TO_RESIDENT",e.ADD_CONTACT_TO_CONTACT="ADD_CONTACT_TO_CONTACT",e.CREATE_USER="CREATE_USER",e.MAKE_ACTIVE_USER="MAKE_ACTIVE_USER"}(n||(n={}));var p={residents:[],users:{},listOfUsers:[],activeUser:""};var O=a(29),v=a.n(O),f=(a(41),Object(m.b)((function(e){return console.log("state",e),{residents:e.residents,contacts:e.users}}))((function(e){var t=e.residents,a=e.contacts;return console.log("residents, contacts",t,a),l.a.createElement("div",null,l.a.createElement("h2",null," Welcome to ProShield "),l.a.createElement("div",{className:"frontpage-buttons"},l.a.createElement("button",{className:"frontpage-buttons__create"},l.a.createElement(s.b,{to:"/NewResident",style:{color:"black",textDecoration:"none",border:"0px"}},l.a.createElement("div",null,"Create New Resident"))),l.a.createElement("button",{className:"frontpage-buttons__create"},l.a.createElement(s.b,{to:"/Signup",style:{color:"black",textDecoration:"none",border:"0px"}},l.a.createElement("div",null,"Create New User"))),!!t.length&&!!a.length&&l.a.createElement("button",{className:"frontpage-buttons__add"},l.a.createElement(s.b,{to:"/ExistingResident",style:{color:"black",textDecoration:"none",border:"0px"}},"Add for existing Resident")),Object.keys(a).length>1&&l.a.createElement("button",{className:"frontpage-buttons__add"},l.a.createElement(s.b,{to:"/AddContactToContact",style:{color:"black",textDecoration:"none",border:"0px"}},"Add Contact to Contact"))),l.a.createElement("div",{className:"frontpage-footer"},"MVP created as part of",l.a.createElement("br",null),l.a.createElement("a",{href:"https://covid19challenge.mit.edu/beat-the-pandemic-2/"},"MIT Beat the Pandemic II hackathon"),l.a.createElement("br",null),"Track G"))}))),C=a(2);a(43);function j(e,t){return{type:n.ADD_CONTACT,data:{activeUser:e,listOfContacts:t}}}function g(e){return{type:n.MAKE_ACTIVE_USER,data:e}}function h(e,t){return{type:n.CREATE_USER,data:{username:e,user:t}}}var N=function(){var e=Object(c.useState)(""),t=Object(C.a)(e,2),a=t[0],r=t[1],o=Object(c.useState)(""),u=Object(C.a)(o,2),i=u[0],m=u[1],b=Object(c.useState)(""),d=Object(C.a)(b,2),E=d[0],p=d[1],O=Object(c.useState)(""),v=Object(C.a)(O,2),f=v[0],j=v[1],g=Object(c.useCallback)((function(e){e.preventDefault();var t=Date.now().toString();console.log("submit",a,i,E,f,t);var c,l={id:t,residence:i,name:a,emergencyContactName:E,emergencyContactNumber:f,firstContacts:[]};w.dispatch((c=l,console.log("resident action",c),{type:n.ADD_RESIDENT,data:c})),r(""),m(""),p(""),j("")}),[a,i,E,f]),h=Object(c.useCallback)((function(e){e.preventDefault(),r(e.target.value)}),[]),N=Object(c.useCallback)((function(e){m(e.target.value)}),[]),T=Object(c.useCallback)((function(e){e.preventDefault(),p(e.target.value)}),[]),D=Object(c.useCallback)((function(e){j(e.target.value)}),[]);return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null," Add nursing home resident"),l.a.createElement("div",{className:"new-resident-form"},l.a.createElement("form",{onSubmit:g},l.a.createElement("div",{className:"new-resident-form-input"},l.a.createElement("label",null,"Name:",l.a.createElement("input",{type:"text",value:a,onChange:h}))),l.a.createElement("br",null),l.a.createElement("div",{className:"new-resident-form-input"},l.a.createElement("label",null,"Home:",l.a.createElement("input",{type:"text",value:i,onChange:N}))),l.a.createElement("br",null),l.a.createElement("div",{className:"new-resident-form-input"},l.a.createElement("label",null,"Emergency Contact:",l.a.createElement("input",{type:"text",value:E,onChange:T}))),l.a.createElement("br",null),l.a.createElement("div",{className:"new-resident-form-input"},"Emergency Contact Number:",l.a.createElement("label",null,l.a.createElement("input",{type:"text",value:f,onChange:D}))),l.a.createElement("div",{className:"new-resident-form-submit"},l.a.createElement("input",{type:"submit",value:"Submit"})))),l.a.createElement("button",{className:"new-resident-home"},l.a.createElement(s.b,{to:"/",style:{color:"black",textDecoration:"none",border:"0px"}},"Back to Home")))},T=a(25),D=(a(44),{option:function(e,t){return Object(d.a)(Object(d.a)({},e),{},{borderBottom:"1px dotted pink",color:t.isSelected?"red":"blue",padding:10,width:200})},menu:function(e){return{width:200,backgroundColor:"ivory"}},control:function(e){return Object(d.a)(Object(d.a)({},e),{},{backgroundColor:"ivory",width:200})},singleValue:function(e,t){var a=t.isDisabled?.5:1;return Object(d.a)(Object(d.a)({},e),{},{opacity:a,transition:"opacity 300ms"})}}),A=Object(m.b)((function(e){return{residents:e.residents,contacts:e.users}}))((function(e){var t=e.residents,a=(e.contacts,Object(c.useState)({value:"",label:""})),r=Object(C.a)(a,2),o=r[0],u=r[1],i=Object(c.useState)(""),m=Object(C.a)(i,2),b=m[0],d=m[1],E=Object(c.useState)({name:"",home:""}),p=Object(C.a)(E,2),O=p[0],v=p[1],f=Object(c.useState)({value:"",label:""}),j=Object(C.a)(f,2),g=j[0],h=j[1],N=Object(c.useState)(""),A=Object(C.a)(N,2),_=A[0],S=A[1],k=Object(c.useMemo)((function(){return t.map((function(e){return{value:e.id,label:"".concat(e.name," , ").concat(e.residence)}}))}),[]),y=Object(c.useCallback)((function(e){console.log("inp",e,t),u(e)}),[t]),x=Object(c.useCallback)((function(){console.log("sub",o.value),d(o.value);var e=t.filter((function(e){return o.value===e.id})).map((function(e){return{name:e.name,home:e.residence}}));console.log("found",e[0]),v(e[0])}),[o]),R=Object(c.useMemo)((function(){return[]}),[]),U=Object(c.useCallback)((function(e){h(e)}),[t]),I=Object(c.useCallback)((function(){console.log("contact submit",g),S(g.value)}),[g]),P=Object(c.useCallback)((function(){var e,t;console.log("handle add",b,_),w.dispatch((e=b,t=_,{type:n.ADD_CONTACT_TO_RESIDENT,data:{residentId:e,contactEmail:t}})),d(""),S("")}),[b,_]);return l.a.createElement("div",null,l.a.createElement("div",{className:"search-resident"},l.a.createElement("div",null,"Type in resident's name"),l.a.createElement("div",{className:"search-resident-select"},l.a.createElement(T.a,{value:o,options:k,styles:D,onChange:y,onKeyDown:x})),l.a.createElement("div",null,b&&"Found resident ".concat(O.name," in ").concat(O.home)),l.a.createElement("div",{className:"search-contact-text"},"Type in contact's email"),l.a.createElement("div",{className:"search-contact-select"},l.a.createElement(T.a,{value:g,options:R,styles:D,onChange:U,onKeyDown:I})),l.a.createElement("div",null,_&&"Found contact ".concat(_))),b&&_&&l.a.createElement("div",null,l.a.createElement("button",{className:"add-contact-to-resident-button",onClick:P,value:"Add"},"ADD")),l.a.createElement("button",{className:"add-to-resident-home"},l.a.createElement(s.b,{to:"/",style:{color:"black",textDecoration:"none",border:"0px"}},"Back to Home")))})),_={name:"",email:"",phone:"",id:"0"},S=Object(m.b)((function(e){return{activeUser:e.activeUser}}),(function(e){return Object(i.a)({addContact:j},e)}))((function(e){var t=e.activeUser,a=e.addContact,n=Object(c.useState)("0"),r=Object(C.a)(n,2),o=r[0],u=r[1],i=Object(c.useState)([_]),m=Object(C.a)(i,2),b=m[0],d=m[1],p=Object(c.useState)(0),O=Object(C.a)(p,2),v=O[0],f=O[1],j=Object(c.useState)("name"),g=Object(C.a)(j,2),h=g[0],N=g[1],T=Object(c.useCallback)((function(e){console.log("submit",b),e.preventDefault(),a(t,b)}),[b]),D=Object(c.useCallback)((function(e){var t=Object(E.a)(b);b.forEach((function(t,a){return v===a&&(t[h]=e.target.value),t})),d(t)}),[v,b,h]),A=Object(c.useCallback)((function(){var e={name:"",email:"",phone:"",id:"".concat(parseInt(o)+1)};d((function(t){return[].concat(Object(E.a)(t),[e])})),u("".concat(parseInt(o)+1))}),[o]),S=Object(c.useCallback)((function(){document.activeElement&&"INPUT"===document.activeElement.tagName&&(N(document.activeElement.name.split(":")[0]),f(parseInt(document.activeElement.name.split(":")[1])))}),[]),k=Object(c.useMemo)((function(){return b.map((function(e,t){return l.a.createElement("div",{className:"new-resident-form-input"},l.a.createElement("div",null,"Add close contact"),l.a.createElement("label",null,"Name",l.a.createElement("input",{type:"text",name:"".concat("name",":").concat(t),value:"".concat(e.name),onFocus:S,onChange:D})),l.a.createElement("label",null,"Email",l.a.createElement("input",{type:"text",name:"".concat("email",":").concat(t),value:"".concat(e.email),onFocus:S,onChange:D})),l.a.createElement("label",null,"Phone",l.a.createElement("input",{type:"text",name:"".concat("phone",":").concat(t),value:"".concat(e.phone),onFocus:S,onChange:D})))}))}),[o,b,S,D]);return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null," Add contacts "),l.a.createElement("div",{className:"new-contact-form"},l.a.createElement("div",null,k,l.a.createElement("div",{className:"new-contact-add-btn"},l.a.createElement("input",{type:"submit",value:"Add Contact",onClick:A})),l.a.createElement("div",{className:"new-contact-form-submit"},l.a.createElement("input",{type:"submit",value:"Submit",onClick:T})))),l.a.createElement("button",{className:"new-contact-home"},l.a.createElement(s.b,{to:"/",style:{color:"black",textDecoration:"none",border:"0px"}},"Back to Home")))})),k=Object(m.b)((function(e){return{contacts:e.users}}))((function(e){var t=e.contacts;console.log("contacts",t);var a=Object(c.useState)({value:"",name:""}),n=Object(C.a)(a,2);n[0],n[1];return l.a.createElement("div",null," hello ",JSON.stringify(t)," ")})),y=(a(45),Object(m.b)((function(e){return{users:e.listOfUsers}}),(function(e){return Object(i.a)({createUser:h,makeActiveUser:g},e)}))((function(e){var t=e.users,a=e.createUser,n=e.makeActiveUser,r=Object(c.useState)(""),o=Object(C.a)(r,2),s=o[0],i=o[1],m=Object(c.useState)(""),b=Object(C.a)(m,2),d=b[0],E=b[1],p=Object(c.useState)(""),O=Object(C.a)(p,2),v=O[0],f=O[1],j=Object(c.useState)(""),g=Object(C.a)(j,2),h=g[0],N=g[1],T=Object(c.useState)(""),D=Object(C.a)(T,2),A=D[0],_=D[1],S=Object(c.useState)(!1),k=Object(C.a)(S,2),y=k[0],w=k[1],x=Object(c.useState)(!1),R=Object(C.a)(x,2),U=R[0],I=R[1],P=Object(c.useState)(!1),M=Object(C.a)(P,2),B=M[0],F=M[1],K=Object(c.useCallback)((function(e){console.log("users in name change",t),i(e.target.value),t.includes(e.target.value)||I(!0)}),[t]),V=Object(c.useCallback)((function(e){E(e.target.value),e.target.value.length>7&&w(!0)}),[]),H=Object(c.useCallback)((function(e){e.preventDefault(),f(e.target.value)}),[]),L=Object(c.useCallback)((function(e){N(e.target.value)}),[]),W=Object(c.useCallback)((function(e){e.preventDefault(),_(e.target.value)}),[]),J=Object(c.useCallback)((function(){U&&y?(a(s,{residentContactIDs:[],username:s,name:v,phone:A,email:h,password:d,firstContacts:[]}),n(s),f(""),N(""),_(""),F(!0)):alert("user name and password must be valid")}),[d,s,v,h,A]);return B?l.a.createElement(u.a,{to:"/NewContact"}):l.a.createElement("div",{className:"signup-container"},l.a.createElement("div",{className:"signup-input"},l.a.createElement("label",null,"Username"),l.a.createElement("input",{type:"text",value:s,onChange:K})),l.a.createElement("div",{className:"signup-input"},l.a.createElement("label",null,"password (at least 8 characters)"),l.a.createElement("input",{type:"text",value:d,onChange:V})),l.a.createElement("div",{className:"signup-input"},l.a.createElement("label",null,"Name:"),l.a.createElement("input",{type:"text",value:v,onChange:H})),l.a.createElement("div",{className:"signup-input"},l.a.createElement("label",null,"Email:"),l.a.createElement("input",{type:"text",value:h,onChange:L})),l.a.createElement("div",{className:"signup-input"},l.a.createElement("label",null,"Phone Number"),l.a.createElement("input",{type:"text",value:A,onChange:W})),l.a.createElement("div",{className:"signup-submit"},l.a.createElement("input",{type:"submit",value:"Submit",onClick:J})))}))),w=(a(46),Object(i.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(console.log("REDUCER HIT",t),t.type){case n.ADD_RESIDENT:var a=[].concat(Object(E.a)(e.residents),[t.data]);return Object(d.a)(Object(d.a)({},e),{},{residents:a});case n.ADD_CONTACT:var c=t.data,l=c.activeUser,r=c.listOfContacts,o=e.users[l];return o.firstContacts=r,console.log("in reducer",o),Object(d.a)(Object(d.a)({},e),{},{users:Object(d.a)(Object(d.a)({},e.users),{},Object(b.a)({},l,Object(d.a)({},o)))});case n.CREATE_USER:var s=t.data.username,u=[].concat(Object(E.a)(e.listOfUsers),[s]),i=Object(d.a)(Object(d.a)({},e.users),{},Object(b.a)({},s,t.data.user));return Object(d.a)(Object(d.a)({},e),{},{users:i,listOfUsers:u});case n.MAKE_ACTIVE_USER:return Object(d.a)(Object(d.a)({},e),{},{activeUser:t.data});case n.ADD_CONTACT_TO_RESIDENT:var m=e.residents.findIndex((function(e){return e.id===t.data.residentId})),O=e.residents[m];O.firstContacts.push(t.data.contactEmail);var v=Object(E.a)(e.residents);return Object(d.a)(Object(d.a)({},e),{},{residents:v});default:return e}}),p));var x=function(){return l.a.createElement(m.a,{store:w},l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"App-header"},l.a.createElement("div",{className:"App-header-text"},"Welcome to ProShield"),l.a.createElement("div",{className:"App-header-logo"},l.a.createElement("img",{width:"20px",src:v.a,alt:"logo"}))),l.a.createElement(s.a,null,l.a.createElement(u.b,{exact:!0,path:"/",component:f}),l.a.createElement(u.b,{path:"/NewResident",component:N}),l.a.createElement(u.b,{path:"/NewContact",component:S}),l.a.createElement(u.b,{path:"/ExistingResident",component:A}),l.a.createElement(u.b,{path:"/AddContactToContact",component:k}),l.a.createElement(u.b,{path:"/Signup",component:y}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.7c78eab6.chunk.js.map