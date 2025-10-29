import { Component, OnInit } from '@angular/core';
import { AnimationsText } from '../../../../models/animations_text/animations-text.model';
import { CommonModule } from '@angular/common';
import { ChangeColor } from '../../../../services/change_color/change-color';
import { ChangeColorI } from '../../../../interfaces/change-color-i';
import { ChangeAnimationText } from '../../../../services/change_animation_text/change-animation-text';
import { ChangeActiveAnimations } from '../../../../interfaces/change-active-animations';
import { ChangeAnimationsService } from '../../../../services/changeActiveAnimationsService/change-animations-service';
import { LocalStorage } from '../../../../services/localStorage/local-storage';
import { ButtonConfigAnimation, ConfigAnimation, especialButtons, SideEnum } from '../../../../models/configAnimation/config-animation';
import { ColorsConfigAnimation } from '../../../../interfaces/colors-config-animation';
import { SetButtonLocalStorage } from '../../../../interfaces/set-button-local-storage';
import { ChangeButtonConfigAnimation } from '../../../../services/changeButtonConfigAnimation/change-button-config-animation';
import { ChangeDetectorRef } from '@angular/core';

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
  animationsConfig: ConfigAnimation[] = [];

  colorConfigAnimation: ColorsConfigAnimation = {} as ColorsConfigAnimation;

  constructor(
    private changeColor: ChangeColor,
    private changeAnimationTextService: ChangeAnimationText,
    private changeAnimationsService: ChangeAnimationsService,
    private localStorageService: LocalStorage,
    private changeButtonConfigAnimationService: ChangeButtonConfigAnimation,
    private cdr: ChangeDetectorRef
  ){
    this.changeColor.$colorVal.subscribe((color: ChangeColorI) => {
      if(color.animationText){
        this.CBGRT = color.animationText.colorOfRemove;
        this.CBGCT = color.animationText.colorOfChange;
        this.CTR = color.animationText.colorOfTextRemove;
        this.CTC = color.animationText.colorOfTextChange;
      }

      this.colorConfigAnimation.content = color.colorContent ?? this.colorConfigAnimation.content ?? "#2c2c2c";
      this.colorConfigAnimation.config = color.colorConfig ?? this.colorConfigAnimation.config ?? "darkred";
      this.colorConfigAnimation.text = color.colorText ?? this.colorConfigAnimation.text ?? "white";
      this.colorConfigAnimation.icon = color.colorIcon ?? this.colorConfigAnimation.icon ?? "black";
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
        changeAnimationText: this.changeAnimationTextService,
        localStorageService: this.localStorageService
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
        changeAnimationText: this.changeAnimationTextService,
        localStorageService: this.localStorageService
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
        changeAnimationText: this.changeAnimationTextService,
        localStorageService: this.localStorageService
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
        changeAnimationText: this.changeAnimationTextService,
        localStorageService: this.localStorageService
      })
    ];

    this.animationsConfig = [
      new ConfigAnimation({
        side: SideEnum.LEFT,
        buttons: [
          new ButtonConfigAnimation({
            active: false,
            especial: especialButtons.PRESETS,
            colors: {
              circle: "#f5deb3",
              background: {
                active: "#C0C0C0",
                inactive: "#2c2c2c"
              }
            }
          }),
          new ButtonConfigAnimation({
            active: false,
            especial: especialButtons.ANIMATION,
            colors: {
              circle: "#f5deb3",
              background: {
                active: "#C0C0C0",
                inactive: "#2c2c2c"
              }
            }
          }),
          new ButtonConfigAnimation({
            active: false,
            especial: especialButtons.SETTING_SIDE,
            colors: {
              circle: "#f5deb3",
              background: {
                active: "#C0C0C0",
                inactive: "#2c2c2c"
              }
            }
          })
        ]
      })
    ]
  }

  selectAnimation(animationSelec: AnimationsText): void{
    this.animations.forEach((animation: AnimationsText) => {
      animation.active = false;
    });

    animationSelec.active = true;

    animationSelec.onClick();
  }

  ngOnInit(): void {
    this.changeColor.$colorVal.subscribe((color: ChangeColorI) => {
      this.animationsConfig.forEach((config: ConfigAnimation) => {
        config.buttons.forEach((button: ButtonConfigAnimation) => {
          const buttonsLS = this.localStorageService.getActiveButtons();

          button.active = buttonsLS.find((buttonLS: SetButtonLocalStorage) => {
            return buttonLS.indexOfButton === config.buttons.indexOf(button);
          })?.isActive ?? false;

          button.colors.circle = color.colorAllButton?.circleColor ?? button.colors.circle;
          button.colors.background.active = color.colorAllButton?.active.buttonColor ?? button.colors.background.active;
          button.colors.background.inactive = color.colorAllButton?.inactive.buttonColor ?? button.colors.background.inactive;
        });
      });
    });

    this.changeButtonConfigAnimationService.$buttonConfigAnimationVal.subscribe((val: SetButtonLocalStorage) => {
      this.animationsConfig.forEach((config: ConfigAnimation) => {
        config.buttons.forEach((button: ButtonConfigAnimation, i: number) => {
          const buttonsLS = this.localStorageService.getActiveButtons();

          button.active = buttonsLS.find((buttonLS: SetButtonLocalStorage) => {
            return buttonLS.indexOfButton === config.buttons.indexOf(button);
          })?.isActive ?? false;
        });
      });
    });

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
