var H=Object.defineProperty,J=Object.defineProperties;var Q=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var w=(e,a,o)=>a in e?H(e,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[a]=o,y=(e,a)=>{for(var o in a||(a={}))X.call(a,o)&&w(e,o,a[o]);if(F)for(var o of F(a))Y.call(a,o)&&w(e,o,a[o]);return e},A=(e,a)=>J(e,Q(a));import{z as S,A as v,f as $,ae as Z,M as T,y as U,d as z,o as b,c as m,a as I,n as d,S as g,af as C,G,F as x,I as M,t as j,g as B,V as _,W as ee,a6 as ae,ad as le,P as ne}from"./index.5ad0d671.js";import{f as oe,a as se,U as p,b as V,d as O}from"./index.2b7be752.js";import{u as L,_ as D,w as ie,e as P}from"./base.8a0ff4f8.js";import{i as K}from"./validator.684a5b79.js";const te={modelValue:{type:[Boolean,Number,String],default:()=>{}},label:{type:[String,Boolean,Number,Object]},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},tabindex:[String,Number],size:String},c=()=>{const e=S(oe,{}),a=S(se,{}),o=S("CheckboxGroup",{}),i=v(()=>o&&(o==null?void 0:o.name)==="ElCheckboxGroup"),r=v(()=>a.size);return{isGroup:i,checkboxGroup:o,elForm:e,elFormItemSize:r,elFormItem:a}},re=e=>{const a=$(!1),{emit:o}=U(),{isGroup:i,checkboxGroup:r}=c(),s=$(!1);return{model:v({get(){var t,n;return i.value?(t=r.modelValue)==null?void 0:t.value:(n=e.modelValue)!=null?n:a.value},set(t){var n;i.value&&Array.isArray(t)?(s.value=r.max!==void 0&&t.length>r.max.value,s.value===!1&&((n=r==null?void 0:r.changeEvent)==null||n.call(r,t))):(o(p,t),a.value=t)}}),isLimitExceeded:s}},ue=(e,{model:a})=>{const{isGroup:o,checkboxGroup:i}=c(),r=$(!1),s=V(i==null?void 0:i.checkboxGroupSize,{prop:!0}),l=v(()=>{const n=a.value;return Z(n)==="[object Boolean]"?n:Array.isArray(n)?n.includes(e.label):n!=null?n===e.trueLabel:!!n}),t=V(v(()=>{var n;return o.value?(n=i==null?void 0:i.checkboxGroupSize)==null?void 0:n.value:void 0}));return{isChecked:l,focus:r,size:s,checkboxSize:t}},de=(e,{model:a,isChecked:o})=>{const{elForm:i,isGroup:r,checkboxGroup:s}=c(),l=v(()=>{var n,u;const f=(n=s.max)==null?void 0:n.value,h=(u=s.min)==null?void 0:u.value;return!!(f||h)&&a.value.length>=f&&!o.value||a.value.length<=h&&o.value});return{isDisabled:v(()=>{var n,u;const f=e.disabled||i.disabled;return(u=r.value?((n=s.disabled)==null?void 0:n.value)||f||l.value:e.disabled||i.disabled)!=null?u:!1}),isLimitDisabled:l}},be=(e,{model:a})=>{function o(){Array.isArray(a.value)&&!a.value.includes(e.label)?a.value.push(e.label):a.value=e.trueLabel||!0}e.checked&&o()},me=(e,{isLimitExceeded:a})=>{const{elFormItem:o}=c(),{emit:i}=U();function r(s){var l,t;if(a.value)return;const u=s.target.checked?(l=e.trueLabel)!=null?l:!0:(t=e.falseLabel)!=null?t:!1;i("change",u,s)}return T(()=>e.modelValue,()=>{var s;(s=o.validate)==null||s.call(o,"change").catch(l=>O())}),{handleChange:r}},W=e=>{const{model:a,isLimitExceeded:o}=re(e),{focus:i,size:r,isChecked:s,checkboxSize:l}=ue(e,{model:a}),{isDisabled:t}=de(e,{model:a,isChecked:s}),{handleChange:n}=me(e,{isLimitExceeded:o});return be(e,{model:a}),{isChecked:s,isDisabled:t,checkboxSize:l,model:a,handleChange:n,focus:i,size:r}},ve=z({name:"ElCheckbox",props:{modelValue:{type:[Number,String,Boolean],default:()=>{}},label:{type:[String,Boolean,Number,Object]},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:{type:String,validator:K},tabindex:[String,Number]},emits:[p,"change"],setup(e){const a=L("checkbox");return y({ns:a},W(e))}}),fe=["id","aria-controls"],ce=["tabindex","role","aria-checked"],he=["aria-hidden","name","tabindex","disabled","true-value","false-value"],pe=["aria-hidden","disabled","value","name","tabindex"];function ke(e,a,o,i,r,s){return b(),m("label",{id:e.id,class:d([e.ns.b(),e.ns.m(e.checkboxSize),e.ns.is("disabled",e.isDisabled),e.ns.is("bordered",e.border),e.ns.is("checked",e.isChecked)]),"aria-controls":e.indeterminate?e.controls:null},[I("span",{class:d([e.ns.e("input"),e.ns.is("disabled",e.isDisabled),e.ns.is("checked",e.isChecked),e.ns.is("indeterminate",e.indeterminate),e.ns.is("focus",e.focus)]),tabindex:e.indeterminate?0:void 0,role:e.indeterminate?"checkbox":void 0,"aria-checked":e.indeterminate?"mixed":!1},[I("span",{class:d(e.ns.e("inner"))},null,2),e.trueLabel||e.falseLabel?g((b(),m("input",{key:0,"onUpdate:modelValue":a[0]||(a[0]=l=>e.model=l),class:d(e.ns.e("original")),type:"checkbox","aria-hidden":e.indeterminate?"true":"false",name:e.name,tabindex:e.tabindex,disabled:e.isDisabled,"true-value":e.trueLabel,"false-value":e.falseLabel,onChange:a[1]||(a[1]=(...l)=>e.handleChange&&e.handleChange(...l)),onFocus:a[2]||(a[2]=l=>e.focus=!0),onBlur:a[3]||(a[3]=l=>e.focus=!1)},null,42,he)),[[C,e.model]]):g((b(),m("input",{key:1,"onUpdate:modelValue":a[4]||(a[4]=l=>e.model=l),class:d(e.ns.e("original")),type:"checkbox","aria-hidden":e.indeterminate?"true":"false",disabled:e.isDisabled,value:e.label,name:e.name,tabindex:e.tabindex,onChange:a[5]||(a[5]=(...l)=>e.handleChange&&e.handleChange(...l)),onFocus:a[6]||(a[6]=l=>e.focus=!0),onBlur:a[7]||(a[7]=l=>e.focus=!1)},null,42,pe)),[[C,e.model]])],10,ce),e.$slots.default||e.label?(b(),m("span",{key:0,class:d(e.ns.e("label"))},[G(e.$slots,"default"),e.$slots.default?B("v-if",!0):(b(),m(x,{key:0},[M(j(e.label),1)],2112))],2)):B("v-if",!0)],10,fe)}var ge=D(ve,[["render",ke],["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);const Ce=z({name:"ElCheckboxButton",props:te,emits:[p,"change"],setup(e){const{focus:a,isChecked:o,isDisabled:i,size:r,model:s,handleChange:l}=W(e),{checkboxGroup:t}=c(),n=L("checkbox"),u=v(()=>{var f,h,N,E;const k=(h=(f=t==null?void 0:t.fill)==null?void 0:f.value)!=null?h:"";return{backgroundColor:k,borderColor:k,color:(E=(N=t==null?void 0:t.textColor)==null?void 0:N.value)!=null?E:"",boxShadow:k?`-1px 0 0 0 ${k}`:null}});return{focus:a,isChecked:o,isDisabled:i,model:s,handleChange:l,activeStyle:u,size:r,ns:n}}}),ye=["aria-checked","aria-disabled"],Se=["name","tabindex","disabled","true-value","false-value"],$e=["name","tabindex","disabled","value"];function Be(e,a,o,i,r,s){return b(),m("label",{class:d([e.ns.b("button"),e.ns.bm("button",e.size),e.ns.is("disabled",e.isDisabled),e.ns.is("checked",e.isChecked),e.ns.is("focus",e.focus)]),role:"checkbox","aria-checked":e.isChecked,"aria-disabled":e.isDisabled},[e.trueLabel||e.falseLabel?g((b(),m("input",{key:0,"onUpdate:modelValue":a[0]||(a[0]=l=>e.model=l),class:d(e.ns.be("button","original")),type:"checkbox",name:e.name,tabindex:e.tabindex,disabled:e.isDisabled,"true-value":e.trueLabel,"false-value":e.falseLabel,onChange:a[1]||(a[1]=(...l)=>e.handleChange&&e.handleChange(...l)),onFocus:a[2]||(a[2]=l=>e.focus=!0),onBlur:a[3]||(a[3]=l=>e.focus=!1)},null,42,Se)),[[C,e.model]]):g((b(),m("input",{key:1,"onUpdate:modelValue":a[4]||(a[4]=l=>e.model=l),class:d(e.ns.be("button","original")),type:"checkbox",name:e.name,tabindex:e.tabindex,disabled:e.isDisabled,value:e.label,onChange:a[5]||(a[5]=(...l)=>e.handleChange&&e.handleChange(...l)),onFocus:a[6]||(a[6]=l=>e.focus=!0),onBlur:a[7]||(a[7]=l=>e.focus=!1)},null,42,$e)),[[C,e.model]]),e.$slots.default||e.label?(b(),m("span",{key:2,class:d(e.ns.be("button","inner")),style:_(e.isChecked?e.activeStyle:null)},[G(e.$slots,"default",{},()=>[M(j(e.label),1)])],6)):B("v-if",!0)],10,ye)}var R=D(Ce,[["render",Be],["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);const Ve=z({name:"ElCheckboxGroup",props:{modelValue:{type:Array,default:()=>[]},disabled:Boolean,min:{type:Number,default:void 0},max:{type:Number,default:void 0},size:{type:String,validator:K},fill:{type:String,default:void 0},textColor:{type:String,default:void 0},tag:{type:String,default:"div"}},emits:[p,"change"],setup(e,{emit:a,slots:o}){const{elFormItem:i}=c(),r=V(),s=L("checkbox"),l=n=>{a(p,n),ne(()=>{a("change",n)})},t=v({get(){return e.modelValue},set(n){l(n)}});return ee("CheckboxGroup",A(y({name:"ElCheckboxGroup",modelValue:t},ae(e)),{checkboxGroupSize:r,changeEvent:l})),T(()=>e.modelValue,()=>{var n;(n=i.validate)==null||n.call(i,"change").catch(u=>O())}),()=>le(e.tag,{class:s.b("group"),role:"group","aria-label":"checkbox-group"},[G(o,"default")])}});var q=D(Ve,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);const Ee=ie(ge,{CheckboxButton:R,CheckboxGroup:q});P(R);P(q);export{Ee as E};
