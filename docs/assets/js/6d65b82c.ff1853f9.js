"use strict";(self.webpackChunkzwyx_dev=self.webpackChunkzwyx_dev||[]).push([[8021],{847:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var s=n(506),o=n(4848),r=n(8453);const i={slug:"indentation-for-accessibility",title:"Indentation for accessibility",description:"The real reason to use tabs over spaces",authors:["alex"],tags:["code","indentation","formatter","prettier"]},a=void 0,l={authorsImageUrls:[void 0]},c=[];function h(e){const t={a:"a",code:"code",em:"em",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"It's quite obvious, for consistently looking code, spaces are best."}),"\n",(0,o.jsx)(t.p,{children:"However, does one also has consistency among the people they work with?"}),"\n",(0,o.jsx)(t.p,{children:"It might not be the case: some people might have impaired vision."}),"\n",(0,o.jsx)(t.p,{children:'On an open source project, one might not even know how "consistent" are the people working with them.'}),"\n","\n",(0,o.jsxs)(t.p,{children:["Some require such big font sizes, that ",(0,o.jsx)(t.a,{href:"https://www.reddit.com/r/javascript/comments/c8drjo/nobody_talks_about_the_real_reason_to_use_tabs/",children:"being able to set the tab width to 1 is a big deal"}),". (I am short-sighted, and although I don't have special needs other than wearing glasses, I can understand how useful it can be for others)."]}),"\n",(0,o.jsxs)(t.p,{children:["After working years on projects using spaces, and years on projects using tabs, what's apparent to me is that ",(0,o.jsx)(t.strong,{children:"for most developers, tabs or spaces don't change anything"}),". We adapt easily to one choice or the other."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"The only persons for whom it matters, are people with special needs. And for them, tabs are better."})," Shouldn't this be a done deal?"]}),"\n",(0,o.jsx)(t.p,{children:"This is even more true these days, as many languages now have great tools to autoformat our code. If an autoformatter is available for a language, then using it should be a priority. It is SO great to not have ever to think about indentation or formatting."}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsxs)(t.p,{children:["With tabs, the code will not consistently look the same on everyone's screen anymore, but another thing will become consistent: ",(0,o.jsx)(t.strong,{children:"a good experience for everyone"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"This is for this exact reason that the web has introduced media queries"})," like ",(0,o.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme",children:(0,o.jsx)(t.code,{children:"prefers-color-scheme"})})," and ",(0,o.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast",children:(0,o.jsx)(t.code,{children:"prefers-contrast"})}),". We want to improve accessibility of websites; source codes deserve the same."]}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.p,{children:"So, my recommendations is to set the project settings to fix the differences between operating systems that developers shouldn't have to deal with, and set some preferences like trimming trailing whitespaces."}),"\n",(0,o.jsx)(t.p,{children:"That's it. Do not set the tab width, it is a user setting."}),"\n",(0,o.jsx)(t.p,{children:"Forcing the tab width would be like forcing a bright high contrast theme for everyone in the project."}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsxs)(t.p,{children:["So for example, here's an ",(0,o.jsx)(t.a,{href:"https://editorconfig.org",children:(0,o.jsx)(t.code,{children:".editorconfig"})})," file:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ini",children:'# https://editorconfig.org\n\n[*]\ncharset = utf-8\nend_of_line = lf\nindent_style = "tab"\ntrim_trailing_whitespace = true\ninsert_final_newline = true\n'})}),"\n",(0,o.jsxs)(t.p,{children:["And a ",(0,o.jsx)(t.code,{children:".vscode/settings.json"})," file:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'{\n\t"files.encoding": "utf8",\n\t"files.eol": "\\n",\n\t"files.trimTrailingWhitespace": true,\n\t"files.insertFinalNewline": true,\n\t"files.trimFinalNewlines": true,\n\t"editor.insertSpaces": false,\n\t"editor.defaultFormatter": "esbenp.prettier-vscode"\n}\n'})}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsxs)(t.p,{children:["(We sometimes read that developers who use spaces make more money. Does it sound like BS? It probably is. Developers using spaces could simply be paid more because they're older (so have old habits). Young developers (paid less) could have answered that they use tabs because they press the Tab key when indenting. And there's more, see the comments below the ",(0,o.jsx)(t.a,{href:"https://stackoverflow.blog/2017/06/15/developers-use-spaces-make-money-use-tabs/",children:"original post"}),".)"]}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"TL;DR: I recommend to use tabs and to not force their width (and to use an automatic formatter for everything else if possible)."})," Of cours, this doesn't apply if the project/language you work with doesn't allow it for technical reasons."]}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsxs)(t.em,{children:["This post was originally my answer to this ",(0,o.jsx)(t.a,{href:"https://stackoverflow.com/questions/35649847/objective-reasons-for-using-spaces-instead-of-tabs-for-indentation/75019495#75019495",children:"StackOverflow question"}),"."]})})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var s=n(6540);const o={},r=s.createContext(o);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:t},e.children)}},506:e=>{e.exports=JSON.parse('{"permalink":"/blog/indentation-for-accessibility","editUrl":"https://github.com/zwyx/zwyx.dev/tree/master/blog/2023-01-05-indentation-for-accessibility/index.mdx","source":"@site/blog/2023-01-05-indentation-for-accessibility/index.mdx","title":"Indentation for accessibility","description":"The real reason to use tabs over spaces","date":"2023-01-05T00:00:00.000Z","tags":[{"inline":true,"label":"code","permalink":"/blog/tags/code"},{"inline":true,"label":"indentation","permalink":"/blog/tags/indentation"},{"inline":true,"label":"formatter","permalink":"/blog/tags/formatter"},{"inline":true,"label":"prettier","permalink":"/blog/tags/prettier"}],"readingTime":2.455,"hasTruncateMarker":true,"authors":[{"name":"Alex","title":"Web developer","email":"alex@zwyx.dev","url":"https://github.com/Zwyx","imageURL":"https://github.com/zwyx.png","key":"alex","page":null}],"frontMatter":{"slug":"indentation-for-accessibility","title":"Indentation for accessibility","description":"The real reason to use tabs over spaces","authors":["alex"],"tags":["code","indentation","formatter","prettier"]},"unlisted":false,"prevItem":{"title":"Consolidate your contribution graph","permalink":"/blog/own-contribution-graph"},"nextItem":{"title":"Hello Docusaurus!","permalink":"/blog/hello-docusaurus"}}')}}]);