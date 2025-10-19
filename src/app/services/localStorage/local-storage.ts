import { Injectable } from '@angular/core';
import { SetButtonLocalStorage } from '../../interfaces/set-button-local-storage';
import { ChangeColorPre } from '../../models/change_color_pre/change-color-pre';
import { ParamsSetPresetsLs } from '../../interfaces/params-set-presets-ls';
import { AnimationsText } from '../../models/animations_text/animations-text.model';
import { ParamsSetAnimationTextLs } from '../../interfaces/params-set-animation-text-ls';
import { SettingsSideModel } from '../../models/settings_side_model/settings-side-model';
import { ParamsSetSideConfig } from '../../interfaces/params-set-side-config';

@Injectable({
  providedIn: 'root'
})
export class LocalStorage {
  setActiveButtons(val: SetButtonLocalStorage): void{
    const buttonsLS = localStorage.getItem('buttons');
    let buttonsToJson: SetButtonLocalStorage[] = [];

    if(!buttonsLS){
      buttonsToJson.push(val);
      localStorage.setItem("buttons", JSON.stringify(buttonsToJson));
      return;
    };

    const buttons = JSON.parse(buttonsLS);

    if(!buttons.find((button: SetButtonLocalStorage) => button.indexOfButton === val.indexOfButton)){
      buttons.push(val);
    }

    buttons.forEach((button: SetButtonLocalStorage) => {
      if(button.indexOfButton !== val.indexOfButton) return;

      button.isActive = val.isActive;
    });

    localStorage.setItem("buttons", JSON.stringify(buttons));
  }

  getActiveButtons(): SetButtonLocalStorage[]{
    return JSON.parse(localStorage.getItem("buttons") || "[]");
  }

  private safeStringify(obj: any): string {
    const seen = new WeakSet();
    return JSON.stringify(obj, (key, value) => {
      if (typeof value === 'object' && value !== null) {
        if (seen.has(value)) return;
        seen.add(value);
      }
      return value;
    });
  }

  setPreset(preset: ChangeColorPre, btnThemeActive: boolean): void{
    const presetLS: ParamsSetPresetsLs = {
      ...preset,
      btnThemeActive
    }

    localStorage.setItem("preset", this.safeStringify(presetLS));
  }

  getPreset(): ParamsSetPresetsLs{
    const presetLs = localStorage.getItem("preset");

    return presetLs ? JSON.parse(presetLs) : {} as ParamsSetPresetsLs;
  }

  setAnimations(animation: AnimationsText, btnThemeActive: boolean): void{
    const animationLS: ParamsSetAnimationTextLs = {
      ...animation,
      btnThemeActive,
    }

    localStorage.setItem("animation", this.safeStringify(animationLS));
  }

  getAnimations(): ParamsSetAnimationTextLs{
    const animationLs = localStorage.getItem("animation");

    return animationLs ? JSON.parse(animationLs) : {} as ParamsSetAnimationTextLs;
  }

  setSideConfig(side: SettingsSideModel): void{
    const btnActive = this.getActiveButtons().find((button: SetButtonLocalStorage) => button.indexOfButton === 2);

    const sideConfigLS: ParamsSetSideConfig = {
      vals: side,
      btnActive: btnActive!.isActive
    }

    localStorage.setItem("sideConfig", this.safeStringify(sideConfigLS));
  }

  getSideConfig(): ParamsSetSideConfig{
    const sideConfigLs = localStorage.getItem("sideConfig");

    return sideConfigLs ? JSON.parse(sideConfigLs) : {} as ParamsSetSideConfig;
  }
}
