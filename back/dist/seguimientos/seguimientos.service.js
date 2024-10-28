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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeguimientosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const seguimiento_entity_1 = require("./entities/seguimiento.entity");
const usuario_entity_1 = require("../usuarios/entities/usuario.entity");
let SeguimientosService = class SeguimientosService {
    constructor(seguimientoRepository, usuarioRepository) {
        this.seguimientoRepository = seguimientoRepository;
        this.usuarioRepository = usuarioRepository;
    }
    async seguir(createSeguimientoDto) {
        const { seguidorId, seguidoId } = createSeguimientoDto;
        const seguidor = await this.usuarioRepository.findOne({ where: { usuarioId: seguidorId } });
        const seguido = await this.usuarioRepository.findOne({ where: { usuarioId: seguidoId } });
        if (!seguidor || !seguido) {
            throw new common_1.NotFoundException('Usuario no encontrado');
        }
        const nuevoSeguimiento = this.seguimientoRepository.create({
            seguidorId: seguidorId,
            seguidoId: seguidoId,
        });
        return await this.seguimientoRepository.save(nuevoSeguimiento);
    }
    async dejarDeSeguir(seguidorId, seguidoId) {
        const seguimiento = await this.seguimientoRepository.findOne({
            where: {
                seguidorId: seguidorId,
                seguidoId: seguidoId,
            },
        });
        console.log(seguimiento);
        if (!seguimiento) {
            throw new common_1.NotFoundException('No se encontró el seguimiento');
        }
        await this.seguimientoRepository.remove(seguimiento);
    }
    async findAll() {
        return await this.seguimientoRepository.find();
    }
};
exports.SeguimientosService = SeguimientosService;
exports.SeguimientosService = SeguimientosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(seguimiento_entity_1.Seguimiento)),
    __param(1, (0, typeorm_1.InjectRepository)(usuario_entity_1.Usuario)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object])
], SeguimientosService);
//# sourceMappingURL=seguimientos.service.js.map