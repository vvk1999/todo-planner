(function(){"use strict";var t={8248:function(t,e,n){var r=n(9963),a=n(6252);function o(t,e,n,r,o,i){const s=(0,a.up)("app-header"),c=(0,a.up)("to-do-page");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(s),(0,a.Wm)(c)],64)}const i={class:"header"},s=(0,a.uE)('<a href="#default" class="logo" data-v-a6ad1014>VVK1999</a><div class="header-right" data-v-a6ad1014><a class="active" href="#home" data-v-a6ad1014>Home</a><a href="#contact" data-v-a6ad1014>Contact</a><a href="#about" data-v-a6ad1014>About</a></div>',2),c=[s];function u(t,e){return(0,a.wg)(),(0,a.iD)("div",i,c)}var l=n(3744);const d={},p=(0,l.Z)(d,[["render",u],["__scopeId","data-v-a6ad1014"]]);var f=p,v=n(3577);const h=t=>((0,a.dD)("data-v-33d2c4e2"),t=t(),(0,a.Cn)(),t),g={class:"wrapper"},y={class:"task-input"},b={class:"controls"},m=h((()=>(0,a._)("div",{class:"filters"},[(0,a._)("span",{class:"active",id:"all"},"All"),(0,a._)("span",{id:"pending"},"Pending"),(0,a._)("span",{id:"completed"},"Completed")],-1))),w={class:"task-box"};function _(t,e,n,o,i,s){const c=(0,a.up)("ion-icon");return(0,a.wg)(),(0,a.iD)("div",g,[(0,a._)("div",y,[(0,a.Wm)(c,{name:"create-outline"}),(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>i.inputText=t),placeholder:"Add a New Task + Enter",onKeyup:e[1]||(e[1]=(0,r.D2)(((...t)=>s.onPressEnter&&s.onPressEnter(...t)),["enter"]))},null,544),[[r.nr,i.inputText]])]),(0,a._)("div",b,[m,(0,a._)("button",{class:"clear-btn",onClick:e[2]||(e[2]=(...t)=>s.clearList&&s.clearList(...t))},"Clear All")]),(0,a._)("ul",w,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.taskArray,(t=>((0,a.wg)(),(0,a.iD)("li",{key:t},(0,v.zw)(t),1)))),128))])])}n(7658);var k={data(){return{inputText:"",taskArray:[]}},methods:{onPressEnter(){this.taskArray.push(this.inputText),console.log("Array is ",this.taskArray),this.inputText=""},clearList(){console.log("clearing array"),this.taskArray=[]}}};const x=(0,l.Z)(k,[["render",_],["__scopeId","data-v-33d2c4e2"]]);var A=x,O={name:"App",components:{AppHeader:f,ToDoPage:A}};const T=(0,l.Z)(O,[["render",o]]);var j=T;(0,r.ri)(j).mount("#app")}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={exports:{}};return t[r].call(o.exports,o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,r,a,o){if(!r){var i=1/0;for(l=0;l<t.length;l++){r=t[l][0],a=t[l][1],o=t[l][2];for(var s=!0,c=0;c<r.length;c++)(!1&o||i>=o)&&Object.keys(n.O).every((function(t){return n.O[t](r[c])}))?r.splice(c--,1):(s=!1,o<i&&(i=o));if(s){t.splice(l--,1);var u=a();void 0!==u&&(e=u)}}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[r,a,o]}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var a,o,i=r[0],s=r[1],c=r[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(c)var l=c(n)}for(e&&e(r);u<i.length;u++)o=i[u],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(l)},r=self["webpackChunkvue_starter_project"]=self["webpackChunkvue_starter_project"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(8248)}));r=n.O(r)})();
//# sourceMappingURL=app.4ca04e8b.js.map