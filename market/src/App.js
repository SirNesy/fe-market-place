import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Users from "./components/Users";
import Items from "./components/Items";
import Orders from "./components/Orders";
import Item from "./components/Item";
import Basket from "./components/Basket";
import ErrorPage from "./components/ErrorPage";
import UserProfile from "./components/UserProfile";

function App() {

  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/items" element={<Items />} />
        <Route path="/items/:item_id" element={<Item />} />
        <Route path="/users/:username/orders" element={<Orders />} />
        <Route path="/users/:username/basket" element={<Basket />} />
        <Route path="/users/:username" element={<UserProfile />} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </div>
  );
}

export default App;
