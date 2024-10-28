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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeguimientosController = void 0;
const common_1 = require("@nestjs/common");
const seguimientos_service_1 = require("./seguimientos.service");
const create_seguimiento_dto_1 = require("./dto/create-seguimiento.dto");
let SeguimientosController = class SeguimientosController {
    constructor(seguimientosService) {
        this.seguimientosService = seguimientosService;
    }
    async create(createSeguimientoDto) {
        return await this.seguimientosService.seguir(createSeguimientoDto);
    }
    async dejarDeSeguir(body) {
        return await this.seguimientosService.dejarDeSeguir(body.seguidorId, body.seguidoId);
    }
    async findAll() {
        return await this.seguimientosService.findAll();
    }
};
exports.SeguimientosController = SeguimientosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_seguimiento_dto_1.CreateSeguimientoDto]),
    __metadata("design:returntype", Promise)
], SeguimientosController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('dejar-de-seguir'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SeguimientosController.prototype, "dejarDeSeguir", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SeguimientosController.prototype, "findAll", null);
exports.SeguimientosController = SeguimientosController = __decorate([
    (0, common_1.Controller)('seguimientos'),
    __metadata("design:paramtypes", [seguimientos_service_1.SeguimientosService])
], SeguimientosController);
//# sourceMappingURL=seguimientos.controller.js.map