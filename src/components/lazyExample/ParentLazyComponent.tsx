import React, { Suspense } from 'react';

const LazyComponent = React.lazy(() => import('./LazyComponent'));

export default function ParentLazyComponent() {
  return (
    <div>
      <Suspense fallback={<h1>Loading lazy component....</h1>}>
        <LazyComponent />
      </Suspense>
    </div>
  )
}
