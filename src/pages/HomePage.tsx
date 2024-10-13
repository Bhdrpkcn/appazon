import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../hooks/redux/hooks";
import { getProducts } from "../features/products/productSlice";

import HeaderComponent from "../features/products/components/HeaderComponent";
import ProductComponent from "../features/products/components/ProductComponent";

const HomePage = () => {
  const dispatch = useAppDispatch();

  const { products } = useAppSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      <HeaderComponent />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "48px",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "48px",
        }}
      >
        {products.length > 0 &&
          products.map((product) => (
            <ProductComponent key={product._id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default HomePage;
