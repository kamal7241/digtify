import{_ as C,z as I,A as E,B as H,k as l,l as N,q as t,C as V,D as T,s as d,m as r,F as g,E as z,G as p,H as O,I as P}from"./entry.23cf9c23.js";import{d as M,_ as b,a as j,b as B,c as K,e as c,f as F,g as X,h as q,i as G,j as Y,k as J,l as Q,m as W,n as Z,o as _,p as ee}from"./MobileContainer.fca0c8a8.js";const se=Object.freeze({desktop:0,tablet:1,mobile:2}),v={title:"DigifyMena",desc:"Digify is a full-featured digital media consultancy house founded in 2014 that provides all aspects of digital marketing & advertising services."},ne=M({head(){var e,s,i,u;return{htmlAttrs:{lang:"en"},title:v.title,meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:v.desc},{name:"robots",content:"index,follow"},{hid:"twitter:card",name:"twitter:card",content:"summary_large_image"},{hid:"twitter:site",name:"twitter:site",content:"@DigifyMENA"},{hid:"twitter:url",name:"twitter:url",content:(e=process.env)==null?void 0:e.NUXT_DOMAIN},{hid:"twitter:title",name:"twitter:title",content:v.title},{hid:"twitter:description",name:"twitter:description",content:v.desc},{hid:"twitter:image",name:"twitter:image",content:((s=process.env)==null?void 0:s.NUXT_DOMAIN)+"/favicon.ico"},{property:"og:title",content:"DIGIFY"},{property:"og:description",content:"Digify is a full-featured digital media consultancy house founded in 2014 that provides all aspects of digital marketing & advertising services."},{property:"og:image",content:((i=process.env)==null?void 0:i.NUXT_DOMAIN)+"/favicon.ico"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"},{rel:"canonical",href:(u=process.env)==null?void 0:u.NUXT_DOMAIN}],script:[{src:"https://smtpjs.com/v3/smtp.js",body:!0}]}},data(){return{show:!0,index:0,slidersReset:[void 0,void 0,void 0,void 0,void 0,void 0],isPressNext:!1,isPressPrev:!1,slidersNumbers:[2,2,7,4,2,4],activeSlideIndex:0,keyboardDebouncedHandler:void 0,prevArrowDebouncedHandler:void 0,nextArrowDebouncedHandler:void 0}},computed:{SCREENS(){return se},...I(P,["isLoader"]),...E(P)},watch:{index(e,s){this.slidersReset=this.slidersReset.map((i,u)=>u!=this.index?!0:this.slidersReset[this.index]),this.activeSlideIndex=0,e!=s&&this.$refs.snapItems[this.index].$el.scrollIntoView({block:"start",behavior:"smooth"})}},methods:{onSlidePrev(){this.debouncedHandler||(this.prevArrowDebouncedHandler=b.debounce(()=>this.slidePrev(),500)),this.prevArrowDebouncedHandler()},onSlideNext(){this.debouncedHandler||(this.nextArrowDebouncedHandler=b.debounce(()=>this.slideNext(),500)),this.nextArrowDebouncedHandler()},slidePrev(){this.isPressPrev=!0},slideNext(){this.isPressNext=!0},onKeyDown(e){const[s,i]=Object.freeze(["ArrowDown","ArrowUp"]);e.key==s?this.isPressNext=!0:e.key==i&&(this.isPressPrev=!0)},registerArrowsScroll(){onkeydown=e=>{Object.freeze(["ArrowDown","ArrowUp"]).some(i=>e.key==i)&&e.preventDefault(),this.debouncedHandler||(this.keyboardDebouncedHandler=b.debounce(i=>this.onKeyDown(i),500)),this.keyboardDebouncedHandler(e)}},updateActiveSlide(e,s){this.index==s&&(this.activeSlideIndex=e)},onReach(e){this.$nextTick(()=>{this.index=e})},next(){this.$nextTick(()=>{this.index++})},prev(){this.$nextTick(()=>{this.index--})},async loadUntilFontsReady(){this.showLoader(),await document.fonts.ready,this.hideLoader()},showLoader(){this.mainStore.showLoader()},hideLoader(){this.mainStore.hideLoader()}},mounted(){this.registerArrowsScroll(),H(()=>import("./bootstrap.esm.d0d6db02.js"),[],import.meta.url).then(({Tooltip:e})=>{[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function(i){return new e(i)}),this.loadUntilFontsReady()})}},"$PslAyef5YX"),te={class:"navigators-btns w-100 position-fixed bottom-0 end-0"},re={class:"container-fluid text-end"},ie={class:"pe-0 pb-3 d-inline-flex flex-column gap-3"},oe={class:"control-navs__btns d-flex flex-column align-items-center gap-3"},de=["disabled"],le=r("span",{class:"icon-up-chevron-svgrepo-com h5"},null,-1),ae=[le],pe=["disabled"],ue=r("span",{class:"icon-down-chevron-svgrepo-com h5"},null,-1),ve=[ue],me={class:"navigators-btns w-100 position-fixed bottom-0 end-0"},fe={class:"container-fluid text-end"},be={class:"pe-0 pb-3 d-inline-flex flex-column gap-3"},Ne={class:"navigators-btns w-100 position-fixed bottom-0 end-0"},ge={class:"container-fluid text-end"},Pe={class:"pe-0 pb-3 d-inline-flex flex-column gap-3"};function we(e,s,i,u,$e,he){const w=j,$=B,m=K,h=c,a=F,S=X,x=q,y=G,R=Y,A=J,U=Q,D=W,f=Z,k=_,L=ee;return l(),N(g,null,[t(w,{show:e.isLoader},null,8,["show"]),V(t(f,{screens:[e.SCREENS.desktop]},{default:d(()=>[t($),r("div",te,[r("div",re,[r("div",ie,[t(m,{"drop-direction":1}),r("div",oe,[r("button",{onClick:s[0]||(s[0]=(...o)=>e.onSlidePrev&&e.onSlidePrev(...o)),disabled:e.index==0&&e.activeSlideIndex==0,class:"pointer-events-auto show fade shadow-primary animate__animated btn btn-outline-light p-2 border-2 rounded-circle square-size z-1"},ae,8,de),r("button",{disabled:e.index==5&&e.activeSlideIndex==e.slidersNumbers[e.slidersNumbers.length-1]-1,onClick:s[1]||(s[1]=(...o)=>e.onSlideNext&&e.onSlideNext(...o)),class:"pointer-events-auto show fade shadow-primary animate__animated btn btn-outline-light p-2 border-2 rounded-circle square-size z-1"},ve,8,pe)])])])]),t(D,{disable:!1,"full-screen":""},{default:d(()=>[(l(),N(g,null,z(6,o=>t(U,{ref_for:!0,ref:"snapItems",key:"scroll-snap"+o},{default:d(()=>[o==1?(l(),p(a,{key:0,"press-next":e.index==0?e.isPressNext:!1,"onUpdate:pressNext":s[3]||(s[3]=n=>e.isPressNext=!1),"press-prev":e.index==0?e.isPressPrev:!1,"onUpdate:pressPrev":s[4]||(s[4]=n=>e.isPressPrev=!1),name:"banner",onSlideChange:s[5]||(s[5]=n=>e.updateActiveSlide(n,0)),reset:e.slidersReset[0]&&e.index==0,"model-value":e.index==e.index,"onUpdate:modelValue":s[6]||(s[6]=n=>e.index=0),class:"h-100","onLeave:next":s[7]||(s[7]=n=>e.index++),slidesNumber:e.slidersNumbers[0]},{default:d(({slide:n})=>[t(h,{onReset:s[2]||(s[2]=Se=>e.slidersReset[0]?e.slidersReset[0]=!1:""),"current-progress":n},null,8,["current-progress"])]),_:1},8,["press-next","press-prev","reset","model-value","slidesNumber"])):o==2?(l(),p(a,{key:1,"press-next":e.index==1?e.isPressNext:!1,"onUpdate:pressNext":s[8]||(s[8]=n=>e.isPressNext=!1),"press-prev":e.index==1?e.isPressPrev:!1,"onUpdate:pressPrev":s[9]||(s[9]=n=>e.isPressPrev=!1),onSlideChange:s[10]||(s[10]=n=>e.updateActiveSlide(n,1)),name:"about us",reset:e.slidersReset[1],onReset:s[11]||(s[11]=n=>e.slidersReset[1]=!1),"model-value":e.index==1,"onUpdate:modelValue":s[12]||(s[12]=n=>e.index=1),class:"h-100","first-reach":e.index==1,"onLeave:next":s[13]||(s[13]=n=>e.index++),"onLeave:prev":s[14]||(s[14]=n=>e.index--),slidesNumber:e.slidersNumbers[1]},{default:d(({slide:n})=>[t(S,{"current-progress":n},null,8,["current-progress"])]),_:1},8,["press-next","press-prev","reset","model-value","first-reach","slidesNumber"])):o==3?(l(),p(a,{key:2,"press-next":e.index==2?e.isPressNext:!1,"onUpdate:pressNext":s[15]||(s[15]=n=>e.isPressNext=!1),"press-prev":e.index==2?e.isPressPrev:!1,"onUpdate:pressPrev":s[16]||(s[16]=n=>e.isPressPrev=!1),onSlideChange:s[17]||(s[17]=n=>e.updateActiveSlide(n,2)),reset:e.slidersReset[2],onReset:s[18]||(s[18]=n=>e.slidersReset[2]=!1),"model-value":e.index==2,"onUpdate:modelValue":s[19]||(s[19]=n=>e.index=2),class:"h-100","first-reach":e.index==2,"onLeave:next":s[20]||(s[20]=n=>e.index++),"onLeave:prev":s[21]||(s[21]=n=>e.index--),slidesNumber:e.slidersNumbers[2]},{default:d(({slide:n})=>[t(x,{"current-progress":n},null,8,["current-progress"])]),_:1},8,["press-next","press-prev","reset","model-value","first-reach","slidesNumber"])):o==4?(l(),p(a,{key:3,"press-next":e.index==3?e.isPressNext:!1,"onUpdate:pressNext":s[22]||(s[22]=n=>e.isPressNext=!1),"press-prev":e.index==3?e.isPressPrev:!1,"onUpdate:pressPrev":s[23]||(s[23]=n=>e.isPressPrev=!1),onSlideChange:s[24]||(s[24]=n=>e.updateActiveSlide(n,3)),reset:e.slidersReset[3],onReset:s[25]||(s[25]=n=>e.slidersReset[3]=!1),"model-value":e.index==3,"onUpdate:modelValue":s[26]||(s[26]=n=>e.index=3),class:"h-100","first-reach":e.index==3,"onLeave:next":s[27]||(s[27]=n=>e.index++),"onLeave:prev":s[28]||(s[28]=n=>e.index--),slidesNumber:e.slidersNumbers[3]},{default:d(({slide:n})=>[t(y,{"current-progress":n},null,8,["current-progress"])]),_:1},8,["press-next","press-prev","reset","model-value","first-reach","slidesNumber"])):o==5?(l(),p(a,{key:4,"press-next":e.index==4?e.isPressNext:!1,"onUpdate:pressNext":s[29]||(s[29]=n=>e.isPressNext=!1),"press-prev":e.index==4?e.isPressPrev:!1,"onUpdate:pressPrev":s[30]||(s[30]=n=>e.isPressPrev=!1),onSlideChange:s[31]||(s[31]=n=>e.updateActiveSlide(n,4)),name:"clients",reset:e.slidersReset[4],onReset:s[32]||(s[32]=n=>e.slidersReset[4]=!1),"model-value":e.index==4,"onUpdate:modelValue":s[33]||(s[33]=n=>e.index=4),class:"h-100","first-reach":e.index==4,"onLeave:next":s[34]||(s[34]=n=>e.index++),"onLeave:prev":s[35]||(s[35]=n=>e.index--),slidesNumber:e.slidersNumbers[4]},{default:d(({slide:n})=>[t(R,{"current-progress":n},null,8,["current-progress"])]),_:1},8,["press-next","press-prev","reset","model-value","first-reach","slidesNumber"])):o==6?(l(),p(a,{key:5,"press-next":e.index==5?e.isPressNext:!1,"onUpdate:pressNext":s[36]||(s[36]=n=>e.isPressNext=!1),"press-prev":e.index==5?e.isPressPrev:!1,"onUpdate:pressPrev":s[37]||(s[37]=n=>e.isPressPrev=!1),reset:e.slidersReset[5],onReset:s[38]||(s[38]=n=>e.slidersReset[5]=!1),onSlideChange:s[39]||(s[39]=n=>e.updateActiveSlide(n,5)),name:"contact us","model-value":e.index==5,"onUpdate:modelValue":s[40]||(s[40]=n=>e.index=5),class:"h-100","first-reach":e.index==5,"onLeave:prev":s[41]||(s[41]=n=>e.index--),slidesNumber:e.slidersNumbers[5]},{default:d(({slide:n})=>[t(A,{"current-progress":n},null,8,["current-progress"])]),_:1},8,["press-next","press-prev","reset","model-value","first-reach","slidesNumber"])):O("",!0)]),_:2},1024)),64))]),_:1})]),_:1},8,["screens"]),[[T,!e.isLoader]]),t(f,{screens:[e.SCREENS.tablet]},{default:d(()=>[r("div",me,[r("div",fe,[r("div",be,[t(m,{"drop-direction":1})])])]),t(k)]),_:1},8,["screens"]),t(f,{screens:[e.SCREENS.mobile]},{default:d(()=>[r("div",Ne,[r("div",ge,[r("div",Pe,[t(m,{"drop-direction":1})])])]),t(L)]),_:1},8,["screens"])],64)}const Re=C(ne,[["render",we]]);export{Re as default};