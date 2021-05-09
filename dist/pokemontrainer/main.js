(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Atmar\Desktop\git\pokemontrainer\src\main.ts */"zUnb");


/***/ }),

/***/ "14z+":
/*!*******************************!*\
  !*** ./src/app/user.guard.ts ***!
  \*******************************/
/*! exports provided: UserGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGuard", function() { return UserGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class UserGuard {
    canActivate(route, state) {
        if (localStorage.getItem('username') !== null) {
            return true;
        }
        return false;
    }
}
UserGuard.ɵfac = function UserGuard_Factory(t) { return new (t || UserGuard)(); };
UserGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserGuard, factory: UserGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "26fR":
/*!*******************************************************!*\
  !*** ./src/app/contact-create/contact-create.page.ts ***!
  \*******************************************************/
/*! exports provided: ContactCreatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactCreatePage", function() { return ContactCreatePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



const _c0 = ["class", "page"];
class ContactCreatePage {
    constructor(router) {
        this.router = router;
    }
    onSubmit(createForm) {
        //store user after submation
        localStorage.setItem('username', createForm.value.name);
    }
    ngOnInit() {
        if (localStorage.getItem('username') !== null || "") {
            this.router.navigate(['pokemon']);
        }
        else {
            this.router.navigate(['pokemon']);
        }
    }
}
ContactCreatePage.ɵfac = function ContactCreatePage_Factory(t) { return new (t || ContactCreatePage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
ContactCreatePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactCreatePage, selectors: [["contact-create", 8, "page"]], attrs: _c0, decls: 13, vars: 1, consts: [[1, "container", "mt-5", "d-flex", "justify-content-center"], [1, "card", "p-4", "mt-3"], [1, "first"], [3, "ngSubmit"], ["createForm", "ngForm"], ["type", "text", "id", "name", "name", "name", "ngModel", "", "required", "", "placeholder", "insert name here", 1, "form-control"], ["name", "ngModel"], [1, "third", "mt-4"], ["type", "submit", 1, "btn", "btn-success", "btn-block", 3, "disabled"]], template: function ContactCreatePage_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Your Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactCreatePage_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Add user");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"]], styles: ["body[_ngcontent-%COMP%] {\r\n  background-color: #eee;\r\n  font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  background-color: #e9b014;\r\n  width: 350px;\r\n  border-radius: 20px;\r\n}\r\n\r\n.heading[_ngcontent-%COMP%] {\r\n  font-weight: 700;\r\n}\r\n\r\n.hour[_ngcontent-%COMP%] {\r\n  margin-top: 1px;\r\n  color: rgb(211, 148, 31);\r\n  font-size: 12px;\r\n}\r\n\r\n.ratings[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  color: #b38117;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n  border-radius: 15px !important;\r\n}\r\n\r\n.line-color[_ngcontent-%COMP%] {\r\n  color: rgb(121, 104, 13);\r\n  height: 3px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtY3JlYXRlLnBhZ2UuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixXQUFXO0FBQ2IiLCJmaWxlIjoiY29udGFjdC1jcmVhdGUucGFnZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5YjAxNDtcclxuICB3aWR0aDogMzUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLmhlYWRpbmcge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5ob3VyIHtcclxuICBtYXJnaW4tdG9wOiAxcHg7XHJcbiAgY29sb3I6IHJnYigyMTEsIDE0OCwgMzEpO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLnJhdGluZ3MgaSB7XHJcbiAgY29sb3I6ICNiMzgxMTc7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxpbmUtY29sb3Ige1xyXG4gIGNvbG9yOiByZ2IoMTIxLCAxMDQsIDEzKTtcclxuICBoZWlnaHQ6IDNweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "3cht":
/*!******************************************************************!*\
  !*** ./src/app/pokemon-list-item/pokemon-list-item.component.ts ***!
  \******************************************************************/
