(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{69:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(17),s=n.n(a),i=n(18),o=n(19),u=n(22),j=n(21),d=n(1),b=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{children:"Header"})}}]),n}(r.Component),l=b;var O,f,p=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(l,{})})},h=n(9),x=n(13),v=n.n(x),m=n(20),g=n(36),w=n.n(g).a.create({baseURL:"http://localhost:5000/api/"}),y=n(8),k=Object(y.b)("posts/getAll",Object(m.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.get("/posts");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))),A=n(11),E=Object(y.b)("infos/getAll",Object(m.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.get("/infos");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))),R=function(){var e=Object(A.b)();return Object(r.useEffect)((function(){e(E())}),[e]),Object(d.jsx)("div",{})},S=function(){var e=Object(A.b)();Object(r.useEffect)((function(){e(k())}),[e]);var t=Object(A.c)((function(e){return e.posts.posts})).map((function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:e.title}),Object(d.jsx)("p",{children:e.body})]},e.id)}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Home"}),Object(d.jsx)(R,{}),t]})},B=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(h.d,{children:[Object(d.jsx)(h.b,{exact:!0,path:"/",render:function(){return Object(d.jsx)(c.a.Fragment,{children:Object(d.jsx)(S,{})})}}),Object(d.jsx)(h.a,{to:"/"})]})})}}]),n}(r.Component),C=B,H=n(10),J=Object(y.c)({name:"post",initialState:{posts:[],loading:!1,error:null},extraReducers:(O={},Object(H.a)(O,k.pending,(function(e,t){e.status="loading"})),Object(H.a)(O,k.fulfilled,(function(e,t){e.posts=t.payload,e.status="succeeded"})),Object(H.a)(O,k.rejected,(function(e,t){e.error=t.error,e.status="failed"})),O)}).reducer,W=Object(y.c)({name:"infos",initialState:{infos:[],loading:!1,error:null},extraReducers:(f={},Object(H.a)(f,E.pending,(function(e,t){e.status="loading"})),Object(H.a)(f,E.fulfilled,(function(e,t){e.status="succeeded",e.infos=t.payload})),Object(H.a)(f,E.rejected,(function(e,t){e.status="failed",e.error=t.error.message})),f)}).reducer,F=Object(y.a)({reducer:{posts:J,infos:W}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=n(25);s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(A.a,{store:F,children:Object(d.jsxs)(I.a,{children:[Object(d.jsx)(p,{}),Object(d.jsx)(C,{})]})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[69,1,2]]]);
//# sourceMappingURL=main.27dd6de4.chunk.js.map