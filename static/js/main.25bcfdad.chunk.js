(this.webpackJsonpsnake=this.webpackJsonpsnake||[]).push([[0],[,,,,function(e,t,n){e.exports=n(14)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),o=n.n(c),i=(n(9),n(1));n(10),n(11),n(12);function u(e){var t=e.active;return r.a.createElement("svg",{className:t?"LeftArrow":"LeftArrow inactive",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"}),r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))}var l=function(e){var t=e.onUpdateScreen,n=e.idMenu,c=Object(a.useState)(null),o=Object(i.a)(c,2),l=o[0],f=o[1],s=["NEW GAME"],h=function(e){f(e)};return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"menu-wrapper"},r.a.createElement("div",null,function(){for(var e=[],a=function(a){e.push(r.a.createElement("h1",{key:a,onMouseEnter:function(){return h(a)},onMouseLeave:function(){return h(null)},onClick:function(){return t(n)}},r.a.createElement(u,{active:a===l}),s[a]))},c=0;c<s.length;c++)a(c);return e}())),r.a.createElement("a",{href:"https://github.com/Danny908/Tic-Tac-Toe-MiniMax",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("svg",{height:"60",viewBox:"0 0 16 16",width:"60"},r.a.createElement("path",{fill:"#ffffff",d:"M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"}))))};n(13);var f=function(e){var t,n=e.onScore,c=e.onUpdateScreen,o=e.idMenu,u=37,l=38,f=39,s=40,h=Object(a.useState)([{x:17,y:15},{x:18,y:15},{x:19,y:15},{x:20,y:15}]),m=Object(i.a)(h,2),v=m[0],d=m[1],y=Object(a.useState)(f),C=Object(i.a)(y,2),E=C[0],b=C[1],g=Object(a.useState)(null),S=Object(i.a)(g,2),p=S[0],k=S[1],w=Object(a.useState)(!1),O=Object(i.a)(w,2),x=O[0],M=O[1],j=function(e){v.forEach((function(t,n){e.beginPath(),e.fillStyle=n===v.length-1?"#57ba59":"whitesmoke",e.strokeStyle="#262931";var a=25*t.x,r=25*t.y;e.fillRect(a,r,25,25),e.strokeRect(a,r,25,25)}))},N=function(){var e=v.map((function(e,t){return e=t+1<v.length?v[t+1]:function(e){var t=e.x,n=e.y;switch(E){case u:t=t-1<0?39:t-1;break;case l:n=n-1<0?29:n-1;break;case f:t=t+1>39?0:t+1;break;case s:n=n+1>29?0:n+1;break;default:t=t+1>39?0:t+1}return{x:t,y:n}}(e)}));e.some((function(t,n){return n!==e.length-1&&JSON.stringify(e[e.length-1])===JSON.stringify(t)}))&&M(!0),d(e)},J=function(e){return Math.floor(Math.random()*e)},A=function(e){var t,n;p&&(t=25*p.x,n=25*p.y,e.beginPath(),e.fillStyle=p.special?"yellow":"red",e.fillRect(t,n,25,25))},T=function(){if(t=v[v.length-1],a={x:p.x,y:p.y},JSON.stringify(t)===JSON.stringify(a)){var e=v.map((function(e){return e}));k(null),n(p.special?5:1),e.unshift(e[0]),d(e)}var t,a},U=function(e){var t="GAME OVER :(";e.beginPath(),e.font="bold 50px Arial",e.fillStyle="whitesmoke",e.strokeStyle="#262931";var n=e.measureText(t).width;e.fillText(t,500-n/2,400),e.strokeText(t,500-n/2,400),setTimeout((function(){return c(o)}),1200)};return Object(a.useEffect)((function(){p||function e(){var t=J(40),n=J(30),a=5===J(10);v.some((function(e){return JSON.stringify(e)===JSON.stringify({x:t,y:n})}))&&e(),k({x:t,y:n,special:a})}()}),[p]),Object(a.useEffect)((function(){N()}),[E]),Object(a.useEffect)((function(){var e;return x||(e=setInterval((function(){N()}),200)),p&&T(),function(){var e=t.getContext("2d");e.beginPath(),e.fillStyle="#262931",e.fillRect(0,0,1e3,750),j(e),A(e),x&&U(e)}(),function(){return clearInterval(e)}})),r.a.createElement("canvas",{tabIndex:"0",onKeyUp:function(e){return function(e){e.keyCode!==E&&(e.keyCode===u&&E!==f||e.keyCode===f&&E!==u||e.keyCode===l&&E!==s||e.keyCode===s&&E!==l)&&b(e.keyCode)}(e)},ref:function(e){e&&(t=e).focus()},width:1e3,height:750})};var s=function(){var e=Object(a.useState)("menu"),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(0),u=Object(i.a)(o,2),s=u[0],h=u[1],m="MENU",v="NEW GAME",d=function(e){h((function(t){return t+e}))},y=function(e){c(e)};return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,n===v?"SCORE: ".concat(s):"SNAKE JS"),function(){switch(n){case m:return r.a.createElement(l,{onUpdateScreen:y,idMenu:v});case v:return r.a.createElement(f,{onScore:d,onUpdateScreen:y,idMenu:m});default:return r.a.createElement(l,{onUpdateScreen:y,idMenu:v})}}())};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.25bcfdad.chunk.js.map