import{u as T,i as E}from"./action-b0774d39.js";import{d as z,y as $,z as w,D as A,c as H,w as p,r as u,f as I,v as n,j as r,C as K,E as U,T as a}from"./tool-86fca7a1.js";import{a as _}from"./index-6f0f6895.js";import"./modulepreload-polyfill-3cfb730f.js";const D=z({__name:"Encrypt",async setup(B){let i,s;const e=T(([i,s]=$(()=>E({input:K("text"),option:{public_key:"",private_key:"",cipher_mode:1},output:U("hex")})),i=await i,s(),i)),m=w(()=>{if(e.current.input.text.isEmpty()||e.current.option.public_key==="")return a.empty();if(e.current.input.text.isError())return e.current.input.text;try{let t=e.current.option.public_key;if(t.length==128)t="04"+t;else if(t.length!=130||!t.startsWith("04"))return a.fromError($error($t("public_key_error")));let o=_.sm2.doEncrypt(e.current.input.text.toArray(),t,e.current.option.cipher_mode);return a.fromHex(o)}catch(t){return a.fromError($error(t))}});A(()=>m.value,t=>{t.isEmpty()||e.save()},{immediate:!0,deep:!0});const y=()=>{let t=_.sm2.generateKeyPairHex();e.current.option.public_key=t.publicKey,e.current.option.private_key=t.privateKey};return(t,o)=>{const f=u("TextInput"),d=u("Input"),c=u("Align"),k=u("Select"),x=u("Button"),b=u("HelpTip"),g=u("Card"),h=u("TextOutput"),V=u("HeightResize");return I(),H(V,{ignore:"",append:[".ctool-page-option"],reduce:10},{default:p(({small:C,large:v})=>[n(c,{direction:"vertical"},{default:p(()=>[n(f,{modelValue:r(e).current.input,"onUpdate:modelValue":o[0]||(o[0]=l=>r(e).current.input=l),height:C,upload:"file"},null,8,["modelValue","height"]),n(g,{title:t.$t("main_ui_config"),class:"ctool-page-option"},{extra:p(()=>[n(c,null,{default:p(()=>[n(k,{size:"small",options:[{value:1,label:"C1-C3-C2"},{value:0,label:"C1-C2-C3"}],modelValue:r(e).current.option.cipher_mode,"onUpdate:modelValue":o[3]||(o[3]=l=>r(e).current.option.cipher_mode=l)},null,8,["modelValue"]),n(x,{type:"primary",size:"small",text:t.$t("sm2_generate_keypair"),onClick:y},null,8,["text"]),n(b,{link:"https://github.com/JuneAndGreen/sm-crypto"})]),_:1})]),default:p(()=>[n(c,{horizontal:"center"},{default:p(()=>[n(d,{modelValue:r(e).current.option.public_key,"onUpdate:modelValue":o[1]||(o[1]=l=>r(e).current.option.public_key=l),label:t.$t("sm2_public_key")},null,8,["modelValue","label"]),n(d,{modelValue:r(e).current.option.private_key,"onUpdate:modelValue":o[2]||(o[2]=l=>r(e).current.option.private_key=l),label:t.$t("sm2_private_key")},null,8,["modelValue","label"])]),_:1})]),_:1},8,["title"]),n(h,{modelValue:r(e).current.output,"onUpdate:modelValue":o[4]||(o[4]=l=>r(e).current.output=l),allow:["base64","hex"],content:r(m),height:v},null,8,["modelValue","content","height"])]),_:2},1024)]),_:1},8,["append"])}}});export{D as default};
