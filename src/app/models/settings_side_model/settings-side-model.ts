import { ChangeColorI } from "../../interfaces/change-color-i";
import { SettingSide } from "../../services/settingSide/setting-side";

interface SettingsSideInterface {
  colors: {
    conteudo: string;
    colorIcon: string;
    colorText: string;
    button: ChangeColorI["colorAllButton"];
  },
  side: string;
  active?: boolean;
  settingSideService: SettingSide;
}

export class SettingsSideModel {
  colors: SettingsSideInterface["colors"];
  side: string;
  active: boolean;

  private settingSideService: SettingSide;

  onClick(settingSide: SettingsSideModel): void{
    this.settingSideService.setSettingSideVal(settingSide);
  }

  constructor({
    colors,
    side,
    active = false,
    settingSideService,
  }: SettingsSideInterface){
    this.colors = colors;
    this.side = side;
    this.active = active;
    this.settingSideService = settingSideService;
  }
}
