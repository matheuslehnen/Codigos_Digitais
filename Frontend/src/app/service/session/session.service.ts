import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {


  private sessionStorage: Storage;

  constructor() {
    this.sessionStorage = window.sessionStorage;
  }

  set(key: string, value: any): boolean {
    if (this.sessionStorage) {
      this.sessionStorage.setItem(key, JSON.stringify(value));
      return true;
    }
    return false;
  }

  get(key: string): any {
    if (this.sessionStorage) {
      let stringItem = this.sessionStorage.getItem(key);
      let item = stringItem !== null ? JSON.parse(stringItem) : '';
      return item;
    }
    return null;
  }

  remove(key: string): boolean {
    if (this.sessionStorage) {
      this.sessionStorage.removeItem(key);
      return true;
    }
    return false;
  }

  clear(): boolean {
    if (this.sessionStorage) {
      this.sessionStorage.clear();
      return true;
    }
    return false;
  }

  savingOnSession(usuario : any){
    if (usuario){
      sessionStorage.setItem('usuario_id', JSON.stringify(usuario.id));
      sessionStorage.setItem('isLoggedIn', 'true');
    }
  }
}
