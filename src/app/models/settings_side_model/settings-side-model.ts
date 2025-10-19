import { ChangeColorI } from "../../interfaces/change-color-i";
import { LocalStorage } from "../../services/localStorage/local-storage";
import { SettingSide } from "../../services/settingSide/setting-side";

interface SettingsSideInterface {
  colors: {
    conteudo: string;
    colorIcon: string;
    colorText: string;
    colorConfig: string;
    button: ChangeColorI["colorAllButton"];
  },
  side: string;
  active?: boolean;
  settingSideService: SettingSide;
  localStorageService: LocalStorage;
}

export class SettingsSideModel {
  colors: SettingsSideInterface["colors"];
  side: string;
  active: boolean;

  private settingSideService: SettingSide;
  private localStorageService: LocalStorage;

  onClick(): void{
    this.active = true;

    this.settingSideService.setSettingSideVal(this);

    this.localStorageService.setSideConfig(this);
  }

  constructor({
    colors,
    side,
    active = false,
    settingSideService,
    localStorageService,
  }: SettingsSideInterface){
    this.colors = colors;
    this.side = side;
    this.active = active;
    this.settingSideService = settingSideService;
    this.localStorageService = localStorageService;
  }
}
