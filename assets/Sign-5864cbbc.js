import{u as z,i as H}from"./action-b0774d39.js";import{j as u}from"./jsrsasign-b685e489.js";import{d as B,H as L,y as M,I as T,k as g,v as r,w as d,j as n,F as j,r as p,B as E,f as c,A as f}from"./tool-86fca7a1.js";import"./modulepreload-polyfill-3cfb730f.js";const x={class:"ctool-page-option"},O=B({__name:"Sign",async setup(I){let y,b;const h=new Worker(new URL(""+new URL("worker-9e41845b.js",import.meta.url).href,self.location),{type:"module"});L(()=>{h.terminate()});const t=z(([y,b]=M(()=>H({signData:"",privateKey:"",publicKey:"",verifyCode:"",algorithm:"MD5withRSA"},{paste:!1})),y=await y,b(),y));let a=T({show:!1,loading:!1,length:1024,type:"PKCS8PRV"});h.onmessage=function(l){const e=l.data;if(console.log("main accept",e),e.method==="generate_keypair")return A(e.data.public_key,e.data.private_key)};const w=(l,e)=>{let i={method:l,data:e};console.log("main send",i),h.postMessage(i)},k=["MD5withRSA","SHA1withRSA","SHA256withRSA","SHA512withRSA"],C=[{value:"PKCS8PRV",label:"PKCS#8"},{value:"PKCS1PRV",label:"PKCS#1"}],S=[{value:512,label:"512 bit"},{value:1024,label:"1024 bit"},{value:2048,label:"2048 bit"},{value:4096,label:"4096 bit"}],$=()=>{a.value.loading=!0,w("generate_keypair",{type:a.value.type,length:a.value.length})},R=()=>{try{if(!t.current.signData||!t.current.privateKey)return;const l=u.KEYUTIL.getKey(t.current.privateKey),e=new u.KJUR.crypto.Signature({alg:t.current.algorithm});e.init(l),e.updateString(t.current.signData),t.current.verifyCode=u.hextob64(e.sign()),t.success({copy_text:t.current.verifyCode})}catch(l){t.current.verifyCode=$error(l)}},U=()=>{try{if(!t.current.verifyCode||!t.current.publicKey)return;const l=u.KEYUTIL.getKey(t.current.publicKey),e=new u.KJUR.crypto.Signature({alg:t.current.algorithm});e.init(l),e.updateString(t.current.signData);let i=u.b64tohex(t.current.verifyCode);return e.verify(i)?t.success({message:$t("sign_verify_ok")}):t.success({message:$t("sign_verify_fail"),message_type:"error",is_save:!1})}catch(l){return t.success({message:$error(l),message_type:"error",is_save:!1})}},A=(l,e)=>{a.value.show=!1,a.value.loading=!1,t.current.privateKey=e,t.current.publicKey=l};return(l,e)=>{const i=p("Textarea"),m=p("Select"),_=p("Button"),K=p("Align"),D=p("HeightResize"),P=p("Modal"),v=E("row");return c(),g(j,null,[r(D,{reduce:10,ignore:"",append:[".ctool-page-option"]},{default:d(({small:s,large:V})=>[r(K,{direction:"vertical"},{default:d(()=>[f((c(),g("div",null,[r(i,{height:s,modelValue:n(t).current.signData,"onUpdate:modelValue":e[0]||(e[0]=o=>n(t).current.signData=o),placeholder:l.$t("sign_sign_data"),copy:l.$t("sign_sign_data")},null,8,["height","modelValue","placeholder","copy"]),r(i,{height:s,modelValue:n(t).current.verifyCode,"onUpdate:modelValue":e[1]||(e[1]=o=>n(t).current.verifyCode=o),placeholder:l.$t("sign_verify_code"),copy:l.$t("sign_verify_code")},null,8,["height","modelValue","placeholder","copy"])])),[[v,"1-1"]]),f((c(),g("div",x,[r(K,{horizontal:"right"},{default:d(()=>[r(m,{options:k,modelValue:n(t).current.algorithm,"onUpdate:modelValue":e[2]||(e[2]=o=>n(t).current.algorithm=o)},null,8,["modelValue"]),r(_,{type:"primary",text:l.$t("sign_sign"),onClick:R},null,8,["text"])]),_:1}),r(K,null,{default:d(()=>[r(_,{type:"primary",text:l.$t("sign_verify"),onClick:U},null,8,["text"]),r(_,{text:l.$t("sign_generate_keypair"),onClick:e[3]||(e[3]=o=>n(a).show=!0)},null,8,["text"])]),_:1})])),[[v,"1-1"]]),f((c(),g("div",null,[r(i,{height:V,modelValue:n(t).current.publicKey,"onUpdate:modelValue":e[4]||(e[4]=o=>n(t).current.publicKey=o),placeholder:l.$t("sign_public_key"),copy:l.$t("sign_public_key")},null,8,["height","modelValue","placeholder","copy"]),r(i,{height:V,modelValue:n(t).current.privateKey,"onUpdate:modelValue":e[5]||(e[5]=o=>n(t).current.privateKey=o),placeholder:l.$t("sign_private_key"),copy:l.$t("sign_private_key")},null,8,["height","modelValue","placeholder","copy"])])),[[v,"1-1"]])]),_:2},1024)]),_:1},8,["append"]),r(P,{title:l.$t("sign_generate_keypair"),loading:n(a).loading,modelValue:n(a).show,"onUpdate:modelValue":e[8]||(e[8]=s=>n(a).show=s),width:550,"footer-type":"long",onOk:$},{default:d(()=>[f((c(),g("div",null,[r(m,{size:"large",options:C,modelValue:n(a).type,"onUpdate:modelValue":e[6]||(e[6]=s=>n(a).type=s),label:l.$t("sign_keypair_type")},null,8,["modelValue","label"]),r(m,{size:"large",options:S,modelValue:n(a).length,"onUpdate:modelValue":e[7]||(e[7]=s=>n(a).length=s),label:l.$t("sign_keypair_length")},null,8,["modelValue","label"])])),[[v,"1-1"]])]),_:1},8,["title","loading","modelValue"])],64)}}});export{O as default};
