import {
  Route,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import App from "../App";
import SuspenseComponent from "../screen/SuspenseComponent";
import LazyLoading from "../screen/LazyLoading";
import NestedRoutingComponent from "../screen/NestedRoutingComponent";
import HomeScreen from "../screen/HomeScreen";
import OthersConcept from "../screen/others/OtherConcept";

/**
 * Router declaration for the demo app.
 */
const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<App />}>
      <Route path="" element={<HomeScreen />} />
      <Route path="suspense" element={<SuspenseComponent />} />
      <Route path="lazyloading" element={<LazyLoading />} />
      <Route path="nestedrouting" element={<NestedRoutingComponent />}></Route>
      <Route path="others" element={<OthersConcept />}></Route>
    </Route>
  )
);

export default router;
