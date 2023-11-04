import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <>
      <h1>Connecting node.js backend with React.js Frontend</h1>
      <p>Jokes {jokes.length}</p>

      {jokes.map((joke, index) => (
        <div key={joke.id}>
          <h3>
            ({joke.id}):{joke.joke}
          </h3>
          <p>{joke.punchline}</p>
        </div>
      ))}
    </>
  );
}

export default App;
