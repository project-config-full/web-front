import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { SettingsSideModel } from '../../models/settings_side_model/settings-side-model';

@Injectable({
  providedIn: 'root'
})
export class SettingSide {
  private changeSettingSide = new BehaviorSubject<SettingsSideModel>({} as SettingsSideModel);
  $settingSideVal = this.changeSettingSide.asObservable();

  setSettingSideVal(val: SettingsSideModel): void{
    this.changeSettingSide.next(val);
  }
}
