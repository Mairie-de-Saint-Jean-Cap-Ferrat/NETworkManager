"use strict";(self.webpackChunknetworkmanager_docs=self.webpackChunknetworkmanager_docs||[]).push([[2587],{2696:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var o=r(5893),s=r(1151);const i={sidebar_position:972},t="2023.11.28.0",l={id:"changelog/2023-11-28-0",title:"2023.11.28.0",description:"Version: 2023.11.28.0",source:"@site/docs/changelog/2023-11-28-0.md",sourceDirName:"changelog",slug:"/changelog/2023-11-28-0",permalink:"/NETworkManager/docs/changelog/2023-11-28-0",draft:!1,unlisted:!1,editUrl:"https://github.com/bornToBeRoot/NETworkManager/tree/main/Website/docs/changelog/2023-11-28-0.md",tags:[],version:"current",sidebarPosition:972,frontMatter:{sidebar_position:972},sidebar:"docsSidebar",previous:{title:"Next Release",permalink:"/NETworkManager/docs/changelog/next-release"},next:{title:"Application",permalink:"/NETworkManager/docs/category/application"}},a={},h=[{value:"Breaking Changes",id:"breaking-changes",level:2},{value:"What&#39;s new?",id:"whats-new",level:2},{value:"Experimental features",id:"experimental-features",level:2},{value:"Improvements",id:"improvements",level:2},{value:"Bugfixes",id:"bugfixes",level:2},{value:"Cleanup, Refactoring &amp; Dependencies",id:"cleanup-refactoring--dependencies",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"202311280",children:"2023.11.28.0"}),"\n",(0,o.jsxs)(n.p,{children:["Version: ",(0,o.jsx)(n.strong,{children:"2023.11.28.0"}),(0,o.jsx)("br",{}),"\nRelease date: ",(0,o.jsx)(n.strong,{children:"28.11.2023"})]}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"File"}),(0,o.jsx)(n.th,{children:"Checksum [SHA256]"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/releases/download/2023.11.28.0/NETworkManager_2023.11.28.0_Setup.exe",children:"Setup"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"AD9D6E569BFA61F9657A6C823409E4D4B4B67CA4BD0CC5129CCBB0B673D5DF24"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/releases/download/2023.11.28.0/NETworkManager_2023.11.28.0_Portable.zip",children:"Portable"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"8D15ECE18013C07D806173E051FFA79406A6B5D6D00D1CD48F403C8BDBF7136F"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/releases/download/2023.11.28.0/NETworkManager_2023.11.28.0_Archive.zip",children:"Archive"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"39FAC00FBB16D6EFCC3AB571B42AE61C8789E500059F3ED893CE38BFA06CD189"})})]})]})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"System requirements"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Windows 10 / Server x64 (1809 or later)"}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://dotnet.microsoft.com/en-us/download/dotnet/8.0/runtime",children:".NET Desktop Runtime 8.0 (LTS) - x64"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"breaking-changes",children:"Breaking Changes"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Migrated from .NET 6.0 (LTS) to .NET 8.0 (LTS).\nUpgrade your ",(0,o.jsx)(n.a,{href:"https://dotnet.microsoft.com/en-us/download/dotnet/8.0/runtime",children:".NET Desktop Runtime to version 8.0 (LTS) - x64"})," before you install this version. ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2560",children:"#2560"})]}),"\n",(0,o.jsxs)(n.li,{children:["Settings will be reset to default values due to refactoring ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2483",children:"#2483"})]}),"\n",(0,o.jsxs)(n.li,{children:["Profiles and settings migration (indroduced in ",(0,o.jsx)(n.code,{children:"2023.3.7.0"}),") from ",(0,o.jsx)(n.code,{children:"%AppData%\\NETworkManager"})," to ",(0,o.jsx)(n.code,{children:"%UserProfile%\\Documents\\NETworkManager"})," removed. If you use a version before ",(0,o.jsx)(n.code,{children:"2023.3.7.0"})," you have to install and start version ",(0,o.jsx)(n.code,{children:"2023.6.27.1"})," before you install this version. ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2380",children:"#2380"})]}),"\n",(0,o.jsxs)(n.li,{children:["Remove profile migration script to migrate from ",(0,o.jsx)(n.code,{children:"2021.11.30.0"})," and before to a later version ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2388",children:"#2388"})]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"whats-new",children:"What's new?"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Dashboard","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Check IP geolocation added ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2392",children:"#2392"})]}),"\n",(0,o.jsxs)(n.li,{children:["Check DNS resolver added ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2392",children:"#2392"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Traceroute","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Check IP geolocation for each public IP address added. Feature can be enabled/disabled in settings ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2477",children:"#2477"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["IP Geolocation added ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2522",children:"#2522"})," (See ",(0,o.jsx)(n.a,{href:"https://borntoberoot.net/NETworkManager/Documentation/Application/IPGeolocation",children:"documentation"})," for more details)"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"experimental-features",children:"Experimental features"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Run command (HotKey: Ctrl+Shift+P) added. This feature allows you to open a command field to switch between applications and pass parameters to them."}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["Experimental features can be enabled in the settings under ",(0,o.jsx)(n.a,{href:"https://borntoberoot.net/NETworkManager/Documentation/Settings/Update#experimental-features",children:(0,o.jsx)(n.code,{children:"Settings > Update"})}),"."]})}),"\n",(0,o.jsx)(n.h2,{id:"improvements",children:"Improvements"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["WiFi","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["MAC address renamed to BSSID ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2483",children:"#2483"})]}),"\n",(0,o.jsxs)(n.li,{children:["Values of a WiFi network can now be copied to clipboard via right click context menu ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2483",children:"#2483"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["IP Scanner","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Row can now be expanded / collapsed via button on the left side. Row is no longer expanded when selecting a row ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2483",children:"#2483"})]}),"\n",(0,o.jsxs)(n.li,{children:["Timestamp added to view and export (export format has changed for ",(0,o.jsx)(n.code,{children:"csv"}),", ",(0,o.jsx)(n.code,{children:"json"})," and ",(0,o.jsx)(n.code,{children:"xml"}),") ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2483",children:"#2483"})]}),"\n",(0,o.jsxs)(n.li,{children:["Show status message if no reachable host was found ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2483",children:"#2483"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Port Scanner","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Show status message if no open port was found ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2483",children:"#2483"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["SNMP","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Error handling improved and SNMP v3 error codes (Auth failed, etc.) added ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2547",children:"#2547"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Lookup - Ports","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Search by port number and protocol (e.g. ",(0,o.jsx)(n.code,{children:"22/tcp"})," or ",(0,o.jsx)(n.code,{children:"161-162/udp"}),") added ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2483",children:"#2483"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Profiles","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Add unlock button to profile views ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2538",children:"#2538"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"bugfixes",children:"Bugfixes"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Dashboard","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["IPv6 API call fixed ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2522",children:"#2522"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Network Interface","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Add missing scrollviewer in configure tab ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2410",children:"#2410"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["WiFi","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Fix an issue where the UI was broken if a WiFi adapter was found that has no assiciated network interface (e.g. if the WiFi adapter is associated with a network bridge). The WiFi adapter is now ignored ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2483",children:"#2483"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Port Scanner","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Port profiles can now be sorted in the settings ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2522",children:"#2522"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Traceroute","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Copy time to clipboard for non reachable hops fixed ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2477",children:"#2477"})]}),"\n",(0,o.jsxs)(n.li,{children:["Export to Json fixed (if ip address of a hop cannot be resolved) ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2477",children:"#2477"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Ping","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Copy & Export time fixed (format is now ",(0,o.jsx)(n.code,{children:"yyyy-MM-dd HH:mm:ss.fff"}),") ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2483",children:"#2483"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["DNS Lookup","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Fix a bug where the suffix is not appended ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2483",children:"#2483"})]}),"\n",(0,o.jsxs)(n.li,{children:["Server can now be sorted in the settings ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2522",children:"#2522"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["AWS Session Manager","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Some history settings may not be saved ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2522",children:"#2522"})]}),"\n",(0,o.jsxs)(n.li,{children:["Profiles can now be sorted in the settings ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2522",children:"#2522"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["SNMP","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Allow ",(0,o.jsx)(n.code,{children:"."})," as first character in OID (e.g. ",(0,o.jsx)(n.code,{children:"1.3.6.1.2.1.1.1.0"}),") ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2483",children:"#2483"})]}),"\n",(0,o.jsxs)(n.li,{children:["SNMP profiles can now be sorted in the settings ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2522",children:"#2522"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["SNTP Lookup","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Copy & Export time fixed (format is now ",(0,o.jsx)(n.code,{children:"yyyy-MM-dd HH:mm:ss.fff"}),") ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2483",children:"#2483"})]}),"\n",(0,o.jsxs)(n.li,{children:["Server can now be sorted in the settings ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2522",children:"#2522"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Whois","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Allow domains with ",(0,o.jsx)(n.code,{children:"."})," at the end / improved domain validation ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2502",children:"#2502"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Lookup - OUI","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Don't show duplicate entries ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2483",children:"#2483"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Lookup - Ports","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Don't show duplicate entries ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2483",children:"#2483"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Profiles","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Prevent the application from crashing if a profile file cannot be loaded (profile management is then blocked) ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2464",children:"#2464"})]}),"\n",(0,o.jsxs)(n.li,{children:["Application name not translated ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2502",children:"#2502"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Settings","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Application name not translated ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2502",children:"#2502"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Allow hostnames and domains with ",(0,o.jsx)(n.code,{children:"."})," at the end / improved validation for several tools ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2502",children:"#2502"})]}),"\n",(0,o.jsxs)(n.li,{children:["Fix some focus issues when the enter key is pressed ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2483",children:"#2483"})]}),"\n",(0,o.jsxs)(n.li,{children:["PowerShell window is hidden again (e.g. configure network interface, add/remove arp entry, etc.) ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2483",children:"#2483"})]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"cleanup-refactoring--dependencies",children:"Cleanup, Refactoring & Dependencies"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Code cleanup & Refactoring ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2388",children:"#2388"})," ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2392",children:"#2392"})," ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2477",children:"#2477"})," ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2483",children:"#2483"})," ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2502",children:"#2502"})," ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2522",children:"#2522"})]}),"\n",(0,o.jsxs)(n.li,{children:["Language files updated ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pulls?q=author%3Aapp%2Ftransifex-integration",children:"#transifex"})]}),"\n",(0,o.jsxs)(n.li,{children:["Dependencies updated ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pulls?q=author%3Aapp%2Fdependabot",children:"#dependencies"})]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>t});var o=r(7294);const s={},i=o.createContext(s);function t(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);