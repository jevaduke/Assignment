import "./App.css";
import CartScreen from "./Cart-Screen/CartScreen";
import { BrowserRouter as Router } from "react-router-dom";
import Category from "./Category-Screen/Category";
import NavBar from "./NavBar/NavBar";
import backgroundImg from "./resourses/pizza2.jpg";

function App() {
  return (
    // <div className="App">
    //   <CartScreen />
    // </div>
    <div
      className="App"
      style={{
        backgroundImage: "url(" + backgroundImg + ")",
        backgroundSize: "cover",
        height: "100vh",
        color: "#f5f5f5",
      }}
    >
      <NavBar />
      <Category />
    </div>
  );
}

export default App;
