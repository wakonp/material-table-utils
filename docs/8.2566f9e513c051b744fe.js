(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{X0tS:function(t,e,i){"use strict";i.r(e),i.d(e,"SimpleTableFilterModule",(function(){return K}));var n=i("ofXK"),a=i("tyNb"),s=i("M9IT"),r=i("Dh3D"),o=i("+0xr"),l=i("0EQZ"),d=i("Kj3r"),c=i("JX91"),u=i("/uUt"),h=i("zP0r"),m=i("lJxs"),b=i("LRne"),p=i("VRyK"),f=i("3Pt+");const g=[{id:1,name:"Hydrogen"},{id:2,name:"Helium"},{id:3,name:"Lithium"},{id:4,name:"Beryllium"},{id:5,name:"Boron"},{id:6,name:"Carbon"},{id:7,name:"Nitrogen"},{id:8,name:"Oxygen"},{id:9,name:"Fluorine"},{id:10,name:"Neon"},{id:11,name:"Sodium"},{id:12,name:"Magnesium"},{id:13,name:"Aluminum"},{id:14,name:"Silicon"},{id:15,name:"Phosphorus"},{id:16,name:"Sulfur"},{id:17,name:"Chlorine"},{id:18,name:"Argon"},{id:19,name:"Potassium"},{id:20,name:"Calcium"}];class v extends l.b{constructor(){super(),this.filter=new f.b(""),this.data=g}connect(){const t=[Object(b.a)(this.data),this.paginator.page,this.sort.sortChange,this.filter.valueChanges.pipe(Object(d.a)(500),Object(c.a)(this.filter.value),Object(u.a)(),Object(h.a)(1))];return Object(p.a)(...t).pipe(Object(m.a)(()=>this.getPagedData(this.getSortedData(this.getFilteredData([...this.data])))))}disconnect(){}getFilteredData(t){var e;const i=null===(e=this.filter.value)||void 0===e?void 0:e.toLowerCase();return i?t.filter(t=>t.name.toLowerCase().includes(i)):t}getPagedData(t){return this.paginator.length=t.length,t.splice(this.paginator.pageIndex*this.paginator.pageSize,this.paginator.pageSize)}getSortedData(t){return this.sort.active&&""!==this.sort.direction?t.sort((t,e)=>{const i="asc"===this.sort.direction;switch(this.sort.active){case"name":return _(t.name,e.name,i);case"id":return _(+t.id,+e.id,i);default:return 0}}):t}}function _(t,e,i){return(t<e?-1:1)*(i?1:-1)}var y=i("fXoL"),C=i("tjdD"),w=i("MoiJ"),S=i("ODsr"),x=i("kmnG"),O=i("nLfN"),E=i("8LU1"),R=i("EY2u"),j=i("XNiG");i("xgIS"),i("3UWI"),i("1G5W");const A=Object(O.f)({passive:!0});let I=(()=>{class t{constructor(t,e){this._platform=t,this._ngZone=e,this._monitoredElements=new Map}monitor(t){if(!this._platform.isBrowser)return R.a;const e=Object(E.e)(t),i=this._monitoredElements.get(e);if(i)return i.subject;const n=new j.a,a="cdk-text-field-autofilled",s=t=>{"cdk-text-field-autofill-start"!==t.animationName||e.classList.contains(a)?"cdk-text-field-autofill-end"===t.animationName&&e.classList.contains(a)&&(e.classList.remove(a),this._ngZone.run(()=>n.next({target:t.target,isAutofilled:!1}))):(e.classList.add(a),this._ngZone.run(()=>n.next({target:t.target,isAutofilled:!0})))};return this._ngZone.runOutsideAngular(()=>{e.addEventListener("animationstart",s,A),e.classList.add("cdk-text-field-autofill-monitored")}),this._monitoredElements.set(e,{subject:n,unlisten:()=>{e.removeEventListener("animationstart",s,A)}}),n}stopMonitoring(t){const e=Object(E.e)(t),i=this._monitoredElements.get(e);i&&(i.unlisten(),i.subject.complete(),e.classList.remove("cdk-text-field-autofill-monitored"),e.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(e))}ngOnDestroy(){this._monitoredElements.forEach((t,e)=>this.stopMonitoring(e))}}return t.\u0275fac=function(e){return new(e||t)(y.Vb(O.a),y.Vb(y.A))},t.\u0275prov=Object(y.Hb)({factory:function(){return new t(Object(y.Vb)(O.a),Object(y.Vb)(y.A))},token:t,providedIn:"root"}),t})(),L=(()=>{class t{}return t.\u0275mod=y.Jb({type:t}),t.\u0275inj=y.Ib({factory:function(e){return new(e||t)},imports:[[O.b]]}),t})();var D=i("FKr1");const M=new y.r("MAT_INPUT_VALUE_ACCESSOR"),N=["button","checkbox","file","hidden","image","radio","range","reset","submit"];let k=0;class V{constructor(t,e,i,n){this._defaultErrorStateMatcher=t,this._parentForm=e,this._parentFormGroup=i,this.ngControl=n}}const F=Object(D.u)(V);let P=(()=>{class t extends F{constructor(t,e,i,n,a,s,r,o,l,d){super(s,n,a,i),this._elementRef=t,this._platform=e,this.ngControl=i,this._autofillMonitor=o,this._formField=d,this._uid="mat-input-"+k++,this.focused=!1,this.stateChanges=new j.a,this.controlType="mat-input",this.autofilled=!1,this._disabled=!1,this._required=!1,this._type="text",this._readonly=!1,this._neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(t=>Object(O.e)().has(t));const c=this._elementRef.nativeElement,u=c.nodeName.toLowerCase();this._inputValueAccessor=r||c,this._previousNativeValue=this.value,this.id=this.id,e.IOS&&l.runOutsideAngular(()=>{t.nativeElement.addEventListener("keyup",t=>{let e=t.target;e.value||e.selectionStart||e.selectionEnd||(e.setSelectionRange(1,1),e.setSelectionRange(0,0))})}),this._isServer=!this._platform.isBrowser,this._isNativeSelect="select"===u,this._isTextarea="textarea"===u,this._isNativeSelect&&(this.controlType=c.multiple?"mat-native-select-multiple":"mat-native-select")}get disabled(){return this.ngControl&&null!==this.ngControl.disabled?this.ngControl.disabled:this._disabled}set disabled(t){this._disabled=Object(E.c)(t),this.focused&&(this.focused=!1,this.stateChanges.next())}get id(){return this._id}set id(t){this._id=t||this._uid}get required(){return this._required}set required(t){this._required=Object(E.c)(t)}get type(){return this._type}set type(t){this._type=t||"text",this._validateType(),!this._isTextarea&&Object(O.e)().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}get value(){return this._inputValueAccessor.value}set value(t){t!==this.value&&(this._inputValueAccessor.value=t,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(t){this._readonly=Object(E.c)(t)}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(t=>{this.autofilled=t.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement)}ngDoCheck(){this.ngControl&&this.updateErrorState(),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(t){this._elementRef.nativeElement.focus(t)}_focusChanged(t){t===this.focused||this.readonly&&t||(this.focused=t,this.stateChanges.next())}_onInput(){}_dirtyCheckPlaceholder(){var t,e;const i=(null===(e=null===(t=this._formField)||void 0===t?void 0:t._hideControlPlaceholder)||void 0===e?void 0:e.call(t))?null:this.placeholder;if(i!==this._previousPlaceholder){const t=this._elementRef.nativeElement;this._previousPlaceholder=i,i?t.setAttribute("placeholder",i):t.removeAttribute("placeholder")}}_dirtyCheckNativeValue(){const t=this._elementRef.nativeElement.value;this._previousNativeValue!==t&&(this._previousNativeValue=t,this.stateChanges.next())}_validateType(){N.indexOf(this._type)}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let t=this._elementRef.nativeElement.validity;return t&&t.badInput}get empty(){return!(this._isNeverEmpty()||this._elementRef.nativeElement.value||this._isBadInput()||this.autofilled)}get shouldLabelFloat(){if(this._isNativeSelect){const t=this._elementRef.nativeElement,e=t.options[0];return this.focused||t.multiple||!this.empty||!!(t.selectedIndex>-1&&e&&e.label)}return this.focused||!this.empty}setDescribedByIds(t){t.length?this._elementRef.nativeElement.setAttribute("aria-describedby",t.join(" ")):this._elementRef.nativeElement.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}}return t.\u0275fac=function(e){return new(e||t)(y.Lb(y.l),y.Lb(O.a),y.Lb(f.f,10),y.Lb(f.h,8),y.Lb(f.d,8),y.Lb(D.c),y.Lb(M,10),y.Lb(I),y.Lb(y.A),y.Lb(x.a,8))},t.\u0275dir=y.Gb({type:t,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-input-element","mat-form-field-autofill-control"],hostVars:9,hostBindings:function(t,e){1&t&&y.Yb("focus",(function(){return e._focusChanged(!0)}))("blur",(function(){return e._focusChanged(!1)}))("input",(function(){return e._onInput()})),2&t&&(y.Ub("disabled",e.disabled)("required",e.required),y.Bb("id",e.id)("data-placeholder",e.placeholder)("readonly",e.readonly&&!e._isNativeSelect||null)("aria-invalid",e.errorState)("aria-required",e.required.toString()),y.Db("mat-input-server",e._isServer))},inputs:{id:"id",disabled:"disabled",required:"required",type:"type",value:"value",readonly:"readonly",placeholder:"placeholder",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:["aria-describedby","userAriaDescribedBy"]},exportAs:["matInput"],features:[y.zb([{provide:x.c,useExisting:t}]),y.xb,y.yb]}),t})(),Q=(()=>{class t{}return t.\u0275mod=y.Jb({type:t}),t.\u0275inj=y.Ib({factory:function(e){return new(e||t)},providers:[D.c],imports:[[L,x.d],L,x.d]}),t})();function B(t,e){1&t&&(y.Rb(0,"th",10),y.vc(1,"Id"),y.Qb())}function T(t,e){if(1&t&&(y.Rb(0,"td",11),y.vc(1),y.Qb()),2&t){const t=e.$implicit;y.Ab(1),y.wc(t.id)}}function q(t,e){1&t&&(y.Rb(0,"th",10),y.vc(1,"Name"),y.Qb())}function U(t,e){if(1&t&&(y.Rb(0,"td",11),y.vc(1),y.Qb()),2&t){const t=e.$implicit;y.Ab(1),y.wc(t.name)}}function z(t,e){1&t&&y.Mb(0,"tr",12)}function J(t,e){1&t&&y.Mb(0,"tr",13)}const Z=function(){return[25,50,100,250]},H=[{path:"",component:(()=>{class t{constructor(){this.displayedColumns=["id","name"]}ngOnInit(){this.dataSource=new v}ngAfterViewInit(){this.dataSource.sort=this.sort,this.dataSource.paginator=this.paginator,this.table.dataSource=this.dataSource}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=y.Fb({type:t,selectors:[["app-simple-table-filter"]],viewQuery:function(t,e){var i;1&t&&(y.yc(s.a,!0),y.yc(r.a,!0),y.yc(o.j,!0)),2&t&&(y.jc(i=y.Zb())&&(e.paginator=i.first),y.jc(i=y.Zb())&&(e.sort=i.first),y.jc(i=y.Zb())&&(e.table=i.first))},decls:35,vars:8,consts:[["type","text","matInput","",3,"formControl"],["mat-table","","matSort","","aria-label","Elements",1,"full-width-table"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[3,"length","pageIndex","pageSize","pageSizeOptions"],["paginator",""],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(y.Rb(0,"description-card"),y.Rb(1,"description-card-content"),y.Rb(2,"p"),y.vc(3," Extend the datasource class with a FormControl property. In the template bind the formControl on the datasource property. Add a getFilteredData function and add it to the merged connect Observable. By using the valueChanges attribute, it is possible to use debounceTime and distinctUntilChanged Operators. "),y.Qb(),y.Rb(4,"p"),y.Rb(5,"code"),y.vc(6," this.filter.valueChanges.pipe("),y.Mb(7,"br"),y.vc(8," debounceTime(500),"),y.Mb(9,"br"),y.vc(10," startWith(this.filter.value),"),y.Mb(11,"br"),y.vc(12," distinctUntilChanged(),"),y.Mb(13,"br"),y.vc(14," skip(1)"),y.Mb(15,"br"),y.vc(16," )"),y.Mb(17,"br"),y.Qb(),y.vc(18," Using distinctUntilChanged with startWith and skip the first emission for preventing duplicate call of getFilteredData but having the distinct value within the operator for the next emission. "),y.Qb(),y.Qb(),y.Rb(19,"description-card-table"),y.Rb(20,"mat-form-field"),y.Rb(21,"mat-label"),y.vc(22,"Filter"),y.Qb(),y.Mb(23,"input",0),y.Qb(),y.Rb(24,"table",1),y.Pb(25,2),y.uc(26,B,2,0,"th",3),y.uc(27,T,2,1,"td",4),y.Ob(),y.Pb(28,5),y.uc(29,q,2,0,"th",3),y.uc(30,U,2,1,"td",4),y.Ob(),y.uc(31,z,1,0,"tr",6),y.uc(32,J,1,0,"tr",7),y.Qb(),y.Mb(33,"mat-paginator",8,9),y.Qb(),y.Qb()),2&t&&(y.Ab(23),y.hc("formControl",e.dataSource.filter),y.Ab(8),y.hc("matHeaderRowDef",e.displayedColumns),y.Ab(1),y.hc("matRowDefColumns",e.displayedColumns),y.Ab(1),y.hc("length",null==e.dataSource?null:e.dataSource.data.length)("pageIndex",0)("pageSize",50)("pageSizeOptions",y.ic(7,Z)))},directives:[C.a,w.a,S.a,x.b,x.e,P,f.a,f.g,f.c,o.j,r.a,o.c,o.e,o.b,o.g,o.i,s.a,o.d,r.b,o.a,o.f,o.h],styles:[".full-width-table[_ngcontent-%COMP%]{width:100%}"]}),t})()}];let G=(()=>{class t{}return t.\u0275mod=y.Jb({type:t}),t.\u0275inj=y.Ib({factory:function(e){return new(e||t)},imports:[[a.d.forChild(H)],a.d]}),t})();var X=i("Dzbh");let K=(()=>{class t{}return t.\u0275mod=y.Jb({type:t}),t.\u0275inj=y.Ib({factory:function(e){return new(e||t)},imports:[[n.c,G,X.a,o.k,s.b,r.c,f.i,x.d,Q]]}),t})()}}]);