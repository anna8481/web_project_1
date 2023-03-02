import React, { useState, useEffect } from "react";
import * as Api from "../utills/api";
import Category from "./Category";
import Footer from "./Footer";

function Main() {
  const [category, setCategory] = useState(undefined);

  const init = async () => {
    const res = await Api.get("categorys");
    const data = await res.data;
    setCategory(data);
  };
  useEffect(() => {
    init();
  }, []);

  if (!category) {
    return (
      <div className="container-center">
        <div className="section">
          <div>Loading...</div>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="section">
        <div className="category-container">
          {Array.isArray(category) &&
            category.map((item) => (
              <Category
                key={item._id}
                itemId={item._id}
                title={item.title}
                img={
                  process.env.REACT_APP_FILE_RES_URL +
                  "/" +
                  item.imageKey +
                  ".jpg"
                }
              ></Category>
            ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
export default Main;
