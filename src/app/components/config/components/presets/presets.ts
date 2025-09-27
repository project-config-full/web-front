import { Component } from '@angular/core';
import { InputPresets } from '../../../../models/input_presets/input-presets';
import { FormsModule } from '@angular/forms';
import { ChangeColor } from '../../../../services/change_color/change-color';

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
}
