(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{256:function(e,a,t){"use strict";t.r(a);var s={head:function(){return{title:"DataTable"}},data:function(){return{basic:{columns:[{label:"Name",field:"name"},{label:"Age",field:"age",type:"number"},{label:"Created On",field:"createdAt",type:"date",dateInputFormat:"YYYY-MM-DD",dateOutputFormat:"MMM Do YY"},{label:"Percent",field:"score",type:"percentage"}],rows:[{id:1,name:"John",age:20,createdAt:"201-10-31:9: 35 am",score:.223343},{id:2,name:"Jane",age:24,createdAt:"2011-10-31",score:.63343},{id:3,name:"Susan",age:16,createdAt:"2011-10-30",score:.01343},{id:4,name:"Chris",age:55,createdAt:"2011-10-11",score:.08343},{id:5,name:"Dan",age:40,createdAt:"2011-10-21",score:.03143},{id:6,name:"John",age:20,createdAt:"2011-10-31",score:.0243}]},filter:{columns:[{label:"Name",field:"name"},{label:"Age",field:"age",type:"number"},{label:"Created On",field:"createdAt",type:"date",dateInputFormat:"YYYY-MM-DD",dateOutputFormat:"MMM Do YY"},{label:"Status",field:"status",filterOptions:{enabled:!0,filterDropdownItems:["Approved","Waiting","Closed"]}}],rows:[{id:1,name:"John",age:20,createdAt:"201-10-31:9: 35 am",status:"Approved"},{id:2,name:"Jane",age:24,createdAt:"2011-10-31",status:"Waiting"},{id:3,name:"Susan",age:16,createdAt:"2011-10-30",status:"Closed"},{id:4,name:"Chris",age:55,createdAt:"2011-10-11",status:"Waiting"},{id:5,name:"Dan",age:40,createdAt:"2011-10-21",status:"Closed"},{id:6,name:"John",age:20,createdAt:"2011-10-31",status:"Approved"}]}}}},l=t(2),i=Object(l.a)(s,function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("h1",[e._v("DataTable")]),e._m(0),t("div",{staticClass:"grid has-space"},[t("div",{staticClass:"column is-desktop-6"},[t("AppCard",{staticClass:"is-full"},[t("template",{slot:"header"},[t("h4",{staticClass:"AppCard-title"},[e._v("Basic")])]),t("VueGoodTable",{attrs:{columns:e.basic.columns,rows:e.basic.rows,styleClass:"table"}})],2)],1),t("div",{staticClass:"column is-desktop-6"},[t("AppCard",{staticClass:"is-full"},[t("template",{slot:"header"},[t("h4",{staticClass:"AppCard-title"},[e._v("Search")])]),t("VueGoodTable",{attrs:{columns:e.basic.columns,rows:e.basic.rows,"search-options":{enabled:!0},styleClass:"table"}})],2)],1),t("div",{staticClass:"column is-desktop-6"},[t("AppCard",{staticClass:"is-full"},[t("template",{slot:"header"},[t("h4",{staticClass:"AppCard-title"},[e._v("Fixed Header")])]),t("VueGoodTable",{attrs:{columns:e.basic.columns,rows:e.basic.rows,"max-height":"200px","fixed-header":!0,styleClass:"table"}})],2)],1),t("div",{staticClass:"column is-desktop-6"},[t("AppCard",{staticClass:"is-full"},[t("template",{slot:"header"},[t("h4",{staticClass:"AppCard-title"},[e._v("Pagination")])]),t("VueGoodTable",{attrs:{columns:e.basic.columns,rows:e.basic.rows,"pagination-options":{enabled:!0,perPage:3},styleClass:"table"}})],2)],1),t("div",{staticClass:"column is-desktop-6"},[t("AppCard",{staticClass:"is-full"},[t("template",{slot:"header"},[t("h4",{staticClass:"AppCard-title"},[e._v("Column Filter")])]),t("VueGoodTable",{attrs:{columns:e.filter.columns,rows:e.filter.rows,styleClass:"table"}})],2)],1),t("div",{staticClass:"column is-desktop-6"},[t("AppCard",{staticClass:"is-full"},[t("template",{slot:"header"},[t("h4",{staticClass:"AppCard-title"},[e._v("Checkbox Table")])]),t("VueGoodTable",{attrs:{columns:e.basic.columns,rows:e.basic.rows,"select-options":{enabled:!0},styleClass:"table"}})],2)],1),t("div",{staticClass:"column is-desktop-6"},[t("AppCard",{staticClass:"is-full"},[t("template",{slot:"header"},[t("h4",{staticClass:"AppCard-title"},[e._v("Rtl")])]),t("VueGoodTable",{attrs:{columns:e.basic.columns,rows:e.basic.rows,rtl:!0,styleClass:"table"}})],2)],1)])])},[function(){var e=this.$createElement,a=this._self._c||e;return a("p",[this._v("For docs visit "),a("a",{attrs:{href:"https://xaksis.github.io/vue-good-table",target:"_blank"}},[a("code",[this._v("Vue Good Table")])])])}],!1,null,null,null);i.options.__file="datatable.vue";a.default=i.exports}}]);