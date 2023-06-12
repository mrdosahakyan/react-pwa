import type { TitleProps } from 'antd/es/typography/Title';
import type { TextProps } from 'antd/es/typography/Text';
import type { LinkProps } from 'antd/es/typography/Link';
import type { ParagraphProps } from 'antd/es/typography/Paragraph';
import { Colors } from 'core/CssVariables';

export type TLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type TFontlevel = {
  fontlevel: TLevel;
};
export type TColor = {
  color?: Colors;
};

export type TWeight = {
  fontWeight?: 300 | 400 | 500 | 600 | 700;
};
export type TParagraph = {
  subtitle?: boolean;
};
export type TTextProps = TextProps & TFontlevel & TWeight & TColor;
export type TTitleProps = TitleProps & TFontlevel & TWeight & TColor;
export type TLinkProps = LinkProps & TFontlevel & TWeight & TColor;
export type TParagraphProps = ParagraphProps &
  TFontlevel &
  TWeight &
  TColor &
  TParagraph;
