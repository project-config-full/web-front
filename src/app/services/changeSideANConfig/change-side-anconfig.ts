import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { SideEnum } from '../../models/configAnimation/config-animation';

@Injectable({
  providedIn: 'root'
})
export class ChangeSideANConfig {
  private changeSideANConfig = new BehaviorSubject<SideEnum>(SideEnum.LEFT);
  $settingSideVal = this.changeSideANConfig.asObservable();

  setSideANConfig(val: SideEnum): void{
    this.changeSideANConfig.next(val);
  }
}
