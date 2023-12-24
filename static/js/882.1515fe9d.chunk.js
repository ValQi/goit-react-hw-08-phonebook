"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[882],{2882:function(n,e,r){r.r(e),r.d(e,{default:function(){return F}});var t,o,i,a=r(4420),c=r(2791),d=r(5162),s=r(2064),u=r(3553),l=function(n){return n.filter.value},x=function(n){return n.contacts.items},p=function(n){return n.contacts.isLoading},h=(0,u.P1)([x,l],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),m=r(168),b=r(5867),f=b.ZP.li(t||(t=(0,m.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n\n  p {\n    margin-right: 5px;\n  }\n\n  button {\n    width: 150px;\n    cursor: pointer;\n    background-color: #8ac2dc;\n    border-radius: 5px;\n    border: none;\n    box-shadow: 0 1px 7px grey;\n    &:hover {\n        background-color: #12628d;\n        color: #aee7e7;\n        transform: scale(1.1);\n    }\n  }\n"]))),g=b.ZP.ul(o||(o=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 400px;\n  outline: 1px solid grey;\n  border-radius: 20px;\n  background-color: #ccf4f2;\n  padding: 10px;\n"]))),j=r(3329),v=function(){var n=(0,a.I0)(),e=(0,a.v9)(p),r=(0,a.v9)(h);return(0,j.jsx)("div",{children:e?(0,j.jsx)("p",{children:"\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430 \u0437\u0430\u0447\u0435\u043a\u0430\u0439\u0442\u0435..."}):(0,j.jsx)(g,{children:r.map((function(e){return(0,j.jsxs)(f,{children:[(0,j.jsxs)("p",{children:[e.name,": ",e.number]}),(0,j.jsx)("button",{type:"button",onClick:function(){return n((0,d.GK)(e.id))},children:" \u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438"})]},e.id)}))})})},y=b.ZP.input(i||(i=(0,m.Z)(["\n\n  max-width: 450px;\n  padding: 10px;\n\n  border-radius: 8px;\n  border: 2px solid #badbe7;\n"]))),w=r(7574);function k(){var n=(0,a.I0)(),e=(0,a.v9)(l);return(0,j.jsxs)(j.Fragment,{children:[" ",(0,j.jsx)("h3",{children:"\u0428\u0443\u043a\u0430\u0442\u0438 \u043f\u043e \u043d\u0456\u043a\u0443 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430"}),(0,j.jsx)(y,{type:"text",value:e,onChange:function(e){return n((0,w.T)(e.target.value))}})]})}var Z,C=r(5705),P=(0,b.ZP)(C.l0)(Z||(Z=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 1200px;\n  padding: 25px;\n  outline: 1px solid grey;\n  border-radius: 20px;\n  background-color: #97cedd;\n  margin: 0 auto;\n  label {\n    display: flex;\n  flex-direction: column;\n  margin-bottom: 15px;\n  font-size: 15px;\n  }\n  input {\n    padding: 6px 13px;\n  border-radius: 40px;\n  font: inherit;\n  }\n  button {\n    width: 79px;\n  padding: 3px;\n  cursor: pointer;\n  border-radius: 10px;\n  border: none;\n  box-shadow: 0 1px 7px grey;\n  background-color: #a2cae2;\n  margin-right: 4px;\n  box-shadow: 0 1px 7px grey;\n\n  &:hover,\n  &:focus {\n    background-color: #6787a1;\n    color: #bde6e6;\n    transform: scale(1.1);\n    }\n  }\n"]))),_=r(8007),I=_.Ry().shape({name:_.Z_().min(2,"\u0414\u0443\u0436\u0435 \u043a\u043e\u0440\u043e\u0442\u043a\u0435!").required("\u0417\u0430\u043d\u044f\u0442\u043e"),number:_.Z_().matches(/^\+[1-9]\d{1,14}$/,"\u041d\u0435\u0432\u0456\u0440\u043d\u0438\u0439 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443").required("\u041f\u043e\u0432\u0438\u043d\u043d\u043e \u0431\u0443\u0442\u0438 \u0444\u0456\u043b\u0434")}),N=function(){var n=(0,a.I0)(),e=(0,a.v9)(x);return(0,j.jsx)(C.J9,{initialValues:{name:"",number:""},validationSchema:I,onSubmit:function(r,t){var o;o=r,e.some((function(n){return n.name===o.name}))?alert("A contact with that name already exists"):n((0,d.uK)(o)),t.resetForm()},children:(0,j.jsxs)(P,{children:[(0,j.jsxs)("label",{children:["\u0406\u043c'\u044f",(0,j.jsx)(C.gN,{type:"text",name:"name",placeholder:" Name"}),(0,j.jsx)(C.Bc,{name:"name"})]}),(0,j.jsxs)("label",{children:["\u041d\u043e\u043c\u0435\u0440",(0,j.jsx)(C.gN,{type:"tel",name:"number",placeholder:" + Number"}),(0,j.jsx)(C.Bc,{name:"number"})]}),(0,j.jsx)("button",{type:"submit",children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442"})]})})},q=r(4270),F=function(){var n=(0,a.I0)();return(0,c.useEffect)((function(){n((0,d.yF)())}),[n]),(0,j.jsxs)(s.W,{children:[(0,j.jsx)(q.q,{children:(0,j.jsx)("title",{children:"Contacts"})}),(0,j.jsx)("h1",{children:"Phonebook"}),(0,j.jsx)(N,{}),(0,j.jsx)("h2",{children:"Contacts"}),(0,j.jsx)(k,{}),(0,j.jsx)(v,{})]})}}}]);
//# sourceMappingURL=882.1515fe9d.chunk.js.map