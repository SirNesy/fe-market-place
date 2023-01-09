import axios from "axios";
// import React from "react";

const marketApi = axios.create({
  baseURL: "https://calm-blue-crocodile-boot.cyclic.app",
});

export const getItems = () => {
  return marketApi.get("/api/items").then(({data}) => {
    console.log(data);
  });
};

// https://calm-blue-crocodile-boot.cyclic.app/docs/Items/get-items

//