import styled from 'styled-components';
import { Spacing } from 'core/CssVariables';

const SThemeSwitcher = styled.div`
  margin-top: ${Spacing.SpacingLG}px;
  .light-mode {
    color: ${props => props.theme.switch.themeSwitch.lightModeColor};
  }

  .dark-mode {
    color: ${props => props.theme.switch.themeSwitch.darkModeColor};
  }

  .switch {
    margin: 0 10px;
    background-color: ${props =>
      props.theme.switch.themeSwitch.backgroundColor};
  }
`;
export default SThemeSwitcher;
