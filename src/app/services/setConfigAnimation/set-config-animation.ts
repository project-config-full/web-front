import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SetConfigAnimation {
  private configAnimation = new BehaviorSubject<string>('');
  $confgiAnimation = this.configAnimation.asObservable();

  setConfigAnimation(val: string): void{
    this.configAnimation.next(val);
  }
}
