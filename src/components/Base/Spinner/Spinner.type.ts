import { Colors } from 'core/CssVariables';

export type TSpinner = {
  size?: TSpinnerSize;
  color?: Colors;
  width?: number;
};

export type TSpinnerSize = 'default' | 'small' | 'large';
