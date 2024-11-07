import { NavLink } from "react-router-dom";

const ShowPriceListButtonComponent = () => {
  return (
    <>
      <NavLink to="/price-list">
        <button className=" bg-teal-600 rounded-lg text-center mb-5 text-xl p-3 font-bold text-white">
          View Price
        </button>
      </NavLink>
    </>
  );
};

export default ShowPriceListButtonComponent;
