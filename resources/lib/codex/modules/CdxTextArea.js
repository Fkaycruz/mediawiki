"use strict";var p=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var x=(e,o)=>{var n={};for(var a in e)g.call(e,a)&&o.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&p)for(var a of p(e))o.indexOf(a)<0&&h.call(e,a)&&(n[a]=e[a]);return n};const t=require("vue"),S=require("./Icon.js"),V=require("./useSplitAttributes.js"),A=require("./useModelWrapper.js"),k=require("./useFieldData.js"),i=require("./constants.js"),B=require("./_plugin-vue_export-helper.js"),M=i.makeStringTypeValidator(i.ValidationStatusTypes),q=t.defineComponent({name:"CdxTextArea",components:{CdxIcon:S.CdxIcon},inheritAttrs:!1,props:{modelValue:{type:String,default:""},status:{type:String,default:"default",validator:M},disabled:{type:Boolean,default:!1},autosize:{type:Boolean,default:!1},startIcon:{type:[String,Object],default:void 0},endIcon:{type:[String,Object],default:void 0}},emits:["update:modelValue"],setup(e,{attrs:o,emit:n}){const a=A.useModelWrapper(t.toRef(e,"modelValue"),n),l=o.id,{computedDisabled:u,computedStatus:s,computedInputId:r}=k.useFieldData(t.toRef(e,"disabled"),t.toRef(e,"status"),l),m=t.inject(i.FieldDescriptionIdKey,void 0),f=t.computed(()=>({"cdx-text-area__textarea--has-value":!!a.value,"cdx-text-area__textarea--is-autosize":e.autosize})),v=t.computed(()=>({"cdx-text-area--status-default":s.value==="default","cdx-text-area--status-error":s.value==="error","cdx-text-area--has-start-icon":!!e.startIcon,"cdx-text-area--has-end-icon":!!e.endIcon})),{rootClasses:I,rootStyle:y,otherAttrs:_}=V.useSplitAttributes(o,v),b=t.computed(()=>{const c=_.value,{id:$}=c;return x(c,["id"])}),d=t.ref();function C(){d.value&&e.autosize&&(d.value.style.height="auto",d.value.style.height="".concat(d.value.scrollHeight,"px"))}return{rootClasses:I,rootStyle:y,wrappedModel:a,computedDisabled:u,computedInputId:r,descriptionId:m,textareaClasses:f,otherAttrsMinusId:b,textarea:d,onInput:C}}});const z=["id","aria-describedby","disabled"];function D(e,o,n,a,l,u){const s=t.resolveComponent("cdx-icon");return t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(["cdx-text-area",e.rootClasses]),style:t.normalizeStyle(e.rootStyle)},[t.withDirectives(t.createElementVNode("textarea",t.mergeProps({id:e.computedInputId,ref:"textarea"},e.otherAttrsMinusId,{"onUpdate:modelValue":o[0]||(o[0]=r=>e.wrappedModel=r),class:[e.textareaClasses,"cdx-text-area__textarea"],"aria-describedby":e.descriptionId,disabled:e.computedDisabled,onInput:o[1]||(o[1]=(...r)=>e.onInput&&e.onInput(...r))}),null,16,z),[[t.vModelText,e.wrappedModel]]),e.startIcon?(t.openBlock(),t.createBlock(s,{key:0,icon:e.startIcon,class:"cdx-text-area__icon-vue cdx-text-area__start-icon"},null,8,["icon"])):t.createCommentVNode("v-if",!0),e.endIcon?(t.openBlock(),t.createBlock(s,{key:1,icon:e.endIcon,class:"cdx-text-area__icon-vue cdx-text-area__end-icon"},null,8,["icon"])):t.createCommentVNode("v-if",!0)],6)}const T=B._export_sfc(q,[["render",D]]);module.exports=T;
