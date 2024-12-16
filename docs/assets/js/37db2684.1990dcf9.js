"use strict";(self.webpackChunkzwyx_dev=self.webpackChunkzwyx_dev||[]).push([[3563],{2681:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>w,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var r=n(108),s=n(4848),i=n(8453),o=n(4341),a=n(5939),c=n(2123);const l={tags:["viewport"]},d=void 0,h={authorsImageUrls:[]},p=[];function m(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"viewport"})," meta tag option ",(0,s.jsx)(t.code,{children:"interactive-widget"})," allows us to choose what the browser should do with our page when some overlay elements \u2014 such as a phone on-screen keyboard \u2014 appear:"]}),"\n","\n",(0,s.jsx)(o._,{src:c.A,alt:"interactive-widget options comparison",legend:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.code,{children:"interactive-widget"})," options comparison. The difference between"," ",(0,s.jsx)(t.code,{children:"resizes-visual"})," and ",(0,s.jsx)(t.code,{children:"overlays-content"})," is that"," ",(0,s.jsx)(t.code,{children:"resizes-visual"})," allows the user to scroll the page up to see the sticky element at the bottom, whereas ",(0,s.jsx)(t.code,{children:"overlays-content"})," ","doesn't."]})}),"\n",(0,s.jsxs)(t.p,{children:["Chrome's default behaviour on Android, before version 108, was ",(0,s.jsx)(t.code,{children:"resizes-content"})," \u2014 it is now ",(0,s.jsx)(t.code,{children:"resizes-visual"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["For example, the ",(0,s.jsx)(t.a,{href:"https://babel.zwyx.dev/",children:"Library of Babel"})," ",(0,s.jsx)(t.code,{children:"viewport"})," meta tag is now:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:'<meta\n\tname="viewport"\n\tcontent="width=device-width, initial-scale=1.0, interactive-widget=resizes-content"\n/>\n'})}),"\n",(0,s.jsx)(t.p,{children:"This allows the sticky pagination component to be always visible when the on-screen keyboard is open:"}),"\n",(0,s.jsx)("div",{style:{textAlign:"center"},children:(0,s.jsx)(o._,{src:a.A,alt:"Example on the Library of Babel",width:350,legend:(0,s.jsxs)(s.Fragment,{children:["The keyboard is"," ",(0,s.jsx)(t.a,{href:"https://github.com/dessalines/thumb-key",target:"_blank",rel:"noopener noreferrer",children:"Thumb-Key"}),"."]})})}),"\n",(0,s.jsxs)(t.p,{children:["Without ",(0,s.jsx)(t.code,{children:"interactive-widget"}),", scrolling down while the keyboard was open made the sticky pagination component to disappear."]}),"\n",(0,s.jsxs)(t.p,{children:["Read more at ",(0,s.jsx)(t.a,{href:"https://developer.chrome.com/blog/viewport-resize-behavior",children:"developer.chrome.com/blog/viewport-resize-behavior"})," (which is the source of the comparison image above)."]})]})}function w(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},4341:(e,t,n)=>{n.d(t,{_:()=>p});var r=n(53);const s="imageWrapper_u91s",i="withLegend_q8O0",o="frame_zT4L",a="visible_KgQe",c="image_Y_cJ",l="legend_xj0V";var d=n(4848);const h=e=>{let{children:t}=e;return(0,d.jsx)("div",{className:l,children:t})},p=e=>{let{src:t,alt:n,width:l,height:p,withFrame:m,legend:w,borderRadius:u,children:g}=e;const v=w||g;return(0,d.jsxs)("div",{className:(0,r.A)(s,v&&i),children:[(0,d.jsx)("div",{style:{borderRadius:u},className:(0,r.A)(o,m&&a),children:(0,d.jsx)("img",{style:{borderRadius:u},className:c,src:t,alt:n||("string"==typeof v?v:""),width:l,height:p})}),v&&(0,d.jsx)(h,{children:v})]})}},53:(e,t,n)=>{function r(e){var t,n,s="";if("string"==typeof e||"number"==typeof e)s+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(s&&(s+=" "),s+=n);else for(t in e)e[t]&&(s&&(s+=" "),s+=t);return s}n.d(t,{A:()=>s});const s=function(){for(var e,t,n=0,s="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(s&&(s+=" "),s+=t);return s}},5939:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/2024-03-27-interactive-widget-babel-2b3e7ed27a3f3bce5ac7359e6cff7ecb.webp"},2123:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/2024-03-27-interactive-widget-visual-comparison-all-ff711d1c9df866930cdc6b23602ac624.webp"},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(6540);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}},108:e=>{e.exports=JSON.parse('{"permalink":"/til/2024/03/27/interactive-widget","editUrl":"https://github.com/zwyx/zwyx.dev/tree/master/til/2024-03-27-interactive-widget.mdx","source":"@site/til/2024-03-27-interactive-widget.mdx","title":"interactive-widget","description":"The viewport meta tag option interactive-widget allows us to choose what the browser should do with our page when some overlay elements \u2014 such as a phone on-screen keyboard \u2014 appear:","date":"2024-03-27T00:00:00.000Z","tags":[{"inline":true,"label":"viewport","permalink":"/til/tags/viewport"}],"hasTruncateMarker":false,"authors":[],"frontMatter":{"tags":["viewport"]},"unlisted":false,"nextItem":{"title":"Fast integer-to-string conversion","permalink":"/til/2024/02/01/Fast integer-to-string conversion"}}')}}]);