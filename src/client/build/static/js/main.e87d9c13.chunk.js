(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{101:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return s}));var c=n(167),r=(n(207),n(25)),a=c.a.initializeApp(JSON.parse(e.from(r.a,"base64").toString("ascii"))),s=a.auth()}).call(this,n(128).Buffer)},162:function(e,t,n){},200:function(e,t,n){},201:function(e,t,n){},202:function(e,t,n){},25:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return r}));var c="/api",r="eyJhcGlLZXkiOiJBSXphU3lCcllYb2YwZlRfalhnZVRya25OQXliNVV2eDFxVDBoZFkiLCJhdXRoRG9tYWluIjoiZHlub3RlLTk2MDlmLmZpcmViYXNlYXBwLmNvbSIsInByb2plY3RJZCI6ImR5bm90ZS05NjA5ZiIsInN0b3JhZ2VCdWNrZXQiOiJkeW5vdGUtOTYwOWYuYXBwc3BvdC5jb20iLCJtZXNzYWdpbmdTZW5kZXJJZCI6Ijk1NTgyMDcyNjM3NCIsImFwcElkIjoiMTo5NTU4MjA3MjYzNzQ6d2ViOjZjNGMzNGM5MGM1ZjEwODcwYWI1YTcifQ=="},328:function(e,t,n){},329:function(e,t,n){},330:function(e,t,n){},331:function(e,t,n){},332:function(e,t,n){},333:function(e,t,n){},352:function(e,t,n){},353:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(45),s=n.n(a),o=n(31),i=n(383),l=n(357),b=n(370),u=(n(125),n(197),Object(b.a)({colors:{brand:{light:"#F4F7F6",medium:"#0DBFBE",dark:"#041D2C",highlight:"#3EC7C2"}},textStyles:{default:{fontFamily:"Aileron"},cabin:{fontFamily:"Cabin"}}})),d=(n(199),n(200),n(22)),j=(n(201),n(168)),x=(n(202),n(11)),p=n.n(x),h=n(23),f=n(6),O=n(101),m=n(28),k=n.n(m),g=n(25),_=n(182),v=n(4),w=Object(c.createContext)();function C(){return Object(c.useContext)(w)}function S(e){var t=e.children,n=Object(c.useState)(),r=Object(f.a)(n,2),a=r[0],s=r[1],o=Object(c.useState)(),i=Object(f.a)(o,2),l=i[0],b=i[1],u=Object(c.useState)(!0),j=Object(f.a)(u,2),x=j[0],m=j[1],C=Object(d.g)(),S=Object(d.h)();function N(){return(N=Object(h.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=new _.a.auth.GoogleAuthProvider,e.next=4,O.a.signInWithPopup(t);case 4:n=e.sent,console.log("User Signed In:"),console.log(n.user),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function I(){return(I=Object(h.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(void 0),e.next=3,O.a.signOut();case 3:C.push("/home");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return(y=Object(h.a)(p.a.mark((function e(t){var n,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t){e.next=14;break}return e.t0=k.a,e.t1="".concat(g.b,"/user/"),e.t2={username:t.displayName},e.next=7,t.getIdToken();case 7:return e.t3=e.sent,e.t4={firebase_token:e.t3},e.t5={headers:e.t4},e.next=12,e.t0.post.call(e.t0,e.t1,e.t2,e.t5);case 12:c=e.sent,n=c.data;case 14:return b(n),e.abrupt("return",n);case 18:e.prev=18,e.t6=e.catch(0),console.log(e.t6);case 21:case"end":return e.stop()}}),e,null,[[0,18]])})))).apply(this,arguments)}Object(c.useEffect)((function(){return O.a.onAuthStateChanged((function(e){s(e),function(e){return y.apply(this,arguments)}(e).then((function(t){m(!1),e&&t&&("/"!==S.pathname&&"/home"!==S.pathname||C.push("/workspace"))}))}))}),[]);var D={firebaseUser:a,backendUser:l,setBackendUser:b,signup:function(){return N.apply(this,arguments)},logout:function(){return I.apply(this,arguments)}};return Object(v.jsx)(w.Provider,{value:D,children:!x&&t})}var N=function(){var e=C().signup;return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"home__hero",children:[Object(v.jsxs)("div",{className:"home__nav",children:[Object(v.jsx)("div",{className:"dynote__logo"}),Object(v.jsxs)("div",{className:"home__login",onClick:e,children:[Object(v.jsx)("h1",{children:"LOGIN"}),Object(v.jsx)(j.a,{})]})]}),Object(v.jsxs)("div",{className:"main__header",children:[Object(v.jsx)("div",{className:"main__heading",children:Object(v.jsxs)("h1",{children:[" ",Object(v.jsx)("span",{style:{color:"#3EC7C2"},children:"DY"}),"NOTE"]})}),Object(v.jsx)(o.b,{to:"/workspace",className:"home__login",children:Object(v.jsx)("h1",{children:"GET STARTED"})})]}),Object(v.jsx)("div",{className:"home__decor"})]})})},I=n(169),y=n.n(I),D=n(170),E=n(26);var T=r.a.createContext();function R(){return Object(c.useContext)(T)}function B(e){var t=e.children,n=C().backendUser,r=function(e,t,n,r){var a=C(),s=a.firebaseUser,o=(a.backendUser,Object(c.useState)()),i=Object(f.a)(o,2),l=i[0],b=i[1],u=Object(c.useState)(),d=Object(f.a)(u,2),j=d[0],x=d[1],O=function(){var t=Object(h.a)(p.a.mark((function t(n){var c,r,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!s){t.next=7;break}return t.next=4,s.getIdToken();case 4:t.t0=t.sent,t.next=8;break;case 7:t.t0="";case 8:return c=t.t0,t.next=11,k.a.get("".concat(e,"/").concat(n),{headers:{firebase_token:c}});case 11:r=t.sent,a=r.data,x(a),t.next=20;break;case 16:t.prev=16,t.t1=t.catch(0),console.log(t.t1),console.log(t.t1.response.data);case 20:case"end":return t.stop()}}),t,null,[[0,16]])})));return function(e){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){l&&O(l)}),[l]),Object(c.useEffect)((function(){t&&r&&(l&&t[n].includes(l)||t[n][0]&&b(t[n][0]._id))}),[t]),[l,b,j,x]}("".concat(g.b,"/workspace"),n,"workspaces",!0),a=Object(f.a)(r,4),s=a[0],o=a[1],i=a[2],l=a[3];return Object(v.jsx)(T.Provider,{value:{currentWorkspaceId:s,workspaceData:i,setWorkspaceData:l,setCurrentWorkspaceId:o},children:t})}var F=r.a.createContext();function W(){return Object(c.useContext)(F)}function U(e){var t=e.children,n=R().workspaceData,r=Object(c.useState)(),a=Object(f.a)(r,2),s=a[0],o=a[1],i=Object(c.useState)(),l=Object(f.a)(i,2),b=l[0],u=l[1];return Object(c.useEffect)((function(){s&&n&&u(n.notebooks.find((function(e){return e._id===s})))}),[s]),Object(c.useEffect)((function(){n&&(s&&n.notebooks.includes(s)||n.notebooks[0]&&o(n.notebooks[0]._id))}),[n]),Object(v.jsx)(F.Provider,{value:{currentNotebookId:s,notebookData:b,setCurrentNotebookId:o,setNotebookData:u},children:t})}var z=r.a.createContext();function L(){return Object(c.useContext)(z)}function A(e){var t=e.children,n=W(),r=(n.notebookData,n.currentNotebookId),a=n.setCurrentNotebookId,s=C(),o=s.firebaseUser,i=s.backendUser,l=R(),b=l.currentWorkspaceId,u=l.setCurrentWorkspaceId,d=Object(c.useState)(),j=Object(f.a)(d,2),x=j[0],O=j[1],m=Object(c.useState)(),_=Object(f.a)(m,2),w=_[0],S=_[1],N=Object(c.useState)(),I=Object(f.a)(N,2),y=I[0],D=I[1],T=function(e,t){return e.start_time<t.start_time?-1:e.start_time>t.start_time?1:0},B=function(e){e=e.sort(T),D((function(t){return e})),S((function(t){return Object(E.a)(Object(E.a)({},t),{},{notes:e})}))},F=function(){var e=Object(h.a)(p.a.mark((function e(t){var n,c,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!o){e.next=7;break}return e.next=4,o.getIdToken();case 4:e.t0=e.sent,e.next=8;break;case 7:e.t0="";case 8:return n=e.t0,e.next=11,k.a.get("".concat(g.b,"/scroll/").concat(t),{headers:{firebase_token:n}});case 11:c=e.sent,s=c.data,S(s),B(s.notes),s.owner===i._id&&s.notebook!==r&&(a(s.notebook),s.workspace!==b&&u(s.workspace)),e.next=22;break;case 18:e.prev=18,e.t1=e.catch(0),console.log(e.t1),e.t1.response&&console.log(e.t1.response.data);case 22:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){x&&F(x)}),[x]),Object(v.jsx)(z.Provider,{value:{currentScrollId:x,setCurrentScrollId:O,scrollData:w,setScrollData:S,notes:y,setNotes:B},children:t})}var Z=function(e){var t=e.note,n=e.patchNote,r=e.editable,a=void 0===r||r,s=C().backendUser,o=L().scrollData,i=Object(c.useState)(!1),l=Object(f.a)(i,2),b=l[0],u=l[1];Object(c.useEffect)((function(){u(a&&s&&o&&s._id===o.owner)}),[s,o]);var d=Object(c.useState)(t.name),j=Object(f.a)(d,2),x=j[0],O=j[1],m=Object(c.useState)(t.content||""),k=Object(f.a)(m,2),g=k[0],_=k[1],w=Object(c.useState)(!1),S=Object(f.a)(w,2),N=S[0],I=S[1],E=function(){var e=Object(h.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!b||!n){e.next=3;break}return e.next=3,n(t._id,{content:g});case 3:I(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(h.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!b||!n){e.next=3;break}return e.next=3,n(t._id,{name:x});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"notes__currentnote",children:[Object(v.jsxs)("h1",{className:"notes__cureentheading",contentEditable:b,onInput:function(e){O(e.target.innerText)},onBlur:T,style:{outlineWidth:"0px"},children:[x,Object(v.jsxs)("span",{style:{marginLeft:"5%",cursor:"pointer"},children:[" ",b&&Object(v.jsx)(D.a,{onClick:function(){return I(!0)},size:"24px"})]})]}),Object(v.jsx)(y.a,{modules:{toolbar:[[{header:[1,2,!1]}],["bold","italic","underline","strike","blockquote"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["link","image"],["clean"]]},theme:"bubble",className:"notes__body",value:g,onChange:function(e){I(!0),_(e)},readOnly:!N}),Object(v.jsxs)("div",{className:"notes__footer",children:[Object(v.jsxs)("div",{className:"notes__time",children:[t.start_time,"s"]}),N?Object(v.jsx)("div",{onClick:E,className:"notes__save",children:"SAVE"}):null]})]})};var M=function(e){return"https://img.youtube.com/vi/".concat(function(e,t){var n=RegExp("[?&]"+t+"=([^&]*)").exec(e);return n&&decodeURIComponent(n[1].replace(/\+/g," "))}(e,"v"),"/sddefault.jpg")},Y=(n(328),function(e){var t=e.match,n=L(),r=(n.currentScrollId,n.setCurrentScrollId),a=n.scrollData,s=(n.setScrollData,n.notes);n.setNotes;Object(c.useEffect)((function(){r(t.params.id)}),[]);var o=M(a&&a.vid_link);return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"pdf__container",children:[Object(v.jsx)("div",{style:{backgroundImage:"url(".concat(o,")")},className:"pdf__thumbnail"}),s&&s.map((function(e){return Object(v.jsx)(Z,{note:e,editable:!1})}))]})})}),J=n(371),G=n(386),P=n(390),V=n(44),X=n(384),K=n(379),H=n(389),Q=n(380),q=n(381),$=n(391),ee=n(382),te=n(377),ne=n(378),ce=n(176),re=n(177),ae=(n(329),n(387)),se=n(54),oe=function(){var e=Object(J.a)(),t=e.isOpen,n=e.onOpen,r=e.onClose,a=Object(c.useRef)(),s=C(),o=s.firebaseUser,i=s.backendUser,l=s.setBackendUser,b=function(){var e=Object(h.a)(p.a.mark((function e(){var t,n,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,e.t0=k.a,e.t1="".concat(g.b,"/workspace"),e.t2={name:a.current.value},!o){e.next=10;break}return e.next=7,o.getIdToken();case 7:e.t3=e.sent,e.next=11;break;case 10:e.t3="";case 11:return e.t4=e.t3,e.t5={firebase_token:e.t4},e.t6={headers:e.t5},e.next=16,e.t0.post.call(e.t0,e.t1,e.t2,e.t6);case 16:t=e.sent,n=t.data,(c=i.workspaces.map((function(e){return Object(E.a)({},e)}))).push(n),l(Object(E.a)(Object(E.a)({},i),{},{workspaces:c})),r(),e.next=29;break;case 24:e.prev=24,e.t7=e.catch(0),console.log(e.t7),console.log(e.t7.response.data),r();case 29:case"end":return e.stop()}}),e,null,[[0,24]])})));return function(){return e.apply(this,arguments)}}();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(G.a,{color:"white",bg:"transparent",borderRadius:"0px",ml:"3",width:"90%",_hover:{bg:"none"},_focus:{boxShadow:"0 0 0px 0px rgba(88, 144, 255, 0), 0 1px 1px rgba(0, 0, 0, 0)"},_active:{bg:"none"},onClick:n,children:Object(v.jsx)(se.b,{size:"16px"})}),Object(v.jsxs)(V.a,{isOpen:t,onClose:r,children:[Object(v.jsx)(V.h,{}),Object(v.jsxs)(V.d,{children:[Object(v.jsx)(V.g,{children:"Create WorkSpace"}),Object(v.jsx)(V.c,{_focus:{boxShadow:"0 0 0px 0px rgba(88, 144, 255, 0), 0 1px 1px rgba(0, 0, 0, 0)"}}),Object(v.jsx)(V.b,{children:Object(v.jsx)(ae.a,{_focus:{boxShadow:"0 0 0px 0px rgba(88, 144, 255, 0), 0 1px 1px rgba(0, 0, 0, 0)"},ref:a,placeholder:"Workspace Title"})}),Object(v.jsx)(V.f,{children:Object(v.jsx)(G.a,{_focus:{boxShadow:"0 0 0px 0px rgba(88, 144, 255, 0), 0 1px 1px rgba(0, 0, 0, 0)"},_hover:{bg:"brand.highlight"},bg:"brand.medium",color:"white",mr:3,onClick:function(){b()},children:"Create"})})]})]})]})},ie=function(){var e=Object(J.a)(),t=e.isOpen,n=e.onOpen,r=e.onClose,a=Object(c.useRef)(),s=C().firebaseUser,o=R(),i=o.workspaceData,l=o.currentWorkspaceId,b=o.setWorkspaceData,u=function(){var e=Object(h.a)(p.a.mark((function e(){var t,n,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,e.t0=k.a,e.t1="".concat(g.b,"/notebook"),e.t2={name:a.current.value,workspace_id:l},!s){e.next=10;break}return e.next=7,s.getIdToken();case 7:e.t3=e.sent,e.next=11;break;case 10:e.t3="";case 11:return e.t4=e.t3,e.t5={firebase_token:e.t4},e.t6={headers:e.t5},e.next=16,e.t0.post.call(e.t0,e.t1,e.t2,e.t6);case 16:t=e.sent,n=t.data,(c=i.notebooks.map((function(e){return Object(E.a)({},e)}))).push(n),b(Object(E.a)(Object(E.a)({},i),{},{notebooks:c})),r(),e.next=29;break;case 24:e.prev=24,e.t7=e.catch(0),console.log(e.t7),e.t7.response&&console.log(e.t7.response.data),r();case 29:case"end":return e.stop()}}),e,null,[[0,24]])})));return function(){return e.apply(this,arguments)}}();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(G.a,{color:"white",bg:"brand.medium",_hover:{bg:"brand.highlight"},_focus:{boxShadow:"0 0 0px 0px rgba(88, 144, 255, 0), 0 1px 1px rgba(0, 0, 0, 0)"},_active:{bg:"none"},leftIcon:Object(v.jsx)(se.a,{size:"20px"}),onClick:n,children:"ADD NOTEBOOK"}),Object(v.jsxs)(V.a,{isOpen:t,onClose:r,children:[Object(v.jsx)(V.h,{}),Object(v.jsxs)(V.d,{children:[Object(v.jsx)(V.g,{children:"Create Notebook"}),Object(v.jsx)(V.c,{_focus:{boxShadow:"0 0 0px 0px rgba(88, 144, 255, 0), 0 1px 1px rgba(0, 0, 0, 0)"}}),Object(v.jsx)(V.b,{children:Object(v.jsx)(ae.a,{_focus:{boxShadow:"0 0 0px 0px rgba(88, 144, 255, 0), 0 1px 1px rgba(0, 0, 0, 0)"},placeholder:"NoteBook Title",ref:a})}),Object(v.jsx)(V.f,{children:Object(v.jsx)(G.a,{_focus:{boxShadow:"0 0 0px 0px rgba(88, 144, 255, 0), 0 1px 1px rgba(0, 0, 0, 0)"},_hover:{bg:"brand.highlight"},bg:"brand.medium",color:"white",mr:3,onClick:u,children:"Create"})})]})]})]})},le=n(388),be=n(56),ue=(n(330),function(){var e=R().workspaceData,t=W(),n=t.currentNotebookId,c=t.setCurrentNotebookId,r=L().currentScrollId;return Object(v.jsx)(le.a,{defaultIndex:function(){var t=0;return e&&e.notebooks&&(t=Math.max(0,e.notebooks.findIndex((function(e){return e._id===n})))),[t]}(),allowMultiple:!0,children:e&&e.notebooks&&e.notebooks.map((function(e){return Object(v.jsxs)(le.c,{border:"none",_focus:{boxShadow:"0 0 0px 0px rgba(88, 144, 255, 0), 0 1px 1px rgba(0, 0, 0, 0)"},children:[Object(v.jsx)("h2",{children:Object(v.jsx)(le.b,{_focus:{boxShadow:"0 0 0px 0px rgba(88, 144, 255, 0), 0 1px 1px rgba(0, 0, 0, 0)"},onClick:function(){c(e._id)},children:Object(v.jsxs)(te.a,{_focus:{boxShadow:"0 0 0px 0px rgba(88, 144, 255, 0), 0 1px 1px rgba(0, 0, 0, 0)"},color:"white",flex:"1",textStyle:"default",textTransform:"uppercase",textAlign:"left",children:[e.name,Object(v.jsx)(ne.a,{ml:"1",mb:"1",colorScheme:"transparent",children:Object(v.jsx)(be.a,{})})]})})}),Object(v.jsx)(le.d,{textTransform:"uppercase",textAlign:"center",color:"white",pb:4,children:Object(v.jsx)(H.a,{spacing:"3",children:e&&e.scrolls&&e.scrolls.map((function(e){return Object(v.jsx)(o.b,{to:"/workspace/scroll/".concat(e._id),className:"notebook__link"+(e._id===r?" notebook__active":""),children:e.name})}))})})]})}))})}),de=function(){var e=Object(J.a)(),t=e.isOpen,n=e.onOpen,c=e.onClose,r=C(),a=r.firebaseUser,s=r.logout,o=r.backendUser,i=R(),l=(i.workspaceData,i.currentWorkspaceId),b=i.setCurrentWorkspaceId;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(G.a,{className:"sidebar__button",pos:"fixed",zIndex:2,variant:"ghost",bg:"brand.light",borderRadius:"0px",fontSize:"md",_focus:{boxShadow:"0 0 0px 0px rgba(88, 144, 255, 0), 0 1px 1px rgba(0, 0, 0, 0)"},onClick:n,children:Object(v.jsx)(ce.a,{size:"16px"})}),Object(v.jsx)(P.a,{placement:"left",textStyle:"default",onClose:c,isOpen:t,children:Object(v.jsx)(V.h,{children:Object(v.jsxs)(P.b,{children:[Object(v.jsx)(V.g,{display:"flex",alignItems:"center",justifyContent:"center",bg:"brand.dark",children:Object(v.jsxs)(X.a,{children:[Object(v.jsx)(X.b,{as:G.a,textStyle:"default",_hover:{bg:"transparent"},width:"100%",_active:{bg:"transparent",transform:"scale(0.98)",borderColor:"#bec3c9"},_focus:{boxShadow:"0 0 0px 0px rgba(88, 144, 255, 0), 0 1px 1px rgba(0, 0, 0, 0)"},textTransform:"uppercase",borderRadius:"0px",bg:"brand.dark",textAlign:"left",color:"white",leftIcon:Object(v.jsx)(oe,{}),rightIcon:Object(v.jsx)(re.a,{}),children:function(){if(o){var e=o.workspaces.find((function(e){return e._id===l}));return e&&e.name?e.name:"no workspace"}return"no workspace"}()}),Object(v.jsx)(X.d,{boxShadow:"-1px 0px 11px 1px rgba(0,0,0,0.75); -webkit-box-shadow: -1px 0px 11px 1px rgba(0,0,0,0.75); -moz-box-shadow: -1px 0px 11px 1px rgba(0,0,0,0.75);",fontSize:"sm",width:"118.7%",textTransform:"uppercase",bg:"brand.light",borderRadius:"none",children:o&&o.workspaces&&o.workspaces.filter((function(e){return e._id!==l})).map((function(e){return Object(v.jsx)(X.c,{onClick:function(){return b(e._id)},textAlign:"center",textTransform:"uppercase",children:Object(v.jsx)(K.a,{textAlign:"center",width:"100%",children:e.name})})}))})]})}),Object(v.jsx)(V.b,{bg:"brand.dark",children:Object(v.jsxs)(H.a,{mt:"12",spacing:"10",children:[Object(v.jsx)(ie,{}),Object(v.jsx)(ue,{})]})}),Object(v.jsx)(Q.a,{}),Object(v.jsx)(V.f,{bg:"brand.dark",color:"brand.light",alignItems:"left",children:Object(v.jsxs)(q.a,{width:"100%",alignItems:"left",children:[Object(v.jsx)($.a,{src:a&&a.photoURL?a.photoURL:"https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg"}),Object(v.jsx)(ee.a,{}),Object(v.jsxs)(te.a,{ml:"3",children:[Object(v.jsxs)(K.a,{fontWeight:"bold",children:[a&&a.displayName?a.displayName:"Darsh Kaushik",Object(v.jsx)(ne.a,{ml:"1",sx:{cursor:"pointer"},colorScheme:"red",onClick:s,children:"logout"})]}),Object(v.jsx)(K.a,{fontSize:"sm",children:a&&a.email?a.email:"xyz@gmail.com"})]})]})})]})})})]})},je=n(392),xe=(n(162),function(e){var t=e.scroll,n=M(t.vid_link);return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(o.b,{to:"/workspace/scroll/".concat(t._id),className:"scroll__cardcontainer",children:[Object(v.jsx)("div",{style:{backgroundImage:"url(".concat(n,")")},className:"scroll__thumbnail"}),Object(v.jsx)("h4",{children:t.name})]})})}),pe=(n(331),function(){var e=Object(J.a)(),t=e.isOpen,n=e.onOpen,r=e.onClose,a=C().firebaseUser,s=Object(c.useRef)(),i=Object(c.useRef)(),l=R(),b=l.workspaceData,u=(l.currentWorkspaceId,l.setWorkspaceData),d=function(){var e=Object(h.a)(p.a.mark((function e(){var t,n,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,e.t0=k.a,e.t1="".concat(g.b,"/scroll"),e.t2={name:s.current.value,notebook_id:j,vid_link:i.current.value},!a){e.next=10;break}return e.next=7,a.getIdToken();case 7:e.t3=e.sent,e.next=11;break;case 10:e.t3="";case 11:return e.t4=e.t3,e.t5={firebase_token:e.t4},e.t6={headers:e.t5},e.next=16,e.t0.post.call(e.t0,e.t1,e.t2,e.t6);case 16:t=e.sent,n=t.data,(c=b.notebooks.map((function(e){return Object(E.a)({},e)}))).find((function(e){return e._id===j})).scrolls.push(n),u(Object(E.a)(Object(E.a)({},b),{},{notebooks:c})),r(),e.next=29;break;case 24:e.prev=24,e.t7=e.catch(0),console.log(e.t7),console.log(e.t7.response.data),r();case 29:case"end":return e.stop()}}),e,null,[[0,24]])})));return function(){return e.apply(this,arguments)}}(),j=W().currentNotebookId;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(o.b,{onClick:n,className:"scroll__cardcontainer",children:[Object(v.jsx)("div",{className:"scroll__thumbnail",children:Object(v.jsx)(se.b,{size:"3vw",color:"#0DBFBE"})}),Object(v.jsx)("h4",{children:"CREATE NEW SCROLL"})]}),Object(v.jsxs)(V.a,{isOpen:t,onClose:r,children:[Object(v.jsx)(V.h,{}),Object(v.jsxs)(V.d,{children:[Object(v.jsx)(V.g,{children:"ADD SCROLL"}),Object(v.jsx)(V.c,{_focus:{boxShadow:"0 0 0px 0px rgba(88, 144, 255, 0), 0 1px 1px rgba(0, 0, 0, 0)"}}),Object(v.jsx)(V.b,{children:Object(v.jsxs)(H.a,{spacing:5,children:[Object(v.jsx)(ae.a,{_focus:{boxShadow:"0 0 0px 0px rgba(88, 144, 255, 0), 0 1px 1px rgba(0, 0, 0, 0)"},placeholder:"SCROLL TITLE",ref:s}),Object(v.jsx)(ae.a,{_focus:{boxShadow:"0 0 0px 0px rgba(88, 144, 255, 0), 0 1px 1px rgba(0, 0, 0, 0)"},ref:i,placeholder:"VIDEO LINK"})]})}),Object(v.jsx)(V.f,{children:Object(v.jsx)(G.a,{_focus:{boxShadow:"0 0 0px 0px rgba(88, 144, 255, 0), 0 1px 1px rgba(0, 0, 0, 0)"},_hover:{bg:"brand.highlight"},bg:"brand.medium",color:"white",mr:3,onClick:d,children:"ADD"})})]})]})]})}),he=(n(332),function(){var e=W().notebookData;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("div",{className:"scrolls__header",children:[Object(v.jsx)("div",{className:"scrolls__icon",children:Object(v.jsx)(be.b,{size:"25px"})}),Object(v.jsx)("h1",{style:{textTransform:"uppercase"},children:e&&e.name}),Object(v.jsx)("span",{className:"scrolls__underlinedecor"})]}),Object(v.jsxs)(je.a,{mt:"20",columns:[3,4,4],spacing:"10",children:[e&&e.scrolls&&e.scrolls.map((function(e){return Object(v.jsx)(xe,{scroll:e})})),Object(v.jsx)(pe,{})]})]})}),fe=(n(333),n(20)),Oe=n(178),me=n.n(Oe),ke=(n(351),n(352),n(180)),ge=n(385),_e=function(e){var t=e.match,n=L(),r=n.currentScrollId,a=n.setCurrentScrollId,s=n.scrollData,i=n.setScrollData,l=n.notes,b=n.setNotes,u=Object(c.useRef)(),d=C().firebaseUser,j=Object(c.useState)(),x=Object(f.a)(j,2),O=x[0],m=x[1],_=Object(ge.a)();Object(c.useEffect)((function(){a(t.params.id)}),[]),Object(c.useEffect)((function(){l&&l[0]&&!O&&m(l[0]._id)}),[l,s]);var w=function(){var e=Object(h.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!s){e.next=20;break}if(e.t0=k.a,e.t1="".concat(g.b,"/scroll/").concat(s._id),e.t2={public:!s.public},!d){e.next=11;break}return e.next=8,d.getIdToken();case 8:e.t3=e.sent,e.next=12;break;case 11:e.t3="";case 12:return e.t4=e.t3,e.t5={firebase_token:e.t4},e.t6={headers:e.t5},e.next=17,e.t0.patch.call(e.t0,e.t1,e.t2,e.t6);case 17:t=e.sent,n=t.data,i(Object(E.a)(Object(E.a)({},s),{},{public:n.public}));case 20:e.next=25;break;case 22:e.prev=22,e.t7=e.catch(0),console.log(e.t7);case 25:case"end":return e.stop()}}),e,null,[[0,22]])})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(h.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,e.t0=k.a,e.t1="".concat(g.b,"/note"),e.t2={name:"NOTE",scroll_id:r,content:"",start_time:u.current.getCurrentTime()||0},!d){e.next=10;break}return e.next=7,d.getIdToken();case 7:e.t3=e.sent,e.next=11;break;case 10:e.t3="";case 11:return e.t4=e.t3,e.t5={firebase_token:e.t4},e.t6={headers:e.t5},e.next=16,e.t0.post.call(e.t0,e.t1,e.t2,e.t6);case 16:t=e.sent,n=t.data,console.log(n),n&&b([].concat(Object(fe.a)(l),[n])),e.next=26;break;case 22:e.prev=22,e.t7=e.catch(0),console.log(e.t7),console.log(e.t7.response);case 26:case"end":return e.stop()}}),e,null,[[0,22]])})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(h.a)(p.a.mark((function e(t,n){var c,r,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,e.t0=k.a,e.t1="".concat(g.b,"/note/").concat(t),e.t2=n,!d){e.next=10;break}return e.next=7,d.getIdToken();case 7:e.t3=e.sent,e.next=11;break;case 10:e.t3="";case 11:return e.t4=e.t3,e.t5={firebase_token:e.t4},e.t6={headers:e.t5},e.next=16,e.t0.patch.call(e.t0,e.t1,e.t2,e.t6);case 16:c=e.sent,r=c.data,(a=(a=l.map((function(e){return Object(E.a)({},e)}))).filter((function(e){return e._id!==r._id}))).push(r),b(a),e.next=28;break;case 24:e.prev=24,e.t7=e.catch(0),console.log(e.t7),console.log(e.t7.response.data);case 28:case"end":return e.stop()}}),e,null,[[0,24]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"notes__container",children:[Object(v.jsxs)("div",{className:"notes__videoemb",children:[Object(v.jsx)(me.a,{className:"notes__vid",controls:!0,url:s&&s.vid_link,ref:u,onProgress:function(e){e.played;var t=e.playedSeconds;e.loaded,e.loadedSeconds;if(l&&l.length>0){var n=l.findIndex((function(e){return e.start_time>t}));n=-1===n?l.length-1:Math.max(0,n-1),l&&l[n]&&m(l[n]._id)}}}),Object(v.jsxs)("div",{className:"notes__scroll",children:[Object(v.jsxs)("div",{className:"notes__scrollhead",children:[Object(v.jsx)(se.b,{onClick:S,size:"24px",color:"#0DBFBE",style:{cursor:"pointer"}}),s&&s.public?Object(v.jsx)(be.c,{size:"24px",onClick:w,style:{cursor:"pointer"},color:"#0DBFBE"}):Object(v.jsx)(be.d,{size:"24px",style:{cursor:"pointer"},color:"#0DBFBE",onClick:w}),Object(v.jsx)(ke.a,{size:"24px",style:{cursor:"pointer"},color:"#0DBFBE",onClick:function(){try{navigator.clipboard.writeText(window.location),_({title:"Copied To Clipboard Successfully",description:"Sharing Link Copied to clipboard",status:"success",duration:9e3,isClosable:!0})}catch(e){_({title:"Could note copy to clipboard",description:"Could note copy to clipboard, please use the current URL instead",status:"error",duration:9e3,isClosable:!0})}}})]}),Object(v.jsx)("div",{className:"notes__scrollbody",children:l&&l.map((function(e){return Object(v.jsxs)("div",{style:{cursor:"pointer"},className:"notes__scrollselect"+(O===e._id?" scroll__active":""),onClick:function(){m(e._id),u.current.seekTo(e.start_time,"seconds")},children:[Object(v.jsxs)("div",{className:"scroll__time",children:[e.start_time,"s"]}),Object(v.jsx)("div",{className:"scroll__title",children:e.name})]})}))})]})]}),l&&l.find((function(e){return e._id===O}))&&Object(v.jsx)(Z,{patchNote:N,note:l.find((function(e){return e._id===O}))}),s&&Object(v.jsx)(o.b,{target:"_blank",to:"/scroll/pdf/".concat(s._id),className:"notes__pdfmode",children:Object(v.jsx)(be.e,{size:"30px"})})]})})},ve=function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(de,{}),Object(v.jsx)("div",{className:"main__container",children:Object(v.jsxs)(d.d,{children:[Object(v.jsx)(d.b,{path:"/workspace/scroll/:id",component:_e}),Object(v.jsx)(d.b,{path:"/",component:he})]})})]})};var we=function(){return console.log(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).FIREBASE_WEB_CONFIG_BASE64),Object(v.jsx)(S,{children:Object(v.jsx)(B,{children:Object(v.jsx)(U,{children:Object(v.jsx)(A,{children:Object(v.jsxs)(d.d,{children:[Object(v.jsx)(d.b,{path:"/scroll/pdf/:id",component:Y}),Object(v.jsx)(d.b,{path:"/home",component:N}),Object(v.jsx)(d.b,{path:"/workspace",component:ve}),Object(v.jsx)(d.a,{from:"/",exact:!0,to:"/home"}),Object(v.jsx)(d.a,{from:"/index.html/workspace",exact:!0,to:"/workspace"}),Object(v.jsx)(d.a,{from:"/index.html/home",exact:!0,to:"/home"}),Object(v.jsx)(d.a,{from:"/index.html/",exact:!0,to:"/home"}),Object(v.jsx)(d.b,{exact:!0,path:"/index.html/scroll/pdf/:id",render:function(e){var t=e.match;return Object(v.jsx)(d.a,{to:"/scroll/pdf/".concat(t.params.id)})}}),Object(v.jsx)(d.b,{path:"/index.html/workspace/scroll/:id",render:function(e){var t=e.match;return console.log("hit"),Object(v.jsx)(d.a,{to:"/workspace/scroll/".concat(t.params.id)})}})]})})})})})};s.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(o.a,{children:Object(v.jsxs)(i.a,{theme:u,children:[Object(v.jsx)(l.a,{}),Object(v.jsx)(we,{})]})})}),document.getElementById("root"))}},[[353,1,2]]]);
//# sourceMappingURL=main.e87d9c13.chunk.js.map