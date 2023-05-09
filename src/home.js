import { useState } from "react";

const Home = () => {
  // using state (useState hook)
  useState("mario");
  const [name, setName] = useState("mario"); // you can use this hook as many times as you want
  const [age, setAge] = useState(25);

  // let name = "mario";
  // const handleClick = (e) => { // CLICK EVENTS
  // event handler, you can call the functions whatever you want (const handleClick
  // console.log("hello, ninjas", e);
  // };

  const handleClick = () => {
    setName("luigi"); // this is how you change the state
    setAge(30);
  };

  // const handleClickAgain = (name, e) => {
  //   console.log("hello " + name, e.target);
  // };

  return (
    <div className='home'>
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me</button>
      <p>
        {name} is {age} years old
      </p>
      {/* <button onClick={(e) => handleClickAgain("mario", e)}>
        Click me again
      </button> */}
    </div>
  );
};

export default Home;
