import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangeConfig {
  private changeConfig = new BehaviorSubject<boolean>(false);
  $configVal = this.changeConfig.asObservable();

  setConfigVal(val: boolean): void{
    this.changeConfig.next(val);
  }
}
