(this.webpackJsonprestaurantcliente=this.webpackJsonprestaurantcliente||[]).push([[0],{76:function(e,t,a){e.exports=a(94)},81:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(67),c=a.n(l),o=(a(81),a(1)),s=a(68),m=a(31),i=a.n(m),u=(a(82),a(95),Object(m.initializeApp)({apiKey:"AIzaSyCqG_1hm7AJN58pyBj_lbMecOtwP2NXbzQ",authDomain:"taxis-stackblitz.firebaseapp.com",projectId:"taxis-stackblitz",storageBucket:"taxis-stackblitz.appspot.com",messagingSenderId:"977311415632",appId:"1:977311415632:web:c4a419e65259ff87fa8055"})),d=new function e(){Object(s.a)(this,e),i.a.apps.length||i.a.initializeApp(u),this.db=i.a.firestore(),this.storage=i.a.storage()},b=Object(r.createContext)(),p=d,f=a(5),g=a(2),E=function(e){var t,a=e.orden,r=e.arrItems,l=a.date.toDate().toLocaleTimeString(),c=a.date.toDate().toLocaleDateString("es-CL",{weekday:"long",year:"numeric",month:"short",day:"numeric"});return n.a.createElement("div",{className:"w-full px-3 mb-4"},n.a.createElement("div",{className:"p-5 shadow-md bg-white"},n.a.createElement("div",{className:"lg:flex"},n.a.createElement("div",{className:"lg:w-7/12 xl:w-9/12 pl-5"},n.a.createElement("h1",null,"Id-Orden: ",n.a.createElement("span",{className:"text-yellow-600 text-lg"},a.id),"  "),n.a.createElement("p",null," ",n.a.createElement("span",{className:"text-gray-600"},"comprador:")," ",a.buyer.name," "),n.a.createElement("p",null,n.a.createElement("span",{className:"text-gray-600"},"correo:"),"  ",a.buyer.email," "),n.a.createElement("p",null,n.a.createElement("span",{className:"text-gray-600"},"telefono:")," ",a.buyer.phone," "),n.a.createElement("p",null,n.a.createElement("span",{className:"text-gray-600"},"fecha:"),"  ",c,", ",l),n.a.createElement("p",null,n.a.createElement("span",{className:"text-gray-600"},"direccion:"),"  ",a.buyer.adress),n.a.createElement("br",null),a.items.map((function(e,a){return n.a.createElement("div",{key:a},n.a.createElement("p",null,"Id-producto: ",n.a.createElement("span",{className:"text-yellow-600 text-lg"},e.id)," "),n.a.createElement("p",null,n.a.createElement("span",{className:"text-gray-600"},"producto:"),"  ",e.item),n.a.createElement("p",null,n.a.createElement("span",{className:"text-gray-600"},"precio:"),"  ",e.price),n.a.createElement("p",null,n.a.createElement("span",{className:"text-gray-600"},"cantidad:"),"  ",e.qty),r.map((function(a){return console.log(a.id===e.id?t=a.pictureUrl[0]:null)})),n.a.createElement("img",{className:"w-2/12",src:t,alt:""}))})),n.a.createElement("p",{className:"text-gray-800 font-bold"},"Total a Pagar: $ ",a.total)),n.a.createElement("div",{className:"lg:w-5/12 xl:w-3/12 m-2 text-center text-white"},n.a.createElement("p",{className:a.entregado?"bg-blue-500 p-5":"bg-gray-500 p-5"},a.entregado?"Entregado por":"Sin Entregar"," ",a.deliver.slice(0,-10))))))},x=function(){var e=Object(r.useContext)(b).firebase,t=Object(r.useState)([]),a=Object(g.a)(t,2),l=a[0],c=a[1],o=Object(r.useState)([]),s=Object(g.a)(o,2),m=s[0],i=s[1];function u(e){var t=e.docs.map((function(e){return Object(f.a)({id:e.id},e.data())}));c(t)}function d(e){var t=e.docs.map((function(e){return Object(f.a)({id:e.id},e.data())}));i(t)}return Object(r.useEffect)((function(){e.db.collection("orders").onSnapshot(u);e.db.collection("items").onSnapshot(d)}),[]),n.a.createElement("div",{className:"w-full"},n.a.createElement("h1",{className:"text-3xl font-light mb-4 ml-3"},"Ordenes Para Repartir"),n.a.createElement("div",{className:"sm:w-full sm:flex-wrap"},l.filter((function(e){return!0!==e.noDeliver})).map((function(e){return n.a.createElement(E,{key:e.id,orden:e,arrItems:m})}))))},h=a(11),v=function(e){var t=e.item,a=t.id,r=t.name,l=t.details,c=t.pictureUrl,o=t.category,s=t.price,m=t.stock,i=t.description;return n.a.createElement("div",{className:"w-full px-3 mb-4"},n.a.createElement("div",{className:"p-5 shadow-md bg-white"},n.a.createElement("div",{className:"lg:flex"},n.a.createElement("div",{className:"lg:w-5/12 xl:w-3/12"},n.a.createElement("img",{src:c[0],alt:""})),n.a.createElement("div",{className:"lg:w-7/12 xl:w-9/12 pl-5"},n.a.createElement("p",{className:"text-2xl mb-4"},r," "),n.a.createElement("p",{className:"text-2xl text-yellow-600 mb-4"},a," "),n.a.createElement("p",{className:"text-gray-600 mb-4"},"Detalles: ","",n.a.createElement("span",{className:"text-gray-700 font-bold"},l)),n.a.createElement("p",{className:"text-gray-600 mb-4"},"Categor\xeda: ","",n.a.createElement("span",{className:"text-gray-700 font-bold"},o)),n.a.createElement("p",{className:"text-gray-600 mb-4"},"Descripcion: ","",n.a.createElement("span",{className:"text-gray-700 font-bold"},i)),n.a.createElement("p",{className:"text-gray-600 mb-4"},"Precio: ","",n.a.createElement("span",{className:"text-gray-700 font-bold"},"$ ",s)),n.a.createElement("p",{className:"text-gray-600 mb-4 "},"Stock: ","",n.a.createElement("span",{className:m<=10?"bg-red-600 px-20 py-2 font-bold text-white":"text-gray-700 font-bold"},m))))))},N=function(){var e=Object(r.useState)([]),t=Object(g.a)(e,2),a=t[0],l=t[1],c=Object(r.useContext)(b).firebase;function o(e){var t=e.docs.map((function(e){return Object(f.a)({id:e.id},e.data())}));l(t)}return Object(r.useEffect)((function(){c.db.collection("items").onSnapshot(o)}),[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(h.b,{to:"/nuevo",className:"bg-blue-800 hover:bg-blue-600 inline-block mb-5 p-2 text-white uppercase font-bold ml-3"},"Agregar Producto"),a.map((function(e){return n.a.createElement(v,{key:e.id,item:e})})))},y=a(75),w=a(63),O=a.n(w),j=a(69),k=a(74),S=a(28),C=a(73),D=a.n(C),P=function(){var e=Object(r.useState)(!1),t=Object(g.a)(e,2),a=t[0],l=t[1],c=Object(r.useState)(0),s=Object(g.a)(c,2),m=s[0],i=s[1],u=Object(r.useState)([]),d=Object(g.a)(u,2),p=d[0],f=d[1],E=Object(r.useState)(""),x=Object(g.a)(E,2),h=x[0],v=x[1],N=Object(r.useContext)(b).firebase,w=Object(o.f)(),C=Object(k.a)({initialValues:{name:"",price:"",category:"",pictureUrl:[],description:"",initial:1,stock:"",details:[]},validationSchema:S.b({name:S.c().min(3,"Los Platillos deben tener al menos 3 caracteres").required("El Nombre del platillo es obligatorio"),stock:S.a().min(1,"Debes agregar un stock").required("El stock es obligatorio"),price:S.a().min(1,"Debes agregar un n\xfamero").required("El Precio es obligatorio"),details:S.c().required("La details es obligatoria"),category:S.c().required("La Categor\xeda es obligatoria"),description:S.c().min(10,"La descripci\xf3n debe ser m\xe1s larga").required("La descripci\xf3n es obligatoria")}),onSubmit:function(e){try{e.pictureUrl=p,e.details=h.split(","),N.db.collection("items").add(e),w("/stock")}catch(t){console.log(t)}}}),P=function(){var e=Object(j.a)(O.a.mark((function e(t){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(100),l(!1),e.next=4,N.storage.ref("items").child(t).getDownloadURL();case 4:a=e.sent,f([a]);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"flex justify-center"},n.a.createElement("div",{className:"w-full max-w-3xl"},n.a.createElement("form",{onSubmit:C.handleSubmit},n.a.createElement("div",{className:"mb-4"},n.a.createElement("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"name"},"Nombre"),n.a.createElement("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"name",type:"text",placeholder:"Nombre",value:C.values.name,onChange:C.handleChange,onBlur:C.handleBlur})),C.touched.name&&C.errors.name?n.a.createElement("div",{className:"bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5",role:"alert"},n.a.createElement("p",{className:"font-bold"},"Hubo un error:"),n.a.createElement("p",null,C.errors.name," ")):null,n.a.createElement("div",{className:"mb-4"},n.a.createElement("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"details"},"Detalles"),n.a.createElement("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"details",name:"details",type:"text",placeholder:"Detalle",value:C.values.details,onChange:C.handleChange,onBlur:function(e){return t=e.target.value,void v([].concat(Object(y.a)(h),[t]).join(""));var t}})),C.touched.details&&C.errors.details?n.a.createElement("div",{className:"bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5",role:"alert"},n.a.createElement("p",{className:"font-bold"},"Hubo un error:"),n.a.createElement("p",null,"Anota algun Dato como Detalle")):null,n.a.createElement("div",{className:"mb-4"},n.a.createElement("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"price"},"Precio"),n.a.createElement("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"price",type:"number",placeholder:"$",min:"0",value:C.values.price,onChange:C.handleChange,onBlur:C.handleBlur})),C.touched.price&&C.errors.price?n.a.createElement("div",{className:"bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5",role:"alert"},n.a.createElement("p",{className:"font-bold"},"Hubo un error:"),n.a.createElement("p",null,C.errors.price," ")):null,n.a.createElement("div",{className:"mb-4"},n.a.createElement("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"stock"},"Stock"),n.a.createElement("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"stock",type:"number",placeholder:"stock",min:"0",value:C.values.stock,onChange:C.handleChange,onBlur:C.handleBlur})),C.touched.stock&&C.errors.stock?n.a.createElement("div",{className:"bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5",role:"alert"},n.a.createElement("p",{className:"font-bold"},"Hubo un error:"),n.a.createElement("p",null,C.errors.stock," ")):null,n.a.createElement("div",{className:"mb-4"},n.a.createElement("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"category"},"Categor\xeda"),n.a.createElement("select",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"category",name:"category",value:C.values.category,onChange:C.handleChange,onBlur:C.handleBlur},n.a.createElement("option",{value:""},"-- Seleccione --"),n.a.createElement("option",{value:"suplementos"},"Suplementos"),n.a.createElement("option",{value:"articulos"},"Articulos"))),C.touched.category&&C.errors.category?n.a.createElement("div",{className:"bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5",role:"alert"},n.a.createElement("p",{className:"font-bold"},"Hubo un error:"),n.a.createElement("p",null,C.errors.category," ")):null,n.a.createElement("div",{className:"mb-4"},n.a.createElement("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"pictureUrl"},"Imagen"),n.a.createElement(D.a,{accept:"image/*",id:"pictureUrl",name:"pictureUrl",randomizeFilename:!0,storageRef:N.storage.ref("items"),onUploadStart:function(){i(0),l(!0)},onUploadError:function(e){l(!1),console.log(e)},onUploadSuccess:P,onProgress:function(e){i(e)}})),a&&n.a.createElement("div",{className:"h-12 relative w-full border"},n.a.createElement("div",{className:"bg-green-500 absolute left-0 top-0 text-white px-2 text-sm h-12 flex items-center",style:{width:"".concat(m,"%")}},m," %")),0!==p.length&&n.a.createElement("p",{className:"bg-green-500 text-white p-3 text-center my-5"},"La Imagen se subi\xf3 correctamente"),n.a.createElement("div",{className:"mb-4"},n.a.createElement("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"description"},"Descripci\xf3n"),n.a.createElement("textarea",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20",id:"description",placeholder:"Descripci\xf3n",value:C.values.description,onChange:C.handleChange,onBlur:C.handleBlur})),C.touched.description&&C.errors.description?n.a.createElement("div",{className:"bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5",role:"alert"},n.a.createElement("p",{className:"font-bold"},"Hubo un error:"),n.a.createElement("p",null,C.errors.description," ")):null,n.a.createElement("input",{type:"submit",className:"bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold",value:"Agregar"})))))},B=function(){return n.a.createElement("div",{className:"md:w-2/6 xl:w-1/5 bg-gray-800"},n.a.createElement("div",{className:"p-6"},n.a.createElement("p",{className:"uppercase text-white text-2xl tracking-wide font-bold"},"nexGym ADMIN"),n.a.createElement("p",{className:"mt-3 text-gray-600"},"Administra tu ecommerce en las siguientes opciones:"),n.a.createElement("nav",{className:"mt-10"},n.a.createElement(h.c,{className:"p-1 text-gray-400 block text-yellow-500 hover:bg-orange-300 hover:text-gray-900 a",exact:"true",to:"/stock"},"Stock Global"),n.a.createElement(h.c,{className:"p-1 text-gray-400 block text-yellow-500 hover:bg-orange-300 hover:text-gray-900 a",exact:"true",to:"/"},"Ordenes Para Repartir"),n.a.createElement(h.c,{className:"p-1 text-gray-400 block text-yellow-500 hover:bg-orange-300 hover:text-gray-900 a",exact:"true",to:"/stock-bajo"},"Productos Stock Bajo"),n.a.createElement("br",null),n.a.createElement(h.c,{className:"p-1 text-gray-400 block text-yellow-500 hover:bg-orange-300 hover:text-gray-900 a",exact:"true",to:"/ordenes-tienda"},"Ordenes Tienda C Seri"),n.a.createElement(h.c,{className:"p-1 text-gray-400 block text-yellow-500 hover:bg-orange-300 hover:text-gray-900 a",exact:"true",to:"/ordenes-quiroga"},"Ordenes Tienda Quiroga"),n.a.createElement(h.c,{className:"p-1 text-gray-400 block text-yellow-500 hover:bg-orange-300 hover:text-gray-900 a",exact:"true",to:"/ordenes-perisur"},"Ordenes Tienda Perisur"),n.a.createElement(h.c,{className:"p-1 text-gray-400 block text-yellow-500 hover:bg-orange-300 hover:text-gray-900 a",exact:"true",to:"/ordenes-progreso"},"Ordenes Tienda Progreso"),n.a.createElement(h.c,{className:"p-1 text-gray-400 block text-yellow-500 hover:bg-orange-300 hover:text-gray-900 a",exact:"true",to:"/ordenes-navojoa"},"Ordenes Tienda Navojoa"))))},I=function(){var e=Object(r.useContext)(b).firebase,t=Object(r.useState)([]),a=Object(g.a)(t,2),l=a[0],c=a[1],o=Object(r.useState)([]),s=Object(g.a)(o,2),m=s[0],i=s[1];function u(e){var t=e.docs.map((function(e){return Object(f.a)({id:e.id},e.data())}));c(t)}function d(e){var t=e.docs.map((function(e){return Object(f.a)({id:e.id},e.data())}));i(t)}return Object(r.useEffect)((function(){e.db.collection("orders").onSnapshot(u);e.db.collection("items").onSnapshot(d)}),[]),n.a.createElement("div",{className:"w-full"},n.a.createElement("h1",{className:"text-3xl font-light mb-4 ml-3 border"},"Ordenes Para Recoger en Tienda Camino del Seri"),n.a.createElement("div",{className:"sm:w-full sm:flex-wrap"},l.filter((function(e){return!0===e.noDeliver})).filter((function(e){return"cseri"===e.sucursal})).map((function(e){return n.a.createElement(E,{key:e.id,orden:e,arrItems:m})}))))},T=function(){var e=Object(r.useContext)(b).firebase,t=Object(r.useState)([]),a=Object(g.a)(t,2),l=a[0],c=a[1],o=Object(r.useState)([]),s=Object(g.a)(o,2),m=s[0],i=s[1];function u(e){var t=e.docs.map((function(e){return Object(f.a)({id:e.id},e.data())}));c(t)}function d(e){var t=e.docs.map((function(e){return Object(f.a)({id:e.id},e.data())}));i(t)}return Object(r.useEffect)((function(){e.db.collection("orders").onSnapshot(u);e.db.collection("items").onSnapshot(d)}),[]),n.a.createElement("div",{className:"w-full"},n.a.createElement("h1",{className:"text-3xl font-light mb-4 ml-3 border"},"Ordenes Para Recoger en Tienda Quiroga"),n.a.createElement("div",{className:"sm:w-full sm:flex-wrap"},l.filter((function(e){return!0===e.noDeliver})).filter((function(e){return"quiroga"===e.sucursal})).map((function(e){return n.a.createElement(E,{key:e.id,orden:e,arrItems:m})}))))},q=function(){var e=Object(r.useContext)(b).firebase,t=Object(r.useState)([]),a=Object(g.a)(t,2),l=a[0],c=a[1],o=Object(r.useState)([]),s=Object(g.a)(o,2),m=s[0],i=s[1];function u(e){var t=e.docs.map((function(e){return Object(f.a)({id:e.id},e.data())}));c(t)}function d(e){var t=e.docs.map((function(e){return Object(f.a)({id:e.id},e.data())}));i(t)}return Object(r.useEffect)((function(){e.db.collection("orders").onSnapshot(u);e.db.collection("items").onSnapshot(d)}),[]),n.a.createElement("div",{className:"w-full"},n.a.createElement("h1",{className:"text-3xl font-light mb-4 ml-3 border"},"Ordenes Para Recoger en Tienda Navojoa"),n.a.createElement("div",{className:"sm:w-full sm:flex-wrap"},l.filter((function(e){return!0===e.noDeliver})).filter((function(e){return"navojoa"===e.sucursal})).map((function(e){return n.a.createElement(E,{key:e.id,orden:e,arrItems:m})}))))},A=function(){var e=Object(r.useContext)(b).firebase,t=Object(r.useState)([]),a=Object(g.a)(t,2),l=a[0],c=a[1],o=Object(r.useState)([]),s=Object(g.a)(o,2),m=s[0],i=s[1];function u(e){var t=e.docs.map((function(e){return Object(f.a)({id:e.id},e.data())}));c(t)}function d(e){var t=e.docs.map((function(e){return Object(f.a)({id:e.id},e.data())}));i(t)}return Object(r.useEffect)((function(){e.db.collection("orders").onSnapshot(u);e.db.collection("items").onSnapshot(d)}),[]),n.a.createElement("div",{className:"w-full"},n.a.createElement("h1",{className:"text-3xl font-light mb-4 ml-3 border"},"Ordenes Para Recoger en Tienda Perisur"),n.a.createElement("div",{className:"sm:w-full sm:flex-wrap"},l.filter((function(e){return!0===e.noDeliver})).filter((function(e){return"perisur"===e.sucursal})).map((function(e){return n.a.createElement(E,{key:e.id,orden:e,arrItems:m})}))))},F=function(){var e=Object(r.useContext)(b).firebase,t=Object(r.useState)([]),a=Object(g.a)(t,2),l=a[0],c=a[1],o=Object(r.useState)([]),s=Object(g.a)(o,2),m=s[0],i=s[1];function u(e){var t=e.docs.map((function(e){return Object(f.a)({id:e.id},e.data())}));c(t)}function d(e){var t=e.docs.map((function(e){return Object(f.a)({id:e.id},e.data())}));i(t)}return Object(r.useEffect)((function(){e.db.collection("orders").onSnapshot(u);e.db.collection("items").onSnapshot(d)}),[]),n.a.createElement("div",{className:"w-full"},n.a.createElement("h1",{className:"text-3xl font-light mb-4 ml-3 border"},"Ordenes Para Recoger en Tienda Progreso"),n.a.createElement("div",{className:"sm:w-full sm:flex-wrap"},l.filter((function(e){return!0===e.noDeliver})).filter((function(e){return"progreso"===e.sucursal})).map((function(e){return n.a.createElement(E,{key:e.id,orden:e,arrItems:m})}))))},U=function(){var e=Object(r.useContext)(b).firebase,t=Object(r.useState)([]),a=Object(g.a)(t,2),l=a[0],c=a[1],o=Object(r.useState)(),s=Object(g.a)(o,2),m=s[0],i=s[1];console.log(m);var u=Object(r.useState)(),d=Object(g.a)(u,2),p=d[0],E=d[1];console.log(m);var x=function(t){return e.db.collection("items").doc(t).update({stock:m})};function h(e){var t=e.docs.map((function(e){return Object(f.a)({id:e.id},e.data())}));c(t)}return Object(r.useEffect)((function(){e.db.collection("items").onSnapshot(h)}),[]),n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",{className:"text-3xl font-light mb-4 ml-3"},"Productos con Stock Bajo -10"),n.a.createElement("div",{className:"text-2xl text-yellow-600 ml-3"},p),n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),x(p)},className:"mb-5 border ml-3 d-flex"},n.a.createElement("input",{className:"m-2 p-1 w-1/4",type:"text",onChange:function(e){return E(e.target.value)}}),n.a.createElement("input",{className:"m-2 p-1 text-center",type:"number",onChange:function(e){return i(e.target.value)}}),n.a.createElement("input",{className:"p-2 bg-gray-600 text-white hover:bg-blue-400 rounded",type:"submit",value:"Actualizar Stock"})),l.filter((function(e){return e.stock<11})).map((function(e){return n.a.createElement(v,{key:e.id,item:e})})))};var L=function(){return n.a.createElement(b.Provider,{value:{firebase:p}},n.a.createElement("div",{className:"md:flex min-h-screen"},n.a.createElement(B,null),n.a.createElement("div",{className:"md:w-2/5 xl:w-4/5 p-6"},n.a.createElement(o.c,null,n.a.createElement(o.a,{path:"/",element:n.a.createElement(x,null)}),n.a.createElement(o.a,{path:"/stock",element:n.a.createElement(N,null)}),n.a.createElement(o.a,{path:"/nuevo",element:n.a.createElement(P,null)}),n.a.createElement(o.a,{path:"/ordenes-tienda",element:n.a.createElement(I,null)}),n.a.createElement(o.a,{path:"/ordenes-quiroga",element:n.a.createElement(T,null)}),n.a.createElement(o.a,{path:"/ordenes-navojoa",element:n.a.createElement(q,null)}),n.a.createElement(o.a,{path:"/ordenes-perisur",element:n.a.createElement(A,null)}),n.a.createElement(o.a,{path:"/ordenes-progreso",element:n.a.createElement(F,null)}),n.a.createElement(o.a,{path:"/stock-bajo",element:n.a.createElement(U,null)})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(h.a,null,n.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[76,1,2]]]);
//# sourceMappingURL=main.bcc9be7d.chunk.js.map