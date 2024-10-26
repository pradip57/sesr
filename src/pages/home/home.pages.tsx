import MenuItemListComponent from "../../components/common/menu-item-list/menu-item-list.components";
import imageMomo from "../../assets/images/momo.png";
import imageChowmein from "../../assets/images/chowmein.jpg";
import imageBurger from "../../assets/images/burger.png";
import imagePizza from "../../assets/images/pizza.jpg";
import imageCoffee from "../../assets/images/coffee.png";
import imageChickenChilly from "../../assets/images/chicken-chilly.png";
import imageKhanaSet from "../../assets/images/khana-set.png";
import imageKhajaSet from "../../assets/images/khaja-set.png";

const HomePage = () => {
  return (
    <>
      <div className="bg-teal-100 rounded-xl grid my-5 grid-cols-2 gap-4 p-4 sm:px-5 md:grid-cols-4 lg:gap-8 mx-auto w-full lg:max-w-4xl">
        <MenuItemListComponent
          url="/momo"
          itemName="MoMo"
          imageSrc={imageMomo}
        />
        <MenuItemListComponent
          url="/chowmein"
          itemName="Chowmein"
          imageSrc={imageChowmein}
        />
        <MenuItemListComponent
          url="/burger"
          itemName="Burger"
          imageSrc={imageBurger}
        />
        <MenuItemListComponent
          url="/pizza"
          itemName="Pizza"
          imageSrc={imagePizza}
        />

        <MenuItemListComponent
          url="/coffee"
          itemName="Coffee"
          imageSrc={imageCoffee}
        />
        <MenuItemListComponent
          url="/chicken-chilly"
          itemName="Chicken Chilly"
          imageSrc={imageChickenChilly}
        />
        <MenuItemListComponent
          url="/khaja-set"
          itemName="Khaja Set"
          imageSrc={imageKhajaSet}
        />
        <MenuItemListComponent
          url="/khana-set"
          itemName="Khana Set"
          imageSrc={imageKhanaSet}
        />
      </div>
    </>
  );
};

export default HomePage;
