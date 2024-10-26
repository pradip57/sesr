import { Outlet } from "react-router-dom";
import TodayMenuHeaderComponent from "../../components/header/today-menu.header.components";
import WelcomeHeaderComponent from "../../components/header/welcome.header.components";
import GreetingFooterComponent from "../../components/footer/greeting.footer.components";
import RestaurantContactFooterComponent from "../../components/footer/restaurant-contact.footer.components";

const OfflineLayout = () => {
  return (
    <>
      <WelcomeHeaderComponent />
      <TodayMenuHeaderComponent />
      <Outlet />
      <GreetingFooterComponent />
      <RestaurantContactFooterComponent />
    </>
  );
};

export default OfflineLayout;
