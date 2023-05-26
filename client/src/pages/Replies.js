// Import necessary packages and hooks
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ShowAlert from "../components/ShowAlert";

// Define Replies component
const Replies = () => {
  // Initialize state variables
  const [replyList, setReplyList] = useState([]);
  const [reply, setReply] = useState("");
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const { id } = useParams(); // Get thread id from URL parameters
  const [showAlert, setShowAlert] = useState(false);

  // Fetch replies when component mounts or thread id changes
  useEffect(() => {
    const fetchReplies = () => {
      // Send POST request to server to fetch replies
      fetch("http://localhost:4000/api/thread/replies", {
        method: "POST",
        body: JSON.stringify({
          id,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          // Update state with fetched replies and title
          setReplyList(data.replies);
          setTitle(data.title);
        })
        .catch((err) => console.error(err)); // Log any errors
    };
    fetchReplies(); // Call function to fetch replies
  }, [id]); // Depend on id to refetch when it changes

  // Function to add reply to thread
  const addReply = () => {
    // Log user id from localStorage
    console.log("userId:", localStorage.getItem("_id"));

    // Send POST request to server to add reply
    fetch("http://localhost:4000/api/create/reply", {
      method: "POST",
      body: JSON.stringify({
        id,
        userId: localStorage.getItem("_id"), // User id from localStorage
        reply, // Reply text from state
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // Alert user of success or error message
        if (data.message) {
          alert(data.message);
        } else if (data.error_message) {
          alert(data.error_message);
        }
      })
      .catch((err) => console.error(err)); // Log any errors
  };

  // Function to handle reply form submission
  const handleSubmitReply = (e) => {
    e.preventDefault(); // Prevent form default behaviour
    addReply(); // Add reply
    setReply(""); // Clear reply input
    window.location.reload(); // Refresh the page
  };

  // Render Replies component
  return (
    <main className="replies">
      <h1 className="repliesTitle">{title}</h1>

      {/* Reply form */}
      <form className="modal__content" onSubmit={handleSubmitReply}>
        <label htmlFor="reply">Reply to the thread</label>
        <textarea
          rows={5}
          value={reply}
          onChange={(e) => setReply(e.target.value)}
          type="text"
          name="reply"
          className="modalInput"
        />

        <button className="modalBtn">SEND</button>
      </form>
      {/* If there are no replies, return "no replies" */}
      {replyList.length === 0 && (
        <div className="thread__item">
          <p>No replies yet</p>
        </div>
      )}
      {/* If there are replies, return the replies */}
      {replyList.length > 0 && (
        <div className="thread__container">
          {/* Map through each reply in the replyList and display it */}
          {replyList.map((reply) => (
            <div className="thread__item">
              <p>{reply.text}</p>
              <div className="react__container">
                {/* Display the name of the user who posted the reply */}
                <p style={{ opacity: "0.5" }}>by {reply.name}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

// Export Replies component so it can be imported and used in other files
export default Replies;