/*! exports provided: PokemonListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonListItemComponent", function() { return PokemonListItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PokemonListItemComponent {
    constructor() {
        this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    onpokemonClicked() {
        this.clicked.emit(this.pokemon);
    }
}
PokemonListItemComponent.ɵfac = function PokemonListItemComponent_Factory(t) { return new (t || PokemonListItemComponent)(); };
PokemonListItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PokemonListItemComponent, selectors: [["app-pokemon-list-item"]], inputs: { pokemon: "pokemon" }, outputs: { clicked: "clicked" }, decls: 6, vars: 2, consts: [[1, "pokemon-list-item"], [1, "pokemon-list-item_name"], ["alt", "", 3, "src"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"]], template: function PokemonListItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokemonListItemComponent_Template_button_click_4_listener() { return ctx.onpokemonClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Collect pokemon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pokemon == null ? null : ctx.pokemon.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.pokemon == null ? null : ctx.pokemon.sprites.back_default, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: [".pokemon-list-item[_ngcontent-%COMP%] {\r\n  border: 3px solid sandybrown;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBva2Vtb24tbGlzdC1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBNEI7QUFDOUIiLCJmaWxlIjoicG9rZW1vbi1saXN0LWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb2tlbW9uLWxpc3QtaXRlbSB7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgc2FuZHlicm93bjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "IHLL":
/*!**********************************!*\
  !*** ./src/app/header/header.ts ***!
  \**********************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class Header {
    constructor() { }
    ngOnInit() {
    }
}
Header.ɵfac = function Header_Factory(t) { return new (t || Header)(); };
Header.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Header, selectors: [["app-header"]], decls: 3, vars: 0, consts: [[1, "header"]], template: function Header_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Pokemon Trainer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["header[_ngcontent-%COMP%] {\r\n  padding: 20px 0px;\r\n  text-align: center;\r\n  background-color: darkgoldenrod;\r\n}\r\nheader[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  text-transform: uppercase;\r\n  color: white;\r\n  letter-spacing: 3px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLCtCQUErQjtBQUNqQztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixtQkFBbUI7QUFDckIiLCJmaWxlIjoiaGVhZGVyLmNzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlciB7XHJcbiAgcGFkZGluZzogMjBweCAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtnb2xkZW5yb2Q7XHJcbn1cclxuaGVhZGVyIGgxIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "Njky":
/*!************************************************************!*\
  !*** ./src/app/pokemondetails/pokemondetails.component.ts ***!
  \************************************************************/
/*! exports provided: PokemondetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemondetailsComponent", function() { return PokemondetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_pokemon_pokemon_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/pokemon-pokemon.service */ "eUsH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function PokemondetailsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Height");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Abilities");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h6", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Moves");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pokemon_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", pokemon_r1 == null ? null : pokemon_r1.sprites.back_default, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pokemon_r1.height);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pokemon_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pokemon_r1.abilities[0].ability.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pokemon_r1.moves[0].move.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pokemon_r1.moves[1].move.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pokemon_r1.moves[2].move.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pokemon_r1.moves[3].move.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pokemon_r1.moves[4].move.name);
} }
class PokemondetailsComponent {
    constructor(selectedPokemonService) {
        this.selectedPokemonService = selectedPokemonService;
    }
    get contact() {
        return this.selectedPokemonService.pokemon();
    }
    getdata() {
        return JSON.parse(localStorage.getItem('pokemon'));
    }
    Name() {
        return localStorage.getItem('username');
    }
    ngOnInit() {
    }
}
PokemondetailsComponent.ɵfac = function PokemondetailsComponent_Factory(t) { return new (t || PokemondetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_pokemon_pokemon_service__WEBPACK_IMPORTED_MODULE_1__["SelectedPokemonService"])); };
PokemondetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PokemondetailsComponent, selectors: [["app-pokemondetails"]], decls: 3, vars: 1, consts: [[1, "body"], [1, "row"], ["class", "column", 4, "ngFor", "ngForOf"], [1, "column"], ["alt", "", 1, "img", 3, "src"], [1, "height"], [1, "moves"], [1, "move"]], template: function PokemondetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PokemondetailsComponent_div_2_Template, 28, 9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getdata());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".body[_ngcontent-%COMP%] {\r\n  background-color: rgb(235, 204, 164);\r\n}\r\n.column[_ngcontent-%COMP%] {\r\n  border: 10px solid rgb(190, 146, 26);\r\n  float: left;\r\n  padding: 1em;\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n}\r\n.move[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  display: block;\r\n  float: left;\r\n}\r\n\r\n.row[_ngcontent-%COMP%]::after {\r\n  content: \"\";\r\n  clear: both;\r\n  display: table;\r\n}\r\n.img[_ngcontent-%COMP%] {\r\n  float: right;\r\n  width: 150px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBva2Vtb25kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0VBQW9FO0FBQ3BFO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxvQ0FBb0M7RUFDcEMsV0FBVztFQUNYLFlBQVk7RUFDWiwyQkFBbUI7RUFBbkIsd0JBQW1CO0VBQW5CLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsU0FBUztFQUNULGNBQWM7RUFDZCxXQUFXO0FBQ2I7QUFDQSx3Q0FBd0M7QUFDeEM7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2QiLCJmaWxlIjoicG9rZW1vbmRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFRocmVlIGltYWdlIGNvbnRhaW5lcnMgKHVzZSAyNSUgZm9yIGZvdXIsIGFuZCA1MCUgZm9yIHR3bywgZXRjKSAqL1xyXG4uYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMjA0LCAxNjQpO1xyXG59XHJcbi5jb2x1bW4ge1xyXG4gIGJvcmRlcjogMTBweCBzb2xpZCByZ2IoMTkwLCAxNDYsIDI2KTtcclxuICBmbG9hdDogbGVmdDtcclxuICBwYWRkaW5nOiAxZW07XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxufVxyXG4ubW92ZSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi8qIENsZWFyIGZsb2F0cyBhZnRlciBpbWFnZSBjb250YWluZXJzICovXHJcbi5yb3c6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGNsZWFyOiBib3RoO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcbi5pbWcge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICB3aWR0aDogMTUwcHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header */ "IHLL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'ngcontacts';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _header_header__WEBPACK_IMPORTED_MODULE_2__["Header"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "V4cV":
/*!*********************************************!*\
  !*** ./src/app/services/pokemon.service.ts ***!
  \*********************************************/
/*! exports provided: PokemonsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonsService", function() { return PokemonsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class PokemonsService {
    constructor(http) {
        this.http = http;
        this._pokemon = [];
        this._error = '';
    }
    getPokemons() {
        return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=10`);
    }
    //get more data from pokemon
    getMoreData(name) {
        return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    }
    Pokemon() {
        return this._pokemon;
    }
    error() {
        return this._error;
    }
    ;
}
PokemonsService.ɵfac = function PokemonsService_Factory(t) { return new (t || PokemonsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PokemonsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PokemonsService, factory: PokemonsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "W6KJ":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pokemondetails_pokemondetails_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pokemondetails/pokemondetails.component */ "Njky");



