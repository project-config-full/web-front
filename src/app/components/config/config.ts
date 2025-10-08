import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsConfig } from '../../models/buttons_config/buttons-config.model';
import { ChangeConfig } from '../../services/changeConfig/change-config';
import { Presets } from "./components/presets/presets";
import { ChangeColor } from '../../services/change_color/change-color';
import { ChangeColorI } from '../../interfaces/change-color-i';
import { Animations } from "./components/animations/animations";
import { ChangeText } from '../../services/change_text/change-text';
import { AnimationSelectedC } from '../../interfaces/animation-selected-c';
import { ChangeAnimationText } from '../../services/change_animation_text/change-animation-text';
import { ActiveChangeTextS } from '../../interfaces/active-change-text-s';
import { AnimationsText } from '../../models/animations_text/animations-text.model';
import { ChangeAnimationsService } from '../../services/changeActiveAnimationsService/change-animations-service';
import { LocalStorage } from '../../services/localStorage/local-storage';
import { SetButtonLocalStorage } from '../../interfaces/set-button-local-storage';

@Component({
  selector: 'app-config',
  imports: [CommonModule, Presets, Animations],
  templateUrl: './config.html',
  styleUrl: './config.scss'
})
export class Config implements OnInit{
  @ViewChild(Presets) presetsChild!: Presets;
  @ViewChild(Animations) animationsChild!: Animations;

  openingConfig!: boolean;
  activeResponsive: boolean = false;
  configIsOpen!: boolean;

  reloadButtons: boolean = false;

  animationSelected: AnimationSelectedC = {
    change: {
      name: "change_default",
      enterAndExit: false
    },
    remove: {
      name: "remove_default"
    }
  };

  constructor(
    private changeConfigService: ChangeConfig,
    private changeColorService: ChangeColor,
    private changeTextService: ChangeText,
    private changeAnimationTextService: ChangeAnimationText,
    private changeAnimationsService: ChangeAnimationsService,
    private localStorageService: LocalStorage,
  ){
    this.changeConfigService.$configVal.subscribe((val: boolean) => {
      if(!this.activeResponsive) this.openingConfig = val;

      this.configIsOpen = val;
    });

    this.changeColorService.$colorVal.subscribe((val: ChangeColorI) => {
      if(!val.colorAllButton) return;

      this.buttons.forEach(button => {
        button.changeColor(val.colorAllButton);
      });
    });

    const configIsOpenLS = localStorage.getItem('configIsOpen');
    const configIsOpenVal = configIsOpenLS ? JSON.parse(configIsOpenLS) : false;

    this.openingConfig = configIsOpenVal;
    this.configIsOpen = configIsOpenVal;

    this.changeAnimationTextService.$animations.subscribe((val: AnimationSelectedC) => {
      this.animationSelected = val;
    });
  }

  ngOnInit(): void {
    this.createButtons();
    this.changeButtonsStateLS();
  }

