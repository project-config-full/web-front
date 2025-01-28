import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() { }

  setConfigOpen(val: boolean){
    localStorage.setItem('configAberto', `${val}`);
  }

  getConfigOpen(){
    return JSON.parse(localStorage.getItem('configAberto') ?? 'null');
  }

  setButton(button_id: string, val: boolean){
    localStorage.setItem(`${button_id}`, `${val}`);
  }

  getButton(button_id: string){
    return JSON.parse(localStorage.getItem(`${button_id}`) ?? 'null');
  }

  setPrede(index_prede: number){
    localStorage.setItem('predefinido_ativo', `${index_prede}`);
  }

  getPrede(){
    return JSON.parse(localStorage.getItem('predefinido_ativo') ?? 'null');
  }
}
