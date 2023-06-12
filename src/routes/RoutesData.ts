import { lazy } from 'react';
import { PrivateRouteType, PublicRouteType, RoutesPaths } from './Routes.types';

const SubmitTicket = lazy(
  () => import('pages/public/SubmitTicket/SubmitTicket'),
);
const PageNotFound = lazy(() => import('pages/private/PageNotFound'));
const Dashboard = lazy(() => import('pages/private/Dashboard'));

export const publicRoutes: PublicRouteType[] = [
  {
    component: SubmitTicket,
    path: 'portal',
  },
];

export const privateRoutes: PrivateRouteType[] = [
  {
    title: 'Dashboard',
    component: Dashboard,
    // icon: Icon,
    path: RoutesPaths.DASHBOARD,
    show: true,
  },
  {
    title: '404',
    component: PageNotFound,
    path: RoutesPaths.PAGE_NOT_FOUND,
    show: false,
  },
];
