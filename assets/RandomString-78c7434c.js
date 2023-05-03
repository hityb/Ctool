import{u as A,i as E}from"./action-b0774d39.js";import{d as N,y as R,I as D,z as O,o as F,D as I,k as H,v as o,w as u,j as t,F as L,r as s,f as T,X as G,S as X,G as f}from"./tool-86fca7a1.js";import"./modulepreload-polyfill-3cfb730f.js";const Q=N({__name:"RandomString",async setup(q){let $,y;const b="small",h="0123456789",v="abcdefghijklmnopqrstuvwxyz",_="ABCDEFGHIJKLMNOPQRSTUVWXYZ",k="`~!@#$%^&*()-_=+[{]}|;:',<.>/?",n=A(([$,y]=R(()=>E({amount:10,length:32,outputOption:G("text"),base:`${h}${v}${_}`,result:[]})),$=await $,y(),$));let r=D({base:n.current.base,show:!1});const C=()=>{let l=`${n.current.base}`,e=[];for(let i=0,c=n.current.amount;i<c;i++){let m=l.split(""),d="";for(let V=0,S=n.current.length;V<S&&!(m.length<1);V++){let p=Math.floor(Math.random()*m.length);d+=m[p]}e.push(d)}n.current.result=e},B=O(()=>X.formObject(n.current.result));F(()=>{n.current.result.length<1&&C()}),I(()=>({amount:n.current.amount,length:n.current.length,base:n.current.base}),()=>{C()}),I(()=>n.current,l=>{l.result.length<1||n.save()},{deep:!0,immediate:!0});const g=l=>{if(l==="reset"){r.value.base=`${h}${v}${_}`;return}let e=`${r.value.base}`.split("");const i=({digital:`${h}`,lowercase:`${v}`,uppercase:`${_}`,symbol:`${k}`}[l]||"").split("");i.length>0&&(f.intersection(e,i).length>0?e=e.filter(c=>!i.includes(c)):e=[...e,...i]),r.value.base=[...new Set(e)].join("")},w=O(()=>{let l=`${r.value.base}`.split("");return{digital:f.intersection(l,h.split("")).length>0,lowercase:f.intersection(l,v.split("")).length>0,uppercase:f.intersection(l,_.split("")).length>0,symbol:f.intersection(l,k.split("")).length>0}});return(l,e)=>{const i=s("SerializeOutput"),c=s("HeightResize"),m=s("Icon"),d=s("Button"),V=s("Input"),S=s("InputNumber"),p=s("Align"),U=s("Card"),j=s("Textarea"),z=s("Bool"),M=s("Modal");return T(),H(L,null,[o(p,{direction:"vertical"},{default:u(()=>[o(c,{reduce:5,append:[".ctool-page-option"]},{default:u(({height:a})=>[o(i,{modelValue:t(n).current.outputOption,"onUpdate:modelValue":e[0]||(e[0]=x=>t(n).current.outputOption=x),allow:["json","xml","yaml","toml","properties","php_array","text"],height:a,content:t(B)},null,8,["modelValue","height","content"])]),_:1},8,["append"]),o(U,{class:"ctool-page-option"},{default:u(()=>[o(p,{horizontal:"center"},{default:u(()=>[o(V,{modelValue:t(n).current.base,"onUpdate:modelValue":e[2]||(e[2]=a=>t(n).current.base=a),width:300},{append:u(()=>[o(d,{onClick:e[1]||(e[1]=a=>{t(r).base=t(n).current.base,t(r).show=!0})},{default:u(()=>[o(m,{hover:"",name:"setting",tooltip:l.$t("main_ui_setting"),size:12},null,8,["tooltip"])]),_:1})]),_:1},8,["modelValue"]),o(S,{modelValue:t(n).current.length,"onUpdate:modelValue":e[3]||(e[3]=a=>t(n).current.length=a),width:100,label:l.$t("randomString_length")},null,8,["modelValue","label"]),o(S,{modelValue:t(n).current.amount,"onUpdate:modelValue":e[4]||(e[4]=a=>t(n).current.amount=a),width:100,label:l.$t("randomString_amount")},null,8,["modelValue","label"]),o(d,{onClick:C},{default:u(()=>[o(m,{name:"refresh"})]),_:1})]),_:1})]),_:1})]),_:1}),o(M,{title:`${l.$t("main_ui_setting")} ${l.$t("randomString_chars")}`,modelValue:t(r).show,"onUpdate:modelValue":e[11]||(e[11]=a=>t(r).show=a),"footer-type":"long",onOk:e[12]||(e[12]=a=>{t(n).current.base=t(r).base,t(r).show=!1})},{default:u(()=>[o(p,{direction:"vertical"},{default:u(()=>[o(j,{modelValue:t(r).base,"onUpdate:modelValue":e[5]||(e[5]=a=>t(r).base=a),height:300},null,8,["modelValue"]),o(p,{horizontal:"center"},{default:u(()=>[o(z,{size:b,border:"",label:l.$t("randomString_digital"),"model-value":t(w).digital,onChange:e[6]||(e[6]=a=>g("digital"))},null,8,["label","model-value"]),o(z,{size:b,border:"",label:l.$t("randomString_lowercase"),"model-value":t(w).lowercase,onChange:e[7]||(e[7]=a=>g("lowercase"))},null,8,["label","model-value"]),o(z,{size:b,border:"",label:l.$t("randomString_uppercase"),"model-value":t(w).uppercase,onChange:e[8]||(e[8]=a=>g("uppercase"))},null,8,["label","model-value"]),o(z,{size:b,border:"",label:l.$t("randomString_symbol"),"model-value":t(w).symbol,onChange:e[9]||(e[9]=a=>g("symbol"))},null,8,["label","model-value"]),o(d,{size:b,text:l.$t("main_ui_reset"),onClick:e[10]||(e[10]=a=>g("reset"))},null,8,["text"])]),_:1})]),_:1})]),_:1},8,["title","modelValue"])],64)}}});export{Q as default};
