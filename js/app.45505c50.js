(function(t){function a(a){for(var r,o,s=a[0],l=a[1],c=a[2],u=0,p=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);d&&d(a);while(p.length)p.shift()();return i.push.apply(i,c||[]),e()}function e(){for(var t,a=0;a<i.length;a++){for(var e=i[a],r=!0,s=1;s<e.length;s++){var l=e[s];0!==n[l]&&(r=!1)}r&&(i.splice(a--,1),t=o(o.s=e[0]))}return t}var r={},n={app:0},i=[];function o(a){if(r[a])return r[a].exports;var e=r[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=r,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var r in t)o.d(e,r,function(a){return t[a]}.bind(null,r));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=a,s=s.slice();for(var c=0;c<s.length;c++)a(s[c]);var d=l;i.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";var r=e("8a23"),n=e.n(r);n.a},"1a58":function(t,a,e){t.exports=e.p+"img/finish.dca7aa19.png"},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var r=e("2b0e"),n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",{attrs:{id:"inspire"}},[e("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(a){t.drawer=a},expression:"drawer"}},[e("v-list",{attrs:{dense:""}},[e("v-list-item",{attrs:{link:""}},[e("v-list-item-action",[e("v-icon",[t._v("mdi-home")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v("Home")])],1)],1)],1)],1),e("v-app-bar",{attrs:{app:"",color:"indigo",dark:""}},[e("v-app-bar-nav-icon",{on:{click:function(a){a.stopPropagation(),t.drawer=!t.drawer}}}),e("v-toolbar-title",[t._v("Loli Type Racing")])],1),e("v-main",[e("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[e("v-row",{attrs:{align:"center",justify:"center"}},[e("TypeRacing")],1)],1)],1),e("v-footer",{attrs:{color:"indigo",app:""}},[e("span",{staticClass:"white--text"},[t._v("© 2020")])])],1)},i=[],o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",[t.showGame?e("Game",{attrs:{name:t.name}}):e("v-card",{staticStyle:{"margin-left":"auto","margin-right":"auto"},attrs:{"max-width":700,width:"100%"}},[e("v-card-title",[t._v("Loli Type Racing")]),e("v-card-subtitle",[t._v("Test your typing skills")]),e("v-card-text",[e("v-text-field",{attrs:{rules:t.inputNameRules,label:"Name"},model:{value:t.name,callback:function(a){t.name=a},expression:"name"}}),e("v-row",[e("v-col",{attrs:{cols:"6"}},[e("v-btn",{attrs:{block:!0,color:"#303f9f",dark:!0},on:{click:function(a){return t.start()}}},[t._v("Start")])],1),e("v-col",{attrs:{cols:"6"}},[e("v-btn",{attrs:{block:!0,color:"#303f9f",dark:!0}},[t._v("Cancel")])],1)],1)],1)],1)],1)},s=[],l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-row",[e("v-col",{attrs:{cols:"12 mb-5"}},[e("LoliRace",{attrs:{"loli-position":t.loliPosition}})],1),e("v-col",{attrs:{col:"12"}},[e("v-card",{staticStyle:{"margin-left":"auto","margin-right":"auto"},attrs:{"max-width":700,width:"100%"}},[e("v-card-title",[t._v("Game started "),e("v-btn",{staticClass:"ml-2",attrs:{color:"#303f9f",dark:!0},on:{click:function(a){return t.restart()}}},[t._v(" Restart ")]),e("v-btn",{staticClass:"ml-2",attrs:{disabled:!1,color:"#303f9f",dark:!0}},[t._v(" "+t._s(t.time)+" ")])],1),e("v-card-text",[e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("div",{staticClass:"text-h6 contentContainer"},[t.typed.length<=0?e("span",{staticClass:"firstWord"},[t._v(" "+t._s(t.renderFirstWord)+" ")]):t.words[0].indexOf(t.typed)?e("span",{staticClass:"wrongWord firstWord"},[t._v(" "+t._s(t.renderFirstWord)+" ")]):e("span",{staticClass:"rightWord firstWord"},[t._v(" "+t._s(t.renderFirstWord)+" ")]),t._v(" "+t._s(t.renderRestWords)+" ")])]),e("v-col",{attrs:{cols:"12"}},[e("v-text-field",{attrs:{label:"Type..."},model:{value:t.typed,callback:function(a){t.typed=a},expression:"typed"}})],1)],1)],1)],1)],1),e("v-col",{attrs:{cols:"12"}},[e("v-dialog",{attrs:{"max-width":"700px"},model:{value:t.gameFinished,callback:function(a){t.gameFinished=a},expression:"gameFinished"}},[e("v-card",[e("v-card-title",[t._v("Time finished")]),e("v-card-text",[e("h3",[t._v(t._s(t.name)+"'s time: "+t._s(t.result))])]),e("v-card-actions",[e("v-btn",{attrs:{color:"primary"},on:{click:t.restart}},[t._v("OK")])],1)],1)],1)],1)],1)},c=[],d=(e("99af"),e("a15b"),e("13d5"),e("fb6a"),e("b680"),e("498a"),e("2909")),u=e("4f96"),p=e("3835"),m=[["Se","você","está","lendo","isto","porque","acha","que","pode","ser","um,","meu","conselho","é","o","seguinte","feche","este","livro","agora","mesmo","Acredite","em","qualquer","mentira","que","sua","mãe","ou","seu","pai","lhe","contou","sobre","seu","nascimento","e","tente","levar","uma","vida","normal"],["A","turma","se","reuniu","nos","degraus","da","frente","do","museu","de","onde","podíamos","assistir","ao","trânsito","de","pedestres","pela","Quinta","Avenida"],["Eu","esperava","que","desse","tudo","certo","na","excursão","Pelo","menos","tinha","esperança","de","não","me","meter","em","encrenca","dessa","vez"],["Eu","poderia","partir","de","qualquer","ponto","da","minha","vida","curta","e","infeliz","para","prova","mas","as","coisas","começaram","a","ir","realmente","mal","no","último","mês","de","maio","quando","nossa","turma","do","sexto","ano","fez","uma","excursão","a","Manhattan"],["Recebera","tanto","dinheiro","por","ela","que","dera","entrada","em","um","novo","apartamento","e","fizera","o","pagamento","do","primeiro","semestre","do","seu","curso","na","Universidade","de","Nova","York"],["Eu","passava","os","meus","dias","bolando","novas","estratégias","para","a","captura","da","bandeira","e","fazendo","alianças","com","os","outros","chalés","para","manter","o","estandarte","fora","das","mãos","de","Ares"],["Eu","não","queria","ficar","deitado","na","cama","como","um","inválido","enquanto","Luke","estava","lá","fora","planejando","destruir","o","mundo","ocidental","Consegui","dar","um","passo","para","a","frente","Depois","outro,","ainda","me","apoiando","pesadamente","em","Annabeth"],["Pensou","também","em","cortar","a","goma","de","mascar","da","crina","da","zebra,","mas","concluímos","que","seria","muito","arriscado","com","o","caminhão","aos","solavancos"],["o","momento","em","que","Maurice","enfiava","a","cabeça","para","verificar","que","barulho","era","aquele","lá","dentro","a","zebra","saltou","por","cima","dele","para","a","rua."]],v=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",[e("div",{attrs:{id:"container"}},[e("div",{attrs:{id:"racer-container"}},[e("div",{staticClass:"loli-container",style:{width:t.loliPosition}},[e("img",{staticClass:"loli",attrs:{src:t.personagem,height:"40",alt:"loli",title:"loli"}})])]),e("div",{attrs:{id:"finish-line-container"}},[e("img",{staticClass:"finish",attrs:{height:"50",src:t.finish,alt:"finish line",title:"finish line"}})])])])},f=[],h=e("a635"),b=e.n(h),g=e("1a58"),w=e.n(g),y={name:"LoliRace",data:function(){return{personagem:b.a,finish:w.a}},props:{loliPosition:String}},_=y,x=(e("b059"),e("2877")),V=e("6544"),C=e.n(V),T=e("a523"),k=Object(x["a"])(_,v,f,!1,null,null,null),O=k.exports;C()(k,{VContainer:T["a"]});var j={name:"Game",data:function(){return{typed:"",words:m[Math.floor(Math.random()*m.length)],time:60,started:!1,intervalId:null,loliPosition:"0%",gameFinished:!0,result:"",wordsTyped:["apple","pie","pineapple","harry","lisa","lisa"]}},props:{name:String},watch:{time:function(t){this.updatedLoliPosition(t)},typed:function(t){this.verifyWordsMatch(t)}},mounted:function(){},components:{LoliRace:O},computed:{renderFirstWord:function(){var t=Object(p["a"])(this.words,1),a=t[0];return a},renderRestWords:function(){var t=Object(u["a"])(this.words),a=t.slice(1);return a.join(" ")}},methods:{restart:function(){clearInterval(this.intervalId),this.gameFinished=!1,this.started=!1,this.time=60,this.words=m[Math.floor(Math.random()*m.length)]},startGame:function(){var t=this;this.started=!0,this.intervalId&&(clearInterval(this.intervalId),this.time=60),this.intervalId=setInterval((function(){t.time>=1?t.time-=1:t.finishGame()}),1e3)},verifyWordsMatch:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(this.started||this.startGame(),this.typed=t.trim(),this.words[0]===this.typed&&(this.wordsTyped.push(this.words[0]),this.typed="",this.words.shift()),this.words.length<=10){var a=this.words;this.words=[].concat(Object(d["a"])(a),Object(d["a"])(m[Math.round(Math.random()*m.length)]))}},updatedLoliPosition:function(t){var a=100*t/60;this.loliPosition="".concat(100-a.toFixed(0),"%")},finishGame:function(){var t=function(t,a){return t+a.length},a=this.wordsTyped.reduce(t,0);console.log(a)}}},R=j,q=(e("68e4"),e("8336")),P=e("b0af"),M=e("99d9"),I=e("62ad"),F=e("169a"),L=e("0fd9"),S=e("8654"),W=Object(x["a"])(R,l,c,!1,null,null,null),G=W.exports;C()(W,{VBtn:q["a"],VCard:P["a"],VCardActions:M["a"],VCardText:M["c"],VCardTitle:M["d"],VCol:I["a"],VDialog:F["a"],VRow:L["a"],VTextField:S["a"]});var A={name:"TypeRacing",data:function(){return{showGame:!1,started:!1,name:"",inputNameRules:[function(t){return!!t||"Required"}]}},components:{Game:G},methods:{start:function(){this.showGame=!0}}},E=A,z=Object(x["a"])(E,o,s,!1,null,null,null),N=z.exports;C()(z,{VBtn:q["a"],VCard:P["a"],VCardSubtitle:M["b"],VCardText:M["c"],VCardTitle:M["d"],VCol:I["a"],VContainer:T["a"],VRow:L["a"],VTextField:S["a"]});var $={props:{source:String},data:function(){return{drawer:null}},components:{TypeRacing:N}},B=$,D=(e("034f"),e("7496")),J=e("40dc"),H=e("5bc1"),K=e("553a"),Q=e("132d"),U=e("8860"),Y=e("da13"),X=e("1800"),Z=e("5d23"),tt=e("f6c4"),at=e("f774"),et=e("2a7f"),rt=Object(x["a"])(B,n,i,!1,null,null,null),nt=rt.exports;C()(rt,{VApp:D["a"],VAppBar:J["a"],VAppBarNavIcon:H["a"],VContainer:T["a"],VFooter:K["a"],VIcon:Q["a"],VList:U["a"],VListItem:Y["a"],VListItemAction:X["a"],VListItemContent:Z["a"],VListItemTitle:Z["b"],VMain:tt["a"],VNavigationDrawer:at["a"],VRow:L["a"],VToolbarTitle:et["a"]});var it=e("f309");r["a"].use(it["a"]);var ot=new it["a"]({});e("dba5");r["a"].config.productionTip=!1,new r["a"]({vuetify:ot,render:function(t){return t(nt)}}).$mount("#app")},"68e4":function(t,a,e){"use strict";var r=e("e323"),n=e.n(r);n.a},"8a23":function(t,a,e){},a635:function(t,a,e){t.exports=e.p+"img/personagem.3ccd6c17.gif"},b059:function(t,a,e){"use strict";var r=e("b5e7"),n=e.n(r);n.a},b5e7:function(t,a,e){},dba5:function(t,a,e){},e323:function(t,a,e){}});
//# sourceMappingURL=app.45505c50.js.map