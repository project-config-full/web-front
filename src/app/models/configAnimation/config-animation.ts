import { LocalStorage } from "../../services/localStorage/local-storage";
import { SetConfigAnimation } from "../../services/setConfigAnimation/set-config-animation";

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
  setConfigAnimationService: SetConfigAnimation;
  localStorageService: LocalStorage;
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

  private setConfigAnimationService: SetConfigAnimation;
  private localStorageService: LocalStorage;

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

  public onClick(): void{
    this.setConfigAnimationService.setConfigAnimation(this.animationProps.enter.name);

    this.localStorageService.setAnimConfig(this.animationProps.enter.name);
  }

  constructor({
    side,
    buttons,
    animationProps,
    active,
    setConfigAnimationService,
    localStorageService,
  }: ConfigAnimationInterface){
    this.side = side;
    this.buttons = buttons;
    this.animationProps = animationProps;
    this.active = active;
    this.setConfigAnimationService = setConfigAnimationService;
    this.localStorageService = localStorageService;
  }
}
