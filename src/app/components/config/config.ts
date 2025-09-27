import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsConfig } from '../../models/buttons_config/buttons-config.model';
import { ChangeConfig } from '../../services/changeConfig/change-config';
import { Presets } from "./components/presets/presets";

@Component({
  selector: 'app-config',
  imports: [CommonModule, Presets],
  templateUrl: './config.html',
  styleUrl: './config.scss'
})
export class Config {
  openingConfig!: boolean;
  activeResponsive: boolean = false;
  configIsOpen!: boolean;

  constructor(private changeConfigService: ChangeConfig){
    this.changeConfigService.$configVal.subscribe((val: boolean) => {
      if(!this.activeResponsive) this.openingConfig = val;

      this.configIsOpen = val;
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
      }
    }),
    new ButtonsConfig({
      label: "animation",
      textInButton: {
        disable: "Default",
        active: "Other"
      },
      onClick: (button: ButtonsConfig) => {
        button.changeIsActive();
      }
    }),
    new ButtonsConfig({
      label: "Exchange text",
      textInButton: {
        disable: "Lorem",
        active: "Chat"
      },
      onClick: (button: ButtonsConfig) => {
        button.changeIsActive();
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
