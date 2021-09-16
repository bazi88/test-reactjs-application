/**
 *
 * Asynchronously loads the component for Sider
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Sider = lazyLoad(
  () => import('./index'),
  module => module.SiderComponent,
);
