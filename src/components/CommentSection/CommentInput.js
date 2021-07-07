// You do not need to do anything in this file
import React, {useState} from 'react';

const CommentInput = props => {
    const [comment, setComment] = useState("");//set up a local comment state to track what the user types. This will then be passed to the comment
    //container submitComment function so it can be added and rendered to the page :]
    return (
        <form className="comment-form"
              onSubmit={(event) => {
                  event.preventDefault();//prevent default so we don't lose our new comment, since we don't have any backend code right now
                  if(comment.replace(/ /g, "") !== "") props.submitComment(comment);//now we can't post blank comments.
                  //note to self: javascript regex pattern is: (/patternHere/optionalFlagsHere, "textToReplaceWith"). compared to java: ("[patternAndFlagsHere]", "textToReplaceWith")
              }}>
            <input
                type="text"
                value={props.comment}
                placeholder="Add comment... "
                onChange={(event) => {
                    setComment(event.target.value);//set the value as the user types it so it can be passed in the submit
                }}
            />
        </form>
    );
};

export default CommentInput;
