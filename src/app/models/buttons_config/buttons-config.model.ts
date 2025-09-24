interface textInButtonInterface {
  disable: string;
  active: string;
}

interface ButtonsConfigInterface {
  label: string;
  isActive?: boolean;
  textInButton: textInButtonInterface;
  onClick: () => void;
}

export class ButtonsConfig {
  label: string;
  isActive: boolean;
  textInButton: textInButtonInterface;
  onClick: () => void;

  constructor({
    label,
    isActive = false,
    textInButton,
    onClick
  }: ButtonsConfigInterface){
    this.label = label;
    this.isActive = isActive;
    this.textInButton = textInButton;
    this.onClick = onClick;
  }
}
