(window["webpackJsonpflexbox-playground"]=window["webpackJsonpflexbox-playground"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(7),l=a.n(r),c=a(8),i=a(1),o=a(2),u=a(4),m=a(3),f=a(5),p=function(e){function t(e){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).call(this,e))}return Object(f.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.list,a=e.value,n=e.onChange,r=e.name;return s.a.createElement("div",{className:"radioBox"},!!t.length&&t.map((function(e,t){return s.a.createElement("label",{htmlFor:"".concat(r,"_").concat(t),key:t,className:t===a?"checked":""},s.a.createElement("input",{type:"radio",name:r,id:"".concat(r,"_").concat(t),value:t,checked:t===a,onChange:n}),e.text)})))}}]),t}(n.Component),b=function(e){function t(e){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).call(this,e))}return Object(f.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.classList;return s.a.createElement("div",{className:"boxWrapper d-flex ".concat(e.join(" "))},Array.apply(null,Array(10)).map((function(e,t){return s.a.createElement("div",{className:"boxItem",key:t},t+1)})))}}]),t}(n.Component),d=function(e){function t(e){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).call(this,e))}return Object(f.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.params,a=e.setItemVal,n=e.asList,r=e.fbList,l=e.number,c=t.grow,i=t.shrink,o=t.basis,u=t.order,m=t.self,f=function(e,t){return s.a.createElement("div",{className:"numberBox"},s.a.createElement("div",{className:"roundBtn minusBtn",onClick:function(){return a(e,t-1)}},"-"),s.a.createElement("div",{className:"number"},t),s.a.createElement("div",{className:"roundBtn plusBtn",onClick:function(){return a(e,t+1)}},"+"))};return s.a.createElement("div",{className:"selector"},s.a.createElement("div",{className:"text-center font-weight-bold"},l),s.a.createElement("div",{className:"selRow"},s.a.createElement("span",{className:"selTitle"},"flex-grow"),f("grow",c)),s.a.createElement("div",{className:"selRow"},s.a.createElement("span",{className:"selTitle"},"flex-shrink"),f("shrink",i)),s.a.createElement("div",{className:"selRow"},s.a.createElement("span",{className:"selTitle"},"flex-basis"),s.a.createElement("select",{value:o,onChange:function(e){return a("basis",e.target.value)}},r.map((function(e,t){return s.a.createElement("option",{value:t,key:t},e.text)})))),s.a.createElement("div",{className:"selRow"},s.a.createElement("span",{className:"selTitle"},"order"),f("order",u)),s.a.createElement("div",{className:"selRow"},s.a.createElement("span",{className:"selTitle"},"align-self"),s.a.createElement("select",{value:m,onChange:function(e){return a("self",e.target.value)}},n.map((function(e,t){return s.a.createElement("option",{value:t,key:t},e.text)})))))}}]),t}(n.Component),x=function(e){function t(e){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).call(this,e))}return Object(f.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.itemVal,a=e.asList,n=e.fbList,r=function(e){return{flexGrow:e.grow,flexShrink:e.shrink,order:e.order}},l=function(e){var t=e.basis,s=e.self,r=["itemSelf"];return n[t]&&n[t].class&&r.push(n[t].class),a[s]&&a[s].class&&r.push(a[s].class),r.join(" ")};return s.a.createElement("div",{className:"itemWrapper d-flex flex-wrap"},t.map((function(e,t){return s.a.createElement("div",{key:t,className:l(e),style:r(e)},t+1)})))}}]),t}(n.Component);function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function v(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(a,!0).forEach((function(t){Object(c.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var g=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).setConVal=function(e,t){var n=v({},a.state.containerVal);n[e]=Number(t),a.setState({containerVal:n})},a.setItemVal=function(e,t,n){var s=a.state.itemVal.map((function(e){return v({},e)}));s[e][t]=Number(n),a.setState({itemVal:s})},a.setClass=function(){var e=a.state.containerVal,t={dirVal:"dirList",wrapVal:"wrapList",jcVal:"jcList",aiVal:"aiList",acVal:"acList"};return Object.keys(e).reduce((function(n,s){if(e[s]&&t[s]){var r=a.state[t[s]];return n.concat(r[e[s]].class)}return n}),[])},a.initCon=function(e){e&&e.preventDefault();var t=v({},a.state.containerVal);Object.keys(t).map((function(e){return t[e]=0})),a.setState({containerVal:t})},a.initItems=function(e){e&&e.preventDefault();var t=Array.apply(null,Array(5)).map((function(e){return{grow:0,shrink:1,basis:0,order:0,self:0}}));a.setState({itemVal:t})},a.state={dirList:[{text:"row",class:""},{text:"column",class:"flex-column"},{text:"row-reverse",class:"flex-row-reverse"},{text:"column-reverse",class:"flex-column-reverse"}],wrapList:[{text:"nowrap",class:""},{text:"wrap",class:"flex-wrap"},{text:"wrap-reverse",class:"flex-wrap-reverse"}],jcList:[{text:"flex-start",class:""},{text:"flex-end",class:"justify-content-end"},{text:"center",class:"justify-content-center"},{text:"space-between",class:"justify-content-between"},{text:"space-around",class:"justify-content-around"}],aiList:[{text:"flex-start",class:""},{text:"flex-end",class:"align-items-end"},{text:"center",class:"align-items-center"},{text:"baseline",class:"align-items-baseline"},{text:"stretch",class:"align-items-stretch"}],acList:[{text:"flex-start",class:""},{text:"flex-end",class:"align-content-end"},{text:"center",class:"align-content-center"},{text:"space-between",class:"align-content-between"},{text:"space-around",class:"align-content-around"},{text:"stretch",class:"align-content-stretch"}],containerVal:{dirVal:0,wrapVal:0,jcVal:0,aiVal:0,acVal:0},itemVal:[{grow:0,shrink:1,basis:0,order:0,self:0},{grow:0,shrink:1,basis:0,order:0,self:0},{grow:0,shrink:1,basis:0,order:0,self:0},{grow:0,shrink:1,basis:0,order:0,self:0},{grow:0,shrink:1,basis:0,order:0,self:0}],asList:[{text:"auto",class:""},{text:"flex-start",class:"align-self-start"},{text:"flex-end",class:"align-self-end"},{text:"center",class:"align-self-center"},{text:"baseline",class:"align-self-baseline"},{text:"stretch",class:"align-self-stretch"}],fbList:[{text:"auto",class:""},{text:"0px",class:"flex-basis-0"},{text:"100px",class:"flex-basis-px"},{text:"50%",class:"flex-basis-percent"}]},a}return Object(f.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.containerVal,n=t.dirList,r=t.wrapList,l=t.jcList,c=t.aiList,i=t.acList,o=t.itemVal,u=t.asList,m=t.fbList,f=function(t,n,r,l){return s.a.createElement("div",{className:"mb-2 row align-items-center"},s.a.createElement("span",{className:"col-lg-2 mb-lg-0 mb-1 font-weight-bold"},t),s.a.createElement("div",{className:"col-lg-10"},s.a.createElement(p,{name:n,list:r,value:a[l],onChange:function(t){return e.setConVal(l,t.target.value)}})))};return s.a.createElement("div",{className:"container pt-2 pb-5"},s.a.createElement("h1",{className:"text-center mb-4"},"Flexbox Playground"),s.a.createElement("h3",{className:"my-4"},s.a.createElement("span",{role:"img"},"\ud83e\uddc0")," flex container",s.a.createElement("button",{className:"btn btn-sm btn-outline-danger ml-4",onClick:this.initCon},"reset!")),f("flex-direction","dirBtn",n,"dirVal"),f("flex-wrap","wrapBtn",r,"wrapVal"),f("justify-content","jcBtn",l,"jcVal"),f("align-items","aiBtn",c,"aiVal"),f("align-content","acBtn",i,"acVal"),!!a.acVal&&!a.wrapVal&&s.a.createElement("div",{className:"text-danger"},"* ALIGN-CONTENT need to use with WRAP!!"),s.a.createElement(b,{classList:this.setClass()}),s.a.createElement("h3",{className:"my-4"},s.a.createElement("span",{role:"img"},"\ud83e\uddc0")," flex items",s.a.createElement("button",{className:"btn btn-sm btn-outline-danger ml-4",onClick:this.initItems},"reset!")),s.a.createElement("div",{className:"selectorWrapper"},Array.apply(null,Array(5)).map((function(t,a){return s.a.createElement(d,{key:a,number:a+1,params:o[a],asList:u,fbList:m,setItemVal:function(t,n){return e.setItemVal(a,t,n)}})}))),s.a.createElement(x,{itemVal:o,asList:u,fbList:m}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(14);l.a.render(s.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.83d51199.chunk.js.map