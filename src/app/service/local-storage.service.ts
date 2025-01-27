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
}
