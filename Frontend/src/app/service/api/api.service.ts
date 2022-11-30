import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, EMPTY, Observable, take} from "rxjs";
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

  constructor(private http: HttpClient)
  { }

  usuarioLogin(formData: any): Observable<any> {
    return this.http.post<any>(environment.url + '/api/acesso', formData)
        .pipe(
            take(1),
            catchError(error => {
              console.log(error)
              return EMPTY;
            })
        );
  }

  getAllUsers(){
      return this.http.get<Response>(environment.url + '/api/acesso')
          .pipe(
              take(1),
              catchError(error => {
                  console.log(error)
                  return EMPTY;
              })
          );
  }
}
