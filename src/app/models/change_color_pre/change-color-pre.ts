import { ChangeColorI } from "../../interfaces/change-color-i";
import { ChangeColor } from '../../services/change_color/change-color';

export interface ChangeColorPreInteraface extends ChangeColorI{
  title: string;
  changeColorService: ChangeColor;
}

export class ChangeColorPre {
  title: string;
  colorConfig: string;
  colorContent: string;
  colorText: string;
  colorIcon: string;
  colorAllButton: ChangeColorI["colorAllButton"];
  animationText: ChangeColorI["animationText"];
  changeColorService: ChangeColor;

  constructor(val: ChangeColorPreInteraface){
    this.title = val.title;
    this.colorConfig = val.colorConfig!;
    this.colorContent = val.colorContent!;
    this.colorText = val.colorText!;
    this.colorIcon = val.colorIcon!;
    this.colorAllButton = val.colorAllButton!;
    this.animationText = val.animationText!;
    this.changeColorService = val.changeColorService;
  }

  onClick(){
    this.changeColorService.setColorVal({
      colorConfig: this.colorConfig,
      colorContent: this.colorContent,
      colorText: this.colorText,
      colorIcon: this.colorIcon,
      colorAllButton: this.colorAllButton,
      animationText: this.animationText
    });
  }
}
