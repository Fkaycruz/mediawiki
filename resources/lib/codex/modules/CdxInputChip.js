"use strict";const e=require("vue"),d=require("./CdxButton.js"),p=require("./Icon.js"),u=require("./_plugin-vue_export-helper.js");require("./constants.js");require("./useIconOnlyButton.js");require("./useSlotContents.js");require("./useWarnOnce.js");const f=e.defineComponent({name:"CdxInputChip",components:{CdxButton:d,CdxIcon:p.CdxIcon},props:{chipAriaDescription:{type:String,required:!0},icon:{type:[String,Object],default:null},disabled:{type:Boolean,default:!1}},expose:["focus"],emits:["remove-chip","click-chip","arrow-left","arrow-right"],setup(o,{emit:n}){const i=e.ref(),c=e.computed(()=>({"cdx-input-chip--disabled":o.disabled}));function a(t){var r;switch(t.key){case"Enter":n("click-chip"),t.preventDefault(),t.stopPropagation();break;case"Escape":(r=i.value)==null||r.blur(),t.preventDefault(),t.stopPropagation();break;case"Backspace":case"Delete":n("remove-chip",t.key),t.preventDefault(),t.stopPropagation();break;case"ArrowLeft":n("arrow-left"),t.preventDefault(),t.stopPropagation();break;case"ArrowRight":n("arrow-right"),t.preventDefault(),t.stopPropagation();break}}return{rootElement:i,rootClasses:c,onKeydown:a,cdxIconClose:p.j4}},methods:{focus(){this.$refs.rootElement.focus()}}});const m=["aria-description"],h={class:"cdx-input-chip__text"};function C(o,n,i,c,a,t){const r=e.resolveComponent("cdx-icon"),l=e.resolveComponent("cdx-button");return e.openBlock(),e.createElementBlock("div",{ref:"rootElement",class:e.normalizeClass(["cdx-input-chip",o.rootClasses]),tabindex:"0",role:"option","aria-description":o.chipAriaDescription,onKeydown:n[1]||(n[1]=(...s)=>o.onKeydown&&o.onKeydown(...s)),onClick:n[2]||(n[2]=s=>o.$emit("click-chip"))},[o.icon?(e.openBlock(),e.createBlock(r,{key:0,icon:o.icon,size:"small"},null,8,["icon"])):e.createCommentVNode("v-if",!0),e.createElementVNode("span",h,[e.createCommentVNode(" @slot Chip text. "),e.renderSlot(o.$slots,"default")]),e.createVNode(l,{class:"cdx-input-chip__button",weight:"quiet",tabindex:"-1","aria-hidden":"true",disabled:o.disabled,onClick:n[0]||(n[0]=e.withModifiers(s=>o.$emit("remove-chip","button"),["stop"]))},{default:e.withCtx(()=>[e.createVNode(r,{icon:o.cdxIconClose,size:"x-small"},null,8,["icon"])]),_:1},8,["disabled"])],42,m)}const b=u._export_sfc(f,[["render",C]]);module.exports=b;
