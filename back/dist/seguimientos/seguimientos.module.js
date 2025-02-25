"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeguimientosModule = void 0;
const common_1 = require("@nestjs/common");
const seguimientos_service_1 = require("./seguimientos.service");
const seguimientos_controller_1 = require("./seguimientos.controller");
const typeorm_1 = require("@nestjs/typeorm");
const seguimiento_entity_1 = require("./entities/seguimiento.entity");
const usuarios_module_1 = require("../usuarios/usuarios.module");
let SeguimientosModule = class SeguimientosModule {
};
exports.SeguimientosModule = SeguimientosModule;
exports.SeguimientosModule = SeguimientosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([seguimiento_entity_1.Seguimiento]),
            (0, common_1.forwardRef)(() => usuarios_module_1.UsuariosModule)
        ],
        controllers: [seguimientos_controller_1.SeguimientosController],
        providers: [seguimientos_service_1.SeguimientosService],
        exports: [seguimientos_service_1.SeguimientosService],
    })
], SeguimientosModule);
//# sourceMappingURL=seguimientos.module.js.map