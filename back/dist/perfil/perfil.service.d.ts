import { Repository } from 'typeorm';
import { CreatePerfilDto } from './dto/create-perfil.dto';
import { UpdatePerfilDto } from './dto/update-perfil.dto';
import { Perfil } from './entities/perfil.entity';
export declare class PerfilService {
    private perfilRepository;
    constructor(perfilRepository: Repository<Perfil>);
    create(createPerfilDto: CreatePerfilDto): Promise<Perfil>;
    findAll(): Promise<Perfil[]>;
    findOne(id: number): Promise<Perfil>;
    update(id: number, updatePerfilDto: UpdatePerfilDto): Promise<Perfil>;
    remove(id: number): Promise<void>;
}