class ProfileComponent {
    constructor(router) {
        this.router = router;
    }
    Name() {
        return localStorage.getItem('username');
    }
    onSubmit() {
        localStorage.clear();
        this.router.navigate(['create']);
    }
    ngOnInit() {
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 27, vars: 1, consts: [["id", "page-content", 1, "page-content", "page-container"], [1, "padding"], [1, "row", "container", "d-flex", "justify-content-center"], [1, "card", "user-card-full"], [1, "row", "m-l-0", "m-r-0"], [1, "col-sm-4", "bg-c-lite-green", "user-profile"], [1, "card-block", "text-center", "text-white"], [1, "mdi", "mdi-square-edit-outline", "feather", "icon-edit", "m-t-10", "f-16"], [1, "f-w-600"], [3, "click"], [1, "col-sm-8"], [1, "card-block"], [1, "m-b-20", "p-b-5", "b-b-default", "f-w-600"], [1, "row"], [1, "col-sm-6"], [1, "m-b-10", "f-w-600"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Logged in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_16_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h6", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Recent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-pokemondetails");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Name());
    } }, directives: [_pokemondetails_pokemondetails_component__WEBPACK_IMPORTED_MODULE_2__["PokemondetailsComponent"]], styles: ["body[_ngcontent-%COMP%] {\r\n  background-color: #f9f9fa;\r\n}\r\n\r\n.user-card-full[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  border-radius: 5px;\r\n  box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.08);\r\n  border: none;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.m-r-0[_ngcontent-%COMP%] {\r\n  margin-right: 0px;\r\n}\r\n\r\n.m-l-0[_ngcontent-%COMP%] {\r\n  margin-left: 0px;\r\n}\r\n\r\n.user-card-full[_ngcontent-%COMP%]   .user-profile[_ngcontent-%COMP%] {\r\n  border-radius: 5px 0 0 5px;\r\n}\r\n\r\n.bg-c-lite-green[_ngcontent-%COMP%] {\r\n  background: linear-gradient(to right, #d3a203, #a57806);\r\n}\r\n\r\n.user-profile[_ngcontent-%COMP%] {\r\n  padding: 20px 0;\r\n}\r\n\r\n\r\n\r\n.m-b-25[_ngcontent-%COMP%] {\r\n  margin-bottom: 25px;\r\n}\r\n\r\n.img-radius[_ngcontent-%COMP%] {\r\n  border-radius: 5px;\r\n}\r\n\r\nh6[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   .card-block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  line-height: 25px;\r\n}\r\n\r\n@media only screen and (min-width: 1400px) {\r\n  p[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n  }\r\n}\r\n\r\n.card-block[_ngcontent-%COMP%] {\r\n  padding: 1.25rem;\r\n}\r\n\r\n.b-b-default[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid #e0e0e0;\r\n}\r\n\r\n.m-b-20[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.p-b-5[_ngcontent-%COMP%] {\r\n  padding-bottom: 5px !important;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   .card-block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  line-height: 25px;\r\n}\r\n\r\n.m-b-10[_ngcontent-%COMP%] {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.text-muted[_ngcontent-%COMP%] {\r\n  color: #919aa3 !important;\r\n}\r\n\r\n.b-b-default[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid #e0e0e0;\r\n}\r\n\r\n.f-w-600[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n}\r\n\r\n.m-b-20[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n\r\n\r\n.p-b-5[_ngcontent-%COMP%] {\r\n  padding-bottom: 5px !important;\r\n}\r\n\r\n.m-b-10[_ngcontent-%COMP%] {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.m-t-40[_ngcontent-%COMP%] {\r\n  margin-top: 20px;\r\n}\r\n\r\n.user-card-full[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n}\r\n\r\n.user-card-full[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n  margin: 0 10px 0 0;\r\n  transition: all 0.3s ease-in-out;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUVsQixnREFBZ0Q7RUFDaEQsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQVFFLHVEQUF1RDtBQUN6RDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7O0dBRUc7O0FBRUg7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7O0dBRUc7O0FBRUg7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBRWxCLGdDQUFnQztBQUNsQyIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWZhO1xyXG59XHJcblxyXG4udXNlci1jYXJkLWZ1bGwge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAyMHB4IDAgcmdiYSg2OSwgOTAsIDEwMCwgMC4wOCk7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMjBweCAwIHJnYmEoNjksIDkwLCAxMDAsIDAuMDgpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4ubS1yLTAge1xyXG4gIG1hcmdpbi1yaWdodDogMHB4O1xyXG59XHJcblxyXG4ubS1sLTAge1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi51c2VyLWNhcmQtZnVsbCAudXNlci1wcm9maWxlIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHggMCAwIDVweDtcclxufVxyXG5cclxuLmJnLWMtbGl0ZS1ncmVlbiB7XHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChcclxuICAgIGxpbmVhcixcclxuICAgIGxlZnQgdG9wLFxyXG4gICAgcmlnaHQgdG9wLFxyXG4gICAgZnJvbSgjZTY5ZTMyKSxcclxuICAgIHRvKCNjMDhkMGMpXHJcbiAgKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNkM2EyMDMsICNhNTc4MDYpO1xyXG59XHJcblxyXG4udXNlci1wcm9maWxlIHtcclxuICBwYWRkaW5nOiAyMHB4IDA7XHJcbn1cclxuXHJcbi8qIC5jYXJkLWJsb2NrIHtcclxuICBwYWRkaW5nOiAxLjI1cmVtO1xyXG59ICovXHJcblxyXG4ubS1iLTI1IHtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcblxyXG4uaW1nLXJhZGl1cyB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG5oNiB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uY2FyZCAuY2FyZC1ibG9jayBwIHtcclxuICBsaW5lLWhlaWdodDogMjVweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDAwcHgpIHtcclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbn1cclxuXHJcbi5jYXJkLWJsb2NrIHtcclxuICBwYWRkaW5nOiAxLjI1cmVtO1xyXG59XHJcblxyXG4uYi1iLWRlZmF1bHQge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBlMGUwO1xyXG59XHJcblxyXG4ubS1iLTIwIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4ucC1iLTUge1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhcmQgLmNhcmQtYmxvY2sgcCB7XHJcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi5tLWItMTAge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi50ZXh0LW11dGVkIHtcclxuICBjb2xvcjogIzkxOWFhMyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYi1iLWRlZmF1bHQge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBlMGUwO1xyXG59XHJcblxyXG4uZi13LTYwMCB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLm0tYi0yMCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLyogLm0tdC00MCB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufSAqL1xyXG5cclxuLnAtYi01IHtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tLWItMTAge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5tLXQtNDAge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi51c2VyLWNhcmQtZnVsbCAuc29jaWFsLWxpbmsgbGkge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLnVzZXItY2FyZC1mdWxsIC5zb2NpYWwtbGluayBsaSBhIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbWFyZ2luOiAwIDEwcHggMCAwO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "XiKh":
/*!*******************************************!*\
  !*** ./src/app/pkoemons/pokemons.page.ts ***!
  \*******************************************/
/*! exports provided: PokemonPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonPage", function() { return PokemonPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _pokemon_list_pokemon_list_componenet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pokemon-list/pokemon-list-componenet */ "irdE");
/* harmony import */ var _pokemon_selected_pokemon_selected_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pokemon-selected/pokemon-selected.component */ "jw7R");



