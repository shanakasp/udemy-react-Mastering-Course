import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";

function App() {
  const title = "Welcome to the site";
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content">App Component</div>
      <Home></Home>
      <h2>{title}</h2>
      <p>{Math.random() * 10}</p>
    </div>
  );
}

export default App;
