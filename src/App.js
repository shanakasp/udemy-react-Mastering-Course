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
      <div className="example">
        {" "}
        <Example Name="User ABC" Age="22" Job="Carpenter"></Example>
        <Example Name="User ABC" Age="22" Job="Carpenter"></Example>
      </div>

      <h2>{title}</h2>
      <p>{Math.random() * 10}</p>
    </div>
  );
}

const Example = (props) => {
  return (
    <div>
      <h3>Name: {props.Name}</h3> <br></br>
      <h3>Age: {props.Age}</h3> <br></br>
      <h3>Job: {props.Job}</h3>
      <br></br>
    </div>
  );
};

// const Example = () => {
//   return (
//     <div>
//       <div>
//         <h3>Name : User ABC</h3>
//         <h3>Age: 22</h3>
//         <h3>Job: Carpenter</h3> <hr />
//       </div>

//       <div>
//         <h3>Name : User ABC</h3>
//         <h3>Age: 22</h3>
//         <h3>Job: Carpenter</h3>
//         <hr />
//       </div>

//       <div>
//         <h3>Name : User ABC</h3>
//         <h3>Age: 22</h3>
//         <h3>Job: Carpenter</h3>
//         <hr />
//       </div>
//     </div>
//   );
// };

export default App;
