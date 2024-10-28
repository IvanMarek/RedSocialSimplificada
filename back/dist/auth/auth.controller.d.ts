import { AuthService } from './auth.service';
import { CreateUsuarioDto } from 'src/usuarios/dto/create-usuario.dto';
import { loginDto } from './dto/login.dto';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { UpdateUsuarioDto } from 'src/usuarios/dto/update-usuario.dto';
export declare class AuthController {
    private readonly authService;
    private readonly usuarioService;
    constructor(authService: AuthService, usuarioService: UsuariosService);
    register(registerDto: CreateUsuarioDto): Promise<any>;
    login(loginDto: loginDto): Promise<any>;
    findAll(): any;
    findOne(id: string): any;
    update(id: string, updateUsuarioDto: UpdateUsuarioDto): Promise<import("../usuarios/entities/usuario.entity").Usuario>;
}
