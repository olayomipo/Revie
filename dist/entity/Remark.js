"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Remark = void 0;
const typeorm_1 = require("typeorm");
let Remark = class Remark {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn()
], Remark.prototype, "id", void 0);
__decorate([
    typeorm_1.Column()
], Remark.prototype, "user_id", void 0);
__decorate([
    typeorm_1.Column()
], Remark.prototype, "review_id", void 0);
__decorate([
    typeorm_1.Column()
], Remark.prototype, "helpful", void 0);
Remark = __decorate([
    typeorm_1.Entity()
], Remark);
exports.Remark = Remark;
//# sourceMappingURL=Remark.js.map