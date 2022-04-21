(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{231:function(t,e,o){"use strict";o.r(e);o(57),o(43),o(15),o(37),o(44),o(29),o(25),o(28),o(45),o(46),o(30);function n(t,e){var o="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!o){if(Array.isArray(t)||(o=function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return Array.from(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return r(t,e)}(t))||e&&t&&"number"==typeof t.length){o&&(t=o);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,d=!1;return{s:function(){o=o.call(t)},n:function(){var t=o.next();return c=t.done,t},e:function(t){d=!0,l=t},f:function(){try{c||null==o.return||o.return()}finally{if(d)throw l}}}}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i];return o}var l={data:function(){return{selectedTab:{},show:!0,projects:[{key:1,title:"This WEB portfolio",description:"Personnal project made from scratch, firstly in the purpose of publishing an accessible Curriculum Vitae, before the ambition of completing a rich portfolio took over",tools:"Nuxt.JS based, icons using Illustrator, background using Photoshop, SASS for animations, mainly structured by Vue.JS and JavaScript",link:"https://github.com/greyF0xx/portfolio",year:2022,selected:!0},{key:2,title:"Connected Hive",description:"Part of a bigger project, the main task was to create a bee farm data exploiting web platform.",tools:"Structured as such: API: Node.JS, APP: NuxtJS, Vue and Vuetify.",link:"https://github.com/greyF0xx/connectedHive",year:2022,selected:!1},{key:3,title:"Snek",description:"Based on the classic snake game concept, this is a home made version with variable levels and maps, hosted on an adapted Web platform",tools:"Nuxt.JS and Vue for the front, Node.JS for the API, connected to MongoDB and containing the Unity game launcher under WebGL",link:"https://github.com/greyF0xx/Snek",year:2021,selected:!1},{key:4,title:"Connect 4",description:"Console based player versus player game",tools:"Basic Java console application",link:"https://github.com/greyF0xx/Connect4",year:2021,selected:!1},{key:5,title:"Motus",description:"Based on the famous Lingo television game, this is a French version named Motus based console game",tools:"Fully developped by C language",link:"https://github.com/greyF0xx/motus",year:2019,selected:!1},{key:6,title:"Truck Platooning",description:"Supervised personal initiative work as a part of the preparatory classes for engineering schools contests",tools:"Research and study of functionnal & technical aspects of platooning technologies on heavy vehicles",link:"https://drive.google.com/drive/folders/1PnquLbU0D0tQFjlgf_Y_z-A0JCY9avii?usp=sharing",year:2019,selected:!1},{key:7,title:"Dodger Cab",description:"First ever self-made game and developped program from scratch, dodge police cars and beat your own highscore",tools:"Python 3 and Pygame library",link:"https://github.com/greyF0xx/dodgerCab",year:2012,selected:!1}]}},mounted:function(){this.selectedTab=this.projects[0]},methods:{selectTab:function(t){var e=this;if(this.selectedTab.key!=t.key){this.show=!1,setTimeout((function(){e.show=!0}),500),this.selectedTab=t;var o,r=n(this.projects);try{for(r.s();!(o=r.n()).done;){o.value.selected=!1}}catch(t){r.e(t)}finally{r.f()}t.selected=!0}}}},c=o(21),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"projects"}},[o("div",{staticClass:"mainArticle"},[o("h1",{staticClass:"title"},[t._v("Some of my previous works:")]),t._v(" "),o("a",{staticClass:"pItem",attrs:{target:"_blank",href:"https://drive.google.com/drive/folders/1YxnYqCPUNngOJvELSOoJQK2760Orkcsb?usp=sharing"}},[t._v("For all available documentation, check this out...")]),t._v(" "),o("ul",{staticClass:"container"},t._l(t.projects,(function(e){return o("li",{key:e.key,staticClass:"project",class:{active:e.selected},attrs:{id:"tab_"+e.key},domProps:{innerHTML:t._s(e.title)},on:{click:function(o){return t.selectTab(e)}}})})),0),t._v(" "),o("Transition",{attrs:{name:"slidefade"}},[t.show?o("table",[o("tr",{staticClass:"pLign"},[o("td",{staticClass:"pItem"},[t._v("Name")]),t._v(" "),o("td",{staticClass:"pItem"},[t._v(t._s(t.selectedTab.title)+";")])]),t._v(" "),o("tr",{staticClass:"pLign"},[o("td",{staticClass:"pItem"},[t._v("Description")]),t._v(" "),o("td",{staticClass:"pItem"},[t._v(t._s(t.selectedTab.description)+";")])]),t._v(" "),o("tr",{staticClass:"pLign"},[o("td",{staticClass:"pItem"},[t._v("Tools used")]),t._v(" "),o("td",{staticClass:"pItem"},[t._v(t._s(t.selectedTab.tools)+";")])]),t._v(" "),o("tr",{staticClass:"pLign"},[o("td",{staticClass:"pItem"},[t._v("Source code")]),t._v(" "),o("td",[o("a",{staticClass:"pItem",attrs:{href:""+t.selectedTab.link,target:"_blank"}},[t._v(t._s(t.selectedTab.link)+";")])])]),t._v(" "),o("tr",{staticClass:"pLign"},[o("td",{staticClass:"pItem"},[t._v("Year")]),t._v(" "),o("td",{staticClass:"pItem"},[t._v(t._s(t.selectedTab.year)+";")])])]):t._e()])],1)])}),[],!1,null,"182efb1d",null);e.default=component.exports}}]);