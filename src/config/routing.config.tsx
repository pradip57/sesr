import { BrowserRouter, Route, Routes } from "react-router-dom";
import OfflineLayout from "../pages/layouts/offline.layouts";
import HomePage from "../pages/home/home.pages";
import NotFoundPage from "../pages/not-found/not-found.pages";
import OrderInDetailPage from "../pages/order-in-details/order-in-details.pages";

const RoutingConfig = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OfflineLayout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/:slug/order-in-details"
              element={<OrderInDetailPage />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RoutingConfig;
