import React from "react";
import Game from "./Game";

function App() {
  const containerStyle = {
    width: "100vw",
    margin: "0 auto",
    overflow: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    backgroundImage: "url('https://www.asianscientist.com/wp-content/uploads/bfi_thumb/Technology-laser-system-pixabay-20210309-3cu1lmaf3o9xpxutq8gbuo.jpg')",
    backgroundSize: "cover",
  };

  const headingStyle = {
    fontSize: "24px", 
    fontWeight: "bold",
    marginBottom: "20px",
    color: "white",
    backgroundColor: "#060405", 
    display: "inline-block", 
    padding: "10px", 
    borderRadius: "5px",
  };


  return (
    <div className="App" style={containerStyle}>
      <div  style={headingStyle}>
      <h1 style={headingStyle}>Click the Button to get a Random Number</h1>
      <Game />
      </div>
    </div>
  );
}

export default App;