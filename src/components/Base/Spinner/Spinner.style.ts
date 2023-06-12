import styled from 'styled-components';
import { Row } from 'components/Base/Grid/Grid';
import Spin from 'antd/es/spin';
import { TSpinner } from './Spinner.type';

export const SPageSpinnerWrapper = styled(Row)`
  height: 100%;
`;

const spinnerSizes = {
  small: 12,
  large: 44,
  default: 14,
};
export const SSpinner = styled(Spin)<TSpinner>`
  .anticon-loading {
    font-size: ${({ size, width }) =>
      (width && width) || (size ? spinnerSizes[size] : 14)}px !important;
  }
`;
