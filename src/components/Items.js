import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/User";
import { getItems } from "../utils/Api";
import { Link } from "react-router-dom";

function Items() {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const { user } = useContext(UserContext);
  
  const handleChange = (e) => {
    e.preventDefault();
    return setCategory(e.target.value);
  };

  useEffect(() => {
    getItems(category).then((data) => {
      console.log(data);
      setItems(data);
      setLoading(false);
    });
  }, [category]);

  return loading ? (
    <h2>Loading....</h2>
  ) : !user ? (
    <h2>Kindly Login as a user</h2>
  ) : (
    <div>
      <form>
        <span>Categories: </span>
        <select onChange={handleChange}>
          <option value={"--"}>-----</option>
          <option value={"Household"}>Household</option>
          <option value={"Electronics"}>Electronics</option>
          <option value={"Clothing"}>Clothing</option>
          <option value={"Relics"}>Relics</option>
        </select>
      </form>
      {items.map((item, i) => {
        return (
          <div key={i}>
            <Link className="link" to={`/items/${item.item_id}`}>
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
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Items;
