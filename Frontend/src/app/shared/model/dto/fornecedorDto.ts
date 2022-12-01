import {EnderecoDto} from "./enderecoDto";

export interface FornecedorDto{
    id: number;
    cpfCnpj: number;
    nome: string;
    telefone: string;
    endereco: EnderecoDto;
}
