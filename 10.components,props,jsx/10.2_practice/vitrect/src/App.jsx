import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Card from "./components/card"
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="cards">
        <Card title="card 1" description="card 1 desc" />
        <Card title="card 2" description="card 2 desc" />
        <Card title="card 3" description="card 3 desc" />
        <Card title="card 4" description="card 4 desc" />
      </div>
      <Footer />
    </>
  );
}

export default App;

