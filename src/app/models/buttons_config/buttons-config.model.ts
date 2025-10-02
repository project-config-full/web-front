import { ChangeColorI } from "../../interfaces/change-color-i";

interface textInButtonInterface {
  disable: string;
  active: string;
}

interface ButtonsConfigInterface {
  label: string;
  isActive?: boolean;
  presets?: boolean;
  animations?: boolean;
  textInButton: textInButtonInterface;
  color?: ChangeColorI["colorAllButton"];
  onClick: (button: ButtonsConfig) => void;
}

export class ButtonsConfig {
  label: string;
  isActive: boolean;
  presets: boolean;
  animations: boolean;
  textInButton: textInButtonInterface;
  color: ChangeColorI["colorAllButton"];
  onClick: (button: this) => void;

  public changeIsActive(): void {
    this.isActive = !this.isActive;
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
    onClick
  }: ButtonsConfigInterface){
    this.label = label;
    this.isActive = isActive;
    this.presets = presets;
    this.animations = animations;
    this.textInButton = textInButton;
    this.color = color;
    this.onClick = onClick;
  }
}
