(this["webpackJsonpmy-love"]=this["webpackJsonpmy-love"]||[]).push([[0],{21:function(e,t,a){e.exports=a.p+"static/media/ballon-couple.92f3b88e.gif"},22:function(e,t,a){e.exports=a.p+"static/media/stamp.4b33a72b.webp"},23:function(e,t,a){e.exports=a.p+"static/media/nori.a2faa7c9.gif"},24:function(e,t,a){e.exports=a.p+"static/media/heart-stamp.b4525ec3.png"},28:function(e,t,a){e.exports=a.p+"static/media/butterfly.c2f8bdeb.webm"},32:function(e,t,a){e.exports=a(48)},37:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"BALLOON_COUPLE",(function(){return b.a})),a.d(n,"NORI_STAMP",(function(){return h.a})),a.d(n,"NORI_WORRIED",(function(){return O.a}));var r=a(0),o=a.n(r),c=a(10),l=a.n(c),i=(a(37),a(12)),s=a(14),m=a(13),u=a(31),v=a(30),f=a(2),d=(a(42),a(26)),p=a.n(d),_=a(21),b=a.n(_),E=a(22),h=a.n(E),N=a(23),O=a.n(N),g=(a(24),a(43),a(44),o.a.forwardRef((function(e,t){var a=e.message,n=e.stamps,r=e.destinatary;return o.a.createElement("div",{className:"flip-envelope"},o.a.createElement("div",{className:"flip-envelope__design design"},o.a.createElement("div",{ref:t,className:"flip-envelope__envelope envelope","data-focused":"false"},o.a.createElement("div",{className:"flip-envelope__cover cover"},o.a.createElement("div",{className:"flip-envelope__cover-bottom bottom"}," "),o.a.createElement("div",{className:"flip-envelope__cover-left left"}),o.a.createElement("div",{className:"flip-envelope__cover-right right"}," "),o.a.createElement("div",{className:"flip-envelope__cover-top top"})),o.a.createElement("div",{className:"flip-envelope__paper"},o.a.createElement("div",{className:"flip-envelope__message-destinatary"},r),o.a.createElement("div",{className:"flip-envelope__message"},a),e.children)),o.a.createElement("div",{className:"flip-envelope__envelope-back envelope-back"},n)))}))),w=(a(45),function(e){var t=e.onPress,a=Object(r.useRef)(null);return o.a.createElement("div",{className:"heart-button"},o.a.createElement("input",{ref:a,id:"click",className:"heart-button__checkbox",type:"checkbox",onClick:t}),o.a.createElement("label",{className:"heart-button__label label",htmlFor:"click"},o.a.createElement("div",{className:"heart-button__favourite favourite"},o.a.createElement("div",{className:"heart-button__favourite-heart favourite_heart"},o.a.createElement("div",{className:"heart-button__favourite-heart-left favourite_heart__left"}),o.a.createElement("div",{className:"heart-button__favourite-heart-right favourite_heart__right"})),o.a.createElement("div",{className:"heart-button__favourite-text favourite_text"},o.a.createElement("span",{className:"heart-button__text-span"},"Feliz Cumplea\xf1os")))))}),y=a(27),R=(a(46),function(e){var t=e.throwConfetti,a=void 0!==t&&t,n={target:"my-canvas"},c=Object(r.useRef)(null);return Object(r.useEffect)((function(){c.current=new y.a(n)}),[]),Object(r.useEffect)((function(){a&&c.current.render()}),[a]),o.a.createElement("canvas",{ref:c,className:"confetti",id:"my-canvas"})}),j=a(28),k=a.n(j),C=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var c=arguments.length,l=new Array(c),s=0;s<c;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).state={throwConfetti:!1},e.envelopeRef=Object(r.createRef)(),e.scene={},e.parallaxInstance=Object(r.createRef)(),e.componentDidMount=function(){e.scene=document.getElementById("love-scene"),e.parallaxInstance=new p.a(e.scene)},e.onHeartButtonClick=function(){var t,a,n=null===(t=e.envelopeRef.current)||void 0===t?void 0:t.getAttribute("data-focused");null===(a=e.envelopeRef.current)||void 0===a||a.setAttribute("data-focused","false"==n?"true":"false"),e.setState({throwConfetti:!0})},e.render=function(){return o.a.createElement("div",{className:"love"},o.a.createElement(R,{throwConfetti:e.state.throwConfetti}),o.a.createElement("video",{className:"love__background",muted:!0,autoPlay:!0,playsInline:!0,loop:!0,id:"myVideo"},o.a.createElement("source",{src:k.a,type:"video/webm"}),"Sorry, your browser doesn't support embedded videos."),o.a.createElement("div",{className:"love__envelop-container"},o.a.createElement(g,{ref:e.envelopeRef,message:"Te Amo",destinatary:"Para: Mi Pretz"},o.a.createElement("div",{className:"heart"}),o.a.createElement("img",{className:"love__balloons-couple",src:n.BALLOON_COUPLE}))),o.a.createElement("div",{className:"love__heart-button"},o.a.createElement(w,{onPress:e.onHeartButtonClick})),o.a.createElement("img",{className:"love__nori-worried",src:n.NORI_WORRIED,alt:""}),o.a.createElement("div",{id:"love-scene"}))},e}return a}(r.Component),x=a(7),I=a(29),P={},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P;return"undefined"===typeof e?P:e},B=Object(x.c)({loveReducer:A}),L=[I.a],S=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||x.d;var D=function(){var e=S(x.a.apply(void 0,L));return{store:Object(x.e)(B,e)}}().store,M=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).render=function(){return o.a.createElement(u.a,{store:D},o.a.createElement(v.a,null,o.a.createElement(f.a,{path:"/",component:C})))},e}return a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.982afaf9.chunk.js.map