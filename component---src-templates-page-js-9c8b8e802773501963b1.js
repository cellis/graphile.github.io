(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{428:function(e,t,a){"use strict";a.r(t);a(94),a(70),a(179);var n=a(5),r=a.n(n),l=(a(95),a(48),a(0)),s=a.n(l),o=a(1),c=a.n(o),i=a(96),m=a.n(i),u=a(97),p=a(98),d=(a(429),a(430)),f=a.n(d),h=function(e){return e.replace(/[^A-Za-z0-9-.]+/g,"_")},b=function(e){function t(t){var a;(a=e.call(this,t)||this).select=function(e,t){return function(n){var r=a.props.examples,l=r[e||0]?r[e||0].title:null,s=r[e]&&r[e].examples[t||0]?r[e].examples[t||0].title:null;l&&s&&"undefined"!=typeof window&&(window.location.hash=h(l)+"__"+h(s)),a.setState({selected:e,subSelected:t||0})}};var n=null,r=null;if("undefined"!=typeof window&&window.location&&window.location.hash){var l=window.location.hash.replace(/^#+/,"").split("__");if(l.length>=2){var s=t.examples,o=s.findIndex(function(e){return h(e.title)===l[0]});if(o>=0){var c=s[o].examples.findIndex(function(e){return h(e.title)===l[1]});n=o,r=c>=0?c:0}}}return a.state={selected:n,subSelected:r},a}return r()(t,e),t.prototype.render=function(){var e=this,t=this.props.examples,a=function(t){return(e.state.selected||0)===t},n=function(t,n){return a(t)&&(e.state.subSelected||0)===n},r=t[this.state.selected||0],l=r&&r.examples[this.state.subSelected||0]||{};return s.a.createElement("div",{className:"flex bg-black h7 w-100 border-box"},s.a.createElement("div",{className:"w-25 bg-white-20 h-100 pa0 ma0 white w5"},s.a.createElement("ul",{className:"list h-100 ma0 pa1 pa2-ns"},t.map(function(t,r){var l=t.title,o=t.examples;return s.a.createElement("li",{key:l,className:"ma0 pa0"},s.a.createElement("span",{onClick:e.select(r),className:"f7 f6-ns pointer "+(a(r)?"white":"white-60")},a(r)?"▾":"▸"," ",l),a(r)?s.a.createElement("ul",{className:"list pl2 pl3-ns"},o.map(function(t,a){var l=t.title;return s.a.createElement("li",{key:l,className:"f6 pl1-ns"},s.a.createElement("span",{onClick:e.select(r,a),className:"f7 f6-ns pointer "+(n(r,a)?"white":"white-60")},l))})):null)}))),s.a.createElement("div",{className:"w-75 flex flex-column flex-row-l ba br0 b--silver"},s.a.createElement("div",{className:"w-100 w-50-l h-50 h-100-l flex-auto"},s.a.createElement(f.a,{component:"pre",className:"no-shadow f7 pa1 bn br0 h-100 overflow-auto language-"+l.exampleLanguage},l.example)),l.result&&s.a.createElement("div",{className:"w-100 w-50-l h-50 h-100-l flex-auto overflow-auto"},s.a.createElement(f.a,{component:"pre",className:"no-shadow f7 pa1 bt bn-l bl-l br0 b--silver h-100 flex-auto language-"+l.resultLanguage},l.result))))},t}(s.a.Component),v=function(){return s.a.createElement("form",{action:"//graphile.us16.list-manage.com/subscribe/post?u=d103f710cf00a9273b55e8e9b&id=c3a9eb5c4e",method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",className:"validate",target:"_blank",noValidate:!0},s.a.createElement("div",{id:"mc_embed_signup_scroll",className:"center hero-block"},s.a.createElement("p",null,"Keep up to date on Graphile and PostGraphile features/changes. Subscribe to our occasional announcements newsletter:"),s.a.createElement("div",{className:"mc-field-group form-inline justify-content-center"},s.a.createElement("div",{className:"form-group"},s.a.createElement("div",{className:"mb2"},s.a.createElement("label",{className:"label--small",htmlFor:"mce-EMAIL"},"Email address:")),s.a.createElement("input",{autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",className:"input-text mb0-ns mb1",id:"mce-EMAIL",name:"EMAIL",spellCheck:"false",type:"email",defaultValue:""}),s.a.createElement("div",{style:{position:"absolute",left:"-5000px"},"aria-hidden":"true"},s.a.createElement("input",{type:"text",name:"b_d103f710cf00a9273b55e8e9b_c3a9eb5c4e",tabIndex:"-1",defaultValue:""})),s.a.createElement("input",{className:"button--solid",id:"mc-embedded-subscribe",name:"subscribe",type:"submit",value:"Subscribe"})),s.a.createElement("div",{id:"mce-responses",className:"clear"},s.a.createElement("div",{className:"response",id:"mce-error-response",style:{display:"none"}}),s.a.createElement("div",{className:"response",id:"mce-success-response",style:{display:"none"}})))))},g=function(){return s.a.createElement("section",{className:"mailinglist"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-xs-12"},s.a.createElement("div",{className:"hero-block"},s.a.createElement("h3",null,"Questions, comments or feedback?",s.a.createElement("br",null),"Email"," ",s.a.createElement("a",{href:"mailto:info@graphile.org?subject=Documentation%20question/comment/feedback:)"},"info@graphile.org")),s.a.createElement(v,null))))))},E=a(99);a.d(t,"pageQuery",function(){return P});var y=function(e){var t,a=e.children,n=e.noLink;return s.a.createElement("span",{dangerouslySetInnerHTML:{__html:_((t=a,t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")),n)}})};function w(e){var t=e.pages,a=e.location,n=e.depth,r=void 0===n?0:n;return s.a.createElement("ul",{className:"page-list nav flex-column "+(0===r?"mb5":null)},t.map(function(e,t){var n=e.to,l=e.title,o=e.subpages;return s.a.createElement("li",{key:t,className:"f6 lh-copy pv1"},s.a.createElement(c.a,{className:"nav-link "+(a.pathname===n?"active":""),to:n},s.a.createElement(y,null,l)),o&&o.length?s.a.createElement(w,{pages:o,location:a,depth:r+1}):null)}))}var N=function(e){var t=e.sections,a=e.pages,n=e.location;return s.a.createElement("aside",{className:"sidebar col-xs-12 col-md-3 last-xs mt3"},t.map(function(e,t){var r,l=e.id,o=e.title;return s.a.createElement("section",{key:t},s.a.createElement("h4",{className:"f6 ttu fw6 mt0 mb3 bb pb2"},s.a.createElement(y,null,o)),s.a.createElement("div",{className:"nested-list-reset"},s.a.createElement(w,{location:n,pages:a.filter((r=l,function(e){return e.sectionId===r}))})))}))},x=function(e,t,a){return void 0===t&&(t=e),void 0===a&&(a=!1),"<"+(a?"span":"a href='/postgraphile/pricing/'")+' class="plan-'+e+"\"><span class='first-letter'>"+t[0]+"</span><span class='rest'>"+t.substr(1)+"</span></"+(a?"span":"a")+">"};function _(e,t){return e.replace(/\[SUPPORTER\]/g,x("supporter","supporter",t)).replace(/\[PRO\]/g,x("pro","pro",t)).replace(/\[ENTERPRISE\]/g,x("enterprise","enterprise",t)).replace(/^.* Gallery$/g,"<strong>$&</strong>")}var k=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={hack:1},t}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;setTimeout(function(){e.setState({hack:2})},0)},a.render=function(){var e=this.props,t=e.data,a=t.remark,n=a.html,r=a.frontmatter,l=r.title,o=r.showExamples,i=t.nav,d=t.examples,f=e.location,h=e.history,v=_(n),w=f.pathname.split("/")[1],x=i.edges.find(function(e){return e.node.name===w}),k=x&&x.node||{pages:[],sections:[]},P=k.pages,T=k.sections||[],L=function(e,t){var a=e.reduce(function(e,t){return e.push(t),t.subpages&&e.push.apply(e,t.subpages),e},[]),n=a.find(function(e){return e.to===t});if(!n)return{};var r,l,s,o,c=a.indexOf(n);return c>0&&(s=a[c-1].to,o=a[c-1].title),c>=0&&c<a.length-1&&(r=a[c+1].to,l=a[c+1].title),{next:r,nextText:l,prev:s,prevText:o}}(P,f.pathname),O=L.next,S=L.nextText,I=L.prev,M=L.prevText,j="postgraphile"===w;return s.a.createElement(E.a,this.props,s.a.createElement("div",{className:"template-page "+(f.pathname.match(/^\/(postgraphile|news|support|sponsors?)(\/|$)/)?"postgraphile":"")},s.a.createElement(m.a,{title:(j?"PostGraphile":"Graphile")+" | "+l,meta:[{name:"description",content:"Utilities to build powerful and performant GraphQL APIs"},{name:"keywords",content:"GraphQL, API, Graph, PostgreSQL, PostGraphile, PostGraphQL, Postgres-GraphQL, server, plugins, introspection, reflection"}]}),s.a.createElement(p.a,{location:f,history:h}),s.a.createElement("div",{className:"page-content"},s.a.createElement("section",null,s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row between-xs"},s.a.createElement(N,{sections:T,pages:P,location:f}),s.a.createElement("div",{className:"col-xs-12 col-md-9 first-xs main-content"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-xs-12",style:{width:"100%"}},s.a.createElement("div",{className:"edit-this-page",style:{display:f.pathname.match(/^\/news\//)?"none":""}},s.a.createElement("a",{href:"https://github.com/graphile/graphile.github.io/edit/develop/src/pages"+f.pathname.substr(0,f.pathname.length-1)+".md"},"📝 Suggest improvements to this page")),s.a.createElement("div",{key:this.state.hack,dangerouslySetInnerHTML:{__html:v}})),s.a.createElement("br",null),o&&s.a.createElement(b,{examples:d.edges.filter(function(e){return e.node.category===o}).map(function(e){return e.node})}),s.a.createElement("br",null),s.a.createElement("div",{className:"col-xs-12 mt3 mb5"},s.a.createElement("div",{className:"row between-xs"},s.a.createElement("div",{className:"col-xs-6"},I?s.a.createElement(c.a,{className:"",to:I},s.a.createElement("span",{className:"fas fa-fw fa-arrow-left"})," ",M?s.a.createElement(y,{noLink:!0},M):"Previous"):null),s.a.createElement("div",{className:"col-xs-6 tr"},O?s.a.createElement(c.a,{className:"",to:O},S?s.a.createElement(y,{noLink:!0},S):"Next"," ",s.a.createElement("span",{className:"fas fa-fw fa-arrow-right"})):null)))))))),s.a.createElement(g,null)),s.a.createElement(u.a,null)))},t}(s.a.Component),P="130048078";t.default=k},429:function(e,t,a){"use strict";var n=a(18),r=a(180)(6),l="findIndex",s=!0;l in[]&&Array(1)[l](function(){s=!1}),n(n.P+n.F*s,"Array",{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a(71)(l)},430:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(431);function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"PrismCode",{enumerable:!0,get:function(){return r(n).default}}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(n).default}})},431:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),l=a(0),s=(n=l)&&n.__esModule?n:{default:n},o=a(2);function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var i=function(e){function t(){var e,a,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,l=Array(r),s=0;s<r;s++)l[s]=arguments[s];return a=n=c(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),n._handleRefMount=function(e){n._domNode=e},c(n,a)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.PureComponent),r(t,[{key:"componentDidMount",value:function(){this._hightlight()}},{key:"componentDidUpdate",value:function(){this._hightlight()}},{key:"_hightlight",value:function(){Prism.highlightElement(this._domNode,this.props.async)}},{key:"render",value:function(){var e=this.props,t=e.className,a=e.component,n=e.children;return s.default.createElement(a,{ref:this._handleRefMount,className:t},n)}}]),t}();i.propTypes={async:o.PropTypes.bool,className:o.PropTypes.string,children:o.PropTypes.any,component:o.PropTypes.node},i.defaultProps={component:"code"},t.default=i}}]);
//# sourceMappingURL=component---src-templates-page-js-9c8b8e802773501963b1.js.map