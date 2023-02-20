import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as Api from "../../utills/api";
import Product from "../../components/Product";
import Header from "../../components/Title";

function ProductList() {
  const currencySymbol = "KRW";
  const { category } = useParams();
  const [products, setProducts] = useState(undefined);

  /// api /products/:categoryTitle
  //category가 변경될 때 마다 product list 리렌더링 되야함. 지금은 안됨 -> products를 useRef 사용해야하나?
  //왜 nav bar에서 선택시에만 그러지? main page에서 리다이렉트될때는 잘 업데이트 되는데 뭔차이지

  useEffect(() => {
    const init = async () => {
      const res = await Api.get(`products/category/${category}`);
      const data = await res.data;
      setProducts(data);
    };
    init();
  }, [category]);

  return (
    <>
      <div className="section">
        <Header title={category}></Header>
        <div className="product-container">
          {Array.isArray(products) &&
            products.map((item) => (
              <Product
                key={item._id}
                itemId={item._id}
                title={item.productName}
                price={item.price.toLocaleString("en-US", {
                  style: "currency",
                  currency: currencySymbol,
                })}
                img={
                  process.env.REACT_APP_FILE_RES_URL +
                  "/" +
                  item.imageKey +
                  ".png"
                }
                productInfo={item.productInfo}
              ></Product>
            ))}
        </div>
      </div>
    </>
  );
}

export default ProductList;
