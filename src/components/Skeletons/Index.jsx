import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';

export default function Skeletons() {
  return (
    <>
      <Skeleton variant="rounded" width={"100%"} height={150} />
      <Skeleton variant="rounded" width={"100%"} height={150} />
      <Skeleton variant="rounded" width={"100%"} height={150} />
    </>
  );
}
