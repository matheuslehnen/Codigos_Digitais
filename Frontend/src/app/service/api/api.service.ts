import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, EMPTY, Observable, take} from "rxjs";
import {FormGroup} from "@angular/forms";

import {AcessoDto} from "../../shared/model/dto/acessoDto";
import {environment} from "../../../environments/environment";
import {EnderecoDto} from "../../shared/model/dto/enderecoDto";
import {ClienteDto} from "../../shared/model/dto/clienteDto";
import {FornecedorDto} from "../../shared/model/dto/fornecedorDto";
import {ProdutoDto} from "../../shared/model/dto/produtoDto";
import {OrcamentoDto} from "../../shared/model/dto/orcamentoDto";
import {UsuarioDto} from "../../shared/model/dto/usuarioDto";
import {MatSnackBar} from "@angular/material/snack-bar";


@Injectable({
    providedIn: 'root'
})
export class ApiService {


    constructor(
        private http: HttpClient,
        private snackBar: MatSnackBar
    ) {}

    submitLoginForm(formData: FormGroup): Observable<AcessoDto> {
        return this.http.post<AcessoDto>(environment.url + '/api/usuario/login', formData.value)
            .pipe(
                take(1),
                catchError(error => {
                    console.log(error)
                    return EMPTY;
                })
            );
    }

    consultaViaCepApi(cep: string): Observable<EnderecoDto> {
        return this.http.get<EnderecoDto>('https://viacep.com.br/ws/' + cep + '/json/')
            .pipe(
                take(1),
                catchError(error => {
                    this.snackBar.open('Erro ao tentar consultar o cep. Insira valores válidos');
                    return EMPTY;
                })
            );
    }

    submitUsuarioForm(formData: FormGroup): Observable<UsuarioDto> {
        return this.http.post<UsuarioDto>(environment.url + '/api/usuario', formData.value)
            .pipe(
                take(1),
                catchError(error => {
                    if(error.status == 500){
                        this.snackBar.open('Email já cadastrado');
                    }
                    return EMPTY;
                })
            )
    }

    getUsuarios() : Observable<UsuarioDto[]>{
        return this.http.get<UsuarioDto[]>(environment.url + '/api/usuario')
            .pipe(
                take(1),
                catchError(error => {
                    console.log(error);
                    return EMPTY;
                })
            )
    }

    submitClienteFormGroup(formData: FormGroup): Observable<ClienteDto> {
        return this.http.post<ClienteDto>(environment.url + '/api/cliente', formData.value)
            .pipe(
                take(1),
                catchError(error => {
                    console.log(error);
                    return EMPTY;
                })
            )
    }

    getClientes() : Observable<ClienteDto[]>{
        return this.http.get<ClienteDto[]>(environment.url + '/api/cliente')
            .pipe(
                take(1),
                catchError(error => {
                    console.log(error);
                    return EMPTY;
                })
            )
    }

    submitFornecedorFormGroup(formData: FormGroup): Observable<FornecedorDto> {
        return this.http.post<FornecedorDto>(environment.url + '/api/fornecedor', formData.value)
            .pipe(
                take(1),
                catchError(error => {
                    console.log(error);
                    return EMPTY;
                })
            )
    }

    getFornecedores() : Observable<FornecedorDto[]>{
        return this.http.get<FornecedorDto[]>(environment.url + '/api/fornecedor')
            .pipe(
                take(1),
                catchError(error => {
                    console.log(error);
                    return EMPTY;
                })
            )
    }


    submitProdutoFormGroup(formData: FormGroup): Observable<ProdutoDto> {
        return this.http.post<ProdutoDto>(environment.url + '/api/produto', formData.value)
            .pipe(
                take(1),
                catchError(error => {
                    console.log(error);
                    return EMPTY;
                })
            )
    }

    getProdutos() : Observable<ProdutoDto[]>{
        return this.http.get<ProdutoDto[]>(environment.url + '/api/produto')
            .pipe(
                take(1),
                catchError(error => {
                    console.log(error);
                    return EMPTY;
                })
            )
    }

    submitOrcamentoFormGroup(formData: FormGroup): Observable<OrcamentoDto> {
        return this.http.post<OrcamentoDto>(environment.url + '/api/orcamento', formData.value)
            .pipe(
                take(1),
                catchError(error => {
                    console.log(error);
                    return EMPTY;
                })
            )
    }


    getOrcamentos() : Observable<OrcamentoDto[]>{
        return this.http.get<OrcamentoDto[]>(environment.url + '/api/orcamento')
            .pipe(
                take(1),
                catchError(error => {
                    console.log(error);
                    return EMPTY;
                })
            )
    }

}
