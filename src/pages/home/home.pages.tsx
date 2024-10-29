import MenuItemListComponent from "../../components/common/menu-item-list/menu-item-list.components";
import imageMomo from "../../assets/images/momo.png";
import imageChowmein from "../../assets/images/chowmein.jpg";
import imageBurger from "../../assets/images/burger.png";
import imagePizza from "../../assets/images/pizza.jpg";
import imageCoffee from "../../assets/images/coffee.png";
import imageChickenChilly from "../../assets/images/chicken-chilly.png";
import imageKhanaSet from "../../assets/images/khana-set.png";
import imageKhajaSet from "../../assets/images/khaja-set.png";
import TodayMenuHeaderComponent from "../../components/header/today-menu.header.components";

const HomePage = () => {
  return (
    <>
      <TodayMenuHeaderComponent />
      <div className="bg-teal-100 rounded-xl grid my-5 grid-cols-2 gap-4 p-4 sm:px-5 md:grid-cols-4 lg:gap-8 mx-auto w-full lg:max-w-4xl">
        <MenuItemListComponent itemName="MoMo" imageSrc={imageMomo} />
        <MenuItemListComponent itemName="Chowmein" imageSrc={imageChowmein} />
        <MenuItemListComponent itemName="Burger" imageSrc={imageBurger} />
        <MenuItemListComponent itemName="Pizza" imageSrc={imagePizza} />

        <MenuItemListComponent itemName="Coffee" imageSrc={imageCoffee} />
        <MenuItemListComponent
          itemName="Chicken Chilly"
          imageSrc={imageChickenChilly}
        />
        <MenuItemListComponent itemName="Khaja Set" imageSrc={imageKhajaSet} />
        <MenuItemListComponent itemName="Khana Set" imageSrc={imageKhanaSet} />
      </div>
    </>
  );
};

export default HomePage;
