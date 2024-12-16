"use strict";(self.webpackChunkzwyx_dev=self.webpackChunkzwyx_dev||[]).push([[9232],{2973:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>j,contentTitle:()=>u,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var s=i(3808),M=i(4848),n=i(8453);const o={slug:"hello-docusaurus",title:"Hello Docusaurus!",description:"A few tips on how I built this site with the great static site generator Docusaurus",image:"./docusaurus.svg",authors:["alex"],tags:["docusaurus","static site generator","blog"]},u=void 0,j={image:i(2734).A,authorsImageUrls:[void 0]},c=[{value:"Quick comparison",id:"quick-comparison",level:2},{value:"Setup",id:"setup",level:2},{value:"Create a new Docusaurus project",id:"create-a-new-docusaurus-project",level:3},{value:"Setup Prettier",id:"setup-prettier",level:3},{value:"Set up redirect to <code>/blog</code>",id:"set-up-redirect-to-blog",level:3},{value:"Deactivate <code>docs</code>",id:"deactivate-docs",level:3},{value:"Add metadata",id:"add-metadata",level:3},{value:"Activate all feed types",id:"activate-all-feed-types",level:3},{value:"Add comment system",id:"add-comment-system",level:3},{value:"Automatically deploy to GitHub Pages, Netlify, etc.",id:"automatically-deploy-to-github-pages-netlify-etc",level:3}];function r(t){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...t.components};return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)("div",{style:{textAlign:"center"},children:(0,M.jsx)(e.p,{children:(0,M.jsx)(e.img,{alt:"Docusaurus",src:i(4649).A+"",width:"200",height:"200"})})}),"\n",(0,M.jsxs)(e.p,{children:["I've investigated different static site generators \u2014 SSGs \u2014 in order to set up a proper blog for this website. I've read about a lot of them, tried a few. My favourite by far is ",(0,M.jsx)(e.a,{href:"https://docusaurus.io",children:"Docusaurus"}),", the one this site is now built with."]}),"\n","\n",(0,M.jsx)(e.h2,{id:"quick-comparison",children:"Quick comparison"}),"\n",(0,M.jsx)(e.p,{children:"As I'm working on complex web apps during the day, SSGs make evening projects feel like holiday."}),"\n",(0,M.jsx)(e.p,{children:"Still, I found that many of them require quite some tinkering before achieving desired results. In theory, to have a quick website set up, we can start from a template. But unfortunately this is where most of the pain come from. Many templates I looked at where incomplete, old, unmaintained, or simply ugly."}),"\n",(0,M.jsx)(e.p,{children:"Docusaurus is the one which has the best of both:"}),"\n",(0,M.jsxs)(e.ul,{children:["\n",(0,M.jsx)(e.li,{children:"A great template to start with."}),"\n"]}),"\n",(0,M.jsxs)(e.p,{children:["There is ",(0,M.jsx)(e.a,{href:"https://docusaurus.io/docs/api/themes",children:"only one"})," at the moment. It has basically everything I wanted and it's very nice. So it's much better than a choice of 100 useless templates. It might be a bit of a problem for someone really not liking it... but still, wait for the next point."]}),"\n",(0,M.jsxs)(e.ul,{children:["\n",(0,M.jsx)(e.li,{children:"A great way to tinker and customise it."}),"\n"]}),"\n",(0,M.jsxs)(e.p,{children:["Docusaurus provides multiple ways to customise the ",(0,M.jsx)(e.a,{href:"https://docusaurus.io/docs/styling-layout",children:"styling and layout"}),", depending on what we want to change, and how deep we want to change it. From creating React components and use them in ",(0,M.jsx)(e.a,{href:"https://mdxjs.com/",children:"MDX"}),", to the brilliant ",(0,M.jsx)(e.a,{href:"https://docusaurus.io/docs/swizzling",children:"swizzling"})," method allowing to easily cherry pick a component to wrap it or replace it (there is an example in the ",(0,M.jsx)(e.a,{href:"#add-comment-system",children:"Add comment system"})," section below)."]}),"\n",(0,M.jsx)(e.h2,{id:"setup",children:"Setup"}),"\n",(0,M.jsx)(e.admonition,{type:"note",children:(0,M.jsx)(e.p,{children:"I will write about the choices I've made during the building of this blog. I won't detail every steps\xa0\u2014\xa0official docs are better sources and will stay up to date."})}),"\n",(0,M.jsx)(e.h3,{id:"create-a-new-docusaurus-project",children:"Create a new Docusaurus project"}),"\n",(0,M.jsx)(e.pre,{children:(0,M.jsx)(e.code,{className:"language-bash",children:"npx create-docusaurus@latest your-project-name classic --typescript\n"})}),"\n",(0,M.jsx)(e.p,{children:"This is all what's needed to have a complete website with dummy pages ready to be filled with content."}),"\n",(0,M.jsx)(e.admonition,{type:"tip",children:(0,M.jsxs)(e.p,{children:["If you're sick of having a new browser tab being opened every time you run the ",(0,M.jsx)(e.code,{children:"start"})," command, append ",(0,M.jsx)(e.code,{children:"--no-open"}),"."]})}),"\n",(0,M.jsx)(e.h3,{id:"setup-prettier",children:"Setup Prettier"}),"\n",(0,M.jsxs)(e.p,{children:[(0,M.jsx)(e.a,{href:"https://prettier.io/",children:"Prettier"})," formats Markdown well, it will be appreciated while writing blog posts."]}),"\n",(0,M.jsxs)(e.h3,{id:"set-up-redirect-to-blog",children:["Set up redirect to ",(0,M.jsx)(e.code,{children:"/blog"})]}),"\n",(0,M.jsxs)(e.p,{children:["I wanted the blog to be the only content of the site for the moment. But I didn't want to ",(0,M.jsxs)(e.a,{href:"https://docusaurus.io/docs/blog#blog-only-mode",children:["make the blog base URL simply ",(0,M.jsx)(e.code,{children:"/"})]}),", as all the post links would be in the format ",(0,M.jsx)(e.code,{children:"<domain>/<post>"}),", which could potentially become annoying if I wanted to add other types of content to the site in the future."]}),"\n",(0,M.jsxs)(e.p,{children:["So I kept the blog base URL ",(0,M.jsx)(e.code,{children:"/blog"})," (post links are ",(0,M.jsx)(e.code,{children:"<domain>/blog/<post>"}),"), and I created a redirect from ",(0,M.jsx)(e.code,{children:"/"})," to ",(0,M.jsx)(e.code,{children:"/blog"}),"."]}),"\n",(0,M.jsx)(e.admonition,{type:"info",children:(0,M.jsx)(e.p,{children:"Server-side redirects are best, but as I'm hosting the site on GitHub Pages, this isn't an option."})}),"\n",(0,M.jsxs)(e.p,{children:["Docusaurus provides a ",(0,M.jsx)(e.a,{href:"https://docusaurus.io/docs/next/api/plugins/@docusaurus/plugin-client-redirects",children:"plugin for client-side redirects"}),":"]}),"\n",(0,M.jsx)(e.pre,{children:(0,M.jsx)(e.code,{className:"language-bash",children:"npm i @docusaurus/plugin-client-redirects\n"})}),"\n",(0,M.jsx)(e.pre,{children:(0,M.jsx)(e.code,{className:"language-js",metastring:"title=\"Extract from 'docusaurus.config.js'\"",children:'plugins: [\n\t[\n\t\t"@docusaurus/plugin-client-redirects",\n\t\t/** @type {import(\'@docusaurus/plugin-client-redirects\').Options} */\n\t\t({\n\t\t\tredirects: [\n\t\t\t\t{\n\t\t\t\t\tfrom: "/",\n\t\t\t\t\tto: "/blog",\n\t\t\t\t},\n\t\t\t],\n\t\t}),\n\t],\n],\n'})}),"\n",(0,M.jsxs)(e.h3,{id:"deactivate-docs",children:["Deactivate ",(0,M.jsx)(e.code,{children:"docs"})]}),"\n",(0,M.jsx)(e.pre,{children:(0,M.jsx)(e.code,{className:"language-js",metastring:"title=\"Extract from 'docusaurus.config.js'\"",children:'presets: [\n\t[\n\t\t"classic",\n\t\t...\n\t\t\tdocs: false,\n'})}),"\n",(0,M.jsx)(e.h3,{id:"add-metadata",children:"Add metadata"}),"\n",(0,M.jsx)(e.p,{children:"Adding the following makes links to the blog look pretty when shared."}),"\n",(0,M.jsx)(e.pre,{children:(0,M.jsx)(e.code,{className:"language-js",metastring:"title=\"Extract from 'docusaurus.config.js'\"",children:'presets: [\n\t[\n\t\t"classic",\n\t\t...\n\t\t\tblog: {\n\t\t\t\tblogTitle: "<Blog title>",\n\t\t\t\tblogDescription: "<Blog description>",\n'})}),"\n",(0,M.jsx)(e.pre,{children:(0,M.jsx)(e.code,{className:"language-js",metastring:"title=\"Extract from 'docusaurus.config.js'\"",children:'themeConfig:\n\t...\n\t\timage: "<Image path>",\n'})}),"\n",(0,M.jsx)(e.h3,{id:"activate-all-feed-types",children:"Activate all feed types"}),"\n",(0,M.jsxs)(e.p,{children:["Just because I want all the shiny new stuff, I activated all the ",(0,M.jsx)(e.a,{href:"https://docusaurus.io/docs/next/blog#feed",children:"types of feeds"}),"."]}),"\n",(0,M.jsx)(e.pre,{children:(0,M.jsx)(e.code,{className:"language-js",metastring:"title=\"Extract from 'docusaurus.config.js'\"",children:'presets: [\n\t[\n\t\t"classic",\n\t\t...\n\t\t\tblog: {\n\t\t\t\tfeedOptions: {\n\t\t\t\t\ttype: "all",\n\t\t\t\t\ttitle: "<Blog title>", // By default, it\'s in the format `<Site name> Blog`\n\t\t\t\t\tdescription: "<Blog description>", // Same here\n\t\t\t\t},\n'})}),"\n",(0,M.jsx)(e.h3,{id:"add-comment-system",children:"Add comment system"}),"\n",(0,M.jsxs)(e.p,{children:[(0,M.jsx)(e.a,{href:"https://giscus.app/",children:"Giscus"})," is a great comment system powered by GitHub Discussions."]}),"\n",(0,M.jsx)(e.p,{children:"Install its React component:"}),"\n",(0,M.jsx)(e.pre,{children:(0,M.jsx)(e.code,{className:"language-bash",children:"npm i @giscus/react\n"})}),"\n",(0,M.jsxs)(e.p,{children:["Use ",(0,M.jsx)(e.a,{href:"https://giscus.app",children:"giscus.app"})," to set up and retrieve your configuration for Giscus, then create the file ",(0,M.jsx)(e.code,{children:"src/components/GiscusComments.tsx"}),":"]}),"\n",(0,M.jsx)(e.pre,{children:(0,M.jsx)(e.code,{className:"language-tsx",metastring:'title="src/components/GiscusComments.tsx"',children:'import { useColorMode } from "@docusaurus/theme-common";\nimport useDocusaurusContext from "@docusaurus/useDocusaurusContext";\nimport Giscus from "@giscus/react";\nimport React from "react";\n\nexport default function GiscusComments() {\n\tconst {\n\t\tsiteConfig: {\n\t\t\tcustomFields: {\n\t\t\t\tgiscusRepo,\n\t\t\t\tgiscusRepoId,\n\t\t\t\tgiscusCategory,\n\t\t\t\tgiscusCategoryId,\n\t\t\t},\n\t\t},\n\t} = useDocusaurusContext();\n\n\tconst { colorMode } = useColorMode();\n\n\tif (\n\t\ttypeof giscusRepo !== "string" ||\n\t\ttypeof giscusRepoId !== "string" ||\n\t\ttypeof giscusCategory !== "string" ||\n\t\ttypeof giscusCategoryId !== "string"\n\t) {\n\t\treturn null;\n\t}\n\n\treturn (\n\t\t<Giscus\n\t\t\trepo={giscusRepo as `${string}/${string}`}\n\t\t\trepoId={giscusRepoId}\n\t\t\tcategory={giscusCategory}\n\t\t\tcategoryId={giscusCategoryId}\n\t\t\tmapping="pathname"\n\t\t\tstrict="0"\n\t\t\treactionsEnabled="1"\n\t\t\temitMetadata="0"\n\t\t\tinputPosition="bottom"\n\t\t\ttheme={colorMode}\n\t\t\tlang="en"\n\t\t/>\n\t);\n}\n'})}),"\n",(0,M.jsx)(e.admonition,{type:"tip",children:(0,M.jsxs)(e.p,{children:["I used Docusaurus' ",(0,M.jsx)(e.a,{href:"https://docusaurus.io/docs/next/api/docusaurus-config#customfields",children:"custom fields"})," to retrieve Giscus configuration from Docusaurus' config (itself retrieving these values using ",(0,M.jsx)(e.a,{href:"https://www.npmjs.com/package/dotenv",children:(0,M.jsx)(e.code,{children:"dotenv"})}),")"]})}),"\n",(0,M.jsxs)(e.p,{children:["In order to add the Giscus component to our blog posts, we are going to use Docusaurus' swizzling method to wrap one component of the template (read about swizzling ",(0,M.jsx)(e.a,{href:"https://docusaurus.io/docs/next/swizzling",children:"here"}),"):"]}),"\n",(0,M.jsx)(e.pre,{children:(0,M.jsx)(e.code,{className:"language-bash",children:"npm run swizzle @docusaurus/theme-classic BlogPostItem --wrap\n"})}),"\n",(0,M.jsx)(e.p,{children:"This command creates a new file:"}),"\n",(0,M.jsx)(e.pre,{children:(0,M.jsx)(e.code,{children:"src/theme/BlogPostItem/index.js\n"})}),"\n",(0,M.jsxs)(e.p,{children:["which we can directly rename to ",(0,M.jsx)(e.code,{children:".tsx"}),":"]}),"\n",(0,M.jsx)(e.pre,{children:(0,M.jsx)(e.code,{children:"src/theme/BlogPostItem/index.tsx\n"})}),"\n",(0,M.jsx)(e.admonition,{type:"info",children:(0,M.jsx)(e.p,{children:"Now we need to restart Docusaurus' dev server, in order for it to take the new custom component into account."})}),"\n",(0,M.jsxs)(e.p,{children:["This file is a wrapper for the ",(0,M.jsx)(e.code,{children:"BlogPostItem"})," component. We can very easily add our new ",(0,M.jsx)(e.code,{children:"GiscusComments"})," component just below it:"]}),"\n",(0,M.jsx)(e.pre,{children:(0,M.jsx)(e.code,{className:"language-tsx",metastring:'title="src/theme/BlogPostItem/index.tsx"',children:'import useIsBrowser from "@docusaurus/useIsBrowser";\nimport GiscusComments from "@site/src/components/GiscusComments";\nimport BlogPostItem from "@theme-original/BlogPostItem";\nimport React from "react";\n\nconst POST_REGEX = /^\\/blog\\/.+$/;\n\nexport default function BlogPostItemWrapper(props) {\n\tconst isBrowser = useIsBrowser();\n\n\treturn (\n\t\t<>\n\t\t\t<BlogPostItem {...props} />\n\n\t\t\t{isBrowser && window.location.pathname.match(POST_REGEX) && (\n\t\t\t\t<>\n\t\t\t\t\t<div style={{ marginTop: "32px" }} />\n\n\t\t\t\t\t<GiscusComments />\n\n\t\t\t\t\t<div style={{ marginTop: "-24px" }} />\n\t\t\t\t</>\n\t\t\t)}\n\t\t</>\n\t);\n}\n'})}),"\n",(0,M.jsx)(e.admonition,{title:"Details",type:"tip",children:(0,M.jsxs)(e.ul,{children:["\n",(0,M.jsxs)(e.li,{children:["We check that the ",(0,M.jsx)(e.code,{children:"pathname"})," matches ",(0,M.jsx)(e.code,{children:"/blog/..."})," to not show the Giscus component below all the posts on the main listing page (",(0,M.jsx)(e.code,{children:"/blog"}),")."]}),"\n",(0,M.jsxs)(e.li,{children:[(0,M.jsx)(e.code,{children:"isBrowser"})," is to prevent evaluating ",(0,M.jsx)(e.code,{children:"window"})," at build time, which would creates an error."]}),"\n"]})}),"\n",(0,M.jsxs)(e.p,{children:["Last thing, to be done once your local testing is finish, is to add a file ",(0,M.jsx)(e.code,{children:"giscus.json"})," at the root of the repository to ",(0,M.jsx)(e.a,{href:"https://github.com/giscus/giscus/blob/main/ADVANCED-USAGE.md#giscusjson",children:"prevent other websites from showing your discussions"}),":"]}),"\n",(0,M.jsx)(e.pre,{children:(0,M.jsx)(e.code,{className:"language-json",metastring:'title="giscus.json"',children:'{\n\t"origins": ["https://<your-domain>"]\n}\n'})}),"\n",(0,M.jsxs)(e.p,{children:["Giscus will stop showing on your ",(0,M.jsx)(e.code,{children:"localhost:3000"})," after this file is committed."]}),"\n",(0,M.jsx)(e.h3,{id:"automatically-deploy-to-github-pages-netlify-etc",children:"Automatically deploy to GitHub Pages, Netlify, etc."}),"\n",(0,M.jsxs)(e.p,{children:["The site is deployed on very push to the ",(0,M.jsx)(e.code,{children:"main"})," branch. The ",(0,M.jsx)(e.a,{href:"https://github.com/Zwyx/zwyx.dev/blob/main/.github/workflows/build-website.yml",children:"code"})," should be self-explanatory with enough knowledge on ",(0,M.jsx)(e.a,{href:"https://docs.github.com/en/actions",children:"GitHub Actions"})," and ",(0,M.jsx)(e.a,{href:"https://docs.github.com/en/pages",children:"GitHub Pages"}),"."]})]})}function g(t={}){const{wrapper:e}={...(0,n.R)(),...t.components};return e?(0,M.jsx)(e,{...t,children:(0,M.jsx)(r,{...t})}):r(t)}},2734:(t,e,i)=>{i.d(e,{A:()=>s});const s=i.p+"assets/images/docusaurus-029d61df194e80bc00052c76611f0eba.svg"},4649:(t,e,i)=>{i.d(e,{A:()=>s});const s="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjRkZGIiBkPSJNOTkgNTJoODR2MzRIOTl6Ii8+PHBhdGggZD0iTTIzIDE2M2MtNy4zOTggMC0xMy44NDMtNC4wMjctMTcuMzAzLTEwQTE5Ljg4NiAxOS44ODYgMCAwIDAgMyAxNjNjMCAxMS4wNDYgOC45NTQgMjAgMjAgMjBoMjB2LTIwSDIzeiIgZmlsbD0iIzNFQ0M1RiIvPjxwYXRoIGQ9Ik0xMTIuOTggNTcuMzc2TDE4MyA1M1Y0M2MwLTExLjA0Ni04Ljk1NC0yMC0yMC0yMEg3M2wtMi41LTQuMzNjLTEuMTEyLTEuOTI1LTMuODg5LTEuOTI1LTUgMEw2MyAyM2wtMi41LTQuMzNjLTEuMTExLTEuOTI1LTMuODg5LTEuOTI1LTUgMEw1MyAyM2wtMi41LTQuMzNjLTEuMTExLTEuOTI1LTMuODg5LTEuOTI1LTUgMEw0MyAyM2MtLjAyMiAwLS4wNDIuMDAzLS4wNjUuMDAzbC00LjE0Mi00LjE0MWMtMS41Ny0xLjU3MS00LjI1Mi0uODUzLTQuODI4IDEuMjk0bC0xLjM2OSA1LjEwNC01LjE5Mi0xLjM5MmMtMi4xNDgtLjU3NS00LjExMSAxLjM4OS0zLjUzNSAzLjUzNmwxLjM5IDUuMTkzLTUuMTAyIDEuMzY3Yy0yLjE0OC41NzYtMi44NjcgMy4yNTktMS4yOTYgNC44M2w0LjE0MiA0LjE0MmMwIC4wMjEtLjAwMy4wNDItLjAwMy4wNjRsLTQuMzMgMi41Yy0xLjkyNSAxLjExMS0xLjkyNSAzLjg4OSAwIDVMMjMgNTNsLTQuMzMgMi41Yy0xLjkyNSAxLjExMS0xLjkyNSAzLjg4OSAwIDVMMjMgNjNsLTQuMzMgMi41Yy0xLjkyNSAxLjExMS0xLjkyNSAzLjg4OSAwIDVMMjMgNzNsLTQuMzMgMi41Yy0xLjkyNSAxLjExMS0xLjkyNSAzLjg4OSAwIDVMMjMgODNsLTQuMzMgMi41Yy0xLjkyNSAxLjExMS0xLjkyNSAzLjg4OSAwIDVMMjMgOTNsLTQuMzMgMi41Yy0xLjkyNSAxLjExMS0xLjkyNSAzLjg4OSAwIDVMMjMgMTAzbC00LjMzIDIuNWMtMS45MjUgMS4xMTEtMS45MjUgMy44ODkgMCA1TDIzIDExM2wtNC4zMyAyLjVjLTEuOTI1IDEuMTExLTEuOTI1IDMuODg5IDAgNUwyMyAxMjNsLTQuMzMgMi41Yy0xLjkyNSAxLjExMS0xLjkyNSAzLjg4OSAwIDVMMjMgMTMzbC00LjMzIDIuNWMtMS45MjUgMS4xMTEtMS45MjUgMy44ODkgMCA1TDIzIDE0M2wtNC4zMyAyLjVjLTEuOTI1IDEuMTExLTEuOTI1IDMuODg5IDAgNUwyMyAxNTNsLTQuMzMgMi41Yy0xLjkyNSAxLjExMS0xLjkyNSAzLjg4OSAwIDVMMjMgMTYzYzAgMTEuMDQ2IDguOTU0IDIwIDIwIDIwaDEyMGMxMS4wNDYgMCAyMC04Ljk1NCAyMC0yMFY4M2wtNzAuMDItNC4zNzZBMTAuNjQ1IDEwLjY0NSAwIDAgMSAxMDMgNjhjMC01LjYyMSA0LjM3LTEwLjI3MyA5Ljk4LTEwLjYyNCIgZmlsbD0iIzNFQ0M1RiIvPjxwYXRoIGZpbGw9IiMzRUNDNUYiIGQ9Ik0xNDMgMTgzaDMwdi00MGgtMzB6Ii8+PHBhdGggZD0iTTE5MyAxNThjLS4yMTkgMC0uNDI4LjAzNy0uNjM5LjA2NC0uMDM4LS4xNS0uMDc0LS4zMDEtLjExNi0uNDUxQTUgNSAwIDAgMCAxOTAuMzIgMTQ4YTQuOTYgNC45NiAwIDAgMC0zLjAxNiAxLjAzNiAyNi41MzEgMjYuNTMxIDAgMCAwLS4zMzUtLjMzNiA0Ljk1NSA0Ljk1NSAwIDAgMCAxLjAxMS0yLjk4NyA1IDUgMCAwIDAtOS41OTktMS45NTljLS4xNDgtLjA0Mi0uMjk3LS4wNzctLjQ0NS0uMTE1LjAyNy0uMjExLjA2NC0uNDIuMDY0LS42MzlhNSA1IDAgMCAwLTUtNSA1IDUgMCAwIDAtNSA1YzAgLjIxOS4wMzcuNDI4LjA2NC42MzktLjE0OC4wMzgtLjI5Ny4wNzMtLjQ0NS4xMTVhNC45OTggNC45OTggMCAwIDAtOS41OTkgMS45NTljMCAxLjEyNS4zODQgMi4xNTEgMS4wMTEgMi45ODctMy43MTcgMy42MzItNi4wMzEgOC42OTMtNi4wMzEgMTQuMyAwIDExLjA0NiA4Ljk1NCAyMCAyMCAyMCA5LjMzOSAwIDE3LjE2LTYuNDEgMTkuMzYxLTE1LjA2NC4yMTEuMDI3LjQyLjA2NC42MzkuMDY0YTUgNSAwIDAgMCA1LTUgNSA1IDAgMCAwLTUtNSIgZmlsbD0iIzQ0RDg2MCIvPjxwYXRoIGZpbGw9IiMzRUNDNUYiIGQ9Ik0xNTMgMTIzaDMwdi0yMGgtMzB6Ii8+PHBhdGggZD0iTTE5MyAxMTUuNWEyLjUgMi41IDAgMSAwIDAtNWMtLjEwOSAwLS4yMTQuMDE5LS4zMTkuMDMyLS4wMi0uMDc1LS4wMzctLjE1LS4wNTgtLjIyNWEyLjUwMSAyLjUwMSAwIDAgMC0uOTYzLTQuODA3Yy0uNTY5IDAtMS4wODguMTk3LTEuNTA4LjUxOGE2LjY1MyA2LjY1MyAwIDAgMC0uMTY4LS4xNjhjLjMxNC0uNDE3LjUwNi0uOTMxLjUwNi0xLjQ5NGEyLjUgMi41IDAgMCAwLTQuOC0uOTc5QTkuOTg3IDkuOTg3IDAgMCAwIDE4MyAxMDNjLTUuNTIyIDAtMTAgNC40NzgtMTAgMTBzNC40NzggMTAgMTAgMTBjLjkzNCAwIDEuODMzLS4xMzggMi42OS0uMzc3YTIuNSAyLjUgMCAwIDAgNC44LS45NzljMC0uNTYzLS4xOTItMS4wNzctLjUwNi0xLjQ5NC4wNTctLjA1NS4xMTMtLjExMS4xNjgtLjE2OC40Mi4zMjEuOTM5LjUxOCAxLjUwOC41MThhMi41IDIuNSAwIDAgMCAuOTYzLTQuODA3Yy4wMjEtLjA3NC4wMzgtLjE1LjA1OC0uMjI1LjEwNS4wMTMuMjEuMDMyLjMxOS4wMzIiIGZpbGw9IiM0NEQ4NjAiLz48cGF0aCBkPSJNNjMgNTUuNWEyLjUgMi41IDAgMCAxLTIuNS0yLjVjMC00LjEzNi0zLjM2NC03LjUtNy41LTcuNXMtNy41IDMuMzY0LTcuNSA3LjVhMi41IDIuNSAwIDEgMS01IDBjMC02Ljg5MyA1LjYwNy0xMi41IDEyLjUtMTIuNVM2NS41IDQ2LjEwNyA2NS41IDUzYTIuNSAyLjUgMCAwIDEtMi41IDIuNSIgZmlsbD0iIzAwMCIvPjxwYXRoIGQ9Ik0xMDMgMTgzaDYwYzExLjA0NiAwIDIwLTguOTU0IDIwLTIwVjkzaC02MGMtMTEuMDQ2IDAtMjAgOC45NTQtMjAgMjB2NzB6IiBmaWxsPSIjRkZGRjUwIi8+PHBhdGggZD0iTTE2OC4wMiAxMjRoLTUwLjA0YTEgMSAwIDEgMSAwLTJoNTAuMDRhMSAxIDAgMSAxIDAgMm0wIDIwaC01MC4wNGExIDEgMCAxIDEgMC0yaDUwLjA0YTEgMSAwIDEgMSAwIDJtMCAyMGgtNTAuMDRhMSAxIDAgMSAxIDAtMmg1MC4wNGExIDEgMCAxIDEgMCAybTAtNDkuODE0aC01MC4wNGExIDEgMCAxIDEgMC0yaDUwLjA0YTEgMSAwIDEgMSAwIDJtMCAxOS44MTRoLTUwLjA0YTEgMSAwIDEgMSAwLTJoNTAuMDRhMSAxIDAgMSAxIDAgMm0wIDIwaC01MC4wNGExIDEgMCAxIDEgMC0yaDUwLjA0YTEgMSAwIDEgMSAwIDJNMTgzIDYxLjYxMWMtLjAxMiAwLS4wMjItLjAwNi0uMDM0LS4wMDUtMy4wOS4xMDUtNC41NTIgMy4xOTYtNS44NDIgNS45MjMtMS4zNDYgMi44NS0yLjM4NyA0LjcwMy00LjA5MyA0LjY0Ny0xLjg4OS0uMDY4LTIuOTY5LTIuMjAyLTQuMTEzLTQuNDYtMS4zMTQtMi41OTQtMi44MTQtNS41MzYtNS45NjMtNS40MjYtMy4wNDYuMTA0LTQuNTEzIDIuNzk0LTUuODA3IDUuMTY3LTEuMzc3IDIuNTI4LTIuMzE0IDQuMDY1LTQuMTIxIDMuOTk0LTEuOTI3LS4wNy0yLjk1MS0xLjgwNS00LjEzNi0zLjgxMy0xLjMyMS0yLjIzNi0yLjg0OC00Ljc1LTUuOTM2LTQuNjY0LTIuOTk0LjEwMy00LjQ2NSAyLjM4NS01Ljc2MyA0LjQtMS4zNzMgMi4xMy0yLjMzNSAzLjQyOC00LjE2NSAzLjM1MS0xLjk3My0uMDctMi45OTItMS41MS00LjE3MS0zLjE3Ny0xLjMyNC0xLjg3My0yLjgxNi0zLjk5My01Ljg5NS0zLjg5LTIuOTI4LjEtNC4zOTkgMS45Ny01LjY5NiAzLjYxOC0xLjIzMiAxLjU2NC0yLjE5NCAyLjgwMi00LjIyOSAyLjcyNGExIDEgMCAwIDAtLjA3MiAyYzMuMDE3LjEwMSA0LjU0NS0xLjggNS44NzItMy40ODcgMS4xNzctMS40OTYgMi4xOTMtMi43ODcgNC4xOTMtMi44NTUgMS45MjYtLjA4MiAyLjgyOSAxLjExNSA0LjE5NSAzLjA0NSAxLjI5NyAxLjgzNCAyLjc2OSAzLjkxNCA1LjczMSA0LjAyMSAzLjEwMy4xMDQgNC41OTYtMi4yMTUgNS45MTgtNC4yNjcgMS4xODItMS44MzQgMi4yMDItMy40MTcgNC4xNS0zLjQ4NCAxLjc5My0uMDY3IDIuNzY5IDEuMzUgNC4xNDUgMy42ODEgMS4yOTcgMi4xOTcgMi43NjYgNC42ODYgNS43ODcgNC43OTYgMy4xMjUuMTA4IDQuNjM0LTIuNjIgNS45NDktNS4wMzUgMS4xMzktMi4wODggMi4yMTQtNC4wNiA0LjExOS00LjEyNiAxLjc5My0uMDQyIDIuNzI4IDEuNTk1IDQuMTExIDQuMzMgMS4yOTIgMi41NTMgMi43NTcgNS40NDUgNS44MjUgNS41NTZsLjE2OS4wMDNjMy4wNjQgMCA0LjUxOC0zLjA3NSA1LjgwNS01Ljc5NCAxLjEzOS0yLjQxIDIuMjE3LTQuNjggNC4wNjctNC43NzN2LTJ6IiBmaWxsPSIjMDAwIi8+PHBhdGggZmlsbD0iIzNFQ0M1RiIgZD0iTTgzIDE4M2g0MHYtNDBIODN6Ii8+PHBhdGggZD0iTTE0MyAxNThjLS4yMTkgMC0uNDI4LjAzNy0uNjM5LjA2NC0uMDM4LS4xNS0uMDc0LS4zMDEtLjExNi0uNDUxQTUgNSAwIDAgMCAxNDAuMzIgMTQ4YTQuOTYgNC45NiAwIDAgMC0zLjAxNiAxLjAzNiAyNi41MzEgMjYuNTMxIDAgMCAwLS4zMzUtLjMzNiA0Ljk1NSA0Ljk1NSAwIDAgMCAxLjAxMS0yLjk4NyA1IDUgMCAwIDAtOS41OTktMS45NTljLS4xNDgtLjA0Mi0uMjk3LS4wNzctLjQ0NS0uMTE1LjAyNy0uMjExLjA2NC0uNDIuMDY0LS42MzlhNSA1IDAgMCAwLTUtNSA1IDUgMCAwIDAtNSA1YzAgLjIxOS4wMzcuNDI4LjA2NC42MzktLjE0OC4wMzgtLjI5Ny4wNzMtLjQ0NS4xMTVhNC45OTggNC45OTggMCAwIDAtOS41OTkgMS45NTljMCAxLjEyNS4zODQgMi4xNTEgMS4wMTEgMi45ODctMy43MTcgMy42MzItNi4wMzEgOC42OTMtNi4wMzEgMTQuMyAwIDExLjA0NiA4Ljk1NCAyMCAyMCAyMCA5LjMzOSAwIDE3LjE2LTYuNDEgMTkuMzYxLTE1LjA2NC4yMTEuMDI3LjQyLjA2NC42MzkuMDY0YTUgNSAwIDAgMCA1LTUgNSA1IDAgMCAwLTUtNSIgZmlsbD0iIzQ0RDg2MCIvPjxwYXRoIGZpbGw9IiMzRUNDNUYiIGQ9Ik04MyAxMjNoNDB2LTIwSDgzeiIvPjxwYXRoIGQ9Ik0xMzMgMTE1LjVhMi41IDIuNSAwIDEgMCAwLTVjLS4xMDkgMC0uMjE0LjAxOS0uMzE5LjAzMi0uMDItLjA3NS0uMDM3LS4xNS0uMDU4LS4yMjVhMi41MDEgMi41MDEgMCAwIDAtLjk2My00LjgwN2MtLjU2OSAwLTEuMDg4LjE5Ny0xLjUwOC41MThhNi42NTMgNi42NTMgMCAwIDAtLjE2OC0uMTY4Yy4zMTQtLjQxNy41MDYtLjkzMS41MDYtMS40OTRhMi41IDIuNSAwIDAgMC00LjgtLjk3OUE5Ljk4NyA5Ljk4NyAwIDAgMCAxMjMgMTAzYy01LjUyMiAwLTEwIDQuNDc4LTEwIDEwczQuNDc4IDEwIDEwIDEwYy45MzQgMCAxLjgzMy0uMTM4IDIuNjktLjM3N2EyLjUgMi41IDAgMCAwIDQuOC0uOTc5YzAtLjU2My0uMTkyLTEuMDc3LS41MDYtMS40OTQuMDU3LS4wNTUuMTEzLS4xMTEuMTY4LS4xNjguNDIuMzIxLjkzOS41MTggMS41MDguNTE4YTIuNSAyLjUgMCAwIDAgLjk2My00LjgwN2MuMDIxLS4wNzQuMDM4LS4xNS4wNTgtLjIyNS4xMDUuMDEzLjIxLjAzMi4zMTkuMDMyIiBmaWxsPSIjNDREODYwIi8+PHBhdGggZD0iTTE0MyA0MS43NWMtLjE2IDAtLjMzLS4wMi0uNDktLjA1YTIuNTIgMi41MiAwIDAgMS0uNDctLjE0Yy0uMTUtLjA2LS4yOS0uMTQtLjQzMS0uMjMtLjEzLS4wOS0uMjU5LS4yLS4zOC0uMzEtLjEwOS0uMTItLjIxOS0uMjQtLjMwOS0uMzhzLS4xNy0uMjgtLjIzMS0uNDNhMi42MTkgMi42MTkgMCAwIDEtLjE4OS0uOTZjMC0uMTYuMDItLjMzLjA1LS40OS4wMy0uMTYuMDgtLjMxLjEzOS0uNDcuMDYxLS4xNS4xNDEtLjI5LjIzMS0uNDMuMDktLjEzLjItLjI2LjMwOS0uMzguMTIxLS4xMS4yNS0uMjIuMzgtLjMxLjE0MS0uMDkuMjgxLS4xNy40MzEtLjIzLjE0OS0uMDYuMzEtLjExLjQ3LS4xNC4zMi0uMDcuNjUtLjA3Ljk4IDAgLjE1OS4wMy4zMi4wOC40Ny4xNC4xNDkuMDYuMjkuMTQuNDMuMjMuMTMuMDkuMjU5LjIuMzguMzEuMTEuMTIuMjIuMjUuMzEuMzguMDkuMTQuMTcuMjguMjMuNDMuMDYuMTYuMTEuMzEuMTQuNDcuMDI5LjE2LjA1LjMzLjA1LjQ5IDAgLjY2LS4yNzEgMS4zMS0uNzMgMS43Ny0uMTIxLjExLS4yNS4yMi0uMzguMzEtLjE0LjA5LS4yODEuMTctLjQzLjIzYTIuNTY1IDIuNTY1IDAgMCAxLS45Ni4xOW0yMC0xLjI1Yy0uNjYgMC0xLjMtLjI3LTEuNzcxLS43M2EzLjgwMiAzLjgwMiAwIDAgMS0uMzA5LS4zOGMtLjA5LS4xNC0uMTctLjI4LS4yMzEtLjQzYTIuNjE5IDIuNjE5IDAgMCAxLS4xODktLjk2YzAtLjY2LjI3LTEuMy43MjktMS43Ny4xMjEtLjExLjI1LS4yMi4zOC0uMzEuMTQxLS4wOS4yODEtLjE3LjQzMS0uMjMuMTQ5LS4wNi4zMS0uMTEuNDctLjE0LjMyLS4wNy42Ni0uMDcuOTggMCAuMTU5LjAzLjMyLjA4LjQ3LjE0LjE0OS4wNi4yOS4xNC40My4yMy4xMy4wOS4yNTkuMi4zOC4zMS40NTkuNDcuNzMgMS4xMS43MyAxLjc3IDAgLjE2LS4wMjEuMzMtLjA1LjQ5LS4wMy4xNi0uMDguMzItLjE0LjQ3LS4wNy4xNS0uMTQuMjktLjIzLjQzLS4wOS4xMy0uMi4yNi0uMzEuMzgtLjEyMS4xMS0uMjUuMjItLjM4LjMxLS4xNC4wOS0uMjgxLjE3LS40My4yM2EyLjU2NSAyLjU2NSAwIDAgMS0uOTYuMTkiIGZpbGw9IiMwMDAiLz48L2c+PC9zdmc+"},8453:(t,e,i)=>{i.d(e,{R:()=>o,x:()=>u});var s=i(6540);const M={},n=s.createContext(M);function o(t){const e=s.useContext(n);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function u(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(M):t.components||M:o(t.components),s.createElement(n.Provider,{value:e},t.children)}},3808:t=>{t.exports=JSON.parse('{"permalink":"/blog/hello-docusaurus","editUrl":"https://github.com/zwyx/zwyx.dev/tree/master/blog/2022-11-22-hello-docusaurus/index.mdx","source":"@site/blog/2022-11-22-hello-docusaurus/index.mdx","title":"Hello Docusaurus!","description":"A few tips on how I built this site with the great static site generator Docusaurus","date":"2022-11-22T00:00:00.000Z","tags":[{"inline":true,"label":"docusaurus","permalink":"/blog/tags/docusaurus"},{"inline":true,"label":"static site generator","permalink":"/blog/tags/static-site-generator"},{"inline":true,"label":"blog","permalink":"/blog/tags/blog"}],"readingTime":5.31,"hasTruncateMarker":true,"authors":[{"name":"Alex","title":"Web developer","email":"alex@zwyx.dev","url":"https://github.com/Zwyx","imageURL":"https://github.com/zwyx.png","key":"alex","page":null}],"frontMatter":{"slug":"hello-docusaurus","title":"Hello Docusaurus!","description":"A few tips on how I built this site with the great static site generator Docusaurus","image":"./docusaurus.svg","authors":["alex"],"tags":["docusaurus","static site generator","blog"]},"unlisted":false,"prevItem":{"title":"Indentation for accessibility","permalink":"/blog/indentation-for-accessibility"},"nextItem":{"title":"Git Hash Miner: mine your commit hashes!","permalink":"/blog/git-hash-miner"}}')}}]);