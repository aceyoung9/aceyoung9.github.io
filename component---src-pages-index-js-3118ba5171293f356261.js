"use strict";(self.webpackChunkaceyoung_xyz=self.webpackChunkaceyoung_xyz||[]).push([[678],{8032:function(e,t,a){a.d(t,{L:function(){return m},M:function(){return v},P:function(){return w},S:function(){return D},_:function(){return s},a:function(){return l},b:function(){return A},g:function(){return d},h:function(){return o}});var n=a(7294),r=(a(2369),a(5697)),i=a.n(r);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(a=i[n])>=0||(r[a]=e[a]);return r}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const n={};let r="gatsby-image-wrapper";return"fixed"===a?(n.width=e,n.height=t):"constrained"===a&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:n}}function A(e,t,a,n,r){return void 0===r&&(r={}),l({},a,{loading:n,shouldLoad:e,"data-main-image":"",style:l({},r,{opacity:t?1:0})})}function d(e,t,a,n,r,i,s,o){const c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=n,c.height=r,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),o&&(c.objectPosition=o);const A=l({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:l({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return A}const u=["children"],g=function(e){let{layout:t,width:a,height:r}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${r}'%20width='${a}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},m=function(e){let{children:t}=e,a=s(e,u);return n.createElement(n.Fragment,null,n.createElement(g,l({},a)),t,null)},p=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],f=function(e){let{src:t,srcSet:a,loading:r,alt:i="",shouldLoad:o}=e,c=s(e,p);return n.createElement("img",l({},c,{decoding:"async",loading:r,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:i}))},y=function(e){let{fallback:t,sources:a=[],shouldLoad:r=!0}=e,i=s(e,h);const o=i.sizes||(null==t?void 0:t.sizes),c=n.createElement(f,l({},i,t,{sizes:o,shouldLoad:r}));return a.length?n.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:i}=e;return n.createElement("source",{key:`${t}-${i}-${a}`,type:i,media:t,srcSet:r?a:void 0,"data-srcset":r?void 0:a,sizes:o})})),c):c};var b;f.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},y.displayName="Picture",y.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};const E=["fallback"],w=function(e){let{fallback:t}=e,a=s(e,E);return t?n.createElement(y,l({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",l({},a))};w.displayName="Placeholder",w.propTypes={fallback:r.string,sources:null==(b=y.propTypes)?void 0:b.sources,alt:function(e,t,a){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${a}\`. Validation failed.`):null}};const v=function(e){return n.createElement(n.Fragment,null,n.createElement(y,l({},e)),n.createElement("noscript",null,n.createElement(y,l({},e,{shouldLoad:!0}))))};v.displayName="MainImage",v.propTypes=y.propTypes;const k=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],x=["style","className"],B=e=>e.replace(/\n/g,""),C=function(e,t,a){for(var n=arguments.length,r=new Array(n>3?n-3:0),l=3;l<n;l++)r[l-3]=arguments[l];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(r)):new Error(`The "alt" prop is required in ${a}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},j={image:i().object.isRequired,alt:C},N=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],S=["style","className"],L=new Set;let I,T;const R=function(e){let{as:t="div",image:r,style:i,backgroundColor:A,className:d,class:u,onStartLoad:g,onLoad:m,onError:p}=e,h=s(e,N);const{width:f,height:y,layout:b}=r,E=c(f,y,b),{style:w,className:v}=E,k=s(E,S),x=(0,n.useRef)(),B=(0,n.useMemo)((()=>JSON.stringify(r.images)),[r.images]);u&&(d=u);const C=function(e,t,a){let n="";return"fullWidth"===e&&(n=`<div aria-hidden="true" style="padding-top: ${a/t*100}%;"></div>`),"constrained"===e&&(n=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${a}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),n}(b,f,y);return(0,n.useEffect)((()=>{I||(I=Promise.all([a.e(774),a.e(731)]).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return T=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=x.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==g||g({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void L.add(B);if(T&&L.has(B))return;let t,n;return I.then((e=>{let{renderImageToString:a,swapPlaceholderImage:s}=e;x.current&&(x.current.innerHTML=a(l({isLoading:!0,isLoaded:L.has(B),image:r},h)),L.has(B)||(t=requestAnimationFrame((()=>{x.current&&(n=s(x.current,B,L,i,g,m,p))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[r]),(0,n.useLayoutEffect)((()=>{L.has(B)&&T&&(x.current.innerHTML=T(l({isLoading:L.has(B),isLoaded:L.has(B),image:r},h)),null==g||g({wasCached:!0}),null==m||m({wasCached:!0}))}),[r]),(0,n.createElement)(t,l({},k,{style:l({},w,i,{backgroundColor:A}),className:`${v}${d?` ${d}`:""}`,ref:x,dangerouslySetInnerHTML:{__html:C},suppressHydrationWarning:!0}))},Q=(0,n.memo)((function(e){return e.image?(0,n.createElement)(R,e):null}));Q.propTypes=j,Q.displayName="GatsbyImage";const Y=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function z(e){return function(t){let{src:a,__imageData:r,__error:i}=t,o=s(t,Y);return i&&console.warn(i),r?n.createElement(e,l({image:r},o)):(console.warn("Image not loaded",a),null)}}const O=z((function(e){let{as:t="div",className:a,class:r,style:i,image:o,loading:u="lazy",imgClassName:g,imgStyle:p,backgroundColor:h,objectFit:f,objectPosition:y}=e,b=s(e,k);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;r&&(a=r),p=l({objectFit:f,objectPosition:y,backgroundColor:h},p);const{width:E,height:C,layout:j,images:N,placeholder:S,backgroundColor:L}=o,I=c(E,C,j),{style:T,className:R}=I,Q=s(I,x),Y={fallback:void 0,sources:[]};return N.fallback&&(Y.fallback=l({},N.fallback,{srcSet:N.fallback.srcSet?B(N.fallback.srcSet):void 0})),N.sources&&(Y.sources=N.sources.map((e=>l({},e,{srcSet:B(e.srcSet)})))),n.createElement(t,l({},Q,{style:l({},T,i,{backgroundColor:h}),className:`${R}${a?` ${a}`:""}`}),n.createElement(m,{layout:j,width:E,height:C},n.createElement(w,l({},d(S,!1,j,E,C,L,f,y))),n.createElement(v,l({"data-gatsby-image-ssr":"",className:g},b,A("eager"===u,!1,Y,u,p)))))})),P=function(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(n)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},$=new Set(["fixed","fullWidth","constrained"]),M={src:i().string.isRequired,alt:C,width:P,height:P,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!$.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};O.displayName="StaticImage",O.propTypes=M;const D=z(Q);D.displayName="StaticImage",D.propTypes=M},2369:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,n=/^[\p{Lu}](?![\p{Lu}])/gu,r=/([\p{Alpha}\p{N}_]|$)/u,i=/[_.\- ]+/,l=new RegExp("^"+i.source),s=new RegExp(i.source+r.source,"gu"),o=new RegExp("\\d+"+r.source,"gu"),c=(e,r)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(r={pascalCase:!1,preserveConsecutiveUppercase:!1,...r},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const i=!1===r.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(r.locale),c=!1===r.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(r.locale);if(1===e.length)return r.pascalCase?c(e):i(e);return e!==i(e)&&(e=((e,n,r)=>{let i=!1,l=!1,s=!1;for(let o=0;o<e.length;o++){const c=e[o];i&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),i=!1,s=l,l=!0,o++):l&&s&&a.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),s=l,l=!1,i=!0):(i=n(c)===c&&r(c)!==c,s=l,l=r(c)===c&&n(c)!==c)}return e})(e,i,c)),e=e.replace(l,""),e=r.preserveConsecutiveUppercase?((e,t)=>(n.lastIndex=0,e.replace(n,(e=>t(e)))))(e,i):i(e),r.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(s.lastIndex=0,o.lastIndex=0,e.replace(s,((e,a)=>t(a))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8678:function(e,t,a){var n=a(7294),r=a(2788);const i=(0,r.createGlobalStyle)(["body{background:linear-gradient(120deg,#8e78ff,#fc7d7b);min-height:calc(100vh - 60px);margin:0;color:#273195;font-size:1.4em;line-height:1.4;@media (max-width:600px){min-height:calc(100vh - 40px);font-size:1.2em;}}"]),l=r.default.div.withConfig({displayName:"layout__Container",componentId:"sc-n3tpu-0"})(["background:#f2eff9;margin:60px auto 60px 60px;max-width:780px;padding:30px;box-sizing:border-box;@media (max-width:600px){margin:20px;padding:15px;}h1{margin-top:0;}"]);t.Z=e=>{let{children:t}=e;return n.createElement(n.Fragment,null,n.createElement(i,null),n.createElement(l,null,t))}},6558:function(e,t,a){a.r(t);var n=a(1883),r=a(7294),i=a(8032),l=a(8678);t.default=()=>r.createElement(l.Z,null,r.createElement("h1",null,"Hello, my name is Ace Young"),r.createElement("small",null,"Pronouns: they/them or she/her"),r.createElement("p",null,"I’m a bike mechanic / artist / front-end developer."),r.createElement(i.S,{src:"../img/bikes.jpg",placeholder:"blurred",width:720,alt:"One of my favorite bikes leaning on a bike rack",__imageData:a(5577)}),r.createElement("p",null,"I used to have a very pretty website with lots of artwork. One day all those paintings of dead birds will be moved here. In the meantime, art updates can be found on"," ",r.createElement("a",{href:"https://www.instagram.com/acepaint289/"},"Instagram"),"."),r.createElement("p",null,"Lately I’ve been selling some prints and stickers"," ",r.createElement("a",{href:"https://shop.aceyoung.xyz"},"on my little online shop"),"."),r.createElement("h4",null,"Currently Reading:"),r.createElement("ul",null,r.createElement("li",null,r.createElement("a",{href:"https://bookshop.org/p/books/giving-in-jessie-lian/20547602?ean=9798988931805"},r.createElement("em",null,"Giving In"))," ","by Jessie Lian"),r.createElement("li",null,r.createElement("a",{href:"https://us.macmillan.com/books/9780374538668/blockchainchickenfarm"},r.createElement("em",null,"Blockchain Chicken Farm And Other Stories of Tech in China's Countryside"))," ","by Xiaowei Wang")),r.createElement(n.rU,{to:"/link-archive"},"Link Archive"),r.createElement("h3",null,"Side Projects:"),r.createElement("ul",null,r.createElement("li",null,r.createElement("a",{href:"//garden.aceyoung.online"},"Digital Garden"),". It's like a blog, but without actual writing."),r.createElement("li",null,r.createElement("a",{href:"http://tw-photos.aceyoung.online/"},"Some photos from my trip to Taiwan"))),r.createElement("h3",null,"Contact:"),r.createElement("ul",null,r.createElement("li",null,"ace.young289@gmail.com"),r.createElement("li",null,r.createElement("a",{href:"https://github.com/aceyoung9"},"Github: aceyoung9")),r.createElement("li",null,r.createElement("a",{href:"https://www.instagram.com/acepaint289/"},"Instagram: @acepaint289"))))},5577:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEAv/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHaKoUrFi//xAAaEAACAwEBAAAAAAAAAAAAAAABAgMSEwQi/9oACAEBAAEFAswA8Yz54xm4okregt1//8QAFREBAQAAAAAAAAAAAAAAAAAAAhD/2gAIAQMBAT8BU//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABgQAAMBAQAAAAAAAAAAAAAAAAABERAh/9oACAEBAAY/AqNuU7qdh//EABoQAQADAQEBAAAAAAAAAAAAAAEAESFRMUH/2gAIAQEAAT8hHqLTjyBASY+9bWANb83ZdUzBa7NhWPCf/9oADAMBAAIAAwAAABBH3//EABYRAQEBAAAAAAAAAAAAAAAAAAERAP/aAAgBAwEBPxAK26b/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAIAQIBAT8Qla//xAAeEAEAAgIBBQAAAAAAAAAAAAABABEhMVFxgaHB0f/aAAgBAQABPxBBNUQH6laRzVYd1VYwDjiAzuUNAdo6XzBuG93EMt4W0GfMqcNHQa9T/9k="},"images":{"fallback":{"src":"/static/734c831a02e6d688ca6611eee11d9551/f7872/bikes.jpg","srcSet":"/static/734c831a02e6d688ca6611eee11d9551/1f252/bikes.jpg 180w,\\n/static/734c831a02e6d688ca6611eee11d9551/706fa/bikes.jpg 360w,\\n/static/734c831a02e6d688ca6611eee11d9551/f7872/bikes.jpg 720w,\\n/static/734c831a02e6d688ca6611eee11d9551/69eac/bikes.jpg 1440w","sizes":"(min-width: 720px) 720px, 100vw"},"sources":[{"srcSet":"/static/734c831a02e6d688ca6611eee11d9551/ff3fb/bikes.webp 180w,\\n/static/734c831a02e6d688ca6611eee11d9551/22e2a/bikes.webp 360w,\\n/static/734c831a02e6d688ca6611eee11d9551/4da88/bikes.webp 720w,\\n/static/734c831a02e6d688ca6611eee11d9551/31706/bikes.webp 1440w","type":"image/webp","sizes":"(min-width: 720px) 720px, 100vw"}]},"width":720,"height":480}')}}]);
//# sourceMappingURL=component---src-pages-index-js-3118ba5171293f356261.js.map