import React, { lazy, Suspense } from 'react';

const LazySocialLinks = lazy(() => import('./SocialLinks'));

const SocialLinks = props => (
  <Suspense fallback={null}>
    <LazySocialLinks {...props} />
  </Suspense>
);

export default SocialLinks;
