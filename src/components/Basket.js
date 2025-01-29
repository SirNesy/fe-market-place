import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/User";
import { deleteBasketItem, getBasket, postOrder } from "../utils/Api";
import ErrorPage from "./ErrorPage";

function Basket() {
  const { user } = useContext(UserContext);
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleOnclick = (id) => {
    postOrder(id, user.username)
      .then((data) => {
        setOrder(data);
      })
      .catch((err) => {
        setError(err);
      });
    alert(`Order Successfully placed.`)
    setItems((current_items) => {
        let current_items_copy = [...current_items];
        const newItems = current_items_copy.filter((item) => { 
          let item_obj = { ...item };
          if (item_obj.item_id !== id) {
            return item_obj;
          }
        });
        return newItems;
      });
  };
  const handleDelete = (id) => {
    const user_name = user.username;
    deleteBasketItem(id, user_name).then((data) => {
      return data;
    });
    alert(`Item removed from basket`);
    setItems((current_items) => {
      let current_items_copy = [...current_items];
      const newItems = current_items_copy.filter((item) => {
        let item_obj = { ...item };
        if (item_obj.item_id !== id) {
          return item_obj;
        }
      });
      return newItems;
    });
  };

  useEffect(() => {
    getBasket(user.username)
      .then((data) => {
        setLoading(false);
        setItems(data);
      })
      .catch((err) => {
        setError(err);
      });
  }, [user.username]);

  if (error) {
    return <ErrorPage message={error} />;
  }

  return loading ? (
    <h2>Loading....</h2>
  ) : !user.username ? (
    <h2>Kindly Login as a user</h2>
  ) : (
    <div>
      {items.map((item, i) => {
        return (
          <div key={i}>
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
              </div>
            </div>
            <button >
            <span className="fa-solid fa-bags-shopping" onClick={() => handleOnclick(item.item_id)}>  Place Order</span>
             
            </button>

            <button className="delete">
              <span
                className="fa-solid fa-trash"
                onClick={() => handleDelete(item.item_id)}
              >
                Delete
              </span>
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Basket;
