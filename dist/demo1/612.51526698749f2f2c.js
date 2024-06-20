"use strict";(self.webpackChunkdemo1=self.webpackChunkdemo1||[]).push([[612],{9612:(z,f,d)=>{d.r(f),d.d(f,{AttributesModule:()=>$});var l=d(6814),h=d(7304),t=d(5879);let A=(()=>{class r{static \u0275fac=function(e){return new(e||r)};static \u0275cmp=t.Xpm({type:r,selectors:[["app-attributes"]],decls:1,vars:0,template:function(e,n){1&e&&t._UZ(0,"router-outlet")},dependencies:[h.lC]})}return r})();var p=d(9862),Z=d(5619),b=d(4716),m=d(1904),v=d(3595);let g=(()=>{class r{http;authservice;isLoading$;isLoadingSubject;constructor(i,e){this.http=i,this.authservice=e,this.isLoadingSubject=new Z.X(!1),this.isLoading$=this.isLoadingSubject.asObservable()}listAttributes(i=1,e){this.isLoadingSubject.next(!0);let n=new p.WM({Authorization:"Bearer"+this.authservice.token});return this.http.get(m.VU+"/admin/attributes?page="+i+"&search="+e,{headers:n}).pipe((0,b.x)(()=>this.isLoadingSubject.next(!1)))}createAttributes(i){this.isLoadingSubject.next(!0);let e=new p.WM({Authorization:"Bearer"+this.authservice.token});return this.http.post(m.VU+"/admin/attributes",i,{headers:e}).pipe((0,b.x)(()=>this.isLoadingSubject.next(!1)))}updateAttributes(i,e){this.isLoadingSubject.next(!0);let n=new p.WM({Authorization:"Bearer"+this.authservice.token});return this.http.post(m.VU+"/admin/attributes/edit/"+i,e,{headers:n}).pipe((0,b.x)(()=>this.isLoadingSubject.next(!1)))}deleteAttributes(i){this.isLoadingSubject.next(!0);let e=new p.WM({Authorization:"Bearer"+this.authservice.token});return this.http.delete(m.VU+"/admin/attributes/"+i,{headers:e}).pipe((0,b.x)(()=>this.isLoadingSubject.next(!1)))}createProperties(i){this.isLoadingSubject.next(!0);let e=new p.WM({Authorization:"Bearer"+this.authservice.token});return this.http.post(m.VU+"/admin/properties",i,{headers:e}).pipe((0,b.x)(()=>this.isLoadingSubject.next(!1)))}deletePropertie(i){this.isLoadingSubject.next(!0);let e=new p.WM({Authorization:"Bearer"+this.authservice.token});return this.http.delete(m.VU+"/admin/properties/"+i,{headers:e}).pipe((0,b.x)(()=>this.isLoadingSubject.next(!1)))}static \u0275fac=function(e){return new(e||r)(t.LFG(p.eN),t.LFG(v.e8))};static \u0275prov=t.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var _=d(2425),u=d(1274),a=d(6223);function T(r,c){1&r&&t._UZ(0,"span",15)}let k=(()=>{class r{attributeService;toastr;modal;attribute;AttributeD=new t.vpe;isLoading;constructor(i,e,n){this.attributeService=i,this.toastr=e,this.modal=n}ngOnInit(){this.isLoading=this.attributeService.isLoading$}delete(){this.attributeService.deleteAttributes(this.attribute.id).subscribe(i=>{this.AttributeD.emit({message:200}),this.modal.close()})}static \u0275fac=function(e){return new(e||r)(t.Y36(g),t.Y36(_._W),t.Y36(u.Kz))};static \u0275cmp=t.Xpm({type:r,selectors:[["app-delete-attribute"]],inputs:{attribute:"attribute"},outputs:{AttributeD:"AttributeD"},decls:21,vars:4,consts:[[1,"modal-content"],["id","kt_modal_add_user_header",1,"modal-header"],[1,"fw-bolder"],["data-kt-users-modal-action","close",1,"btn","btn-icon","btn-sm","btn-active-icon-primary",3,"click"],[1,"svg-icon","svg-icon-1"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none"],["opacity","0.5","x","6","y","17.3137","width","16","height","2","rx","1","transform","rotate(-45 6 17.3137)","fill","currentColor"],["x","7.41422","y","6","width","16","height","2","rx","1","transform","rotate(45 7.41422 6)","fill","currentColor"],[1,"modal-body","scroll-y","mx-5","mx-xl-15","my-7"],["id","kt_modal_add_user_form","action","#",1,"form"],[1,"text-center","pt-15"],["type","reset",1,"btn","btn-light","me-3",3,"click"],["type","button","data-kt-users-modal-action","submit",1,"btn","btn-danger",3,"click"],[1,"indicator-label"],["class","spinner-border spinner-border-sm align-middle ms-2",4,"ngIf"],[1,"spinner-border","spinner-border-sm","align-middle","ms-2"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h2",2),t._uU(3),t.qZA(),t.TgZ(4,"div",3),t.NdJ("click",function(){return n.modal.dismiss()}),t.TgZ(5,"span",4),t.O4$(),t.TgZ(6,"svg",5),t._UZ(7,"rect",6)(8,"rect",7),t.qZA()()()(),t.kcU(),t.TgZ(9,"div",8)(10,"form",9)(11,"p"),t._uU(12," \xbfESTAS SEGURO DE ELIMINAR ESTE ATRIBUTO? "),t.qZA(),t.TgZ(13,"div",10)(14,"button",11),t.NdJ("click",function(){return n.modal.dismiss()}),t._uU(15,"Cerrar"),t.qZA(),t.TgZ(16,"button",12),t.NdJ("click",function(){return n.delete()}),t.TgZ(17,"span",13),t._uU(18,"ELIMINAR"),t.qZA(),t.YNc(19,T,1,0,"span",14),t.ALo(20,"async"),t.qZA()()()()()),2&e&&(t.xp6(3),t.hij('Eliminar Atributo: "',n.attribute.name,'" '),t.xp6(16),t.Q6J("ngIf",t.lcZ(20,2,n.isLoading)))},dependencies:[l.O5,a._Y,a.JL,a.F,l.Ov]})}return r})();function x(r,c){1&r&&t._UZ(0,"span",24)}let C=(()=>{class r{attributeService;modal;toastr;AttributeC=new t.vpe;name="";type_attribute=1;isLoading$;constructor(i,e,n){this.attributeService=i,this.modal=e,this.toastr=n}ngOnInit(){this.isLoading$=this.attributeService.isLoading$}store(){this.name&&this.type_attribute?this.attributeService.createAttributes({name:this.name,type_attribute:this.type_attribute,status:1}).subscribe(e=>{console.log(e),403!=e.message?(this.AttributeC.emit(e.attribute),this.toastr.success("Exitos","EL ATRIBUTO SE HA REGISTRADO CORRECTAMENTE"),this.modal.close()):this.toastr.error("Validaci\xf3n","EL NOMBRE DEL ATRIBUTO YA EXISTE EN LA BASE DE DATOS")}):this.toastr.error("Validaci\xf3n","Todos los campos son necesarios")}static \u0275fac=function(e){return new(e||r)(t.Y36(g),t.Y36(u.Kz),t.Y36(_._W))};static \u0275cmp=t.Xpm({type:r,selectors:[["app-create-attribute"]],outputs:{AttributeC:"AttributeC"},decls:36,vars:5,consts:[[1,"modal-content"],["id","kt_modal_add_user_header",1,"modal-header"],[1,"fw-bolder"],["data-kt-users-modal-action","close",1,"btn","btn-icon","btn-sm","btn-active-icon-primary",3,"click"],[1,"svg-icon","svg-icon-1"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none"],["opacity","0.5","x","6","y","17.3137","width","16","height","2","rx","1","transform","rotate(-45 6 17.3137)","fill","currentColor"],["x","7.41422","y","6","width","16","height","2","rx","1","transform","rotate(45 7.41422 6)","fill","currentColor"],[1,"modal-body","scroll-y","mx-5","my-7"],["id","kt_modal_add_user_form","action","#",1,"form"],["id","kt_modal_add_user_scroll","data-kt-scroll","true","data-kt-scroll-activate","{default: false, lg: true}","data-kt-scroll-max-height","auto","data-kt-scroll-dependencies","#kt_modal_add_user_header","data-kt-scroll-wrappers","#kt_modal_add_user_scroll","data-kt-scroll-offset","300px",1,"d-flex","flex-column","scroll-y","me-n7","pe-7"],[1,"fv-row","mb-7"],[1,"required","fw-bold","fs-6","mb-2"],["type","text","name","name","placeholder","Atributo",1,"form-control","form-control-solid","mb-3","mb-lg-0",3,"ngModel","ngModelChange"],["name","XXXXX","placeholder","Select",1,"form-control","form-select-solid","fw-bolder",3,"ngModel","ngModelChange"],["value","1"],["value","2"],["value","3"],["value","4"],[1,"text-center","pt-15"],["type","reset",1,"btn","btn-light","me-3",3,"click"],["type","button","data-kt-users-modal-action","submit",1,"btn","btn-primary",3,"click"],[1,"indicator-label"],["class","spinner-border spinner-border-sm align-middle ms-2",4,"ngIf"],[1,"spinner-border","spinner-border-sm","align-middle","ms-2"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h2",2),t._uU(3,"Agregar Atributo"),t.qZA(),t.TgZ(4,"div",3),t.NdJ("click",function(){return n.modal.dismiss()}),t.TgZ(5,"span",4),t.O4$(),t.TgZ(6,"svg",5),t._UZ(7,"rect",6)(8,"rect",7),t.qZA()()()(),t.kcU(),t.TgZ(9,"div",8)(10,"form",9)(11,"div",10)(12,"div",11)(13,"label",12),t._uU(14,"Nombre del atributo"),t.qZA(),t.TgZ(15,"input",13),t.NdJ("ngModelChange",function(s){return n.name=s}),t.qZA()()(),t.TgZ(16,"div",11)(17,"label",12),t._uU(18,"Selec. un Tipo"),t.qZA(),t.TgZ(19,"select",14),t.NdJ("ngModelChange",function(s){return n.type_attribute=s}),t.TgZ(20,"option",15),t._uU(21,"Texto"),t.qZA(),t.TgZ(22,"option",16),t._uU(23,"Numero"),t.qZA(),t.TgZ(24,"option",17),t._uU(25,"Seleccionable"),t.qZA(),t.TgZ(26,"option",18),t._uU(27,"Seleccionable M\xfaltiple"),t.qZA()()(),t.TgZ(28,"div",19)(29,"button",20),t.NdJ("click",function(){return n.modal.dismiss()}),t._uU(30," Cerrar "),t.qZA(),t.TgZ(31,"button",21),t.NdJ("click",function(){return n.store()}),t.TgZ(32,"span",22),t._uU(33,"Registrar"),t.qZA(),t.YNc(34,x,1,0,"span",23),t.ALo(35,"async"),t.qZA()()()()()),2&e&&(t.xp6(15),t.Q6J("ngModel",n.name),t.xp6(4),t.Q6J("ngModel",n.type_attribute),t.xp6(15),t.Q6J("ngIf",t.lcZ(35,3,n.isLoading$)))},dependencies:[l.O5,a._Y,a.YN,a.Kr,a.Fj,a.EJ,a.JJ,a.JL,a.On,a.F,l.Ov]})}return r})();function y(r,c){1&r&&t._UZ(0,"span",24)}let w=(()=>{class r{attributeService;modal;toastr;AttributeE=new t.vpe;attribute;name="";type_attribute=1;isLoading$;constructor(i,e,n){this.attributeService=i,this.modal=e,this.toastr=n}ngOnInit(){this.isLoading$=this.attributeService.isLoading$,this.name=this.attribute.name,this.type_attribute=this.attribute.type_attribute}store(){this.name&&this.type_attribute?this.attributeService.updateAttributes(this.attribute.id,{name:this.name,type_attribute:this.type_attribute,status:1}).subscribe(e=>{console.log(e),403!=e.message?(this.AttributeE.emit(e.attribute),this.toastr.success("Exitos","EL ATRIBUTO SE HA EDITADO CORRECTAMENTE"),this.modal.close()):this.toastr.error("Validaci\xf3n","EL NOMBRE DEL ATRIBUTO YA EXISTE EN LA BASE DE DATOS")}):this.toastr.error("Validaci\xf3n","Todos los campos son necesarios")}static \u0275fac=function(e){return new(e||r)(t.Y36(g),t.Y36(u.Kz),t.Y36(_._W))};static \u0275cmp=t.Xpm({type:r,selectors:[["app-edit-attribute"]],inputs:{attribute:"attribute"},outputs:{AttributeE:"AttributeE"},decls:36,vars:6,consts:[[1,"modal-content"],["id","kt_modal_add_user_header",1,"modal-header"],[1,"fw-bolder"],["data-kt-users-modal-action","close",1,"btn","btn-icon","btn-sm","btn-active-icon-primary",3,"click"],[1,"svg-icon","svg-icon-1"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none"],["opacity","0.5","x","6","y","17.3137","width","16","height","2","rx","1","transform","rotate(-45 6 17.3137)","fill","currentColor"],["x","7.41422","y","6","width","16","height","2","rx","1","transform","rotate(45 7.41422 6)","fill","currentColor"],[1,"modal-body","scroll-y","mx-5","my-7"],["id","kt_modal_add_user_form","action","#",1,"form"],["id","kt_modal_add_user_scroll","data-kt-scroll","true","data-kt-scroll-activate","{default: false, lg: true}","data-kt-scroll-max-height","auto","data-kt-scroll-dependencies","#kt_modal_add_user_header","data-kt-scroll-wrappers","#kt_modal_add_user_scroll","data-kt-scroll-offset","300px",1,"d-flex","flex-column","scroll-y","me-n7","pe-7"],[1,"fv-row","mb-7"],[1,"required","fw-bold","fs-6","mb-2"],["type","text","name","name","placeholder","Atributo",1,"form-control","form-control-solid","mb-3","mb-lg-0",3,"ngModel","ngModelChange"],["name","XXXXX","placeholder","Select",1,"form-control","form-select-solid","fw-bolder",3,"ngModel","ngModelChange"],["value","1"],["value","2"],["value","3"],["value","4"],[1,"text-center","pt-15"],["type","reset",1,"btn","btn-light","me-3",3,"click"],["type","button","data-kt-users-modal-action","submit",1,"btn","btn-primary",3,"click"],[1,"indicator-label"],["class","spinner-border spinner-border-sm align-middle ms-2",4,"ngIf"],[1,"spinner-border","spinner-border-sm","align-middle","ms-2"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h2",2),t._uU(3),t.qZA(),t.TgZ(4,"div",3),t.NdJ("click",function(){return n.modal.dismiss()}),t.TgZ(5,"span",4),t.O4$(),t.TgZ(6,"svg",5),t._UZ(7,"rect",6)(8,"rect",7),t.qZA()()()(),t.kcU(),t.TgZ(9,"div",8)(10,"form",9)(11,"div",10)(12,"div",11)(13,"label",12),t._uU(14,"Nombre del atributo"),t.qZA(),t.TgZ(15,"input",13),t.NdJ("ngModelChange",function(s){return n.name=s}),t.qZA()()(),t.TgZ(16,"div",11)(17,"label",12),t._uU(18,"Selec. un Tipo"),t.qZA(),t.TgZ(19,"select",14),t.NdJ("ngModelChange",function(s){return n.type_attribute=s}),t.TgZ(20,"option",15),t._uU(21,"Texto"),t.qZA(),t.TgZ(22,"option",16),t._uU(23,"Numero"),t.qZA(),t.TgZ(24,"option",17),t._uU(25,"Seleccionable"),t.qZA(),t.TgZ(26,"option",18),t._uU(27,"Seleccionable M\xfaltiple"),t.qZA()()(),t.TgZ(28,"div",19)(29,"button",20),t.NdJ("click",function(){return n.modal.dismiss()}),t._uU(30," Cerrar "),t.qZA(),t.TgZ(31,"button",21),t.NdJ("click",function(){return n.store()}),t.TgZ(32,"span",22),t._uU(33,"Actualizar"),t.qZA(),t.YNc(34,y,1,0,"span",23),t.ALo(35,"async"),t.qZA()()()()()),2&e&&(t.xp6(3),t.hij('Editar Atributo: "',n.attribute.name,'" '),t.xp6(12),t.Q6J("ngModel",n.name),t.xp6(4),t.Q6J("ngModel",n.type_attribute),t.xp6(15),t.Q6J("ngIf",t.lcZ(35,4,n.isLoading$)))},dependencies:[l.O5,a._Y,a.YN,a.Kr,a.Fj,a.EJ,a.JJ,a.JL,a.On,a.F,l.Ov]})}return r})();function U(r,c){1&r&&t._UZ(0,"span",15)}let S=(()=>{class r{attributeService;toastr;modal;propertie;PropertieD=new t.vpe;isLoading;constructor(i,e,n){this.attributeService=i,this.toastr=e,this.modal=n}ngOnInit(){this.isLoading=this.attributeService.isLoading$}delete(){this.attributeService.deletePropertie(this.propertie.id).subscribe(i=>{this.PropertieD.emit({message:200}),this.modal.close()})}static \u0275fac=function(e){return new(e||r)(t.Y36(g),t.Y36(_._W),t.Y36(u.Kz))};static \u0275cmp=t.Xpm({type:r,selectors:[["app-sub-attribute-delete"]],inputs:{propertie:"propertie"},outputs:{PropertieD:"PropertieD"},decls:21,vars:4,consts:[[1,"modal-content"],["id","kt_modal_add_user_header",1,"modal-header"],[1,"fw-bolder"],["data-kt-users-modal-action","close",1,"btn","btn-icon","btn-sm","btn-active-icon-primary",3,"click"],[1,"svg-icon","svg-icon-1"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none"],["opacity","0.5","x","6","y","17.3137","width","16","height","2","rx","1","transform","rotate(-45 6 17.3137)","fill","currentColor"],["x","7.41422","y","6","width","16","height","2","rx","1","transform","rotate(45 7.41422 6)","fill","currentColor"],[1,"modal-body","scroll-y","mx-5","mx-xl-15","my-7"],["id","kt_modal_add_user_form","action","#",1,"form"],[1,"text-center","pt-15"],["type","reset",1,"btn","btn-light","me-3",3,"click"],["type","button","data-kt-users-modal-action","submit",1,"btn","btn-danger",3,"click"],[1,"indicator-label"],["class","spinner-border spinner-border-sm align-middle ms-2",4,"ngIf"],[1,"spinner-border","spinner-border-sm","align-middle","ms-2"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h2",2),t._uU(3),t.qZA(),t.TgZ(4,"div",3),t.NdJ("click",function(){return n.modal.dismiss()}),t.TgZ(5,"span",4),t.O4$(),t.TgZ(6,"svg",5),t._UZ(7,"rect",6)(8,"rect",7),t.qZA()()()(),t.kcU(),t.TgZ(9,"div",8)(10,"form",9)(11,"p"),t._uU(12," \xbfESTAS SEGURO DE ELIMINAR ESTE PROPIEDAD? "),t.qZA(),t.TgZ(13,"div",10)(14,"button",11),t.NdJ("click",function(){return n.modal.dismiss()}),t._uU(15,"Cerrar"),t.qZA(),t.TgZ(16,"button",12),t.NdJ("click",function(){return n.delete()}),t.TgZ(17,"span",13),t._uU(18,"ELIMINAR"),t.qZA(),t.YNc(19,U,1,0,"span",14),t.ALo(20,"async"),t.qZA()()()()()),2&e&&(t.xp6(3),t.hij('Eliminar Propiedad: "',n.propertie.name,'" '),t.xp6(16),t.Q6J("ngIf",t.lcZ(20,2,n.isLoading)))},dependencies:[l.O5,a._Y,a.JL,a.F,l.Ov]})}return r})();function L(r,c){if(1&r){const i=t.EpF();t.TgZ(0,"div",15)(1,"label",37),t._uU(2,"Color: "),t.qZA(),t.TgZ(3,"input",38),t.NdJ("ngModelChange",function(n){t.CHM(i);const o=t.oxw();return t.KtG(o.color=n)}),t.qZA()()}if(2&r){const i=t.oxw();t.xp6(3),t.Q6J("ngModel",i.color)}}function E(r,c){1&r&&t._UZ(0,"span",39)}function q(r,c){if(1&r&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&r){const i=t.oxw().$implicit;t.xp6(1),t.Oqu(i.code)}}function N(r,c){if(1&r){const i=t.EpF();t.ynx(0),t.TgZ(1,"tr",40)(2,"td")(3,"span"),t._uU(4),t.qZA()(),t.TgZ(5,"td"),t.YNc(6,q,2,1,"span",41),t.qZA(),t.TgZ(7,"td",42)(8,"a",43),t.NdJ("click",function(){const o=t.CHM(i).$implicit,s=t.oxw();return t.KtG(s.delete(o))}),t.TgZ(9,"i",44),t._UZ(10,"span",45)(11,"span",46)(12,"span",47)(13,"span",48)(14,"span",49),t.qZA()()()(),t.BQk()}if(2&r){const i=c.$implicit;t.xp6(4),t.Oqu(i.name),t.xp6(2),t.Q6J("ngIf",i.code)}}let J=(()=>{class r{attributeService;modal;toastr;modalService;attribute;properties=[];isLoading$;color;type_action=1;name="";constructor(i,e,n,o){this.attributeService=i,this.modal=e,this.toastr=n,this.modalService=o}ngOnInit(){this.isLoading$=this.attributeService.isLoading$,this.properties=this.attribute.properties}store(){this.name?2!=this.type_action||this.color?this.attributeService.createProperties({name:this.name,code:this.color,attribute_id:this.attribute.id,status:1}).subscribe(e=>{console.log(e),403!=e.message?(this.properties.unshift(e.propertie),this.toastr.success("Exitos","LA PROPIEDAD SE HA REGISTRADO CORRECTAMENTE")):this.toastr.error("Validaci\xf3n","EL NOMBRE DE LA PROPIEDAD YA EXISTE EN LA BASE DE DATOS")}):this.toastr.error("Validaci\xf3n","Necesitas seleccionar un color"):this.toastr.error("Validaci\xf3n","Todos los campos son necesarios")}delete(i){const e=this.modalService.open(S,{centered:!0,size:"md"});e.componentInstance.propertie=i,e.componentInstance.PropertieD.subscribe(n=>{let o=this.properties.findIndex(s=>s.id==i.id);-1!=o&&this.properties.splice(o,1)})}static \u0275fac=function(e){return new(e||r)(t.Y36(g),t.Y36(u.Kz),t.Y36(_._W),t.Y36(u.FF))};static \u0275cmp=t.Xpm({type:r,selectors:[["app-sub-attribute-create"]],inputs:{attribute:"attribute"},decls:51,vars:8,consts:[[1,"modal-content"],["id","kt_modal_add_user_header",1,"modal-header"],[1,"fw-bolder"],["data-kt-users-modal-action","close",1,"btn","btn-icon","btn-sm","btn-active-icon-primary",3,"click"],[1,"svg-icon","svg-icon-1"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none"],["opacity","0.5","x","6","y","17.3137","width","16","height","2","rx","1","transform","rotate(-45 6 17.3137)","fill","currentColor"],["x","7.41422","y","6","width","16","height","2","rx","1","transform","rotate(45 7.41422 6)","fill","currentColor"],[1,"modal-body","scroll-y","mx-5","my-7"],["id","kt_modal_add_user_form","action","#",1,"form"],["id","kt_modal_add_user_scroll","data-kt-scroll","true","data-kt-scroll-activate","{default: false, lg: true}","data-kt-scroll-max-height","auto","data-kt-scroll-dependencies","#kt_modal_add_user_header","data-kt-scroll-wrappers","#kt_modal_add_user_scroll","data-kt-scroll-offset","300px",1,"d-flex","flex-column","scroll-y","me-n7","pe-7"],[1,"fv-row","mb-7"],[1,"required","fw-bold","fs-6","mb-2"],["type","text","name","name","placeholder","Atributo",1,"form-control","form-control-solid","mb-3","mb-lg-0",3,"ngModel","ngModelChange"],["align-items-center","",1,"fv-row","row","mb-7"],[1,"col-lg-6","col-12"],["name","XXXXX","placeholder","Select",1,"form-control","form-select-solid","fw-bolder",3,"ngModel","ngModelChange"],["value","1"],["value","2"],["class","col-lg-6 col-12",4,"ngIf"],[1,"fv-row","row","mb-7"],[1,"col-6"],["type","button","data-kt-users-modal-action","submit",1,"btn","btn-primary",3,"click"],[1,"indicator-label"],["class","spinner-border spinner-border-sm align-middle ms-2",4,"ngIf"],["id","kt_table_users_wrapper",1,"dataTables_wrapper","dt-bootstrap4","no-footer"],[1,"table-responsive"],["id","kt_table_users",1,"table","align-middle","table-row-dashed","fs-6","gy-5","dataTable","no-footer"],[1,"text-start","text-muted","fw-bold","fs-7","text-uppercase","gs-0"],["tabindex","0","aria-controls","kt_table_users","rowspan","1","colspan","1","aria-label","User: activate to sort column ascending",1,"min-w-125px","sorting"],["tabindex","0","aria-controls","kt_table_users","rowspan","1","colspan","1","aria-label","Role: activate to sort column ascending",1,"min-w-125px","sorting"],["rowspan","1","colspan","1","aria-label","Actions",1,"text-end","min-w-100px","sorting_disabled"],[1,"text-gray-600","fw-semibold"],[4,"ngFor","ngForOf"],[1,"row"],[1,"text-center","pt-15"],["type","reset",1,"btn","btn-light","me-3",3,"click"],["for","etiqueta_especial",1,"required","fw-bold","fs-6","mb-2"],["type","color","id","color","name","color",1,"form-control",3,"ngModel","ngModelChange"],[1,"spinner-border","spinner-border-sm","align-middle","ms-2"],[1,"odd"],[4,"ngIf"],[1,"text-end"],["href","#","onclick","return false;",1,"btn","btn-icon","btn-bg-light","btn-active-color-primary","btn-sm",3,"click"],[1,"ki-duotone","ki-trash","fs-2"],[1,"path1"],[1,"path2"],[1,"path3"],[1,"path4"],[1,"path5"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h2",2),t._uU(3),t.qZA(),t.TgZ(4,"div",3),t.NdJ("click",function(){return n.modal.dismiss()}),t.TgZ(5,"span",4),t.O4$(),t.TgZ(6,"svg",5),t._UZ(7,"rect",6)(8,"rect",7),t.qZA()()()(),t.kcU(),t.TgZ(9,"div",8)(10,"form",9)(11,"div",10)(12,"div",11)(13,"label",12),t._uU(14,"Nombre de la Propiedad: "),t.qZA(),t.TgZ(15,"input",13),t.NdJ("ngModelChange",function(s){return n.name=s}),t.qZA()()(),t.TgZ(16,"div",14)(17,"div",15)(18,"label",12),t._uU(19,"Selec. un Tipo"),t.qZA(),t.TgZ(20,"select",16),t.NdJ("ngModelChange",function(s){return n.type_action=s}),t.TgZ(21,"option",17),t._uU(22,"Normal"),t.qZA(),t.TgZ(23,"option",18),t._uU(24,"Color"),t.qZA()()(),t.YNc(25,L,4,1,"div",19),t.qZA(),t.TgZ(26,"div",20)(27,"div",21)(28,"button",22),t.NdJ("click",function(){return n.store()}),t.TgZ(29,"span",23),t._uU(30,"Registrar"),t.qZA(),t.YNc(31,E,1,0,"span",24),t.ALo(32,"async"),t.qZA()()(),t.TgZ(33,"div",11)(34,"div",25)(35,"div",26)(36,"table",27)(37,"thead")(38,"tr",28)(39,"th",29),t._uU(40,"Nombre "),t.qZA(),t.TgZ(41,"th",30),t._uU(42,"Color "),t.qZA(),t.TgZ(43,"th",31),t._uU(44," Acciones "),t.qZA()()(),t.TgZ(45,"tbody",32),t.YNc(46,N,15,2,"ng-container",33),t.qZA()()(),t._UZ(47,"div",34),t.qZA()(),t.TgZ(48,"div",35)(49,"button",36),t.NdJ("click",function(){return n.modal.dismiss()}),t._uU(50," Cerrar "),t.qZA()()()()()),2&e&&(t.xp6(3),t.hij("Agregar Propiedades : ",n.attribute.name,""),t.xp6(12),t.Q6J("ngModel",n.name),t.xp6(5),t.Q6J("ngModel",n.type_action),t.xp6(5),t.Q6J("ngIf",2==n.type_action),t.xp6(6),t.Q6J("ngIf",t.lcZ(32,6,n.isLoading$)),t.xp6(15),t.Q6J("ngForOf",n.properties))},dependencies:[l.sg,l.O5,a._Y,a.YN,a.Kr,a.Fj,a.EJ,a.JJ,a.JL,a.On,a.F,l.Ov]})}return r})();function M(r,c){1&r&&(t.TgZ(0,"tr")(1,"td",54)(2,"div",55)(3,"span",56),t._uU(4,"Loading..."),t.qZA()()()())}function I(r,c){1&r&&(t.TgZ(0,"td",70)(1,"div",71),t._uU(2,"Activo"),t.qZA()())}function O(r,c){1&r&&(t.TgZ(0,"td",70)(1,"div",72),t._uU(2,"Inactivo"),t.qZA()())}function D(r,c){if(1&r){const i=t.EpF();t.TgZ(0,"a",63),t.NdJ("click",function(){t.CHM(i);const n=t.oxw(2).$implicit,o=t.oxw();return t.KtG(o.openModalRegisterProperties(n))}),t.TgZ(1,"i",73),t._UZ(2,"span",5)(3,"span",6),t.qZA()()}}function R(r,c){if(1&r){const i=t.EpF();t.TgZ(0,"tr",58)(1,"td",59)(2,"span"),t._uU(3),t.qZA()(),t.TgZ(4,"td")(5,"span"),t._uU(6),t.qZA()(),t.YNc(7,I,3,0,"td",60),t.YNc(8,O,3,0,"td",60),t.TgZ(9,"td")(10,"span"),t._uU(11),t.qZA()(),t.TgZ(12,"td")(13,"span"),t._uU(14),t.qZA()(),t.TgZ(15,"td",61),t.YNc(16,D,4,0,"a",62),t.TgZ(17,"a",63),t.NdJ("click",function(){t.CHM(i);const n=t.oxw().$implicit,o=t.oxw();return t.KtG(o.openModalEditAttribute(n))}),t.TgZ(18,"i",64),t._UZ(19,"span",5)(20,"span",6),t.qZA()(),t.TgZ(21,"a",65),t.NdJ("click",function(){t.CHM(i);const n=t.oxw().$implicit,o=t.oxw();return t.KtG(o.deleteAttribute(n))}),t.TgZ(22,"i",66),t._UZ(23,"span",5)(24,"span",6)(25,"span",67)(26,"span",68)(27,"span",69),t.qZA()()()()}if(2&r){const i=t.oxw().$implicit,e=t.oxw();t.xp6(3),t.Oqu(i.name),t.xp6(3),t.Oqu(e.getNameAttribute(i.type_attribute)),t.xp6(1),t.Q6J("ngIf",1==i.state),t.xp6(1),t.Q6J("ngIf",2==i.state),t.xp6(3),t.hij(" ",i.properties.length," "),t.xp6(3),t.hij(" ",i.created_at," "),t.xp6(2),t.Q6J("ngIf",3==i.type_attribute||4==i.type_attribute)}}function Y(r,c){if(1&r&&(t.ynx(0),t.YNc(1,R,28,7,"tr",57),t.ALo(2,"async"),t.BQk()),2&r){const i=t.oxw();t.xp6(1),t.Q6J("ngIf",!t.lcZ(2,1,i.isLoading$))}}const F=[{path:"",component:A,children:[{path:"list",component:(()=>{class r{attributesService;modalService;attributes=[];search="";totalPages=0;currentPage=1;isLoading$;constructor(i,e){this.attributesService=i,this.modalService=e}ngOnInit(){this.listAttributes(),this.isLoading$=this.attributesService.isLoading$}listAttributes(i=1){this.attributesService.listAttributes(i,this.search).subscribe(e=>{console.log(e),this.attributes=e.attributes,this.totalPages=e.total,this.currentPage=i})}getNameAttribute(i){var e="";switch(i=parseInt(i)){case 1:e="Texto";break;case 2:e="Numero";break;case 3:e="Seleccionable";break;case 4:e="Seleccionable Multiple"}return e}searchTo(){this.listAttributes()}loadPage(i){console.log(i),this.listAttributes(i)}openModalCreateAttribute(){this.modalService.open(C,{centered:!0,size:"md"}).componentInstance.AttributeC.subscribe(e=>{this.attributes.unshift(e)})}openModalEditAttribute(i){const e=this.modalService.open(w,{centered:!0,size:"md"});e.componentInstance.attribute=i,e.componentInstance.AttributeE.subscribe(n=>{let o=this.attributes.findIndex(s=>s.id==n.id);-1!=o&&(this.attributes[o]=n)})}deleteAttribute(i){const e=this.modalService.open(k,{centered:!0,size:"md"});e.componentInstance.attribute=i,e.componentInstance.AttributeD.subscribe(n=>{let o=this.attributes.findIndex(s=>s.id==i.id);-1!=o&&this.attributes.splice(o,1)})}openModalRegisterProperties(i){this.modalService.open(J,{centered:!0,size:"md"}).componentInstance.attribute=i}static \u0275fac=function(e){return new(e||r)(t.Y36(g),t.Y36(u.FF))};static \u0275cmp=t.Xpm({type:r,selectors:[["app-list-attribute"]],decls:81,vars:10,consts:[[1,"card"],[1,"card-header","border-0","pt-6"],[1,"card-title"],[1,"d-flex","align-items-center","position-relative","my-1"],[1,"ki-duotone","ki-magnifier","fs-3","position-absolute","ms-5"],[1,"path1"],[1,"path2"],["type","text","placeholder","Buscar Atributo",1,"form-control","form-control-solid","w-250px","ps-13",3,"ngModel","keyup.enter","ngModelChange"],[1,"card-toolbar"],["data-kt-user-table-toolbar","base",1,"d-flex","justify-content-end"],["type","button","data-kt-menu-trigger","click","data-kt-menu-placement","bottom-end",1,"btn","btn-light-primary","me-3"],[1,"ki-duotone","ki-filter","fs-2"],["data-kt-menu","true",1,"menu","menu-sub","menu-sub-dropdown","w-300px","w-md-325px"],[1,"px-7","py-5"],[1,"fs-5","text-gray-900","fw-bold"],[1,"separator","border-gray-200"],["data-kt-user-table-filter","form",1,"px-7","py-5"],[1,"mb-10"],[1,"form-label","fs-6","fw-semibold"],["data-kt-select2","true","data-placeholder","Select option","data-allow-clear","true","data-kt-user-table-filter","role","data-hide-search","true","data-select2-id","select2-data-9-nrhl","tabindex","-1","aria-hidden","true","data-kt-initialized","1",1,"form-select","form-select-solid","fw-bold","select2-hidden-accessible"],["data-select2-id","select2-data-11-ez5p"],["value","Administrator"],["value","Analyst"],["value","Developer"],["value","Support"],["value","Trial"],["data-kt-select2","true","data-placeholder","Select option","data-allow-clear","true","data-kt-user-table-filter","two-step","data-hide-search","true","data-select2-id","select2-data-12-35ai","tabindex","-1","aria-hidden","true","data-kt-initialized","1",1,"form-select","form-select-solid","fw-bold","select2-hidden-accessible"],["data-select2-id","select2-data-14-46nm"],["value","Enabled"],[1,"d-flex","justify-content-end"],["type","reset","data-kt-menu-dismiss","true","data-kt-user-table-filter","reset",1,"btn","btn-light","btn-active-light-primary","fw-semibold","me-2","px-6"],["type","submit","data-kt-menu-dismiss","true","data-kt-user-table-filter","filter",1,"btn","btn-primary","fw-semibold","px-6"],["data-bs-toggle","modal","data-bs-target","#kt_modal_add_user",1,"btn","btn-primary",3,"click"],[1,"ki-duotone","ki-plus","fs-2"],["data-kt-user-table-toolbar","selected",1,"d-flex","justify-content-end","align-items-center","d-none"],[1,"fw-bold","me-5"],["data-kt-user-table-select","selected_count",1,"me-2"],["type","button","data-kt-user-table-select","delete_selected",1,"btn","btn-danger"],[1,"card-body","py-4"],["id","kt_table_users_wrapper",1,"dataTables_wrapper","dt-bootstrap4","no-footer"],[1,"table-responsive"],["id","kt_table_users",1,"table","align-middle","table-row-dashed","fs-6","gy-5","dataTable","no-footer"],[1,"text-start","text-muted","fw-bold","fs-7","text-uppercase","gs-0"],["tabindex","0","aria-controls","kt_table_users","rowspan","1","colspan","1","aria-label","User: activate to sort column ascending",1,"min-w-125px","sorting"],["tabindex","0","aria-controls","kt_table_users","rowspan","1","colspan","1","aria-label","Role: activate to sort column ascending",1,"min-w-125px","sorting"],["tabindex","0","aria-controls","kt_table_users","rowspan","1","colspan","1","aria-label","Last login: activate to sort column descending","aria-sort","ascending",1,"min-w-125px","sorting","sorting_asc"],["tabindex","0","aria-controls","kt_table_users","rowspan","1","colspan","1","aria-label","Two-step: activate to sort column ascending",1,"min-w-125px","sorting"],["tabindex","0","aria-controls","kt_table_users","rowspan","1","colspan","1","aria-label","Joined Date: activate to sort column ascending",1,"min-w-125px","sorting"],["rowspan","1","colspan","1","aria-label","Actions",1,"text-end","min-w-100px","sorting_disabled"],[1,"text-gray-600","fw-semibold"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"row"],[3,"collectionSize","page","pageSize","rotate","boundaryLinks","pageChange"],["colspan","8",1,"text-center","py-5"],["role","status",1,"spinner-border","text-primary"],[1,"visually-hidden"],["class","odd",4,"ngIf"],[1,"odd"],[1,"d-flex","align-items-center"],["data-order","2024-04-18T11:00:30-05:00","class","sorting_1",4,"ngIf"],[1,"text-end"],["href","#","onclick","return false;","class","btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",3,"click",4,"ngIf"],["href","#","onclick","return false;",1,"btn","btn-icon","btn-bg-light","btn-active-color-primary","btn-sm","me-1",3,"click"],[1,"ki-duotone","ki-pencil","fs-2"],["href","#","onclick","return false;",1,"btn","btn-icon","btn-bg-light","btn-active-color-primary","btn-sm",3,"click"],[1,"ki-duotone","ki-trash","fs-2"],[1,"path3"],[1,"path4"],[1,"path5"],["data-order","2024-04-18T11:00:30-05:00",1,"sorting_1"],[1,"badge","badge-primary","fw-bold"],[1,"badge","badge-danger","fw-bold"],[1,"ki-duotone","ki-switch","fs-2"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"i",4),t._UZ(5,"span",5)(6,"span",6),t.qZA(),t.TgZ(7,"input",7),t.NdJ("keyup.enter",function(){return n.searchTo()})("ngModelChange",function(s){return n.search=s}),t.qZA()()(),t.TgZ(8,"div",8)(9,"div",9)(10,"button",10)(11,"i",11),t._UZ(12,"span",5)(13,"span",6),t.qZA(),t._uU(14,"Filtro"),t.qZA(),t.TgZ(15,"div",12)(16,"div",13)(17,"div",14),t._uU(18,"Opciones"),t.qZA()(),t._UZ(19,"div",15),t.TgZ(20,"div",16)(21,"div",17)(22,"label",18),t._uU(23,"Estado:"),t.qZA(),t.TgZ(24,"select",19),t._UZ(25,"option",20),t.TgZ(26,"option",21),t._uU(27,"Administrator"),t.qZA(),t.TgZ(28,"option",22),t._uU(29,"Analyst"),t.qZA(),t.TgZ(30,"option",23),t._uU(31,"Developer"),t.qZA(),t.TgZ(32,"option",24),t._uU(33,"Support"),t.qZA(),t.TgZ(34,"option",25),t._uU(35,"Trial"),t.qZA()()(),t.TgZ(36,"div",17)(37,"label",18),t._uU(38,"Two Step Verification:"),t.qZA(),t.TgZ(39,"select",26),t._UZ(40,"option",27),t.TgZ(41,"option",28),t._uU(42,"Enabled"),t.qZA()()(),t.TgZ(43,"div",29)(44,"button",30),t._uU(45,"Reset"),t.qZA(),t.TgZ(46,"button",31),t._uU(47,"Apply"),t.qZA()()()(),t.TgZ(48,"button",32),t.NdJ("click",function(){return n.openModalCreateAttribute()}),t._UZ(49,"i",33),t._uU(50,"Nuevo Atributo"),t.qZA()(),t.TgZ(51,"div",34)(52,"div",35),t._UZ(53,"span",36),t._uU(54,"Selected "),t.qZA(),t.TgZ(55,"button",37),t._uU(56,"Delete Selected"),t.qZA()()()(),t.TgZ(57,"div",38)(58,"div",39)(59,"div",40)(60,"table",41)(61,"thead")(62,"tr",42)(63,"th",43),t._uU(64,"Nombre"),t.qZA(),t.TgZ(65,"th",44),t._uU(66,"Tipo de Atributo"),t.qZA(),t.TgZ(67,"th",45),t._uU(68,"Estado "),t.qZA(),t.TgZ(69,"th",46),t._uU(70,"N\xb0 de Propiedades"),t.qZA(),t.TgZ(71,"th",47),t._uU(72,"Fecha de creaci\xf3n"),t.qZA(),t.TgZ(73,"th",48),t._uU(74,"Acciones "),t.qZA()()(),t.TgZ(75,"tbody",49),t.YNc(76,M,5,0,"tr",50),t.ALo(77,"async"),t.YNc(78,Y,3,3,"ng-container",51),t.qZA()()(),t.TgZ(79,"div",52)(80,"ngb-pagination",53),t.NdJ("pageChange",function(s){return n.currentPage=s})("pageChange",function(s){return n.loadPage(s)}),t.qZA()()()()()),2&e&&(t.xp6(7),t.Q6J("ngModel",n.search),t.xp6(69),t.Q6J("ngIf",t.lcZ(77,8,n.isLoading$)),t.xp6(2),t.Q6J("ngForOf",n.attributes),t.xp6(2),t.Q6J("collectionSize",n.totalPages)("page",n.currentPage)("pageSize",2)("rotate",!0)("boundaryLinks",!0))},dependencies:[l.sg,l.O5,a.YN,a.Kr,a.Fj,a.JJ,a.On,u.N9,l.Ov]})}return r})()}]}];let B=(()=>{class r{static \u0275fac=function(e){return new(e||r)};static \u0275mod=t.oAB({type:r});static \u0275inj=t.cJS({imports:[h.Bz.forChild(F),h.Bz]})}return r})();var j=d(53);let $=(()=>{class r{static \u0275fac=function(e){return new(e||r)};static \u0275mod=t.oAB({type:r});static \u0275inj=t.cJS({imports:[l.ez,B,p.JF,a.u5,u.IJ,a.UX,j.vi,u.bz,u.jF]})}return r})()}}]);