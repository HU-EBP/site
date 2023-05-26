// Require the needed modules for the project
const express = require("express");
const cors = require("cors");
// Initialise an Express application
const app = express();
const PORT = 4000;

// Use express.urlencoded to parse incoming requests with urlencoded payloads
app.use(express.urlencoded({ extended: true }));
// Use express.json to parse incoming requests with JSON payloads
app.use(express.json());
// Use cors as a middleware to enable Cross-Origin Resource Sharing
app.use(cors());

// Define an empty array to store user data
const users = [];
// Define an empty array to store thread data
const threadList = [];

// Function to generate random IDs
const generateID = () => Math.random().toString(36).substring(2, 10);

// Define POST endpoint for logging in a user
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  let result = users.filter(
    (user) => user.email === email && user.password === password
  );

  if (result.length !== 1) {
    return res.json({
      error_message: "Incorrect credentials",
    });
  }

  res.json({
    message: "Login successfully",
    id: result[0].id,
  });
});

// Define POST endpoint for registering a new user
app.post("/api/register", async (req, res) => {
  const { email, password, username } = req.body;
  const id = generateID();
  const result = users.filter(
    (user) => user.email === email && user.password === password
  );

  if (result.length === 0) {
    const newUser = { id, email, password, username };
    users.push(newUser);
    return res.json({
      message: "Account created successfully!",
    });
  }
  res.json({
    error_message: "User already exists",
  });
});

// Define POST endpoint for creating a new thread
app.post("/api/create/thread", async (req, res) => {
  const { thread, userId } = req.body;
  let threadId = generateID();
  threadList.unshift({
    id: threadId,
    title: thread,
    userId,
    replies: [],
    likes: [],
  });

  res.json({
    message: "Thread created successfully!",
    threads: threadList,
  });
});

// Define GET endpoint for retrieving all threads
app.get("/api/all/threads", (req, res) => {
  res.json({
    threads: threadList,
  });
});

// Define POST endpoint for liking a thread
app.post("/api/thread/like", (req, res) => {
  const { threadId, userId } = req.body;
  const result = threadList.filter((thread) => thread.id === threadId);
  const threadLikes = result[0].likes;

  const authenticateReaction = threadLikes.filter((user) => user === userId);

  if (authenticateReaction.length === 0) {
    threadLikes.push(userId);
    return res.json({
      message: "You've reacted to the post!",
    });
  }
  res.json({
    error_message: "You can only react once!",
  });
});

// Define POST endpoint for retrieving replies of a thread
app.post("/api/thread/replies", (req, res) => {
  const { id } = req.body;
  const result = threadList.filter((thread) => thread.id === id);
  res.json({
    replies: result[0].replies,
    title: result[0].title,
  });
});

// Define POST endpoint for creating a new reply in a thread
app.post("/api/create/reply", async (req, res) => {
  const { id, userId, reply } = req.body;
  const result = threadList.filter((thread) => thread.id === id);
  const username = users.filter((user) => user.id === userId);

  // Add the new reply to the start of the replies array of the selected thread
  result[0].replies.unshift({ name: username[0].username, text: reply });

  res.json({
    message: "Response added successfully!",
  });
});

// Starts the server and listens for connections on the specified port
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
