webpackJsonp([6],{"6nMV":function(t,e){},F5VV:function(t,e,n){"use strict";n.d(e,"c",function(){return s}),n.d(e,"d",function(){return i}),n.d(e,"b",function(){return c}),n.d(e,"a",function(){return d});var o=n("//Fk"),r=n.n(o),u=n("p+dL"),a={get:"/notes/from/:notebookId",add:"/notes/to/:notebookId",update:"/notes/:noteId",delete:"/notes/:noteId"},s=function(t){var e=t.notebookId;return new r.a(function(t,n){Object(u.a)(a.get.replace(":notebookId",e)).then(function(e){e.data.sort(function(t,e){return t.updatedAt>e.updatedAt?-1:1}),t(e)}).catch(function(t){return n(t)})})},i=function(t,e){var n=t.noteId,o=e.title,r=e.content;return Object(u.a)(a.update.replace(":noteId",n),"PATCH",{title:o,content:r})},c=function(t){var e=t.noteId;return Object(u.a)(a.delete.replace(":noteId",e),"DELETE")},d=function(t){var e=t.notebookId,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{title:"",content:""},o=n.title,r=void 0===o?"":o,s=n.content,i=void 0===s?"":s;return Object(u.a)(a.add.replace(":notebookId",e),"POST",{title:r,content:i})}},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),r=n("Dd8w"),u=n.n(r),a=(n("ZEK7"),n("Q98j")),s=n("NYxO"),i={name:"Avatar.vue",data:function(){return{}},created:function(){"/login"!==this.$route.path&&this.checkLogin({path:"login"})},methods:u()({},Object(s.b)(["checkLogin"])),computed:u()({},Object(s.c)(["slug","username"]))},c={render:function(){var t=this.$createElement;return(this._self._c||t)("span",{attrs:{title:this.username}},[this._v(this._s(this.slug))])},staticRenderFns:[]};var d={name:"Sidebar.vue",components:{Avatar:n("VU/8")(i,c,!1,function(t){n("d8CS")},"data-v-fdf08326",null).exports},methods:u()({},Object(s.b)(["logout"]),{onLogout:function(){this.logout({path:"login"})}})},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"sidebar"}},[e("Avatar"),this._v(" "),e("div",{staticClass:"icons"},[e("router-link",{attrs:{to:"/note",title:"笔记"}},[e("i",{staticClass:"el-icon-tickets"})]),this._v(" "),e("router-link",{attrs:{to:"/notebooks",title:"笔记本"}},[e("i",{staticClass:"el-icon-folder-opened"})]),this._v(" "),e("router-link",{attrs:{to:"/trash",title:"回收站"}},[e("i",{staticClass:"el-icon-takeaway-box"})])],1),this._v(" "),e("div",{staticClass:"logout",on:{click:this.onLogout}},[e("i",{staticClass:"iconfont icon-logout"})])],1)},staticRenderFns:[]};var f={name:"App",components:{Sidebar:n("VU/8")(d,l,!1,function(t){n("6nMV")},"data-v-7cca6f1c",null).exports}},h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Sidebar"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var b=n("VU/8")(f,h,!1,function(t){n("tTo7")},null,null).exports,v=n("/ocq");o.default.use(v.a);var m=new v.a({routes:[{path:"/",redirect:"/login"},{path:"/login",component:function(){return n.e(4).then(n.bind(null,"xJsL"))}},{path:"/notebooks",component:function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"C3fl"))}},{path:"/note",component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"Gb2o"))}},{path:"/trash",component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"WMg/"))}}]}),p=n("zL8q"),k=n.n(p),I=(n("tvR6"),n("//Fk")),N=n.n(I),g=n("p+dL"),T={get:"/notebooks",add:"/notebooks",update:"/notebooks/:id",delete:"/notebooks/:id"},O={state:{notebooks:null,curBookId:null},getters:{notebooks:function(t){return t.notebooks||[]},curBook:function(t){return Array.isArray(t.notebooks)?t.curBookId?t.notebooks.find(function(e){return e.id==t.curBookId})||{}:t.notebooks[0]:{}}},mutations:{setNotebooks:function(t,e){t.notebooks=e.notebooks},addNotebook:function(t,e){t.notebooks.unshift(e.notebook)},updateNotebook:function(t,e){(t.notebooks.find(function(t){return t.id==e.notebookId})||{}).title=e.title},deleteNotebook:function(t,e){t.notebooks=t.notebooks.filter(function(t){return t.id!=e.notebookId})},setCurBook:function(t,e){t.curBookId=e.curBookId}},actions:{getNotebooks:function(t){var e=t.commit;return t.state.notebooks?N.a.resolve():new N.a(function(t,e){Object(g.a)(T.get).then(function(e){e.data.sort(function(t,e){return t.createdAt>e.createdAt?-1:1}),t(e)}).catch(function(t){return e(t)})}).then(function(t){e("setNotebooks",{notebooks:t.data})})},addNotebook:function(t,e){var n=t.commit;return function(t){var e=t.title;return Object(g.a)(T.add,"POST",{title:e})}({title:e.title}).then(function(t){n("addNotebook",{notebook:t.data})})},updateNotebook:function(t,e){var n=t.commit;return function(t){var e=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{title:""}).title,n=void 0===e?"":e;return Object(g.a)(T.update.replace(":id",t),"PATCH",{title:n})}(e.notebookId,{title:e.title}).then(function(){n("updateNotebook",{notebookId:e.notebookId,title:e.title})})},deleteNotebook:function(t,e){var n,o=t.commit;return(n=e.notebookId,Object(g.a)(T.delete.replace(":id",n),"DELETE")).then(function(){o("deleteNotebook",{notebookId:e.notebookId})})}}},j=n("F5VV"),w={state:{notes:null,curNoteId:null},getters:{notes:function(t){return t.notes||[]},curNote:function(t){return Array.isArray(t.notes)?t.curNoteId?t.notes.find(function(e){return e.id==t.curNoteId})||{}:t.notes[0]:{}}},mutations:{getAllNotes:function(t,e){var n=e.notes;t.notes=n},addNote:function(t,e){var n=e.note;t.notes.unshift(n)},updateNote:function(t,e){var n=e.noteId,o=e.title,r=e.content,u=t.notes.find(function(t){return t.id===n})||{};u.title=o,u.content=r},deleteNote:function(t,e){var n=e.noteId;t.notes=t.notes.filter(function(t){return t.id!=n})},setCurNote:function(t,e){t.curNoteId=e.curNoteId}},actions:{getNotes:function(t,e){var n=t.commit,o=e.notebookId;return Object(j.c)({notebookId:o}).then(function(t){n("getAllNotes",{notes:t.data})})},addNote:function(t,e){var n=t.commit,o=e.notebookId,r=e.title,u=e.content;return Object(j.a)({notebookId:o},{title:r,content:u}).then(function(t){n("addNote",{note:t.data})})},updateNote:function(t,e){var n=t.commit,o=e.noteId,r=e.title,u=e.content;return Object(j.d)({noteId:parseInt(o)},{title:r,content:u}).then(function(){n("updateNote",{noteId:parseInt(o),title:r,content:u})})},deleteNote:function(t,e){var n=t.commit,o=e.noteId;return Object(j.b)({noteId:o}).then(function(){n("deleteNote",{noteId:o})})}}},A={get:"/notes/trash",revert:"/notes/:noteId/revert",delete:"/notes/:noteId/confirm"},C={state:{trashNotes:null,curTrashNoteId:null},mutations:{setTrashNotes:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.trashNotes=e.trashNotes},addTrashNote:function(t,e){t.trashNotes.unshift(e.note)},deleteTrashNote:function(t,e){t.trashNotes=t.trashNotes.filter(function(t){return t.id!==e.noteId})},setCurTrashNote:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.curTrashNoteId=e.curTrashNoteId}},getters:{trashNotes:function(t){return t.trashNotes},curTrashNote:function(t){return t.trashNotes?t.curTrashNoteId?t.trashNotes.find(function(e){return e.id===t.curTrashNoteId})||{}:t.trashNotes[0]||{}:{}},belongTo:function(t,e,n,o){return(o.notebooks.find(function(t){return t.id===e.curTrashNote.notebookId})||{}).title||""}},actions:{getTrashNotes:function(t){var e=t.commit;return new N.a(function(t,e){Object(g.a)(A.get).then(function(e){e.data.sort(function(t,e){return t.createdAt>e.createdAt?-1:1}),t(e)}).catch(function(t){return e(t)})}).then(function(t){e("setTrashNotes",{trashNotes:t.data})})},deleteTrashNote:function(t,e){var n=t.commit,o=e.noteId;return function(t){var e=t.noteId;return Object(g.a)(A.delete.replace(":noteId",e),"DELETE")}({noteId:o}).then(function(){n("deleteTrashNote",{noteId:o}),p.Message.success("删除成功")})},revertTrashNote:function(t,e){var n=t.commit,o=e.noteId;return function(t){var e=t.noteId;return Object(g.a)(A.revert.replace(":noteId",e),"PATCH")}({noteId:o}).then(function(){n("deleteTrashNote",{noteId:o}),p.Message.info("已恢复笔记")})}}},L={state:{user:null},getters:{username:function(t){if(t.user&&t.user.username)return t.user.username},slug:function(t){if(t.user&&t.user.username)return t.user.username.charAt(0)}},mutations:{setUser:function(t,e){t.user=e.user}},actions:{login:function(t,e){var n=t.commit,o=e.username,r=e.password;return Object(a.b)({username:o,password:r}).then(function(t){console.log(t),n("setUser",{user:t.data})})},register:function(t,e){var n=t.commit,o=e.username,r=e.password;return Object(a.d)({username:o,password:r}).then(function(t){console.log(t),n("setUser",{user:t.data})})},checkLogin:function(t,e){var n=t.commit;if(t.state.user)return N.a.resolve();Object(a.a)().then(function(t){t.isLogin?n("setUser",{user:t.data}):m.push(e).then()})},logout:function(t,e){var n=t.commit;Object(a.c)().then(function(){n("setUser",{user:null}),m.push(e).then()})}}};o.default.use(s.a);var E=new s.a.Store({modules:{notebook:O,note:w,trash:C,user:L}});o.default.config.productionTip=!1,o.default.use(k.a),o.default.use(s.a),new o.default({el:"#app",router:m,store:E,components:{App:b},template:"<App/>"})},Q98j:function(t,e,n){"use strict";n.d(e,"d",function(){return i}),n.d(e,"b",function(){return c}),n.d(e,"c",function(){return d}),n.d(e,"a",function(){return l});var o=n("p+dL"),r="/auth/register",u="/auth/login",a="/auth/logout",s="/auth",i=function(t){var e=t.username,n=t.password;return Object(o.a)(r,"POST",{username:e,password:n})},c=function(t){var e=t.username,n=t.password;return Object(o.a)(u,"POST",{username:e,password:n})},d=function(){return Object(o.a)(a)},l=function(){return Object(o.a)(s)}},ZEK7:function(t,e,n){"use strict";new(n("7+uW").default)},d8CS:function(t,e){},"p+dL":function(t,e,n){"use strict";n.d(e,"a",function(){return i});var o=n("//Fk"),r=n.n(o),u=n("mtWM"),a=n.n(u),s=n("zL8q");n.n(s);function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new r.a(function(o,r){var u={url:t,method:e,validateStatus:function(t){return t>=200&&t<300||400===t}};"get"===e.toLowerCase()?u.params=n:u.data=n,a()(u).then(function(t){200===t.status?o(t.data):(s.Message.error(t.data.msg),r(t.data))}).catch(function(){s.Message.error("网络异常"),r({msg:"网络异常"})})})}a.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",a.a.defaults.baseURL="//note-server.hunger-valley.com",a.a.defaults.withCredentials=!0},tTo7:function(t,e){},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.03b0b873d9f2e7922985.js.map