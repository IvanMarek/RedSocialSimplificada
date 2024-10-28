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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerfilService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const perfil_entity_1 = require("./entities/perfil.entity");
let PerfilService = class PerfilService {
    constructor(perfilRepository) {
        this.perfilRepository = perfilRepository;
    }
    async create(createPerfilDto) {
        const perfil = this.perfilRepository.create(createPerfilDto);
        console.log(perfil);
        return this.perfilRepository.save(perfil);
    }
    async findAll() {
        return this.perfilRepository.find();
    }
    async findOne(id) {
        return this.perfilRepository.findOne({ where: { id } });
    }
    async update(id, updatePerfilDto) {
        await this.perfilRepository.update(id, updatePerfilDto);
        return this.findOne(id);
    }
    async remove(id) {
        await this.perfilRepository.delete(id);
    }
};
exports.PerfilService = PerfilService;
exports.PerfilService = PerfilService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(perfil_entity_1.Perfil)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], PerfilService);
//# sourceMappingURL=perfil.service.js.map