import {EnderecoDto} from "./enderecoDto";

export interface ClienteDto{
    id: number;
    cpfCnpj: number;
    nome: string;
    telefone: string;
    endereco: EnderecoDto;
}
