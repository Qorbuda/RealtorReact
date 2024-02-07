import { useState } from "react";
import Comment from "./components/Comment";
import useNode from "./hooks/useNode";

import './commentBar-style.css';


const comments = {
    id: 1,
    items: [],
};

const CommentBar = ({ commentstest }) => {
    const [commentsData, setCommentsData] = useState(comments);

    const { insertNode, editNode, deleteNode } = useNode();

    const handleInsertNode = (folderId, item) => {
        const finalStructure = insertNode(commentsData, folderId, item);
        setCommentsData(finalStructure);
    };

    const handleEditNode = (folderId, value) => {
        const finalStructure = editNode(commentsData, folderId, value);
        setCommentsData(finalStructure);
    };

    const handleDeleteNode = (folderId) => {
        const finalStructure = deleteNode(commentsData, folderId);
        const temp = { ...finalStructure };
        setCommentsData(temp);
    };

    const adassdhandleDeleteNode = (commentstest) => {
        return (
            <Comment
                key={commentstest.id}
                agentName={commentstest.agentName}
                agentImage={commentstest.agentImage}
                commentTime={commentstest.createDate}
                handleInsertNode={handleInsertNode}
                handleEditNode={handleEditNode}
                handleDeleteNode={handleDeleteNode}
                comment={{
                    id: commentstest.id,
                    items: [],
                    name: commentstest.commentText
                }}
            />
        );
    };



    const asdhandleDeleteNode = (commentstest) => {
        if (!commentstest){
            return
        }
        let testArr = []
        for(let i = 0; i < commentstest.length; i++){
            testArr.push(adassdhandleDeleteNode(commentstest[i]))
        }
        return (
            testArr
        );
    };

    return (
        <div className="comment-app-div">
            <Comment
                handleInsertNode={handleInsertNode}
                handleEditNode={handleEditNode}
                handleDeleteNode={handleDeleteNode}
                comment={commentsData}
            />
            {asdhandleDeleteNode(commentstest)}
        </div>
    );
}

export default CommentBar;