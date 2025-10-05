export interface AnimationSetClassCont {
  change: {
    name: string;
    enterAndExit?: {
      enter: boolean;
      exit: boolean;
    };
  },
  remove: {
    name: string;
    enterActive: boolean;
    exitActive: boolean;
  }
}
