(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{iHnh:function(e,a,r){"use strict";r.r(a);r("IzEo");var t=r("bx4M"),l=(r("+L6B"),r("2/Rp")),o=(r("7Kak"),r("9yH6")),n=(r("giR+"),r("fyUT")),m=(r("5Dmo"),r("3S7+")),c=r("0Owb"),i=r("tJVT"),s=(r("5NDa"),r("5rEg")),d=(r("iQDF"),r("+eQT")),f=(r("OaEy"),r("2fM7")),b=(r("y8nQ"),r("Vl3Y")),p=r("+YFz"),E=r("9kvl"),u=r("q1tI"),g=r.n(u),h=r("Hx5s"),y=r("xZ1R"),O=r.n(y),j=b["a"].Item,v=f["a"].Option,w=d["a"].RangePicker,F=s["a"].TextArea,x=function(e){var a=e.submitting,r=b["a"].useForm(),d=Object(i["a"])(r,1),u=d[0],y=g.a.useState(!1),x=Object(i["a"])(y,2),q=x[0],R=x[1],T={labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:12},md:{span:10}}},k={wrapperCol:{xs:{span:24,offset:0},sm:{span:10,offset:7}}},I=function(a){var r=e.dispatch;r({type:"formAndbasicForm/submitRegularForm",payload:a})},C=function(e){console.log("Failed:",e)},H=function(e){var a=e.publicType;a&&R("2"===a)};return g.a.createElement(h["c"],{content:g.a.createElement(E["a"],{id:"formandbasic-form.basic.description"})},g.a.createElement(t["a"],{bordered:!1},g.a.createElement(b["a"],{hideRequiredMark:!0,style:{marginTop:8},form:u,name:"basic",initialValues:{public:"1"},onFinish:I,onFinishFailed:C,onValuesChange:H},g.a.createElement(j,Object(c["a"])({},T,{label:g.a.createElement(E["a"],{id:"formandbasic-form.title.label"}),name:"title",rules:[{required:!0,message:Object(E["c"])({id:"formandbasic-form.title.required"})}]}),g.a.createElement(s["a"],{placeholder:Object(E["c"])({id:"formandbasic-form.title.placeholder"})})),g.a.createElement(j,Object(c["a"])({},T,{label:g.a.createElement(E["a"],{id:"formandbasic-form.date.label"}),name:"date",rules:[{required:!0,message:Object(E["c"])({id:"formandbasic-form.date.required"})}]}),g.a.createElement(w,{style:{width:"100%"},placeholder:[Object(E["c"])({id:"formandbasic-form.placeholder.start"}),Object(E["c"])({id:"formandbasic-form.placeholder.end"})]})),g.a.createElement(j,Object(c["a"])({},T,{label:g.a.createElement(E["a"],{id:"formandbasic-form.goal.label"}),name:"goal",rules:[{required:!0,message:Object(E["c"])({id:"formandbasic-form.goal.required"})}]}),g.a.createElement(F,{style:{minHeight:32},placeholder:Object(E["c"])({id:"formandbasic-form.goal.placeholder"}),rows:4})),g.a.createElement(j,Object(c["a"])({},T,{label:g.a.createElement(E["a"],{id:"formandbasic-form.standard.label"}),name:"standard",rules:[{required:!0,message:Object(E["c"])({id:"formandbasic-form.standard.required"})}]}),g.a.createElement(F,{style:{minHeight:32},placeholder:Object(E["c"])({id:"formandbasic-form.standard.placeholder"}),rows:4})),g.a.createElement(j,Object(c["a"])({},T,{label:g.a.createElement("span",null,g.a.createElement(E["a"],{id:"formandbasic-form.client.label"}),g.a.createElement("em",{className:O.a.optional},g.a.createElement(E["a"],{id:"formandbasic-form.form.optional"}),g.a.createElement(m["a"],{title:g.a.createElement(E["a"],{id:"formandbasic-form.label.tooltip"})},g.a.createElement(p["a"],{style:{marginRight:4}})))),name:"client"}),g.a.createElement(s["a"],{placeholder:Object(E["c"])({id:"formandbasic-form.client.placeholder"})})),g.a.createElement(j,Object(c["a"])({},T,{label:g.a.createElement("span",null,g.a.createElement(E["a"],{id:"formandbasic-form.invites.label"}),g.a.createElement("em",{className:O.a.optional},g.a.createElement(E["a"],{id:"formandbasic-form.form.optional"}))),name:"invites"}),g.a.createElement(s["a"],{placeholder:Object(E["c"])({id:"formandbasic-form.invites.placeholder"})})),g.a.createElement(j,Object(c["a"])({},T,{label:g.a.createElement("span",null,g.a.createElement(E["a"],{id:"formandbasic-form.weight.label"}),g.a.createElement("em",{className:O.a.optional},g.a.createElement(E["a"],{id:"formandbasic-form.form.optional"}))),name:"weight"}),g.a.createElement(n["a"],{placeholder:Object(E["c"])({id:"formandbasic-form.weight.placeholder"}),min:0,max:100}),g.a.createElement("span",{className:"ant-form-text"},"%")),g.a.createElement(j,Object(c["a"])({},T,{label:g.a.createElement(E["a"],{id:"formandbasic-form.public.label"}),help:g.a.createElement(E["a"],{id:"formandbasic-form.label.help"}),name:"publicType"}),g.a.createElement("div",null,g.a.createElement(o["default"].Group,null,g.a.createElement(o["default"],{value:"1"},g.a.createElement(E["a"],{id:"formandbasic-form.radio.public"})),g.a.createElement(o["default"],{value:"2"},g.a.createElement(E["a"],{id:"formandbasic-form.radio.partially-public"})),g.a.createElement(o["default"],{value:"3"},g.a.createElement(E["a"],{id:"formandbasic-form.radio.private"}))),g.a.createElement(j,{style:{marginBottom:0},name:"publicUsers"},g.a.createElement(f["a"],{mode:"multiple",placeholder:Object(E["c"])({id:"formandbasic-form.publicUsers.placeholder"}),style:{margin:"8px 0",display:q?"block":"none"}},g.a.createElement(v,{value:"1"},g.a.createElement(E["a"],{id:"formandbasic-form.option.A"})),g.a.createElement(v,{value:"2"},g.a.createElement(E["a"],{id:"formandbasic-form.option.B"})),g.a.createElement(v,{value:"3"},g.a.createElement(E["a"],{id:"formandbasic-form.option.C"})))))),g.a.createElement(j,Object(c["a"])({},k,{style:{marginTop:32}}),g.a.createElement(l["a"],{type:"primary",htmlType:"submit",loading:a},g.a.createElement(E["a"],{id:"formandbasic-form.form.submit"})),g.a.createElement(l["a"],{style:{marginLeft:8}},g.a.createElement(E["a"],{id:"formandbasic-form.form.save"}))))))};a["default"]=Object(E["b"])((function(e){var a=e.loading;return{submitting:a.effects["formAndbasicForm/submitRegularForm"]}}))(x)},xZ1R:function(e,a,r){e.exports={card:"antd-pro-pages-form-basic-form-style-card",heading:"antd-pro-pages-form-basic-form-style-heading",steps:"antd-pro-pages-form-basic-form-style-steps",errorIcon:"antd-pro-pages-form-basic-form-style-errorIcon",anticon:"antd-pro-pages-form-basic-form-style-anticon",errorPopover:"antd-pro-pages-form-basic-form-style-errorPopover",errorListItem:"antd-pro-pages-form-basic-form-style-errorListItem",errorField:"antd-pro-pages-form-basic-form-style-errorField",editable:"antd-pro-pages-form-basic-form-style-editable",advancedForm:"antd-pro-pages-form-basic-form-style-advancedForm",optional:"antd-pro-pages-form-basic-form-style-optional"}}}]);