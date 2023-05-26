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
    const [thread, setThread] = useState(""); // State for the thread being created
    const [threadList, setThreadList] = useState([]); // State for the list of threads

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

    // Function to create a new thread
    const createThread = () => {
      fetch("http://localhost:4000/api/create/thread", {
        method: "POST",
        body: JSON.stringify({
          thread,
          id: localStorage.getItem("_id"),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.message);
          setThreadList(data.threads);
        })
        .catch((err) => console.error(err));
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      createThread(); // Create a new thread
      setThread(""); // Reset the thread state
    };

    // Return the Forum UI
    return (
      <>
        <main className="forum">
          <h1>Forum</h1>
          <div className="create-thread">
            <h2 className="forumTitle">Create a Thread</h2>
            <form className="forumForm" onSubmit={handleSubmit}>
              <div className="forum__container">
                <input
                  type="text"
                  name="thread"
                  required
                  value={thread}
                  onChange={(e) => setThread(e.target.value)}
                  placeholder="Title / description"
                />
              </div>
              <button className="forumBtn">CREATE THREAD</button>
            </form>
          </div>

          <div className="thread__container">
            <h2 className="forumTitle">Threads</h2>
            {threadList.map((thread) => (
              <div className="thread__item" key={thread.id}>
                <p>{thread.title}</p>
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
