(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],[,,function(e,t,n){e.exports={board:"Square_board__pa8RV",theButton:"Square_theButton__3kHNh",theReset:"Square_theReset__rjWGp",row:"Square_row__2NaQS",navbar:"Square_navbar__3oNjI",status:"Square_status__CVEd0",resetGroup:"Square_resetGroup__3onlf",resetButton:"Square_resetButton__eyEfd"}},,,,function(e,t,n){e.exports={App:"App_App__1PMlz","App-logo":"App_App-logo__RcX2g","App-logo-spin":"App_App-logo-spin__tyGXI","App-header":"App_App-header__2cwMd","App-link":"App_App-link__3tPlP"}},,,,,function(e,t,n){},,function(e,t,n){e.exports={row:"Board_row__x35pW"}},function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),a=n(5),s=n.n(a),r=(n(11),n.p,n(3)),l=n(2),i=n.n(l),u=n(0),p=function(e){var t=Object(o.useState)(Array(9).fill(null)),n=Object(r.a)(t,2),c=n[0],a=n[1];console.log(c);var s=Object(o.useState)(!0),l=Object(r.a)(s,2),p=l[0],_=l[1],j=Object(o.useState)("Click to reset game"),d=Object(r.a)(j,2),b=d[0],h=d[1];console.log(c);var g,O=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var o=Object(r.a)(t[n],3),c=o[0],a=o[1],s=o[2];if(e[c]&&e[c]===e[a]&&e[a]===e[s])return e[c]}return null}(c);g=O?"Winner is ".concat(O):"Next Player: ".concat(p?"X":"O");var f=function(e){return Object(u.jsx)("button",{className:i.a.theButton,onClick:function(){return function(e){console.log(e);var t=c;if(console.log(t),!t[e]){var n=t[e]=p?"X":"O";_(!p),a(t),console.log(t),console.log(n),h("Click to reset game")}}(e)},children:c[e]})};return console.log(c),Object(u.jsxs)("section",{children:[Object(u.jsxs)("nav",{className:i.a.navbar,children:[Object(u.jsx)("div",{children:Object(u.jsx)("h2",{className:i.a.status,children:g})}),Object(u.jsxs)("div",{className:i.a.resetGroup,children:[Object(u.jsx)("h2",{className:i.a.theReset,children:b}),Object(u.jsx)("button",{className:i.a.resetButton,onClick:function(){return c.splice(0,c.length),console.log(c),c.fill(null,9),console.log(c),void h("Click on a square to start new game")},children:"Reset"})]})]}),Object(u.jsxs)("section",{className:i.a.board,children:[Object(u.jsxs)("div",{className:i.a.row,children:[f(0)," ",f(1)," ",f(2)]}),Object(u.jsxs)("div",{className:i.a.row,children:[f(3)," ",f(4)," ",f(5)]}),Object(u.jsxs)("div",{className:i.a.row,children:[f(6)," ",f(7)," ",f(8)]})]})]})},_=(n(13),n(6)),j=n.n(_);var d=function(){return Object(u.jsx)("div",{className:j.a.page,children:Object(u.jsx)(p,{})})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),o(e),c(e),a(e),s(e)}))};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(d,{})}),document.getElementById("root")),b()}],[[14,1,2]]]);
//# sourceMappingURL=main.b454d7f2.chunk.js.map