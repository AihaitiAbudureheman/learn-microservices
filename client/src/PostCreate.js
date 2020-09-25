import React, { useState } from "react";
import axios from "axios";

export default () => {
  const [title, setTitle] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const rewPost = await axios.post("http://posts.com/posts/create", {
      title: title,
    });
    console.log("new post is created", rewPost);

    setTitle("");
  };
  return (
    <form>
      <div className="form-group">
        <label htmlFor="postTitle">Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="form-control"
          id="postTitle"
        />
      </div>
      <button type="submit" className="btn btn-primary" onClick={onSubmit}>
        Submit
      </button>
    </form>
  );
};
