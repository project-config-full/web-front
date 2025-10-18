import { Component } from '@angular/core';
import { SettingsSideModel } from '../../../../models/settings_side_model/settings-side-model';

@Component({
  selector: 'app-settings-side',
  imports: [],
  templateUrl: './settings-side.html',
  styleUrl: './settings-side.scss'
})
export class SettingsSide {
  settings_side: SettingsSideModel[] = [
    new SettingsSideModel({
      colors: {
        conteudo: "#2c2c2c",
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
      side: 'rigth'
    }),
    new SettingsSideModel({
      colors: {
        conteudo: "#2c2c2c",
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
      side: 'top'
    }),
        new SettingsSideModel({
      colors: {
        conteudo: "#2c2c2c",
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
      side: 'bottom'
    })
  ]
}
