"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const usuarios_module_1 = require("./usuarios/usuarios.module");
const auth_service_1 = require("./auth/auth.service");
const auth_controller_1 = require("./auth/auth.controller");
const auth_module_1 = require("./auth/auth.module");
const seguimientos_module_1 = require("./seguimientos/seguimientos.module");
const usuario_entity_1 = require("./usuarios/entities/usuario.entity");
const seguimiento_entity_1 = require("./seguimientos/entities/seguimiento.entity");
const perfil_module_1 = require("./perfil/perfil.module");
const perfil_entity_1 = require("./perfil/entities/perfil.entity");
const platform_express_1 = require("@nestjs/platform-express");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3305,
                username: 'root',
                password: 'Ivan08012000@',
                database: 'usuarios',
                synchronize: true,
                entities: [usuario_entity_1.Usuario, seguimiento_entity_1.Seguimiento, perfil_entity_1.Perfil],
            }),
            usuarios_module_1.UsuariosModule,
            auth_module_1.AuthModule,
            seguimientos_module_1.SeguimientosModule,
            perfil_module_1.PerfilModule,
            platform_express_1.MulterModule.register({
                limits: { fileSize: 10 * 1024 * 1024 },
            }),
        ],
        controllers: [app_controller_1.AppController, auth_controller_1.AuthController],
        providers: [app_service_1.AppService, auth_service_1.AuthService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map