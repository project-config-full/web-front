import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ChangeColorI } from '../../interfaces/change-color-i';

@Injectable({
  providedIn: 'root'
})
export class ChangeColor {
  private changeColor = new BehaviorSubject<ChangeColorI>({});
  $colorVal = this.changeColor.asObservable();

  setColorVal(val: ChangeColorI): void{
    this.changeColor.next(val);
  }
}
