import React, { useEffect, useState } from "react";
import Likes from "../utils/Likes";
import Comments from "../utils/Comments";
import { useNavigate, Link } from "react-router-dom";
import "../components/forum.css";
import LoginFrame from "./LoginFrame";
import ShowAlert from "../components/ShowAlert";

const Forum = () => {
  const navigate = useNavigate();
  const isUserLoggedIn = () => {
    if (localStorage.getItem("_id")) {
      return true;
    }
    return false;
  };

  if (isUserLoggedIn() === false) {
    return (
      <>
        {/* Login section */}
        <LoginFrame></LoginFrame>
      </>
    );
  } else {
    const [thread, setThread] = useState("");
    const [threadList, setThreadList] = useState([]);

    useEffect(() => {
      const checkUser = () => {
        if (!localStorage.getItem("_id")) {
          navigate("/");
        } else {
          fetch("http://localhost:4000/api/all/threads")
            .then((res) => res.json())
            .then((data) => setThreadList(data.threads))
            .catch((err) => console.error(err));
        }
      };
      checkUser();
    }, [navigate]);

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
    const handleSubmit = (e) => {
      e.preventDefault();
      createThread();
      setThread("");
    };

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
