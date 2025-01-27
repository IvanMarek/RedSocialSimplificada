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
exports.UsuariosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const usuario_entity_1 = require("./entities/usuario.entity");
const typeorm_2 = require("typeorm");
let UsuariosService = class UsuariosService {
    constructor(usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }
    async create(createUsuarioDto) {
        const usuarioExistente = await this.usuarioRepository.findOne({
            where: { email: createUsuarioDto.email },
        });
        if (usuarioExistente) {
            throw new common_1.HttpException('Ya existe un usuario con ese E-mail', common_1.HttpStatus.BAD_REQUEST);
        }
        const nuevoUsuario = this.usuarioRepository.create(createUsuarioDto);
        return this.usuarioRepository.save(nuevoUsuario);
    }
    findAll() {
        return this.usuarioRepository.find();
    }
    findOne(id) {
        return this.usuarioRepository.findOneBy({ usuarioId: id });
    }
    async update(id, updateUsuarioDto) {
        const usuario = await this.usuarioRepository.findOneBy({ usuarioId: id });
        if (!usuario) {
            throw new common_1.HttpException('Usuario no encontrado', common_1.HttpStatus.NOT_FOUND);
        }
        Object.assign(usuario, updateUsuarioDto);
        return this.usuarioRepository.save(usuario);
    }
    async remove(id) {
        const usuario = await this.usuarioRepository.findOneBy({ usuarioId: id });
        if (!usuario) {
            throw new Error('usuario no encontrado');
        }
        usuario.eliminado = true;
        await this.usuarioRepository.save(usuario);
    }
    async getemail(email) {
        const userFound = await this.usuarioRepository.findOne({
            where: {
                email
            }
        });
        if (!userFound) {
            return null;
        }
        return userFound;
    }
};
exports.UsuariosService = UsuariosService;
exports.UsuariosService = UsuariosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(usuario_entity_1.Usuario)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], UsuariosService);
//# sourceMappingURL=usuarios.service.js.map