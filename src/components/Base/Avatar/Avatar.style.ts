import styled from 'styled-components';
import Avatar from 'antd/es/avatar';
import { Colors, FontWeights } from 'core/CssVariables';
import { TAvatarProps } from './Avatar.types';

const SAvatar = styled(Avatar)<TAvatarProps>`
  background-color: ${({ color, src }) =>
    src ? Colors.White : color || Colors.PrimaryColor};
  color: ${({ color }) => color || Colors.White};
  font-weight: ${FontWeights.Medium};  
  /* border: 1px solid ${({ theme }) => theme.input.borderColor}; */
  border: 1px solid ${Colors.LightBorderColor};
    path {
      fill: ${({ color }) => (color ? Colors.White : Colors.PrimaryColor)};
    }
  }
`;

export default SAvatar;
