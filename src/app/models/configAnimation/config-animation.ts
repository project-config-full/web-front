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

export interface ConfigAnimationInterface {
  side: SideEnum;
  buttons: button[];
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

  constructor({
    side,
    buttons
  }: ConfigAnimationInterface){
    this.side = side;
    this.buttons = buttons;
  }
}
