import { ChangeColorI } from "../../interfaces/change-color-i";

interface ColorButtonInterface{
  colorAllButton: {
    circleColor: string;
    active: {
      buttonColor: string;
      textColor: string;
    },
    inactive: {
      buttonColor: string;
      textColor: string;
    }
  }
}

interface ChangeColorPreInteraface extends ChangeColorI, ColorButtonInterface{
  title: string;
}

export class ChangeColorPre {
  title: string;
  colorConfig: string;
  colorContent: string;
  colorText: string;
  colorIcon: string;
  colorAllButton: ColorButtonInterface["colorAllButton"];

  constructor(val: ChangeColorPreInteraface){
    this.title = val.title;
    this.colorConfig = val.colorConfig!;
    this.colorContent = val.colorContent!;
    this.colorText = val.colorText!;
    this.colorIcon = val.colorIcon!;
    this.colorAllButton = val.colorAllButton;
  }
}
