import { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  const fetchMessage = async () => {
    const response = await fetch('http://localhost:4000/api/hello');
    const data = await response.json();
    setMessage(data.message);
  };

  return (
    <div className="App">
      <h1>Basic Full Stack App</h1>
      <button onClick={fetchMessage}>Get Message</button>
      <p>{message}</p>
    </div>
  );
}

export default App;