import { CreateSeguimientoDto } from './dto/create-seguimiento.dto';
import { Repository } from 'typeorm';
import { Seguimiento } from './entities/seguimiento.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
export declare class SeguimientosService {
    private readonly seguimientoRepository;
    private readonly usuarioRepository;
    constructor(seguimientoRepository: Repository<Seguimiento>, usuarioRepository: Repository<Usuario>);
    seguir(createSeguimientoDto: CreateSeguimientoDto): Promise<Seguimiento>;
    dejarDeSeguir(seguidorId: number, seguidoId: number): Promise<void>;
    findAll(): Promise<Seguimiento[]>;
}
