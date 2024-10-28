import { SeguimientosService } from './seguimientos.service';
import { CreateSeguimientoDto } from './dto/create-seguimiento.dto';
export declare class SeguimientosController {
    private readonly seguimientosService;
    constructor(seguimientosService: SeguimientosService);
    create(createSeguimientoDto: CreateSeguimientoDto): Promise<import("./entities/seguimiento.entity").Seguimiento>;
    dejarDeSeguir(body: {
        seguidorId: number;
        seguidoId: number;
    }): Promise<void>;
    findAll(): Promise<import("./entities/seguimiento.entity").Seguimiento[]>;
}
