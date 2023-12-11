import { Done } from "@mui/icons-material";
import { CircularProgress } from "@mui/material";
import { Suspense, lazy } from "react";

export interface ILazyLoadingProps {}

const LazyComponent = lazy(() => addDelay(import("./LazyComponent")));

export default function LazyLoading(props: ILazyLoadingProps) {
  const numberOfCard: number = 10;
  return (
    <div className="flex-col justify-center m-5 rounded-lg outline">
      <div className="text-3xl text-center my-5">
        {" "}
        Lazy loading component with Suspense
      </div>
      <div className="flex flex-wrap justify-center m-auto items-center">
        <div className="m-5">
          <Suspense fallback={<CircularProgress variant="indeterminate" />}>
            <LazyComponent />
          </Suspense>
        </div>
        <div className="m-5">
          <Suspense fallback={<CircularProgress variant="indeterminate" />}>
            <LazyComponent />
          </Suspense>
        </div>
        <div className="m-5">
          <Suspense fallback={<CircularProgress variant="indeterminate" />}>
            <LazyComponent />
          </Suspense>
        </div>
        <div className="m-5">
          <Suspense fallback={<CircularProgress variant="indeterminate" />}>
            <LazyComponent />
          </Suspense>
        </div>
        <div className="m-5">
          <Suspense fallback={<CircularProgress variant="indeterminate" />}>
            <LazyComponent />
          </Suspense>
        </div>
        <div className="m-5">
          <Suspense fallback={<CircularProgress variant="indeterminate" />}>
            <LazyComponent />
          </Suspense>
        </div>
        <div className="m-5">
          <Suspense fallback={<CircularProgress variant="indeterminate" />}>
            <LazyComponent />
          </Suspense>
        </div>
        <div className="m-5">
          <Suspense fallback={<CircularProgress variant="indeterminate" />}>
            <LazyComponent />
          </Suspense>
        </div>
        <div className="m-5">
          <Suspense fallback={<CircularProgress variant="indeterminate" />}>
            <LazyComponent />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

function addDelay(promise: any) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}
