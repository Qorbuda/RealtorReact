import { useState,useEffect } from "react";
import Comment from "./components/Comment";
import useNode from "./hooks/useNode";
import { InvalidTokenError, jwtDecode } from 'jwt-decode';

import './commentBar-style.css';

const CommentBar = () => {
    const [comments, setComments] = useState([]);
    const [user, setUser] = useState(null);
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const decodedToken = jwtDecode(token);
            setUser(decodedToken);
        }
    }, []);
  
    const handleInsertNode = (newComment) => {
      setComments((prevComments) => [
        ...prevComments,
        {
          id: prevComments.length + 1,
          agentName: user.fullname,
          createDate: new Date().toLocaleString(),
          commentText: newComment,
          agentImage:`https://api.myflats.ge/api/image/${user.img}`,
        },
      ]);
    };
    const handleEditNode = (id, updatedText) => {
        setComments((prevComments) =>
          prevComments.map((comment) =>
            comment.id === id ? { ...comment, commentText: updatedText } : comment
          )
        );
      };
   

    const handleDeleteNode = (id) => {
    setComments((prevComments) => prevComments.filter(comment => comment.id !== id));
    };
    return (
      <div className="comment-app-div">
        <Comment
          comment={comments}
          handleInsertNode={handleInsertNode}
          handleEditNode={handleEditNode}
          handleDeleteNode={handleDeleteNode}
        />
      </div>
    );
  };
  
  export default CommentBar;

