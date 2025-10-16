import { AnimationsTextInterface } from "../models/animations_text/animations-text.model";

export interface ParamsSetAnimationTextLs extends Omit<AnimationsTextInterface, 'changeAnimationText' | 'localStorageService'>{
  btnThemeActive: boolean;
}
