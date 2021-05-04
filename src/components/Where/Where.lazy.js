import React, { lazy, Suspense } from 'react';

const LazyWhere = lazy(() => import('./Where'));

const Where = props => (
  <Suspense fallback={null}>
    <LazyWhere {...props} />
  </Suspense>
);

export default Where;
