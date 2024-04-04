import { useState, useRef, useEffect } from "react";
import Action from "./Action";
import { ReactComponent as DownArrow } from "../assets/down-arrow.svg";
import { ReactComponent as UpArrow } from "../assets/up-arrow.svg";

import './CommentStyle.css';


const Comment = ({
  handleInsertNode,
  handleEditNode,
  handleDeleteNode,
  comment,
}) => {
  const [input, setInput] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [expand, setExpand] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef?.current?.focus();
  }, [editMode]);


  const onAddComment = () => {
    if (editMode) {
      handleEditNode(comment.id, inputRef?.current?.innerText);
    } else {
      setExpand(true);
      handleInsertNode(comment.id, input);
      setShowInput(false);
      setInput("");
    }

    if (editMode) setEditMode(false);
  };

  const handleDelete = () => {
    handleDeleteNode(comment.id);
  };


  function addCommentFun(agentName, commentTIme, CommentText, agentImage) {
    return (
      <div className="coments-info-div">
        <div className="testClas">
          <img src={`https://api.myflats.ge/api/image/` + agentImage} className='open-home-page-agent-iamge' />
          <div className="commentar-autor-name">{agentName}</div>
          <p className="commentar-agents-dtm">{commentTIme}</p>
        </div>
        <span
          ref={inputRef}
          style={{ wordWrap: "break-word" }}
        >
          {CommentText}
        </span>

        <div style={{ display: "flex", marginTop: "5px" }}>
          {
            <Action
              className="reply"
              type="DELETE"
              handleClick={handleDelete}
            />
          }
        </div>
      </div>
    )
  }

  function oldCommentSort(commentData) {
    let commentArr = []

    for (let i = 0; i < commentData.length; i++) {
      commentArr.push(addCommentFun(commentData[i].agentName, commentData[i].createDate, commentData[i].commentText, commentData[i].agentImage,))
    }

    return(
      <div className="coments-info-full-div">
        {commentArr}
      </div>
    )
  }

  return (
    <div>
      <div className="comment-page-input-full-div">
        <input
          type="text"
          className="inputContainer__input first_input"
          autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="your comment"
        />

        <Action
          className="commentar-button"
          type="COMMENT"
          handleClick={onAddComment}
        />
      </div>
      <div className="comment-page-comment-full-div">
        {oldCommentSort(comment)}
      </div>

    </div>

  );
};

export default Comment;

