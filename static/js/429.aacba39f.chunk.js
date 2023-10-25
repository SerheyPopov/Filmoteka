"use strict";(self.webpackChunkfilmoteka=self.webpackChunkfilmoteka||[]).push([[429],{4429:function(n,e,r){r.r(e),r.d(e,{default:function(){return L}});var t,a,c,o,u,s,i,l,p,f=r(9439),v=r(2791),d=r(7689),h=r(9051),x=r(877),g=r(168),Z=r(5706),m=Z.Z.div(t||(t=(0,g.Z)(["\n  display: flex;\n"]))),w=Z.Z.div(a||(a=(0,g.Z)(["\n  padding: 0 80px;\n"]))),b=Z.Z.img(c||(c=(0,g.Z)(["\n  margin-right: 50px;\n"]))),k=Z.Z.h1(o||(o=(0,g.Z)(["\n  text-align: center;\n  margin: 20px 0;\n  color: #3a3b3b;\n"]))),j=Z.Z.p(u||(u=(0,g.Z)(["\n  font-size: larger;\n  font-weight: bold;\n  margin-bottom: 10px;\n"]))),y=Z.Z.span(s||(s=(0,g.Z)(["\n  font-size: larger;\n  font-weight: bold;\n  margin-bottom: 10px;\n"]))),U=Z.Z.ul(i||(i=(0,g.Z)(["\n  margin-bottom: 10px;\n  font-size: larger;\n  font-weight: 700;\n  color: #4e4e4e;\n"]))),S=Z.Z.h2(l||(l=(0,g.Z)(["\n  margin-bottom: 10px;\n"]))),_=Z.Z.p(p||(p=(0,g.Z)(["\n  margin-bottom: 10px;\n  font-size: larger;\n  font-weight: 700;\n  color: #4e4e4e;\n"]))),z=r(6095),C=r(184),R=function(n){var e=n.card,r=e.poster_path,t=e.title,a=e.vote_average,c=e.overview,o=e.genres,u=e.name;return(0,C.jsx)(w,{children:(0,C.jsxs)(m,{children:[(0,C.jsx)("div",{children:(0,C.jsx)(b,{src:r&&"https://image.tmdb.org/t/p/w500"+r,alt:t,width:400})}),(0,C.jsxs)("div",{children:[(0,C.jsx)(k,{children:t||u}),(0,C.jsxs)(j,{children:["Rating:",a]}),(0,C.jsx)(y,{children:"Genres:"}),(0,C.jsx)(U,{children:o&&o.map((function(n){return(0,C.jsx)("li",{children:n.name},n.id)}))}),(0,C.jsx)(S,{children:"Overview"}),(0,C.jsx)(_,{children:c}),(0,C.jsx)("div",{children:(0,C.jsx)(v.Suspense,{fallback:(0,C.jsx)(z.Z,{}),children:(0,C.jsx)(d.j3,{})})})]})]})})},L=function(){var n,e,r=(0,d.TH)(),t=null!==(n=null===(e=r.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies",a=(0,v.useState)(""),c=(0,f.Z)(a,2),o=c[0],u=c[1],s=(0,d.UO)(),i=r.pathname.slice(1,3),l=(0,v.useCallback)((function(){return"tv"===i?(0,x.VE)(s.filmId):(0,x.Zx)(s.filmId)}),[i,s]);return(0,v.useEffect)((function(){try{l().then((function(n){u(n)}))}catch(n){console.log(n)}}),[l]),(0,C.jsxs)("div",{children:[(0,C.jsxs)(h.aV,{children:[(0,C.jsx)("li",{children:(0,C.jsx)(h.ks,{to:t,children:"Go back"})}),(0,C.jsx)("li",{children:(0,C.jsx)(h.RF,{to:"cast",state:{from:t},children:"Cast"})}),(0,C.jsx)("li",{children:(0,C.jsx)(h.Cq,{to:"reviews",state:{from:t},children:"Reviews"})})]}),(0,C.jsx)(R,{card:o})]})}},9051:function(n,e,r){r.d(e,{Cq:function(){return f},RF:function(){return p},aV:function(){return v},ks:function(){return l}});var t,a,c,o,u=r(168),s=r(5706),i=r(1087),l=(0,s.Z)(i.rU)(t||(t=(0,u.Z)(["\n  text-decoration: none;\n  font-size: larger;\n  font-weight: 700;\n  color: #6a6a6a;\n  &:hover {\n    color: black;\n  }\n"]))),p=(0,s.Z)(i.OL)(a||(a=(0,u.Z)(["\n  text-decoration: none;\n  font-size: larger;\n  font-weight: 700;\n  color: #6a6a6a;\n  margin: 0 40px;\n  &:hover {\n    color: black;\n  }\n  &.active {\n    color: orangered;\n  }\n"]))),f=(0,s.Z)(i.OL)(c||(c=(0,u.Z)(["\n  text-decoration: none;\n  font-size: larger;\n  font-weight: 700;\n  color: #6a6a6a;\n  &:hover {\n    color: black;\n  }\n  &.active {\n    color: orangered;\n  }\n"]))),v=s.Z.ul(o||(o=(0,u.Z)(["\n  display: flex;\n  justify-content: center;\n"])))},877:function(n,e,r){r.d(e,{IT:function(){return p},M2:function(){return i},PL:function(){return d},VE:function(){return v},Wf:function(){return s},Zx:function(){return f},ei:function(){return x},ov:function(){return h},r4:function(){return l}});var t=r(5861),a=r(4687),c=r.n(a),o=r(1243),u="5f2a66e63fa9a8139a0b7e8b9aba27ca";o.Z.defaults.baseURL="https://api.themoviedb.org/";var s=function(){var n=(0,t.Z)(c().mark((function n(){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("3/trending/movie/day?api_key=".concat(u,"&language=en-US"));case 3:return e=n.sent,n.next=6,e.data;case 6:return r=n.sent,n.abrupt("return",r);case 10:n.prev=10,n.t0=n.catch(0),console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,t.Z)(c().mark((function n(){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("3/trending/tv/day?api_key=".concat(u,"&language=en-US"));case 3:return e=n.sent,n.next=6,e.data;case 6:return r=n.sent,n.abrupt("return",r);case 10:n.prev=10,n.t0=n.catch(0),console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(c().mark((function n(){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("3/trending/person/day?api_key=".concat(u,"&language=en-US"));case 3:return e=n.sent,n.next=6,e.data;case 6:return r=n.sent,n.abrupt("return",r);case 10:n.prev=10,n.t0=n.catch(0),console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(c().mark((function n(e){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("3/search/movie?query=".concat(e,"&api_key=").concat(u,"&language=en-US"));case 3:return r=n.sent,n.next=6,r.data;case 6:return t=n.sent,n.abrupt("return",t);case 10:n.prev=10,n.t0=n.catch(0),console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(c().mark((function n(e){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("3/movie/".concat(e,"?api_key=").concat(u,"&language=en-US"));case 3:return r=n.sent,n.next=6,r.data;case 6:return t=n.sent,n.abrupt("return",t);case 10:n.prev=10,n.t0=n.catch(0),console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,t.Z)(c().mark((function n(e){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("3/tv/".concat(e,"?api_key=").concat(u,"&language=en-US"));case 3:return r=n.sent,n.next=6,r.data;case 6:return t=n.sent,n.abrupt("return",t);case 10:n.prev=10,n.t0=n.catch(0),console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(c().mark((function n(e){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("3/person/".concat(e,"?api_key=").concat(u,"&language=en-US"));case 3:return r=n.sent,n.next=6,r.data;case 6:return t=n.sent,n.abrupt("return",t);case 10:n.prev=10,n.t0=n.catch(0),console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,t.Z)(c().mark((function n(e){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("3/movie/".concat(e,"/credits?api_key=").concat(u,"&language=en-US"));case 3:return r=n.sent,n.next=6,r.data;case 6:return t=n.sent,n.abrupt("return",t);case 10:n.prev=10,n.t0=n.catch(0),console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}(),x=function(){var n=(0,t.Z)(c().mark((function n(e){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("3/movie/".concat(e,"/reviews?api_key=").concat(u,"&language=en-US"));case 3:return r=n.sent,n.next=6,r.data;case 6:return t=n.sent,n.abrupt("return",t);case 10:n.prev=10,n.t0=n.catch(0),console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=429.aacba39f.chunk.js.map