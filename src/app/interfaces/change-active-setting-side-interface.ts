import { SettingsSideModel } from "../models/settings_side_model/settings-side-model";

export interface ChangeActiveSettingSideInterface {
  settingSide: SettingsSideModel[];
  change: boolean;
}
