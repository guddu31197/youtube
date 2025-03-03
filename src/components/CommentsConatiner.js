import React from "react";
import { data } from "react-router-dom";
import { Comment } from "./Comment";
const CommentsData = [
  {
    name: "Randhir Kuamr",
    text: "lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Randhir Kuamr",
    text: "lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Randhir Kuamr",
        text: "lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Randhir Kuamr",
        text: "lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
    ],
  },
  {
    name: "Randhir Kuamr",
    text: "lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Randhir Kuamr",
    text: "lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Randhir Kuamr",
    text: "lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];

const CommentsList = ({ Comments }) => {
  return Comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList Comments={comment.replies}/>
      </div>
    </div>
  ));
};

const CommentsConatiner = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList Comments={CommentsData} />;
    </div>
  );
};

export default CommentsConatiner;
