"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var data_service_1 = require('../lastFm/data.service');
require('YTapi.js');
var PlaylistComponent = (function () {
    function PlaylistComponent(service) {
        this.service = service;
    }
    PlaylistComponent.prototype.playSong = function (url) {
        new changeSong(url);
    };
    PlaylistComponent.prototype.deleteSong = function (url, i) {
        this.playlist.splice(i, 1);
        this.service.deleteSong(url).subscribe(function (res) { return console.log(res); }, function (err) { return console.log(err); });
    };
    PlaylistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getList().subscribe(function (res) { return _this.playlist = res; }, function (err) { return console.log(err); });
    };
    PlaylistComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'playlist',
            templateUrl: 'playlist.component.html',
            styleUrls: ['playlist.style.css']
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService])
    ], PlaylistComponent);
    return PlaylistComponent;
}());
exports.PlaylistComponent = PlaylistComponent;
//# sourceMappingURL=playlist.component.js.map