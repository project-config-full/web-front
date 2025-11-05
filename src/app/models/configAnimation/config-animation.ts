export enum SideEnum {
  LEFT = 'left',
  RIGHT = 'right',
  BOTTOM = 'bottom',
  TOP = 'top',
}

export enum especialButtons {
  PRESETS = 'presets',
  ANIMATION = 'animation',
  SETTING_SIDE = 'settingSide',
  CHANGE_TEXT = 'changeText',
  REMOVE_TEXT = 'removeText',
}

interface button {
  active: boolean;
  especial: especialButtons;
  colors: {
    circle: string;
    background: {
      active: string;
      inactive: string;
    }
  }
}

interface modelProps {
  name: string;
  active: boolean;
  duration: number;
}

interface animationsProps {
  enter: modelProps;
  exit: modelProps;
}

export interface ConfigAnimationInterface {
  side: SideEnum;
  buttons: button[];
  animationProps: animationsProps;
  active: boolean;
}

export class ButtonConfigAnimation {
  active: boolean;
  especial: especialButtons;
  colors: button["colors"];

  constructor({
    active,
    especial,
    colors
  }: button){
    this.active = active;
    this.especial = especial;
    this.colors = colors;
  }
}

export class ConfigAnimation {
  side: SideEnum;
  buttons: ButtonConfigAnimation[];
  animationProps: animationsProps;
  active: boolean;

  //* CPAC = Change Proprietys Animation Config

  public CPAC(): void{
    if(this.animationProps.enter.active){
      this.animationProps.enter.active = false;
      this.animationProps.exit.active = true;
      return;
    }

    this.animationProps.enter.active = true;
    this.animationProps.exit.active = false;
  }

  constructor({
    side,
    buttons,
    animationProps,
    active,
  }: ConfigAnimationInterface){
    this.side = side;
    this.buttons = buttons;
    this.animationProps = animationProps;
    this.active = active;
  }
}
