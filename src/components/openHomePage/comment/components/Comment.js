import { useState, useRef, useEffect } from "react";
import Action from "./Action";
import { ReactComponent as DownArrow } from "../assets/down-arrow.svg";
import { ReactComponent as UpArrow } from "../assets/up-arrow.svg";

import './CommentStyle.css';


const Comment = ({
  handleInsertNode,
  handleEditNode,
  handleDeleteNode,
  agentName,
  commentTime,
  agentImage,
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

  const handleNewComment = () => {
    setExpand(!expand);
    setShowInput(true);
  };

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

  return (
    <div>
      <div className={comment.id === 1 ? "inputContainer" : "commentContainer"}>
        {comment.id === 1 ? (
          <>
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
          </>
        ) : (
          <>
            <div className="testClas">
              <img src={`https://api.myflats.ge/api/image/` + agentImage} className='open-home-page-agent-iamge' />
              <div className="commentar-autor-name">{agentName}</div>
              <p className="commentar-agents-dtm">{commentTime}</p>
            </div>
            <span
              ref={inputRef}
              style={{ wordWrap: "break-word" }}
            >
              {comment.name}
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
          </>
        )}
      </div>

      <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
        {comment?.items?.map((cmnt) => {
          return (
            <Comment
              key={cmnt.id}
              handleInsertNode={handleInsertNode}
              handleEditNode={handleEditNode}
              handleDeleteNode={handleDeleteNode}
              comment={cmnt}
            />
          );
        })}
      </div>
    </div>

  );
};

export default Comment;



// <div style={{ display: "flex", marginTop: "5px" }}>
//   {editMode ? (
//     <>
//       <Action
//         className="reply"
//         type="SAVE"
//         handleClick={onAddComment}
//       />
//       <Action
//         className="reply"
//         type="CANCEL"
//         handleClick={() => {
//           if (inputRef.current)
//             inputRef.current.innerText = comment.name;
//           setEditMode(false);
//         }}
//       />
//     </>
//   ) : (
//     <>
//       <Action
//         className="reply"
//         type={
//           <>
//             {expand ? (
//               <UpArrow width="10px" height="10px" />
//             ) : (
//               <DownArrow width="10px" height="10px" />
//             )}{" "}
//             REPLY
//           </>
//         }
//         handleClick={handleNewComment}
//       />
//       <Action
//         className="reply"
//         type="EDIT"
//         handleClick={() => {
//           setEditMode(true);
//         }}
//       />
//       <Action
//         className="reply"
//         type="DELETE"
//         handleClick={handleDelete}
//       />
//     </>
//   )}
// </div>