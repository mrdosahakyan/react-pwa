import {
  Colors,
  FontFamilies,
  FontSizes,
  fontSizes,
  FontWeights,
  marginBottom,
} from 'core/CssVariables';
import styled, { css } from 'styled-components';
import { Typography } from 'antd';
import { TLinkProps, TParagraphProps, TTextProps, TTitleProps } from './types';

const { Paragraph, Text, Title, Link } = Typography;

const typographyGeneralProperties = css`
  margin-bottom: 0;
  font-size: ${({ fontlevel }: TTextProps) =>
    fontlevel ? fontSizes[fontlevel - 1] : FontSizes.FontMD}px;
  word-break: break-word;
`;

export const SText = styled(Text)<TTextProps>`
  && {
    ${typographyGeneralProperties};
    color: ${({ type, color, theme }) => color || type || theme.text.color};
    font-weight: ${(props: TTextProps) => props.fontWeight};
  }
`;
export const SLink = styled(Link)<TLinkProps>`
  && {
    margin-bottom: 0;
    font-size: ${({ fontlevel }: TLinkProps) =>
      fontlevel ? fontSizes[fontlevel - 1] : FontSizes.FontMD}px;
    color: ${({ color }) => color || Colors.SecondaryColor};
    font-weight: ${(props: TLinkProps) => props.fontWeight};
    &.ant-typography:hover {
      color: ${({ color }) => color || Colors.PrimaryColor};
    }
  }
`;

export const SSecondaryText = styled(Text)`
  ${typographyGeneralProperties};
  .icon {
    path {
      fill: ${({ theme }) => theme.secondaryColor};
    }
  }
  font-weight: ${(props: TTextProps) => props.fontWeight || FontWeights.Light};
  color: ${({ theme }) => theme.secondaryColor};
`;

export const STitle = styled(Title)<TTitleProps>`
  && {
    margin-bottom: 0;
    line-height: 24px;
    color: ${({ type, color, theme }) => color || type || theme.color};
    font-size: ${(props: TTitleProps) => fontSizes[props.fontlevel - 1]}px;
    font-weight: ${(props: TTitleProps) =>
      props.fontWeight || FontWeights.SemiBold};
  }
`;

export const SParagraph = styled(Paragraph)`
  && {
    margin-bottom: 0;
    color: ${({ type, color, subtitle, theme }) =>
      subtitle ? Colors.Grey : color || type || theme.paragraph.color};
    font-size: ${(props: TParagraphProps) => fontSizes[props.fontlevel - 1]}px;
    margin-bottom: ${(props: TParagraphProps) =>
      marginBottom[props.fontlevel - 1]}px;
    font-family: ${FontFamilies.FontSecondary};
    font-weight: ${(props: TParagraphProps) =>
      props.fontWeight || FontWeights.Light};
  }
`;
