import { ChangeColorI } from "../../interfaces/change-color-i";
import { LocalStorage } from "../../services/localStorage/local-storage";
import { ChangeButtonConfigAnimation } from '../../services/changeButtonConfigAnimation/change-button-config-animation';

interface textInButtonInterface {
  disable: string;
  active: string;
}

interface ButtonsConfigInterface {
  label: string;
  isActive?: boolean;
  presets?: boolean;
  animations?: boolean;
  settings_side?: boolean;
  reload?: boolean;
  textInButton: textInButtonInterface;
  color?: ChangeColorI["colorAllButton"];
  localStorageService: LocalStorage;
  changeButtonConfigAnimationService: ChangeButtonConfigAnimation;
  onClick: (button: ButtonsConfig) => void;
}

export class ButtonsConfig {
  label: string;
  isActive: boolean;
  presets: boolean;
  animations: boolean;
  settings_side: boolean;
  reload: boolean;
  textInButton: textInButtonInterface;
  color: ChangeColorI["colorAllButton"];
  onClick: (button: this) => void;

  private localStorageService: LocalStorage;
  private changeButtonConfigAnimationService: ChangeButtonConfigAnimation;

  public changeIsActive(indexOfButton: number): void {
    this.isActive = !this.isActive;

    this.localStorageService.setActiveButtons({
      indexOfButton,
      isActive: this.isActive
    });

    this.changeButtonConfigAnimationService.setButtonConfigAnimationVal({
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
    settings_side = false,
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
    changeButtonConfigAnimationService,
    onClick
  }: ButtonsConfigInterface){
    this.label = label;
    this.isActive = isActive;
    this.presets = presets;
    this.animations = animations;
    this.settings_side = settings_side;
    this.reload = reload;
    this.textInButton = textInButton;
    this.color = color;
    this.localStorageService = localStorageService;
    this.changeButtonConfigAnimationService = changeButtonConfigAnimationService;
    this.onClick = onClick;
  }
}
