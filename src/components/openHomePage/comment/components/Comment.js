import { useState, useRef } from "react";
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
  const [editMode, setEditMode] = useState(null);
  const [editedText, setEditedText] = useState("");
  const inputRef = useRef(null);

  const onAddComment = () => {
    if (input.trim() === "") return;
    handleInsertNode(input);
    setInput("");
  };

  const handleEdit = (id, currentText) => {
    setEditMode(id);
    setEditedText(currentText);
    inputRef?.current?.focus(); 
  };

  const handleSaveEdit = (id) => {
    handleEditNode(id, editedText);
    setEditMode(null);
    setEditedText("");
  };

  const addCommentFun = (agentName, commentTime, commentText, agentImage, id) => {
    const isEditing = editMode === id;
    return (
      <div className="comments-info-div" key={id}>
        <div className="testClass">
          <div className="agent">
            <img className='comment-agent-image' src={agentImage} alt="Image" />
            <h2 className="comment-author-name">{agentName}</h2>
          </div>
          <p className="comment-agent-dtm">{commentTime}</p>
        </div>
        {isEditing ? (
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="edit-input"
            ref={inputRef}
            onKeyDown={(e) => e.key === 'Enter' && handleSaveEdit(id)}
          />
        ) : (
          <span className="comment-span-class" style={{ wordWrap: "break-word" }}>{commentText}</span>
        )}
        <div style={{ display: "flex", marginTop: "5px" }}>
          {isEditing ? (
            <Action
              className="actions_buttons save"
              type="SAVE"
              handleClick={() => handleSaveEdit(id)}
            />
          ) : (
            <div className="actions">
              <Action
                className="actions_buttons edit"
                type="EDIT"
                handleClick={() => handleEdit(id, commentText)}
                onKeyDown={(e) => e.key === 'Enter' && handleEdit(id, commentText)}
              />
              <Action
                className="actions_buttons delete"
                type="DELETE"
                handleClick={() => handleDeleteNode(id)}
              />
            </div>
          )}
        </div>
      </div>
    );
  };
  
  const oldCommentSort = (commentData) => {
    return (
      <div className="comments-info-full-div">
        {commentData.map((data) =>
          addCommentFun(data.agentName, data.createDate, data.commentText, data.agentImage, data.id)
        )}
      </div>
    );
  };

  return (
    <div>
      <div className="comment-page-input-full-div">
        <input
          type="text"
          className="inputContainer__input first_input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && onAddComment()}
          placeholder="Your comment"
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