class PokemonPage {
}
PokemonPage.ɵfac = function PokemonPage_Factory(t) { return new (t || PokemonPage)(); };
PokemonPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PokemonPage, selectors: [["app-pokemons"]], decls: 3, vars: 0, consts: [[1, "main-content"]], template: function PokemonPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-pokemon-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-pokemon-selected");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_pokemon_list_pokemon_list_componenet__WEBPACK_IMPORTED_MODULE_1__["PokemonListComponent"], _pokemon_selected_pokemon_selected_component__WEBPACK_IMPORTED_MODULE_2__["PokemonSelectedCompnent"]], styles: [".main-content[_ngcontent-%COMP%] {\r\n  border: solid 2px chartreuse;\r\n  display: grid;\r\n  grid-template-columns: 16fr 4fr;\r\n  background-color: rgb(255, 196, 0);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBva2Vtb25zLnBhZ2UuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQTRCO0VBQzVCLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0Isa0NBQWtDO0FBQ3BDIiwiZmlsZSI6InBva2Vtb25zLnBhZ2UuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGVudCB7XHJcbiAgYm9yZGVyOiBzb2xpZCAycHggY2hhcnRyZXVzZTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTZmciA0ZnI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTk2LCAwKTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _pokemon_list_pokemon_list_componenet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pokemon-list/pokemon-list-componenet */ "irdE");
/* harmony import */ var _pokemon_selected_pokemon_selected_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pokemon-selected/pokemon-selected.component */ "jw7R");
/* harmony import */ var _pokemon_list_item_pokemon_list_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pokemon-list-item/pokemon-list-item.component */ "3cht");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _contact_create_contact_create_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact-create/contact-create.page */ "26fR");
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header */ "IHLL");
/* harmony import */ var _pkoemons_pokemons_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pkoemons/pokemons.page */ "XiKh");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _pokemondetails_pokemondetails_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pokemondetails/pokemondetails.component */ "Njky");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");
















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutnigMudule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_12__["NgxPaginationModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _pokemon_list_pokemon_list_componenet__WEBPACK_IMPORTED_MODULE_4__["PokemonListComponent"],
        _pokemon_selected_pokemon_selected_component__WEBPACK_IMPORTED_MODULE_5__["PokemonSelectedCompnent"],
        _pokemon_list_item_pokemon_list_item_component__WEBPACK_IMPORTED_MODULE_6__["PokemonListItemComponent"],
        _contact_create_contact_create_page__WEBPACK_IMPORTED_MODULE_8__["ContactCreatePage"],
        _header_header__WEBPACK_IMPORTED_MODULE_9__["Header"],
        _pkoemons_pokemons_page__WEBPACK_IMPORTED_MODULE_10__["PokemonPage"],
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"],
        _pokemondetails_pokemondetails_component__WEBPACK_IMPORTED_MODULE_14__["PokemondetailsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutnigMudule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_12__["NgxPaginationModule"]] }); })();


/***/ }),

