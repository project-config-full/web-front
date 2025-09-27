interface InputPresetsInterface {
  title: string;
  colorId: string;
  colorInput: string;
  changeColor: (color: string) => void;
}

export class InputPresets {
  title: string;
  colorId: string;
  colorInput: string;
  changeColor: (color: string) => void;

  constructor({
    title,
    colorId,
    colorInput,
    changeColor
  }: InputPresetsInterface){
    this.title = title;
    this.colorId = colorId;
    this.colorInput = colorInput;
    this.changeColor = changeColor;
  }
}
