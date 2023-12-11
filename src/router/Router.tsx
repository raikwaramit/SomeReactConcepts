import {
  Route,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import App from "../App";
import SuspenseComponent from "../screen/SuspenseComponent";
import LazyLoading from "../screen/LazyLoading";

/**
 * Router declaration for the demo app.
 */
const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<App />}>
      <Route path="" element={<></>} />
      <Route path="/suspense" element={<SuspenseComponent />} />
      <Route path="/lazyloading" element={<LazyLoading />} />
      <Route path="/suspense" element={<></>} />
    </Route>
  )
);

export default router;
