(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],Array(19).concat([function(e,t,a){e.exports=a(44)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(7),r=a.n(l),o=(a(24),a(4)),i=a(1),s=function(){return c.a.createElement("h1",null," New Place page!")},m=(a(25),function(e){return c.a.createElement("div",{className:"card ".concat(e.className),style:e.style},e.children)}),u=a(10),d=(a(26),a(27),function(e){return e.href?c.a.createElement("a",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),href:e.href},e.children):e.to?c.a.createElement(o.b,{to:e.to,exact:e.exact,className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger")},e.children):c.a.createElement("button",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),type:e.type,onClick:e.onClick,disabled:e.disabled},e.children)}),E=(a(33),a(34),function(e){return Object(l.createPortal)(c.a.createElement("div",{className:"backdrop",onClick:e.onClick}),document.getElementById("backdrop-hook"))}),f=a(45),h=function(e){var t=c.a.createElement("div",{className:"modal ".concat(e.className),style:e.style},c.a.createElement("header",{className:"modal__header ".concat(e.headerClass)},c.a.createElement("h2",null,e.header)),c.a.createElement("form",{onSubmit:e.onSubmit?e.onSubmit:function(e){return e.preventDefault()}},c.a.createElement("div",{className:"modal__content ".concat(e.contentClass)},e.children),c.a.createElement("footer",{className:"modal__footer ".concat(e.footerClass)},e.footer)));return r.a.createPortal(t,document.getElementById("modal-hook"))},p=function(e){return c.a.createElement(n.Fragment,null,e.show&&c.a.createElement(E,{onClick:e.onCancel}),c.a.createElement(f.a,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal"},c.a.createElement(h,e)))},g=(a(35),function(e){var t=Object(n.useRef)(),a=e.center,l=e.zoom;return Object(n.useEffect)((function(){new window.ol.Map({target:t.current.id,layers:[new window.ol.layer.Tile({source:new window.ol.source.OSM})],view:new window.ol.View({center:window.ol.proj.fromLonLat([a.lng,a.lat]),zoom:l})})}),[a,l]),c.a.createElement("div",{ref:t,className:"map ".concat(e.className),style:e.style,id:"map"})}),b=function(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),l=a[0],r=a[1],o=function(){r(!1)};return c.a.createElement(n.Fragment,null,c.a.createElement(p,{show:l,onCancel:o,header:e.address,conterClass:"place=item__modal-content",footerClass:"place-item__modal-actions",footer:c.a.createElement(d,{onClick:o}," Close")},c.a.createElement("div",{className:"map-container"},c.a.createElement(g,{zoom:16,center:e.coordinates}))),c.a.createElement("li",{className:"place-item"},c.a.createElement(m,{className:"place-item__content"},c.a.createElement("div",{className:"place-item__image"},c.a.createElement("img",{src:e.image,alt:e.title})),c.a.createElement("div",{className:"place-item__info"},c.a.createElement("h2",null,e.title),c.a.createElement("h3",null,e.address),c.a.createElement("p",null,e.description)),c.a.createElement("div",{className:"place-item__actions"},c.a.createElement(d,{inverse:!0,onClick:function(){r(!0)}},"View on map"),c.a.createElement(d,{to:"/places/".concat(e.id)},"Edit"),c.a.createElement(d,{danger:!0},"Delete")))))},v=(a(36),function(e){return 0===e.items.length?c.a.createElement("div",{className:"place-list center"},c.a.createElement(m,null,c.a.createElement("h2",null,"No places found. Maybe create one?"),c.a.createElement("button",null,"Share Place"))):c.a.createElement("ul",{className:"place-list"},e.items.map((function(e){return c.a.createElement(b,{key:e.id,id:e.id,address:e.address,coordinates:e.coordinates,image:e.imageUrl,title:e.title,description:e.description,creatorId:e.creator})})))}),w=[{id:"p1",title:"Downtown Vancouver",address:"555 W Hastings St, Vancouver, BC V6B 4N6, Canada",description:'Give this a go. Fantastic views all around the city and beyond and the lift ride up to the top is fun too.\n    Thanks to the staff for looking after us today too in our "@" hour of need. You\'ll know what I mean \ud83d\ude0a',imageUrl:"https://images.dailyhive.com/20200103202317/vancouver-house-tower.jpg",coordinates:{lat:49.2847323,lng:-123.1141666},creator:"u1"},{id:"p2",title:"Downtown NYC",address:"United States, New York",description:"New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, \n    a densely populated borough that\u2019s among the world\u2019s major commercial, financial and cultural centers.",imageUrl:"https://i.natgeofe.com/k/5b396b5e-59e7-43a6-9448-708125549aa1/new-york-statue-of-liberty_16x9.jpg",coordinates:{lat:40.6974881,lng:-73.979681},creator:"u2"},{id:"p3",title:"Downtown NYC",address:"United States, New York",description:"New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, \n    a densely populated borough that\u2019s among the world\u2019s major commercial, financial and cultural centers.",imageUrl:"https://i.natgeofe.com/k/5b396b5e-59e7-43a6-9448-708125549aa1/new-york-statue-of-liberty_16x9.jpg",coordinates:{lat:40.6974881,lng:-73.979681},creator:"u1"}],N=function(){var e=Object(i.g)().userId,t=w.filter((function(t){return t.creator===e}));return c.a.createElement(v,{items:t})},k=(a(37),a(38),function(e){return c.a.createElement("header",{className:"main-header"},e.children)}),_=(a(39),function(){return c.a.createElement("ul",{className:"nav-links"},c.a.createElement("li",null,c.a.createElement(o.c,{to:"/",exact:!0},"ALL USERS")),c.a.createElement("li",null,c.a.createElement(o.c,{to:"/u1/places"},"ALL PLACES")),c.a.createElement("li",null,c.a.createElement(o.c,{to:"/places/new"},"NEW PLACE")),c.a.createElement("li",null,c.a.createElement(o.c,{to:"/auth"},"AUTHENTICATE")))}),y=(a(40),function(e){var t=c.a.createElement(f.a,{in:e.show,timeout:200,classNames:"slide-in-left",mountOnEnter:!0,unmountOnExit:!0},c.a.createElement("aside",{className:"side-drawer",onClick:e.onClick},e.children));return r.a.createPortal(t,document.getElementById("drawer-hook"))}),C=function(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),l=a[0],r=a[1],i=function(){r(!1)};return c.a.createElement(n.Fragment,null,l&&c.a.createElement(E,{onClick:i}),c.a.createElement(y,{show:l,onClick:i},c.a.createElement("nav",{className:"main-navigation__drawer-nav"},c.a.createElement(_,null))),c.a.createElement(k,null,c.a.createElement("button",{className:"main-navigation__menu-btn",onClick:function(){r(!0)}},c.a.createElement("span",null),c.a.createElement("span",null),c.a.createElement("span",null)),c.a.createElement("h1",{className:"main-navigation__title"},c.a.createElement(o.b,{to:"/"},"Your Places")),c.a.createElement("nav",{className:"main-navigation__header-nav"},c.a.createElement(_,null))))},j=(a(41),a(42),function(e){return c.a.createElement("div",{className:"avatar ".concat(e.className),style:e.style},c.a.createElement("img",{src:e.image,alt:e.alt,style:{width:e.width,height:e.width}}))}),O=function(e){return c.a.createElement("li",{className:"user-item"},c.a.createElement(m,{className:"user-item__content"},c.a.createElement(o.b,{to:"/".concat(e.id,"/places")},c.a.createElement("div",{className:"user-item__image"},c.a.createElement(j,{image:e.image,alt:e.name})),c.a.createElement("div",{className:"user-item__info"},c.a.createElement("h2",null,e.name),c.a.createElement("h3",null,e.placeCount,1===e.placeCount?" Place":" Places")))))},S=(a(43),function(e){return 0===e.items.length?c.a.createElement("div",{className:"center"},c.a.createElement(m,null,c.a.createElement("h2",null,"No users found."))):c.a.createElement("ul",{className:"users-list"},e.items.map((function(e){return c.a.createElement(O,{key:e.id,id:e.id,name:e.name,image:e.image,placeCount:e.places})})))}),x=function(){return c.a.createElement(S,{items:[{name:"Arash",image:"https://cdn1.vectorstock.com/i/1000x1000/06/70/brunette-businessman-avatar-man-face-profile-icon-vector-21960670.jpg",id:"u1",places:3},{name:"John",image:"https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg",id:"u2",places:1}]})},A=function(){return c.a.createElement(o.a,null,c.a.createElement(C,null),c.a.createElement("main",null,c.a.createElement(i.d,null,c.a.createElement(i.b,{path:"/",exact:!0},c.a.createElement(x,null)),c.a.createElement(i.b,{path:"/:userId/places",exact:!0},c.a.createElement(N,null)),c.a.createElement(i.b,{path:"/places/new",exact:!0},c.a.createElement(s,null)),c.a.createElement(i.a,{to:"/"}))))};r.a.render(c.a.createElement(A,null),document.getElementById("root"))}]),[[19,1,2]]]);
//# sourceMappingURL=main.b8c1b433.chunk.js.map