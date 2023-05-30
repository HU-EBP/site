import React, { useEffect, useState } from "react";
import Likes from "../utils/Likes";
import Comments from "../utils/Comments";
import { useNavigate, Link } from "react-router-dom";
import "../components/forum.css";
import LoginFrame from "./LoginFrame";
import ShowAlert from "../components/ShowAlert";

// Define a Forum component
const Forum = () => {
  const navigate = useNavigate(); // Initialize navigation function

  // Function to check if a user is logged in
  const isUserLoggedIn = () => {
    // Check if there's an id item in local storage
    if (localStorage.getItem("_id")) {
      return true;
    }
    // If there isn't, return false
    return false;
  };

  // If the user is not logged in, render the LoginFrame
  if (isUserLoggedIn() === false) {
    return (
      <>
        {/* Login section */}
        <LoginFrame></LoginFrame>
      </>
    );
  } else {
    // If the user is logged in
    const [title, setTitle] = useState(""); // State for the title being created
    const [description, setDescription] = useState(""); // State for the description being created
    const [thread, setThread] = useState("");

    const [threadList, setThreadList] = useState([]); // State for the list of threads
    const [tags, setTags] = useState("");
    const [selectedTags, setSelectedTags] = useState([]);

    // Run when the component is first rendered
    useEffect(() => {
      // Function to check if the user is still logged in
      const checkUser = () => {
        // If there's no id item in local storage, navigate to the home page
        if (!localStorage.getItem("_id")) {
          navigate("/");
        } else {
          // If there is an id item in local storage, fetch the list of all threads
          fetch("http://localhost:4000/api/all/threads")
            .then((res) => res.json())
            .then((data) => setThreadList(data.threads)) // Update the thread list state with the data from the server
            .catch((err) => console.error(err)); // Log any errors
        }
      };
      // Call checkUser function
      checkUser();
    }, [navigate]); // Re-run when the navigate function changes

    const createThread = () => {
      fetch("http://localhost:4000/api/create/thread", {
        method: "POST",
        body: JSON.stringify({
          title,
          description,
          id: localStorage.getItem("_id"),
          tags: [tags],
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.message);
          setThreadList(data.threads);

          // Reset de titel en beschrijving velden
          setTitle("");
          setDescription("");
        })
        .catch((err) => console.error(err));
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      createThread(); // Create a new thread
      setThread(""); // Reset the thread state
    };

    const handleTagSelection = (e) => {
      const { value, checked } = e.target;
      setSelectedTags((prevTags) =>
        checked ? [...prevTags, value] : prevTags.filter((tag) => tag !== value)
      );
    };

    // Return the Forum UI
    return (
      <>
        <main className="forum">
          <h1>Forum</h1>
          <div className="create-thread">
            <h2 className="forumTitle">Create a post</h2>
            <form className="forumForm" onSubmit={handleSubmit}>
              <div className="forum__container">
                <input
                  type="text"
                  name="title"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Title"
                />
                <input
                  type="text"
                  name="description"
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Description"
                />
                <select
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
<<<<<<< HEAD
                  placeholder="Tags (comma separated)"
                /> */}
                 <select 
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          // Voeg hier eventueel een meervoudige selectie toe met 'multiple' attribuut
        >
          <option value="">Select a tag</option>
          <option value="Game">Game</option>
          <option value="Puzzle">Puzzle</option>
          {/* Voeg hier extra opties toe voor andere tags */}
        </select>
=======
                  // Voeg hier eventueel een meervoudige selectie toe met 'multiple' attribuut
                >
                  <option value="">Select a tag</option>
                  <option value="Game">Game</option>
                  <option value="Puzzle">Puzzle</option>
                  {/* Voeg hier extra opties toe voor andere tags */}
                </select>
>>>>>>> 5af2892c10d04fffeffc0df02a903f3b3e09b066
              </div>
              <button className="forumBtn">CREATE POST</button>
            </form>
          </div>

          <div className="thread__container">
            <h2 className="forumTitle">Posts</h2>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="Game"
                  checked={selectedTags.includes("Game")}
                  onChange={(e) => handleTagSelection(e)}
                />
                Game
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Puzzle"
                  checked={selectedTags.includes("Puzzle")}
                  onChange={(e) => handleTagSelection(e)}
                />
                Puzzle
              </label>
              {/* Voeg hier extra checkboxes toe voor andere tags */}
            </div>
            {threadList
              .filter((thread) =>
                selectedTags.length === 0
                  ? true
                  : thread.tags.some((tag) => selectedTags.includes(tag))
              )
              .map((thread) => (
                <div className="thread__item" key={thread.id}>
                  <p>{thread.title}</p>
                  <p>{thread.description}</p>
                  <p>{thread.tags}</p>
                  <div className="react__container">
                    <Likes
                      numberOfLikes={thread.likes.length}
                      threadId={thread.id}
                    />
                    <Comments
                      numberOfComments={thread.replies.length}
                      threadId={thread.id}
                      title={thread.title}
                    />
                  </div>
                </div>
              ))}
          </div>
        </main>
      </>
    );
  }
};

export default Forum;
