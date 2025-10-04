export interface AnimationSetClassCont {
  change: {
    name: string;
    enterAndExit: boolean;
  },
  remove: {
    name: string;
    enterActive: boolean;
    exitActive: boolean;
  }
}
