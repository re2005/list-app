(function(t){function e(e){for(var n,o,r=e[0],c=e[1],l=e[2],p=0,d=[];p<r.length;p++)o=r[p],a[o]&&d.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],n=!0,r=1;r<s.length;r++){var c=s[r];0!==a[c]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=s[0]))}return t}var n={},a={app:0},i=[];function o(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=n,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(s,n,function(e){return t[e]}.bind(null,n));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"085b":function(t,e,s){t.exports=s.p+"img/icon-loading.01c69447.svg"},"0f6b":function(t,e,s){t.exports=s.p+"img/icon-link.c4d16f19.svg"},"1ad2":function(t,e,s){"use strict";var n=s("5c4e"),a=s.n(n);a.a},3324:function(t,e,s){t.exports=s.p+"img/icon-close.faf7a257.svg"},3819:function(t,e,s){t.exports=s.p+"img/icon-copy.f84aacef.svg"},"4bc3":function(t,e,s){"use strict";var n=s("877a"),a=s.n(n);a.a},"56d7":function(t,e,s){"use strict";s.r(e);s("386d"),s("cadf"),s("551c"),s("f751"),s("097d");var n=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},i=[],o=(s("5c0b"),s("2877")),r={},c=Object(o["a"])(r,a,i,!1,null,null,null),l=c.exports,u=s("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"home",class:{open:t.isOpen,user:!t.isGuest}},[t.isVisible("signUp")?n("sign-up",{staticClass:"sign-up",on:{close:t.close}}):t._e(),t.isVisible("logIn")?n("log-in",{staticClass:"log-in",on:{close:t.close}}):t._e(),t.isVisible("share")?n("share-list",{staticClass:"share",attrs:{user:t.getUser},on:{close:t.close}}):t._e(),n("ui-header",{attrs:{config:{user:t.getUser,guest:t.isGuest}},on:{open:t.open}}),t.isGuest?n("div",{staticClass:"guest-label"},[n("p",[t._v("\n            This is an open list, you can add and remove items, or create your own list!\n        ")]),n("button",{staticClass:"button primary",on:{click:function(e){return t.open("signUp")}}},[t._v("\n            Create my list\n        ")]),n("button",{staticClass:"button slim",on:{click:function(e){return t.open("logIn")}}},[t._v("\n            Login\n        ")])]):t._e(),n("div",{staticClass:"add"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.item,expression:"item"}],staticClass:"item",attrs:{placeholder:"Strawberries"},domProps:{value:t.item},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addItem()},input:function(e){e.target.composing||(t.item=e.target.value)}}}),n("button",{attrs:{disabled:!t.item},on:{click:function(e){return t.addItem()}}},[t._v("\n            add\n        ")])]),0!==t.suggests.length?n("ul",{staticClass:"suggest-list"},t._l(t.suggests,function(e,s){return n("li",{key:s,on:{click:function(s){t.item=e,t.addItem()}}},[t._v("\n            "+t._s(e)+"\n        ")])}),0):t._e(),t.isLoading?n("div",[t._v("\n        loading\n    ")]):n("div",[0===t.getList.length?n("div",[t._v("\n            Empty list :(\n        ")]):n("ul",{staticClass:"list"},t._l(t.getList,function(e,a){return n("li",{key:a},[n("span",{staticClass:"item"},[t._v(t._s(e))]),n("span",{staticClass:"delete",on:{click:function(e){return t.removeItem(a)}}},[n("img",{attrs:{src:s("3324")}})])])}),0)]),t._m(0)],1)},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("p",[t._v("\n            My Market List - Made with ❤ in Amsterdam\n        ")]),n("a",{attrs:{href:"https://github.com/re2005/list-app",title:"GitHub",target:"_blank"}},[n("img",{attrs:{src:s("6c45"),alt:"GitHub"}})]),n("a",{attrs:{href:"whatsapp://send?text=Let's make a list together. Create an account and share password to update our list :) https%3A%2F%2Fmy-market-list.firebaseapp.com%2F","data-action":"share/whatsapp/share"}},[n("img",{staticClass:"whatsapp",attrs:{src:s("b3e8"),alt:"Share via Whatsapp"}})])])}],m=(s("28a5"),s("cebc")),g=s("2f62"),f=s("59ca"),h=s.n(f),v=(s("ea7b"),s("66ce"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[t._m(0),t.config.guest?t._e():n("div",{staticClass:"user"},[n("div",{staticClass:"name"},[n("img",{attrs:{src:s("5885")}}),t._v(t._s(t.config.user.email)+"\n        ")]),n("span",{staticClass:"share",on:{click:t.openShare}},[n("img",{attrs:{src:s("bcda")}})]),n("button",{staticClass:"button warn",on:{click:t.logOut}},[t.isLoading?t._e():n("span",{staticClass:"name"},[n("span",[t._v("Logout")])]),t.isLoading?n("img",{staticClass:"loading",attrs:{src:s("085b")}}):t._e()])])])}),b=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo-wrapper"},[n("img",{staticClass:"logo",attrs:{src:s("7cd8")}}),n("h1",[t._v("\n            My Market List\n        ")])])}],w={name:"UiHeader",data:function(){return{isLoading:!1}},props:{config:{type:Object,required:!0}},methods:{logOut:function(){var t=this;this.isLoading=!0,h.a.auth().signOut().then(function(){setTimeout(function(){t.isLoading=!1},1500)})},openShare:function(){this.$emit("open","share")}}},y=w,_=(s("4bc3"),Object(o["a"])(y,v,b,!1,null,"13f2f45e",null)),C=_.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component first"},[n("span",{staticClass:"close",on:{click:t.close}},[n("img",{attrs:{src:s("3324")}})]),n("form",{attrs:{autocomplete:"on"},on:{submit:t.signUp}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",placeholder:"list-name",autocomplete:"username"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"password",autocomplete:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),n("span",{staticClass:"error"},[t._v("\n            "+t._s(t.error)+"\n        ")]),n("button",{staticClass:"button primary",on:{click:t.signUp}},[t.isLoading?t._e():n("span",{staticClass:"name"},[n("img",{staticClass:"icon",attrs:{src:s("582e")}}),n("span",[t._v("Create")])]),t.isLoading?n("img",{staticClass:"loading",attrs:{src:s("085b")}}):t._e()])])])},k=[],x=(s("a481"),{name:"SignUp",data:function(){return{email:"",password:"",error:void 0,isLoading:!1}},methods:{close:function(){this.$emit("close")},replace:function(t){return t.replace(/email address|user/g,"list name")},signUp:function(t){var e=this;t.preventDefault(),this.isLoading=!0;var s=this.email+"@gmail.com";h.a.auth().createUserWithEmailAndPassword(s,this.password).then(function(t){e.$router.push({name:"home"}),e.$emit("close"),window.ga("send",{hitType:"event",eventCategory:"Action",eventAction:"UserCreated",eventLabel:e.email})},function(t){e.isLoading=!1,e.error=e.replace(t.message)})}}}),U=x,O=Object(o["a"])(U,L,k,!1,null,null,null),j=O.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component second"},[n("span",{staticClass:"close",on:{click:t.close}},[n("img",{attrs:{src:s("3324")}})]),n("form",{attrs:{autocomplete:"on"},on:{submit:t.login}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",placeholder:"list-name",autocomplete:"username"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"password",autocomplete:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),n("span",{staticClass:"error"},[t._v("\n            "+t._s(t.error)+"\n        ")]),n("button",{staticClass:"button primary",on:{click:t.login}},[t.isLoading?t._e():n("span",{staticClass:"name"},[n("img",{staticClass:"icon",attrs:{src:s("fbb4")}}),n("span",[t._v("Login")])]),t.isLoading?n("img",{staticClass:"loading",attrs:{src:s("085b")}}):t._e()])])])},S=[],I={name:"LogIn",data:function(){return{email:"",password:"",error:void 0,isLoading:!1}},methods:{close:function(){this.$emit("close")},replace:function(t){return t.replace(/email address|user/g,"list name")},login:function(t){var e=this;t.preventDefault(),this.isLoading=!0,h.a.auth().signInWithEmailAndPassword(this.email+"@gmail.com",this.password).then(function(t){e.$emit("close"),window.ga("send",{hitType:"event",eventCategory:"Action",eventAction:"UserLogged",eventLabel:e.email})},function(t){e.isLoading=!1,e.error=e.replace(t.message)})}}},P=I,$=Object(o["a"])(P,A,S,!1,null,null,null),E=$.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component second"},[n("span",{staticClass:"close",on:{click:t.close}},[n("img",{attrs:{src:s("3324")}})]),n("form",{attrs:{autocomplete:"on"},on:{submit:t.share}},[n("div",{staticClass:"inputs"},[n("span",[t._v(t._s(t.user.email))]),t.shortUrl?t._e():n("label",[t._v("\n                Please confirm your password\n                "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"password",autocomplete:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),t.shortUrl?n("div",{staticClass:"short-url"},[n("p",[t._v("\n                This link grant access to your list\n            ")]),n("p",{staticClass:"url"},[t._v(t._s(t.shortUrl))]),n("div",{staticClass:"actions"},[n("span",{on:{click:t.copyText}},[n("img",{staticClass:"whatsapp",attrs:{src:s("3819"),alt:"Copy"}})]),n("a",{attrs:{href:t.getWhatsappUrl(),"data-action":"share/whatsapp/share"}},[n("img",{staticClass:"whatsapp",attrs:{src:s("c520"),alt:"Share via Whatsapp"}})])])]):t._e(),t.shortUrl?t._e():n("button",{staticClass:"button primary",attrs:{disabled:!this.password},on:{click:t.share}},[t.isLoading?t._e():n("span",{staticClass:"name"},[n("img",{staticClass:"icon",attrs:{src:s("0f6b"),alt:"Generate link"}}),n("span",[t._v("Generate link")])]),t.isLoading?n("img",{staticClass:"loading",attrs:{src:s("085b")}}):t._e()])])])},N=[],G=s("f499"),M=s.n(G),W=(s("96cf"),s("3b8d")),q=s("1c59"),F=s.n(q),R={apiKey:"AIzaSyCVqoT84B4uNEJOdpqcrcizUY1bfrKw8bw",authDomain:"my-market-list.firebaseapp.com",databaseURL:"https://my-market-list.firebaseio.com",projectId:"my-market-list",storageBucket:"my-market-list.appspot.com",messagingSenderId:"918601514662",rebrandlyKey:"33fd351d0bc647e5b70f7b81d4fdf3d7"},H={name:"LogIn",data:function(){return{email:"",password:"",error:void 0,shortUrl:void 0,isLoading:!1}},props:{user:{type:Object,required:!0}},computed:{url:function(){var t="some-unique-key",e=new F.a(t),s=this.user.email+";"+this.password;return this.makeUrl(e.encrypt(s))}},methods:{copyText:function(){var t=document.createElement("textarea");t.value=this.shortUrl,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)},getWhatsappUrl:function(){return"whatsapp://send?text=Here is the link to access my list: "+encodeURIComponent("https://"+this.shortUrl)},makeUrl:function(t){var e=new URL("https://my-market-list.firebaseapp.com");return e.searchParams.append("key",t),e},close:function(){this.$emit("close")},replace:function(t){return t.replace(/email address|user/g,"list name")},share:function(){var t=Object(W["a"])(regeneratorRuntime.mark(function t(e){var s,n,a,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e.preventDefault(),this.isLoading=!0,s={destination:this.url.href},n={"Content-Type":"application/json",Accept:"application/json",apikey:R.rebrandlyKey},t.next=6,fetch("https://api.rebrandly.com/v1/links",{method:"POST",headers:n,body:M()(s)}).then(function(t){return t.json()});case 6:a=t.sent,i=a.shortUrl,this.shortUrl=i,this.isLoading=!1;case 10:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()}},V=H,D=(s("1ad2"),Object(o["a"])(V,T,N,!1,null,"6cbd2efe",null)),K=D.exports,z={name:"home",data:function(){return{item:void 0,isOpen:void 0,loading:!1}},components:{UiHeader:C,SignUp:j,LogIn:E,ShareList:K},computed:Object(m["a"])({},Object(g["c"])(["getList","getUser","getSuggestList","isLoading","isGuest"]),{suggests:function(){if(!this.item||this.item.length<2)return[];var t=[],e=this.item.toLowerCase();for(var s in this.getSuggestList)this.getSuggestList.hasOwnProperty(s)&&-1!==s.toLowerCase().indexOf(e)&&t.push(s);return t}}),methods:Object(m["a"])({isVisible:function(t){return this.isOpen===t},close:function(){this.isOpen=void 0},open:function(t){this.isOpen=t,window.ga("send",{hitType:"event",eventCategory:"Navigation",eventAction:"Open",eventLabel:t})}},Object(g["b"])(["getListFromApi"]),{addItem:function(){if(this.item){var t=this.item;this.item="",h.a.database().ref(this.getUser.uid).child("list").push(t),h.a.database().ref(this.getUser.uid).child("list_suggest").child(t).set({value:t}),window.ga("send",{hitType:"event",eventCategory:"Navigation",eventAction:"AddItem",eventLabel:t})}},removeItem:function(t){h.a.database().ref(this.getUser.uid).child("list").child(t).remove(),window.ga("send",{hitType:"event",eventCategory:"Navigation",eventAction:"RemoveItem",eventLabel:this.item})},login:function(t){h.a.auth().signInWithEmailAndPassword(t[0]+"@gmail.com",t[1]).then(function(t){console.log(t)},function(t){})}}),mounted:function(){var t=this.$route.query.key;if(t){var e="some-unique-key",s=new F.a(e);this.login(s.decrypt(t).split(";"))}}},J=z,B=(s("6418"),Object(o["a"])(J,p,d,!1,null,"f85e4d06",null)),Y=B.exports;n["a"].use(u["a"]);var Q=new u["a"]({mode:"history",base:"/",routes:[{path:"*",redirect:"/"},{path:"/",name:"home",component:Y}]}),X=Q;n["a"].use(g["a"]);var Z=new g["a"].Store({state:{list:[],list_suggest:[],isLoading:!1,user:{}},getters:{getList:function(t){return t.list||[]},getSuggestList:function(t){return t.list_suggest||[]},isLoading:function(t){return t.isLoading},getUser:function(t){return t.user},isGuest:function(t){return"guest"===t.user.email}},mutations:{updateLists:function(t,e){t.list=[],t.list_suggest=[],e&&(t.list=e.list,t.list_suggest=e.list_suggest)},updateUser:function(t,e){e&&(t.user={uid:e.uid,email:e.email.replace("@gmail.com","")})}},actions:{updateUser:function(t,e){var s=t.commit;s("updateUser",e)},getListFromApi:function(t){var e=t.state,s=t.commit;return e.isLoading=!0,h.a.database().ref(e.user.uid).on("value",function(t){e.isLoading=!1,s("updateLists",t.val())})}}});h.a.initializeApp(R),n["a"].config.productionTip=!1;var tt="";h.a.auth().onAuthStateChanged(function(t){h.a.auth().currentUser||-1!==window.location.search.indexOf("key")||h.a.auth().signInWithEmailAndPassword("guest@gmail.com","!@#$%^&*").then(function(t){console.log(t)},function(t){alert("Oops. "+t.message)}),Z.dispatch("updateUser",t),Z.dispatch("getListFromApi"),tt||(tt=new n["a"]({router:X,store:Z,render:function(t){return t(l)}}).$mount("#app"))})},5798:function(t,e,s){},"582e":function(t,e,s){t.exports=s.p+"img/icon-signup.28b6ceb8.svg"},5885:function(t,e,s){t.exports=s.p+"img/icon-login.7cccfbc2.svg"},"5c0b":function(t,e,s){"use strict";var n=s("5e27"),a=s.n(n);a.a},"5c4e":function(t,e,s){},"5e27":function(t,e,s){},6418:function(t,e,s){"use strict";var n=s("5798"),a=s.n(n);a.a},"6c45":function(t,e,s){t.exports=s.p+"img/icon-github.efe0bf9c.svg"},"7cd8":function(t,e,s){t.exports=s.p+"img/my-market-list-logo.69933575.svg"},"877a":function(t,e,s){},b3e8:function(t,e,s){t.exports=s.p+"img/icon-whatsapp.d11aa9eb.svg"},bcda:function(t,e,s){t.exports=s.p+"img/icon-share.49d43e3d.svg"},c520:function(t,e,s){t.exports=s.p+"img/icon-whatsapp-white.3dd3ca35.svg"},fbb4:function(t,e,s){t.exports=s.p+"img/icon-login-open.c37fe971.svg"}});
//# sourceMappingURL=app.ec13ca1a.js.map