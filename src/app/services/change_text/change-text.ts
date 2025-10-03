import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ActiveChangeTextS } from '../../interfaces/active-change-text-s';

@Injectable({
  providedIn: 'root'
})
export class ChangeText {
  private changeText = new BehaviorSubject<string>('');
  private removeText = new BehaviorSubject<string>('');

  $classChangeText = this.changeText.asObservable();
  $classRemoveText = this.removeText.asObservable();

  private activeChangeText = new BehaviorSubject<ActiveChangeTextS>({active: false, enterAndExit: false});
  private activeRemoveText = new BehaviorSubject<boolean>(false);
  private buttonIsActive = new BehaviorSubject<boolean>(false);

  $activeChangeText = this.activeChangeText.asObservable();
  $activeRemoveText = this.activeRemoveText.asObservable();
  $buttonIsActive = this.buttonIsActive.asObservable();

  setClassesText(classChange?: string, classRemove?: string){
    if(classChange){
      this.changeText.next(classChange);
    }

    if(classRemove){
      this.removeText.next(classRemove);
    }
  }

  setActiveChangeText(changeText: ActiveChangeTextS, removeText: boolean, buttonIsActive: boolean){
    this.activeChangeText.next(changeText);
    this.activeRemoveText.next(removeText);
    this.buttonIsActive.next(buttonIsActive);
  }
}
