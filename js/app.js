var requirejs,require,define;(function(a){function g(a,b){if(a&&a.charAt(0)==="."&&b){b=b.split("/"),b=b.slice(0,b.length-1),a=b.concat(a.split("/"));var c,d;for(c=0;d=a[c];c++)if(d===".")a.splice(c,1),c-=1;else if(d===".."){if(c===1&&(a[2]===".."||a[0]===".."))break;c>0&&(a.splice(c-1,2),c-=2)}a=a.join("/")}return a}function h(b,c){return function(){return f.apply(a,d.call(arguments,0).concat([b,c]))}}function i(a){return function(b){return g(b,a)}}function j(a){return function(c){b[a]=c}}function k(d){if(c.hasOwnProperty(d)){var f=c[d];delete c[d],e.apply(a,f)}return b[d]}function l(a,b){var c,d,e=a.indexOf("!");return e!==-1?(c=g(a.slice(0,e),b),a=a.slice(e+1),d=k(c),d&&d.normalize?a=d.normalize(a,i(b)):a=g(a,b)):a=g(a,b),{f:c?c+"!"+a:a,n:a,p:d}}var b={},c={},d=[].slice,e,f;if(typeof define=="function")return;e=function(d,e,f,g){var i=[],m,n,o,p,q,r;g||(g=d);if(typeof f=="function"){!e.length&&f.length&&(e=["require","exports","module"]);for(p=0;p<e.length;p++){r=l(e[p],g),o=r.f;if(o==="require")i[p]=h(d);else if(o==="exports")i[p]=b[d]={},m=!0;else if(o==="module")n=i[p]={id:d,uri:"",exports:b[d]};else if(b.hasOwnProperty(o)||c.hasOwnProperty(o))i[p]=k(o);else{if(!r.p)throw d+" missing "+o;r.p.load(r.n,h(g,!0),j(o),{}),i[p]=b[o]}}q=f.apply(b[d],i),d&&(n&&n.exports!==a?b[d]=n.exports:m||(b[d]=q))}else d&&(b[d]=f)},requirejs=f=function(b,c,d,g){return typeof b=="string"?k(l(b,c).f):(b.splice||(c.splice?(b=c,c=arguments[2]):b=[]),g?e(a,b,c,d):setTimeout(function(){e(a,b,c,d)},15),f)},f.config=function(){return f},require||(require=f),define=function(a,b,d){b.splice||(d=b,b=[]),define.unordered?c[a]=[a,b,d]:e(a,b,d)},define.amd={jQuery:!0}})(),define("almond",function(){}),function(){mozmarket.receipts.Prompter({storeURL:"https://marketplace-dev.allizom.org/en-US/app/private-yacht/",supportHTML:'<a href="mailto:kumar.mcmillan@gmail.com">email kumar.mcmillan@gmail.com</a>',verify:!0})}(),define("app",function(){})