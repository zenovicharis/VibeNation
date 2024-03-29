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
var PlayerComponent = (function () {
    function PlayerComponent() {
    }
    PlayerComponent.prototype.changePic = function (event) {
        event.target.src == "http://localhost:3000/app/components/img/play.png" ? event.target.src = "http://localhost:3000/app/components/img/playW.png" : event.target.src = "http://localhost:3000/app/components/img/play.png";
    };
    PlayerComponent.prototype.changePaus = function (event) {
        event.target.src == "http://localhost:3000/app/components/img/pause.png" ? event.target.src = "http://localhost:3000/app/components/img/pauseW.png" : event.target.src = "http://localhost:3000/app/components/img/pause.png";
    };
    PlayerComponent.prototype.pause = function () {
        new stopVideo();
    };
    PlayerComponent.prototype.play = function () {
        new playVideo();
    };
    PlayerComponent.prototype.ajustPlayer = function () {
        new setVolume(this.tone);
    };
    PlayerComponent.prototype.ngOnInit = function () { };
    PlayerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'player',
            templateUrl: 'player.component.html',
            styleUrls: ['player.style.css']
        }), 
        __metadata('design:paramtypes', [])
    ], PlayerComponent);
    return PlayerComponent;
}());
exports.PlayerComponent = PlayerComponent;
//# sourceMappingURL=player.component.js.map