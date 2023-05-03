import{u as h,i as y}from"./action-b0774d39.js";import{d as T,y as V,z as w,c as A,w as l,r as u,f as v,v as a,j as n,C,E as z,T as i}from"./tool-86fca7a1.js";import{p as E}from"./pako.esm-ff523c99.js";import"./modulepreload-polyfill-3cfb730f.js";const B=T({__name:"Decoder",async setup(U){let o,p;const t=h(([o,p]=V(()=>y({input:C("base64"),output:z("text")})),o=await o,p(),o)),c=w(()=>{if(t.current.input.text.isEmpty())return i.empty();if(t.current.input.text.isError())return t.current.input.text;try{return i.fromUint8Array(E.inflate(t.current.input.text.toUint8Array()))}catch(s){return i.fromError($error(s))}});return(s,e)=>{const m=u("TextInput"),d=u("TextOutput"),x=u("Align"),f=u("HeightResize");return v(),A(f,{reduce:5},{default:l(({small:_,large:g})=>[a(x,{direction:"vertical"},{default:l(()=>[a(m,{modelValue:n(t).current.input,"onUpdate:modelValue":e[0]||(e[0]=r=>n(t).current.input=r),height:_,upload:"file",allow:["base64","hex","upload","url"],encoding:""},null,8,["modelValue","height"]),a(d,{modelValue:n(t).current.output,"onUpdate:modelValue":e[1]||(e[1]=r=>n(t).current.output=r),allow:["text"],content:n(c),height:g,onSuccess:e[2]||(e[2]=r=>n(t).save()),encoding:""},null,8,["modelValue","content","height"])]),_:2},1024)]),_:1})}}});export{B as default};
