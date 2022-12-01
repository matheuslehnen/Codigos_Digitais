import {ClienteDto} from "./clienteDto";
import {FornecedorDto} from "./fornecedorDto";

export interface OrcamentoDto {
    id: number;
    cliente: ClienteDto;
    fornecedor: FornecedorDto;
    quantidade: number;
    status: string;
}
