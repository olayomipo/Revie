"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Apartment = void 0;
const typeorm_1 = require("typeorm");
let Apartment = class Apartment {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn()
], Apartment.prototype, "id", void 0);
__decorate([
    typeorm_1.Column()
], Apartment.prototype, "name", void 0);
__decorate([
    typeorm_1.Column()
], Apartment.prototype, "address", void 0);
__decorate([
    typeorm_1.Column()
], Apartment.prototype, "landlord_id", void 0);
__decorate([
    typeorm_1.Column()
], Apartment.prototype, "amenities", void 0);
Apartment = __decorate([
    typeorm_1.Entity()
], Apartment);
exports.Apartment = Apartment;
//# sourceMappingURL=Apartment.js.map