import { useState } from "react";

const Home = () => {
  const [name, setname] = useState("Shanaka");

  const handleClick = () => {
    setname("Prince");
  };
  return (
    <div className="Home">
      <h2>Home Page</h2>

      <p>{name}</p>
      <button onClick={handleClick}>HEllo Plz Click</button>
    </div>
  );
};

export default Home;
