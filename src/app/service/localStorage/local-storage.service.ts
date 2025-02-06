import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  setConfigOpen(val: boolean){
    localStorage.setItem('configAberto', `${val}`);
  }

  setButton(button_id: string, val: boolean){
    localStorage.setItem(`${button_id}`, `${val}`);
  }

  setPrede(index_prede: number){
    localStorage.setItem('predefinido_ativo', `${index_prede}`);
  }

  setInput(input_name: string, val: string){
    localStorage.setItem(`${input_name}`, JSON.stringify(val));
  }

  setAnimation(index: number){
    localStorage.setItem('animation_ativo', `${index}`)
  }

  getConfigOpen(){
    return JSON.parse(localStorage.getItem('configAberto') ?? 'null');
  }

  getButton(button_id: string){
    return JSON.parse(localStorage.getItem(`${button_id}`) ?? 'null');
  }

  getPrede(){
    return JSON.parse(localStorage.getItem('predefinido_ativo') ?? 'null');
  }

  getInput(input_name: string){
    return JSON.parse(localStorage.getItem(`${input_name}`) ?? 'null');
  }

  getAnimation(){
    return JSON.parse(localStorage.getItem('animation_ativo') ?? 'null');
  }

}
