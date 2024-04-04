import { useState } from "react";
import Comment from "./components/Comment";
import useNode from "./hooks/useNode";

import './commentBar-style.css';


const comments = {  
    id: 1,
    items: [],
};

const CommentBar = ({ commentstest }) => {

    return (
        <div className="comment-app-div">
            <Comment
                comment={commentstest}
            />
        </div>
    );
}

export default CommentBar;