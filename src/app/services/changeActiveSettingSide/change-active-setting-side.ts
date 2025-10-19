import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ChangeActiveSettingSideInterface } from './../../interfaces/change-active-setting-side-interface';

@Injectable({
  providedIn: 'root'
})
export class ChangeActiveSettingSide {
  private settingSide = new BehaviorSubject<ChangeActiveSettingSideInterface>({} as ChangeActiveSettingSideInterface);
  $settingSide = this.settingSide.asObservable();

  setChangeActivesettingSide(settingSide: ChangeActiveSettingSideInterface): void {
    this.settingSide.next(settingSide);
  }
}
