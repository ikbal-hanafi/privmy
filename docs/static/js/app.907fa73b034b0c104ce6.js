webpackJsonp([1],{"9M+g":function(t,e){},CMyp:function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"d-flex",attrs:{id:"app"}},[e("b-container",{attrs:{fluid:""}},[e("router-view"),this._v(" "),e("footer",{staticClass:"m-2 mt-5 text-center text-muted footer"},[this._v("\n      © 2020, All rights reversed, made with ❤ by Maoundis\n    ")])],1)],1)},staticRenderFns:[]};var n=s("VU/8")({name:"App"},i,!1,function(t){s("CMyp")},null,null).exports,o=s("/ocq"),r=s("g32h"),l=s("Oac0"),c={name:"Home",data:function(){return{passwordmu:"",show_paswd:!1}},methods:{save_password:function(){if(this.passwordmu.length<8)this.passwordmu="";else{var t=Object(r.md5)(this.passwordmu.trim());window.localStorage.setItem("password_pin",t),window.sessionStorage.setItem("islogin",1),this.$router.push({name:"list_file"})}}},computed:{icon_state:function(){return Object(r.md5)(this.passwordmu)===l.password_pin&&(window.sessionStorage.setItem("islogin",1),window.location="#/list_file"),Object(r.md5)(this.passwordmu)===l.password_pin?"unlock":"lock"},ic_pass:function(){return this.show_paswd?"eye-fill":"eye-slash-fill"},so_pass:function(){return this.show_paswd?"text":"password"},cek_password:function(){return Object(r.md5)(this.passwordmu)===l.password_pin},islogin:function(){return""!==l.password_pin}}},d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-row",{staticClass:"my-5 justify-content-center"},[s("b-col",{attrs:{md:"6"}},[s("b-card",{staticClass:"text-center",attrs:{"bg-variant":"light"}},[t.islogin?s("div",[s("b-icon",{staticClass:"mb-4",attrs:{icon:t.icon_state,"font-scale":"5"}}),t._v(" "),s("b-input-group",[s("b-form-input",{attrs:{type:t.so_pass,placeholder:"Enter Your Password",state:t.cek_password,autocomplete:"off"},model:{value:t.passwordmu,callback:function(e){t.passwordmu=e},expression:"passwordmu"}}),t._v(" "),s("b-input-group-append",[s("b-button",{attrs:{variant:"outline-dark"},on:{click:function(e){t.show_paswd=!t.show_paswd}}},[s("b-icon",{attrs:{icon:t.ic_pass}})],1)],1)],1)],1):s("div",[s("p",{staticClass:"text-muted"},[t._v("kamu belum login, silahkan masukkan password baru yang terdiri dari 8 karakter")]),t._v(" "),s("b-input-group",{staticClass:"mb-3"},[s("b-form-input",{attrs:{type:t.so_pass,placeholder:"Enter New Password",autocomplete:"off"},model:{value:t.passwordmu,callback:function(e){t.passwordmu=e},expression:"passwordmu"}}),t._v(" "),s("b-input-group-append",[s("b-button",{attrs:{variant:"outline-dark"},on:{click:function(e){t.show_paswd=!t.show_paswd}}},[s("b-icon",{attrs:{icon:t.ic_pass}})],1)],1)],1),t._v(" "),s("b-button",{attrs:{variant:"dark"},on:{click:t.save_password}},[t._v("save password")])],1)])],1)],1)},staticRenderFns:[]},u=s("VU/8")(c,d,!1,null,null,null).exports,p=s("mvHQ"),m=s.n(p),f=s("//Fk"),w=s.n(f),_=s("BO1k"),v=s.n(_),b=s("Scsl"),g=s.n(b);function h(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=[];if(null!==window.localStorage.getItem("list_file")){var s=!0,a=!1,i=void 0;try{for(var n,o=v()(JSON.parse(window.localStorage.getItem("list_file")));!(s=(n=o.next()).done);s=!0){var r=n.value;if(r.includes(t))try{e.push(JSON.parse(atob(window.localStorage.getItem(r).replace("____"+l.password_pin,""))))}catch(t){window.localStorage.removeItem(r),window.localStorage.setItem("list_file",m()(JSON.parse(window.localStorage.getItem("list_file")).slice(r)))}}}catch(t){a=!0,i=t}finally{try{!s&&o.return&&o.return()}finally{if(a)throw i}}}return e}1!==parseInt(window.sessionStorage.getItem("islogin"))&&"#/list_file"===window.location.hash&&(window.location.hash="#/");var k={name:"ListFile",data:function(){return{filter:"",deskripsi:"tidak ada deskripsi",dfiles:h(this.filter||"")}},methods:{tambah_file:function(){document.querySelector("input[type=file].d-none").click()},save_filex:function(t){var e,s,a=this;(e=t.target.files[0],s=this.deskripsi,new w.a(function(t){var a=new FileReader;a.onload=function(a){var i=null===(i=e.name.match(new RegExp("(?<=.)(w+)")))?"":i[0],n=JSON.parse(window.localStorage.getItem("list_file")||"[]");n.includes(e.name)||n.push(e.name),window.localStorage.setItem("list_file",m()(n)),window.localStorage.setItem(e.name,btoa(m()({nam:e.name,uku:g()(e.size),ext:i,con:a.target.result,mod:(new Date).toDateString(),des:s}))+"____"+l.password_pin),t(!0)},a.readAsDataURL(e)})).then(function(t){a.dfiles=h(a.filter)})},hapus_file:function(t){window.localStorage.removeItem(t),window.localStorage.setItem("list_file",m()(JSON.parse(window.localStorage.getItem("list_file")).slice(t))),this.dfiles=h(this.filter)},leaveya:function(){window.sessionStorage.removeItem("islogin"),this.$router.push({name:"home"})}},watch:{filter:function(t){this.dfiles=h(t)}}},x={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-row",{staticClass:"my-5 justify-content-enter"},[s("b-col",{staticClass:"align-self-center",attrs:{md:"10"}},[s("b-input-group",{staticClass:"mb-3"},[s("b-input-group-prepend",[s("b-input-group-text",[s("b-icon-search")],1)],1),t._v(" "),s("b-form-input",{attrs:{type:"text",placeholder:"search .."},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})],1),t._v(" "),s("b-card",{staticClass:"mb-5"},[t.dfiles.length?s("div",{staticClass:"mb-5"},[t._l(t.dfiles,function(e,a){return s("b-list-group",{key:e.nam,staticClass:"mb-2"},[s("b-list-group-item",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"des"+a,expression:"'des'+index"}],staticClass:"d-flex justify-content-between align-items-center",attrs:{button:""}},[t._v("\n            "+t._s(e.nam)+"\n            \n            "),s("div",{staticClass:"float-right"},[s("b-link",{staticClass:"text-danger",on:{click:function(s){return t.hapus_file(e.nam)}}},[s("b-icon",{attrs:{icon:"trash-fill"}})],1),t._v(" "),s("b-link",{attrs:{href:e.con,download:e.nam}},[s("b-icon",{attrs:{icon:"file-arrow-down-fill"}})],1)],1)]),t._v(" "),s("b-collapse",{staticClass:"mt-2",attrs:{id:"des"+a}},[s("b-card",[s("div",{staticClass:"d-flex align-items-center"},[t._v("\n                size"),s("b-badge",{staticClass:"ml-2 float-right",attrs:{variant:"dark"}},[t._v(t._s(e.uku))])],1),t._v(" "),s("div",{staticClass:"d-flex align-items-center"},[t._v("\n                description"),s("b-badge",{staticClass:"ml-2 float-right",attrs:{variant:"dark"}},[s("pre",[t._v(t._s(e.des))])])],1),t._v(" "),s("div",{staticClass:"d-flex align-items-center"},[t._v("\n                added on"),s("b-badge",{staticClass:"ml-2 float-right",attrs:{variant:"dark"}},[t._v(t._s(e.mod))])],1)])],1)],1)}),t._v(" "),s("small",{staticClass:"float-right mt-1 text-muted"},[t._v("total: "+t._s(t.dfiles.length))])],2):s("div",[s("small",{staticClass:"text-muted"},[t._v("empty files")])]),t._v(" "),s("input",{staticClass:"d-none",attrs:{type:"file"},on:{change:t.save_filex}}),t._v(" "),s("b-input-group",{staticClass:"mt-1"},[s("b-form-input",{attrs:{type:"text",placeholder:"deskripsi .."},model:{value:t.deskripsi,callback:function(e){t.deskripsi=e},expression:"deskripsi"}}),t._v(" "),s("b-input-group-append",[s("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{variant:"dark",title:"add file"},on:{click:t.tambah_file}},[s("b-icon",{attrs:{icon:"plus"}})],1)],1)],1)],1),t._v(" "),s("b-button",{attrs:{variant:"danger"},on:{click:t.leaveya}},[t._v("leave")])],1)],1)},staticRenderFns:[]},C=s("VU/8")(k,x,!1,null,null,null).exports;a.default.use(o.a);var y=new o.a({routes:[{path:"/",name:"home",component:u},{path:"/list_file",name:"list_file",component:C}]}),S=s("Tqaz");s("Jmt5"),s("9M+g");a.default.config.productionTip=!1,a.default.use(S.a),a.default.use(S.b),new a.default({el:"#app",router:y,components:{App:n},template:"<App/>"})},Oac0:function(t,e){var s=window.localStorage.getItem("password_pin");t.exports={password_pin:s||""}}},["NHnr"]);
//# sourceMappingURL=app.907fa73b034b0c104ce6.js.map