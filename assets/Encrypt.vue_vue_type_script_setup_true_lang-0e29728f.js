import{u as U,i as w}from"./action-6d7b183c.js";import{c as I,a as A,T as d}from"./index-63ad488e.js";import{m as H,p as S,d as $,t as z}from"./cryptoJS-29e177b5.js";import{D as O,bj as h,l as j,bf as D,n as L,bk as r,aG as p,at as R,y as l,b0 as t}from"./history-22e01718.js";const F=O({__name:"Encrypt",props:{type:{type:String,default:"des"}},async setup(y){let i,s;const f=y,_={iv:"",type:"advanced",key:"",fill:!0,mode:"CBC",padding:"Pkcs7"},e=U(([i,s]=h(()=>w({input:I("text"),option:_,output:A("base64")})),i=await i,s(),i)),m=j(()=>{if(e.current.input.text.isEmpty()||e.current.option.key===""||e.current.option.type==="advanced"&&e.current.option.mode!=="ECB"&&e.current.option.iv==="")return d.empty();if(e.current.input.text.isError())return e.current.input.text;try{return d.fromBase64((f.type==="des"?$:z).encrypt(e.current.input.text.toBase64(),e.current.option))}catch(u){return d.fromError($error(u))}});return D(()=>m.value,u=>{u.isEmpty()||e.save()},{immediate:!0,deep:!0}),(u,o)=>{const b=p("TextInput"),c=p("Select"),a=p("Input"),g=p("Bool"),x=p("Tooltip"),V=p("Align"),v=p("HelpTip"),T=p("Tabs"),k=p("TextOutput"),B=p("HeightResize");return R(),L(B,{ignore:"",append:[".ctool-page-option"],reduce:10},{default:r(({small:C,large:E})=>[l(V,{direction:"vertical"},{default:r(()=>[l(b,{modelValue:t(e).current.input,"onUpdate:modelValue":o[0]||(o[0]=n=>t(e).current.input=n),height:C,upload:"file",encoding:""},null,8,["modelValue","height"]),l(T,{modelValue:t(e).current.option.type,"onUpdate:modelValue":o[7]||(o[7]=n=>t(e).current.option.type=n),class:"ctool-page-option",lists:[{name:"advanced",label:u.$t("main_ui_advanced")},{name:"simple",label:u.$t("main_ui_simple")}]},{extra:r(()=>[l(v,{link:"https://github.com/brix/crypto-js"})]),default:r(()=>[l(V,null,{default:r(()=>[l(c,{modelValue:t(e).current.option.mode,"onUpdate:modelValue":o[1]||(o[1]=n=>t(e).current.option.mode=n),options:t(H)},null,8,["modelValue","options"]),l(c,{modelValue:t(e).current.option.padding,"onUpdate:modelValue":o[2]||(o[2]=n=>t(e).current.option.padding=n),options:t(S)},null,8,["modelValue","options"]),l(a,{modelValue:t(e).current.option.key,"onUpdate:modelValue":o[3]||(o[3]=n=>t(e).current.option.key=n),width:200,label:"key"},null,8,["modelValue"]),l(a,{modelValue:t(e).current.option.iv,"onUpdate:modelValue":o[5]||(o[5]=n=>t(e).current.option.iv=n),width:220,label:"iv",disabled:t(e).current.option.mode==="ECB"},{append:r(()=>[l(x,{content:u.$t("aes_iv_auto_fill")},{default:r(()=>[l(g,{modelValue:t(e).current.option.fill,"onUpdate:modelValue":o[4]||(o[4]=n=>t(e).current.option.fill=n),disabled:t(e).current.option.mode==="ECB"},null,8,["modelValue","disabled"])]),_:1},8,["content"])]),_:1},8,["modelValue","disabled"])]),_:1}),l(a,{modelValue:t(e).current.option.key,"onUpdate:modelValue":o[6]||(o[6]=n=>t(e).current.option.key=n),label:"key"},null,8,["modelValue"])]),_:1},8,["modelValue","lists"]),l(k,{modelValue:t(e).current.output,"onUpdate:modelValue":o[8]||(o[8]=n=>t(e).current.output=n),allow:["base64","hex"],content:m.value,height:E},null,8,["modelValue","content","height"])]),_:2},1024)]),_:1},8,["append"])}}});export{F as _};