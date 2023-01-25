import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/User";
import { getOrder } from "../utils/Api";
import ErrorPage from "./ErrorPage";

function Orders() {
  const { user } = useContext(UserContext);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getOrder(user.username)
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((err) => setError(err));
  }, [user.username]);

  if (error) {
    return <ErrorPage message={error} />;
  }

  return loading ? (
    <h2>Loading...</h2>
  ) : !user.username ? (
    <h2>Kindly Login as a user</h2>
  ) : (
    <div>
      <h3>Your Placed order</h3>{" "}
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
          </div>
        );
      })}
    </div>
  );
}

export default Orders;
