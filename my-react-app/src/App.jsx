import { useState } from 'react';
import Greeting from './Greeting';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Layout from "./Layout";

function App() {
  return (
    <Routes>
      {/* Use Layout for consistent navigation */}
      <Route path="/" element={<Layout />}>
        {/* Home Route contains all UI elements */}
        <Route index element={<HomePage />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

// Move your static UI into a new component used on Home Page
function HomePage() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(""); 
  const [isVisible, setIsVisible] = useState(true);
  const isLoggedIn = true; 

  const handleClick = (name) => alert(`Hello, ${name}!`);
  const handleInputChange = (event) => setInputValue(event.target.value);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div>
      <h1>Hello, React!</h1>
      <p>This is my first React app.</p>

      <h1>{isLoggedIn ? "Welcome back!" : "Please log in."}</h1>
      <Greeting name="Yemao" />

      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <h1>Event Handling Example</h1>
      <button onClick={() => handleClick("Yemao")}>Click Me</button>

      <h1>Input Handling</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
      <p>You typed: {inputValue}</p>

      <h1>Toggle Visibility</h1>
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide" : "Show"} Message
      </button>
      {isVisible && <p>This is a toggled message!</p>}
    </div>
  );
}

export default App;
