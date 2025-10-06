import { Component, OnInit } from '@angular/core';
import { AnimationsText } from '../../../../models/animations_text/animations-text.model';
import { CommonModule } from '@angular/common';
import { ChangeColor } from '../../../../services/change_color/change-color';
import { ChangeColorI } from '../../../../interfaces/change-color-i';
import { ChangeAnimationText } from '../../../../services/change_animation_text/change-animation-text';
import { ChangeActiveAnimations } from '../../../../interfaces/change-active-animations';
import { ChangeAnimationsService } from '../../../../services/changeActiveAnimationsService/change-animations-service';

@Component({
  selector: 'app-animations',
  imports: [CommonModule],
  templateUrl: './animations.html',
  styleUrl: './animations.scss'
})
export class Animations implements OnInit{
  //* CBGRT = color background remove text
  //* CBGCT = color background change text
  //* CTR = color text remove
  //* CTC = color text change

  CBGRT: string = "#C0C0C0";
  CBGCT: string = "#2c2c2c";
  CTR: string = "#000000";
  CTC: string = "#FFFFFF";

  animations: AnimationsText[] = [];

  constructor(
    private changeColor: ChangeColor,
    private changeAnimationTextService: ChangeAnimationText,
    private changeAnimationsService: ChangeAnimationsService,
  ){
    this.changeColor.$colorVal.subscribe((color: ChangeColorI) => {
      if(color.animationText){
        this.CBGRT = color.animationText.colorOfRemove;
        this.CBGCT = color.animationText.colorOfChange;
        this.CTR = color.animationText.colorOfTextRemove;
        this.CTC = color.animationText.colorOfTextChange;
      }
    });

    this.changeAnimationsService.$animations.subscribe((val: ChangeActiveAnimations) => {
      if(!val.change) return;

      this.animations = val.animations;
    });

    this.animations = [
      new AnimationsText({
        changeText: "ANCT0",
        removeText: "ANRT0",
        changeTextProprietys: {
          enter: true,
          exit: false
        },
        removeTextProprietys: {
          enter: true,
          exit: false
        },
        durationProprietys: {
          remove: 2000,
          change: 5000
        },
        changeAnimationText: this.changeAnimationTextService
      }),
      new AnimationsText({
        changeText: "ANCT1",
        removeText: "ANRT1",
        removeTextProprietys: {
          enter: true,
          exit: false
        },
        durationProprietys: {
          remove: 1900,
        },
        changeAnimationText: this.changeAnimationTextService
      }),
      new AnimationsText({
        changeText: "ANCT2",
        removeText: "ANRT2",
        removeTextProprietys: {
          enter: true,
          exit: false
        },
        durationProprietys: {
          remove: 1900,
        },
        changeAnimationText: this.changeAnimationTextService
      }),
      new AnimationsText({
        changeText: "ANCT3",
        removeText: "ANRT3",
        removeTextProprietys: {
          enter: true,
          exit: false
        },
        durationProprietys: {
          remove: 1900,
        },
        changeAnimationText: this.changeAnimationTextService
      })
    ];
  }

  selectAnimation(animationSelec: AnimationsText): void{
    this.animations.forEach((animation: AnimationsText) => {
      animation.active = false;
    });

    animationSelec.active = true;

    animationSelec.onClick();

    console.log(this.animations);
  }

  ngOnInit(): void {
    this.animations.forEach((AT: AnimationsText) => {
      if(AT.durationProprietys.change){
        setInterval(() => {
          AT.CPCT();
        }, AT.durationProprietys.change);
      }

      setInterval(() => {
        AT.CPRT();
      }, AT.durationProprietys.remove);
    })
  }
}
