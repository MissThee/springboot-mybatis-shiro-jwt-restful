(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4cf32d7f"],{"11e9":function(t,e,r){var n=r("52a7"),a=r("4630"),i=r("6821"),o=r("6a99"),s=r("69a8"),l=r("c69a"),c=Object.getOwnPropertyDescriptor;e.f=r("9e1e")?c:function(t,e){if(t=i(t),e=o(e,!0),l)try{return c(t,e)}catch(r){}if(s(t,e))return a(!n.f.call(t,e),t[e])}},3846:function(t,e,r){r("9e1e")&&"g"!=/./g.flags&&r("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:r("0bfb")})},"3f48":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-form",{staticClass:"form-top reduce-height-element",attrs:{inline:!0}},[r("el-form-item",[r("el-button",{staticClass:"custom-button-in-toolbar",attrs:{type:"primary",size:"small",plain:"",icon:"el-icon-circle-plus-outline"},on:{click:t.prepareAdd}},[t._v("增加")])],1)],1),r("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"","header-cell-class-name":"custom-header-cell",height:t.tableAutoHeight,stripe:""}},[r("el-table-column",{attrs:{label:"序号",align:"center",width:"70"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",[t._v(t._s(e.$index+(t.searchForm.pageNum-1)*t.searchForm.pageSize+1)+" ")])]}}])}),r("el-table-column",{attrs:{prop:"username",align:"center",width:"150",label:"用户名",sortable:""}}),r("el-table-column",{attrs:{prop:"nickname",align:"center",width:"150",label:"昵称",sortable:""}}),r("el-table-column",{attrs:{prop:"unitName",align:"center","min-width":"120",label:"所属组织机构名称",sortable:""}}),r("el-table-column",{attrs:{prop:"roleList",align:"left","min-width":"200",label:"账号角色",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.roleList,(function(e){return r("span",[r("el-tag",{staticStyle:{"margin-left":"2px","margin-top":"2px"},attrs:{type:e.isEnable?"primary":"danger",size:"mini"}},[t._v(t._s(e.name))])],1)}))}}])}),r("el-table-column",{attrs:{prop:"isEnable",align:"center",width:"80",label:"状态",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-tag",{staticStyle:{"margin-left":"2px"},attrs:{type:e.row.isEnable?"primary":"danger",size:"mini"}},[t._v(" "+t._s(!0===e.row.isEnable?"可用":"停用"))])]}}])}),r("el-table-column",{attrs:{prop:"isAdmin",align:"center",width:"80",label:"管理员",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-tag",{staticStyle:{"margin-left":"2px"},attrs:{type:e.row.isAdmin?"primary":"info",size:"mini"}},[t._v(" "+t._s(!0===e.row.isAdmin?"管理员":"用户"))])]}}])}),r("el-table-column",{attrs:{fixed:"right",width:"220",align:"center",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button",{staticClass:"custom-button-in-table",attrs:{type:"primary",size:"mini",plain:"",icon:"el-icon-edit"},on:{click:function(r){return t.prepareUpdate(e.$index,e.row)}}},[t._v("修改\n        ")]),r("el-button",{staticClass:"custom-button-in-table",attrs:{type:"danger",size:"mini",plain:"",icon:"el-icon-delete"},on:{click:function(r){return t.userDelete(e.$index,e.row)}}},[t._v("删除\n        ")]),r("el-button",{staticClass:"custom-button-in-table",attrs:{type:"warning",size:"mini",plain:"",icon:"el-icon-refresh"},on:{click:function(r){return t.resetPassword(e.$index,e.row)}}},[t._v("重置密码\n        ")])]}}])})],1),r("el-pagination",{ref:"pagination",staticClass:"reduce-height-element",staticStyle:{"text-align":"center","box-sizing":"border-box"},attrs:{"current-page":t.searchForm.pageNum,"page-size":t.searchForm.pageSize,"page-sizes":[10,20,30,40,50,100,200,300,400,500],layout:"total, sizes, prev, pager, next, jumper",total:t.totalNumber},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){return t.$set(t.searchForm,"pageNum",e)},"update:current-page":function(e){return t.$set(t.searchForm,"pageNum",e)}}}),r("el-dialog",{attrs:{"close-on-click-modal":!1,title:(t.isCreate?"增加":"修改")+"用户",width:"600px",visible:t.isShowAddOrUpdateDialog},on:{"update:visible":function(e){t.isShowAddOrUpdateDialog=e}}},[r("el-form",{ref:"addOrUpdateForm",attrs:{model:t.form,"label-position":"right","label-width":"80px"}},[r("el-form-item",{attrs:{label:"昵称:"}},[r("el-input",{model:{value:t.form.nickname,callback:function(e){t.$set(t.form,"nickname",e)},expression:"form.nickname"}})],1),r("el-form-item",{attrs:{label:"用户名:"}},[r("el-input",{model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}})],1),t.isShowPasswordEditor?r("el-form-item",{attrs:{label:"密码:"}},[r("el-input",{model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1):t._e(),r("el-form-item",{attrs:{label:"组织机构:"}},[r("el-cascader",{attrs:{options:t.unitTreeData,value:t.form.unitId,props:t.treeProps,"show-all-levels":!1,clearable:""},on:{change:t.selectUnit}})],1),r("el-form-item",{attrs:{label:"账户状态:"}},[r("el-switch",{attrs:{"active-text":"可用","inactive-text":"停用"},model:{value:t.form.isEnable,callback:function(e){t.$set(t.form,"isEnable",e)},expression:"form.isEnable"}},[t._v("\n          >\n        ")])],1),r("el-form-item",{attrs:{label:"管理员:"}},[r("el-switch",{attrs:{"active-text":"是","inactive-text":"否"},model:{value:t.form.isAdmin,callback:function(e){t.$set(t.form,"isAdmin",e)},expression:"form.isAdmin"}},[t._v("\n          >\n        ")])],1),r("el-form-item",{attrs:{label:"角色:"}},[r("el-checkbox-group",{model:{value:t.form.roleIdList,callback:function(e){t.$set(t.form,"roleIdList",e)},expression:"form.roleIdList"}},t._l(t.roleData,(function(e){return r("el-checkbox",{key:e.id,attrs:{label:e.id}},[t._v("\n            "+t._s(e.name)+"\n          ")])})),1)],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){t.isShowAddOrUpdateDialog=!1}}},[t._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:t.commitAddOrUpdate}},[t._v("确 定")])],1)],1)],1)},a=[],i=r("b775"),o={getUserList:function(t){return Object(i["a"])({method:"post",url:"/user/all",data:t})},getUserOne:function(t){return Object(i["a"])({method:"post",url:"/user",data:t})},addUser:function(t){return Object(i["a"])({method:"put",url:"/user",data:t})},updateUser:function(t){return Object(i["a"])({method:"patch",url:"/user",data:t})},deleteUser:function(t){return Object(i["a"])({method:"delete",url:"/user",data:t})},resetPassword:function(t){return Object(i["a"])({method:"patch",url:"/user/password/default",data:t})}},s=r("7c6d"),l=r("64bd"),c=r("9873");r("6b54");function u(t){return null===t||void 0===t?null:"[object Array]"===Object.prototype.toString.call(t)?t.length>0?t[t.length-1]:null:t}var d=r("d6e5"),f={mixins:[d["a"]],name:"User",data:function(){return{treeProps:{checkStrictly:!0,value:"id",label:"name",children:"children"},isCreate:!0,tableData:[],totalNumber:0,unitTreeData:[],isShowAddOrUpdateDialog:!1,isShowPasswordEditor:!1,form:{},formEmpty:{isEnable:!0,isAdmin:!1,nickname:"",password:"",roleIdList:[],unitId:[],username:""},searchForm:{pageNum:1,pageSize:100,isDelete:!1,orderBy:{}},roleData:[]}},created:function(){var t=this;this.form=JSON.parse(JSON.stringify(this.formEmpty)),l["a"].getUnitTree({isDelete:!1,orderBy:{name:!0},rootId:0}).then((function(e){var r=e.data;t.unitTreeData=r.data.unitTree})),this.fetchData(),s["a"].getRoleList({isDelete:this.isDelete,orderBy:{name:!0}}).then((function(e){var r=e.data;t.roleData=r.data.roleList}))},methods:{selectUnit:function(t){this.form.unitId=u(t)},fetchData:function(){var t=this;o.getUserList(this.searchForm).then((function(e){var r=e.data;t.tableData=r.data.userList,t.totalNumber=r.data.total}))},commitAddOrUpdate:function(){var t=this;this.isCreate?this.$checkNull(this.form)?o.addUser(this.form).then((function(e){var r=e.data;Object(c["a"])(r),r.result&&(t.isShowAddOrUpdateDialog=!1,t.fetchData())})):this.$message.error("有未填写的信息"):o.updateUser(this.form).then((function(e){var r=e.data;Object(c["a"])(r),r.result&&(t.isShowAddOrUpdateDialog=!1,t.fetchData())}))},prepareAdd:function(){this.form=JSON.parse(JSON.stringify(this.formEmpty)),this.isCreate=!0,this.isShowPasswordEditor=!0,this.isShowAddOrUpdateDialog=!0},prepareUpdate:function(t,e){var r=this;this.isCreate=!1,this.isShowAddOrUpdateDialog=!0,this.isShowPasswordEditor=!1,o.getUserOne({id:e.id}).then((function(t){var e=t.data;r.form=e.data.user}))},userDelete:function(t,e){this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){o.deleteUser({id:e.id}).then((function(t){var e=t.data;Object(c["a"])(e)}))}))},resetPassword:function(t,e){this.$confirm("此操作将重置此用户密码, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){o.resetPassword({id:e.id}).then((function(t){var e=t.data;Object(c["a"])(e)}))}))},handleSizeChange:function(t){this.searchForm.pageSize=t,this.fetchData()},handleCurrentChange:function(t){this.searchForm.pageNum=t,this.fetchData()}}},m=f,p=r("2877"),h=Object(p["a"])(m,n,a,!1,null,"42726298",null);e["default"]=h.exports},"456d":function(t,e,r){var n=r("4bf8"),a=r("0d58");r("5eda")("keys",(function(){return function(t){return a(n(t))}}))},"5eda":function(t,e,r){var n=r("5ca1"),a=r("8378"),i=r("79e5");t.exports=function(t,e){var r=(a.Object||{})[t]||Object[t],o={};o[t]=e(r),n(n.S+n.F*i((function(){r(1)})),"Object",o)}},"64bd":function(t,e,r){"use strict";var n=r("b775");e["a"]={getUnitTree:function(t){return Object(n["a"])({method:"post",url:"/unit/tree",data:t})},addUnit:function(t){return Object(n["a"])({method:"put",url:"/unit",data:t})},updateUnit:function(t){return Object(n["a"])({method:"patch",url:"/unit",data:t})},deleteUnit:function(t){return Object(n["a"])({method:"delete",url:"/unit",data:t})}}},"6b54":function(t,e,r){"use strict";r("3846");var n=r("cb7c"),a=r("0bfb"),i=r("9e1e"),o="toString",s=/./[o],l=function(t){r("2aba")(RegExp.prototype,o,t,!0)};r("79e5")((function(){return"/a/b"!=s.call({source:"a",flags:"b"})}))?l((function(){var t=n(this);return"/".concat(t.source,"/","flags"in t?t.flags:!i&&t instanceof RegExp?a.call(t):void 0)})):s.name!=o&&l((function(){return s.call(this)}))},"7c6d":function(t,e,r){"use strict";var n=r("b775");e["a"]={getRoleList:function(t){return Object(n["a"])({method:"post",url:"/role/all",data:t})},getRoleOne:function(t){return Object(n["a"])({method:"post",url:"/role",data:t})},addRole:function(t){return Object(n["a"])({method:"put",url:"/role",data:t})},updateRole:function(t){return Object(n["a"])({method:"patch",url:"/role",data:t})},deleteRole:function(t){return Object(n["a"])({method:"delete",url:"/role",data:t})}}},"8e6e":function(t,e,r){var n=r("5ca1"),a=r("990b"),i=r("6821"),o=r("11e9"),s=r("f1ae");n(n.S,"Object",{getOwnPropertyDescriptors:function(t){var e,r,n=i(t),l=o.f,c=a(n),u={},d=0;while(c.length>d)r=l(n,e=c[d++]),void 0!==r&&s(u,e,r);return u}})},9093:function(t,e,r){var n=r("ce10"),a=r("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,a)}},9873:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r("5c96");function a(t){var e=t.result,r=t.msg;Object(n["Notification"])({customClass:"custom-message-box-z-index",title:"操作"+(e?"成功":"失败"),message:e?null:r,type:e?"success":"error"})}},"990b":function(t,e,r){var n=r("9093"),a=r("2621"),i=r("cb7c"),o=r("7726").Reflect;t.exports=o&&o.ownKeys||function(t){var e=n.f(i(t)),r=a.f;return r?e.concat(r(t)):e}},ac6a:function(t,e,r){for(var n=r("cadf"),a=r("0d58"),i=r("2aba"),o=r("7726"),s=r("32e9"),l=r("84f2"),c=r("2b4c"),u=c("iterator"),d=c("toStringTag"),f=l.Array,m={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=a(m),h=0;h<p.length;h++){var b,g=p[h],v=m[g],O=o[g],w=O&&O.prototype;if(w&&(w[u]||s(w,u,f),w[d]||s(w,d,g),l[g]=f,v))for(b in n)w[b]||i(w,b,n[b],!0)}},d6e5:function(t,e,r){"use strict";r("8e6e"),r("ac6a"),r("456d");var n=r("bd86"),a=r("2f62");function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(r,!0).forEach((function(e){Object(n["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var s={data:function(){return{tableAutoHeight:0}},created:function(){this.setTableHeight(this.contentHeight)},watch:{contentHeight:function(t){this.setTableHeight(t)},contentWidth:function(){this.setTableHeight(this.contentHeight)}},methods:{setTableHeight:function(t){var e=this;this.$nextTick((function(){for(var r=0,n=document.getElementsByClassName("reduce-height-element"),a=0;a<n.length;a++)r+=n[a].offsetHeight;e.tableAutoHeight=t-r}))}},computed:o({},Object(a["b"])({contentHeight:"getContentHeight",contentWidth:"getContentWidth"}))};e["a"]=s},f1ae:function(t,e,r){"use strict";var n=r("86cc"),a=r("4630");t.exports=function(t,e,r){e in t?n.f(t,e,a(0,r)):t[e]=r}}}]);