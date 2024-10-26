import { CiLocationOn, CiPhone } from "react-icons/ci";

const RestaurantContactFooterComponent = () => {
  return (
    <>
      <div className="w-full h-auto bg-teal-600">
        <h1 className="text-center text-xl pt-5 font-bold text-white">
          Burger House And Crunchy Fried Chicken
        </h1>
        <div className="grid grid-cols-1 text-center sm:flex sm:gap-10 items-center justify-center text-white text-base pb-5 px-5">
          <p className="flex items-center justify-center">
            <CiLocationOn /> 123 Burger Street, Foodie Town, 45678
          </p>
          <p className="flex items-center justify-center">
            <CiPhone />
            9874857490, 9788556431
          </p>
        </div>
      </div>
    </>
  );
};

export default RestaurantContactFooterComponent;
