(this["webpackJsonpstatic-app"]=this["webpackJsonpstatic-app"]||[]).push([[2],[,,,,,,,,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){e.exports={SocialLinks:"SocialLinks_SocialLinks__3awKb"}},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},,function(e,t,s){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var s=0;s<t.length;s++){var a=t[s];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function n(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,a=c(e);if(t){var i=c(this).constructor;s=Reflect.construct(a,arguments,i)}else s=a.apply(this,arguments);return r(this,s)}}s.r(t);var d=s(1),j=(s(13),s(14)),h=s.n(j),m=s(15),b=s.n(m),f=s(0),p=function(e){var t=e.link;return Object(f.jsx)("a",{href:t.href,className:t.type,children:Object(f.jsx)("i",{className:"fab fa-"+t.type})})},u=function(e){return Object(f.jsx)("div",{className:"social-links mt-3 "+e.align+" "+b.a.SocialLinks,"data-testid":"SocialLinks",children:e.links.map((function(e){return Object(f.jsx)(p,{link:e},e.type)}))})};u.defaultProps={align:"text-center"};var g=u,x=function(e){var t=e.data;return Object(f.jsx)("div",{className:h.a.Header,"data-testid":"Header",children:Object(f.jsx)("header",{id:"header",children:Object(f.jsxs)("div",{className:"d-flex flex-column",children:[Object(f.jsxs)("div",{className:"profile",children:[Object(f.jsx)("img",{src:"img/profile-img.jpg",alt:"",className:"img-fluid rounded-circle"}),Object(f.jsx)("h1",{className:"text-light",children:Object(f.jsx)("a",{href:"index.html",children:"LEGION DND"})}),Object(f.jsx)(g,{links:t.links})]}),Object(f.jsx)("nav",{id:"navbar",className:"nav-menu navbar",children:Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:Object(f.jsxs)("a",{href:"#hero",className:"nav-link scrollto active",children:[Object(f.jsx)("i",{className:"fas fa-home"})," ",Object(f.jsx)("span",{children:"Home"})]},"hero")}),Object.keys(t.players).map((function(e){return Object(f.jsx)("li",{children:Object(f.jsxs)("a",{href:"#"+t.players[e].pageLink,className:"nav-link scrollto",children:[Object(f.jsx)("i",{className:t.players[e].icon})," ",Object(f.jsx)("span",{children:t.players[e].firstName})]},e)})})),Object(f.jsx)("li",{children:Object(f.jsxs)("a",{href:"#shop",className:"nav-link scrollto",children:[Object(f.jsx)("i",{className:"fas fa-shopping-bag"})," ",Object(f.jsx)("span",{children:"Shop"})]},"shop")}),Object(f.jsx)("li",{children:Object(f.jsxs)("a",{href:"#where",className:"nav-link scrollto",children:[Object(f.jsx)("i",{className:"fas fa-video"})," ",Object(f.jsx)("span",{children:"Where to Watch"})]},"where")})]})})]})})})};x.defaultProps={};var O=x,v=s(16),N=s.n(v),y=s(17),w=s.n(y),k=function(e){var t=e.stat,s=t.title,a=t.value;return Object(f.jsxs)("li",{children:[Object(f.jsx)("i",{className:"fas fa-chevron-right"})," ",Object(f.jsxs)("strong",{children:[s,":"]})," ",Object(f.jsx)("span",{children:a})]})},D=function(e){var t=e.stats;return Object(f.jsx)("div",{className:w.a.Stats,"data-testid":"Stats",children:Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("div",{className:"col-lg-6",children:Object(f.jsx)("ul",{children:t.slice(0,4).map((function(e,t){return Object(f.jsx)(k,{stat:e},t)}))})}),Object(f.jsx)("div",{className:"col-lg-6",children:Object(f.jsx)("ul",{children:t.slice(3,7).map((function(e,t){return Object(f.jsx)(k,{stat:e},t)}))})})]})})};D.defaultProps={};var I=D,S=s(18),A=s.n(S),L=function(e){var t=e.fact,s=t.number,a=t.icon,i=t.textBold,l=t.text,c=e.delay;return Object(f.jsx)("div",{className:"col-lg-3 col-md-6 d-md-flex align-items-md-stretch","data-aos":"fade-up","data-aos-delay":100*c,children:Object(f.jsxs)("div",{className:"count-box",children:[Object(f.jsx)("i",{className:a}),Object(f.jsx)("span",{"data-purecounter-start":"0","data-purecounter-end":s,"data-purecounter-duration":"1",className:"purecounter"}),Object(f.jsxs)("p",{children:[Object(f.jsx)("strong",{children:i})," ",l]})]})})},M=function(e){var t=e.facts;return Object(f.jsxs)("div",{className:A.a.Facts,"data-testid":"Facts",children:[Object(f.jsxs)("div",{className:"section-title",children:[Object(f.jsx)("h4",{children:"Facts"}),Object(f.jsx)("p",{children:t.factIntro})]}),Object(f.jsx)("div",{className:"row no-gutters",children:t.list.map((function(e,t){return Object(f.jsx)(L,{fact:e,delay:t},t)}))})]})};M.defaultProps={};var C=M,P=s(19),T=s.n(P),B=function(e){var t=e.scores,s=t.intro,a=t.abilities,i=a.strength,l=a.dexterity,c=a.constitution,o=a.wisdom,r=a.intelligence,n=a.charisma;return Object(f.jsx)("div",{className:T.a.Scores,"data-testid":"Scores",children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsxs)("div",{className:"section-title",children:[Object(f.jsx)("h4",{children:"Ability Scores"}),Object(f.jsx)("p",{children:s})]}),Object(f.jsxs)("div",{className:"row skills-content",children:[Object(f.jsxs)("div",{className:"col-lg-6","data-aos":"fade-up",children:[Object(f.jsxs)("div",{className:"progress",children:[Object(f.jsxs)("span",{className:"skill",children:["Strength ",Object(f.jsx)("i",{className:"val",children:i})]}),Object(f.jsx)("div",{className:"progress-bar-wrap",children:Object(f.jsx)("div",{className:"progress-bar",role:"progressbar","aria-valuenow":5*i,"aria-valuemin":"0","aria-valuemax":"100"})})]}),Object(f.jsxs)("div",{className:"progress",children:[Object(f.jsxs)("span",{className:"skill",children:["Dexterity ",Object(f.jsx)("i",{className:"val",children:l})]}),Object(f.jsx)("div",{className:"progress-bar-wrap",children:Object(f.jsx)("div",{className:"progress-bar",role:"progressbar","aria-valuenow":5*l,"aria-valuemin":"0","aria-valuemax":"100"})})]}),Object(f.jsxs)("div",{className:"progress",children:[Object(f.jsxs)("span",{className:"skill",children:["Constitution ",Object(f.jsx)("i",{className:"val",children:c})]}),Object(f.jsx)("div",{className:"progress-bar-wrap",children:Object(f.jsx)("div",{className:"progress-bar",role:"progressbar","aria-valuenow":5*c,"aria-valuemin":"0","aria-valuemax":"100"})})]})]}),Object(f.jsxs)("div",{className:"col-lg-6","data-aos":"fade-up","data-aos-delay":"100",children:[Object(f.jsxs)("div",{className:"progress",children:[Object(f.jsxs)("span",{className:"skill",children:["Intelligence ",Object(f.jsx)("i",{className:"val",children:r})]}),Object(f.jsx)("div",{className:"progress-bar-wrap",children:Object(f.jsx)("div",{className:"progress-bar",role:"progressbar","aria-valuenow":5*r,"aria-valuemin":"0","aria-valuemax":"100"})})]}),Object(f.jsxs)("div",{className:"progress",children:[Object(f.jsxs)("span",{className:"skill",children:["Wisdom ",Object(f.jsx)("i",{className:"val",children:o})]}),Object(f.jsx)("div",{className:"progress-bar-wrap",children:Object(f.jsx)("div",{className:"progress-bar",role:"progressbar","aria-valuenow":5*o,"aria-valuemin":"0","aria-valuemax":"100"})})]}),Object(f.jsxs)("div",{className:"progress",children:[Object(f.jsxs)("span",{className:"skill",children:["Charisma ",Object(f.jsx)("i",{className:"val",children:n})]}),Object(f.jsx)("div",{className:"progress-bar-wrap",children:Object(f.jsx)("div",{className:"progress-bar",role:"progressbar","aria-valuenow":5*n,"aria-valuemin":"0","aria-valuemax":"100"})})]})]})]})]})})};B.defaultProps={};var q=B,H=function(e){var t=e.player,s=t.pageLink,a=t.name,i=t.title,l=t.links,c=t.imgBefore,o=t.imgAfter,r=t.about,n=t.bio,d=t.stats,j=t.facts,h=t.scores;return Object(f.jsxs)("div",{className:N.a.Player,"data-testid":"Player",children:[Object(f.jsx)("section",{id:s,className:"about",children:Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)("div",{className:"section-title",children:[Object(f.jsx)("h2",{children:a}),Object(f.jsx)("p",{children:i}),Object(f.jsx)(g,{links:l,align:"text-left"})]})})}),Object(f.jsx)("section",{className:"about",children:Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("div",{className:"col-lg-4","data-aos":"fade-right",children:Object(f.jsxs)("div",{className:"cocoen",children:[Object(f.jsx)("img",{src:c,alt:""}),Object(f.jsx)("img",{src:o,className:"img-fluid",alt:""})]})}),Object(f.jsxs)("div",{className:"col-lg-8 pt-4 pt-lg-0 content","data-aos":"fade-left",children:[Object(f.jsx)("h4",{children:"About Me"}),Object(f.jsx)("p",{className:"fst-italic",children:r}),Object(f.jsx)(I,{stats:d}),n]})]})})}),Object(f.jsx)("section",{className:"facts section-bg",children:Object(f.jsx)("div",{className:"container",children:Object(f.jsx)(C,{facts:j})})}),Object(f.jsx)("section",{className:"skills",children:Object(f.jsx)(q,{scores:h})})]})};H.defaultProps={};var G=H,W={links:[{href:"https://twitch.tv/legiondnd",type:"twitch"},{href:"https://open.spotify.com/show/328NIJPzQryj6YFFD6Sdaj",type:"spotify"},{href:"https://www.youtube.com/channel/UCfMhhsGRn-sdwQq2zVSiI-A",type:"youtube"}],players:{dave:{pageLink:"dave",icon:"fas fa-dice-d20",firstName:"Dave",name:"Dave Hampton",title:"The Disappointing Dungeon Master",links:[{href:"https://www.instagram.com/disappointing_dm/",type:"instagram"},{href:"https://twitter.com/DisappointingDm",type:"twitter"},{href:"https://www.tiktok.com/@disappointingdm",type:"tiktok"}],about:"I love the shared story telling aspect of D&D. I tend to do the actual rules stuff rather poorly. This is what makes me so disappointing. I have also been described as purely derivative. Which is totally not true. I'm not that good at math.",stats:[{title:"Vision",value:"Near Sighted + Astigmatism"},{title:"Height",value:"Large Hobbit"},{title:"Flaw",value:"Just like all of me"},{title:"Strength",value:"My Family"},{title:"Charities",value:"Food Share, Yosemite Conservancy"},{title:"Actual Job",value:"Head of Engineering, Captiv8"},{title:"Dance Ability",value:"The Chicken Dance"},{title:"Pets",value:"Myrtle & Fritz (cats)"}],bio:"I started playing D&D at the prime age of 13 with my best friend (he was always the DM.) It was just the two of us as embracing your inner Geek wasn't really that popular back then. We wasted countless hours drinking Pepsi and rolling dice when we played after school. My cherished possession at that time was my first edition Player's Handbook. I have since lost it. #sad.",imgBefore:"img/dave-before.jpg",imgAfter:"img/profile-dave.jpg",facts:{factIntro:"I don't believe that you can understand anything with data and metrics alone. But if you could...",list:[{number:"232",icon:"far fa-smile",textBold:"NPC Characters Made",text:"most of them never used"},{number:"521",icon:"fas fa-head-side-virus",textBold:"Bad Ideas",text:"in an averaqge month"},{number:"1453",icon:"fas fa-headset",textBold:"Hours of Zoom Meetings",text:"wearing pajama bottoms"},{number:"32",icon:"fas fa-user-friends",textBold:"Percent Shorter",text:"than most people"}]},scores:{intro:"With each passing year all of my scores seem to decrease. Although this could be depressing - If you view it as an increase in available potential, it's not half bad. I think the only reason my 'charisma' is so high is because Zoom makes me look taller, younger, and more handsome. I am much more disappointing in real life.",abilities:{strength:7,dexterity:8,constitution:9,intelligence:10,wisdom:11,charisma:13}}},baxter:{pageLink:"baxter",icon:"fas fa-fist-raised",firstName:"Baxter",name:"David Baxter",title:"Rocky Kilmage - Human Ranger",links:[],about:"REDACTED",stats:[],bio:"",imgBefore:"img/baxter-before.jpg",imgAfter:"img/baxter-after.jpg",facts:{factIntro:"",list:[]},scores:{intro:"",abilities:{strength:17,dexterity:18,constitution:19,intelligence:10,wisdom:11,charisma:13}}},jeff:{pageLink:"jeff",icon:"fas fa-user-ninja",firstName:"Jeff",name:"Jeff Annison",title:"Rampuri - Human Monk",links:[],about:"Working on it",stats:[],bio:"",imgBefore:"img/dd.jpg",imgAfter:"img/dd.jpg",facts:{factIntro:"",list:[]},scores:{intro:"",abilities:{strength:2,dexterity:3,constitution:5,intelligence:7,wisdom:20,charisma:1}}},mandy:{pageLink:"mandy",icon:"fas fa-hat-wizard",firstName:"Mandy",name:"Mandy Bardisbanian",title:"Kondra - High Elf Wizard",links:[],about:"Under Legal Review",stats:[],bio:"",imgBefore:"img/mandy-before.jpg",imgAfter:"img/mandy-after.jpg",facts:{factIntro:"",list:[]},scores:{intro:"",abilities:{strength:2,dexterity:13,constitution:11,intelligence:12,wisdom:10,charisma:12}}},matan:{pageLink:"matan",icon:"fas fa-guitar",firstName:"Matan",name:"Matan Goldstein",title:"Zancorin Aldoris - Halfling Bard",links:[{href:"https://www.instagram.com/g_eidolon/",type:"instagram"},{href:"https://twitter.com/G_eidolon",type:"twitter"},{href:"https://www.tiktok.com/@asexualmemes?lang=en",type:"tiktok"}],about:"I love D&D because I have always been awed by fantasy and all the possible worlds that could exist in it, but most importantly be able to escape into it.",stats:[{title:"Vision",value:"Near Sighted + Astigmatism"},{title:"Height",value:"Larger than a dwarf, smaller than a giant"},{title:"Flaw",value:"ADD"},{title:"Strength",value:"My Wife"},{title:"Charities",value:"GiveWell"},{title:"Actual Job",value:"Support Engineer, 3PL Central"},{title:"Dance Ability",value:"I can wiggle my fingers to the beat"},{title:"Pets",value:"Hermione, Ryan, & George (cats)"}],bio:"In real life, I am neutral good. I believe the most important aspect of humanity is to be good. And unlike the stupid-af philosopher Kant, being good does not always mean following the law to the letter. To be good, you must follow the spirit of the law, using your humanity to judge when the law must be diverged from. In D&D, I exclusively play Neutral or Chaotic Good. I don't believe Lawful Good is possible, as laws often directly contradict doing Good. I'm too anxious to play an evil character.",imgBefore:"img/matan.jpg",imgAfter:"img/matan.jpg",facts:{factIntro:"Me. By the numbers",list:[{number:"8",icon:"fas fa-infinity",textBold:"Is a Magical Number",text:"because it is infinite. Sideways. But infinite."},{number:"328",icon:"fas fa-book-open",textBold:"Hours of Contract reading",text:"in their entirety"},{number:"3",icon:"fas fa-chart-pie",textBold:"well, 3.14 Pies Eaten",text:"per day (repeating infinitly)"},{number:"20",icon:"fas fa-bullseye",textBold:"Shurikens",text:"thrown at target"}]},scores:{intro:"Challenge me to anything! Based on my stats, I'll probably lose.",abilities:{strength:6,dexterity:8,constitution:8,intelligence:12,wisdom:12,charisma:12}}},paul:{pageLink:"paul",icon:"fas fa-hand-sparkles",firstName:"Paul",name:"Paul Scanlan",title:"Corleone - Half Drow Warlock",links:[],about:"Just been really busy'",stats:[],bio:"",imgBefore:"img/paul-before.jpg",imgAfter:"img/paul-after.jpg",facts:{factIntro:"",list:[]},scores:{intro:"",abilities:{strength:2,dexterity:13,constitution:11,intelligence:12,wisdom:10,charisma:12}}},taylor:{pageLink:"taylor",icon:"fas fa-fish",firstName:"Taylor",name:"Taylor Gledhill",title:"Pele 'LeTrout' Cyclone - Half Aquatic Elf Rogue",links:[],about:"brb",stats:[],bio:"",imgBefore:"img/taylor.jpg",imgAfter:"img/taylor.jpg",facts:{factIntro:"",list:[]},scores:{intro:"",abilities:{strength:2,dexterity:2,constitution:2,intelligence:2,wisdom:2,charisma:2}}},terri:{pageLink:"terri",icon:"fas fa-dragon",firstName:"Terri",name:"Terri Lubaroff",title:"Tatiana Lightstorm - Dragonborn Paladin",links:[],about:"One Sec!",stats:[],bio:"",imgBefore:"dd.jpg",imgAfter:"dd.jpg",facts:{factIntro:"",list:[]},scores:{intro:"",abilities:{strength:2,dexterity:3,constitution:3,intelligence:3,wisdom:3,charisma:3}}}}},E=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(r,e);var t,s,c,o=n(r);function r(){return a(this,r),o.apply(this,arguments)}return t=r,(s=[{key:"componentDidMount",value:function(){var e=function(e){var t=document.createElement("script");t.async=!1,t.src=e,document.getElementsByTagName("body")[0].appendChild(t)};e("/js/main.js"),e("/vendor/purecounter/purecounter.js"),document.querySelectorAll(".cocoen").forEach((function(e){window.Cocoen.create(e,{start:10,color:"#c02e07"})}))}},{key:"render",value:function(){return Object(f.jsxs)("div",{className:"styles.Whole","data-testid":"Whole",children:[Object(f.jsx)("i",{className:"bi bi-list mobile-nav-toggle d-xl-none"}),Object(f.jsx)(O,{data:W}),Object(f.jsx)("section",{id:"hero",className:"d-flex flex-column justify-content-center align-items-center",children:Object(f.jsxs)("div",{className:"hero-container","data-aos":"fade-in",children:[Object(f.jsx)("h1",{children:"LEGION DND"}),Object(f.jsxs)("p",{children:["The More You ",Object(f.jsx)("span",{className:"typed","data-typed-items":"Roll, Role, Troll, Gnoll, Bowl?, Laugh, Live, Love"})]})]})}),Object(f.jsxs)("main",{id:"main",children:[Object.keys(W.players).map((function(e){return Object(f.jsx)(G,{player:W.players[e]},e)})),Object(f.jsx)("section",{id:"shop",className:"portfolio",children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsxs)("div",{className:"section-title",children:[Object(f.jsx)("h2",{children:"Shop"}),Object(f.jsx)("p",{children:"Look at these great products you can buy at the LegionM store!"})]}),Object(f.jsx)("div",{className:"row","data-aos":"fade-up",children:Object(f.jsx)("div",{className:"col-lg-12 d-flex justify-content-center",children:Object(f.jsxs)("ul",{id:"portfolio-flters",children:[Object(f.jsx)("li",{"data-filter":"*",className:"filter-active",children:"All"}),Object(f.jsx)("li",{"data-filter":".filter-app",children:"Clothing"}),Object(f.jsx)("li",{"data-filter":".filter-card",children:"Mugs"}),Object(f.jsx)("li",{"data-filter":".filter-web",children:"NFTs"})]})})}),Object(f.jsxs)("div",{className:"row portfolio-container","data-aos":"fade-up","data-aos-delay":"100",children:[Object(f.jsx)("div",{className:"col-lg-4 col-md-6 portfolio-item filter-app",children:Object(f.jsxs)("div",{className:"portfolio-wrap",children:[Object(f.jsx)("img",{src:"img/portfolio/portfolio-1.jpg",className:"img-fluid",alt:""}),Object(f.jsxs)("div",{className:"portfolio-links",children:[Object(f.jsx)("a",{href:"img/portfolio/portfolio-1.jpg","data-gallery":"portfolioGallery",className:"portfolio-lightbox",title:"App 1",children:Object(f.jsx)("i",{className:"fas fa-search-plus"})}),Object(f.jsx)("a",{href:"https://shop.legionm.com/collections/legiondnd",title:"More Details",children:Object(f.jsx)("i",{className:"fas fa-shopping-bag"})})]})]})}),Object(f.jsx)("div",{className:"col-lg-4 col-md-6 portfolio-item filter-app",children:Object(f.jsxs)("div",{className:"portfolio-wrap",children:[Object(f.jsx)("img",{src:"img/portfolio/portfolio-2.jpg",className:"img-fluid",alt:""}),Object(f.jsxs)("div",{className:"portfolio-links",children:[Object(f.jsx)("a",{href:"img/portfolio/portfolio-2.jpg","data-gallery":"portfolioGallery",className:"portfolio-lightbox",title:"Web 3",children:Object(f.jsx)("i",{className:"fas fa-search-plus"})}),Object(f.jsx)("a",{href:"https://shop.legionm.com/collections/legiondnd",title:"More Details",children:Object(f.jsx)("i",{className:"fas fa-shopping-bag"})})]})]})}),Object(f.jsx)("div",{className:"col-lg-4 col-md-6 portfolio-item filter-app",children:Object(f.jsxs)("div",{className:"portfolio-wrap",children:[Object(f.jsx)("img",{src:"img/portfolio/portfolio-3.jpg",className:"img-fluid",alt:""}),Object(f.jsxs)("div",{className:"portfolio-links",children:[Object(f.jsx)("a",{href:"img/portfolio/portfolio-3.jpg","data-gallery":"portfolioGallery",className:"portfolio-lightbox",title:"App 2",children:Object(f.jsx)("i",{className:"fas fa-search-plus"})}),Object(f.jsx)("a",{href:"https://shop.legionm.com/collections/legiondnd",title:"More Details",children:Object(f.jsx)("i",{className:"fas fa-shopping-bag"})})]})]})}),Object(f.jsx)("div",{className:"col-lg-4 col-md-6 portfolio-item filter-card",children:Object(f.jsxs)("div",{className:"portfolio-wrap",children:[Object(f.jsx)("img",{src:"img/portfolio/portfolio-4.jpg",className:"img-fluid",alt:""}),Object(f.jsxs)("div",{className:"portfolio-links",children:[Object(f.jsx)("a",{href:"img/portfolio/portfolio-4.jpg","data-gallery":"portfolioGallery",className:"portfolio-lightbox",title:"Card 2",children:Object(f.jsx)("i",{className:"fas fa-search-plus"})}),Object(f.jsx)("a",{href:"https://shop.legionm.com/collections/legiondnd",title:"More Details",children:Object(f.jsx)("i",{className:"fas fa-shopping-bag"})})]})]})}),Object(f.jsx)("div",{className:"col-lg-4 col-md-6 portfolio-item filter-app",children:Object(f.jsxs)("div",{className:"portfolio-wrap",children:[Object(f.jsx)("img",{src:"img/portfolio/portfolio-5.jpg",className:"img-fluid",alt:""}),Object(f.jsxs)("div",{className:"portfolio-links",children:[Object(f.jsx)("a",{href:"img/portfolio/portfolio-5.jpg","data-gallery":"portfolioGallery",className:"portfolio-lightbox",title:"Web 2",children:Object(f.jsx)("i",{className:"fas fa-search-plus"})}),Object(f.jsx)("a",{href:"https://shop.legionm.com/collections/legiondnd",title:"More Details",children:Object(f.jsx)("i",{className:"fas fa-shopping-bag"})})]})]})})]})]})}),Object(f.jsx)("section",{id:"where",className:"services section-bg",children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsxs)("div",{className:"section-title",children:[Object(f.jsx)("h2",{children:"Where to Watch & Listen"}),Object(f.jsx)("p",{children:"You can catch us on all the things!"})]}),Object(f.jsxs)("div",{className:"row",children:[Object(f.jsxs)("div",{className:"col-lg-4 col-md-6 icon-box","data-aos":"fade-up",children:[Object(f.jsx)("div",{className:"icon",children:Object(f.jsx)("i",{className:"fab fa-twitch"})}),Object(f.jsx)("h4",{className:"title",children:Object(f.jsx)("a",{href:"https://twitch.tv/legiondnd",children:"Twitch"})}),Object(f.jsx)("p",{className:"description",children:"Catch us every Tuesday evening at 6:30(ish) Pacific! Watch the trainwreck in real time! Chat with us! Vote on story plots and mild player inconveniences"})]}),Object(f.jsxs)("div",{className:"col-lg-4 col-md-6 icon-box","data-aos":"fade-up","data-aos-delay":"100",children:[Object(f.jsx)("div",{className:"icon",children:Object(f.jsx)("i",{className:"fab fa-youtube"})}),Object(f.jsx)("h4",{className:"title",children:Object(f.jsx)("a",{href:"https://www.youtube.com/channel/UCfMhhsGRn-sdwQq2zVSiI-A",children:"YouTube"})}),Object(f.jsx)("p",{className:"description",children:"Can't make it on Tuesday but still want to watch the trainwreck instead of listen? Or perhaps speed it up 10X? - Youtube is for you!"})]}),Object(f.jsxs)("div",{className:"col-lg-4 col-md-6 icon-box","data-aos":"fade-up","data-aos-delay":"200",children:[Object(f.jsx)("div",{className:"icon",children:Object(f.jsx)("i",{className:"fab fa-spotify"})}),Object(f.jsx)("h4",{className:"title",children:Object(f.jsx)("a",{href:"https://open.spotify.com/show/328NIJPzQryj6YFFD6Sdaj",children:"Spotify"})}),Object(f.jsx)("p",{className:"description",children:"Are we on the world's largest streaming service? Yes we are!"})]}),Object(f.jsxs)("div",{className:"col-lg-4 col-md-6 icon-box","data-aos":"fade-up","data-aos-delay":"300",children:[Object(f.jsx)("div",{className:"icon",children:Object(f.jsx)("i",{className:"fas fa-podcast"})}),Object(f.jsx)("h4",{className:"title",children:Object(f.jsx)("a",{href:"https://podcasts.apple.com/us/podcast/legiondnd/id1547728190",children:"Apple Podcasts"})}),Object(f.jsx)("p",{className:"description",children:"Yes! We are here too! So you never have to leave your Apple fanboy eco-system if you don't want to!"})]}),Object(f.jsxs)("div",{className:"col-lg-4 col-md-6 icon-box","data-aos":"fade-up","data-aos-delay":"400",children:[Object(f.jsx)("div",{className:"icon",children:Object(f.jsx)("i",{className:"fab fa-google"})}),Object(f.jsx)("h4",{className:"title",children:Object(f.jsx)("a",{href:"https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy80NmNhNDM5Yy9wb2RjYXN0L3Jzcw",children:"Google Podcasts"})}),Object(f.jsx)("p",{className:"description",children:"Or your Google fanboy eco-system..."})]}),Object(f.jsxs)("div",{className:"col-lg-4 col-md-6 icon-box","data-aos":"fade-up","data-aos-delay":"500",children:[Object(f.jsx)("div",{className:"icon",children:Object(f.jsx)("i",{className:"fas fa-sitemap"})}),Object(f.jsx)("h4",{className:"title",children:Object(f.jsx)("a",{href:"#d",children:"Website"})}),Object(f.jsx)("p",{className:"description",children:"Visit this Website to end up right back here again!"})]})]})]})}),Object(f.jsx)("section",{id:"testimonials",className:"testimonials",children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsxs)("div",{className:"section-title",children:[Object(f.jsx)("h2",{children:"Testimonials"}),Object(f.jsx)("p",{children:"Check out what these actual viewers and listeners said about watching Legion DND!"})]}),Object(f.jsxs)("div",{className:"testimonials-slider swiper-container","data-aos":"fade-up","data-aos-delay":"100",children:[Object(f.jsxs)("div",{className:"swiper-wrapper",children:[Object(f.jsx)("div",{className:"swiper-slide",children:Object(f.jsxs)("div",{className:"testimonial-item","data-aos":"fade-up",children:[Object(f.jsxs)("p",{children:[Object(f.jsx)("i",{className:"fas fa-quote-left quote-icon-left"}),"Dave is the most Amazing DM I have ever heard. He is like really super good and whatever. He does all the DM things so good... Can I have my twenty bucks now?",Object(f.jsx)("i",{className:"fas fa-quote-right quote-icon-right"})]}),Object(f.jsx)("img",{src:"img/testimonials/testimonials-1.jpg",className:"testimonial-img",alt:""}),Object(f.jsx)("h3",{children:"Saul Goodman"}),Object(f.jsx)("h4",{children:"Paid Endorser"})]})}),Object(f.jsx)("div",{className:"swiper-slide",children:Object(f.jsxs)("div",{className:"testimonial-item","data-aos":"fade-up","data-aos-delay":"100",children:[Object(f.jsxs)("p",{children:[Object(f.jsx)("i",{className:"fas fa-quote-left quote-icon-left"}),"Myself and a bunch of my stock photo friends get together every Tuesday and watch and listen to LegionDND. Unlike us, they are real people and the world they weave is truly memorable.",Object(f.jsx)("i",{className:"fas fa-quote-right quote-icon-right"})]}),Object(f.jsx)("img",{src:"img/testimonials/testimonials-2.jpg",className:"testimonial-img",alt:""}),Object(f.jsx)("h3",{children:"Sara Wilsson"}),Object(f.jsx)("h4",{children:"Model"})]})}),Object(f.jsx)("div",{className:"swiper-slide",children:Object(f.jsxs)("div",{className:"testimonial-item","data-aos":"fade-up","data-aos-delay":"200",children:[Object(f.jsxs)("p",{children:[Object(f.jsx)("i",{className:"fas fa-quote-left quote-icon-left"}),"Hey evry1! I snuck in line and they didn't notice me! LOLZ! Such losers, right?! Anyone who can't lock down their fake testimonials is a loser! Don't watch or listen to the show! They suk! Jena out!",Object(f.jsx)("i",{className:"fas fa-quote-right quote-icon-right"})]}),Object(f.jsx)("img",{src:"img/testimonials/testimonials-3.jpg",className:"testimonial-img",alt:""}),Object(f.jsx)("h3",{children:"Jena Karlis"}),Object(f.jsx)("h4",{children:"Angst-Filled Teen"})]})}),Object(f.jsx)("div",{className:"swiper-slide",children:Object(f.jsxs)("div",{className:"testimonial-item","data-aos":"fade-up","data-aos-delay":"300",children:[Object(f.jsxs)("p",{children:[Object(f.jsx)("i",{className:"fas fa-quote-left quote-icon-left"}),"Super motivated to be here all! Amazing! Check out my new start up - It's called [REDACTED] It's like a total disruptor in the personal Pet Care space. Just like Apple, Google, and Tesla - we're the thought-leader.",Object(f.jsx)("i",{className:"fas fa-quote-right quote-icon-right"})]}),Object(f.jsx)("img",{src:"img/testimonials/testimonials-4.jpg",className:"testimonial-img",alt:""}),Object(f.jsx)("h3",{children:"Matt Brandon"}),Object(f.jsx)("h4",{children:"Entrepreneur & CEO"})]})}),Object(f.jsx)("div",{className:"swiper-slide",children:Object(f.jsxs)("div",{className:"testimonial-item","data-aos":"fade-up","data-aos-delay":"400",children:[Object(f.jsxs)("p",{children:[Object(f.jsx)("i",{className:"fas fa-quote-left quote-icon-left"}),"Hello? Is this Quizno's? I'd like to order a Chipolte Turkey sandwich, some Jalepe\xf1o chips and a Diet Coke. Hello? Damnit. I hate these automated lines. TIMMY! Don't hit your sister! Don't make me put down this phone. Thats it! TIM---",Object(f.jsx)("i",{className:"fas fa-quote-right quote-icon-right"})]}),Object(f.jsx)("img",{src:"img/testimonials/testimonials-5.jpg",className:"testimonial-img",alt:""}),Object(f.jsx)("h3",{children:"John Larson"}),Object(f.jsx)("h4",{children:"Father of three"})]})})]}),Object(f.jsx)("div",{className:"swiper-pagination"})]})]})}),Object(f.jsx)("section",{className:"section-bg",children:Object(f.jsx)(g,{links:W.links})})]}),Object(f.jsx)("footer",{id:"footer",children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("div",{className:"copyright",children:"\xa9 2021 LegionDND"}),Object(f.jsx)("div",{className:"credits",children:Object(f.jsx)("a",{href:"https://toolset.legiondnd.com/",children:"Visit Our Toolset"})})]})}),Object(f.jsx)("a",{href:"#d",className:"back-to-top d-flex align-items-center justify-content-center",children:Object(f.jsx)("i",{className:"bi bi-arrow-up-short"})})]})}}])&&i(t.prototype,s),c&&i(t,c),r}(d.Component);E.defaultProps={};t.default=E}]]);
//# sourceMappingURL=2.d76d9403.chunk.js.map