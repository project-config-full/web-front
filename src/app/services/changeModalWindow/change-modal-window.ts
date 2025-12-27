import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class ChangeModalWindow {
  private openingModalWindow = new BehaviorSubject<boolean>(false);
  $openingModalWindow = this.openingModalWindow.asObservable();

  setOpeningModalWindow(val: boolean): void{
    this.openingModalWindow.next(val);
  }
}
