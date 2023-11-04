import "dotenv/config";
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello From Home Route</h1>");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      joke: "Why don't scientists trust atoms?",
      punchline: "Because they make up everything!",
    },
    {
      id: 2,
      joke: "I used to play piano by ear, but now I use my hands.",
      punchline: null,
    },
    {
      id: 3,
      joke: "Why did the scarecrow win an award?",
      punchline: "Because he was outstanding in his field!",
    },
    {
      id: 4,
      joke: "Parallel lines have so much in common...",
      punchline: "It's a shame they'll never meet.",
    },
    {
      id: 5,
      joke: "Why don't skeletons fight each other?",
      punchline: "They don't have the guts!",
    },
    {
      id: 6,
      joke: "I'm reading a book on anti-gravity.",
      punchline: "It's impossible to put down!",
    },
    {
      id: 7,
      joke: "Why don't eggs tell jokes?",
      punchline: "Because they might crack up!",
    },
    {
      id: 8,
      joke: "I used to be a baker, but I couldn't make enough dough.",
      punchline: null,
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
