import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SetButtonLocalStorage } from '../../interfaces/set-button-local-storage';

@Injectable({
  providedIn: 'root'
})
export class ChangeButtonConfigAnimation {
  private buttonConfigAnimation = new BehaviorSubject<SetButtonLocalStorage>({} as SetButtonLocalStorage);
  $buttonConfigAnimationVal = this.buttonConfigAnimation.asObservable();

  setButtonConfigAnimationVal(val: SetButtonLocalStorage): void{
    //console.log(val);

    this.buttonConfigAnimation.next(val);
  }
}
