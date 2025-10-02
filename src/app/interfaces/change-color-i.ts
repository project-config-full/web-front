export interface ChangeColorI {
  colorConfig?: string;
  colorContent?: string;
  colorText?: string;
  colorIcon?: string;
  colorAllButton?: {
    circleColor: string;
    active: {
      buttonColor: string;
      textColor: string;
    },
    inactive: {
      buttonColor: string;
      textColor: string;
    }
  },
  animationText?: {
    colorOfChange: string;
    colorOfRemove: string;
    colorOfTextChange: string;
    colorOfTextRemove: string;
  }
}
