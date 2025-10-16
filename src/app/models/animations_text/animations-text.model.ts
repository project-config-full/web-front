import { ChangeAnimationText } from "../../services/change_animation_text/change-animation-text";
import { LocalStorage } from "../../services/localStorage/local-storage";

interface proprietys{
  enter: boolean;
  exit: boolean;
}

interface durationProprietys{
  remove: number;
  change?: number;
}

export interface AnimationsTextInterface {
  changeText: string;
  removeText: string;
  changeTextProprietys?: proprietys;
  removeTextProprietys: proprietys;
  durationProprietys: durationProprietys;
  changeAnimationText: ChangeAnimationText;
  localStorageService: LocalStorage;
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
  private localStorageService: LocalStorage;

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
    this.localStorageService.setAnimations(this, true);

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
    localStorageService,
    active = false,
  }: AnimationsTextInterface) {
    this.changeText = changeText;
    this.removeText = removeText;
    this.changeTextProprietys = changeTextProprietys;
    this.removeTextProprietys = removeTextProprietys;
    this.durationProprietys = durationProprietys;
    this.active = active;
    this.changeAnimationText = changeAnimationText;
    this.localStorageService = localStorageService;
  }
}
