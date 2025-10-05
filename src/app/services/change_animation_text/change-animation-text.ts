import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AnimationSelectedC } from '../../interfaces/animation-selected-c';

@Injectable({
  providedIn: 'root'
})
export class ChangeAnimationText {
  private animations = new BehaviorSubject<AnimationSelectedC>({} as AnimationSelectedC);
  $animations = this.animations.asObservable();

  setAnimations(animations: AnimationSelectedC) {
    this.animations.next(animations);
  }
}
