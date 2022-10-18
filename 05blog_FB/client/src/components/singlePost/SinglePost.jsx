import React, { useEffect, useState } from "react";
import "./SinglePost.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const SinglePost = () => {
  const params = useParams();
  const [singlePost, setSinglePost] = useState({});

  const getPost = async () => {
    await axios
      .get(`http://localhost:5000/api/posts/${params.postId}`)
      .then((res) => {
        setSinglePost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(singlePost);

  useEffect(() => {
    getPost();
    // eslint-disable-next-line
  }, [params]);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <h1 className="singlePostTitle">
          {singlePost.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon fas fa-edit"></i>
            <i className="singlePostIcon fas fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Chiho</b>
          </span>
          <span className="singlePostDate">
            {new Date(singlePost.createdAt).toDateString()}
          </span>
        </div>
        <p className="singlePostDesc">{singlePost.desc}</p>
      </div>
    </div>
  );
};

export default SinglePost;
