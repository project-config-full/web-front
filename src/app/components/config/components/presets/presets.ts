import { Component } from '@angular/core';
import { InputPresets } from '../../../../models/input_presets/input-presets';
import { FormsModule } from '@angular/forms';
import { ChangeColor } from '../../../../services/change_color/change-color';
import { ChangeColorPre } from '../../../../models/change_color_pre/change-color-pre';

@Component({
  selector: 'app-presets',
  imports: [FormsModule],
  templateUrl: './presets.html',
  styleUrl: './presets.scss'
})
export class Presets {
  constructor(private changeColorService: ChangeColor){}

  inputs: InputPresets[] = [
    new InputPresets({
      title: "Setting color",
      colorId: "color_config",
      colorInput: "#8B0000",
      changeColor: (color: string) => {
        this.changeColorService.setColorVal({
          colorConfig: color
        })
      }
    }),
    new InputPresets({
      title: "Content color",
      colorId: "color_content",
      colorInput: "#2c2c2c",
      changeColor: (color: string) => {
        this.changeColorService.setColorVal({
          colorContent: color
        })
      }
    }),
    new InputPresets({
      title: "Text color",
      colorId: "color_text",
      colorInput: "#FFFFFF",
      changeColor: (color: string) => {
        this.changeColorService.setColorVal({
          colorText: color
        });
      }
    }),
    new InputPresets({
      title: "Settings icon color",
      colorId: "color_icon",
      colorInput: "#000000",
      changeColor: (color: string) => {
        this.changeColorService.setColorVal({
          colorIcon: color
        });
      }
    })
  ];

  presets: ChangeColorPre[] = [
    new ChangeColorPre({
      title: "Copper & Lime",
      colorConfig: "#5ACF5D",
      colorContent: "#B87333",
      colorText: "#833434",
      colorIcon: "#873408",
      colorAllButton: {
        circleColor: "#ad8500ff",
        active: {
          buttonColor: "#573105ff",
          textColor: "#945c1bff",
        },
        inactive: {
          buttonColor: "#945c1bff",
          textColor: "#573105ff",
        }
      }
    }),
    new ChangeColorPre({
      title: "Violet Candy",
      colorConfig: "#FF69B4",
      colorContent: "#800080",
      colorText: "#FF006F",
      colorIcon: "#E9AEF9",
      colorAllButton: {
        circleColor: "#6111c9ff",
        active: {
          buttonColor: "#A909E8",
          textColor: "#E3009B",
        },
        inactive: {
          buttonColor: "#E3009B",
          textColor: "#A909E8",
        }
      }
    }),
    new ChangeColorPre({
      title: "Steel & Silver",
      colorConfig: "#4682B4",
      colorContent: "#C0C0C0",
      colorText: "#000000",
      colorIcon: "#3E2723",
      colorAllButton: {
        circleColor: "#3E2723",
        active: {
          buttonColor: "#277679ff",
          textColor: "#78a9b1ff",
        },
        inactive: {
          buttonColor: "#78a9b1ff",
          textColor: "#277679ff",
        }
      }
    })
  ];
}
