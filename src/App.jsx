import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/AllRoutes";
import ErrorBoundary from "./components/ui/errorBoundary/ErrorBoundary";
import LoadingScreen from "./components/ui/loading/LoadingScreen";

const App = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingScreen />}>
        <RouterProvider router={router} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
