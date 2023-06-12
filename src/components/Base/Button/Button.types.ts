import { Colors } from 'core/CssVariables';
import { ButtonProps } from 'antd/es/button';
import { EIconNames } from '../Icon';

export type TButtonTypes =
  | 'info'
  | 'warning'
  | 'success'
  | 'danger'
  | 'primary'
  | 'link'
  | 'default'
  | 'grey'
  | 'orange'
  | 'lightGrey';

export type TButtonColors = {
  color: Colors;
  hoverColor: Colors;
};

export type TButtonColorProp = {
  color?: TButtonTypes;
  outline?: boolean | 'true';
};

export type TButtonStyles = { [key in TButtonTypes]: TButtonColors };
export type TButtonProps = ButtonProps &
  TButtonColorProp & {
    width?: number;
    height?: number;
  } & {
    iconName?: EIconNames;
  };
