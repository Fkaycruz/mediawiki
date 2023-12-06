"use strict";var b=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var y=(e,n)=>{var r={};for(var o in e)E.call(e,o)&&n.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&b)for(var o of b(e))n.indexOf(o)<0&&K.call(e,o)&&(r[o]=e[o]);return r};const t=require("vue"),g=require("./Icon.js"),T=require("./CdxMenu.js"),C=require("./useGeneratedId.js"),w=require("./useModelWrapper.js"),F=require("./useFieldData.js"),W=require("./useSplitAttributes.js"),H=require("./useFloatingMenu.js"),p=require("./constants.js"),j=require("./_plugin-vue_export-helper.js");require("./CdxMenuItem.js");require("./CdxThumbnail.js");require("./CdxSearchResultTitle.js");require("./CdxProgressBar.js");require("./useWarnOnce.js");require("./useIntersectionObserver.js");const G=p.makeStringTypeValidator(p.ValidationStatusTypes),R=t.defineComponent({name:"CdxSelect",components:{CdxIcon:g.CdxIcon,CdxMenu:T},inheritAttrs:!1,props:{menuItems:{type:Array,required:!0},selected:{type:[String,Number,null],required:!0},defaultLabel:{type:String,default:""},disabled:{type:Boolean,default:!1},menuConfig:{type:Object,default:()=>({})},defaultIcon:{type:[String,Object],default:void 0},status:{type:String,default:"default",validator:G}},emits:["update:selected","load-more"],setup(e,{emit:n,attrs:r}){const o=t.ref(),i=t.ref(),v=t.inject(p.FieldDescriptionIdKey,void 0),m=C.useGeneratedId("select-menu"),u=t.ref(!1),l=r.id||C.useGeneratedId("select-handle"),{computedDisabled:c,computedStatus:h,computedInputId:q}=F.useFieldData(t.toRef(e,"disabled"),t.toRef(e,"status"),l),S=w.useModelWrapper(t.toRef(e,"selected"),n,"update:selected"),a=t.computed(()=>e.menuItems.find(d=>d.value===e.selected)),M=t.computed(()=>{var d;return a.value?(d=a.value.label)!=null?d:a.value.value:e.defaultLabel}),f=t.computed(()=>{var d;if(e.defaultIcon&&!a.value)return e.defaultIcon;if((d=a.value)!=null&&d.icon)return a.value.icon}),x=t.computed(()=>({"cdx-select-vue--enabled":!c.value,"cdx-select-vue--disabled":c.value,"cdx-select-vue--expanded":u.value,"cdx-select-vue--value-selected":!!a.value,"cdx-select-vue--no-selections":!a.value,"cdx-select-vue--has-start-icon":!!f.value,["cdx-select-vue--status-".concat(h.value)]:!0})),{rootClasses:V,rootStyle:k,otherAttrs:D}=W.useSplitAttributes(r,x),N=t.computed(()=>{const I=D.value,{id:d}=I;return y(I,["id"])}),B=t.computed(()=>{var d,s;return(s=(d=i.value)==null?void 0:d.getHighlightedMenuItem())==null?void 0:s.id});function $(){u.value=!1}function A(){var d;c.value||(u.value=!u.value,(d=o.value)==null||d.focus())}function L(d){var s;c.value||(s=i.value)==null||s.delegateKeyNavigation(d,{characterNavigation:!0})}return H.useFloatingMenu(o,i),{handle:o,menu:i,computedHandleId:q,descriptionId:v,menuId:m,modelWrapper:S,selectedMenuItem:a,highlightedId:B,expanded:u,computedDisabled:c,onBlur:$,currentLabel:M,rootClasses:V,rootStyle:k,otherAttrsMinusId:N,onClick:A,onKeydown:L,startIcon:f,cdxIconExpand:g.p3}}});const z=["aria-disabled"],O=["id","aria-controls","aria-activedescendant","aria-expanded","aria-describedby"];function P(e,n,r,o,i,v){const m=t.resolveComponent("cdx-icon"),u=t.resolveComponent("cdx-menu");return t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(["cdx-select-vue",e.rootClasses]),style:t.normalizeStyle(e.rootStyle),"aria-disabled":e.computedDisabled},[t.createElementVNode("div",t.mergeProps({id:e.computedHandleId,ref:"handle",class:"cdx-select-vue__handle"},e.otherAttrsMinusId,{tabindex:"0",role:"combobox","aria-controls":e.menuId,"aria-activedescendant":e.highlightedId,"aria-expanded":e.expanded,"aria-describedby":e.descriptionId,onClick:n[0]||(n[0]=(...l)=>e.onClick&&e.onClick(...l)),onBlur:n[1]||(n[1]=(...l)=>e.onBlur&&e.onBlur(...l)),onKeydown:n[2]||(n[2]=(...l)=>e.onKeydown&&e.onKeydown(...l))}),[t.createCommentVNode("\n				@slot Display of the current selection or default label\n				@binding {MenuItemData|undefined} selected-menu-item The currently selected menu\n				item\n				@binding {string} default-label The default label, provided via a prop\n			"),t.renderSlot(e.$slots,"label",{selectedMenuItem:e.selectedMenuItem,defaultLabel:e.defaultLabel},()=>[t.createTextVNode(t.toDisplayString(e.currentLabel),1)]),e.startIcon?(t.openBlock(),t.createBlock(m,{key:0,icon:e.startIcon,class:"cdx-select-vue__start-icon"},null,8,["icon"])):t.createCommentVNode("v-if",!0),t.createVNode(m,{icon:e.cdxIconExpand,class:"cdx-select-vue__indicator"},null,8,["icon"])],16,O),t.createVNode(u,t.mergeProps({id:e.menuId,ref:"menu",selected:e.modelWrapper,"onUpdate:selected":n[3]||(n[3]=l=>e.modelWrapper=l),expanded:e.expanded,"onUpdate:expanded":n[4]||(n[4]=l=>e.expanded=l),"menu-items":e.menuItems},e.menuConfig,{onLoadMore:n[5]||(n[5]=l=>e.$emit("load-more"))}),{default:t.withCtx(({menuItem:l})=>[t.createCommentVNode("\n					@slot Display of an individual item in the menu\n					@binding {MenuItemData} menu-item The current menu item\n				"),t.renderSlot(e.$slots,"menu-item",{menuItem:l})]),_:3},16,["id","selected","expanded","menu-items"])],14,z)}const U=j._export_sfc(R,[["render",P]]);module.exports=U;
