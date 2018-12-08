(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{289:function(a,e,s){"use strict";s.r(e);var t={head:function(){return{title:"Validation"}},data:function(){return{}},methods:{validateForm:function(a){this.$validator.validateAll(a).then(function(a){a&&alert("Form Submitted!")})}}},i=s(2),r=Object(i.a)(t,function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",[s("h1",[a._v("Validation")]),a._m(0),s("div",{staticClass:"grid has-space"},[s("div",{staticClass:"column is-desktop-6"},[s("AppCard",{staticClass:"is-full"},[s("template",{slot:"header"},[s("h4",{staticClass:"AppCard-title"},[a._v("Basic")])]),s("form",{staticClass:"form"},[s("div",{staticClass:"field"},[s("label",{staticClass:"field-label"},[a._v("Name")]),s("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"input",class:{"is-danger":a.errors.has("Name")},attrs:{name:"Name",type:"text",placeholder:"Enter your name"}}),a.errors.has("Name")?s("span",{staticClass:"field-text is-danger"},[a._v(a._s(a.errors.first("Name")))]):a._e()]),s("div",{staticClass:"field"},[s("label",{staticClass:"field-label"},[a._v("Email")]),s("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"input",class:{"is-danger":a.errors.has("Email")},attrs:{name:"Email",type:"text",placeholder:"Enter your email"}}),a.errors.has("Email")?s("span",{staticClass:"field-text is-danger"},[a._v(a._s(a.errors.first("Email")))]):a._e()]),s("div",{staticClass:"field"},[s("label",{staticClass:"field-label"},[a._v("Url")]),s("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|url:require_protocol",expression:"'required|url:require_protocol'"}],staticClass:"input",class:{"is-danger":a.errors.has("Url")},attrs:{name:"Url",type:"text",placeholder:"Enter your Url"}}),a.errors.has("Url")?s("span",{staticClass:"field-text is-danger"},[a._v(a._s(a.errors.first("Url")))]):a._e()]),s("div",{staticClass:"field"},[s("label",{staticClass:"field-label"},[a._v("Digits")]),s("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|numeric",expression:"'required|numeric'"}],staticClass:"input",class:{"is-danger":a.errors.has("Digits")},attrs:{name:"Digits",type:"text",placeholder:"Enter your digits"}}),a.errors.has("Digits")?s("span",{staticClass:"field-text is-danger"},[a._v(a._s(a.errors.first("Digits")))]):a._e()]),s("div",{staticClass:"field"},[s("label",{staticClass:"field-label"},[a._v("Credit card")]),s("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|credit_card",expression:"'required|credit_card'"}],staticClass:"input",class:{"is-danger":a.errors.has("CreditCard")},attrs:{name:"CreditCard",type:"text",placeholder:"Enter your credit card"}}),a.errors.has("CreditCard")?s("span",{staticClass:"field-text is-danger"},[a._v(a._s(a.errors.first("CreditCard")))]):a._e()])])],2)],1),s("div",{staticClass:"column is-desktop-6"},[s("AppCard",{staticClass:"is-full"},[s("template",{slot:"header"},[s("h4",{staticClass:"AppCard-title"},[a._v("Scoped Form")])]),s("form",{staticClass:"form",attrs:{"data-vv-scope":"form-1"},on:{submit:function(e){e.preventDefault(),a.validateForm("form-1")}}},[s("div",{staticClass:"field"},[s("label",{staticClass:"field-label"},[a._v("Name")]),s("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"input",class:{"is-danger":a.errors.has("form-1.Name")},attrs:{name:"Name",type:"text",placeholder:"Enter your name"}}),a.errors.has("form-1.Name")?s("span",{staticClass:"field-text is-danger"},[a._v(a._s(a.errors.first("form-1.Name")))]):a._e()]),s("div",{staticClass:"field"},[s("label",{staticClass:"field-label"},[a._v("Email")]),s("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"input",class:{"is-danger":a.errors.has("form-1.Email")},attrs:{name:"Email",type:"text",placeholder:"Enter your email"}}),a.errors.has("form-1.Email")?s("span",{staticClass:"field-text is-danger"},[a._v(a._s(a.errors.first("form-1.Email")))]):a._e()]),s("div",{staticClass:"field"},[s("label",{staticClass:"field-label"},[a._v("URL")]),s("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|url:require_protocol",expression:"'required|url:require_protocol'"}],staticClass:"input",class:{"is-danger":a.errors.has("form-1.Url")},attrs:{name:"Url",type:"text",placeholder:"Enter your URL"}}),a.errors.has("form-1.Url")?s("span",{staticClass:"field-text is-danger"},[a._v(a._s(a.errors.first("form-1.Url")))]):a._e()]),s("div",{staticClass:"field"},[s("label",{staticClass:"field-label"},[a._v("Digits")]),s("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|numeric",expression:"'required|numeric'"}],staticClass:"input",class:{"is-danger":a.errors.has("form-1.Digits")},attrs:{name:"Digits",type:"text",placeholder:"Enter your Digits"}}),a.errors.has("form-1.Digits")?s("span",{staticClass:"field-text is-danger"},[a._v(a._s(a.errors.first("form-1.Digits")))]):a._e()]),s("div",{staticClass:"field"},[s("label",{staticClass:"field-label"},[a._v("Credit card")]),s("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|credit_card",expression:"'required|credit_card'"}],staticClass:"input",class:{"is-danger":a.errors.has("form-1.CreditCard")},attrs:{name:"CreditCard",type:"text",placeholder:"Enter your CreditCard"}}),a.errors.has("form-1.CreditCard")?s("span",{staticClass:"field-text is-danger"},[a._v(a._s(a.errors.first("form-1.CreditCard")))]):a._e()]),s("button",{staticClass:"button is-primary",attrs:{type:"submit"}},[a._v("Validate")])])],2)],1),s("div",{staticClass:"column is-desktop-6"},[s("AppCard",{staticClass:"is-full"},[s("template",{slot:"header"},[s("h4",{staticClass:"AppCard-title"},[a._v("Checkbox & Radio")])]),s("form",{staticClass:"form",attrs:{"data-vv-scope":"form-2"},on:{submit:function(e){e.preventDefault(),a.validateForm("form-2")}}},[s("div",{staticClass:"field"},[s("label",{staticClass:"field-label"},[a._v(" Radio")]),s("label",{staticClass:"radio is-inline"},[s("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|included:1,2",expression:"'required|included:1,2'"}],staticClass:"radio-input",attrs:{type:"radio",value:"1",name:"RadioGroup"}}),s("span",{staticClass:"radio-label"},[a._v("Coding")])]),s("label",{staticClass:"radio is-inline"},[s("input",{staticClass:"radio-input",attrs:{type:"radio",value:"2",name:"RadioGroup"}}),s("span",{staticClass:"radio-label"},[a._v("Music")])]),s("label",{staticClass:"radio is-inline"},[s("input",{staticClass:"radio-input",attrs:{type:"radio",value:"3",name:"RadioGroup"}}),s("span",{staticClass:"radio-label"},[a._v("Gaming")])]),a.errors.has("form-2.RadioGroup")?s("span",{staticClass:"field-text is-danger"},[a._v(a._s(a.errors.first("form-2.RadioGroup")))]):a._e()]),s("div",{staticClass:"field"},[s("label",{staticClass:"field-label"},[a._v("Checkbox")]),s("label",{staticClass:"checkbox"},[s("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"checkbox-input",attrs:{type:"checkbox",name:"Checkbox"}}),s("span",{staticClass:"checkbox-label"},[a._v("Tick me")])]),a.errors.has("form-2.Checkbox")?s("span",{staticClass:"field-text is-danger"},[a._v(a._s(a.errors.first("form-2.Checkbox")))]):a._e()]),s("button",{staticClass:"button is-primary",attrs:{type:"submit"}},[a._v("Validate")])])],2)],1)])])},[function(){var a=this.$createElement,e=this._self._c||a;return e("p",[this._v("We use "),e("a",{attrs:{href:"https://baianat.github.io/vee-validate/",target:"blank"}},[e("code",[this._v("VeeValidate")])]),this._v(" for validations")])}],!1,null,null,null);r.options.__file="validation.vue";e.default=r.exports}}]);