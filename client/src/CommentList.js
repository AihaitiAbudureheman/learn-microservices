import React from "react";

export default ({ comments }) => {
  const renderedComments = comments.map((item) => {
    let content;
    if(item.status === "approved") {
      content = item.content;
    }
    if(item.status === "pending") {
      content = "This comment is waiting for approval!";
    }
    if(item.status === "rejected") {
      content = "This comment is rejected!";
    }
    return (
      <ul key={item.id}>
        <li>{content}</li>
      </ul>
    );
  });

  return <div>{renderedComments}</div>;
};
