(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{177:function(t,e,n){},182:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(21),o=n.n(c),i=(n(129),n(130),n(18)),s=n(19),l=n(23),u=n(22),j=n(13),d=n(247),b=n(252),p=n(250),h=n(253),O=n(251),x=n(242),m=n(105),f=n.n(m),g=n(249),v=n(246),y=n(245),w=n(241),k=n(244),C=n(2),S=["Products","Pricing","Blog"],M=["Profile","Account","Dashboard","Logout"],I=function(){var t=a.useState(null),e=Object(j.a)(t,2),n=e[0],r=e[1],c=a.useState(null),o=Object(j.a)(c,2),i=o[0],s=o[1],l=function(){r(null)};return Object(C.jsx)(d.a,{position:"fixed",children:Object(C.jsx)(g.a,{maxWidth:"xl",children:Object(C.jsxs)(p.a,{disableGutters:!0,children:[Object(C.jsx)(O.a,{variant:"h6",noWrap:!0,component:"div",sx:{mr:2,display:{xs:"none",md:"flex"}},children:"LOGO"}),Object(C.jsxs)(b.a,{sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:[Object(C.jsx)(h.a,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(t){r(t.currentTarget)},color:"inherit",children:Object(C.jsx)(f.a,{})}),Object(C.jsx)(x.a,{id:"menu-appbar",anchorEl:n,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:Boolean(n),onClose:l,sx:{display:{xs:"block",md:"none"}},children:S.map((function(t){return Object(C.jsx)(k.a,{onClick:l,children:Object(C.jsx)(O.a,{textAlign:"center",children:t})},t)}))})]}),Object(C.jsx)(O.a,{variant:"h6",noWrap:!0,component:"div",sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:"LOGO"}),Object(C.jsx)(b.a,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:S.map((function(t){return Object(C.jsx)(y.a,{onClick:l,sx:{my:2,color:"white",display:"block"},children:t},t)}))}),Object(C.jsxs)(b.a,{sx:{flexGrow:0},children:[Object(C.jsx)(w.a,{title:"Open settings",children:Object(C.jsx)(h.a,{onClick:function(t){s(t.currentTarget)},sx:{p:0},children:Object(C.jsx)(v.a,{alt:"Remy Sharp",src:"/static/images/avatar/2.jpg"})})}),Object(C.jsx)(x.a,{sx:{mt:"45px"},id:"menu-appbar",anchorEl:i,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(i),onClose:function(){s(null)},children:M.map((function(t){return Object(C.jsx)(k.a,{onClick:l,children:Object(C.jsx)(O.a,{textAlign:"center",children:t})},t)}))})]})]})})})},E=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(C.jsxs)("div",{children:[Object(C.jsx)(I,{}),Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),Object(C.jsx)("br",{})]})}}]),n}(a.Component),N=E;var B=function(){return Object(C.jsx)("div",{className:"App",children:Object(C.jsx)(N,{})})},P=n(40),A=n(33),G=n.n(A),z=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(C.jsx)("div",{children:"sdqdqs"})}}]),n}(a.Component),F=z,R=(n(177),n(6)),W=n(7),D=n(243),L=[{url:"https://le-ptit-fermier-de-kervihan.fr/wp-content/uploads/2020/03/oeufs.jpg",title:"Produits",width:"40%"},{url:"https://www.ferme-de-saint-thibault.fr/wp-content/uploads/2015/11/elevage-de-poule-en-plein-air.jpg",title:"Exploitation",width:"30%"},{url:"/static/images/buttons/camera.jpg",title:"Camera",width:"30%"}],T=Object(W.a)(D.a)((function(t){var e,n=t.theme;return e={position:"relative",height:200},Object(R.a)(e,n.breakpoints.down("sm"),{width:"100% !important",height:100}),Object(R.a)(e,"&:hover, &.Mui-focusVisible",{zIndex:1,"& .MuiImageBackdrop-root":{opacity:.15},"& .MuiImageMarked-root":{opacity:0},"& .MuiTypography-root":{border:"4px solid currentColor"}}),e})),_=Object(W.a)("span")({position:"absolute",left:0,right:0,top:0,bottom:0,backgroundSize:"cover",backgroundPosition:"center 40%"}),q=Object(W.a)("span")((function(t){return{position:"absolute",left:0,right:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",color:t.theme.palette.common.white}})),U=Object(W.a)("span")((function(t){var e=t.theme;return{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:e.palette.common.black,opacity:.4,transition:e.transitions.create("opacity")}})),J=Object(W.a)("span")((function(t){var e=t.theme;return{height:3,width:18,backgroundColor:e.palette.common.white,position:"absolute",bottom:-2,left:"calc(50% - 9px)",transition:e.transitions.create("opacity")}}));function $(){return Object(C.jsx)(b.a,{sx:{display:"flex",flexWrap:"wrap",minWidth:300,width:"100%"},children:L.map((function(t){return Object(C.jsxs)(T,{focusRipple:!0,style:{width:t.width},children:[Object(C.jsx)(_,{style:{backgroundImage:"url(".concat(t.url,")")}}),Object(C.jsx)(U,{className:"MuiImageBackdrop-root"}),Object(C.jsx)(q,{children:Object(C.jsxs)(O.a,{component:"span",variant:"subtitle1",color:"inherit",sx:{position:"relative",p:4,pt:2,pb:function(t){return"calc(".concat(t.spacing(1)," + 6px)")}},children:[t.title,Object(C.jsx)(J,{className:"MuiImageMarked-root"})]})})]},t.title)}))})}var V,H,K=n(240),Q=n(44),X=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).state={users:[]},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=this;G.a.get("http://localhost:5000/api/clients").then((function(e){t.setState({users:e.data}),console.log(e.data)})).catch((function(t){console.log(t)}))}},{key:"render",value:function(){return Object(C.jsx)("div",{})}}]),n}(a.Component),Y=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).state={data:[]},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=this;G.a.get("http://localhost:5000/api/posts").then((function(e){t.setState({data:e.data.posts}),console.log(t.state.data)}))}},{key:"render",value:function(){return Object(C.jsx)("div",{children:Object(C.jsxs)("div",{className:"container",children:[Object(C.jsx)("h1",{style:{textAlign:"center"},children:"Images"}),this.state.data.map((function(t){return Object(C.jsxs)("div",{className:"imgBox",children:[Object(C.jsxs)("div",{style:{float:"right",margin:10},children:[Object(C.jsx)(v.a,{src:"https://bio-conquete.fr/wp-content/uploads/2020/10/IMG_7552-scaled.jpg"}),Object(C.jsx)(X,{})]}),Object(C.jsx)("h2",{children:t.name}),Object(C.jsxs)("p",{children:[t.price," $"]}),Object(C.jsx)($,{}),Object(C.jsx)("br",{}),Object(C.jsx)(Q.b,{to:"/details/".concat(t._id),children:Object(C.jsx)(K.a,{variant:"contained",disableElevation:!0,style:{float:"right",marginRight:25,backgroundColor:"blue",color:"white"},children:"En savoir plus"})}),Object(C.jsx)(F,{}),Object(C.jsx)("br",{})," ",Object(C.jsx)("br",{})," ",Object(C.jsx)("br",{})]},t._id)}))]})})}}]),n}(a.Component),Z=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).state={id:a.props.match.params.id,data:[],loading:!0,error:null},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=this;G.a.get("http://localhost:5000/api/upload/".concat(this.props.match.params.id)).then((function(e){t.setState({data:e.data,loading:!1}),console.log(t.state.data)})).catch((function(e){t.setState({error:e,loading:!1})}))}},{key:"render",value:function(){return Object(C.jsxs)("div",{className:"container",children:[Object(C.jsx)(Q.b,{to:"/",children:Object(C.jsx)(y.a,{variant:"contained",disableElevation:!0,children:"Retour"})}),Object(C.jsx)("div",{children:this.state.loading?Object(C.jsx)("div",{children:"Loading..."}):Object(C.jsxs)("div",{children:[Object(C.jsx)("h1",{children:this.state.data.name}),Object(C.jsx)("p",{children:this.state.data.description}),Object(C.jsx)($,{})]},this.state.data._id)})]})}}]),n}(a.Component),tt=n(41),et=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).state={name:"",email:"",password:"",file:null},a.onFormSubmit=a.onFormSubmit.bind(Object(tt.a)(a)),a.onNameChange=a.onNameChange.bind(Object(tt.a)(a)),a.onEmailChange=a.onEmailChange.bind(Object(tt.a)(a)),a.onPasswordChange=a.onPasswordChange.bind(Object(tt.a)(a)),a.onChange=a.onChange.bind(Object(tt.a)(a)),a}return Object(s.a)(n,[{key:"onFormSubmit",value:function(t){t.preventDefault();var e=new FormData;e.append("name",this.state.name),e.append("email",this.state.email),e.append("password",this.state.password),e.append("myImage",this.state.file);G.a.post("http://localhost:5000/api/users/upload",e,{headers:{"content-type":"multipart/form-data"}}).then((function(t){alert("The file is successfully uploaded")})).catch((function(t){}))}},{key:"onNameChange",value:function(t){this.setState({name:t.target.value})}},{key:"onEmailChange",value:function(t){this.setState({email:t.target.value})}},{key:"onPasswordChange",value:function(t){this.setState({password:t.target.value})}},{key:"onChange",value:function(t){this.setState({file:t.target.files[0]})}},{key:"render",value:function(){return Object(C.jsx)("div",{className:"container",style:{textAlign:"center"},children:Object(C.jsxs)("form",{onSubmit:this.onFormSubmit,children:[Object(C.jsx)("h1",{children:"File Upload"}),Object(C.jsx)("input",{type:"text",name:"name",onChange:this.onNameChange,placeholder:"name"}),Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),Object(C.jsx)("input",{type:"text",name:"email",onChange:this.onEmailChange,placeholder:"email"}),Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),Object(C.jsx)("input",{type:"password",name:"password",onChange:this.onPasswordChange,placeholder:"password"}),Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),Object(C.jsx)("input",{type:"file",name:"myImage",onChange:this.onChange}),Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),Object(C.jsx)("button",{type:"submit",children:"Upload"})]})})}}]),n}(r.a.Component),nt=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(C.jsx)("div",{children:Object(C.jsxs)(P.d,{children:[Object(C.jsx)(P.b,{exact:!0,path:"/",render:function(){return Object(C.jsx)(r.a.Fragment,{children:Object(C.jsx)(Y,{})})}}),Object(C.jsx)(P.b,{exact:!0,path:"/details/:id",component:Z}),Object(C.jsx)(P.b,{exact:!0,path:"/Compte",component:et}),Object(C.jsx)(P.a,{to:"/"})]})})}}]),n}(a.Component),at=nt,rt=n(30),ct=n(43),ot=n.n(ct),it=n(61),st=G.a.create({baseURL:"http://localhost:5000/api/"}),lt=Object(rt.b)("posts/getAll",Object(it.a)(ot.a.mark((function t(){var e;return ot.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,st.get("/posts");case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))),ut=(Object(rt.b)("posts/getById",function(){var t=Object(it.a)(ot.a.mark((function t(e){var n;return ot.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,st.get("/posts/".concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),Object(rt.c)({name:"post",initialState:{posts:[],loading:!1,error:null},extraReducers:(V={},Object(R.a)(V,lt.pending,(function(t,e){t.status="loading"})),Object(R.a)(V,lt.fulfilled,(function(t,e){t.posts=e.payload,t.status="succeeded"})),Object(R.a)(V,lt.rejected,(function(t,e){t.error=e.error,t.status="failed"})),V)}).reducer),jt=Object(rt.b)("infos/getAll",Object(it.a)(ot.a.mark((function t(){var e;return ot.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,st.get("/infos");case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))),dt=Object(rt.c)({name:"infos",initialState:{infos:[],loading:!1,error:null},extraReducers:(H={},Object(R.a)(H,jt.pending,(function(t,e){t.status="loading"})),Object(R.a)(H,jt.fulfilled,(function(t,e){t.status="succeeded",t.infos=e.payload})),Object(R.a)(H,jt.rejected,(function(t,e){t.status="failed",t.error=e.error.message})),H)}).reducer,bt=Object(rt.a)({reducer:{posts:ut,infos:dt}}),pt=n(108);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(C.jsx)(r.a.StrictMode,{children:Object(C.jsx)(pt.a,{store:bt,children:Object(C.jsxs)(Q.a,{children:[Object(C.jsx)(B,{}),Object(C.jsx)(at,{})]})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[182,1,2]]]);
//# sourceMappingURL=main.b8a66e8c.chunk.js.map