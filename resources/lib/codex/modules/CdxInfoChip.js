"use strict";const e=require("vue"),i=require("./constants.js"),o=require("./Icon.js"),r=require("./_plugin-vue_export-helper.js"),a={error:o.z3,warning:o.m4,success:o.P7},u=e.defineComponent({name:"CdxInfoChip",components:{CdxIcon:o.CdxIcon},props:{status:{type:String,default:"notice",validator:i.statusTypeValidator},icon:{type:[String,Object],default:null}},setup(n){const t=e.computed(()=>({["cdx-info-chip__icon--".concat(n.status)]:!0})),c=e.computed(()=>n.status==="notice"?n.icon:a[n.status]);return{iconClass:t,computedIcon:c}}});const d={class:"cdx-info-chip"},l={class:"cdx-info-chip--text"};function p(n,t,c,m,f,C){const s=e.resolveComponent("cdx-icon");return e.openBlock(),e.createElementBlock("div",d,[n.computedIcon?(e.openBlock(),e.createBlock(s,{key:0,class:e.normalizeClass(["cdx-info-chip__icon",n.iconClass]),icon:n.computedIcon},null,8,["class","icon"])):e.createCommentVNode("v-if",!0),e.createElementVNode("span",l,[e.createCommentVNode(" @slot Chip content. "),e.renderSlot(n.$slots,"default")])])}const _=r._export_sfc(u,[["render",p]]);module.exports=_;
