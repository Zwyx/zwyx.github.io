"use strict";(self.webpackChunkzwyx_dev=self.webpackChunkzwyx_dev||[]).push([[3735],{2509:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>t,toc:()=>h});var t=n(2647),o=n(4848),r=n(8453),s=n(4341),a=n(1076);const l={slug:"your-dotfiles-in-a-git-repo",title:"Your dotfiles in a Git repo",description:"Track changes to your config files using a Git repository.",image:"./gears-unsplash-xRDuEeG1TVI.webp",authors:["alex"],tags:["dotfiles","git"]},c=void 0,d={image:n(6442).A,authorsImageUrls:[void 0]},h=[{value:"Dotfiles",id:"dotfiles",level:2},{value:"Using Git to track them",id:"using-git-to-track-them",level:2},{value:"1. Create hard links or symlinks",id:"1-create-hard-links-or-symlinks",level:3},{value:"2. Make your home directory the root of your Git config repository, and add only the files you want to track",id:"2-make-your-home-directory-the-root-of-your-git-config-repository-and-add-only-the-files-you-want-to-track",level:3},{value:"3. Use a bare Git repository and set its worktree to your home directory",id:"3-use-a-bare-git-repository-and-set-its-worktree-to-your-home-directory",level:3},{value:"Setup",id:"setup",level:2},{value:"Usage",id:"usage",level:2},{value:"Adding files to the config",id:"adding-files-to-the-config",level:3},{value:"Untrack files from the config",id:"untrack-files-from-the-config",level:3},{value:"Commit, push, etc.",id:"commit-push-etc",level:3},{value:"Set up a Cron task",id:"set-up-a-cron-task",level:3},{value:"Special cases",id:"special-cases",level:2},{value:"Tracking files from other Git repositories",id:"tracking-files-from-other-git-repositories",level:3},{value:"Sublime Merge users",id:"sublime-merge-users",level:3}];function u(e){const i={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s._,{src:a.A,alt:"Gears"}),"\n",(0,o.jsx)(i.p,{children:"Track changes in your config files using a Git repository."}),"\n","\n",(0,o.jsx)(i.hr,{}),"\n",(0,o.jsx)(i.h2,{id:"dotfiles",children:"Dotfiles"}),"\n",(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.em,{children:"Dotfiles"})," is the name given to the tiny text files containing the configuration for a piece of software. They're often placed in the your home directory and start with a dot to be hidable. We'll not limit ourselves to strictly dotfiles in this article though, what we'll do apply to any configuration file."]}),"\n",(0,o.jsxs)(i.p,{children:['Backing up these files and track changes to them is a good idea. It will be useful if you have to reinstall your system or set up a new machine, and, probably more often, you can restore your configuration if the corresponding software blows a gasket. It can happened with VS Code and its feature "Settings Sync" for instance: I was using VS Code on my machine and on ',(0,o.jsx)(i.a,{href:"https://github.dev/",children:"GitHub.dev"}),", and settings got messed up. Thanks to the fact that my VS Code's config is tracked in Git, I just had to discard the current changes to have my config back."]}),"\n",(0,o.jsx)(i.h2,{id:"using-git-to-track-them",children:"Using Git to track them"}),"\n",(0,o.jsx)(i.p,{children:"Git is the first choice to track changes in text files. However, all these config are in different places on the file system."}),"\n",(0,o.jsx)(i.p,{children:"So how to gather them in one Git repository? There are a few methods:"}),"\n",(0,o.jsx)(i.h3,{id:"1-create-hard-links-or-symlinks",children:"1. Create hard links or symlinks"}),"\n",(0,o.jsx)(i.p,{children:"This method is a pain: creating all the links is cumbersome. Also, some software delete and recreate their configuration files instead of modifying them, which breaks the links without us noticing it."}),"\n",(0,o.jsx)(i.h3,{id:"2-make-your-home-directory-the-root-of-your-git-config-repository-and-add-only-the-files-you-want-to-track",children:"2. Make your home directory the root of your Git config repository, and add only the files you want to track"}),"\n",(0,o.jsx)(i.p,{children:"This isn't recommended if you have other Git repositories anywhere in your home directory, as there would be a risk of interference."}),"\n",(0,o.jsx)(i.h3,{id:"3-use-a-bare-git-repository-and-set-its-worktree-to-your-home-directory",children:"3. Use a bare Git repository and set its worktree to your home directory"}),"\n",(0,o.jsx)(i.p,{children:"The idea is to create a bare repository \u2014 which is simply a Git repository without a work tree \u2014 and then set its worktree to your home directory."}),"\n",(0,o.jsxs)(i.blockquote,{children:["\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.em,{children:"How is this different from method 2?"})}),"\n",(0,o.jsxs)(i.p,{children:["Nothing shows that the home folder is the root of a repo. ",(0,o.jsx)(i.code,{children:"git"}),", run in your home folder, will not see it as a repository, so has no risk of interfering with other repos present in your home folder."]}),"\n"]}),"\n",(0,o.jsxs)(i.blockquote,{children:["\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.em,{children:"If we set the worktree of the bare repository... then it's not bare anymore!"})}),"\n",(0,o.jsx)(i.p,{children:"Indeed. This method is known as the \"bare repo method\", but it might just be in order to avoid confusion with method 2. We actually don't need a bare repo, we just need to change the location of a repo's worktree. Don't be confused by this, or worried that it's too complex."}),"\n"]}),"\n",(0,o.jsx)(i.p,{children:"This article is about setting up this method."}),"\n",(0,o.jsx)(i.admonition,{type:"info",children:(0,o.jsxs)(i.p,{children:["If you're not keen to set this up yourself, or would like to have advanced features, have a look at existing dotfile managers. There are ",(0,o.jsx)(i.a,{href:"https://dotfiles.github.io/utilities/",children:"plenty"}),", and ",(0,o.jsx)(i.a,{href:"https://www.chezmoi.io/",children:"chezmoi"})," seems to have become a reference in recent years."]})}),"\n",(0,o.jsx)(i.h2,{id:"setup",children:"Setup"}),"\n",(0,o.jsx)(i.admonition,{type:"caution",children:(0,o.jsx)(i.p,{children:"Please read carefully and only execute commands that you fully understand. Wrong Git commands executed anywhere in your home directory could lead to a loss of data."})}),"\n",(0,o.jsx)(i.p,{children:"Start by creating a bare repository:"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-bash",children:"git init --bare ~/my-config\n"})}),"\n",(0,o.jsxs)(i.p,{children:["The folder ",(0,o.jsx)(i.code,{children:"~/my-config"})," now contains the config repository. Now we want to set its worktree to be the home directory (replace ",(0,o.jsx)(i.code,{children:"<your-name>"})," in the block below):"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-bash",children:"cd ~/my-config\ngit config --unset core.bare\ngit config core.worktree '/home/<your-name>'\ngit config status.showUntrackedFiles no\n"})}),"\n",(0,o.jsxs)(i.p,{children:["The file ",(0,o.jsx)(i.code,{children:"~/my-config/config"})," should look like this:"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-ini",children:"[core]\n\trepositoryformatversion = 0\n\tfilemode = true\n\tworktree = /home/<your-name>\n[status]\n\tshowUntrackedFiles = no\n"})}),"\n",(0,o.jsxs)(i.p,{children:["Let's add two functions in your ",(0,o.jsx)(i.code,{children:".zshrc"})," (or equivalent) to easily add and untrack config files:"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-bash",children:'# We use functions instead of aliases to have folder and file name completion\nconfig-add() {\n\tgit --git-dir="$HOME/repo/config/.git-bare" add -f $@\n}\nconfig-untrack() {\n\tgit --git-dir="$HOME/repo/config/.git-bare" rm --cached $@\n}\n'})}),"\n",(0,o.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(i.h3,{id:"adding-files-to-the-config",children:"Adding files to the config"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-bash",children:"config-add .zshrc\n"})}),"\n",(0,o.jsx)(i.h3,{id:"untrack-files-from-the-config",children:"Untrack files from the config"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-bash",children:"config-untrack .zshrc\n"})}),"\n",(0,o.jsx)(i.h3,{id:"commit-push-etc",children:"Commit, push, etc."}),"\n",(0,o.jsx)(i.admonition,{type:"danger",children:(0,o.jsxs)(i.p,{children:["Execute regular git commands in your config repository \u2014 ",(0,o.jsx)(i.code,{children:"git add"}),", ",(0,o.jsx)(i.code,{children:"git commit"}),", ",(0,o.jsx)(i.code,{children:"git push"}),", etc. ",(0,o.jsx)(i.strong,{children:"HOWEVER"}),", be very careful: commands like ",(0,o.jsx)(i.code,{children:"git clean"})," could delete every untracked files from the home directory!"]})}),"\n",(0,o.jsx)(i.p,{children:"That's it. Your config files are tracked in a git repo. Keep reading for a few more tips."}),"\n",(0,o.jsx)(i.h3,{id:"set-up-a-cron-task",children:"Set up a Cron task"}),"\n",(0,o.jsx)(i.p,{children:"You can create a cron job that commits and pushes your config once a week:"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"create a script containing:"}),"\n"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-bash",children:'cd "$HOME/my-config"\ngit add -A\ngit commit -a -m "Weekly commit"\ngit push\n'})}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"run:"}),"\n"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-bash",children:"crontab -e\n"})}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"and append:"}),"\n"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{children:"30 12 * * 5 <path-to-script>\n"})}),"\n",(0,o.jsxs)(i.p,{children:["You can also add other useful tasks in the script, just before the the three ",(0,o.jsx)(i.code,{children:"git"})," commands. For instance:"]}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.code,{children:"code --list-extensions > ~/.config/vscode-extensions.txt"})}),"\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.code,{children:"dconf dump / > ~/.config/dconf.ini"})}),"\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.code,{children:"crontab -l > ~/.config/crontab.txt"})}),"\n"]}),"\n",(0,o.jsx)(i.h2,{id:"special-cases",children:"Special cases"}),"\n",(0,o.jsx)(i.h3,{id:"tracking-files-from-other-git-repositories",children:"Tracking files from other Git repositories"}),"\n",(0,o.jsx)(i.p,{children:"Adding files that are already present in another Git repository seems to be impossible."}),"\n",(0,o.jsxs)(i.p,{children:["For instance, I didn't find a way to add ",(0,o.jsx)(i.code,{children:"~/.nvm/default-packages"}),", because ",(0,o.jsx)(i.code,{children:"~/.nvm"})," is a Git repository."]}),"\n",(0,o.jsx)(i.p,{children:"So for this kind of file, I use the hard link method:"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-bash",children:"ln `~/.nvm/default-packages` `~/my-config/default-packages`\n"})}),"\n",(0,o.jsx)(i.h3,{id:"sublime-merge-users",children:"Sublime Merge users"}),"\n",(0,o.jsxs)(i.p,{children:["At the moment, Sublime Merge ",(0,o.jsxs)(i.a,{href:"https://github.com/sublimehq/sublime_merge/issues/1544",children:["ignores the property ",(0,o.jsx)(i.code,{children:"status.showUntrackedFiles"})]})," and will show all the untracked files of the home folder."]}),"\n",(0,o.jsxs)(i.p,{children:["To prevent this, it is possible to add a ",(0,o.jsx)(i.code,{children:".gitignore"})," in the repo's root folder. This ",(0,o.jsx)(i.code,{children:".gitignore"})," mainly needs to contain a ",(0,o.jsx)(i.code,{children:"*"}),', to hide all untracked files, although you can also "unhide" specific subfolders if you want your weekly commit to automatically includes new files from these folders.']}),"\n",(0,o.jsx)(i.p,{children:"Here's an example:"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-txt",metastring:"showLineNumbers",children:"/*\n\n!.gitignore\n\n!.config/Code\n.config/Code/*\n!.config/Code/User\n.config/Code/User/*\n!.config/Code/User/snippets\n"})}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"line 1: hide everything;"}),"\n",(0,o.jsxs)(i.li,{children:["line 3: unhide the file ",(0,o.jsx)(i.code,{children:".gitignore"}),";"]}),"\n",(0,o.jsxs)(i.li,{children:["line 5: unhide the folder ",(0,o.jsx)(i.code,{children:".config/Code"}),"..."]}),"\n",(0,o.jsx)(i.li,{children:"line 6: but hide everything inside this folder;"}),"\n",(0,o.jsxs)(i.li,{children:["line 7: unhide the folder ",(0,o.jsx)(i.code,{children:".config/Code/User"}),"..."]}),"\n",(0,o.jsx)(i.li,{children:"line 8: but hide everything inside this folder;"}),"\n",(0,o.jsxs)(i.li,{children:["line 9: unhide the folder ",(0,o.jsx)(i.code,{children:".config/Code/User/snippets"}),", so all files in this folder will be tracked in our config."]}),"\n"]}),"\n",(0,o.jsxs)(i.admonition,{type:"caution",children:[(0,o.jsxs)(i.p,{children:["This ",(0,o.jsx)(i.code,{children:".gitignore"})," file has a side effect on ",(0,o.jsx)(i.code,{children:"git checkout"}),". Indeed, usually, when cloning a repository and running ",(0,o.jsx)(i.code,{children:"git checkout"}),", if some files in the worktree are different than the ones in the repository, git displays the message ",(0,o.jsx)(i.code,{children:"error: The following untracked working tree files would be overwritten by checkout: ..."}),". But with this ",(0,o.jsx)(i.code,{children:".gitignore"})," in the home directory, ",(0,o.jsx)(i.code,{children:"git checkout"})," will simply override the files that are in the home directory by the ones from the repository. Without warning!"]}),(0,o.jsxs)(i.p,{children:["However, the point it to be able to use Sublime Merge, so we don't need ",(0,o.jsx)(i.code,{children:"git checkout"}),". We simply open the repository in Sublime Merge, keep the files we want, and we discard the others."]})]}),"\n",(0,o.jsxs)(i.p,{children:["Sublime Merge has another bug when working with a repository whose work tree isn't next to the repo itself: ",(0,o.jsx)(i.a,{href:"https://github.com/sublimehq/sublime_merge/issues/1670",children:"the corresponding tab isn't reopen correctly"}),". So, here's an alias to quickly open your config repo in Sublime Merge:"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-bash",children:'alias config-open-in-sublime-merge=\'"$HOME/.config/open-in-sublime-merge.sh" "$HOME/my-config"\'\n'})}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-bash",metastring:'title="open-in-sublime-merge.sh"',children:'#!/bin/bash\n\nif pgrep sublime_merge; then\n\tif [[ -d $1 ]]; then\n\t\t/opt/sublime_merge/sublime_merge "$1"\n\telse\n\t\t/opt/sublime_merge/sublime_merge "$(dirname "$1")"\n\tfi\nelse\n\txmessage "Start Sublime Merge before to prevent losing all open tabs."\nfi\n'})}),"\n",(0,o.jsxs)(i.p,{children:["As you can see, we check that ",(0,o.jsx)(i.code,{children:"sublime_merge"})," is already running before attempting to open the repository. This is because of ",(0,o.jsx)(i.a,{href:"https://github.com/sublimehq/sublime_merge/issues/309",children:"yet another bug in Sublime Merge"})," (at this point you might be wondering why I use this tool... I swear it's a great tool, altough it's definitely frustrating to be paying for a licence and barely receive any reply to the bug reports I create)."]})]})}function g(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},4341:(e,i,n)=>{n.d(i,{_:()=>u});var t=n(53);const o="imageWrapper_u91s",r="withLegend_q8O0",s="frame_zT4L",a="visible_KgQe",l="image_Y_cJ",c="legend_xj0V";var d=n(4848);const h=e=>{let{children:i}=e;return(0,d.jsx)("div",{className:c,children:i})},u=e=>{let{src:i,alt:n,width:c,height:u,withFrame:g,legend:f,borderRadius:m,children:p}=e;const x=f||p;return(0,d.jsxs)("div",{className:(0,t.A)(o,x&&r),children:[(0,d.jsx)("div",{style:{borderRadius:m},className:(0,t.A)(s,g&&a),children:(0,d.jsx)("img",{style:{borderRadius:m},className:l,src:i,alt:n||("string"==typeof x?x:""),width:c,height:u})}),x&&(0,d.jsx)(h,{children:x})]})}},53:(e,i,n)=>{function t(e){var i,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(i=0;i<e.length;i++)e[i]&&(n=t(e[i]))&&(o&&(o+=" "),o+=n);else for(i in e)e[i]&&(o&&(o+=" "),o+=i);return o}n.d(i,{A:()=>o});const o=function(){for(var e,i,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(i=t(e))&&(o&&(o+=" "),o+=i);return o}},6442:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/gears-unsplash-xRDuEeG1TVI-845693b4f819dad5a2b8c416aef8f540.webp"},1076:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/gears-unsplash-xRDuEeG1TVI-845693b4f819dad5a2b8c416aef8f540.webp"},8453:(e,i,n)=>{n.d(i,{R:()=>s,x:()=>a});var t=n(6540);const o={},r=t.createContext(o);function s(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:i},e.children)}},2647:e=>{e.exports=JSON.parse('{"permalink":"/blog/your-dotfiles-in-a-git-repo","editUrl":"https://github.com/zwyx/zwyx.dev/tree/master/blog/2023-04-02-your-dotfiles-in-a-git-repo/index.mdx","source":"@site/blog/2023-04-02-your-dotfiles-in-a-git-repo/index.mdx","title":"Your dotfiles in a Git repo","description":"Track changes to your config files using a Git repository.","date":"2023-04-02T00:00:00.000Z","tags":[{"inline":true,"label":"dotfiles","permalink":"/blog/tags/dotfiles"},{"inline":true,"label":"git","permalink":"/blog/tags/git"}],"readingTime":6.565,"hasTruncateMarker":true,"authors":[{"name":"Alex","title":"Web developer","email":"alex@zwyx.dev","url":"https://github.com/Zwyx","imageURL":"https://github.com/zwyx.png","key":"alex","page":null}],"frontMatter":{"slug":"your-dotfiles-in-a-git-repo","title":"Your dotfiles in a Git repo","description":"Track changes to your config files using a Git repository.","image":"./gears-unsplash-xRDuEeG1TVI.webp","authors":["alex"],"tags":["dotfiles","git"]},"unlisted":false,"prevItem":{"title":"All you need for a proper dark theme","permalink":"/blog/proper-dark-theme"},"nextItem":{"title":"Consolidate your contribution graph","permalink":"/blog/own-contribution-graph"}}')}}]);