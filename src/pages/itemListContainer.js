import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../Components/ItemList/itemList";
import { getCategoryProductsById } from "../utils/index";

function ItemListContainer() {
  const [products, setProduct] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const itemsFiltrados = getCategoryProductsById(categoryId);
    setProduct(itemsFiltrados);
  }, []);

  return (
    <div className="contenedor">
      <ItemList items={products} />
    </div>
  );
}
export default ItemListContainer;

// import React from "react";
// import { useParams } from 'react-router-dom'
// import Counter from "./Item/counter";

// const ItemListContainer = (props) => {
//   return (
//     <div className="contenedor">
//       <Counter productNo="One" />
//       <Counter productNo="Two" />
//       <Counter productNo="Three" />
//       <Counter productNo="Four" />
//       <Counter productNo="Five" />
//       <Counter productNo="Six" />
//       <Counter productNo="Seven" />
//       <Counter productNo="Eight" />
//     </div>
//   );
// };

// export default ItemListContainer;
