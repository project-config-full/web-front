import { ChangeAnimationText } from "../../services/change_animation_text/change-animation-text";

interface proprietys{
  enter: boolean;
  exit: boolean;
}

interface durationProprietys{
  remove: number;
  change?: number;
}

interface AnimationsTextInterface {
  changeText: string;
  removeText: string;
  changeTextProprietys?: proprietys;
  removeTextProprietys: proprietys;
  durationProprietys: durationProprietys;
  changeAnimationText: ChangeAnimationText;
  active?: boolean;
}

export class AnimationsText {
  changeText: string;
  removeText: string;
  changeTextProprietys?: proprietys;
  removeTextProprietys: proprietys;
  durationProprietys: durationProprietys;
  active: boolean;

  private changeAnimationText: ChangeAnimationText;

  //* CPRT = change proprietys remove text
  //* CPCT = change proprietys change text

  public CPRT(): void{
    if(this.removeTextProprietys.enter){
      this.removeTextProprietys.enter = false;
      this.removeTextProprietys.exit = true;
      return;
    }

    this.removeTextProprietys.enter = true;
    this.removeTextProprietys.exit = false;
  }

  public CPCT(): void{
    if(this.changeTextProprietys!.enter){
      this.changeTextProprietys!.enter = false;
      this.changeTextProprietys!.exit = true;
      return;
    }

    this.changeTextProprietys!.enter = true;
    this.changeTextProprietys!.exit = false;
  }

  public onClick(): void{
    this.changeAnimationText.setAnimations({
      change: {
        name: this.changeText,
        enterAndExit: !!this.changeTextProprietys,
      },
      remove: {
        name: this.removeText,
      }
    });
  }

  constructor({
    changeText,
    removeText,
    changeTextProprietys,
    removeTextProprietys,
    durationProprietys,
    changeAnimationText,
    active = false,
  }: AnimationsTextInterface) {
    this.changeText = changeText;
    this.removeText = removeText;
    this.changeTextProprietys = changeTextProprietys;
    this.removeTextProprietys = removeTextProprietys;
    this.durationProprietys = durationProprietys;
    this.active = active;
    this.changeAnimationText = changeAnimationText;
  }
}