/***/ "eUsH":
/*!*****************************************************!*\
  !*** ./src/app/services/pokemon-pokemon.service.ts ***!
  \*****************************************************/
/*! exports provided: SelectedPokemonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedPokemonService", function() { return SelectedPokemonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SelectedPokemonService {
    constructor() {
        this._storage = [];
        this._pokemons = [];
        this._pokemon = null;
    }
    setPokemon(pokemon) {
        this._pokemon = pokemon;
        this._pokemons.push(this._pokemon);
        localStorage.setItem('pokemon', JSON.stringify(this._pokemons));
        // localStorage.setItem("pokemon", JSON.stringify(this._contacts))
    }
    pokemon() {
        return this._pokemon;
    }
}
SelectedPokemonService.ɵfac = function SelectedPokemonService_Factory(t) { return new (t || SelectedPokemonService)(); };
SelectedPokemonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SelectedPokemonService, factory: SelectedPokemonService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "irdE":
/*!*********************************************************!*\
  !*** ./src/app/pokemon-list/pokemon-list-componenet.ts ***!
  \*********************************************************/
/*! exports provided: PokemonListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonListComponent", function() { return PokemonListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_pokemon_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/pokemon.service */ "V4cV");
/* harmony import */ var _services_pokemon_pokemon_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/pokemon-pokemon.service */ "eUsH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pokemon_list_item_pokemon_list_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pokemon-list-item/pokemon-list-item.component */ "3cht");





