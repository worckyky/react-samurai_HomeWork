(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,,,function(e,a,n){e.exports={message:"Message_message__8WR15",message__container:"Message_message__container__IbMWu",message__content:"Message_message__content__1OPm8",message__wrap:"Message_message__wrap__3HpIm",message__user_name:"Message_message__user_name__2XxA5",message__time:"Message_message__time__8kYnj",message__text:"Message_message__text__1jrKS",message__image:"Message_message__image__1sC5j"}},function(e,a,n){e.exports={header:"Header_header__1amup",header_show:"Header_header_show__259Gr",headerOpen:"Header_headerOpen__3dOVp",header__links:"Header_header__links__2U9rd",header__navigationLink:"Header_header__navigationLink__3ypIA",header__navigationLink_active:"Header_header__navigationLink_active__27uHC"}},,,,function(e,a,n){e.exports={superInput:"SuperInputText_superInput__3XH9u",errorInput:"SuperInputText_errorInput__3ei0N",error:"SuperInputText_error__2J82S",input_wrapper:"SuperInputText_input_wrapper__3vDEl"}},,function(e,a,n){e.exports={default:"SuperButton_default__-BXUG",red:"SuperButton_red__1kaz_"}},,function(e,a,n){e.exports={someClass:"Greeting_someClass__uGflL",greetingContainer:"Greeting_greetingContainer__2YA-4",error:"Greeting_error__1uvQ8"}},function(e,a,n){e.exports={blue:"HW4_blue__2RJeg",column:"HW4_column__2ZS4I",notification_hidden:"HW4_notification_hidden__2yLNU",section_wrapper:"HW4_section_wrapper__oPNac"}},function(e,a,n){e.exports={checkbox:"SuperCheckbox_checkbox__Imn1x",spanClassName:"SuperCheckbox_spanClassName__1K9ch"}},function(e,a,n){e.exports={hw7__container:"hw7_hw7__container__1ofFn",select__container:"hw7_select__container__2UXzS"}},function(e,a,n){e.exports={errorContainer:"Error404_errorContainer__17nV5",Error__bottom:"Error404_Error__bottom__3A6T5"}},,,,,,,function(e,a,n){e.exports={App:"App_App__1Sc4o"}},function(e,a,n){e.exports={superEditableSpan:"SuperEditableSpan_superEditableSpan__rM18-"}},function(e,a,n){e.exports={editSpanContainer:"HW6_editSpanContainer__Lj4GX"}},,function(e,a,n){e.exports=n(42)},,,,,function(e,a,n){},,,,,,function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),l=n(26),c=n.n(l),o=(n(36),n(27)),i=n.n(o),s=n(2),u=n(6),m=n(1),_=n(7),d=n.n(_),p=function(e){return r.a.createElement("div",{className:d.a.message},r.a.createElement("div",{className:d.a.message__container},r.a.createElement("div",{className:d.a.message__image},r.a.createElement("img",{src:e.avatar,alt:""})),r.a.createElement("div",{className:d.a.message__content},r.a.createElement("div",{className:d.a.message__wrap},r.a.createElement("h2",{className:d.a.message__user_name},e.name),r.a.createElement("p",{className:d.a.message__text},e.message)),r.a.createElement("span",{className:d.a.message__time},e.time))))};var E=function(){return r.a.createElement("div",null)},h="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",g="Tolya",f="\u0427\u0435\u043c \u043a\u043b\u0430\u0441\u0441\u043e\u0432\u044b\u0439 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u043e\u0442\u043b\u0438\u0447\u0430\u0435\u0442\u0441\u044f \u043e\u0442 \u0445\u0443\u043a\u043e\u0432?",v="22:00",b=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1 should work (\u0434\u043e\u043b\u0436\u043d\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c)",r.a.createElement(p,{avatar:h,name:g,message:f,time:v}),r.a.createElement("hr",null),"\u0434\u043b\u044f \u043b\u0438\u0447\u043d\u043e\u0433\u043e \u0442\u0432\u043e\u0440\u0447\u0435\u0441\u0442\u0432\u0430, \u043c\u043e\u0433\u0443 \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c",r.a.createElement(E,null),r.a.createElement("hr",null))};var C=function(e){return r.a.createElement("div",null,e.affair.name," ","|| Priority: ".concat(e.affair.priority),r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))};var k=function(e){var a=e.data.map((function(a){return r.a.createElement(C,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,a,r.a.createElement("button",{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")}},"Low"))},O=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var N=function(){var e=Object(t.useState)(O),a=Object(s.a)(e,2),n=a[0],l=a[1],c=Object(t.useState)("all"),o=Object(s.a)(c,2),i=o[0],u=o[1],m=function(e,a){return"low"===a?e.filter((function(e){return"low"===e.priority})):"high"===a?e.filter((function(e){return"high"===e.priority})):"middle"===a?e.filter((function(e){return"middle"===e.priority})):e}(n,i);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(k,{data:m,setFilter:u,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(n,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},y=n(9),j=n(16),w=n.n(j),S=n(3),x=n(12),I=n.n(x),U=function(e){e.type;var a=e.onChange,n=e.onChangeText,t=e.onKeyPress,l=e.onEnter,c=e.error,o=e.inputclassName,i=e.spanClassName,s=Object(S.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","inputclassName","spanClassName"]),u="".concat(I.a.error," ").concat(i||""),m="".concat(c?I.a.errorInput:o||I.a.superInput);return r.a.createElement("div",{className:I.a.input_wrapper},r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){t&&t(e),"Enter"===e.key&&l&&l()},className:m},s)),c&&r.a.createElement("span",{className:u},c))},P=function(e){var a=e.name,n=e.setNameCallback,t=e.addUser,l=e.error,c=e.totalUsers,o=l?w.a.error:"";return r.a.createElement("div",{className:w.a.greetingContainer},r.a.createElement(U,{value:a,onChange:n,className:o}),r.a.createElement("button",{onClick:t},"add"),r.a.createElement("span",null,c),r.a.createElement("span",{style:{color:"red",paddingLeft:"16px",paddingRight:"16px"}},l))},R=function(e){var a=e.users,n=e.addUserCallback,l=Object(t.useState)(""),c=Object(s.a)(l,2),o=c[0],i=c[1],u=Object(t.useState)(""),m=Object(s.a)(u,2),_=m[0],d=m[1],p=a.length;return r.a.createElement(P,{name:o,setNameCallback:function(e){i(e.currentTarget.value)},addUser:function(){o?(alert("Hello ".concat(o," !")),n(o),i(""),d("")):d("\u041f\u0440\u043e\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u043e")},error:_,totalUsers:p})},H=n(44);var L=function(){var e=Object(t.useState)([]),a=Object(s.a)(e,2),n=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(R,{users:n,addUserCallback:function(e){var a={_id:Object(H.a)(),name:e};l([].concat(Object(y.a)(n),[a]))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},A=n(17),J=n.n(A),T=n(14),M=n.n(T),F=function(e){var a=e.red,n=(e.className,e.error),t=Object(S.a)(e,["red","className","error"]),l="".concat(n?"".concat(a?M.a.red:""):M.a.default," ").concat(M.a.default);return r.a.createElement("button",Object.assign({className:l},t))},W=n(18),B=n.n(W),G=function(e){e.type;var a=e.onChange,n=e.onChangeChecked,t=e.className,l=(e.spanClassName,e.children),c=Object(S.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(B.a.checkbox," ").concat(t||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){n&&n(e.currentTarget.checked),a&&a(e)},className:o},c)),l&&r.a.createElement("span",{className:B.a.spanClassName},l))};var X=function(){var e=Object(t.useState)(""),a=Object(s.a)(e,2),n=a[0],l=a[1],c=function(){o?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert("\u0412\u044b \u0432\u0432\u0435\u043b\u0438: ".concat(n))},o=n?"":"\u0422\u0435\u043a\u0441\u0442 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442",i=Object(t.useState)(!1),u=Object(s.a)(i,2),m=u[0],_=u[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:J.a.column},r.a.createElement("div",{className:J.a.section_wrapper},r.a.createElement(U,{value:n,onChangeText:l,onEnter:c,error:o}),r.a.createElement(F,{red:!0,onClick:c,error:o},o?"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442":"\u0412\u044b\u0432\u0435\u0441\u0442\u0438 \u0442\u0435\u043a\u0441\u0442"," ")),r.a.createElement(G,{checked:m,onChangeChecked:_},"\u041e\u0434\u0438\u043d \u0441\u0442\u0435\u0439\u0442 \u0438\u0437\u043c\u0435\u043d\u044f\u0435\u0442 \u0434\u0432\u0430 \u0447\u0435\u043a\u0431\u043e\u043a\u0441\u0430 "),r.a.createElement(G,{checked:m,onChange:function(e){return _(e.currentTarget.checked)}},"\u041e\u0434\u0438\u043d \u0441\u0442\u0435\u0439\u0442 \u0438\u0437\u043c\u0435\u043d\u044f\u0435\u0442 \u0434\u0432\u0430 \u0447\u0435\u043a\u0431\u043e\u043a\u0441\u0430")),r.a.createElement("hr",null),r.a.createElement("hr",null))},K=n(28),D=n.n(K),z=function(e){e.autoFocus;var a=e.onBlur,n=e.onEnter,l=e.spanProps,c=Object(S.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(t.useState)(!1),i=Object(s.a)(o,2),u=i[0],m=i[1],_=l||{},d=_.children,p=_.onDoubleClick,E=_.className,h=Object(S.a)(_,["children","onDoubleClick","className"]),g="".concat(D.a.superEditableSpan," ").concat(E);return r.a.createElement(r.a.Fragment,null,u?r.a.createElement(U,Object.assign({autoFocus:!0,onBlur:function(e){m(!1),a&&a(e)},onEnter:function(){m(!1),n&&n()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){m(!0),p&&p(e)},className:g},h),d||c.value))};function Y(e,a){var n=JSON.stringify(a);localStorage.setItem(e,n)}function V(e,a){var n=localStorage.getItem(e);return null!==n&&(a=JSON.parse(n)),a}Y("test",{x:"A",y:1});V("test",{x:"",y:0});var Z=n(29),q=n.n(Z);var Q=function(){var e=Object(t.useState)(""),a=Object(s.a)(e,2),n=a[0],l=a[1],c=function(){Y("editable-span-value",n)};return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",{className:q.a.editSpanContainer},r.a.createElement(z,{value:n,onEnter:c,onChangeText:l,spanProps:{children:n?void 0:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."}})),r.a.createElement(F,{onClick:c},"save"),r.a.createElement(F,{onClick:function(){l(V("editable-span-value",n))}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))},$=function(e){var a=e.options,n=(e.onChange,e.onChangeOption),t=Object(S.a)(e,["options","onChange","onChangeOption"]),l=a?a.map((function(e,a){return r.a.createElement("option",{key:a},e)})):[];return r.a.createElement("select",Object.assign({onChange:function(e){n&&n([e.currentTarget.value])}},t),l)},ee=function(e){e.type,e.name;var a=e.options,n=(e.value,e.onChange,e.onChangeOption,Object(S.a)(e,["type","name","options","value","onChange","onChangeOption"]),a?a.map((function(e,a){})):[]);return r.a.createElement(r.a.Fragment,null,n)},ae=n(19),ne=n.n(ae),te=["x","y","z"];var re=function(){var e=Object(t.useState)(te[1]),a=Object(s.a)(e,2),n=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",{className:ne.a.hw7__container},r.a.createElement("div",{className:ne.a.select__container},r.a.createElement($,{options:te,value:n,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(ee,{name:"radio",options:te,value:n,onChangeOption:l}))),r.a.createElement("hr",null),r.a.createElement("hr",null))},le=function(e,a){switch(a.type){case"sort":switch(a.payload){case"up":return Object(y.a)(e).sort((function(e,a){return e.name!==a.name?e.name<a.name?-1:1:0}));case"down":return Object(y.a)(e).sort((function(e,a){return e.name!==a.name?e.name>a.name?-1:1:0}));default:return e}case"check":switch(a.payload){case 18:return Object(y.a)(e).filter((function(e){return e.age>=18}))}return e;default:return e}},ce=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var oe=function(){var e=Object(t.useState)(ce),a=Object(s.a)(e,2),n=a[0],l=a[1],c={color:"black",paddingRight:"16px"},o={color:"red"},i=n.map((function(e){return r.a.createElement("div",{key:e._id},r.a.createElement("span",{style:c},r.a.createElement("span",{style:o},"\u0418\u043c\u044f:")," ",e.name),r.a.createElement("span",{style:c}," || "),r.a.createElement("span",{style:c},r.a.createElement("span",{style:o},"\u0412\u043e\u0437\u0440\u0430\u0441\u0442:")," ",e.age))}));return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 8",i,r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("div",null,r.a.createElement(F,{onClick:function(){return l(le(ce,{type:"sort",payload:"up"}))}},"sort up")),r.a.createElement("div",null,r.a.createElement(F,{onClick:function(){return l(le(ce,{type:"sort",payload:"down"}))}},"sort down")),r.a.createElement("div",null,r.a.createElement(F,{onClick:function(){return l(le(ce,{type:"check",payload:18}))}},"check 18"))),r.a.createElement("hr",null),r.a.createElement("hr",null))};var ie=function(){return r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement(N,null),r.a.createElement(L,null),r.a.createElement(X,null),r.a.createElement(Q,null),r.a.createElement(re,null),r.a.createElement(oe,null))},se=n(20),ue=n.n(se);var me=function(){return r.a.createElement("div",{className:ue.a.errorContainer},r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"),r.a.createElement(u.b,{to:de.PRE_JUNIOR,className:ue.a.Error__bottom},"Go home"))};var _e=function(){return r.a.createElement("div",null,r.a.createElement(b,null))},de={PRE_JUNIOR:"/pre-junior",JUNIOR_PLUS:"/junior-plus"};var pe=function(){return r.a.createElement(u.a,null,r.a.createElement("div",null,r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/",exact:!0,render:function(){return r.a.createElement(m.a,{to:de.PRE_JUNIOR})}}),r.a.createElement(m.b,{path:de.PRE_JUNIOR,render:function(){return r.a.createElement(ie,null)}}),r.a.createElement(m.b,{path:de.JUNIOR_PLUS,render:function(){return r.a.createElement(_e,null)}}),r.a.createElement(m.b,{render:function(){return r.a.createElement(me,null)}}))))},Ee=n(8),he=n.n(Ee);var ge=function(){var e=Object(t.useState)(!1),a=Object(s.a)(e,2),n=a[0],l=a[1],c="".concat(he.a.header," ").concat(n&&he.a.header_show),o=function(){l(!n)};return r.a.createElement("div",{className:c,onMouseEnter:function(){l(!0)},onMouseLeave:function(){l(!1)}},r.a.createElement("div",{className:he.a.headerOpen},"Show menu"),r.a.createElement("div",{className:he.a.header__links},r.a.createElement(u.b,{to:de.PRE_JUNIOR,className:he.a.header__navigationLink,activeClassName:he.a.header__navigationLink_active,onClick:o},"Pre junior"),r.a.createElement(u.b,{to:de.JUNIOR_PLUS,className:he.a.header__navigationLink,activeClassName:he.a.header__navigationLink_active,onClick:o},"Junior plus")))};var fe=function(){return r.a.createElement("div",null,r.a.createElement(u.a,null,r.a.createElement(ge,null),r.a.createElement(pe,null)))};var ve=function(){return r.a.createElement("div",{className:i.a.App},r.a.createElement("h1",null,"React homeworks"),r.a.createElement(fe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ve,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[31,1,2]]]);
//# sourceMappingURL=main.3c84eadd.chunk.js.map