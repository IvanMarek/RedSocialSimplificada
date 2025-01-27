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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const usuarios_service_1 = require("../usuarios/usuarios.service");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async update(id, updateUsuarioDto) {
        const user = await this.userService.findOne(id);
        if (!user) {
            throw new common_1.HttpException('Usuario no encontrado', common_1.HttpStatus.NOT_FOUND);
        }
        if (updateUsuarioDto.contrasena) {
            const hashedPassword = await bcrypt.hash(updateUsuarioDto.contrasena, 10);
            updateUsuarioDto.contrasena = hashedPassword;
        }
        return await this.userService.update(id, updateUsuarioDto);
    }
    async register({ nombreUsuario, email, contrasena, rol, eliminado }) {
        const user = await this.userService.getemail(email);
        if (user) {
            throw new common_1.HttpException('El usuario ya existe', common_1.HttpStatus.NOT_ACCEPTABLE);
        }
        const hashedPassword = await bcrypt.hash(contrasena, 10);
        const createUserDto = {
            nombreUsuario,
            email,
            contrasena: hashedPassword,
            rol,
            eliminado
        };
        return await this.userService.create(createUserDto);
    }
    async login({ email, contrasena }) {
        const user = await this.userService.getemail(email);
        if (!user) {
            return new common_1.HttpException('Usuario no Existente', common_1.HttpStatus.NOT_FOUND);
        }
        console.log(user);
        const isPasswordValid = await bcrypt.compare(contrasena, user.contrasena);
        if (!isPasswordValid) {
            return new common_1.HttpException('Contraseña Incorrecta', common_1.HttpStatus.NOT_ACCEPTABLE);
        }
        const payload = { userId: user.usuarioId, username: user.nombreUsuario, role: user.rol, eliminado: user.eliminado };
        const token = await this.jwtService.signAsync(payload);
        return {
            token,
            username: user.nombreUsuario,
            role: user.rol
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [usuarios_service_1.UsuariosService, typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object])
], AuthService);
//# sourceMappingURL=auth.service.js.map