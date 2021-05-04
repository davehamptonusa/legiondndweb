import React, { lazy, Suspense } from 'react';

const LazyScores = lazy(() => import('./Scores'));

const Scores = props => (
  <Suspense fallback={null}>
    <LazyScores {...props} />
  </Suspense>
);

export default Scores;
