import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/User";
import { getItem, postBasket } from "../utils/Api";

function Item() {
  const { item_id } = useParams();
  const [item, setItem] = useState({});
  const { user } = useContext(UserContext);

  const handleOnClick = (item_id, item_name) => {
    postBasket(item_id, user.username).catch((error) => {
      console.log(error.message);
    });
    return alert(`${item_name} Added to Basket Successfully!`);
  };

  useEffect(() => {
    getItem(item_id).then((data) => {
      setItem(data);
    });
  }, []);

  //   useEffect(() => {
  //     postOrder(itemId, username).then((data) => {
  //       setItem(data);
  //       setOrderState(false);
  //      })
  //      .catch((error) => {
  //         console.log(error.message);
  //     })

  //   }, [itemId, username]);

  return (
    <div className="item-container">
      <div>
        <div id="item-name">{item.item_name}</div>
        <img
          id="item-image"
          width={220}
          alt={"item up for sale"}
          src={item.img_url}
        />
      </div>
      <div className="item-details">
        <div>{item.category_name}</div>
        <div>{item.description}</div>
        <div>£{item.price}</div>

        <button
          onClick={() => {
            handleOnClick(item.item_id, user.username, item.item_name);
          }}
        >
          🛒
        </button>
      </div>
    </div>
  );
}

export default Item;
