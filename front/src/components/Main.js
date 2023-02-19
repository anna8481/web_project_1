import React, { useState, useEffect } from "react";

export default function Mani() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault(e);
    setTodoList(...todoList, { key: Date.now(), value: inputValue });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          // value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button type="submit">입력</button>
      </form>
      {todoList.map((item) => (
        <li key={item.key}>{item.value}</li>
      ))}
    </>
  );
}

// import * as Api from "../utills/api";
// import Category from "./Category";
// import Footer from "./Footer";

// function Main() {
//   const [category, setCategory] = useState(undefined);

//   const init = async () => {
//     const res = await Api.get("categorys");
//     const data = await res.data;
//     setCategory(data);
//   };
//   useEffect(() => {
//     init();
//   }, []);

//   return (
//     <>
//       <div className="section">
//         <div className="category-container">
//           {Array.isArray(category) &&
//             category.map((item) => (
//               <Category
//                 key={item._id}
//                 itemId={item._id}
//                 title={item.title}
//                 img={
//                   process.env.REACT_APP_FILE_RES_URL +
//                   "/" +
//                   item.imageKey +
//                   ".jpg"
//                 }
//               ></Category>
//             ))}
//         </div>
//       </div>
//       <Footer></Footer>
//     </>
//   );
// }
// export default Main;
