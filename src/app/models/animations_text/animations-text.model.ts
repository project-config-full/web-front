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
}

export class AnimationsText {
  changeText: string;
  removeText: string;
  changeTextProprietys?: proprietys;
  removeTextProprietys: proprietys;
  durationProprietys: durationProprietys;

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

  constructor({
    changeText,
    removeText,
    changeTextProprietys,
    removeTextProprietys,
    durationProprietys
  }: AnimationsTextInterface) {
    this.changeText = changeText;
    this.removeText = removeText;
    this.changeTextProprietys = changeTextProprietys;
    this.removeTextProprietys = removeTextProprietys;
    this.durationProprietys = durationProprietys;
  }
}
