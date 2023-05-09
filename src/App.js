import Navbar from "./Navbar";
import Home from "./home";

function App() {
  return (
    <div className='App'>
      <Navbar /> {/* this is a component, this is a self closing tag */}
      <div className='content'>
        <Home />
      </div>
    </div>
  );
  // const title = "Welcome to the new blog!";
  // const likes = 50;
  // const link = "http://www.google.com";
  // // const person = { name: "yoshi", age: 30 };

  // return (
  //   <div className='App'>
  //     <div className='content'>
  //       <h1> {title} </h1>
  //       <p>Liked {likes} times</p>

  //       {/* <p>{person}</p> */}

  //       <p>{10}</p>
  //       <p>{"hello, ninjas"}</p>
  //       <p>{[1, 2, 3, 4, 5]}</p>
  //       <p>{Math.random() * 10}</p>

  //       <a href={link}>Google Site</a>
  //     </div>
  //   </div>
  // );
}

export default App;
