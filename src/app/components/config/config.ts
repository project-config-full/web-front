import { Component, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsConfig } from '../../models/buttons_config/buttons-config.model';
import { ChangeConfig } from '../../services/changeConfig/change-config';
import { Presets } from "./components/presets/presets";
import { ChangeColor } from '../../services/change_color/change-color';
import { ChangeColorI } from '../../interfaces/change-color-i';
import { Animations } from "./components/animations/animations";
import { ChangeText } from '../../services/change_text/change-text';
import { AnimationSelectedC } from '../../interfaces/animation-selected-c';

@Component({
  selector: 'app-config',
  imports: [CommonModule, Presets, Animations],
  templateUrl: './config.html',
  styleUrl: './config.scss'
})
export class Config{
  @ViewChild(Presets) presetsChild!: Presets;

  openingConfig!: boolean;
  activeResponsive: boolean = false;
  configIsOpen!: boolean;

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
    private changeTextService: ChangeText
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
  }

  buttons: ButtonsConfig[] = [
    new ButtonsConfig({
      label: "Theme",
      presets: true,
      textInButton: {
        disable: "Default",
        active: "Other"
      },
      onClick: (button: ButtonsConfig) => {
        button.changeIsActive();

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
            colorOfChange: "#C0C0C0",
            colorOfRemove: "#2c2c2c",
            colorOfTextChange: "#2c2c2c",
            colorOfTextRemove: "#C0C0C0"
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
      onClick: (button: ButtonsConfig) => button.changeIsActive()
    }),
    new ButtonsConfig({
      label: "Exchange text",
      textInButton: {
        disable: "Lorem",
        active: "Chat"
      },
      onClick: (button: ButtonsConfig) => {
        button.changeIsActive();

        this.changeTextService.setClassesText(
          this.animationSelected.change.name,
        );

        this.changeTextService.setActiveChangeText({
          changeText: {
            active: true,
            enterAndExit: this.animationSelected.change.enterAndExit
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
      onClick: (button: ButtonsConfig) => {
        button.changeIsActive();
      }
    })
  ];


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
