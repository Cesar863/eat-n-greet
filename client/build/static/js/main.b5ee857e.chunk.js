(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{101:function(e,t,a){e.exports=a(117)},106:function(e,t,a){},117:function(e,t,a){"use strict";a.r(t);var n,r,l,c,o,i,u,s,m=a(0),d=a.n(m),b=a(44),p=a.n(b),E=(a(106),a(22)),v=a(11),g=a(30),f=a(19),j=a.n(f),O=a(34),h=a(40),y=a(134),w=a(128),k=a(129),S=a(126),C=a(18),x=a(35),$=a(135),M=Object($.a)(n||(n=Object(x.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      username\n    }\n  }\n}\n"]))),q=Object($.a)(r||(r=Object(x.a)(["\n  mutation addUser($username: String!, $password: String!, $email: String!) {\n    addUser(username: $username, password: $password, email: $email) {\n      token\n      user {\n        username\n        _id\n        email\n      }\n    }\n  }\n"]))),F=Object($.a)(l||(l=Object(x.a)(["\nmutation addMeetup($body: String!, $title: String!) {\n  addMeetup(body: $body, title: $title) {\n    _id\n    body\n    createdAt\n    username\n    title\n  }\n}\n"]))),L=Object($.a)(c||(c=Object(x.a)(["\nmutation editMeetup($id: ID!, $body: String!, $title: String!) {\n  editMeetup(_id: $id, body: $body, title: $title) {\n    _id\n    title\n    body\n  }\n}\n"]))),_=Object($.a)(o||(o=Object(x.a)(["\nmutation deleteMeetup($id: ID!) {\n  deleteMeetup(_id: $id) {\n    _id\n    username\n    email\n  }\n}\n"]))),I=function(){var e=Object(m.useState)({username:"",email:"",password:""}),t=Object(v.a)(e,2),a=t[0],n=t[1],r=Object(m.useState)(!1),l=Object(v.a)(r,1)[0],c=Object(m.useState)(!1),o=Object(v.a)(c,2),i=o[0],u=o[1],s=Object(S.a)(q),b=Object(v.a)(s,2),p=b[0],g=b[1].error,f=function(e){var t=e.target,r=t.name,l=t.value;n(Object(E.a)(Object(E.a)({},a),{},Object(h.a)({},r,l)))},x=function(){var e=Object(O.a)(j.a.mark((function e(t){var r,l;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),!1===t.currentTarget.checkValidity()&&(t.preventDefault(),t.stopPropagation()),e.prev=3,e.next=6,p({variables:Object(E.a)({},a)});case 6:r=e.sent,l=r.data,C.default.login(l.addUser.token),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),console.error(g),u(!0);case 15:n({username:"",email:"",password:""});case 16:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}();return d.a.createElement(d.a.Fragment,null,d.a.createElement(y.a,{noValidate:!0,validated:l,onSubmit:x},d.a.createElement(w.a,{dismissible:!0,onClose:function(){return u(!1)},show:i,variant:"danger"},"Something went wrong with your signup!"),d.a.createElement(y.a.Group,null,d.a.createElement(y.a.Label,{htmlFor:"username"},"Username"),d.a.createElement(y.a.Control,{type:"text",placeholder:"Your username",name:"username",onChange:f,value:a.username,required:!0}),d.a.createElement(y.a.Control.Feedback,{type:"invalid"},"Username is required!")),d.a.createElement(y.a.Group,null,d.a.createElement(y.a.Label,{htmlFor:"email"},"Email"),d.a.createElement(y.a.Control,{type:"email",placeholder:"Your email address",name:"email",onChange:f,value:a.email,required:!0}),d.a.createElement(y.a.Control.Feedback,{type:"invalid"},"Email is required!")),d.a.createElement(y.a.Group,null,d.a.createElement(y.a.Label,{htmlFor:"password"},"Password"),d.a.createElement(y.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:f,value:a.password,required:!0}),d.a.createElement(y.a.Control.Feedback,{type:"invalid"},"Password is required!")),d.a.createElement(k.a,{disabled:!(a.username&&a.email&&a.password),type:"submit",variant:"success"},"Submit")))},T=function(){var e=Object(m.useState)({email:"",password:""}),t=Object(v.a)(e,2),a=t[0],n=t[1],r=Object(S.a)(M),l=Object(v.a)(r,2),c=l[0],o=l[1].error,i=Object(m.useState)(!1),u=Object(v.a)(i,1)[0],s=Object(m.useState)(!1),b=Object(v.a)(s,2),p=b[0],g=b[1],f=function(e){var t=e.target,r=t.name,l=t.value;n(Object(E.a)(Object(E.a)({},a),{},Object(h.a)({},r,l)))},x=function(){var e=Object(O.a)(j.a.mark((function e(t){var r,l;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),!1===t.currentTarget.checkValidity()&&(t.preventDefault(),t.stopPropagation()),e.prev=3,e.next=6,c({variables:Object(E.a)({},a)});case 6:r=e.sent,l=r.data,C.default.login(l.login.token),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),console.error(o),g(!0);case 15:n({username:"",email:"",password:""});case 16:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}();return d.a.createElement(d.a.Fragment,null,d.a.createElement(y.a,{noValidate:!0,validated:u,onSubmit:x},d.a.createElement(w.a,{dismissible:!0,onClose:function(){return g(!1)},show:p,variant:"danger"},"Something went wrong with your login credentials!"),d.a.createElement(y.a.Group,null,d.a.createElement(y.a.Label,{htmlFor:"email"},"Email"),d.a.createElement(y.a.Control,{type:"text",placeholder:"Your email",name:"email",onChange:f,value:a.email,required:!0}),d.a.createElement(y.a.Control.Feedback,{type:"invalid"},"Email is required!")),d.a.createElement(y.a.Group,null,d.a.createElement(y.a.Label,{htmlFor:"password"},"Password"),d.a.createElement(y.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:f,value:a.password,required:!0}),d.a.createElement(y.a.Control.Feedback,{type:"invalid"},"Password is required!")),d.a.createElement(k.a,{disabled:!(a.email&&a.password),type:"submit",variant:"success"},"Submit")))},D=a(138),N=a(131),P=a(137),A=a(133),B=a(139),G=a(14),V=a(130),U=(Object($.a)(i||(i=Object(x.a)(["\n  {\n    me {\n        _id\n      username\n    }\n  }\n"]))),Object($.a)(u||(u=Object(x.a)(["\nquery meetups($username: String) {\n  meetups(username: $username) {\n    _id\n    body\n    createdAt\n    username\n    title\n  }\n}\n"])))),Y=Object($.a)(s||(s=Object(x.a)(["\nquery Meetup($id: ID!) {\n  meetup(_id: $id) {\n    _id\n    body\n    createdAt\n    username\n    title\n  }\n}\n"]))),K=function(e){var t=e.meetups;return t.length?d.a.createElement("div",null,t&&t.map((function(e){return d.a.createElement("div",{key:e._id,className:"card mb-3"},d.a.createElement("p",{className:"card-header"},e.username,d.a.createElement("br",null),e.createdAt),d.a.createElement("div",{className:"card-body"},d.a.createElement(g.b,{to:"/meetup/".concat(e._id)},d.a.createElement("p",null,e.title))))}))):d.a.createElement("h3",null,"No Meets Yet")},z=function(){var e=Object(V.a)(U),t=e.loading,a=e.data,n=(null===a||void 0===a?void 0:a.meetups)||[];return console.log(n),d.a.createElement("main",null,d.a.createElement("div",null,t?d.a.createElement("div",null,"Loading..."):d.a.createElement(K,{meetups:n,title:"meetups..."})))},H=(a(18),function(){var e=Object(m.useState)(""),t=Object(v.a)(e,2),a=t[0],n=t[1],r=Object(m.useState)(""),l=Object(v.a)(r,2),c=l[0],o=l[1],i=Object(m.useState)(""),u=Object(v.a)(i,2),s=u[0],b=(u[1],C.default.loggedIn()?C.default.getToken():null),p=Object(m.useState)(!1),E=Object(v.a)(p,2),g=E[0],f=E[1],h=Object(G.f)(),y=Object(S.a)(F,{refetchQueries:["meetups"]}),w=Object(v.a)(y,2),k=w[0],x=w[1].error,$=function(){var e=Object(O.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),f(!0),e.next=4,k({variables:{title:a,body:c,username:s}});case 4:h.push("/"),console.log(x);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return b?d.a.createElement("div",{className:"create"},d.a.createElement("h2",null,"Add a New Meetup"),d.a.createElement("form",{onSubmit:$},d.a.createElement("label",null,"Meetup Title"),d.a.createElement("input",{type:"text",required:!0,value:a,onChange:function(e){return n(e.target.value)}}),d.a.createElement("label",null,"Meetup Body:"),d.a.createElement("textarea",{required:!0,value:c,onChange:function(e){return o(e.target.value)}}),!g&&d.a.createElement("button",null,"Add Meetup"),g&&d.a.createElement("button",{disabled:!0},"Adding Meetup"))):d.a.createElement(z,null)}),J=function(){var e=Object(m.useState)(!1),t=Object(v.a)(e,2),a=t[0],n=t[1];return d.a.createElement(d.a.Fragment,null,d.a.createElement(D.a,{bg:"dark",variant:"dark",expand:"lg"},d.a.createElement(N.a,{fluid:!0},d.a.createElement(D.a.Brand,{as:g.b,to:"/"},"Eat N' Greet"),d.a.createElement(D.a.Toggle,{"aria-controls":"navbar"}),d.a.createElement(D.a.Collapse,{id:"navbar"},d.a.createElement(P.a,{className:"ml-auto"},d.a.createElement(P.a.Link,{as:g.b,to:"/"},"Meetups"),C.default.loggedIn()?d.a.createElement(d.a.Fragment,null,d.a.createElement(P.a.Link,{as:g.b,to:"/create"},"Create Meetup"),d.a.createElement(P.a.Link,{onClick:C.default.logout},"Logout")):d.a.createElement(P.a.Link,{onClick:function(){return n(!0)}},"Login/Sign Up"))))),d.a.createElement(A.a,{size:"lg",show:a,onHide:function(){return n(!1)},"aria-labelledby":"signup-modal"},d.a.createElement(B.a.Container,{defaultActiveKey:"login"},d.a.createElement(A.a.Header,{closeButton:!0},d.a.createElement(A.a.Title,{id:"signup-modal"},d.a.createElement(P.a,{variant:"pills"},d.a.createElement(P.a.Item,null,d.a.createElement(P.a.Link,{eventKey:"login"},"Login")),d.a.createElement(P.a.Item,null,d.a.createElement(P.a.Link,{eventKey:"signup"},"Sign Up"))))),d.a.createElement(A.a.Body,null,d.a.createElement(B.a.Content,null,d.a.createElement(B.a.Pane,{eventKey:"login"},d.a.createElement(T,{handleModalClose:function(){return n(!1)}})),d.a.createElement(B.a.Pane,{eventKey:"signup"},d.a.createElement(I,{handleModalClose:function(){return n(!1)}})))))))},Q=function(e){var t=e.meetup,a=e.closeModal;console.log(t);var n=Object(m.useState)({title:t.title,body:t.body}),r=Object(v.a)(n,2),l=r[0],c=r[1];console.log(l);var o=Object(m.useState)(!1),i=Object(v.a)(o,1)[0],u=Object(m.useState)(!1),s=Object(v.a)(u,2),b=s[0],p=s[1],g=Object(S.a)(L),f=Object(v.a)(g,2),k=f[0],C=f[1].error,x=function(e){var t=e.target,a=t.name,n=t.value;c(Object(E.a)(Object(E.a)({},l),{},Object(h.a)({},a,n)))},$=function(){var e=Object(O.a)(j.a.mark((function e(a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),!1===a.currentTarget.checkValidity()&&(a.preventDefault(),a.stopPropagation()),e.prev=3,e.next=6,k({variables:{id:t._id,body:l.body,title:l.title}});case 6:e.next=12;break;case 8:e.prev=8,e.t0=e.catch(3),console.error(C),p(!0);case 12:case"end":return e.stop()}}),e,null,[[3,8]])})));return function(t){return e.apply(this,arguments)}}();return d.a.createElement(d.a.Fragment,null,d.a.createElement(y.a,{noValidate:!0,validated:i,onSubmit:$},d.a.createElement(w.a,{dismissible:!0,onClose:function(){return p(!1)},show:b,variant:"danger"},"Something went wrong with your meetup!"),d.a.createElement(y.a.Group,null,d.a.createElement(y.a.Label,{htmlFor:"username"},"Title"),d.a.createElement(y.a.Control,{type:"text",placeholder:"",name:"title",onChange:x,defaultValue:t.title,required:!0}),d.a.createElement(y.a.Control.Feedback,{type:"invalid"},"Title is required!")),d.a.createElement(y.a.Group,null,d.a.createElement(y.a.Label,{htmlFor:"email"},"Body"),d.a.createElement(y.a.Control,{type:"email",placeholder:"",name:"body",onChange:x,defaultValue:t.body,required:!0}),d.a.createElement(y.a.Control.Feedback,{type:"invalid"},"Body is required!")),d.a.createElement("button",{onClick:function(){return a(!1)}},"Submit")))},W=function(){var e=Object(G.g)().id;console.log({meetupID:e});var t=Object(V.a)(Y,{variables:{id:e}}),a=(t.loading,t.data),n=Object(m.useState)(!1),r=Object(v.a)(n,2),l=r[0],c=(r[1],Object(m.useState)(!1)),o=Object(v.a)(c,2),i=o[0],u=o[1],s=(null===a||void 0===a?void 0:a.meetup)||{};console.log({meetup:s});null===a||void 0===a||a.me;var b=Object(G.f)(),p=Object(S.a)(_,{refetchQueries:["meetups"]}),E=Object(v.a)(p,2),g=E[0],f=E[1].error,h=function(){var t=Object(O.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(C.default.loggedIn()?C.default.getToken():null){t.next=3;break}return t.abrupt("return",!1);case 3:return t.prev=3,t.next=6,g({variables:{id:e}});case 6:if(t.sent){t.next=9;break}throw new Error("something went wrong!");case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(3),console.error(f);case 14:b.push("/");case 15:case"end":return t.stop()}}),t,null,[[3,11]])})));return function(){return t.apply(this,arguments)}}();return d.a.createElement("div",{className:"blog-details"},l&&d.a.createElement("div",null,"Loading..."),f&&d.a.createElement("div",null,f),d.a.createElement("article",null,d.a.createElement("h2",null,s.title),d.a.createElement("p",null,"Written by ",s.username),d.a.createElement("div",null,s.body),d.a.createElement("button",{onClick:function(){return u(!0)}},"Edit"),d.a.createElement("button",{onClick:function(){return h(s.meetupID)}},"Delete")),d.a.createElement(A.a,{show:i},d.a.createElement(Q,{meetup:s,closeModal:u})))},R=(a(116),a(96)),X=a(98),Z=a(136),ee=a(132),te=a(95),ae=Object(R.a)({uri:"/graphql"}),ne=Object(te.a)((function(e,t){var a=t.headers,n=localStorage.getItem("id_token");return{headers:Object(E.a)(Object(E.a)({},a),{},{authorization:n?"Bearer ".concat(n):""})}})),re=new X.a({link:ne.concat(ae),cache:new Z.a});var le=function(){return d.a.createElement(ee.a,{client:re},d.a.createElement(g.a,null,d.a.createElement("div",{className:""},d.a.createElement(J,null),d.a.createElement("div",{className:"content"},d.a.createElement(G.c,null,d.a.createElement(G.a,{exact:!0,path:"/",component:z}),d.a.createElement(G.a,{exact:!0,path:"/create",component:H}),d.a.createElement(G.a,{exact:!0,path:"/meetup/:id",component:W}),d.a.createElement(G.a,{path:"/signup"},d.a.createElement(I,null)),d.a.createElement(G.a,{path:"*"}))))))};p.a.render(d.a.createElement(d.a.StrictMode,null,d.a.createElement(le,null)),document.getElementById("root"))},18:function(e,t,a){"use strict";a.r(t);var n=a(89),r=a(90),l=a(78),c=a.n(l),o=function(){function e(){Object(n.a)(this,e)}return Object(r.a)(e,[{key:"getProfile",value:function(){return c()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return c()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}();t.default=new o}},[[101,1,2]]]);
//# sourceMappingURL=main.b5ee857e.chunk.js.map