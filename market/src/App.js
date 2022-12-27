import { useEffect, useState } from "react";
import "./App.css";
import { getItems } from "./Api.js";

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getItems().then((data) => {
      console.log(data);
      setItems(data);
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">hii</header>
    </div>
  );
}

export default App;
