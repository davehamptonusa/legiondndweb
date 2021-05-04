import React, { lazy, Suspense } from 'react';

const LazyFacts = lazy(() => import('./Facts'));

const Facts = props => (
  <Suspense fallback={null}>
    <LazyFacts {...props} />
  </Suspense>
);

export default Facts;
