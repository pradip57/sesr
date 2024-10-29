import { useParams } from "react-router-dom";

const OrderInDetailPage = () => {
  const params = useParams();
  return (
    <>
      <h1>{params.slug}</h1>
    </>
  );
};

export default OrderInDetailPage;
