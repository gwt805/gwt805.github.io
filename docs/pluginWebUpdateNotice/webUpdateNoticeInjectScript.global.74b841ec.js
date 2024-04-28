"use strict";(()=>{var S="pluginWebUpdateNotice",w="web_version_by_plugin";var O="plugin_web_update_notice",I="plugin-web-update-notice-anchor",A="plugin-web-update-notice-refresh-btn",C="plugin-web-update-notice-dismiss-btn",f="web_update_check_dismiss_version_",L={topLeft:"top: 24px;left: 24px",topRight:"top: 24px;right: 24px",bottomLeft:"bottom: 24px;left: 24px",bottomRight:"bottom: 24px;right: 24px"};var W={zh_CN:{title:"\u53D1\u73B0\u65B0\u7248\u672C",description:"\u7F51\u9875\u66F4\u65B0\u5566\uFF01\u8BF7\u5237\u65B0\u9875\u9762\u540E\u4F7F\u7528\u3002",buttonText:"\u5237\u65B0",dismissButtonText:"\u5FFD\u7565"},zh_TW:{title:"\u767C\u73FE\u65B0\u7248\u672C",description:"\u7DB2\u9801\u66F4\u65B0\u5566\uFF01\u8ACB\u5237\u65B0\u9801\u9762\u5F8C\u4F7F\u7528\u3002",buttonText:"\u5237\u65B0",dismissButtonText:"\u5FFD\u7565"},en_US:{title:"Discover new version",description:"A new version is available! Please refresh the page.",buttonText:"Refresh",dismissButtonText:"Dismiss"}},N=W;var E=!1,b="",r="",g;function B(t,o){let i=!1;return function(...c){i||(i=!0,t.apply(this,c),setTimeout(()=>{i=!1},o))}}function h(t){return document.querySelector(t)}window.pluginWebUpdateNotice_={checkUpdate:()=>{},dismissUpdate:v,closeNotification:x,setLocale:t=>{window.pluginWebUpdateNotice_.locale=t,r=t}};function H(t){let{injectFileBase:o="",checkInterval:i=10*60*1e3,hiddenDefaultNotification:c,checkOnWindowFocus:a=!0,checkImmediately:e=!0,checkOnLoadFileError:p=!0}=t,l=()=>{window.fetch(`${o}${S}/${w}.json?t=${Date.now()}`).then(n=>{if(!n.ok)throw new Error(`Failed to fetch ${w}.json`);return n.json()}).then(({version:n,silence:d})=>{if(!d&&(b=n,window.pluginWebUpdateNotice_version!==n)){document.body.dispatchEvent(new CustomEvent(O,{detail:{options:t,version:n},bubbles:!0}));let s=localStorage.getItem(`${f}${n}`)==="true";!E&&!c&&!s&&J(t)}}).catch(n=>{console.error("[pluginWebUpdateNotice] Failed to check system update",n)})};e&&setTimeout(l);let _=()=>{i>0&&(g=setInterval(l,i))};_();let u=B(l,5e3);window.pluginWebUpdateNotice_.checkUpdate=u,window.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&(_(),a&&u()),document.visibilityState==="hidden"&&g&&clearInterval(g)}),window.addEventListener("focus",()=>{a&&u()}),p&&window.addEventListener("error",n=>{var s;((s=n==null?void 0:n.target)==null?void 0:s.tagName)==="SCRIPT"&&l()},!0)}window.__checkUpdateSetup__=H;function x(){var t;E=!1,(t=h(`.${I} .plugin-web-update-notice`))==null||t.remove()}function v(){try{x(),localStorage.setItem(`${f}${b}`,"true")}catch(t){console.error(t)}}function j(){let t=h(`.${A}`);t==null||t.addEventListener("click",()=>{let{onClickRefresh:i}=window.pluginWebUpdateNotice_;if(i){i(b);return}window.location.reload()});let o=h(`.${C}`);o==null||o.addEventListener("click",()=>{let{onClickDismiss:i}=window.pluginWebUpdateNotice_;if(i){i(b);return}v()})}function T(t,o,i){var c,a,e,p;return(p=(e=(c=i[t])==null?void 0:c[o])!=null?e:(a=N[t])==null?void 0:a[o])!=null?p:N.zh_CN[o]}function J(t){var o,i,c,a;try{E=!0;let{notificationProps:e,notificationConfig:p,customNotificationHTML:l,hiddenDismissButton:_,locale:u="zh_CN",localeData:n}=t,d=Object.assign({},N,n);r||(r=u,window.pluginWebUpdateNotice_.locale=u);let s=document.createElement("div"),m="";if(l)m=l;else{let{placement:y="bottomRight",primaryColor:U,secondaryColor:M}=p||{},D=(o=e==null?void 0:e.title)!=null?o:T(r,"title",d),R=(i=e==null?void 0:e.description)!=null?i:T(r,"description",d),$=(c=e==null?void 0:e.buttonText)!=null?c:T(r,"buttonText",d),F=(a=e==null?void 0:e.dismissButtonText)!=null?a:T(r,"dismissButtonText",d),k=_?"":`<a class="plugin-web-update-notice-btn plugin-web-update-notice-dismiss-btn" style="color:${M}">${F}</a>`;s.classList.add("plugin-web-update-notice"),s.style.cssText=`${L[y]}`,m=`
    <div class="plugin-web-update-notice-content" data-cy="notification-content">
      <div class="plugin-web-update-notice-content-title">
        ${D}
      </div>
      <div class="plugin-web-update-notice-content-desc">
        ${R}
      </div>
      <div class="plugin-web-update-notice-tools">
        ${k}
        <a class="plugin-web-update-notice-btn plugin-web-update-notice-refresh-btn" style="color:${U}">
          ${$}
        </a>
      </div>
    </div>`}s.innerHTML=m,document.querySelector(`.${I}`).appendChild(s),j()}catch(e){console.error("[pluginWebUpdateNotice] Failed to show notification",e)}}})();

  window.__checkUpdateSetup__({"versionType":"build_timestamp","checkInterval":1000,"checkOnWindowFocus":true,"locale":"zh_CN","localeData":{"en_US":{"title":"📢 system update","description":"System update, please refresh the page","buttonText":"refresh","dismissButtonText":"dismiss"},"zh_CN":{"title":"📢 系统更新","description":"有新版本发布, 请刷新页面","buttonText":"好的","dismissButtonText":"取消"}},"injectFileBase":"/"});
      ;const logFn = function bt(t,c){console.log(`version: %c${t}`,"color: #1677ff"),console.log(`release time: %c${new Date(c).toLocaleString()}`,"color: #1677ff")}
      ;logFn('1714306466472', 1714306466493)
    