import { ChangeColorI } from "../../interfaces/change-color-i";
import { LocalStorage } from "../../services/localStorage/local-storage";

interface textInButtonInterface {
  disable: string;
  active: string;
}

interface ButtonsConfigInterface {
  label: string;
  isActive?: boolean;
  presets?: boolean;
  animations?: boolean;
  reload?: boolean;
  textInButton: textInButtonInterface;
  color?: ChangeColorI["colorAllButton"];
  localStorageService: LocalStorage;
  onClick: (button: ButtonsConfig) => void;
}

export class ButtonsConfig {
  label: string;
  isActive: boolean;
  presets: boolean;
  animations: boolean;
  reload: boolean;
  textInButton: textInButtonInterface;
  color: ChangeColorI["colorAllButton"];
  onClick: (button: this) => void;

  private localStorageService: LocalStorage;

  public changeIsActive(indexOfButton: number): void {
    this.isActive = !this.isActive;

    this.localStorageService.setActiveButtons({
      indexOfButton,
      isActive: this.isActive
    });
  }

  public changeColor(color: ChangeColorI["colorAllButton"]): void {
    this.color = color;
  }

  constructor({
    label,
    isActive = false,
    textInButton,
    presets = false,
    animations = false,
    reload = false,
    color = {
      circleColor: '#f5deb3',
      active: {
        buttonColor: '#C0C0C0',
        textColor: '#2c2c2c'
      },
      inactive: {
        buttonColor: '#2c2c2c',
        textColor: '#C0C0C0'
      }
    },
    localStorageService,
    onClick
  }: ButtonsConfigInterface){
    this.label = label;
    this.isActive = isActive;
    this.presets = presets;
    this.animations = animations;
    this.reload = reload;
    this.textInButton = textInButton;
    this.color = color;
    this.localStorageService = localStorageService;
    this.onClick = onClick;
  }
}
