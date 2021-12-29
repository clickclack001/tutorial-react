import React, {useEffect, useState} from 'react';
import FeedBackItemComponent from "./FeedBackItemComponent";
import FeedBackFormComponent from "./FeedBackFormComponent";
import EmptyBlockComponent from "./EmptyBlockComponent";



const FeedBacksComponent = () => {
    const [comments, setComments] = useState([...JSON.parse(localStorage.getItem("comments"))]);

    const addComment = (arr) => {
        setComments((prev) => [...comments, ...arr])
    }

    const delComment = (index) => {
        setComments(comments.filter((_, i) => i !== index));
    }

    //Did update
    useEffect(() => {
        localStorage.setItem("comments", JSON.stringify(comments));
    }, [comments]);



    return (
       <>
           <div className={'cb'}>
               {comments && comments.map((comment, index) => (
                   <FeedBackItemComponent
                       key={comment.createdAt}
                       name={comment.fullName}
                       comment={comment.text}
                       createdAt={comment.createdAt}
                       onDel={delComment}
                       index={index}
                   />
               ))}
               {!comments.length && <EmptyBlockComponent/>}
           </div>
           <div className={'cb'}>
               <FeedBackFormComponent onAdd={addComment}/>
           </div>
       </>
    );
};

export default FeedBacksComponent