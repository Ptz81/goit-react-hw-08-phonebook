"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[994],{6994:function(e,n,t){t.r(n),t.d(n,{default:function(){return N}});var r=t(9434),a=t(4270),s=t(2553),c=t(4136),i=t(6916),u=function(e){return e.contacts.items},o=function(e){return e.contacts.error},l=function(e){return e.contacts.isLoading},m=(0,i.P1)([u,function(e){return e.filter}],(function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))})),d="ContactForm_button__eSwX9",f="ContactForm_form__dhl+T",h="ContactForm_input__Bl93P",p=t(3329),x=function(){var e=(0,r.I0)(),n=(0,r.v9)(u);return(0,p.jsxs)("form",{className:f,onSubmit:function(t){t.preventDefault();var r=t.currentTarget.elements.name.value,a=t.currentTarget.elements.number.value;n.some((function(e){return e.name.toLowerCase()===r.toLowerCase()}))?alert("".concat(r," is already in contacts")):(e((0,c._5)({name:r,number:a})),t.currentTarget.reset())},children:[(0,p.jsx)("label",{htmlFor:"name",className:"form_label",children:"Name"}),(0,p.jsx)("input",{type:"text",name:"name",id:"name",className:h,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,p.jsx)("label",{htmlFor:"number",className:"form_label",children:"Number"}),(0,p.jsx)("input",{type:"tel",name:"number",id:"number",className:h,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,p.jsx)("input",{type:"submit",className:d,value:"Add contact"})]})},_=t(2791),b="ContactList_button__7kL4l",j="ContactList_list__csErn",v=function(){return(0,p.jsx)("div",{className:"spinner-border text-success",role:"status",children:(0,p.jsx)("span",{className:"visually-hidden",children:"Loading..."})})},C=function(){var e=(0,r.v9)(m),n=(0,r.v9)(o),t=(0,r.v9)(l),a=(0,r.I0)();return(0,_.useEffect)((function(){a((0,c.yF)())}),[a]),e&&0===e.length?null:(0,p.jsxs)(p.Fragment,{children:[n&&(0,p.jsx)("h2",{children:n}),t&&(0,p.jsx)(v,{}),e&&(0,p.jsx)("ul",{className:j,children:e.map((function(e){return(0,p.jsxs)("li",{children:[(0,p.jsxs)("p",{children:[e.name,": ",e.number]}),(0,p.jsx)("button",{className:b,onClick:function(){return a((0,c._f)(e.id))},children:"Delete"})]},e.id)}))})]})};function N(){var e=(0,r.v9)(s.NH);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(a.q,{children:(0,p.jsx)("title",{children:"Your Contacts"})}),(0,p.jsx)(x,{}),(0,p.jsx)("div",{children:e&&"Request in progress..."}),(0,p.jsx)(C,{})]})}},2553:function(e,n,t){t.d(n,{NH:function(){return r},jF:function(){return a}});var r=function(e){return e.tasks.loading},a=function(e){return e.tasks.items}}}]);
//# sourceMappingURL=994.35e60e3f.chunk.js.map