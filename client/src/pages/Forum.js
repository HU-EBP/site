import React, { useState } from "react";
import "../components/forum.css";
import "../index.css";

const Forum = () => {
  const [thread, setThread] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ thread });
    setThread("");
  };
  return (
    <>
      <main className="forum">
        <h2 className="forumTitle">Create a Thread</h2>
        <form className="forumForm" onSubmit={handleSubmit}>
          <div className="forum__container">
            <label htmlFor="thread">Title / Description</label>
            <input
              type="text"
              name="thread"
              required
              value={thread}
              onChange={(e) => setThread(e.target.value)}
            />
          </div>
          <button className="forumBtn">CREATE THREAD</button>
        </form>
      </main>
    </>
  );
};

export default Forum;
