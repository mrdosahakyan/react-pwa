import { SwitchProps } from 'antd/es/switch';
import { Colors } from 'core/CssVariables';

export type TSwitchTypes = 'info' | 'warning' | 'success' | 'danger';

export type TSwitchColors = { [key in TSwitchTypes]: Colors };
export type TSwitchProps = {
  color?: TSwitchTypes;
  light?: boolean;
  disabled?: boolean;
} & SwitchProps;
