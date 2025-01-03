// 'use client'

// import React, { useState } from "react";

// const CommentSection = () => {
//   const [comments, setComments] = useState<string[]>([]); // Holds all the comments
//   const [commentText, setCommentText] = useState<string>(""); // Holds the input value

//   const handleAddComment = () => {
//     if (commentText.trim() === "") return; // Prevent empty comments

//     setComments([...comments, commentText]); // Add new comment
//     setCommentText(""); // Clear the input
//   };

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md">
//       <h2 className="text-xl font-bold mb-4">Comments</h2>

//       {/* Comments List */}
//       <div className="space-y-4">
//         {comments.length > 0 ? (
//           comments.map((comment, index) => (
//             <div
//               key={index}
//               className="bg-gray-100 p-3 rounded-md shadow-sm border"
//             >
//               {comment}
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-500">No comments yet. Be the first to comment!</p>
//         )}
//       </div>

//       {/* Input for Adding Comments */}
//       <div className="mt-6">
//         <textarea
//           className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           rows={3}
//           placeholder="Write your comment here..."
//           value={commentText}
//           onChange={(e) => setCommentText(e.target.value)}
//         ></textarea>
//         <button
//           className="mt-4 px-4 py-2 bg-purple-600 text-white font-bold rounded-md hover:bg-purple-800"
//           onClick={handleAddComment}
//         >
//           Add Comment
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CommentSection;
"use client"

import React, { useState } from "react";
import {Card, CardContent} from "../components/ui/card";
import {Input} from "../components/ui/input";
import {Button } from "../components/ui/button";


interface Comment {
  id: string;
  author: string;
  text: string;
}

interface CommentSectionProps {
  postId: string;
}

export default function CommentSection({ postId }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);

  const handleAddComment = () => {
    if (newComment.trim() && authorName.trim()) {
      const newCommentObj: Comment = {
        id: new Date().toISOString(),
        author: authorName,
        text: newComment,
      };
      setComments([...comments, newCommentObj]);
      setNewComment("");
      setAuthorName("");
    }
  };

  const handleEditComment = (commentID: string) => {
    const commentToEdit = comments.find((comment) => comment.id === commentID);
    if (commentToEdit) {
      setNewComment(commentToEdit.text);
      setAuthorName(commentToEdit.author);
      setEditingCommentId(commentID);
    }
  };

  const handleSaveEditedComment = () => {
    if (newComment.trim() && authorName.trim() && editingCommentId) {
      const updatedComments = comments.map((comment) =>
        comment.id === editingCommentId
          ? { ...comment, text: newComment, author: authorName }
          : comment
      );
      setComments(updatedComments);
      setNewComment("");
      setAuthorName("");
      setEditingCommentId(null);
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl ml-4 font-semibold">Comments</h2>
      <div className="mt-4 space-y-4">
        {comments.length > 0 ? (
          comments .map((comment) => (
            <Card key={comment.id}>
              <CardContent className="pt-4 ">
                <div className="font-semibold">
               {comment.author}
                </div>
                <p>{comment.text}</p>
               <Button
               onClick={() => handleEditComment(comment.id)}
               className="mt-2 bg-purple-600 text-white hover:bg-purple-800">

                Edit

               </Button>
              </CardContent>
            </Card>
          ))
        )  : (
         <p className="text-slate-500 text-center">No comments yet. be the first to comment</p>

        )}
        </div>
        <div className="mt-4 items-center">
        <input
          type="text"
          placeholder="Your Name"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          className="w-full mb-7 ml-5 "
        />
        <input
          type="text"
          placeholder="Add  a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full mb-2 ml-5"
        />

        <Button
        onClick={
          editingCommentId ? handleSaveEditedComment : handleAddComment
        } className="mt-4 ml-5 bg-purple-600 hover:bg-purple-800 text-white text-center">
          {editingCommentId ? "Save" :"Submit"}

        </Button>
        </div>
        </div>
  );
}
