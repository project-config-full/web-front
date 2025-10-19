import { Component, OnInit } from '@angular/core';
import { SettingsSideModel } from '../../../../models/settings_side_model/settings-side-model';
import { SettingSide } from '../../../../services/settingSide/setting-side';
import { ChangeColor } from '../../../../services/change_color/change-color';
import { ChangeColorI } from '../../../../interfaces/change-color-i';
import { LocalStorage } from '../../../../services/localStorage/local-storage';
import { ParamsSetSideConfig } from '../../../../interfaces/params-set-side-config';

@Component({
  selector: 'app-settings-side',
  imports: [],
  templateUrl: './settings-side.html',
  styleUrl: './settings-side.scss'
})
export class SettingsSide implements OnInit{
  settings_side: SettingsSideModel[] = [];

  constructor(
    private settingSideService: SettingSide,
    private ChangeColorService: ChangeColor,
    private localStorageService: LocalStorage,
  ){
    this.settings_side = [
      new SettingsSideModel({
        colors: {
          conteudo: "#2c2c2c",
          colorIcon: "#000000",
          colorText: "#FFFFFF",
          button: {
            circleColor: "#f5deb3",
            active: {
              buttonColor: "#C0C0C0",
              textColor: "#2c2c2c"
            },
            inactive: {
              buttonColor: "#2c2c2c",
              textColor: "#C0C0C0"
            }
          }
        },
        side: 'rigth',
        settingSideService: this.settingSideService,
        localStorageService: this.localStorageService
      }),
      new SettingsSideModel({
        colors: {
          conteudo: "#2c2c2c",
          colorIcon: "#000000",
          colorText: "#FFFFFF",
          button: {
            circleColor: "#f5deb3",
            active: {
              buttonColor: "#C0C0C0",
              textColor: "#2c2c2c"
            },
            inactive: {
              buttonColor: "#2c2c2c",
              textColor: "#C0C0C0"
            }
          }
        },
        side: 'top',
        active: false,
        settingSideService: this.settingSideService,
        localStorageService: this.localStorageService
      }),
          new SettingsSideModel({
        colors: {
          conteudo: "#2c2c2c",
          colorIcon: "#000000",
          colorText: "#FFFFFF",
          button: {
            circleColor: "#f5deb3",
            active: {
              buttonColor: "#C0C0C0",
              textColor: "#2c2c2c"
            },
            inactive: {
              buttonColor: "#2c2c2c",
              textColor: "#C0C0C0"
            }
          }
        },
        side: 'bottom',
        settingSideService: this.settingSideService,
        localStorageService: this.localStorageService
      })
    ];
  }

  ngOnInit(): void {
    this.ChangeColorService.$colorVal.subscribe((val: ChangeColorI) => {
      this.settings_side.forEach((settingSide: SettingsSideModel) => {
        settingSide.colors.conteudo = val.colorContent ? val.colorContent : "#2c2c2c";
        settingSide.colors.colorIcon = val.colorIcon ? val.colorIcon : "#000000";
        settingSide.colors.button!.circleColor = val.colorAllButton?.circleColor ? val.colorAllButton.circleColor : "#f5deb3";
        settingSide.colors.button!.active.buttonColor = val.colorAllButton?.active.buttonColor ? val.colorAllButton.active.buttonColor : "#C0C0C0";
        settingSide.colors.button!.inactive.buttonColor = val.colorAllButton?.inactive.buttonColor ? val.colorAllButton.inactive.buttonColor : "#2c2c2c";
        settingSide.colors.colorText = val.colorText ? val.colorText : "#FFFFFF";
      });
    })

    const sideConfigLS: ParamsSetSideConfig = this.localStorageService.getSideConfig();

    if(!sideConfigLS) return;

    this.settings_side.forEach((settingSide: SettingsSideModel) => {
      if(settingSide.side !== sideConfigLS.vals?.side) return;

      settingSide.onClick();
    });
  }

  selectSettingSide(settingSide: SettingsSideModel): void{
    this.settings_side.forEach((settingSide: SettingsSideModel) => {
      settingSide.active = false;
    });

    settingSide.active = true;

    settingSide.onClick();
  }
}
