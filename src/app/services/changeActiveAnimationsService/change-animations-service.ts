import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ChangeActiveAnimations } from '../../interfaces/change-active-animations';

@Injectable({
  providedIn: 'root'
})
export class ChangeAnimationsService {
  private animations = new BehaviorSubject<ChangeActiveAnimations>({} as ChangeActiveAnimations);
  $animations = this.animations.asObservable();

  setChangeActiveAnimations(animations: ChangeActiveAnimations): void {
    this.animations.next(animations);
  }
}
