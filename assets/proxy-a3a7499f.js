import{b as a,aj as u,am as o,an as p,ao as l}from"./tool-febbd1cf.js";const n=()=>{const e=a(),s=u.create();return s.interceptors.request.use(r=>{if(o.runtime.webSecurity()&&r.url&&p.is(r.url)){if(!e.items.proxy_enable||!e.items.proxy_url)throw new Error($t("main_network_request_proxy_prompt"));r.headers=r.headers?r.headers:{};const t=r.url.includes("?")?"&":"?";r.headers["Ctool-Proxy-Url"]=`${r.url}${r.params?`${t}${l.stringify(r.params)}`:""}`,r.params=void 0,r.url=e.items.proxy_url}return r}),s};export{n as a};