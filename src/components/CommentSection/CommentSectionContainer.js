// You will add code to this file
import React, {useState} from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
    // Add state for the comments
    const [comments, setComments] = useState(props.comments);

    const submitComment = (comment) =>{
        const newComment = {
            username: "ClydeFrog04",
            text: comment,
        };
        setComments(comments.concat(newComment));
    }

    return (
        <div>
            {//map through and add comments to post
                comments.map((comment, index) => {
                    return <Comment key={index} comment={comment}/>;
                })
            }
            <CommentInput submitComment={submitComment}/>
        </div>
    );
};

export default CommentSection;
