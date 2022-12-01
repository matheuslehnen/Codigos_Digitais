import {EventEmitter, Injectable} from '@angular/core';
import {EnderecoDto} from "../../shared/model/dto/enderecoDto";
import {Subscription} from "rxjs";
import {ApiService} from "../api/api.service";

@Injectable({
  providedIn: 'root'
})
export class ViaCepService {

  endereco: EnderecoDto;
  enderecoEmitter = new EventEmitter;
  subscription$: Subscription;

  constructor(
      private apiService : ApiService,
  ) { }

  consultaEndereco(cep: string){
    const novoCep = cep.replace(/\D/g, '');
    const verificaCepRegex = /^[0-9]{8}$/;
    const verificaMesmoNumero = /^([0-9])\1*$/;
    if (verificaCepRegex.test(novoCep) && !verificaMesmoNumero.test(novoCep)) {
      this.subscription$ = this.apiService.consultaViaCepApi(novoCep)
          .subscribe(enderecoDto => {
            this.endereco = enderecoDto
            this.enderecoEmitter.emit(this.endereco);
          })
    } else if (!verificaCepRegex.test(novoCep)) {
      console.log("Erro na consulta do cep")
    } else if (verificaMesmoNumero.test(novoCep)) {
      console.log("Erro na consulta do cep")
    }

  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}