function PokemonListComponent_app_pokemon_list_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-pokemon-list-item", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clicked", function PokemonListComponent_app_pokemon_list_item_1_Template_app_pokemon_list_item_clicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.handleContactClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pokemon_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pokemon", pokemon_r1);
} }
class PokemonListComponent {
    constructor(pokemontService, selectedPokemonService) {
        this.pokemontService = pokemontService;
        this.selectedPokemonService = selectedPokemonService;
        this._pokemons = [];
        this.page = 1;
        this._error = '';
    }
    ngOnInit() {
        this.pokemontService.getPokemons()
            .subscribe((response) => {
            this.totalpokemons = response.count;
            response.results.forEach((result) => {
                this.pokemontService.getMoreData(result.name)
                    .subscribe((response) => {
                    this._pokemons.push(response);
                    console.log(this._pokemons);
                });
            });
        });
    }
    get pokemons() {
        return this._pokemons;
    }
    handleContactClick(pokemon) {
        this.selectedPokemonService.setPokemon(pokemon);
    }
}
PokemonListComponent.ɵfac = function PokemonListComponent_Factory(t) { return new (t || PokemonListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_pokemon_service__WEBPACK_IMPORTED_MODULE_1__["PokemonsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_pokemon_pokemon_service__WEBPACK_IMPORTED_MODULE_2__["SelectedPokemonService"])); };
PokemonListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PokemonListComponent, selectors: [["app-pokemon-list"]], decls: 3, vars: 1, consts: [[1, "pokemon-list"], [3, "pokemon", "clicked", 4, "ngFor", "ngForOf"], [3, "pokemon", "clicked"]], template: function PokemonListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PokemonListComponent_app_pokemon_list_item_1_Template, 1, 1, "app-pokemon-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pokemons);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _pokemon_list_item_pokemon_list_item_component__WEBPACK_IMPORTED_MODULE_4__["PokemonListItemComponent"]], styles: [".pokemon-list[_ngcontent-%COMP%] {\r\n  background-color: bisque;\r\n  display: grid;\r\n  grid-gap: 16px;\r\n  padding: 20px;\r\n  grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));\r\n}\r\n.pokemon-list[_ngcontent-%COMP%]   .boxs[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 300px;\r\n  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.3);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBva2Vtb24tbGlzdC1jb21wb25lbmV0LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0dBR0c7QUFDSDtFQUNFLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsY0FBYztFQUNkLGFBQWE7RUFDYix5REFBeUQ7QUFDM0Q7QUFDQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsMENBQTBDO0FBQzVDIiwiZmlsZSI6InBva2Vtb24tbGlzdC1jb21wb25lbmV0LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5jb250YWN0LWxpc3Qge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMDtcclxufSAqL1xyXG4ucG9rZW1vbi1saXN0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLWdhcDogMTZweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAlLCAxZnIpKTtcclxufVxyXG4ucG9rZW1vbi1saXN0IC5ib3hzIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIGJveC1zaGFkb3c6IDFweCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "jw7R":
/*!****************************************************************!*\
  !*** ./src/app/pokemon-selected/pokemon-selected.component.ts ***!
  \****************************************************************/
/*! exports provided: PokemonSelectedCompnent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonSelectedCompnent", function() { return PokemonSelectedCompnent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_pokemon_pokemon_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/pokemon-pokemon.service */ "eUsH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function PokemonSelectedCompnent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pokemon_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pokemon_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", pokemon_r1 == null ? null : pokemon_r1.sprites.back_default, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class PokemonSelectedCompnent {
    constructor(selectedPokemonService) {
        this.selectedPokemonService = selectedPokemonService;
    }
    get pokemon() {
        return this.selectedPokemonService.pokemon();
    }
    getdata() {
        return JSON.parse(localStorage.getItem('pokemon'));
    }
    Name() {
        return localStorage.getItem('username');
    }
}
PokemonSelectedCompnent.ɵfac = function PokemonSelectedCompnent_Factory(t) { return new (t || PokemonSelectedCompnent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_pokemon_pokemon_service__WEBPACK_IMPORTED_MODULE_1__["SelectedPokemonService"])); };
PokemonSelectedCompnent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PokemonSelectedCompnent, selectors: [["app-pokemon-selected"]], decls: 4, vars: 1, consts: [[1, "row"], ["class", "column", 4, "ngFor", "ngForOf"], [1, "column"], ["alt", "", 3, "src"]], template: function PokemonSelectedCompnent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Your Collection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PokemonSelectedCompnent_div_3_Template, 4, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getdata());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".column[_ngcontent-%COMP%] {\r\n  margin-left: 1em;\r\n  border: 1px solid sandybrown;\r\n  float: left;\r\n  width: 33.33%;\r\n  padding: 1em;\r\n}\r\n\r\n.row[_ngcontent-%COMP%]::after {\r\n  content: \"\";\r\n  clear: both;\r\n  display: table;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBva2Vtb24tc2VsZWN0ZWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvRUFBb0U7QUFDcEU7RUFDRSxnQkFBZ0I7RUFDaEIsNEJBQTRCO0VBQzVCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsWUFBWTtBQUNkO0FBRUEsd0NBQXdDO0FBQ3hDO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxjQUFjO0FBQ2hCIiwiZmlsZSI6InBva2Vtb24tc2VsZWN0ZWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFRocmVlIGltYWdlIGNvbnRhaW5lcnMgKHVzZSAyNSUgZm9yIGZvdXIsIGFuZCA1MCUgZm9yIHR3bywgZXRjKSAqL1xyXG4uY29sdW1uIHtcclxuICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHNhbmR5YnJvd247XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDMzLjMzJTtcclxuICBwYWRkaW5nOiAxZW07XHJcbn1cclxuXHJcbi8qIENsZWFyIGZsb2F0cyBhZnRlciBpbWFnZSBjb250YWluZXJzICovXHJcbi5yb3c6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGNsZWFyOiBib3RoO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "kWWo":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 10, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-warning"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavAltMarkup", "aria-controls", "navbarNavAltMarkup", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], ["href", "", 1, "nav-item", "nav-link", "active"], [1, "sr-only"], ["href", "/profile", 1, "nav-item", "nav-link"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutnigMudule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutnigMudule", function() { return AppRoutnigMudule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _contact_create_contact_create_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-create/contact-create.page */ "26fR");
/* harmony import */ var _pokemon_selected_pokemon_selected_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pokemon-selected/pokemon-selected.component */ "jw7R");
/* harmony import */ var _pkoemons_pokemons_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pkoemons/pokemons.page */ "XiKh");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");
/* harmony import */ var _user_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.guard */ "14z+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'create'
    },
    {
        path: 'create',
        component: _contact_create_contact_create_page__WEBPACK_IMPORTED_MODULE_1__["ContactCreatePage"]
    },
    {
        path: 'pokemon', component: _pkoemons_pokemons_page__WEBPACK_IMPORTED_MODULE_3__["PokemonPage"], canActivate: [_user_guard__WEBPACK_IMPORTED_MODULE_5__["UserGuard"]]
    },
    {
        path: 'selected', component: _pokemon_selected_pokemon_selected_component__WEBPACK_IMPORTED_MODULE_2__["PokemonSelectedCompnent"], canActivate: [_user_guard__WEBPACK_IMPORTED_MODULE_5__["UserGuard"]]
    },
    {
        path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"], canActivate: [_user_guard__WEBPACK_IMPORTED_MODULE_5__["UserGuard"]]
    }
];
class AppRoutnigMudule {
}
AppRoutnigMudule.ɵfac = function AppRoutnigMudule_Factory(t) { return new (t || AppRoutnigMudule)(); };
AppRoutnigMudule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutnigMudule });
AppRoutnigMudule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutnigMudule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map