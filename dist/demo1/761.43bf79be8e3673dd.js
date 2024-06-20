"use strict";(self.webpackChunkdemo1=self.webpackChunkdemo1||[]).push([[761],{9761:(O,_,r)=>{r.r(_),r.d(_,{SlidersModule:()=>Y});var d=r(6814),g=r(7304),e=r(5879);let v=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=e.Xpm({type:n,selectors:[["app-sliders"]],decls:1,vars:0,template:function(a,i){1&a&&e._UZ(0,"router-outlet")},dependencies:[g.lC]})}return n})();var p=r(9862),Z=r(5619),u=r(4716),m=r(1904),S=r(3595);let h=(()=>{class n{http;authservice;isLoading$;isLoadingSubject;constructor(t,a){this.http=t,this.authservice=a,this.isLoadingSubject=new Z.X(!1),this.isLoading$=this.isLoadingSubject.asObservable()}listSliders(t=1,a){this.isLoadingSubject.next(!0);let i=new p.WM({Authorization:"Bearer"+this.authservice.token});return this.http.get(m.VU+"/admin/sliders?page="+t+"&search="+a,{headers:i}).pipe((0,u.x)(()=>this.isLoadingSubject.next(!1)))}createSliders(t){this.isLoadingSubject.next(!0);let a=new p.WM({Authorization:"Bearer"+this.authservice.token});return this.http.post(m.VU+"/admin/sliders",t,{headers:a}).pipe((0,u.x)(()=>this.isLoadingSubject.next(!1)))}showSlider(t){this.isLoadingSubject.next(!0);let a=new p.WM({Authorization:"Bearer"+this.authservice.token});return this.http.get(m.VU+"/admin/sliders/"+t,{headers:a}).pipe((0,u.x)(()=>this.isLoadingSubject.next(!1)))}updateSliders(t,a){this.isLoadingSubject.next(!0);let i=new p.WM({Authorization:"Bearer"+this.authservice.token});return this.http.post(m.VU+"/admin/sliders/edit/"+t,a,{headers:i}).pipe((0,u.x)(()=>this.isLoadingSubject.next(!1)))}deleteSlider(t){this.isLoadingSubject.next(!0);let a=new p.WM({Authorization:"Bearer"+this.authservice.token});return this.http.delete(m.VU+"/admin/sliders/"+t,{headers:a}).pipe((0,u.x)(()=>this.isLoadingSubject.next(!1)))}static \u0275fac=function(a){return new(a||n)(e.LFG(p.eN),e.LFG(S.e8))};static \u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var f=r(2425),s=r(6223);function T(n,c){1&n&&(e.TgZ(0,"span",36),e._uU(1,"Guardar"),e.qZA())}function x(n,c){1&n&&(e.TgZ(0,"span"),e._uU(1,"Espera..."),e.qZA())}function y(n,c){1&n&&e._UZ(0,"span",37)}const C=function(n){return{"background-image":n}};let A=(()=>{class n{sliderService;toastr;title="";label="";subtitle="";link="";color="";image_prev="";file_image=null;isLoading$;constructor(t,a){this.sliderService=t,this.toastr=a}ngOnInit(){this.isLoading$=this.sliderService.isLoading$}processImage(t){if(!t.target.files[0].type.startsWith("image/"))return void this.toastr.error("Solamente se aceptan im\xe1genes","Error de validaci\xf3n");this.file_image=t.target.files[0];let i=new FileReader;i.readAsDataURL(this.file_image),i.onloadend=()=>this.image_prev=i.result,this.sliderService.isLoadingSubject.next(!0),setTimeout(()=>{this.sliderService.isLoadingSubject.next(!1)},50)}isLoadingView(){this.sliderService.isLoadingSubject.next(!0),setTimeout(()=>{this.sliderService.isLoadingSubject.next(!1)},50)}save(){if(!this.title||!this.subtitle||!this.file_image)return void this.toastr.error("Ingrese todos los datos correctamente","Validaci\xf3n");let t=new FormData;t.append("title",this.title),this.label&&t.append("label",this.label),t.append("subtitle",this.subtitle+""),t.append("image",this.file_image),this.link&&t.append("link",this.link),this.color&&t.append("color",this.color),this.sliderService.createSliders(t).subscribe(a=>{console.log(a),this.title="",this.label="",this.subtitle="",this.link="",this.color="",this.file_image=null,this.image_prev="",this.toastr.success("Exito","El Slider se registr\xf3 correctamente")})}static \u0275fac=function(a){return new(a||n)(e.Y36(h),e.Y36(f._W))};static \u0275cmp=e.Xpm({type:n,selectors:[["app-create-sliders"]],decls:63,vars:20,consts:[["id","kt_ecommerce_add_category_form",1,"form","d-flex","flex-column","flex-lg-row","fv-plugins-bootstrap5","fv-plugins-framework"],[1,"d-flex","flex-column","gap-7","gap-lg-10","w-100","w-lg-300px","mb-7","me-lg-10"],[1,"card","card-flush","py-4"],[1,"card-header"],[1,"card-title"],[1,"form-label"],[1,"card-body","text-center","pt-0"],[1,"image-input","image-input-empty","image-input-outline","image-input-placeholder","mb-3",2,"background-image","url('assets/media/svg/files/blank-image.svg')"],[1,"image-input-wrapper","w-125px","h-125px",3,"ngStyle"],["data-kt-image-input-action","change","data-bs-toggle","tooltip","aria-label","Change avatar","data-bs-original-title","Change avatar","data-kt-initialized","1",1,"btn","btn-icon","btn-circle","btn-active-color-primary","w-25px","h-25px","bg-body","shadow-sm"],[1,"ki-duotone","ki-pencil","fs-7"],[1,"path1"],[1,"path2"],["type","file","name","avatar","id","customFile","accept",".png, .jpg, .jpeg",3,"change"],["data-kt-image-input-action","cancel","data-bs-toggle","tooltip","aria-label","Cancel avatar","data-bs-original-title","Cancel avatar","data-kt-initialized","1",1,"btn","btn-icon","btn-circle","btn-active-color-primary","w-25px","h-25px","bg-body","shadow"],[1,"ki-duotone","ki-cross","fs-2"],["data-kt-image-input-action","remove","data-bs-toggle","tooltip","aria-label","Remove avatar","data-bs-original-title","Remove avatar","data-kt-initialized","1",1,"btn","btn-icon","btn-circle","btn-active-color-primary","w-25px","h-25px","bg-body","shadow"],[1,"text-muted","fs-7"],[1,"d-flex","flex-column","flex-row-fluid","gap-7","gap-lg-10"],[1,"card","card-flush"],[1,"card-body","pt-0","d-flex","flex-column","gap-5"],[1,"row","mb-6"],[1,"col-lg-6","fv-row","fv-plugins-icon-container"],[1,"fw-semibold","fs-6","py-2"],["type","text","name","title","placeholder","Por ejemplo: The best note book collection 2024",1,"form-control",3,"ngModel","ngModelChange"],["type","text","name","label","placeholder","Starting at 9900",1,"form-control","form-control-lg","form-control-solid",3,"ngModel","ngModelChange"],["type","text","name","subtitle","placeholder","Starting at 9900",1,"form-control","form-control-lg","form-control-solid",3,"ngModel","ngModelChange"],["type","text","name","link","placeholder","http://dominio.com",1,"form-control","form-control-lg","form-control-solid",3,"ngModel","ngModelChange"],["for","etiqueta_especial",1,"required","fw-bold","fs-6","mb-2"],["type","color","id","color","name","color",1,"form-control",3,"ngModel","ngModelChange"],[1,"d-flex","justify-content-end"],["href","apps/ecommerce/catalog/products.html",1,"btn","btn-light","me-5"],["type","button",1,"btn","btn-primary",3,"disabled","click"],["class","indicator-label",4,"ngIf"],[4,"ngIf"],["class","spinner-border spinner-border-sm align-middle ms-2",4,"ngIf"],[1,"indicator-label"],[1,"spinner-border","spinner-border-sm","align-middle","ms-2"]],template:function(a,i){1&a&&(e.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h2",5),e._uU(6,"Sube tu Imagen: "),e.qZA()()(),e.TgZ(7,"div",6)(8,"div",7),e._UZ(9,"div",8),e.TgZ(10,"label",9)(11,"i",10),e._UZ(12,"span",11)(13,"span",12),e.qZA(),e.TgZ(14,"input",13),e.NdJ("change",function(l){return i.processImage(l)}),e.qZA()(),e.TgZ(15,"span",14)(16,"i",15),e._UZ(17,"span",11)(18,"span",12),e.qZA()(),e.TgZ(19,"span",16)(20,"i",15),e._UZ(21,"span",11)(22,"span",12),e.qZA()()(),e.TgZ(23,"div",17),e._uU(24," Se le permite imagenes de tipo. *.png, *.jpg y *.jpeg "),e.qZA()()()(),e.TgZ(25,"div",18)(26,"div",19)(27,"div",20)(28,"div",21)(29,"div",22)(30,"label",23),e._uU(31,"Titulo: (*)"),e.qZA(),e.TgZ(32,"input",24),e.NdJ("ngModelChange",function(l){return i.title=l}),e.qZA(),e.TgZ(33,"div",17),e._uU(34,"El nombre debe ser \xfanico."),e.qZA()(),e.TgZ(35,"div",22)(36,"label",23),e._uU(37,"Label : (Opcional)"),e.qZA(),e.TgZ(38,"input",25),e.NdJ("ngModelChange",function(l){return i.label=l}),e.qZA()()(),e.TgZ(39,"div",21)(40,"div",22)(41,"label",23),e._uU(42,"Subtitulo : (*)"),e.qZA(),e.TgZ(43,"input",26),e.NdJ("ngModelChange",function(l){return i.subtitle=l}),e.qZA()(),e.TgZ(44,"div",22)(45,"label",23),e._uU(46,"Link (Opcional)"),e.qZA(),e.TgZ(47,"input",27),e.NdJ("ngModelChange",function(l){return i.link=l}),e.qZA()()(),e.TgZ(48,"div",22)(49,"label",28),e._uU(50,"Color: "),e.qZA(),e.TgZ(51,"input",29),e.NdJ("ngModelChange",function(l){return i.color=l}),e.qZA()()()(),e.TgZ(52,"div",30)(53,"a",31),e._uU(54,"Cancelar"),e.qZA(),e.TgZ(55,"button",32),e.NdJ("click",function(){return i.save()}),e.ALo(56,"async"),e.YNc(57,T,2,0,"span",33),e.ALo(58,"async"),e.YNc(59,x,2,0,"span",34),e.ALo(60,"async"),e.YNc(61,y,1,0,"span",35),e.ALo(62,"async"),e.qZA()()()()),2&a&&(e.xp6(9),e.Q6J("ngStyle",e.VKq(18,C,"url("+i.image_prev+")")),e.xp6(23),e.Q6J("ngModel",i.title),e.xp6(6),e.Q6J("ngModel",i.label),e.xp6(5),e.Q6J("ngModel",i.subtitle),e.xp6(4),e.Q6J("ngModel",i.link),e.xp6(4),e.Q6J("ngModel",i.color),e.xp6(4),e.Q6J("disabled",e.lcZ(56,10,i.isLoading$)),e.xp6(2),e.Q6J("ngIf",!e.lcZ(58,12,i.isLoading$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(60,14,i.isLoading$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(62,16,i.isLoading$)))},dependencies:[d.O5,d.PC,s._Y,s.Fj,s.JJ,s.JL,s.On,s.F,d.Ov]})}return n})();var k=r(3519),w=r.n(k),b=r(1274);function L(n,c){1&n&&(e.TgZ(0,"tr")(1,"td",53)(2,"div",54)(3,"span",55),e._uU(4,"Loading..."),e.qZA()()()())}function U(n,c){if(1&n&&(e.TgZ(0,"div",72),e._UZ(1,"img",73),e.qZA()),2&n){const t=e.oxw(2).$implicit;e.xp6(1),e.Q6J("src",t.imagen,e.LSH)}}function q(n,c){1&n&&(e.TgZ(0,"td",74)(1,"div",75),e._uU(2,"Activo"),e.qZA()())}function M(n,c){1&n&&(e.TgZ(0,"td",74)(1,"div",76),e._uU(2,"Inactivo"),e.qZA()())}function J(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"tr",57)(1,"td",58)(2,"div",59),e.YNc(3,U,2,1,"div",60),e.qZA(),e.TgZ(4,"div",61)(5,"span",62),e._uU(6),e.qZA()()(),e.TgZ(7,"td")(8,"span"),e._uU(9),e.qZA()(),e.TgZ(10,"td")(11,"span"),e._uU(12),e.qZA()(),e.YNc(13,q,3,0,"td",63),e.YNc(14,M,3,0,"td",63),e.TgZ(15,"td",64)(16,"div",29)(17,"a",65)(18,"i",66),e._UZ(19,"span",5)(20,"span",6),e.qZA()(),e.TgZ(21,"button",67),e.NdJ("click",function(){e.CHM(t);const i=e.oxw().$implicit,o=e.oxw();return e.KtG(o.deleteSlider(i))}),e.TgZ(22,"i",68),e._UZ(23,"span",5)(24,"span",6)(25,"span",69)(26,"span",70)(27,"span",71),e.qZA()()()()()}if(2&n){const t=e.oxw().$implicit;e.xp6(3),e.Q6J("ngIf",t.imagen),e.xp6(3),e.Oqu(t.title),e.xp6(3),e.hij(" ",t.label," "),e.xp6(3),e.hij(" ",t.subtitle," "),e.xp6(1),e.Q6J("ngIf",1==t.state),e.xp6(1),e.Q6J("ngIf",2==t.state),e.xp6(3),e.Q6J("routerLink","/sliders/list/edit/"+t.id)}}function j(n,c){if(1&n&&(e.ynx(0),e.YNc(1,J,28,7,"tr",56),e.ALo(2,"async"),e.BQk()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",!e.lcZ(2,1,t.isLoading))}}let I=(()=>{class n{sliderService;modalService;toastr;sliders=[];search="";totalPages=0;currentPage=1;isLoading=null;constructor(t,a,i){this.sliderService=t,this.modalService=a,this.toastr=i}ngOnInit(){this.listSliders(),this.isLoading=this.sliderService.isLoading$}listSliders(t=1){this.sliderService.listSliders(t,this.search).subscribe(a=>{console.log(a),this.sliders=a.sliders,this.totalPages=a.total,this.currentPage=t})}loadPage(t){console.log(t),this.listSliders(t)}deleteSlider(t){w().fire({title:"\xbfEst\xe1s seguro?",text:"\xa1No podr\xe1s revertir esto!",icon:"warning",showCancelButton:!0,confirmButtonText:"S\xed, eliminarlo!",cancelButtonText:"Cancelar",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger"}}).then(a=>{a.isConfirmed&&this.sliderService.deleteSlider(t.id).subscribe(i=>{let o=this.sliders.findIndex(l=>l.id==t.id);this.sliders.splice(o,1),this.toastr.success("Categoria eliminado satisfactoriamente","Eliminado")})})}searchTo(){this.listSliders()}static \u0275fac=function(a){return new(a||n)(e.Y36(h),e.Y36(b.FF),e.Y36(f._W))};static \u0275cmp=e.Xpm({type:n,selectors:[["app-list-sliders"]],decls:79,vars:10,consts:[[1,"card"],[1,"card-header","border-0","pt-6"],[1,"card-title"],[1,"d-flex","align-items-center","position-relative","my-1"],[1,"ki-duotone","ki-magnifier","fs-3","position-absolute","ms-5"],[1,"path1"],[1,"path2"],["type","text","placeholder","Buscar Slider",1,"form-control","form-control-solid","w-250px","ps-13",3,"ngModel","keyup.enter","ngModelChange"],[1,"card-toolbar"],["data-kt-user-table-toolbar","base",1,"d-flex","justify-content-end"],["type","button","data-kt-menu-trigger","click","data-kt-menu-placement","bottom-end",1,"btn","btn-light-primary","me-3"],[1,"ki-duotone","ki-filter","fs-2"],["data-kt-menu","true",1,"menu","menu-sub","menu-sub-dropdown","w-300px","w-md-325px"],[1,"px-7","py-5"],[1,"fs-5","text-gray-900","fw-bold"],[1,"separator","border-gray-200"],["data-kt-user-table-filter","form",1,"px-7","py-5"],[1,"mb-10"],[1,"form-label","fs-6","fw-semibold"],["data-kt-select2","true","data-placeholder","Select option","data-allow-clear","true","data-kt-user-table-filter","role","data-hide-search","true","data-select2-id","select2-data-9-nrhl","tabindex","-1","aria-hidden","true","data-kt-initialized","1",1,"form-select","form-select-solid","fw-bold","select2-hidden-accessible"],["data-select2-id","select2-data-11-ez5p"],["value","Administrator"],["value","Analyst"],["value","Developer"],["value","Support"],["value","Trial"],["data-kt-select2","true","data-placeholder","Select option","data-allow-clear","true","data-kt-user-table-filter","two-step","data-hide-search","true","data-select2-id","select2-data-12-35ai","tabindex","-1","aria-hidden","true","data-kt-initialized","1",1,"form-select","form-select-solid","fw-bold","select2-hidden-accessible"],["data-select2-id","select2-data-14-46nm"],["value","Enabled"],[1,"d-flex","justify-content-end"],["type","reset","data-kt-menu-dismiss","true","data-kt-user-table-filter","reset",1,"btn","btn-light","btn-active-light-primary","fw-semibold","me-2","px-6"],["type","submit","data-kt-menu-dismiss","true","data-kt-user-table-filter","filter",1,"btn","btn-primary","fw-semibold","px-6"],["routerLink","/sliders/register","type","button","data-bs-toggle","modal","data-bs-target","#kt_modal_add_user",1,"btn","btn-primary"],[1,"ki-duotone","ki-plus","fs-2"],["data-kt-user-table-toolbar","selected",1,"d-flex","justify-content-end","align-items-center","d-none"],[1,"fw-bold","me-5"],["data-kt-user-table-select","selected_count",1,"me-2"],["type","button","data-kt-user-table-select","delete_selected",1,"btn","btn-danger"],[1,"card-body","py-4"],["id","kt_table_users_wrapper",1,"dataTables_wrapper","dt-bootstrap4","no-footer"],[1,"table-responsive"],["id","kt_table_users",1,"table","align-middle","table-row-dashed","fs-6","gy-5","dataTable","no-footer"],[1,"text-start","text-muted","fw-bold","fs-7","text-uppercase","gs-0"],["tabindex","0","aria-controls","kt_table_users","rowspan","1","colspan","1","aria-label","User: activate to sort column ascending",1,"min-w-125px","sorting"],["tabindex","0","aria-controls","kt_table_users","rowspan","1","colspan","1","aria-label","Joined Date: activate to sort column ascending",1,"min-w-125px","sorting"],["tabindex","0","aria-controls","kt_table_users","rowspan","1","colspan","1","aria-label","Role: activate to sort column ascending",1,"min-w-125px","sorting"],["tabindex","0","aria-controls","kt_table_users","rowspan","1","colspan","1","aria-label","Last login: activate to sort column descending","aria-sort","ascending",1,"min-w-125px","sorting","sorting_asc"],["rowspan","1","colspan","1","aria-label","Actions",1,"text-end","min-w-100px","sorting_disabled"],[1,"text-gray-600","fw-semibold"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"row"],[3,"collectionSize","page","pageSize","rotate","boundaryLinks","pageChange"],["colspan","8",1,"text-center","py-5"],["role","status",1,"spinner-border","text-primary"],[1,"visually-hidden"],["class","odd",4,"ngIf"],[1,"odd"],[1,"d-flex","align-items-center"],[1,"symbol","symbol-circle","symbol-50px","overflow-hidden","me-3"],["class","symbol-label",4,"ngIf"],[1,"d-flex","flex-column"],[1,"text-gray-800","mb-1"],["data-order","2024-04-18T11:00:30-05:00","class","sorting_1",4,"ngIf"],[1,"text-end"],[1,"btn","btn-icon","btn-bg-light","btn-active-color-primary","btn-sm","me-1",3,"routerLink"],[1,"ki-duotone","ki-pencil","fs-2"],[1,"btn","btn-icon","btn-bg-light","btn-active-color-primary","btn-sm",3,"click"],[1,"ki-duotone","ki-trash","fs-2"],[1,"path3"],[1,"path4"],[1,"path5"],[1,"symbol-label"],["alt","Imagen",1,"w-100",3,"src"],["data-order","2024-04-18T11:00:30-05:00",1,"sorting_1"],[1,"badge","badge-primary","fw-bold"],[1,"badge","badge-danger","fw-bold"]],template:function(a,i){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"i",4),e._UZ(5,"span",5)(6,"span",6),e.qZA(),e.TgZ(7,"input",7),e.NdJ("keyup.enter",function(){return i.searchTo()})("ngModelChange",function(l){return i.search=l}),e.qZA()()(),e.TgZ(8,"div",8)(9,"div",9)(10,"button",10)(11,"i",11),e._UZ(12,"span",5)(13,"span",6),e.qZA(),e._uU(14,"Filtro "),e.qZA(),e.TgZ(15,"div",12)(16,"div",13)(17,"div",14),e._uU(18,"Opciones"),e.qZA()(),e._UZ(19,"div",15),e.TgZ(20,"div",16)(21,"div",17)(22,"label",18),e._uU(23,"Estado:"),e.qZA(),e.TgZ(24,"select",19),e._UZ(25,"option",20),e.TgZ(26,"option",21),e._uU(27,"Administrator"),e.qZA(),e.TgZ(28,"option",22),e._uU(29,"Analyst"),e.qZA(),e.TgZ(30,"option",23),e._uU(31,"Developer"),e.qZA(),e.TgZ(32,"option",24),e._uU(33,"Support"),e.qZA(),e.TgZ(34,"option",25),e._uU(35,"Trial"),e.qZA()()(),e.TgZ(36,"div",17)(37,"label",18),e._uU(38,"Two Step Verification:"),e.qZA(),e.TgZ(39,"select",26),e._UZ(40,"option",27),e.TgZ(41,"option",28),e._uU(42,"Enabled"),e.qZA()()(),e.TgZ(43,"div",29)(44,"button",30),e._uU(45," Reset "),e.qZA(),e.TgZ(46,"button",31),e._uU(47," Apply "),e.qZA()()()(),e.TgZ(48,"a",32),e._UZ(49,"i",33),e._uU(50,"Agregar Slider"),e.qZA()(),e.TgZ(51,"div",34)(52,"div",35),e._UZ(53,"span",36),e._uU(54,"Selected "),e.qZA(),e.TgZ(55,"button",37),e._uU(56," Delete Selected "),e.qZA()()()(),e.TgZ(57,"div",38)(58,"div",39)(59,"div",40)(60,"table",41)(61,"thead")(62,"tr",42)(63,"th",43),e._uU(64," Titulo "),e.qZA(),e.TgZ(65,"th",44),e._uU(66," Label "),e.qZA(),e.TgZ(67,"th",45),e._uU(68," Subtitulo "),e.qZA(),e.TgZ(69,"th",46),e._uU(70," Estado "),e.qZA(),e.TgZ(71,"th",47),e._uU(72," Acciones "),e.qZA()()(),e.TgZ(73,"tbody",48),e.YNc(74,L,5,0,"tr",49),e.ALo(75,"async"),e.YNc(76,j,3,3,"ng-container",50),e.qZA()()(),e.TgZ(77,"div",51)(78,"ngb-pagination",52),e.NdJ("pageChange",function(l){return i.currentPage=l})("pageChange",function(l){return i.loadPage(l)}),e.qZA()()()()()),2&a&&(e.xp6(7),e.Q6J("ngModel",i.search),e.xp6(67),e.Q6J("ngIf",e.lcZ(75,8,i.isLoading)),e.xp6(2),e.Q6J("ngForOf",i.sliders),e.xp6(2),e.Q6J("collectionSize",i.totalPages)("page",i.currentPage)("pageSize",2)("rotate",!0)("boundaryLinks",!0))},dependencies:[d.sg,d.O5,g.rH,s.YN,s.Kr,s.Fj,s.JJ,s.On,b.N9,d.Ov]})}return n})();function N(n,c){1&n&&(e.TgZ(0,"span",39),e._uU(1,"Actualizar"),e.qZA())}const F=function(n){return{"background-image":n}},E=[{path:"",component:v,children:[{path:"register",component:A},{path:"list/edit/:id",component:(()=>{class n{sliderService;toastr;activedRoute;title="";label="";subtitle="";link="";color="";state=1;image_prev="";file_image=null;isLoading$;slider_id="";constructor(t,a,i){this.sliderService=t,this.toastr=a,this.activedRoute=i}ngOnInit(){this.isLoading$=this.sliderService.isLoading$,this.activedRoute.params.subscribe(t=>{this.slider_id=t.id}),this.sliderService.showSlider(this.slider_id).subscribe(t=>{console.log(t),this.title=t.slider.title,this.label=t.slider.label,this.subtitle=t.slider.subtitle,this.link=t.slider.link,this.color=t.slider.color,this.state=t.slider.state,this.image_prev=t.slider.image})}processImage(t){if(!t.target.files[0].type.startsWith("image/"))return void this.toastr.error("Solamente se aceptan im\xe1genes","Error de validaci\xf3n");this.file_image=t.target.files[0];let i=new FileReader;i.readAsDataURL(this.file_image),i.onloadend=()=>this.image_prev=i.result,this.sliderService.isLoadingSubject.next(!0),setTimeout(()=>{this.sliderService.isLoadingSubject.next(!1)},50)}isLoadingView(){this.sliderService.isLoadingSubject.next(!0),setTimeout(()=>{this.sliderService.isLoadingSubject.next(!1)},50)}save(){if(!this.title||!this.subtitle)return void this.toastr.error("Ingrese todos los datos correctamente","Validaci\xf3n");let t=new FormData;t.append("title",this.title),this.label&&t.append("label",this.label),t.append("subtitle",this.subtitle+""),this.file_image&&t.append("image",this.file_image),this.link&&t.append("link",this.link),this.color&&t.append("color",this.color),this.sliderService.updateSliders(this.slider_id,t).subscribe(a=>{console.log(a),this.toastr.success("Exito","El Slider se edit\xf3 correctamente")})}static \u0275fac=function(a){return new(a||n)(e.Y36(h),e.Y36(f._W),e.Y36(g.gz))};static \u0275cmp=e.Xpm({type:n,selectors:[["app-edit-sliders"]],decls:68,vars:15,consts:[["id","kt_ecommerce_add_category_form",1,"form","d-flex","flex-column","flex-lg-row","fv-plugins-bootstrap5","fv-plugins-framework"],[1,"d-flex","flex-column","gap-7","gap-lg-10","w-100","w-lg-300px","mb-7","me-lg-10"],[1,"card","card-flush","py-4"],[1,"card-header"],[1,"card-title"],[1,"form-label"],[1,"card-body","text-center","pt-0"],[1,"image-input","image-input-empty","image-input-outline","image-input-placeholder","mb-3",2,"background-image","url('assets/media/svg/files/blank-image.svg')"],[1,"image-input-wrapper","w-125px","h-125px",3,"ngStyle"],["data-kt-image-input-action","change","data-bs-toggle","tooltip","aria-label","Change avatar","data-bs-original-title","Change avatar","data-kt-initialized","1",1,"btn","btn-icon","btn-circle","btn-active-color-primary","w-25px","h-25px","bg-body","shadow-sm"],[1,"ki-duotone","ki-pencil","fs-7"],[1,"path1"],[1,"path2"],["type","file","name","avatar","id","customFile","accept",".png, .jpg, .jpeg",3,"change"],["data-kt-image-input-action","cancel","data-bs-toggle","tooltip","aria-label","Cancel avatar","data-bs-original-title","Cancel avatar","data-kt-initialized","1",1,"btn","btn-icon","btn-circle","btn-active-color-primary","w-25px","h-25px","bg-body","shadow"],[1,"ki-duotone","ki-cross","fs-2"],["data-kt-image-input-action","remove","data-bs-toggle","tooltip","aria-label","Remove avatar","data-bs-original-title","Remove avatar","data-kt-initialized","1",1,"btn","btn-icon","btn-circle","btn-active-color-primary","w-25px","h-25px","bg-body","shadow"],[1,"text-muted","fs-7"],[1,"d-flex","flex-column","flex-row-fluid","gap-7","gap-lg-10"],[1,"card","card-flush"],[1,"card-body","pt-0","d-flex","flex-column","gap-5"],[1,"col-lg-8","fv-row","fv-plugins-icon-container"],[1,"fw-semibold","fs-6","py-2"],["type","text","name","title","placeholder","Por ejemplo: The best note book collection 2024",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-lg-6","fv-row","fv-plugins-icon-container"],["type","text","name","label","placeholder","Starting at 9900",1,"form-control","form-control-lg","form-control-solid",3,"ngModel","ngModelChange"],["type","text","name","subtitle","placeholder","Starting at 9900",1,"form-control","form-control-lg","form-control-solid",3,"ngModel","ngModelChange"],["type","text","name","link","placeholder","http://dominio.com",1,"form-control","form-control-lg","form-control-solid",3,"ngModel","ngModelChange"],["for","etiqueta_especial",1,"required","fw-bold","fs-6","mb-2"],["type","color","id","color","name","color",1,"form-control",3,"ngModel","ngModelChange"],[1,"required","fw-bold","fs-6","mb-2"],["name","state","placeholder","Selec. Idioma",1,"form-control","form-select-solid","mb-2",3,"ngModel","ngModelChange"],["value","0","selected","","disabled",""],["value","1"],["value","2"],[1,"d-flex","justify-content-end"],["href","apps/ecommerce/catalog/products.html",1,"btn","btn-light","me-5"],["type","button",1,"btn","btn-primary",3,"disabled","click"],["class","indicator-label",4,"ngIf"],[1,"indicator-label"]],template:function(a,i){1&a&&(e.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h2",5),e._uU(6,"Sube tu Imagen: "),e.qZA()()(),e.TgZ(7,"div",6)(8,"div",7),e._UZ(9,"div",8),e.TgZ(10,"label",9)(11,"i",10),e._UZ(12,"span",11)(13,"span",12),e.qZA(),e.TgZ(14,"input",13),e.NdJ("change",function(l){return i.processImage(l)}),e.qZA()(),e.TgZ(15,"span",14)(16,"i",15),e._UZ(17,"span",11)(18,"span",12),e.qZA()(),e.TgZ(19,"span",16)(20,"i",15),e._UZ(21,"span",11)(22,"span",12),e.qZA()()(),e.TgZ(23,"div",17),e._uU(24," Se le permite imagenes de tipo. *.png, *.jpg y *.jpeg "),e.qZA()()()(),e.TgZ(25,"div",18)(26,"div",19)(27,"div",20)(28,"div",21)(29,"label",22),e._uU(30,"Titulo: (*)"),e.qZA(),e.TgZ(31,"input",23),e.NdJ("ngModelChange",function(l){return i.title=l}),e.qZA(),e.TgZ(32,"div",17),e._uU(33,"El nombre debe ser \xfanico."),e.qZA()(),e.TgZ(34,"div",24)(35,"label",22),e._uU(36,"Label : (Opcional)"),e.qZA(),e.TgZ(37,"input",25),e.NdJ("ngModelChange",function(l){return i.label=l}),e.qZA()(),e.TgZ(38,"div",24)(39,"label",22),e._uU(40,"Subtitulo : (*)"),e.qZA(),e.TgZ(41,"input",26),e.NdJ("ngModelChange",function(l){return i.subtitle=l}),e.qZA()(),e.TgZ(42,"div",24)(43,"label",22),e._uU(44,"Link (Opcional)"),e.qZA(),e.TgZ(45,"input",27),e.NdJ("ngModelChange",function(l){return i.link=l}),e.qZA()(),e.TgZ(46,"div",24)(47,"label",28),e._uU(48,"Color: "),e.qZA(),e.TgZ(49,"input",29),e.NdJ("ngModelChange",function(l){return i.color=l}),e.qZA()()(),e.TgZ(50,"div",20)(51,"div")(52,"label",30),e._uU(53,"Estado"),e.qZA(),e.TgZ(54,"select",31),e.NdJ("ngModelChange",function(l){return i.state=l}),e.TgZ(55,"option",32),e._uU(56,"Seleccione un estado"),e.qZA(),e.TgZ(57,"option",33),e._uU(58,"Activo"),e.qZA(),e.TgZ(59,"option",34),e._uU(60,"Inactivo"),e.qZA()()()()(),e.TgZ(61,"div",35)(62,"a",36),e._uU(63,"Cancelar"),e.qZA(),e.TgZ(64,"button",37),e.NdJ("click",function(){return i.save()}),e.ALo(65,"async"),e.YNc(66,N,2,0,"span",38),e.ALo(67,"async"),e.qZA()()()()),2&a&&(e.xp6(9),e.Q6J("ngStyle",e.VKq(13,F,"url("+i.image_prev+")")),e.xp6(22),e.Q6J("ngModel",i.title),e.xp6(6),e.Q6J("ngModel",i.label),e.xp6(4),e.Q6J("ngModel",i.subtitle),e.xp6(4),e.Q6J("ngModel",i.link),e.xp6(4),e.Q6J("ngModel",i.color),e.xp6(5),e.Q6J("ngModel",i.state),e.xp6(10),e.Q6J("disabled",e.lcZ(65,9,i.isLoading$)),e.xp6(2),e.Q6J("ngIf",!e.lcZ(67,11,i.isLoading$)))},dependencies:[d.O5,d.PC,s._Y,s.YN,s.Kr,s.Fj,s.EJ,s.JJ,s.JL,s.On,s.F,d.Ov]})}return n})()},{path:"list",component:I}]}];let Q=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=e.oAB({type:n});static \u0275inj=e.cJS({imports:[g.Bz.forChild(E),g.Bz]})}return n})();var z=r(53);let Y=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=e.oAB({type:n});static \u0275inj=e.cJS({imports:[d.ez,Q,p.JF,s.u5,b.IJ,s.UX,z.vi,b.bz,b.jF]})}return n})()}}]);