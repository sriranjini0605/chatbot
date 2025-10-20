import { useState, useEffect } from "react";

function App() {

  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchMessage = async() => {
      const res = await fetch("/api/hello")
      const data = await res.json();
      setMessage(data.message)
    }
    fetchMessage();
  },[]);
  
  return <p>{message}</p>
    
}

export default App