  private createButtons(): void{
    this.buttons = [
      new ButtonsConfig({
        label: "Theme",
        presets: true,
        textInButton: {
          disable: "Default",
          active: "Other"
        },
        localStorageService: this.localStorageService,
        onClick: (button: ButtonsConfig) => {
          button.changeIsActive(this.buttons.indexOf(button));

          if(button.isActive){
            const indexSelected = Math.floor(Math.random() * 3);
            const preset = this.presetsChild.presets[indexSelected];

            this.changeColorService.setColorVal({
              colorConfig: preset.colorConfig,
              colorContent: preset.colorContent,
              colorText: preset.colorText,
              colorIcon: preset.colorIcon,
              colorAllButton: {
                circleColor: preset.colorAllButton!.circleColor,
                active: {
                  buttonColor: preset.colorAllButton!.active.buttonColor,
                  textColor: preset.colorAllButton!.active.textColor
                },
                inactive: {
                  buttonColor: preset.colorAllButton!.inactive.buttonColor,
                  textColor: preset.colorAllButton!.inactive.textColor
                }
              },
              animationText: preset.animationText
            });

            return;
          };

          this.changeColorService.setColorVal({
            colorConfig: "darkred",
            colorContent: "#2c2c2c",
            colorText: "white",
            colorIcon: "black",
            colorAllButton: {
              circleColor: "#f5deb3",
              active: {
                buttonColor: "#C0C0C0",
                textColor: "#2c2c2c"
              },
              inactive: {
                buttonColor: "#2c2c2c",
                textColor: "#C0C0C0"
              }
            },
            animationText: {
              colorOfChange: "#2c2c2c",
              colorOfRemove: "#C0C0C0",
              colorOfTextChange: "#C0C0C0",
              colorOfTextRemove: "#2c2c2c"
            }
          })
        }
      }),
      new ButtonsConfig({
        label: "animation",
        textInButton: {
          disable: "Default",
          active: "Other"
        },
        animations: true,
        reload: true,
        localStorageService: this.localStorageService,
        onClick: (button: ButtonsConfig) => {
          button.changeIsActive(this.buttons.indexOf(button));

          const indexSelected: number = Math.floor(Math.random() * this.animationsChild.animations.length);

          if(button.isActive){
            this.animationsChild.animations.forEach((animation: AnimationsText) => {
              animation.active = false;
            });

            this.animationsChild.animations[indexSelected].active = true;

            this.animationsChild.animations[indexSelected].onClick();

            this.changeAnimationsService.setChangeActiveAnimations({
              animations: this.animationsChild.animations,
              change: true
            });

            return;
          }

          this.changeAnimationTextService.setAnimations({
            change: {
              name: "change_default"
            },
            remove: {
              name: "remove_default"
            }
          });
        }
      }),
      new ButtonsConfig({
        label: "Exchange text",
        textInButton: {
          disable: "Lorem",
          active: "Chat"
        },
        reload: true,
        localStorageService: this.localStorageService,
        onClick: (button: ButtonsConfig) => {
          button.changeIsActive(this.buttons.indexOf(button));

          this.changeReloadButtons();

          this.changeTextService.setClassesText({
            classChange: this.animationSelected.change.name,
          });

          const enterAndExitAlpha = this.animationSelected.change.enterAndExit;

          const enterAndExitProps = enterAndExitAlpha ? {
            enter: button.isActive,
            exit: !button.isActive
          } : {} as ActiveChangeTextS["enterAndExit"];

          this.changeTextService.setActiveChangeText({
            changeText: {
              active: true,
              enterAndExit: enterAndExitProps
            },
            buttonIsActive: button.isActive
          });
        }
      }),
      new ButtonsConfig({
        label: "Remove text",
        textInButton: {
          disable: "With",
          active: "Without"
        },
        reload: true,
        localStorageService: this.localStorageService,
        onClick: (button: ButtonsConfig) => {
          button.changeIsActive(this.buttons.indexOf(button));

          this.changeReloadButtons();

          this.changeTextService.setClassesText({
            classRemove: this.animationSelected.remove.name
          })

          this.changeTextService.setActiveChangeText({
            removeText: {
              changing: true,
              enter: !button.isActive,
              exit: button.isActive
            },
            buttonIsActive: button.isActive
          });
        }
      })
    ];
  }

  changeButtonsStateLS(): void{
    const buttonsLS = this.localStorageService.getActiveButtons();

    if(buttonsLS.length < 1) return;

    buttonsLS.forEach((btnLs: SetButtonLocalStorage) => {
      this.buttons.forEach((button: ButtonsConfig, i: number) => {
        if(i != btnLs.indexOfButton) return;

        button.isActive = btnLs.isActive;
      });
    });
  }

  changeReloadButtons(): void{
    this.reloadButtons = !this.reloadButtons;

    setTimeout(() => this.reloadButtons = false ,3000);
  }

  buttons: ButtonsConfig[] = [];


  @HostListener('window:resize', ['$event'])
  onResize(e: Event): void{
    const target = e.target as Window;
    const width = target.innerWidth;

    if(width < 700){
      this.activeResponsive = true;
      this.openingConfig = true;
      return;
    }

    this.activeResponsive = false;
    this.openingConfig = this.configIsOpen;
  }
}
