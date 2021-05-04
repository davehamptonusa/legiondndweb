import React, { lazy, Suspense } from 'react';

const LazyWhole = lazy(() => import('./Whole'));

const Whole = props => (
  <Suspense fallback={null}>
    <LazyWhole {...props} />
  </Suspense>
);

export default Whole;
