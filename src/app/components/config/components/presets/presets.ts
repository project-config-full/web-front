import { Component, OnInit } from '@angular/core';
import { InputPresets } from '../../../../models/input_presets/input-presets';
import { FormsModule } from '@angular/forms';
import { ChangeColor } from '../../../../services/change_color/change-color';
import { ChangeColorPre } from '../../../../models/change_color_pre/change-color-pre';
import { ChangeColorI } from '../../../../interfaces/change-color-i';

@Component({
  selector: 'app-presets',
  imports: [FormsModule],
  templateUrl: './presets.html',
  styleUrl: './presets.scss'
})
export class Presets implements OnInit{
  constructor(private changeColorService: ChangeColor){
    this.changeColorService.$colorVal.subscribe((val: ChangeColorI) => {
      this.inputs[0].colorInput = val.colorConfig ? val.colorConfig : this.inputs[0].colorInput;
      this.inputs[1].colorInput = val.colorContent ? val.colorContent : this.inputs[1].colorInput;
      this.inputs[2].colorInput = val.colorText ? val.colorText : this.inputs[2].colorInput;
      this.inputs[3].colorInput = val.colorIcon ? val.colorIcon : this.inputs[3].colorInput;
    })
  }

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

  presets!: ChangeColorPre[];

  ngOnInit(): void {
    this.presets = [
      new ChangeColorPre({
        title: "Copper & Lime",
        colorConfig: "#5ACF5D",
        colorContent: "#B87333",
        colorText: "#833434",
        colorIcon: "#873408",
        colorAllButton: {
          circleColor: "#f36a1bff",
          active: {
            buttonColor: "#573105ff",
            textColor: "#945c1bff",
          },
          inactive: {
            buttonColor: "#945c1bff",
            textColor: "#573105ff",
          }
        },
        animationText: {
          colorOfChange: "#573105ff",
          colorOfRemove: "#B87333",
          colorOfTextChange: "#B87333",
          colorOfTextRemove: "#573105ff"
        },
        changeColorService: this.changeColorService
      }),
      new ChangeColorPre({
        title: "Violet Candy",
        colorConfig: "#FF69B4",
        colorContent: "#800080",
        colorText: "#FF006F",
        colorIcon: "#E9AEF9",
        colorAllButton: {
          circleColor: "#d310daff",
          active: {
            buttonColor: "#A909E8",
            textColor: "#E3009B",
          },
          inactive: {
            buttonColor: "#E3009B",
            textColor: "#A909E8",
          }
        },
        animationText: {
          colorOfChange: "#9300ceff",
          colorOfRemove: "#800080",
          colorOfTextChange: "#e30057ff",
          colorOfTextRemove: "#FF006F"
        },
        changeColorService: this.changeColorService
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
        },
        animationText: {
          colorOfChange: "#277679ff",
          colorOfRemove: "#C0C0C0",
          colorOfTextChange: "#C0C0C0",
          colorOfTextRemove: "#277679ff"
        },
        changeColorService: this.changeColorService
      })
    ];
  }
}
