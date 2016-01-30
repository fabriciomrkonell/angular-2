System.register(['angular2/core', './app.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, app_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_service_1_1) {
                app_service_1 = app_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_filmService) {
                    this._filmService = _filmService;
                    this.title = '';
                    this.films = this._filmService.getFilms();
                }
                AppComponent.prototype.onSelect = function (film) {
                    this.title = film.name;
                };
                AppComponent.prototype.simpleAlert = function () {
                    alert('Simple Alert!');
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        providers: [app_service_1.FilmService],
                        template: "\n  \t<h1>{{title}}</h1>\n  \t<h2>{{title}} details!</h2>\n  \t<div><label>id: </label>{{title}}</div>\n  \t<div>\n\t    <label>name: </label>\n    \t<div><input [(ngModel)]=\"title\" placeholder=\"name\"></div>\n  \t</div>\n  \t<button type=\"button\" (click)=\"simpleAlert()\">PRESS</button>\n  \t<table>\n  \t\t<tr *ngFor=\"#film of films\">\n  \t\t\t\t<td (click)=\"onSelect(film)\">{{film.name}}</td>\n  \t\t</tr>\n  \t</table>\n  "
                    }), 
                    __metadata('design:paramtypes', [app_service_1.FilmService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map