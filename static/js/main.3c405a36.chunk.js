(this["webpackJsonpecommerce-store"]=this["webpackJsonpecommerce-store"]||[]).push([[0],{39:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(1),i=n.n(o),a=n(27),c=n.n(a),s=n(6),u=(n(39),n(2)),d=n(4),l=n(25),h=n(33),p=n(19),f={cart:[],userInfo:{userName:"",userPassword:""}};var m=Object(p.a)({cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f.cart,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_CART":var n=!!e.find((function(e){return e.productName===t.data.productName}));if(n)return e.map((function(e){return e.productName===t.data.productName&&e.quantity++,e}));var r=[].concat(Object(h.a)(e),[t.data]);return r;case"REMOVE_FROM_CART":var o=e.filter((function(e){return e.productName!==t.data.productName}));return o;case"EMPTY_CART":return f.cart;default:return e}},userInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f.userInfo,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CREDENTIALS":case"SET_USER_NAME":case"SET_USER_PASSWORD":var n=Object(l.a)(Object(l.a)({},e),t.data);return n;case"REMOVE_CREDENTIALS":return f.userInfo;default:return e}}}),b=Object(p.b)(m,f),x=n(3);function v(){var e=Object(u.a)(["\n  margin-left: 6px;\n  @media only screen and (min-width: 375px) {\n    margin-right: 12px;\n  }\n"]);return v=function(){return e},e}function y(){var e=Object(u.a)(["\n  margin-right: 6px;\n  margin-left: 8px;\n"]);return y=function(){return e},e}function j(){var e=Object(u.a)(["\n  display: flex;\n  color: black;\n  @media only screen and (min-width: 375px) {\n    margin-right: 10px;\n  }\n"]);return j=function(){return e},e}function g(){var e=Object(u.a)(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  width: 50%;\n  font-size: 16px;\n  @media only screen and (min-width: 375px) {\n    width: 50%;\n  }\n"]);return g=function(){return e},e}var O=x.a.div(g()),w=x.a.div(j()),k=x.a.div(y()),S=x.a.div(v()),C=function(){var e=b.getState(),t={color:"white",textDecoration:"none"};return Object(r.jsxs)(O,{children:[Object(r.jsx)(w,{children:Object(r.jsx)(s.b,{to:"/eCommerceStore/",style:t,children:"Home"})})," | ",Object(r.jsx)(k,{children:Object(r.jsx)(s.b,{to:"/eCommerceStore/cartPage",style:t,children:"Cart"})})," | ",Object(r.jsx)(S,{children:Object(r.jsx)(s.b,{to:"/eCommerceStore/login",style:t,onClick:function(){b.dispatch({type:"REMOVE_CREDENTIALS"})},children:""!==e.userInfo.userName?"Logout":"Login"})})]})};function P(){var e=Object(u.a)(["\n  margin-left: 12px;\n  @media only screen and (min-width: 375px) {\n    width: 100%;\n  }\n  font-size: 30px;\n  font-style: italic;\n"]);return P=function(){return e},e}function I(){var e=Object(u.a)(["\n  display: flex;\n  width: 100%;\n  align-items: center;\n  background-color: #049287;\n  height: 70px;\n  font-size: 23px;\n  text-decoration: none;\n  color: white;\n"]);return I=function(){return e},e}var T=x.a.div(I()),D=x.a.div(P()),E=function(){return Object(r.jsxs)(T,{children:[Object(r.jsx)(D,{children:Object(r.jsx)(s.b,{to:"/eCommerceStore/",style:{color:"white",textDecoration:"none"},exact:!0,children:"Helix"})}),Object(r.jsx)(C,{})]})},N=n(23),W=n.n(N),R=n(32),z=n(7);function A(){var e=Object(u.a)(["\n  max-height: 90%;\n  max-width: 100%;\n  height: auto;\n  width: auto;\n"]);return A=function(){return e},e}function _(){var e=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  height: 75%;\n  object-fit: contain;\n  border-bottom: 1px solid black;\n  margin-bottom: 15px;\n  padding: 0px 30px;\n"]);return _=function(){return e},e}function q(){var e=Object(u.a)(["\n  color: black;\n"]);return q=function(){return e},e}function F(){var e=Object(u.a)(["\n  width: 300xpx;\n  height: 250px;\n  margin: 45px;\n  box-sizing: border-box;\n  padding: 10px 20px 50px 20px;\n  font-size: 20px;\n"]);return F=function(){return e},e}var L=x.a.div(F()),M=x.a.div(q()),V=x.a.div(_()),Y=x.a.img(A()),G=function(e){var t=e.img,n=e.title,o=e.price,i=e.rating,a={img:t,title:n,price:o,rating:i,description:e.description};return Object(r.jsx)(s.b,{to:{pathname:"/eCommerceStore/productDetailsPage/"+n,productData:a},style:{textDecoration:"none"},children:Object(r.jsxs)(L,{children:[Object(r.jsx)(V,{children:Object(r.jsx)(Y,{src:t,alt:"Not found!"})}),Object(r.jsxs)(M,{children:[Object(r.jsx)("div",{children:n}),Object(r.jsxs)("div",{children:["$",o]}),Object(r.jsxs)("div",{children:["Rating: ",i," / 5"]})]})]})})};function J(){var e=Object(u.a)(["\n    min-height: calc(100vh - 105px);\n"]);return J=function(){return e},e}var $=x.a.div(J()),U=function(e){var t=e.productData;return Object(r.jsx)($,{children:t.map((function(e,t){return Object(r.jsx)(G,{img:e.img,title:e.title,price:e.price,rating:e.rating,description:e.description},t)}))})};function H(){var e=Object(u.a)(["\n    width: 50%;\n    display: flex;\n    justify-content: space-around;\n\n    @media only screen and (min-width: 800px) {\n        margin-top: 1px;\n    }\n"]);return H=function(){return e},e}function B(){var e=Object(u.a)(["\n    width: 50%;\n    height: 25px;\n    @media only screen and (min-width: 800px) {\n        margin-right: 15px;\n        margin-top: 1px;\n    }\n"]);return B=function(){return e},e}function Q(){var e=Object(u.a)(["\n    display: flex;\n    justify-content: space-around;\n\n    @media only screen and (min-width: 800px) {\n        width: 700px;\n    }\n"]);return Q=function(){return e},e}var Z=x.a.div(Q()),K=x.a.input(B()),X=x.a.select(H()),ee=function(e){var t=e.productData,n=e.setSearchIt,i=e.onFilter,a=[],c=Object(o.useState)(""),s=Object(z.a)(c,2),u=s[0],d=s[1];t.forEach((function(e){return a.includes(e.category)||a.push(e.category),a}));var l=a.map((function(e,t){return Object(r.jsx)("option",{value:e,children:e},t)}));return Object(o.useEffect)((function(){if(""!==u){var e=t.filter((function(e){return e.title.toLowerCase().includes(u.toLowerCase())}));i(e)}else i(void 0)}),[u,i,t]),Object(r.jsxs)(Z,{children:[Object(r.jsx)(K,{placeholder:"Search for items!",value:u.searchTerm,onChange:function(e){d(e.target.value)}}),Object(r.jsxs)(X,{onChange:function(e){n({searchItVal:e.target.value})},children:[Object(r.jsx)("option",{value:"allItems",children:"All Items"}),l]})]})};function te(){var e=Object(u.a)(['\n    @keyframes spinner {\n        0% {\n            transform: translate3d(-50%, -50%, 0) rotate(0deg);\n        }\n        100% {\n            transform: translate3d(-50%, -50%, 0) rotate(360deg);\n        }\n    }\n    &:before {\n        animation: 1.5s linear infinite spinner;\n        animation-play-state: inherit;\n        border: solid 12px #cfd0d1;\n        border-bottom-color: #049287;\n        border-radius: 50%;\n        content: "";\n        height: 110px;\n        width: 110px;\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate3d(-50%, -50%, 0);\n        will-change: transform;\n    }\n']);return te=function(){return e},e}function ne(){var e=Object(u.a)(["\n    display: flex;\n    min-height: calc(100vh - 105px);\n"]);return ne=function(){return e},e}var re=x.a.div(ne()),oe=x.a.div(te()),ie=function(){return Object(r.jsx)(re,{children:Object(r.jsx)(oe,{})})},ae=function(){var e=Object(o.useState)({searchItVal:"allItems"}),t=Object(z.a)(e,2),n=t[0],i=t[1],a=Object(o.useState)([]),c=Object(z.a)(a,2),s=c[0],u=c[1],d=Object(o.useState)(),l=Object(z.a)(d,2),h=l[0],p=l[1];Object(o.useEffect)((function(){f()}),[]);var f=function(){var e=Object(R.a)(W.a.mark((function e(){var t,n;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://my-json-server.typicode.com/tdmichaelis/typicode/products");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,u(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=s.filter((function(e){return e.category===n.searchItVal||"allItems"===n.searchItVal}));return localStorage.setItem("allProducts",JSON.stringify(s)),0===s.length?Object(r.jsx)(ie,{}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(ee,{productData:s,setSearchIt:i,onFilter:p}),Object(r.jsx)(U,{productData:h||m})]})};function ce(){var e=Object(u.a)(["\n    width: 40px;\n    margin-right: 60px;\n    font-size: 16px;\n    text-align: center;\n"]);return ce=function(){return e},e}var se=x.a.input(ce()),ue=function(e){var t=e.updater,n=e.initialValue,i=void 0===n?1:n,a=Object(o.useState)(i),c=Object(z.a)(a,2),s=c[0],u=c[1];return Object(o.useEffect)((function(){t(s)}),[t,s]),Object(r.jsx)(se,{type:"tel",value:s,onChange:function(e){return u(Number(e.target.value))}})};function de(){var e=Object(u.a)(["\n  height: 40px;\n  width: 100px;\n  font-size: 16px;\n  margin-left: 60px;\n  background-color: #4863a0;\n  color: white;\n  border-radius: 10px;\n  outline: none;\n"]);return de=function(){return e},e}function le(){var e=Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100vw;\n  margin-top: 30px;\n\n  @media only screen and (min-width: 800px) {\n    max-width: 400px;\n  }\n"]);return le=function(){return e},e}function he(){var e=Object(u.a)(["\n  max-height: 90%;\n  max-width: 100%;\n  height: auto;\n  width: auto;\n"]);return he=function(){return e},e}function pe(){var e=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  height: 75%;\n  object-fit: contain;\n  border-bottom: 1px solid black;\n  margin-top: 20px;\n  margin-bottom: 15px;\n  padding: 0px 30px;\n  padding-bottom: 25px;\n"]);return pe=function(){return e},e}function fe(){var e=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100vw;\n  min-height: calc(100vh - 105px);\n  box-sizing: border-box;\n  align-items: center;\n  padding: 10px 20px 50px 20px;\n  font-size: 20px;\n\n  @media only screen and (min-width: 800px) {\n    max-width: 800px;\n  }\n"]);return fe=function(){return e},e}function me(){var e=Object(u.a)(["\n  margin-top: 20px;\n  line-height: 28px;\n"]);return me=function(){return e},e}function be(){var e=Object(u.a)(["\n  border-bottom: 1px solid black;\n"]);return be=function(){return e},e}function xe(){var e=Object(u.a)(["\n  div {\n    margin-bottom: 10px;\n  }\n  font-size: 18px;\n  border-bottom: 1px solid black;\n"]);return xe=function(){return e},e}var ve=x.a.div(xe()),ye=x.a.div(be()),je=x.a.div(me()),ge=x.a.div(fe()),Oe=x.a.div(pe()),we=x.a.img(he()),ke=x.a.div(le()),Se=x.a.button(de()),Ce=function(e){var t,n=Object(o.useState)(1),i=Object(z.a)(n,2),a=i[0],c=i[1],s=Object(d.f)();return e.location.productData?localStorage.setItem("productData",JSON.stringify(e.location.productData)):t=JSON.parse(localStorage.getItem("productData")),Object(r.jsxs)(ge,{children:[Object(r.jsx)(Oe,{children:Object(r.jsx)(we,{src:(e.location.productData||t).img,alt:"Not found!"})}),Object(r.jsxs)(ve,{children:[Object(r.jsx)("div",{children:(e.location.productData||t).title}),Object(r.jsxs)("div",{children:["Price: $",(e.location.productData||t).price]}),Object(r.jsxs)("div",{children:["Rating: ",(e.location.productData||t).rating," / 5"]})]}),Object(r.jsx)("br",{}),Object(r.jsx)(ye,{children:"Product Details"}),Object(r.jsx)(je,{children:Object(r.jsx)("div",{children:(e.location.productData||t).description})}),Object(r.jsxs)(ke,{children:[Object(r.jsx)(Se,{onClick:function(){b.dispatch({type:"ADD_TO_CART",data:{productImg:(e.location.productData||t).img,productName:(e.location.productData||t).title,productPrice:(e.location.productData||t).price,quantity:a}}),s.replace("/eCommerceStore/cartPage")},children:"Add to Cart"}),"Quantity: ",Object(r.jsx)(ue,{updater:c})]})]})};function Pe(){var e=Object(u.a)(["\n    margin-top: 5px;\n"]);return Pe=function(){return e},e}function Ie(){var e=Object(u.a)(["\n    margin-top: 10px;\n"]);return Ie=function(){return e},e}function Te(){var e=Object(u.a)(["\n    width: 100%;\n    padding-bottom: 8px;\n    border-bottom: 1px solid black;\n"]);return Te=function(){return e},e}function De(){var e=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    max-width: 50%;\n    height: auto;\n    align-items: left;\n    margin-right: 10px;\n    border-left: 1px solid black;\n    padding-left: 12px;\n"]);return De=function(){return e},e}function Ee(){var e=Object(u.a)(["\n    max-height: 90%;\n    max-width: 90%;\n    height: auto;\n    width: auto;\n"]);return Ee=function(){return e},e}function Ne(){var e=Object(u.a)(["\n    display: flex;\n    max-height: 100px;\n    height: auto;\n    width: 50%;\n    object-fit: contain;\n    margin-left: 15px;\n    justify-content: center;\n    align-items: center;\n"]);return Ne=function(){return e},e}function We(){var e=Object(u.a)(["\n    display: flex;\n    margin-top: 30px;\n    margin-bottom: 10px;\n"]);return We=function(){return e},e}var Re=x.a.div(We()),ze=x.a.div(Ne()),Ae=x.a.img(Ee()),_e=x.a.div(De()),qe=x.a.div(Te()),Fe=x.a.div(Ie()),Le=x.a.div(Pe()),Me=function(e){var t=e.img,n=e.title,o=e.price,i=e.quantity;return Object(r.jsx)("div",{children:Object(r.jsxs)(Re,{children:[Object(r.jsx)(ze,{children:Object(r.jsx)(Ae,{src:t,alt:"Not found!"})}),Object(r.jsxs)(_e,{children:[Object(r.jsx)(qe,{children:n}),Object(r.jsxs)(Fe,{children:["$",o*i]}),Object(r.jsxs)(Le,{children:["Quantity: ",i]})]})]})})};function Ve(){var e=Object(u.a)(["\n    display: flex;\n    justify-content: center;\n    border-top: 1px solid black;\n    border-bottom: 1px solid black;\n    padding: 15px;\n    font-weight: 600;\n    font-size: 20px;\n"]);return Ve=function(){return e},e}var Ye=x.a.div(Ve()),Ge=function(){var e=b.getState(),t=0;return e.cart.map((function(e){var n=e.productPrice,r=e.quantity;return t+=n*r})),Object(r.jsxs)(Ye,{children:["Total: $",t]})};function Je(){var e=Object(u.a)(["\n    width: 70px;\n    height: 25px;\n    background-color: #4863a0;\n    color: white;\n    border-radius: 10px;\n    font-size: 15px;\n    margin-bottom: 20px;\n    margin-left: 53px;\n    outline: none;\n"]);return Je=function(){return e},e}var $e=x.a.button(Je()),Ue=function(e){var t=e.productName,n=e.onComplete;return Object(r.jsx)($e,{onClick:function(){b.dispatch({type:"REMOVE_FROM_CART",data:{productName:t}}),null===n||void 0===n||n()},children:"Remove"})};function He(){var e=Object(u.a)(["\n  display: flex;\n  font-size: 30px;\n  margin: 12px;\n  font-weight: 700;\n  color: #4863a0;\n  padding-bottom: 5px;\n  border-bottom: 1px solid black;\n"]);return He=function(){return e},e}function Be(){var e=Object(u.a)(["\n  width: 110px;\n  height: 40px;\n  margin-top: 20px;\n  background-color: #4863a0;\n  color: white;\n  outline: none;\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: 700;\n\n  .btn.disabled {\n    cursor: not-allowed;\n    opacity: 0.65;\n  }\n"]);return Be=function(){return e},e}function Qe(){var e=Object(u.a)(["\n  display: flex;\n  width: 100%;\n  height: auto;\n  justify-content: center;\n  align-items: center;\n"]);return Qe=function(){return e},e}function Ze(){var e=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  min-height: calc(100vh - 105px);\n\n  @media only screen and (min-width: 800px) {\n    width: 100%;\n  }\n"]);return Ze=function(){return e},e}var Ke=x.a.div(Ze()),Xe=x.a.div(Qe()),et=x.a.button(Be()),tt=x.a.div(He()),nt=function(){var e=b.getState(),t=Object(d.f)(),n=Object(o.useState)(0),i=Object(z.a)(n,2),a=i[0],c=i[1],s=function(){return c(a+1)},u="";return u=e.userInfo.userName.length>0?e.userInfo.userName:"Guest",Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(Ke,{children:[Object(r.jsx)(tt,{children:u}),e.cart.map((function(e){return Object(r.jsxs)(o.Fragment,{children:[Object(r.jsx)(Me,{img:e.productImg,title:e.productName,price:e.productPrice,quantity:e.quantity}),Object(r.jsx)(Ue,{productName:e.productName,onComplete:s})]},e)})),Object(r.jsx)(Ge,{}),Object(r.jsx)(Xe,{children:e.cart.length>0&&Object(r.jsx)(et,{className:"btn",onClick:function(){b.dispatch({type:"EMPTY_CART"}),t.replace("/eCommerceStore/purchasePage")},children:"Check Out!"})})]})})};function rt(){var e=Object(u.a)(["\n    height: 25px;\n    width: 180px;\n    margin-top: 10px;\n    margin-left: 50px;\n    border: 1px solid black;\n    font-size: 18px;\n\n    @media only screen and (min-width: 800px) {\n        margin: auto;\n        margin-right: 10px;\n        margin-top: 20px;\n    }\n"]);return rt=function(){return e},e}var ot=x.a.input(rt()),it=function(e){var t=e.name,n=e.placeholder,i=e.password,a=void 0!==i&&i,c=Object(o.useState)(""),s=Object(z.a)(c,2),u=s[0],d=s[1],l=Object(o.useCallback)((function(){for(var e=u.length,t="",n=0;n<e;n++)t+="\u2022";return t}),[u]);return Object(r.jsx)(ot,{name:t,placeholder:n,value:!1===a?u:l(),onChange:function(e){d(e.target.value)}})};function at(){var e=Object(u.a)(["\n    color: red;\n    text-align: center;\n    margin: 5px 0px;\n    padding: 10px;\n    background-color: white;\n    border: 1px solid black;\n    border-radius: 5px;\n"]);return at=function(){return e},e}function ct(){var e=Object(u.a)(["\n    display: flex;\n    margin-top: 60px;\n    color: #2f436f;\n    text-decoration: none;\n    font-size: 18px;\n    font-weight: 800;\n    &:visited {\n        text-decoration: none;\n    }\n"]);return ct=function(){return e},e}function st(){var e=Object(u.a)(["\n    display: flex;\n    flex-wrap: nowrap;\n    font-size: 20px;\n    justify-content: center;\n    align-items: center;\n    color: white;\n    font-weight: 700;\n    font-size: 24px;\n    text-align: center;\n"]);return st=function(){return e},e}function ut(){var e=Object(u.a)(["\n    width: 100px;\n    height: 25px;\n    border: 1px solid black;\n    border-radius: 5px;\n    background-color: #4863a0;\n    outline: none;\n    color: white;\n    font-size: 16px;\n    font-weight: 600;\n"]);return ut=function(){return e},e}function dt(){var e=Object(u.a)(["\n    display: flex;\n    max-width: 300px;\n    width: 100%;\n    justify-content: space-evenly;\n    flex-direction: row;\n    margin-top: 15px;\n\n    @media only screen and (min-width: 800px) {\n        margin-left: 43px;\n    }\n"]);return dt=function(){return e},e}function lt(){var e=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    margin: 15px;\n    padding: 30px;\n    align-items: center;\n    border: 1px solid black;\n    border-radius: 5px;\n    box-shadow: 5px 8px 10px;\n    background-color: #049287;\n    margin-bottom: 250px;\n"]);return lt=function(){return e},e}function ht(){var e=Object(u.a)(["\n    display: flex;\n    min-height: calc(100vh - 105px);\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n"]);return ht=function(){return e},e}var pt=x.a.div(ht()),ft=x.a.div(lt()),mt=x.a.div(dt()),bt=x.a.button(ut()),xt=x.a.div(st()),vt=x.a.div(ct()),yt=x.a.div(at()),jt=function(){var e=Object(o.useState)([]),t=Object(z.a)(e,2),n=t[0],i=t[1],a=Object(d.f)(),c=Object(o.useCallback)((function(e){e.preventDefault(),i([]);var t=[],n=e.target.elements.emailInput.value,r=e.target.elements.passwordInput.value;n.match(/^[a-zA-Z0-9_]*@[a-zA-Z0-9_]*(\.com)$/)||t.push("Email must follow the pattern of 'example@example.com'"),r.length<4&&t.push("Password needs to be at least 4 characters long."),i(t),t.length>0||(b.dispatch({type:"SET_CREDENTIALS",data:{userName:n,userPassword:r}}),a.replace("/"))}),[a]);return Object(r.jsx)(pt,{children:Object(r.jsxs)(ft,{children:[Object(r.jsx)(xt,{children:"Please Login Or Continue As Guest"}),Object(r.jsxs)("form",{onSubmit:c,children:[Object(r.jsx)(it,{name:"emailInput",placeholder:"Email"}),Object(r.jsx)(it,{name:"passwordInput",placeholder:"Password",password:!0}),n.map((function(e,t){return Object(r.jsx)(yt,{children:e},t)})),Object(r.jsxs)(mt,{children:[Object(r.jsx)(bt,{onClick:function(){a.push("/")},children:"Guest"}),Object(r.jsx)(bt,{type:"submit",children:"Login"})]})]}),Object(r.jsx)(vt,{children:"Click here to create account."})]})})};function gt(){var e=Object(u.a)(["\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n  margin-bottom: 8px;\n  color: white;\n"]);return gt=function(){return e},e}function Ot(){var e=Object(u.a)(["\n  display: flex;\n  height: 35px;\n  width: 100vw;\n  background-color: #049287;\n  align-items: flex-end;\n"]);return Ot=function(){return e},e}var wt=x.a.div(Ot()),kt=x.a.div(gt()),St=function(){return Object(r.jsx)(wt,{children:Object(r.jsxs)(kt,{children:["\xa9 2020 Helix",Object(r.jsx)(s.b,{to:"/eCommerceStore/privacy",style:{color:"white",textDecoration:"none"},children:"Privacy"})]})})};function Ct(){var e=Object(u.a)(["\n    color: #4863a0;\n"]);return Ct=function(){return e},e}function Pt(){var e=Object(u.a)(["\n    display: flex;\n    margin: 10px;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    max-width: 100vw;\n    min-height: calc(100vh - 105px);\n    font-size: 10px;\n    font-weight: 500;\n"]);return Pt=function(){return e},e}var It=x.a.div(Pt()),Tt=x.a.h1(Ct()),Dt=function(){return Object(r.jsxs)(It,{children:[Object(r.jsx)(Tt,{children:"Privacy Policy"}),"getlorem.com is committed to protecting your privacy online. This Privacy Policy endeavours to describe to you our practices regarding the personal information we collect from users on our website, located at getlorem.com (the \u201cSite\u201d), and the services offered through the Site. If you have any questions about our Privacy Policy, our collection practices, the processing of user information, or if you would like to report a security violation to us directly, please contact us at hello@lukehaas.me",Object(r.jsx)(Tt,{children:"What Data We Collect"}),Object(r.jsx)("br",{}),"General Data: The use of our services will automatically create information that will be collected. For example, when you use our Services, your geographic location, how you use the Services, information about the type of device you use, your Open Device Identification Number, date/time stamps for your visit, your unique device identifier, your browser type, operating system, Internet Protocol (IP) address, and domain name are all collected. This information is generally used to help us deliver the most relevant information to you and administer and improve the Site. Log Files: As is true of most websites, we gather certain information automatically and store it in log files. This information includes IP addresses, browser type, Internet service provider (ISP), referring/exit pages, operating system, date/time stamp, and clickstream data. We use this information to maintain and improve the performance of the Services. Analytics: We use analytics services (including, but not limited to, Google Analytics) to help analyze how users use the Site. Analytics services use Cookies to collect information such as how often users visit the Site and we use the information to improve our Site and Services. The analytics services' ability to use and share information collected by them is restricted by their terms of use and privacy policy, which you should refer to for more information about how these entities use this information. Location Information: If you have enabled location services on your mobile device, we may collect your location information to improve the Services we offer. If you do not want this information collected, you can disable location services on your device. Cookies: \u201cCookies\u201d are small pieces of information (text files) that a website sends to your computer\u2019s hard drive while you are viewing the website. These text files can be used by websites to make the users experience more efficient. The law states that we can store these cookies on your device if they are strictly necessary for the operation of this site. For all other types of cookies we need your permission. To that end, this site uses different types of cookies. Some cookies are placed by third party services that appear on our pages. We and some third parties may use both session Cookies (which expire once you close your web browser) and persistent Cookies (which stay on your computer until you delete them) to provide you with a more personal and interactive experience on our Services and to market the Services or other products. Marketing cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers. This tracking is done on an anonymous basis and, while not an exhaustive list, some of the companies we work with are Google, AppNexus, Criteo, Rubicon, Pubmatic and DistrictM. To learn more about this practice, including the Self Regulatory Principles for Online Advertising, to which we adhere, you can visit www.aboutads.info/choices, optout.networkadvertising.org and www.youronlinechoices.com",Object(r.jsx)(Tt,{children:"Use of Your Personal information"}),Object(r.jsx)("br",{}),"In general, personal information you submit to us is used either to respond to requests that you make, aid us in serving you better, or market our Services. We use your personal information in the following ways: Operate, maintain, and improve our site(s), products, and services; Respond to comments and questions and provide customer service; Link or combine user information with other personal information we get from third parties, to help understand your needs and provide you with better service; Develop, improve, and deliver marketing and advertising for the Services; Provide and deliver products and services you request; Identify you as a user in our system; We may store and process your personal information on servers located in both the United States and Europe. We may also create anonymous data records from your personal information by completely excluding information (such as your name) that makes the data personally identifiable to you. We use this anonymous data to analyze request and usage patterns so that we may enhance the content of our Services and improve Site functionality. We reserve the right to use anonymous data for any purpose and disclose anonymous data to third parties at our sole discretion. We may receive testimonials and comments from users who have had positive experiences with our Services. We may publish such content. When we publish this content, we may identify our users by their first and last name. We obtain the user's consent prior to posting this information along with the testimonial.",Object(r.jsx)(Tt,{children:"Disclosure of Your Personal information"}),"We disclose your personal information as described below and as described elsewhere in this Privacy Policy. Third Parties Designated by You: When you use the Services, the personal information you provide will be shared with the third parties that you authorize to receive such information. Third Party Service Providers: We may share your personal information with third party service providers to: provide you with the Services that we offer you through our Services; conduct quality assurance testing; to provide technical support; market the Services; and/or to provide other services to us. Information We Share: We may disclose aggregated information about our users and information that does not identify any individual without restriction. In addition, we may disclose personal information that we collect or you provide: To fulfill the purpose for which you provide it, for any other purpose disclosed by us when you provide the information, or with your consent; To third parties designated by you; With our subsidiaries and affiliates; To third parties to process payments made through the Services; With contractors, service providers and other third parties we use to support our business; To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution or other sale or transfer of some or all of our assets, whether as a going concern or as part of bankruptcy, liquidation or similar proceeding, in which personal information held by us about users is among the assets transferred; and Other Disclosures: Regardless of any choices you make regarding your Personal information (as described below), getlorem.com may disclose Personal information if it believes in good faith that such disclosure is necessary: (i) in connection with any legal investigation; (ii) to comply with relevant laws or to respond to subpoenas or warrants served on our company; (iii) to protect or defend the rights or property of getlorem.com or users of the Services; and/or (iv) to investigate or assist in preventing any violation or potential violation of the law, this Privacy Policy.",Object(r.jsx)(Tt,{children:"Third Party Websites"}),"Our Site may contain links to third party websites. When you click on a link to any other website or location, you will leave our Site or Services and go to another site, and another entity may collect personal information or anonymous data from you. We have no control over, do not review, and are not responsible for, these outside websites or their content. Please be aware that the terms of this Privacy Policy do not apply to these outside websites or content, or to any collection of your personal information after you click on links to such outside websites. We encourage you to read the privacy policies of every website you visit. The links to third party websites or locations are for your convenience and do not signify our endorsement of such third parties or their products, content or websites. Your Choices Regarding Information Choices: We offer you choices regarding the collection, use, and sharing of your personal information. We may periodically send you emails that directly promote the use of our Services. When you receive promotional communications from us, you may indicate a preference to stop receiving further communications from us and you will have the opportunity to \u201copt-out\u201d by following the unsubscribe instructions provided in the email you receive or by contacting us directly. Despite your indicated email preferences, we may send you service related communications, including notices of any updates to our Privacy Policy. Cookies: If you decide at any time that you no longer wish to accept cookies from our Services for any of the purposes described above, then you can instruct your browser, by changing its settings, to stop accepting cookies or to prompt you before accepting a cookie from the websites you visit. Consult your browser\u2019s technical information. If you do not accept cookies, however, you may not be able to use all portions of the Services or all functionality of the Services. If you have any questions about how to disable or modify cookies, please contact us at hello@lukehaas.me",Object(r.jsx)(Tt,{children:"Young People"}),"Our Services are not directed to children under the age of 13. If a child under 13 submits personal information to us and we learn that this is the case, we will take steps to remove the personal information from our databases. If you believe that we might have any personal information from a child under 13, please contact us at hello@lukehaas.me Your Rights As a user of our site you have the following rights, any of which you may exercise by contacting us at hello@lukehaas.me The right to ask what personal data that we hold about you at any time. Extra requests (particularly repetitive) for data may result in a fee being charged to the user. The right to ask us to update and correct any out-of-date or incorrect personal data that we hold about you free of charge. As set out above, the right to opt out of any marketing communications that we may send you. Further information regarding your rights can be found under: https://ico.org.uk/for-organisations/guide-to-the-general-data-protection-regulation-gdpr/individual-rights/"]})};function Et(){var e=Object(u.a)(["\n    height: 100%;\n    font-weight: 800;\n    font-size: 30px;\n    margin-top: 80px;\n    color: #4863a0;\n"]);return Et=function(){return e},e}function Nt(){var e=Object(u.a)(["\n    display: flex;\n    justify-content: center;\n    text-align: center;\n    min-height: calc(100vh - 105px);\n"]);return Nt=function(){return e},e}var Wt=x.a.div(Nt()),Rt=x.a.div(Et()),zt=function(){var e=Object(d.f)();return Object(o.useEffect)((function(){setTimeout((function(){e.push("/")}),3e3)}),[e]),Object(r.jsx)(Wt,{children:Object(r.jsx)(Rt,{children:"Thanks for your purchase!"})})};function At(){var e=Object(u.a)(["\n  background-color: #eeeeee;\n"]);return At=function(){return e},e}function _t(){var e=Object(u.a)(["\n  background-color: white;\n\n  @media only screen and (min-width: 800px) {\n    display: flex;\n    flex-direction: column;\n    max-width: 800px;\n    border-left: 1px solid black;\n    border-right: 1px solid black;\n    margin: auto;\n    align-items: center;\n  } ;\n"]);return _t=function(){return e},e}var qt=x.a.div(_t()),Ft=x.a.div(At()),Lt=function(){return Object(r.jsxs)(Ft,{children:[Object(r.jsx)(E,{}),Object(r.jsx)(qt,{children:Object(r.jsxs)(d.c,{children:[Object(r.jsx)(d.a,{exact:!0,path:"/eCommerceStore",component:ae}),Object(r.jsx)(d.a,{path:"/eCommerceStore/productDetailsPage/:title",component:Ce}),Object(r.jsx)(d.a,{path:"/eCommerceStore/cartPage",component:nt}),Object(r.jsx)(d.a,{path:"/eCommerceStore/login",component:jt}),Object(r.jsx)(d.a,{path:"/eCommerceStore/privacy",component:Dt}),Object(r.jsx)(d.a,{path:"/eCommerceStore/purchasePage",component:zt})]})}),Object(r.jsx)(St,{})]})},Mt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),o(e),i(e),a(e)}))};c.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(s.a,{children:Object(r.jsx)(Lt,{})})}),document.getElementById("root")),Mt()}},[[47,1,2]]]);
//# sourceMappingURL=main.3c405a36.chunk.js.map