import { NavLink } from "react-router-dom";

export type MenuItemListComponentProps = {
  itemName: string;
  imageSrc: string;
};

const MenuItemListComponent = ({
  itemName,
  imageSrc,
}: MenuItemListComponentProps) => {
  const slug = itemName.split(" ").join("-").toLowerCase();

  return (
    <>
      <NavLink to={`/${slug}/order-in-details`}>
        <div className="relative h-32 rounded-lg bg-gray-200   overflow-hidden">
          <img
            src={imageSrc}
            alt={itemName}
            className="w-full h-full object-cover"
          />
          <p className="absolute inset-0 flex items-center justify-center text-center p-2 text-2xl text-white font-bold bg-black bg-opacity-50">
            {itemName}
          </p>
        </div>
      </NavLink>
    </>
  );
};

export default MenuItemListComponent;
