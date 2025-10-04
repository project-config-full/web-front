import { ActiveChangeTextS } from "./active-change-text-s";
import { RemoveTextCTS } from "./remove-text-cts";

export interface TextPropertiesCTS {
  $activeChangeText: ActiveChangeTextS;
  $activeRemoveText: RemoveTextCTS;
  $buttonIsActive: boolean;
}
