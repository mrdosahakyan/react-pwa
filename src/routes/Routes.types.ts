import { FC } from 'react';

export type PublicRouteType = {
  component: FC<unknown>;
  path: string;
};

export type PrivateRouteType = {
  component: FC<unknown>;
  path: string;
  show: boolean;
  icon?: string;
  title: string;
};

export enum RoutesPaths {
  SubmitTicket = 'portal',
  SIGNUP = 'signup',
  RESET_PASSWORD = 'reset-password',
  DASHBOARD = 'dashboard',
  PAGE_NOT_FOUND = '404',
}
