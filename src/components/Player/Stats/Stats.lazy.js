import React, { lazy, Suspense } from 'react';

const LazyPlayer/Stats = lazy(() => import('./Player/Stats'));

const Player/Stats = props => (
  <Suspense fallback={null}>
    <LazyPlayer/Stats {...props} />
  </Suspense>
);

export default Player/Stats;
