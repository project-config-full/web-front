interface textInButtonInterface {
  disable: string;
  active: string;
}

interface colorOfButtonInterface {
  colorOfCircle: string;
  colorOfText: string;
  backgroundColor: string;
}

interface ButtonsConfigInterface {
  label: string;
  isActive?: boolean;
  textInButton: textInButtonInterface;
  color?: colorOfButtonInterface;
  onClick: (button: ButtonsConfig) => void;
}

export class ButtonsConfig {
  label: string;
  isActive: boolean;
  textInButton: textInButtonInterface;
  color: colorOfButtonInterface;
  onClick: (button: this) => void;

  public changeIsActive(): void {
    this.isActive = !this.isActive;

    this.color.backgroundColor = this.isActive ? '#C0C0C0' : '#2c2c2c';
    this.color.colorOfText = this.isActive ? '#2c2c2c' : '#C0C0C0';
  }

  constructor({
    label,
    isActive = false,
    textInButton,
    color = {
      colorOfCircle: '#f5deb3',
      colorOfText: '#bbbbbb',
      backgroundColor: '#2c2c2c'
    },
    onClick
  }: ButtonsConfigInterface){
    this.label = label;
    this.isActive = isActive;
    this.textInButton = textInButton;
    this.color = color;
    this.onClick = onClick;
  }
}
