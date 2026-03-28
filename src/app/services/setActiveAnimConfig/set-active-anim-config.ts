import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SetActiveAnimConfigParams } from '../../interfaces/set-active-anim-config-params';

@Injectable({
  providedIn: 'root'
})
export class SetActiveAnimConfig {
  private activeAnimConfig = new BehaviorSubject<SetActiveAnimConfigParams>({} as SetActiveAnimConfigParams);
  $activeAnimConfig = this.activeAnimConfig.asObservable();

  setActiveAnimConfig(animConfig: SetActiveAnimConfigParams): void {
    this.activeAnimConfig.next(animConfig);
  }
}
