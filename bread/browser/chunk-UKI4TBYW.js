import{T as F,V as _,X as E,da as T,ja as D,ka as I,la as $}from"./chunk-JTO4IVOG.js";import{$a as i,Ia as v,Ma as x,N as y,Pa as d,Ra as P,T as h,Ua as w,X as c,Za as t,_a as a,eb as f,ga as g,gb as C,gc as k,hb as M,mc as b,ob as n,vb as S,wb as u,ya as s,zb as m}from"./chunk-UPC6NQTV.js";var V=({dt:e})=>`
.p-floatlabel {
    display: block;
    position: relative;
}

.p-floatlabel label {
    position: absolute;
    pointer-events: none;
    top: 50%;
    transform: translateY(-50%);
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
    font-weight: ${e("floatlabel.font.weight")};
    inset-inline-start: ${e("floatlabel.position.x")};
    color: ${e("floatlabel.color")};
    transition-duration: ${e("floatlabel.transition.duration")};
}

.p-floatlabel:has(.p-textarea) label {
    top: ${e("floatlabel.position.y")};
    transform: translateY(0);
}

.p-floatlabel:has(.p-inputicon:first-child) label {
    inset-inline-start: calc((${e("form.field.padding.x")} * 2) + ${e("icon.size")});
}

.p-floatlabel:has(.ng-invalid.ng-dirty) label {
    color: ${e("floatlabel.invalid.color")};
}

.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-focus) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    top: ${e("floatlabel.over.active.top")};
    transform: translateY(0);
    font-size: ${e("floatlabel.active.font.size")};
    font-weight: ${e("floatlabel.label.active.font.weight")};
}

.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    color: ${e("floatlabel.active.color")};
}

.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label,
.p-floatlabel:has(.p-inputwrapper-focus) label {
    color: ${e("floatlabel.focus.color")};
}

.p-floatlabel-in .p-inputtext,
.p-floatlabel-in .p-textarea,
.p-floatlabel-in .p-select-label,
.p-floatlabel-in .p-multiselect-label-container,
.p-floatlabel-in .p-autocomplete-input-multiple,
.p-floatlabel-in .p-cascadeselect-label,
.p-floatlabel-in .p-treeselect-label {
    padding-top: ${e("floatlabel.in.input.padding.top")};
}

.p-floatlabel-in:has(input:focus) label,
.p-floatlabel-in:has(input.p-filled) label,
.p-floatlabel-in:has(input:-webkit-autofill) label,
.p-floatlabel-in:has(textarea:focus) label,
.p-floatlabel-in:has(textarea.p-filled) label,
.p-floatlabel-in:has(.p-inputwrapper-focus) label,
.p-floatlabel-in:has(.p-inputwrapper-filled) label {
    top: ${e("floatlabel.in.active.top")};
}

.p-floatlabel-on:has(input:focus) label,
.p-floatlabel-on:has(input.p-filled) label,
.p-floatlabel-on:has(input:-webkit-autofill) label,
.p-floatlabel-on:has(textarea:focus) label,
.p-floatlabel-on:has(textarea.p-filled) label,
.p-floatlabel-on:has(.p-inputwrapper-focus) label,
.p-floatlabel-on:has(.p-inputwrapper-filled) label {
    top: 0;
    transform: translateY(-50%);
    border-radius: ${e("floatlabel.on.border.radius")};
    background: ${e("floatlabel.on.active.background")};
    padding: ${e("floatlabel.on.active.padding")};
}
`,Y={root:({instance:e,props:o})=>["p-floatlabel",{"p-floatlabel-over":o.variant==="over","p-floatlabel-on":o.variant==="on","p-floatlabel-in":o.variant==="in"}]},L=(()=>{class e extends _{name="floatlabel";theme=V;classes=Y;static \u0275fac=(()=>{let p;return function(r){return(p||(p=g(e)))(r||e)}})();static \u0275prov=y({token:e,factory:e.\u0275fac})}return e})();var z=["*"],N=(()=>{class e extends E{_componentStyle=h(L);variant="over";static \u0275fac=(()=>{let p;return function(r){return(p||(p=g(e)))(r||e)}})();static \u0275cmp=c({type:e,selectors:[["p-floatlabel"],["p-floatLabel"],["p-float-label"]],hostVars:8,hostBindings:function(l,r){l&2&&P("p-floatlabel",!0)("p-floatlabel-over",r.variant==="over")("p-floatlabel-on",r.variant==="on")("p-floatlabel-in",r.variant==="in")},inputs:{variant:"variant"},standalone:!0,features:[S([L]),v,u],ngContentSelectors:z,decls:1,vars:0,template:function(l,r){l&1&&(C(),M(0))},dependencies:[b,F],encapsulation:2,changeDetection:0})}return e})();var A=(e,o)=>({"bg-blue-500":e,"bg-gray-200 text-gray-700":o}),J=(e,o)=>({"bg-yellow-500":e,"bg-gray-200 text-gray-700":o}),G=(e,o)=>({"bg-green-500":e,"bg-gray-200 text-gray-700":o}),H=(e,o)=>({"bg-red-500":e,"bg-gray-200 text-gray-700":o}),R=(e,o)=>({"bg-black":e,"bg-gray-200 text-gray-700":o});function q(e,o){e&1&&(t(0,"div")(1,"h4",25),n(2,"Detalles de Tarjeta"),a(),t(3,"div",26)(4,"p-floatlabel",13),i(5,"input",27),t(6,"label",28),n(7,"N\xFAmero de Tarjeta"),a()()(),t(8,"div",29)(9,"p-floatlabel",13),i(10,"input",30),t(11,"label",31),n(12,"Fecha de Expiraci\xF3n"),a()(),t(13,"p-floatlabel",13),i(14,"input",32),t(15,"label",33),n(16,"CVV"),a()()()())}var j=class e{selectedPayment="creditCard";selectPaymentMethod(o){this.selectedPayment=o}static \u0275fac=function(p){return new(p||e)};static \u0275cmp=c({type:e,selectors:[["app-payment"]],standalone:!0,features:[u],decls:55,vars:21,consts:[[1,"w-full","max-w-[1100px]","mx-auto","mt-16"],[1,"font-BebasNeue","font-bold","text-[#40220d]","text-[60px]","2xl:text-[80px]"],[1,"grid","grid-cols-2","gap-8","mt-8"],[1,"border","border-surface","rounded-border","p-4"],[1,"text-lg","font-bold","mb-4"],[1,"flex","gap-4","flex-wrap","[&>button]:w-fit","mb-10"],[1,"py-2","px-4","rounded","text-white","flex","items-center","gap-2",3,"click","ngClass"],[1,"pi","pi-credit-card"],[1,"pi","pi-paypal"],[1,"pi","pi-university"],[1,"pi","pi-google"],[1,"pi","pi-apple"],[1,"mb-4"],["variant","in"],["id","name","type","text","pInputText","","placeholder"," ",1,"mt-1","block","w-full","p-2","border","border-gray-300","rounded-md","shadow-sm","focus:ring-indigo-500","focus:border-indigo-500","sm:text-sm"],["for","name"],["id","address","type","text","pInputText","","placeholder"," ",1,"mt-1","block","w-full","p-2","border","border-gray-300","rounded-md","shadow-sm","focus:ring-indigo-500","focus:border-indigo-500","sm:text-sm"],["for","address"],["id","city","type","text","pInputText","","placeholder"," ",1,"mt-1","block","w-full","p-2","border","border-gray-300","rounded-md","shadow-sm","focus:ring-indigo-500","focus:border-indigo-500","sm:text-sm"],["for","city"],["id","postalCode","type","text","pInputText","","placeholder"," ",1,"mt-1","block","w-full","p-2","border","border-gray-300","rounded-md","shadow-sm","focus:ring-indigo-500","focus:border-indigo-500","sm:text-sm"],["for","postalCode"],["id","country","type","text","pInputText","","placeholder"," ",1,"mt-1","block","w-full","p-2","border","border-gray-300","rounded-md","shadow-sm","focus:ring-indigo-500","focus:border-indigo-500","sm:text-sm"],["for","country"],["type","submit",1,"mt-4","w-full","py-2","px-4","bg-blue-500","text-white","rounded-md","shadow-sm","hover:bg-blue-600","focus:outline-none","focus:ring-2","focus:ring-offset-2","focus:ring-indigo-500"],[1,"text-md","font-semibold","mb-2"],[1,"mb-4","w-full"],["pInputText","","id","cardNumber","p-inputMask","","mask","9999 9999 9999 9999","placeholder"," ",1,"w-full"],["for","cardNumber"],[1,"grid","grid-cols-2","gap-4"],["pInputText","","id","expiryDate","p-inputMask","","mask","99/99","placeholder"," ",1,"w-full"],["for","expiryDate"],["pInputText","","id","cvv","p-inputMask","","mask","999","placeholder"," ",1,"w-full"],["for","cvv"]],template:function(p,l){p&1&&(t(0,"div",0)(1,"h1",1),n(2," Elige tu m\xE9todo de pago: "),a(),t(3,"div",2)(4,"div",3)(5,"h3",4),n(6,"M\xE9todo de Pago"),a(),t(7,"div",5)(8,"button",6),f("click",function(){return l.selectPaymentMethod("creditCard")}),i(9,"i",7),n(10," Tarjeta de Cr\xE9dito "),a(),t(11,"button",6),f("click",function(){return l.selectPaymentMethod("paypal")}),i(12,"i",8),n(13," PayPal "),a(),t(14,"button",6),f("click",function(){return l.selectPaymentMethod("bankTransfer")}),i(15,"i",9),n(16," Transferencia Bancaria "),a(),t(17,"button",6),f("click",function(){return l.selectPaymentMethod("googlePay")}),i(18,"i",10),n(19," Google Pay "),a(),t(20,"button",6),f("click",function(){return l.selectPaymentMethod("applePay")}),i(21,"i",11),n(22," Apple Pay "),a()(),x(23,q,17,0,"div"),a(),t(24,"div",3)(25,"h3",4),n(26,"Formulario de Facturaci\xF3n"),a(),t(27,"form")(28,"div",12)(29,"p-floatLabel",13),i(30,"input",14),t(31,"label",15),n(32,"Nombre Completo"),a()()(),t(33,"div",12)(34,"p-floatLabel",13),i(35,"input",16),t(36,"label",17),n(37,"Direcci\xF3n"),a()()(),t(38,"div",12)(39,"p-floatLabel",13),i(40,"input",18),t(41,"label",19),n(42,"Ciudad"),a()()(),t(43,"div",12)(44,"p-floatLabel",13),i(45,"input",20),t(46,"label",21),n(47,"C\xF3digo Postal"),a()()(),t(48,"div",12)(49,"p-floatLabel",13),i(50,"input",22),t(51,"label",23),n(52,"Pa\xEDs"),a()()(),t(53,"button",24),n(54," Pagar "),a()()()()()),p&2&&(s(8),d("ngClass",m(6,A,l.selectedPayment==="creditCard",l.selectedPayment!=="creditCard")),s(3),d("ngClass",m(9,J,l.selectedPayment==="paypal",l.selectedPayment!=="paypal")),s(3),d("ngClass",m(12,G,l.selectedPayment==="bankTransfer",l.selectedPayment!=="bankTransfer")),s(3),d("ngClass",m(15,H,l.selectedPayment==="googlePay",l.selectedPayment!=="googlePay")),s(3),d("ngClass",m(18,R,l.selectedPayment==="applePay",l.selectedPayment!=="applePay")),s(3),w(l.selectedPayment==="creditCard"?23:-1))},dependencies:[b,k,$,I,D,N,T]})};export{j as PaymentComponent};
