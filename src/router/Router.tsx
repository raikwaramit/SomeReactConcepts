import {
  Route,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import App from "../App";
import SuspenseComponent from "../screen/SuspenseComponent";
import LazyLoading from "../screen/lazyloading/LazyLoading";
import NestedRoutingComponent from "../screen/NestedRouting/NestedRoutingComponent";
import HomeScreen from "../screen/HomeScreen";
import OthersConcept from "../screen/others/OtherConcept";
import Page1 from "../screen/NestedRouting/pages/Page1";
import Page2 from "../screen/NestedRouting/pages/Page2";
import Page3 from "../screen/NestedRouting/pages/Page3";
import Page4 from "../screen/NestedRouting/pages/Page4";
import BasicPage from "../screen/NestedRouting/pages/BasicPage";

/**
 * Router declaration for the demo app.
 */
const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<App />}>
      <Route path="" element={<HomeScreen />} />
      <Route path="suspense" element={<SuspenseComponent />} />
      <Route path="lazyloading" element={<LazyLoading />} />
      <Route path="nestedrouting" element={<NestedRoutingComponent />}>
        <Route path="" element={<BasicPage />} />
        <Route path="page1" element={<Page1 />} />
        <Route path="page2" element={<Page2 />} />
        <Route path="page3" element={<Page3 />} />
        <Route path="page4" element={<Page4 />} />
      </Route>
      <Route path="others" element={<OthersConcept />}>
        <Route path="" element={<BasicPage />} />
        <Route path="page1" element={<Page1 />} />
        <Route path="page2" element={<Page2 />} />
        <Route path="page3" element={<Page3 />} />
        <Route path="page4" element={<Page4 />} />
      </Route>
    </Route>
  )
);

export default router;
