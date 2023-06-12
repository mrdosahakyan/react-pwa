import Switch from 'antd/es/switch';
import styled from 'styled-components';
import { Colors } from 'core/CssVariables';
import { TSwitchProps, TSwitchColors } from './Switch.types';

const switchColors: TSwitchColors = {
  success: Colors.SuccessColor,
  warning: Colors.WarningColor,
  danger: Colors.ErrorColor,
  info: Colors.InfoColor,
};

const SSwitch = styled(Switch)<TSwitchProps>`
  background-color: ${({ color }) =>
    color ? switchColors[color] : Colors.PrimaryColor};
  .ant-switch-handle {
    &:before {
      background-color: ${({ light, theme }) =>
        light ? Colors.White : theme.switch.handle};
    }
  }

  &.ant-switch-checked:focus {
    box-shadow: none;
  }
`;

export default SSwitch;
