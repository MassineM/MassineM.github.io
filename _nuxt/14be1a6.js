(window.webpackJsonp=window.webpackJsonp||[]).push([[8,3,4,5,6,7],{250:function(t,e,n){var content=n(256);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(73).default)("0cef9776",content,!0,{sourceMap:!1})},251:function(t,e,n){"use strict";n.r(e);var o={methods:{next:function(){this.$root.$emit("sidemenu")}}},r=n(19),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"arrow",on:{click:function(e){return t.next()}}},[n("svg",{attrs:{id:"more-arrows"}},[n("polygon",{staticClass:"arrow-top",attrs:{points:"37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "}}),t._v(" "),n("polygon",{staticClass:"arrow-middle",attrs:{points:"37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "}}),t._v(" "),n("polygon",{staticClass:"arrow-bottom",attrs:{points:"37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "}})])])}),[],!1,null,null,null);e.default=component.exports},252:function(t,e,n){t.exports=n.p+"img/meSmile.caf7029.png"},253:function(t,e,n){"use strict";var o=n(6),r=n(181).trim;o({target:"String",proto:!0,forced:n(254)("trim")},{trim:function(){return r(this)}})},254:function(t,e,n){var o=n(71).PROPER,r=n(4),l=n(182);t.exports=function(t){return r((function(){return!!l[t]()||"​᠎"!=="​᠎"[t]()||o&&l[t].name!==t}))}},255:function(t,e,n){"use strict";n(250)},256:function(t,e,n){var o=n(72)(!1);o.push([t.i,".animate-text{visibility:hidden}#arrows,#homePic,#homeText,#picBg{opacity:0;transition:all 1s ease-in-out}#picBg{transform:scale(0)}",""]),t.exports=o},257:function(t,e,n){"use strict";n.r(e);n(15),n(41),n(253),n(26),n(180),n(40);var o={data:function(){return{picBg:'<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 2" viewBox="0 0 553 553"><defs><linearGradient id="a" x1="80.98" x2="472.02" y1="80.98" y2="472.02" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#103a69"/><stop offset="1" stop-color="#042245"/></linearGradient></defs><circle cx="276.5" cy="276.5" r="276.5" fill="url(#a)" data-name="Layer 1"/></svg>'}},methods:{animateText:function(t,e,n){var o,r;document.querySelectorAll(".animate-text-"+t).forEach((function(t){o=t.textContent.trim(),t.textContent="",r=o.split(""),t.style.visibility="visible",r.forEach((function(o,r){setTimeout((function(){t.textContent+=o}),n+e*r)})),n+=e*r.length}))}},mounted:function(){this.animateText(1,100,2e3),this.animateText(2,80,2e3),setTimeout((function(){document.getElementById("picBg").style.transform="scale(1)",document.getElementById("picBg").style.opacity=1}),3e3),setTimeout((function(){document.getElementById("homePic").style.opacity=1}),4e3),setTimeout((function(){document.getElementById("homeText").style.opacity=1}),5e3),setTimeout((function(){document.getElementById("arrows").style.opacity=1}),7e3)}},r=(n(255),n(19)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"mainArticle",attrs:{id:"Index"}},[o("div",{staticClass:"homePicContainer"},[o("svg",{staticClass:"picBg",attrs:{id:"picBg"},domProps:{innerHTML:t._s(t.picBg)}}),t._v(" "),o("img",{staticClass:"homePic",attrs:{src:n(252),id:"homePic"}})]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),o("arrows",{attrs:{id:"arrows"}})],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"welcome"},[n("p",{staticClass:"homeTitle animate-text-1"},[t._v("Massine Mountasser, 24 years old")]),t._v(" "),n("p",{staticClass:"homeSubTitle animate-text-2"},[t._v("computer science engineer")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"homeText",attrs:{id:"homeText"}},[t._v("\n    Hello, welcome to my portfolio! Here you can see a few of my projects and\n    learn more about me.\n    "),n("br"),t._v("I'm currently looking for a job as a developer, so feel free to\n    check out my CV all the way down. "),n("br"),t._v("Don't hesitate on contacting me\n    for any ideas you'd like to share please. Thank you for visiting!\n  ")])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Arrows:n(251).default})},258:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{link1:'<svg xmlns="http://www.w3.org/2000/svg" id="OBJECT" viewBox="0 0 512 512"><defs><style>.cls-1{fill:#bddbff}.cls-2{fill:#3d9ae2}</style></defs><rect width="497" height="350" x="7.5" y="81" class="cls-1" rx="20" ry="20"/><path d="M484.5 438.5h-457A27.54 27.54 0 0 1 0 411V101a27.54 27.54 0 0 1 27.5-27.5h457A27.54 27.54 0 0 1 512 101v310a27.54 27.54 0 0 1-27.5 27.5Zm-457-350A12.52 12.52 0 0 0 15 101v310a12.52 12.52 0 0 0 12.5 12.5h457A12.52 12.52 0 0 0 497 411V101a12.52 12.52 0 0 0-12.5-12.5Z" class="cls-2"/><path fill="#fff" d="M416 116H96a50 50 0 0 1-50 50v180a50 50 0 0 1 50 50h320a50 50 0 0 1 50-50V166a50 50 0 0 1-50-50Z"/><path d="M416 403.5H96a7.5 7.5 0 0 1-7.5-7.5A42.55 42.55 0 0 0 46 353.5a7.5 7.5 0 0 1-7.5-7.5V166a7.5 7.5 0 0 1 7.5-7.5A42.55 42.55 0 0 0 88.5 116a7.5 7.5 0 0 1 7.5-7.5h320a7.5 7.5 0 0 1 7.5 7.5 42.55 42.55 0 0 0 42.5 42.5 7.5 7.5 0 0 1 7.5 7.5v180a7.5 7.5 0 0 1-7.5 7.5 42.55 42.55 0 0 0-42.5 42.5 7.5 7.5 0 0 1-7.5 7.5Zm-313-15h306a57.61 57.61 0 0 1 49.5-49.5V173a57.61 57.61 0 0 1-49.5-49.5H103A57.61 57.61 0 0 1 53.5 173v166a57.61 57.61 0 0 1 49.5 49.5Z" class="cls-2"/><path d="m286 366-30-15-30 15V266h60v100z" class="cls-1"/><path d="M286 373.5a7.43 7.43 0 0 1-3.35-.79L256 359.39l-26.65 13.32A7.5 7.5 0 0 1 218.5 366V266a7.5 7.5 0 0 1 7.5-7.5h60a7.5 7.5 0 0 1 7.5 7.5v100a7.5 7.5 0 0 1-7.5 7.5Zm-30-30a7.43 7.43 0 0 1 3.35.79l19.15 9.57V273.5h-45v80.36l19.15-9.57a7.43 7.43 0 0 1 3.35-.79Z" class="cls-2"/><circle cx="256" cy="266" r="50" class="cls-1"/><path d="M256 323.5a57.5 57.5 0 1 1 57.5-57.5 57.56 57.56 0 0 1-57.5 57.5Zm0-100a42.5 42.5 0 1 0 42.5 42.5 42.55 42.55 0 0 0-42.5-42.5Z" class="cls-2"/><path d="M371 181H141a15 15 0 0 1 0-30h230a15 15 0 0 1 0 30Z" class="cls-1"/><path d="M371 188.5H141a22.5 22.5 0 0 1 0-45h230a22.5 22.5 0 0 1 0 45Zm-230-30a7.5 7.5 0 0 0 0 15h230a7.5 7.5 0 0 0 0-15Z" class="cls-2"/></svg>'}},methods:{}},r=n(19),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mainArticle",attrs:{id:"About"}},[n("h1",{staticClass:"title"},[t._v("About me")]),t._v(" "),n("div",{staticClass:"profiletop"},[n("div",{staticClass:"timeline"},[n("a",{staticClass:"certifications",staticStyle:{width:"fit-content","margin-left":"auto","margin-right":"auto"},attrs:{href:"https://drive.google.com/drive/folders/1w-tLF6T2wAaspsS4VIjSmT4pZ61an9rS?usp=sharing",target:"_blank"}},[n("span",{domProps:{innerHTML:t._s(t.link1)}}),t._v("Click here to see my certifications")]),t._v(" "),n("p",{staticClass:"profileText",attrs:{STYLE:"padding:3vh 0 0 3vw;font-style: italic;font-weight: 900;"}},[t._v("\n        ~ Engineering school (2019-2023)\n      ")]),t._v(" "),n("p",{staticClass:"profileText",attrs:{STYLE:"padding:0 4vw 0 0; text-align: left"}},[t._v("\n        Having completed my computer science engineering course at the\n        Littoral Côte d'Opale's engineering school of information technologies\n        (EILco - Calais, France), I am now looking for a job as an IT\n        engineer, preferably in the web development field.\n      ")]),t._v(" "),n("p",{staticClass:"profileText",attrs:{STYLE:"padding:3vh 3vw 0 0;font-style: italic;font-weight: 900; text-align: right"}},[t._v("\n        ~ Preparatory classes (2017-2019)\n      ")]),t._v(" "),n("p",{staticClass:"profileText",attrs:{STYLE:"padding:0 0 0 4vw; text-align: right"}},[t._v("\n        Two years of preparatory classes for engineering schools - industrial\n        technologies and sciences branch (CPGE TSI Reda Slaoui - Agadir,\n        Morocco), followed by school hiring contests. I was more than happy to\n        go in for an IT school by the end.\n      ")]),t._v(" "),n("p",{staticClass:"profileText",attrs:{STYLE:"padding:3vh 0 0 3vw;font-style: italic;font-weight: 900; text-align: left"}},[t._v("\n        ~ Baccalaureate (2017)\n      ")]),t._v(" "),n("p",{staticClass:"profileText",attrs:{STYLE:"padding:0 4vw 0 0; text-align: left"}},[t._v("\n        Got my baccalaureate in mechanics, techs and sciences highschool\n        Youssef Ben Tachfine in Agadir, Morocco. Good enough grades for a\n        national competition in engineering sciences, and made it to\n        preparatory classes.\n      ")]),t._v(" "),n("p",{staticClass:"profileText",attrs:{STYLE:"padding:3vh 3vw 0 0;font-style: italic;font-weight: 900; text-align: right"}},[t._v("\n        ~ Before highschool (till 2016)\n      ")]),t._v(" "),n("p",{staticClass:"profileText",attrs:{STYLE:"padding:0 0 0 4vw; text-align: right"}},[t._v("\n        Born in Agadir on may 13th of 1999, I was good at maths and have\n        always managed to get myself amazed by any technology I came across. I\n        loved playing with electronics as a child, and coding mini games since\n        early teenage years.\n      ")])]),t._v(" "),t._m(0)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"pid"},[t._v("\n      Commitment determination "),n("br"),t._v("\n      initiative motivation "),n("br"),t._v("\n      vigour dynamism "),n("br"),t._v("\n      energy vitality "),n("br"),t._v("\n      development evolution "),n("br"),t._v("\n      progress growth "),n("br"),t._v("\n      audacity courage "),n("br"),t._v("\n      ambition enthusiasm "),n("br"),t._v("\n      curiosity perception "),n("br"),t._v("\n      reasoning logic "),n("br"),t._v("\n      inspiration creativity "),n("br"),t._v("\n      originality art "),n("br"),t._v("\n      patience altruism "),n("br"),t._v("\n      compassion goodwill\n    ")])}],!1,null,"14577769",null);e.default=component.exports},259:function(t,e,n){"use strict";n.r(e);n(40),n(45),n(15),n(27),n(46),n(31),n(26),n(30),n(47),n(48),n(32);function o(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,d=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){d=!0,l=t},f:function(){try{c||null==n.return||n.return()}finally{if(d)throw l}}}}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var l={data:function(){return{link2:'<svg xmlns="http://www.w3.org/2000/svg" id="OBJECT" viewBox="0 0 512 512"><defs><style>.cls-2{fill:#3d9ae2}.cls-3{fill:#fff}</style></defs><path fill="#bddbff" d="M431 432.75H269l-188 35V47.5a40 40 0 0 1 40-40h310Z"/><path d="M81 475.25a7.5 7.5 0 0 1-7.5-7.5V47.5A47.56 47.56 0 0 1 121 0h310a7.5 7.5 0 0 1 7.5 7.5v425.25a7.5 7.5 0 0 1-7.5 7.5H269.69L82.37 475.12a7 7 0 0 1-1.37.13ZM121 15a32.54 32.54 0 0 0-32.5 32.5v411.22l179.13-33.34a7 7 0 0 1 1.37-.13h154.5V15Z" class="cls-2"/><path d="M395.42 467.75A36.75 36.75 0 0 1 431 431H117.75A36.75 36.75 0 0 0 81 467.75a36.75 36.75 0 0 0 36.75 36.75H431a36.75 36.75 0 0 1-35.58-36.75Z" class="cls-3"/><path d="M431 512H117.75a44.25 44.25 0 0 1 0-88.5H431a7.52 7.52 0 0 1 .24 15 29.23 29.23 0 0 0 0 58.44 7.52 7.52 0 0 1-.24 15Zm-313.25-73.5a29.25 29.25 0 0 0 0 58.5h281.12a44.54 44.54 0 0 1 0-58.5Z" class="cls-2"/><rect width="240" height="120" x="136" y="81" class="cls-3" rx="20" ry="20"/><path d="M356 208.5H156a27.54 27.54 0 0 1-27.5-27.5v-80A27.54 27.54 0 0 1 156 73.5h200a27.54 27.54 0 0 1 27.5 27.5v80a27.54 27.54 0 0 1-27.5 27.5Zm-200-120a12.52 12.52 0 0 0-12.5 12.5v80a12.52 12.52 0 0 0 12.5 12.5h200a12.52 12.52 0 0 0 12.5-12.5v-80A12.52 12.52 0 0 0 356 88.5Z" class="cls-2"/></svg>',selectedTab:{},show:!1,projects:[{key:1,title:"Internship <br /> @ Sopra Steria",name:"Internship at Sopra Steria",description:"For my end-of-study internship, I am happily beginning my journey with Sopra Steria, a big multinational IT company",tools:"Web development, working with a team in the transportation sector's agency in Lille",year:2023,selected:!0},{key:2,title:"Internship <br /> @ Fonaco",name:"Internship at Fonaco",description:"For my second year assistant engineer internship, I got to work with this advertising startup on creating a showcase website and a management interface",tools:"Showcase website using Bootstrap, a second one using Nuxt.JS and the management interface using native PHP and MySQL",link:"https://github.com/MassineM/FonacoGestionPHP",year:2022,selected:!1},{key:3,title:"PlantIO",name:"PlantIO",description:"This project's goal is to help any farmer or gardner understand their plantations' environment to promote optimal growth conditions",tools:"Setting a Raspberry to collect data for a Firebase API, consumed by a web front (Angular) & mobile app (React)",link:"https://github.com/MassineM/PlantIO",year:2023,selected:!1},{key:4,title:"AMLBID Interface <br /> & AutoML Research",name:"AMLBID Interface & AutoML Research",description:"Improving and adding features to a user interface of an automated machine learning system. Another part of the project is a bibliographic research on Automated Machine Learning",tools:"Adding dynamic features in PHP to a Wordpress website, and connecting it to the Flask - Python generated AML system. Research based on scientific articles made with LaTeX",year:2023,selected:!1},{key:5,title:"Connected Hive",name:"Connected Hive",description:"Part of a bigger project, the main task was to create a bee farm data exploiting web platform",tools:"Data gathering: Arduino & Sigfox, API: Node.JS & MongoDB, APP: NuxtJS, Vue and Vuetify",link:"https://github.com/MassineM/connectedHive",year:2022,selected:!1},{key:6,title:"Snek",name:"Snek",description:"Based on the classic snake game concept, this is a home made version with variable levels and maps, hosted on an adapted Web platform",tools:"Nuxt.JS and Vue for the front, Node.JS for the API, connected to MongoDB and containing the Unity game launcher under WebGL",link:"https://github.com/MassineM/Snek",year:2021,selected:!1},{key:7,title:"Dodger Cab",name:"Dodger Cab",description:"First ever self-made game and developped program from scratch, dodge police cars and beat your own highscore",tools:"Python 3 and Pygame library",link:"https://github.com/MassineM/dodgerCab",year:2012,selected:!1}]}},mounted:function(){this.selectTab(this.projects[0])},methods:{selectTab:function(t){var e=this;if(this.selectedTab.key!=t.key){this.show=!1,setTimeout((function(){e.show=!0}),500),this.selectedTab=t;var n,r=o(this.projects);try{for(r.s();!(n=r.n()).done;){n.value.selected=!1}}catch(t){r.e(t)}finally{r.f()}t.selected=!0}}}},c=n(19),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mainArticle",attrs:{id:"Projects"}},[n("h1",{staticClass:"title"},[t._v("Previous projects")]),t._v(" "),n("ul",{staticClass:"container"},t._l(t.projects,(function(e){return n("li",{key:e.key,staticClass:"project",class:{active:e.selected},attrs:{id:"tab_"+e.key},domProps:{innerHTML:t._s(e.title)},on:{click:function(n){return t.selectTab(e)}}})})),0),t._v(" "),n("div",{staticStyle:{height:"33vh"}},[n("Transition",{attrs:{name:"slidefade"}},[t.show?n("table",{staticClass:"pTable"},[n("tr",{staticClass:"pLign"},[n("td",{staticClass:"pTitle pTop pLeft"},[t._v("Name")]),t._v(" "),n("td",{staticClass:"pItem pTop pRight"},[t._v(t._s(t.selectedTab.name)+";")])]),t._v(" "),n("tr",{staticClass:"pLign"},[n("td",{staticClass:"pTitle pLeft"},[t._v("Description")]),t._v(" "),n("td",{staticClass:"pItem pRight"},[t._v(t._s(t.selectedTab.description)+";")])]),t._v(" "),n("tr",{staticClass:"pLign"},[n("td",{staticClass:"pTitle pLeft"},[t._v("Tools used")]),t._v(" "),n("td",{staticClass:"pItem pRight"},[t._v(t._s(t.selectedTab.tools)+";")])]),t._v(" "),t.selectedTab.link?n("tr",{staticClass:"pLign"},[n("td",{staticClass:"pTitle pLeft"},[t._v("Source code")]),t._v(" "),n("td",{staticClass:"pItem pRight"},[n("a",{attrs:{href:""+t.selectedTab.link,target:"_blank"}},[t._v(t._s(t.selectedTab.link)+";")])])]):t._e(),t._v(" "),n("tr",{staticClass:"pLign"},[n("td",{staticClass:"pTitle pLeft pDown"},[t._v("Year")]),t._v(" "),n("td",{staticClass:"pItem pRight pDown"},[t._v(t._s(t.selectedTab.year)+";")])])]):t._e()])],1),t._v(" "),n("a",{staticClass:"documentation",attrs:{target:"_blank",href:"https://drive.google.com/drive/folders/1YxnYqCPUNngOJvELSOoJQK2760Orkcsb?usp=sharing"}},[n("span",{domProps:{innerHTML:t._s(t.link2)}}),t._v("For all available documentation, click\n    here.")]),t._v(" "),t._m(0)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"moreCodes"},[t._v("\n    Check out my GitHub below"),n("br"),t._v("\n    for more projects' source codes\n  ")])}],!1,null,"61b2e519",null);e.default=component.exports},260:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{link4:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.35 6.35"><path fill="#3771c8" d="M1.059 1.323c-.289 0-.53.24-.53.529v2.646c0 .288.241.529.53.529h4.233c.288 0 .53-.24.53-.53V1.853c0-.289-.242-.53-.53-.53z" color="#000" font-family="sans-serif" font-weight="400" overflow="visible" style="line-height:normal;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-variant-east-asian:normal;font-feature-settings:normal;font-variation-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;text-orientation:mixed;white-space:normal;shape-padding:0;shape-margin:0;inline-size:0;isolation:auto;mix-blend-mode:normal;solid-color:#000;solid-opacity:1"/><path fill="#87aade" d="M1.852 2.117c-.289 0-.53.241-.53.53v1.058c0 .288.241.527.53.527h1.059c.288 0 .53-.239.53-.527V2.646c0-.288-.242-.529-.53-.529z" color="#000" font-family="sans-serif" font-weight="400" overflow="visible" style="line-height:normal;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-variant-east-asian:normal;font-feature-settings:normal;font-variation-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;text-orientation:mixed;white-space:normal;shape-padding:0;shape-margin:0;inline-size:0;isolation:auto;mix-blend-mode:normal;solid-color:#000;solid-opacity:1"/><g fill="#87aade" stroke-width=".529"><path d="M-17.197 2.117c-.343-.005-.367.52 0 .53h.793c.351 0 .363-.53 0-.53z" color="#000" font-family="sans-serif" font-weight="400" overflow="visible" style="line-height:normal;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-variant-east-asian:normal;font-feature-settings:normal;font-variation-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;text-orientation:mixed;white-space:normal;shape-padding:0;shape-margin:0;inline-size:0;isolation:auto;mix-blend-mode:normal;solid-color:#000;solid-opacity:1" transform="matrix(1.00012 0 0 .99975 21.169 0)"/></g><g fill="#87aade" stroke-width=".529"><path d="M-17.197 2.91c-.334-.007-.358.517 0 .53h.793c.335-.001.318-.53 0-.53z" color="#000" font-family="sans-serif" font-weight="400" overflow="visible" style="line-height:normal;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-variant-east-asian:normal;font-feature-settings:normal;font-variation-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;text-orientation:mixed;white-space:normal;shape-padding:0;shape-margin:0;inline-size:0;isolation:auto;mix-blend-mode:normal;solid-color:#000;solid-opacity:1" transform="matrix(1.00012 0 0 .99975 21.169 0)"/></g><g fill="#87aade" stroke-width=".529"><path d="M-17.197 3.705c-.326 0-.32.527 0 .527h.793c.352 0 .331-.527 0-.527z" color="#000" font-family="sans-serif" font-weight="400" overflow="visible" style="line-height:normal;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-variant-east-asian:normal;font-feature-settings:normal;font-variation-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;text-orientation:mixed;white-space:normal;shape-padding:0;shape-margin:0;inline-size:0;isolation:auto;mix-blend-mode:normal;solid-color:#000;solid-opacity:1" transform="matrix(1.00012 0 0 .99975 21.169 0)"/></g><path fill="#374548" d="M1.058 1.323c-.289 0-.53.24-.53.53v2.645c0 .288.241.53.53.53h4.233c.289 0 .53-.242.53-.53V1.852a.534.534 0 0 0-.53-.529zm0 .53h4.233v2.645H1.058Zm.793.265c-.289 0-.53.24-.53.529v1.058c0 .289.241.527.53.527H2.91c.289 0 .53-.238.53-.527V2.647a.534.534 0 0 0-.53-.53zm2.118 0c-.354 0-.354.529 0 .529h.793c.346 0 .369-.53 0-.53zm-2.118.529H2.91v1.058H1.85zm2.118.263c-.354.002-.337.53 0 .53h.793c.351 0 .357-.528 0-.53zm0 .795c-.336 0-.337.527 0 .527h.793c.346.003.351-.527 0-.527z" color="#000" font-family="sans-serif" font-weight="400" overflow="visible" style="line-height:normal;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-variant-east-asian:normal;font-feature-settings:normal;font-variation-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;text-orientation:mixed;white-space:normal;shape-padding:0;shape-margin:0;inline-size:0;isolation:auto;mix-blend-mode:normal;solid-color:#000;solid-opacity:1"/></svg>',networks:['<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 112.196 112.196" viewBox="0 0 112.196 112.196"><circle cx="56.098" cy="56.097" r="56.098" style="fill:#2a156f"/><path d="M89.616 60.611v23.128H76.207V62.161c0-5.418-1.936-9.118-6.791-9.118-3.705 0-5.906 2.491-6.878 4.903-.353.862-.444 2.059-.444 3.268v22.524h-13.41s.18-36.546 0-40.329h13.411v5.715c-.027.045-.065.089-.089.132h.089v-.132c1.782-2.742 4.96-6.662 12.085-6.662 8.822 0 15.436 5.764 15.436 18.149zm-54.96-36.642c-4.587 0-7.588 3.011-7.588 6.967 0 3.872 2.914 6.97 7.412 6.97h.087c4.677 0 7.585-3.098 7.585-6.97-.089-3.956-2.908-6.967-7.496-6.967zm-6.791 59.77H41.27v-40.33H27.865v40.33z" style="fill:#fff"/></svg>','<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 512 512" viewBox="0 0 512 512"><path d="M255.969 21.733c-131.739 0-238.572 107.541-238.572 240.206 0 106.107 68.362 196.121 163.205 227.91 11.929 2.22 16.285-5.196 16.285-11.567 0-5.713-.205-20.817-.33-40.856-66.36 14.507-80.375-32.208-80.375-32.208-10.828-27.756-26.489-35.139-26.489-35.139-21.684-14.893 1.613-14.591 1.613-14.591 23.948 1.701 36.534 24.759 36.534 24.759 21.295 36.694 55.866 26.105 69.465 19.947 2.146-15.521 8.318-26.105 15.154-32.116-52.974-6.073-108.69-26.681-108.69-118.699 0-26.229 9.31-47.668 24.576-64.478-2.475-6.071-10.646-30.507 2.329-63.554 0 0 20.045-6.455 65.613 24.614 19.031-5.325 39.432-7.982 59.742-8.072 20.25.123 40.676 2.747 59.738 8.105 45.547-31.074 65.559-24.614 65.559-24.614 13.002 33.077 4.832 57.482 2.387 63.549 15.297 16.81 24.516 38.25 24.516 64.482 0 92.258-55.773 112.563-108.92 118.512 8.559 7.422 16.191 22.069 16.191 44.471 0 32.124-.297 58.019-.297 65.888 0 6.427 4.293 13.903 16.402 11.54 94.697-31.824 162.998-121.805 162.998-227.883.001-132.666-106.832-240.206-238.634-240.206zm0 0" style="fill:#2a156f"/></svg>','<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" overflow="visible" viewBox="0 0 154.631 154.631"><circle cx="77.315" cy="77.315" r="77.315" fill="#2a156f"/><path fill="#FFF" d="M77.412 44.492c10.721 0 11.998.041 16.226.233 3.913.178 6.041.834 7.454 1.383 1.881.728 3.213 1.6 4.627 3.003 1.4 1.407 2.271 2.742 2.999 4.62.55 1.414 1.201 3.542 1.38 7.458.192 4.232.233 5.501.233 16.227 0 10.718-.041 11.995-.233 16.223-.179 3.913-.83 6.041-1.38 7.454-.728 1.881-1.599 3.213-2.999 4.627-1.414 1.4-2.746 2.265-4.627 2.999-1.413.55-3.541 1.201-7.454 1.38-4.228.192-5.505.233-16.226.233-10.722 0-11.992-.041-16.227-.233-3.912-.179-6.04-.83-7.454-1.38-1.874-.728-3.212-1.599-4.62-2.999-1.407-1.414-2.272-2.746-3-4.627-.549-1.413-1.208-3.541-1.386-7.454-.192-4.228-.233-5.505-.233-16.223 0-10.725.041-11.995.233-16.227.178-3.916.837-6.043 1.386-7.458.728-1.877 1.593-3.212 3-4.62 1.407-1.403 2.746-2.275 4.62-3.003 1.414-.549 3.542-1.205 7.454-1.383 4.235-.192 5.505-.233 16.227-.233m0-7.235c-10.9 0-12.273.045-16.556.24-4.27.196-7.194.875-9.747 1.867-2.636 1.026-4.88 2.399-7.111 4.633-2.238 2.23-3.61 4.472-4.633 7.111-.995 2.557-1.668 5.474-1.867 9.75-.199 4.283-.24 5.649-.24 16.556 0 10.91.042 12.27.24 16.553.199 4.276.872 7.193 1.867 9.746 1.023 2.649 2.396 4.888 4.633 7.118 2.23 2.23 4.475 3.604 7.111 4.634 2.553.988 5.478 1.668 9.747 1.866 4.283.192 5.656.24 16.556.24 10.906 0 12.272-.048 16.556-.24 4.276-.198 7.193-.878 9.746-1.866 2.643-1.03 4.888-2.403 7.111-4.634 2.237-2.23 3.61-4.469 4.641-7.118.988-2.553 1.667-5.463 1.866-9.746.192-4.283.233-5.643.233-16.553 0-10.907-.041-12.273-.233-16.556-.199-4.276-.878-7.193-1.866-9.75-1.03-2.639-2.403-4.88-4.641-7.111-2.224-2.234-4.469-3.607-7.111-4.633-2.553-.992-5.47-1.671-9.746-1.867-4.283-.195-5.65-.24-16.556-.24m0 19.535c-11.388 0-20.62 9.232-20.62 20.623s9.232 20.616 20.62 20.616c11.394 0 20.619-9.226 20.619-20.616s-9.225-20.623-20.619-20.623m0 34.004c-7.393 0-13.385-5.985-13.385-13.381s5.992-13.388 13.385-13.388c7.398 0 13.384 5.992 13.384 13.388s-5.985 13.381-13.384 13.381m26.254-34.817a4.815 4.815 0 0 0-4.818-4.818 4.82 4.82 0 0 0-4.818 4.818 4.817 4.817 0 1 0 9.636 0"/></svg>','<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 550 550"><circle cx="275" cy="275" r="256" fill="#2a156f"/><path fill="#FFF" d="M236.1 190.8v40.4h-29.6v49.4h29.6V416h60.8V280.5h40.8s3.8-23.7 5.7-49.6h-46.2v-33.8c0-5 6.6-11.8 13.2-11.8h33.1v-51.4h-45c-63.9.1-62.4 49.5-62.4 56.9z"/></svg>','<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 32 32"><path d="M2 24.266v1C2 26.231 2.8 27 3.75 27h24.5c.975 0 1.75-.769 1.75-1.734v-1c0 .965-.775 1.734-1.75 1.734H3.75C2.8 26 2 25.231 2 24.266z" style="opacity:.2"/><path d="m27.396 25.462-1.32.538H5.823l-.965-.443c-.864-.396-1.748-.528-2.193-1.385L2 22.892V8.272l.57-1.317c.373-.864.892-.35 1.243-1.259L4.083 5H27.88l.275.506c.454.835.684 1.115 1.212 1.924l.633.969V23.05l-.475 1.216c-.35.9-1.227.827-2.13 1.195z" style="fill:#fff"/><path d="M3.744 5.1c-.85 0-1.547.606-1.709 1.387v.002c-.03.23-.031.408-.031.408v17.355c0 .96.772 1.759 1.742 1.748h2.258V6.897c0-.117-.012-.224-.035-.318-.116-.5-.708-1.063-1.312-1.479zM27.654 5.25c-.837.239-1.673.712-1.654 1.498V26h2.215C29.224 26 30 25.22 30 24.277V6.984c0-.965-.8-1.734-1.75-1.734Z" style="fill:#2a156f"/><path d="M28.029 6.007a1.996 1.997 0 0 0-1.245.417l-10.779 8.085L5.226 6.424A1.996 1.997 0 1 0 2.83 9.617l11.977 8.984a1.996 1.997 0 0 0 2.396 0L29.18 9.617a1.996 1.997 0 0 0-1.151-3.61Z" style="opacity:.2;fill-rule:evenodd"/><path d="M3.75 5.016h24.5c1.064 2.694.433 1.013 0 1H3.75c-1.508 1.615-.75-.352 0-1Z" style="opacity:.2;fill:#fff"/><path d="M28.029 5.007a1.996 1.997 0 0 0-1.245.417l-10.779 8.085L5.226 5.424A1.996 1.997 0 1 0 2.83 8.617l11.977 8.984a1.996 1.997 0 0 0 2.396 0L29.18 8.617a1.996 1.997 0 0 0-1.151-3.61Z" style="fill:#432a92;fill-rule:evenodd"/></svg>','<svg xmlns="http://www.w3.org/2000/svg" fill="#2a156f" aria-label="Discord" viewBox="0 0 512 512"><rect width="512" height="512" rx="15%"/><path fill="#fff" d="m346 392-21-25c41-11 57-39 57-39-52 49-194 51-249 0 0 0 14 26 56 39l-23 25c-70-1-97-48-97-48 0-104 46-187 46-187 47-33 90-33 90-33l3 4c-58 16-83 42-83 42 68-46 208-42 263 0 1-1-33-28-86-42l5-4s43 0 90 33c0 0 46 83 46 187 0 0-27 47-97 48z"/><ellipse cx="196" cy="279" rx="33" ry="35"/><ellipse cx="312" cy="279" rx="33" ry="35"/></svg>','<svg data-name="Layer 2" viewBox="0 0 744.67 212.15"><g data-name="Calque 1"><path d="M159.85 52.3c-14.1-14.1-29.16-4.97-38.59 4.45l-44.52 44.52-44.53 44.52c-9.43 9.43-19.29 23.75-4.45 38.58 14.84 14.84 29.16 4.98 38.58-4.45l44.52-44.52 44.52-44.52c9.43-9.43 18.55-24.49 4.45-38.59" class="cls-1"/><path d="m74.78 48.66 18.86 18.85 19.19-19.19c1.3-1.31 2.63-2.52 3.96-3.66-2.01-10.14-7.8-19.31-23.16-19.31s-21.17 9.2-23.17 19.36c1.44 1.24 2.87 2.49 4.32 3.94" class="cls-1"/><path d="m112.82 188.71-19.18-19.18-18.85 18.84c-1.43 1.43-2.86 2.74-4.27 3.97 2.16 10.34 8.28 19.81 23.11 19.81s20.98-9.52 23.13-19.89c-1.32-1.13-2.64-2.25-3.94-3.55" class="cls-1"/><path d="M66.78 94.36H30.43C17.1 94.36 0 98.56 0 118.5c0 14.88 9.52 20.99 19.89 23.13 1.23-1.42 46.89-47.27 46.89-47.27" class="cls-1"/><path d="M167.43 95.33c-1.15 1.34-46.91 47.3-46.91 47.3h35.83c13.33 0 30.43-3.15 30.43-24.14 0-15.39-9.2-21.17-19.36-23.17" class="cls-1"/><path d="m78.69 82.43 6.49-6.49-18.84-18.85c-9.43-9.43-23.75-19.29-38.59-4.45-10.88 10.88-8.47 21.47-2.69 30.07 1.76-.13 53.63-.28 53.63-.28" class="cls-1"/><path d="m108.57 154.57-6.51 6.51 19.19 19.19c9.43 9.43 24.49 18.55 38.59 4.45 10.52-10.52 8.11-21.57 2.29-30.42-1.87.13-53.56.27-53.56.27" class="cls-1"/><path d="M560.61 56.61c-3.22 0-8.85.81-15.03 3.49-8.05 3.49-12.34 6.17-14.49 9.66-8.05-9.39-18.51-12.34-30.32-12.34-34.61 0-59.29 29.25-59.29 70.83 0 34.88 18.78 60.64 45.34 60.64 8.05 0 15.29-3.22 23.88-11.27 6.71-6.17 9.93-10.2 9.93-13.95 0-2.68-1.88-4.56-4.56-4.56-3.76 0-7.78 3.22-12.88 3.22-11 0-18.51-16.9-18.51-41.86s9.93-41.85 24.95-41.85c9.93 0 17.44 7.51 17.44 20.39v78.35c0 8.58 8.05 11 22.8 11s20.12-2.68 20.12-11V65.2c0-5.37-3.49-8.59-9.39-8.59" class="cls-1"/><path d="M395.07 56.61c-10.46 0-21.46 3.76-31.12 11.27-5.36 4.29-9.93 9.12-9.93 13.15 0 3.49 2.41 5.36 5.9 5.36 5.9 0 7.78-2.41 13.42-2.41s8.32 5.37 8.32 14.76v78.61c0 8.58 8.05 11 22.8 11s20.12-2.68 20.12-11V91.22c0-20.39-12.07-34.61-29.51-34.61" class="cls-1"/><path d="M319.68 56.61c-11 0-20.93 3.76-30.59 11.27-5.37 4.29-9.93 9.12-9.93 13.15 0 3.49 2.41 5.36 5.9 5.36 5.9 0 7.78-2.41 12.88-2.41s7.78 5.37 7.78 14.76v78.61c0 8.58 8.05 11 22.8 11s20.12-2.68 20.12-11V91.22c0-20.39-12.07-34.61-28.98-34.61" class="cls-1"/><path d="M263.33 56.61c-4.02 0-8.85.81-15.03 3.49-13.42 5.9-18.51 9.66-18.51 17.98v99.27c0 8.58 8.05 11 22.8 11s20.12-2.68 20.12-11V65.2c0-5.37-3.49-8.59-9.39-8.59" class="cls-1"/><path d="M735.28 152.13c-10.73 2.68-13.95 3.49-17.71 3.49-4.56 0-6.17-1.34-6.17-6.17V82.37h24.42c6.44 0 8.85-2.41 8.85-8.85 0-5.37-2.41-8.05-8.85-8.05H711.4V39.44c0-8.05-2.68-11.27-8.32-11.27S690.2 33 674.1 46.68c-16.36 13.95-25.76 23.07-25.76 29.51 0 3.76 2.68 6.17 6.98 6.17h13.15v72.44c0 21.2 10.46 33.54 28.71 33.54 12.07 0 20.93-4.56 31.39-12.61 9.66-7.51 15.83-13.42 15.83-18.51 0-4.29-3.22-6.71-9.12-5.1" class="cls-1"/><path d="M626.62 0c-2.15 0-8.85.81-15.03 3.49-13.42 5.63-18.51 9.66-18.51 17.98v155.88c0 8.59 8.05 11 22.8 11s20.12-2.68 20.12-11V8.59c0-5.37-3.49-8.59-9.39-8.59" class="cls-1"/></g></svg>']}},methods:{}},r=n(19),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mainArticle contact",attrs:{id:"More"}},[n("h1",{staticClass:"title"},[t._v("Find me on")]),t._v(" "),n("ul",{staticClass:"contactContainer"},[n("li",[n("ul",{staticClass:"contactLine"},[n("li",{staticClass:"contactElement"},[n("a",{attrs:{href:"https://www.linkedin.com/in/massine-mountasser/",target:"_blank"}},[n("span",{domProps:{innerHTML:t._s(t.networks[0])}}),t._v("LinkedIn")])]),t._v(" "),n("li",{staticClass:"contactElement"},[n("a",{attrs:{href:"https://github.com/MassineM",target:"_blank"}},[n("span",{domProps:{innerHTML:t._s(t.networks[1])}}),t._v("GitHub")])])]),t._v(" "),n("ul",{staticClass:"contactLine"},[n("li",{staticClass:"contactElement"},[n("a",{attrs:{href:"https://www.instagram.com/massinemtsr/",target:"_blank"}},[n("span",{domProps:{innerHTML:t._s(t.networks[2])}}),t._v("Instagram")])]),t._v(" "),n("li",{staticClass:"contactElement"},[n("a",{attrs:{href:"https://www.facebook.com/massine.mtsr/",target:"_blank"}},[n("span",{domProps:{innerHTML:t._s(t.networks[3])}}),t._v("Facebook")])])])]),t._v(" "),n("li",[n("ul",[n("li",{staticClass:"contactElement"},[n("a",{attrs:{target:"_blank",href:"https://www.malt.fr/profile/massinem"}},[n("span",{domProps:{innerHTML:t._s(t.networks[6])}}),t._v("Malt Freelancer")])]),t._v(" "),n("li",{staticClass:"contactElement"},[n("a",{attrs:{href:"mailto:mountasser.massine@gmail.com",target:"_blank"}},[n("span",{domProps:{innerHTML:t._s(t.networks[4])}}),t._v("mountasser.massine@gmail.com")])]),t._v(" "),n("li",{staticClass:"contactElement"},[n("a",[n("span",{domProps:{innerHTML:t._s(t.networks[5])}}),t._v(" Discord ID : MassineM#8110")])]),t._v(" "),n("li",{staticClass:"contactElement"},[n("a",{attrs:{target:"_blank",href:"https://drive.google.com/drive/folders/1Z-IkMNktw8JUbEjJXlIkkJhVSy7qNmiX?usp=share_link"}},[n("span",{domProps:{innerHTML:t._s(t.link4)}}),t._v("PDF resume here.")])])])])])])}),[],!1,null,"c43d5fd2",null);e.default=component.exports},262:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{}},methods:{}},r=n(19),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("welcome"),t._v(" "),n("about"),t._v(" "),n("skills"),t._v(" "),n("projects"),t._v(" "),n("contact")],1)}),[],!1,null,"be037174",null);e.default=component.exports;installComponents(component,{Welcome:n(257).default,About:n(258).default,Skills:n(261).default,Projects:n(259).default,Contact:n(260).default})}}]);