import React from 'react';
import { SLink, SParagraph, SSecondaryText, SText, STitle } from './style';
import { TLinkProps, TParagraphProps, TTextProps, TTitleProps } from './types';

export function Title(props: TTitleProps) {
  return <STitle {...props} />;
}

export function Text(props: TTextProps) {
  return <SText {...props} />;
}
export function Link(props: TLinkProps) {
  return <SLink {...props} />;
}

export function SecondaryText(props: TTextProps) {
  return <SSecondaryText {...props} />;
}

export function Paragraph(props: TParagraphProps) {
  return <SParagraph {...props} />;
}
