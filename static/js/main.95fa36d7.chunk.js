(this.webpackJsonpzadanie7=this.webpackJsonpzadanie7||[]).push([[0],{53:function(e,n,t){e.exports=t(64)},58:function(e,n,t){},64:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(7),c=t.n(o),u=(t(58),t(93)),l=t(105),i=t(65),s=t(98),f=t(97),h=t(99),E=t(100),d=t(106),m=t(103),O=t(101),b=t(102),w=t(104),y=t(16),k=function(e){return e.taskList},v=t(13),j=t(46),p="https://jfdd14-j-homework7.firebaseio.com/tasks/",S="SET_FETCHED_TASKS",T="SET_LOADING_TASKS",_="SET_ERROR_TASKS",g="SHOW_ALL",L="SHOW_DONE",N="SHOW_UNDONE",A="INPUT_NEW_TASK",D="INPUT_SEARCH_TASK",C=function(){return function(e){return fetch(p+".json").then((function(e){return e.json()})).then((function(e){return n=e,Object.entries(n||{}).map((function(e){var n=Object(j.a)(e,2),t=n[0],r=n[1];return"object"===typeof r?Object(v.a)({},r,{key:t}):{key:t,value:r}}));var n})).then((function(n){return e(U(n))})).catch((function(n){return e(W())}))}},U=function(e){return{type:S,value:e}},W=function(){return{type:_}},I=function(e){return{type:A,value:e}},R=function(){var e=Object(y.c)((function(e){return k(e)})),n=Object(y.c)((function(e){return function(e){var n=[];return e.showAll?n=k(e):e.showDoneOnly?n=function(e){return e.taskList.filter((function(e){return e.done}))}(e):e.showUndoneOnly&&(n=function(e){return e.taskList.filter((function(e){return!1===e.done}))}(e)),n.filter((function(n){return n.title.toLowerCase().includes(e.inputSearchTask.toLowerCase())}))}(e)})),t=Object(y.c)((function(e){return function(e){return e.isLoading}(e)})),o=Object(y.c)((function(e){return function(e){return e.isError}(e)})),c=Object(y.c)((function(e){return function(e){return e.inputNewTask}(e)})),v=Object(y.c)((function(e){return function(e){return e.inputSearchTask}(e)})),j=Object(y.b)(),S=function(e){return j({type:D,value:e})},T=function(e){return j((n=e,function(e){var t={title:n,done:!1};fetch(p+".json",{method:"POST",body:JSON.stringify(t)}).then((function(){return e(I(""))})).then((function(){return e(C())}))}));var n},_=function(e){return j(function(e){return function(n){var t={title:e.title,done:!e.done};fetch(p+e.key+".json",{method:"PUT",body:JSON.stringify(t)}).then((function(){return n(C())}))}}(e))},A=function(e){return j(function(e){return function(n){fetch(p+e.key+".json",{method:"DELETE"}).then((function(){return n(C())}))}}(e))};return Object(r.useEffect)((function(){j(C())}),[]),a.a.createElement(u.a,{maxWidth:"md"},a.a.createElement(l.a,{label:"enter new task",fullWidth:!0,value:c,onChange:function(e){return n=e.target.value,j(I(n));var n}}),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(i.a,{fullWidth:!0,onClick:function(){return T(c)},variant:"contained",color:"primary"},"add"),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(l.a,{label:"which task are you looking for?",fullWidth:!0,value:v,onChange:function(e){return S(e.target.value)}}),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(s.a,{size:"small",fullWidth:!0},a.a.createElement(i.a,{onClick:function(){return j({type:g})}},"show all tasks"),a.a.createElement(i.a,{onClick:function(){return j({type:L})}},"show done only"),a.a.createElement(i.a,{onClick:function(){return j({type:N})}},"show undone only")),a.a.createElement("br",null),a.a.createElement("br",null),o?"error!":t?"loading...":e.length>0?a.a.createElement(f.a,null,n.length>0?n.map((function(e){return a.a.createElement(h.a,{key:e.key,selected:!!e.done},a.a.createElement(E.a,{onClick:function(){return _(e)}},e.done?a.a.createElement(O.a,null):a.a.createElement(b.a,null)),a.a.createElement(d.a,{primary:e.title}),a.a.createElement(m.a,null,a.a.createElement(E.a,{onClick:function(){return A(e)}},a.a.createElement(w.a,null))))})):a.a.createElement("p",null,"no matches")):a.a.createElement("p",null,"You don't have any tasks yet. Add some!"))};var H=function(){return a.a.createElement(R,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var K=t(24),J={taskList:[],isLoading:!0,isError:!1,showAll:!0,showDoneOnly:!1,showUndoneOnly:!1,inputNewTask:"",inputSearchTask:""},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case S:return Object(v.a)({},e,{taskList:n.value,isLoading:!1,isError:!1});case T:return Object(v.a)({},e,{taskList:[],isLoading:!0,isError:!1});case _:return Object(v.a)({},e,{taskList:[],isLoading:!1,isError:!0});case g:return Object(v.a)({},e,{showAll:!0,showDoneOnly:!1,showUndoneOnly:!1});case L:return Object(v.a)({},e,{showAll:!1,showDoneOnly:!0,showUndoneOnly:!1});case N:return Object(v.a)({},e,{showAll:!1,showDoneOnly:!1,showUndoneOnly:!0});case A:return Object(v.a)({},e,{inputNewTask:n.value});case D:return Object(v.a)({},e,{inputSearchTask:n.value});default:return e}},X=t(45);var z,x=Object(K.d)(P,z,Object(K.c)(Object(K.a)(X.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(y.a,{store:x},a.a.createElement(H,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[53,1,2]]]);
//# sourceMappingURL=main.95fa36d7.chunk.js.map