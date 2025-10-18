import { ChangeColorI } from "../../interfaces/change-color-i";

interface SettingsSideInterface {
  colors: {
    conteudo: string;
    button: ChangeColorI["colorAllButton"];
  },
  side: string;
}

export class SettingsSideModel {
  colors: SettingsSideInterface["colors"];
  side: string;

  constructor({
    colors,
    side,
  }: SettingsSideInterface){
    this.colors = colors;
    this.side = side;
  }
}
