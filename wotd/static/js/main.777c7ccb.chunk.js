(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,a,t){e.exports=t(87)},35:function(e,a,t){},37:function(e,a,t){},85:function(e,a,t){},87:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(26),o=t.n(l),d=(t(35),t(5)),c=t(6),i=t(8),s=t(7),m=t(9),u=(t(37),t(27)),y=t.n(u),b=t(28),h=[{id:"Day.Sunday",name:"Sunday",label:"Sunday"},{id:"Day.Monday",name:"Monday",label:"Monday"},{id:"Day.Tuesday",name:"Tuesday",label:"Tuesday"},{id:"Day.Wednesday",name:"Wednesday",label:"Wednesday"},{id:"Day.Thursday",name:"Thursday",label:"Thursday"},{id:"Day.Friday",name:"Friday",label:"Friday"},{id:"Day.Saturday",name:"Saturday",label:"Saturday"}],v=[{id:"Month.January",name:"January",label:"January"},{id:"Month.February",name:"February",label:"February"},{id:"Month.March",name:"March",label:"March"},{id:"Month.April",name:"April",label:"April"},{id:"Month.May",name:"May",label:"May"},{id:"Month.June",name:"June",label:"June"},{id:"Month.July",name:"July",label:"July"},{id:"Month.August",name:"August",label:"August"},{id:"Month.September",name:"September",label:"September"},{id:"Month.October",name:"October",label:"October"},{id:"Month.November",name:"November",label:"November"},{id:"Month.December",name:"December",label:"December"}],w=(t(85),function(e){function a(e){var t;return Object(d.a)(this,a),t=Object(i.a)(this,Object(s.a)(a).call(this,e)),console.log("DateView props",e),t}return Object(m.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props,a=e.date,t=e.word;return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"date-header"},r.a.createElement("div",{className:"date-main"},a.getDate()),r.a.createElement("div",{className:"date-extra"},r.a.createElement("div",{className:"date-day"},h[a.getDay()].label),r.a.createElement("div",{className:"date-month"},v[a.getMonth()].label),r.a.createElement("div",{className:"date-day"},a.getFullYear()))),r.a.createElement("hr",{className:"divider"}),r.a.createElement("section",{className:"word"},r.a.createElement("header",null,t.word),r.a.createElement("div",{className:"word-type"},t.type),r.a.createElement("div",{className:"word-def"},t.defn)),r.a.createElement("section",{className:"word-usage"},r.a.createElement("header",{className:"usage-header"},"USAGE"),r.a.createElement("hr",{className:"divider"}),t.usage)))}}]),a}(n.Component)),g=window.WORDS,p=new Date(2020,10,3),f=["word","type","defn","usage"],E=Object(b.virtualize)(y.a);var M=g.filter(function(e){for(var a=0;a<f.length;a++)if(!e[f[a]])return!1;return!0});console.log("Valid Word Count:",M.length);var D=function(){for(var e=p,a=Date.now(),t=[];e.getTime()<a;)t.push({date:new Date(e),word:M[t.length]}),e.setDate(e.getDate()+1);return t}();function N(e){var a=e.key,t=e.index;if(console.log("renderslide",a,t),t>0)return r.a.createElement("div",{key:a,className:"come-back"},"Come back tomorrow!");var n=D[D.length-1+t];return n&&n.word?r.a.createElement("div",{key:a},r.a.createElement(w,n)):r.a.createElement("div",{key:a,className:"come-back"},"No word (yet)")}var k=function(e){return(e<10?"0":"")+e};function O(e){if(!window.location.port){var a=D[D.length-1+e];a?ga("send","pageview","/wotd/".concat(a.date.getFullYear(),"-").concat(k(a.date.getMonth()+1),"-").concat(k(a.date.getDate()))):ga("send","pageview","/wotd/unknown")}}O(0);var j=function(e){function a(){return Object(d.a)(this,a),Object(i.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(c.a)(a,[{key:"switchDays",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement(E,{slideRenderer:N,onChangeIndex:O}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[29,2,1]]]);
//# sourceMappingURL=main.777c7ccb.chunk.js.map