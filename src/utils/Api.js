import axios from "axios";

const marketApi = axios.create({
  baseURL: "https://calm-blue-crocodile-boot.cyclic.app/api",
});

export const getUsers = () => {
  return marketApi.get("/users").then(({ data }) => {
    return data.users;
  });
};

export const getUserProfile = (username) => {
  return marketApi.get(`users/${username}`).then(({ data }) => {
    return data.user;
  });
};

export const getItems = (category) => {
  return marketApi.get(`/items/?category_name=${category}`).then(({ data }) => {
    return data.items;
  });
};
export const getItem = (item_id) => {
  return marketApi.get(`/items/${item_id}`).then(({ data }) => {
    // console.log(data.item);
    return data.item;
  });
};
export const postBasket = (item_id, username) => {
  let path = `/users/${username}/basket`;
  return marketApi.post(path, { item_id: item_id }).then(({ data }) => {
    // console.log(data.item);
    return data.item;
  });
};
export const getBasket = (username) => {
  let path = `/users/${username}/basket`;
  return marketApi.get(path).then(({ data }) => {
    console.log(data.items);
    return data.items;
  });
};

export const postOrder = (item_id, username) => {
  let path = `/users/${username}/orders`;
  return marketApi.post(path, { item_id: item_id }).then(({ data }) => {
    // console.log(data.item);
    return data.item;
  });
};

export const getOrder = (username) => {
  let path = `/users/${username}/orders`;
  return marketApi.get(path).then(({ data }) => {
    return data.items;
  });
};

export const deleteBasketItem = (item_id, username) => {
  let path = `/users/${username}/basket/${item_id}`;
  return marketApi.delete(path).then(({ data }) => {
    return data;
  })
}

export const increaseKudos = (username) => {
  let path = `/users/${username}`
  return marketApi.patch(path, {kudos_inc: 1}).then(({ data }) => {
    return data.user
  })
}
// export const editAvatar = (username, newUrl) => {
//   let path = `/users/${username}`
//   return marketApi.patch(path, {avatar_url: `${newUrl}`}).then(({ data }) => {
//     return data.user
//   })
// }