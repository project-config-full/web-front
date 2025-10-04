import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ActiveChangeTextS } from '../../interfaces/active-change-text-s';
import { ParamsSetActiveChangeTextS } from '../../interfaces/params-set-active-change-text-s';
import { TextPropertiesCTS } from '../../interfaces/text-properties-cts';
import { ClassesTextChangeCTS } from '../../interfaces/classes-text-change-cts';

@Injectable({
  providedIn: 'root'
})
export class ChangeText {
  private classesTextChange = new BehaviorSubject<ClassesTextChangeCTS>({
    $classChangeText: '',
    $classRemoveText: ''
  });

  private textProperties = new BehaviorSubject<TextPropertiesCTS>({
    $activeChangeText: { active: false, enterAndExit: false },
    $activeRemoveText: { changing: false, enter: false, exit: false },
    $buttonIsActive: false
  });

  //* CTC = ChangeTextChange
  //* TP = TextProperties

  $CTCListen = this.classesTextChange.asObservable();
  $TPListen = this.textProperties.asObservable();

  setClassesText(classChange?: string, classRemove?: string){
    if(classChange){
      this.classesTextChange.next({
        $classChangeText: classChange,
      });
    }

    if(classRemove){
      this.classesTextChange.next({
        $classRemoveText: classRemove
      });
    }
  }

  setActiveChangeText({
    changeText = { active: false, enterAndExit: false },
    removeText = { changing: false, enter: false, exit: false },
    buttonIsActive
  }: ParamsSetActiveChangeTextS): void {
    this.textProperties.next({
      $activeChangeText: changeText,
      $activeRemoveText: removeText,
      $buttonIsActive: buttonIsActive
    });
  }
}
