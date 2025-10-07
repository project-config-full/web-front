import { Injectable } from '@angular/core';
import { SetButtonLocalStorage } from '../../interfaces/set-button-local-storage';

@Injectable({
  providedIn: 'root'
})
export class LocalStorage {
  setActiveButtons(val: SetButtonLocalStorage): void{
    const buttonsLS = localStorage.getItem('buttons');
    let buttonsToJson: SetButtonLocalStorage[] = [];

    if(!buttonsLS){
      buttonsToJson.push(val);
      localStorage.setItem("buttons", JSON.stringify(buttonsToJson));
      return;
    };

    const buttons = JSON.parse(buttonsLS);

    if(!buttons.find((button: SetButtonLocalStorage) => button.indexOfButton === val.indexOfButton)){
      buttons.push(val);
    }

    buttons.forEach((button: SetButtonLocalStorage, i: number) => {
      if(i !== val.indexOfButton) return;

      button.isActive = val.isActive;
    });

    localStorage.setItem("buttons", JSON.stringify(buttons));
  }

  getActiveButtons(): SetButtonLocalStorage[]{
    return JSON.parse(localStorage.getItem("buttons") || "[]");
  }
}
