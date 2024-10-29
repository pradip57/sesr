import { Outlet } from "react-router-dom";

import WelcomeHeaderComponent from "../../components/header/welcome.header.components";
import GreetingFooterComponent from "../../components/footer/greeting.footer.components";
import RestaurantContactFooterComponent from "../../components/footer/restaurant-contact.footer.components";

const OfflineLayout = () => {
  return (
    <>
      <WelcomeHeaderComponent />

      <Outlet />
      <GreetingFooterComponent />
      <RestaurantContactFooterComponent />
    </>
  );
};

export default OfflineLayout;
