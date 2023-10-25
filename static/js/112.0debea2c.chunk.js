"use strict";(self.webpackChunkfilmoteka=self.webpackChunkfilmoteka||[]).push([[112],{112:function(n,r,e){e.r(r),e.d(r,{default:function(){return U}});var t,a,c,u,o,s,p=e(9439),i=e(2791),f=e(168),l=e(5706),x=e(1087),v=l.Z.ul(t||(t=(0,f.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  margin-right: auto;\n  margin-left: auto;\n"]))),g=(0,l.Z)(x.rU)(a||(a=(0,f.Z)(["\n  text-decoration: none;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    transform: scale(1.03);\n"]))),h=l.Z.li(c||(c=(0,f.Z)(["\n  width: 300px;\n  margin-right: auto;\n  margin-left: auto;\n//   border: 1px solid black;\n  margin-bottom: 20px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n      transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n      border-radius: 5px;\n  &:hover {\n    transform: scale(1.03);\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n    \n"]))),d=l.Z.img(u||(u=(0,f.Z)(["\n  display: block;\n"]))),b=l.Z.p(o||(o=(0,f.Z)(["\n  font-size: x-large;\n  font-weight: 700;\n  color: #656565;\n"]))),m=l.Z.div(s||(s=(0,f.Z)(["\n  height: 70px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 15px;\n  background-color: #f9f7f7;\n"]))),Z=e(7689),w=e(184),k=function(n){var r=(0,Z.TH)(),e=n.person;return(0,w.jsx)(v,{children:e&&e.map((function(n){var e=n.id,t=n.profile_path,a=n.name;return(0,w.jsx)(h,{children:(0,w.jsxs)(g,{to:"/person/".concat(e),state:{from:r},children:[(0,w.jsx)(d,{src:t?t&&"https://image.tmdb.org/t/p/w500"+t:"https://svgsilh.com/svg/24530-4f4f4f.svg",alt:a,width:300}),(0,w.jsx)(m,{children:(0,w.jsx)(b,{children:a})})]})},e)}))})},y=e(877),U=function(){var n=(0,i.useState)([]),r=(0,p.Z)(n,2),e=r[0],t=r[1];return(0,i.useEffect)((function(){try{(0,y.r4)().then((function(n){t(n.results)}))}catch(n){console.log(n)}}),[]),(0,w.jsx)(k,{person:e})}},877:function(n,r,e){e.d(r,{IT:function(){return f},M2:function(){return p},PL:function(){return v},VE:function(){return x},Wf:function(){return s},Zx:function(){return l},ei:function(){return h},ov:function(){return g},r4:function(){return i}});var t=e(5861),a=e(4687),c=e.n(a),u=e(1243),o="5f2a66e63fa9a8139a0b7e8b9aba27ca";u.Z.defaults.baseURL="https://api.themoviedb.org/";var s=function(){var n=(0,t.Z)(c().mark((function n(){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("3/trending/movie/day?api_key=".concat(o,"&language=en-US"));case 3:return r=n.sent,n.next=6,r.data;case 6:return e=n.sent,n.abrupt("return",e);case 10:n.prev=10,n.t0=n.catch(0),console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(c().mark((function n(){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("3/trending/tv/day?api_key=".concat(o,"&language=en-US"));case 3:return r=n.sent,n.next=6,r.data;case 6:return e=n.sent,n.abrupt("return",e);case 10:n.prev=10,n.t0=n.catch(0),console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,t.Z)(c().mark((function n(){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("3/trending/person/day?api_key=".concat(o,"&language=en-US"));case 3:return r=n.sent,n.next=6,r.data;case 6:return e=n.sent,n.abrupt("return",e);case 10:n.prev=10,n.t0=n.catch(0),console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(c().mark((function n(r){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("3/search/movie?query=".concat(r,"&api_key=").concat(o,"&language=en-US"));case 3:return e=n.sent,n.next=6,e.data;case 6:return t=n.sent,n.abrupt("return",t);case 10:n.prev=10,n.t0=n.catch(0),console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(r){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(c().mark((function n(r){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("3/movie/".concat(r,"?api_key=").concat(o,"&language=en-US"));case 3:return e=n.sent,n.next=6,e.data;case 6:return t=n.sent,n.abrupt("return",t);case 10:n.prev=10,n.t0=n.catch(0),console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(r){return n.apply(this,arguments)}}(),x=function(){var n=(0,t.Z)(c().mark((function n(r){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("3/tv/".concat(r,"?api_key=").concat(o,"&language=en-US"));case 3:return e=n.sent,n.next=6,e.data;case 6:return t=n.sent,n.abrupt("return",t);case 10:n.prev=10,n.t0=n.catch(0),console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(r){return n.apply(this,arguments)}}(),v=function(){var n=(0,t.Z)(c().mark((function n(r){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("3/person/".concat(r,"?api_key=").concat(o,"&language=en-US"));case 3:return e=n.sent,n.next=6,e.data;case 6:return t=n.sent,n.abrupt("return",t);case 10:n.prev=10,n.t0=n.catch(0),console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(r){return n.apply(this,arguments)}}(),g=function(){var n=(0,t.Z)(c().mark((function n(r){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("3/movie/".concat(r,"/credits?api_key=").concat(o,"&language=en-US"));case 3:return e=n.sent,n.next=6,e.data;case 6:return t=n.sent,n.abrupt("return",t);case 10:n.prev=10,n.t0=n.catch(0),console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(r){return n.apply(this,arguments)}}(),h=function(){var n=(0,t.Z)(c().mark((function n(r){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("3/movie/".concat(r,"/reviews?api_key=").concat(o,"&language=en-US"));case 3:return e=n.sent,n.next=6,e.data;case 6:return t=n.sent,n.abrupt("return",t);case 10:n.prev=10,n.t0=n.catch(0),console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(r){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=112.0debea2c.chunk.js.map