(window.webpackJsonp=window.webpackJsonp||[]).push([[627],{1351:function(e,t,s){"use strict";s.r(t);var a=s(1),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"interface-os3link"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#interface-os3link"}},[e._v("#")]),e._v(" Interface OS3Link")]),e._v(" "),s("Badge",{attrs:{text:"Interface",type:"interface"}}),e._v(" "),s("section",{staticClass:"table-features"},[s("table",{staticClass:"is-full-width"},[s("tbody",[s("tr",[s("th",[e._v("Module")]),s("td",[s("div",{staticClass:"lang-typescript"},[s("span",{staticClass:"token keyword"},[e._v("import")]),e._v(" { OS3Link } "),s("span",{staticClass:"token keyword"},[e._v("from")]),e._v(" "),s("span",{staticClass:"token string"},[e._v('"@tsed/openspec"')])])])]),s("tr",[s("th",[e._v("Source")]),s("td",[s("a",{attrs:{href:"https://github.com/tsedio/tsed/blob/v6.81.0/packages/specs/openspec/src/openspec3/OS3Link.ts#L0-L0"}},[e._v("/packages/specs/openspec/src/openspec3/OS3Link.ts")])])])])])]),e._v(" "),s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),s("div",{staticClass:"language-typescript"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("interface")]),e._v(" OS3Link "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n"),s("div",{pre:!0,attrs:{class:"language- extra-class"}},[s("pre",[s("code",[e._v('operationRef?<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>\n\noperationId?<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>\n\nparameters?<span class="token punctuation">:</span> <a href="/api/specs/openspec/common/OpenSpecHash.html"><span class="token">OpenSpecHash</span></a>&lt;<span class="token keyword">any</span>&gt;<span class="token punctuation">;</span>\n\ndescription?<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>\n\nserver?<span class="token punctuation">:</span> <a href="/api/specs/openspec/openspec3/OS3Server.html"><span class="token">OS3Server</span></a><span class="token punctuation">;</span>\n')])])]),s("p",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")])])])])]),s("p"),e._v(" "),s("h2",{attrs:{id:"members"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#members"}},[e._v("#")]),e._v(" Members")]),e._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[e._v("operationRef?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")])])])])]),e._v(" "),s("p",[e._v("A relative or absolute reference to an OAS operation. This field is mutually exclusive of the operationId field, and MUST point to an Operation Object. Relative operationRef values MAY be used to locate an existing Operation Object in the OpenAPI definition.")])]),s("hr"),e._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[e._v("operationId?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")])])])])]),e._v(" "),s("p",[e._v("The name of an existing, resolvable OAS operation, as defined with a unique operationId. This field is mutually exclusive of the operationRef field.")])]),s("hr"),e._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[e._v("parameters?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("a",{pre:!0,attrs:{href:"/api/specs/openspec/common/OpenSpecHash.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[e._v("OpenSpecHash")])]),e._v("<"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("any")]),e._v(">"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")])])])])]),e._v(" "),s("p",[e._v("A map representing parameters to pass to an operation as specified with operationId or identified via operationRef. The key is the parameter name to be used, whereas the value can be a constant or an expression to be evaluated and passed to the linked operation. The parameter name can be qualified using the parameter location [{in}.]{name} for operations that use the same "),s("a",{pre:!0,attrs:{href:"https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#parameterIn",target:"_blank",rel:"noopener noreferrer"}},[e._v("parameter name"),s("OutboundLink",{pre:!0})],1),e._v(" in different locations (e.g. path.id).")])]),s("hr"),e._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[e._v("description?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")])])])])]),e._v(" "),s("p",[e._v("A description of the link. CommonMark syntax MAY be used for rich text representation.")])]),s("hr"),e._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[e._v("server?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("a",{pre:!0,attrs:{href:"/api/specs/openspec/openspec3/OS3Server.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[e._v("OS3Server")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")])])])])]),e._v(" "),s("p",[e._v("A server object to be used by the target operation.")])])],1)}),[],!1,null,null,null);t.default=n.exports}}]);