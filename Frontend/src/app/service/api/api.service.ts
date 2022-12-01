import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, EMPTY, Observable, take} from "rxjs";
import {FormGroup} from "@angular/forms";

import {AcessoDto} from "../../shared/model/dto/acessoDto";
import {environment} from "../../../environments/environment";
import {EnderecoDto} from "../../shared/model/dto/enderecoDto";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

  constructor(private http: HttpClient)
  { }

  usuarioLogin(formData: any): Observable<AcessoDto> {
    return this.http.post<AcessoDto>(environment.url + '/api/acesso', formData)
        .pipe(
            take(1),
            catchError(error => {
              console.log(error)
              return EMPTY;
            })
        );
  }

    consultaViaCepApi(cep: string): Observable<EnderecoDto>{
        return this.http.get<EnderecoDto>('https://viacep.com.br/ws/' + cep + '/json/')
            .pipe(
                take(1),
                catchError(error => {
                    console.log(error);
                    return EMPTY;
                })
            );
    }

    submitUsuarioForm(formData: FormGroup) : Observable<Response> {
        console.log(formData.value);
        return this.http.post<Response>(environment.url + '/api/usuario', JSON.stringify(formData.value))
            .pipe(
                take(1),
                catchError(error => {
                    console.log(error);
                    return EMPTY;
                })
            )
    }

    submitClienteFormGroup(formData: FormGroup) : Observable<Response> {
        console.log(formData.value);
        return this.http.post<Response>(environment.url + '/api/cliente', JSON.stringify(formData.value))
            .pipe(
                take(1),
                catchError(error => {
                    console.log(error);
                    return EMPTY;
                })
            )
    }

    submitFornecedorFormGroup(formData: FormGroup) : Observable<Response> {
        console.log(formData.value);
        return this.http.post<Response>(environment.url + '/api/fornecedor', JSON.stringify(formData.value))
            .pipe(
                take(1),
                catchError(error => {
                    console.log(error);
                    return EMPTY;
                })
            )
    }

    submitProdutoFormGroup(formData: FormGroup) : Observable<Response> {
        console.log(formData.value);
        return this.http.post<Response>(environment.url + '/api/produto', JSON.stringify(formData.value))
            .pipe(
                take(1),
                catchError(error => {
                    console.log(error);
                    return EMPTY;
                })
            )
    }

    submitOrcamentoFormGroup(formData: FormGroup) : Observable<Response> {
        console.log(formData.value);
        return this.http.post<Response>(environment.url + '/api/orcamento', JSON.stringify(formData.value))
            .pipe(
                take(1),
                catchError(error => {
                    console.log(error);
                    return EMPTY;
                })
            )
    }
}
