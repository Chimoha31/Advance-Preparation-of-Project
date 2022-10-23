import React, { useContext, useEffect, useState } from "react";
import "./SinglePost.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Context } from "../../context/Context";

const SinglePost = () => {
  const PF = "http://localhost:5000/images/";
  const params = useParams();
  const [singlePost, setSinglePost] = useState({});
  const { user } = useContext(Context);

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

  // Delete
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/posts/${id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (e) {
      console.log(e);
    }
  };
  console.log(singlePost);
  useEffect(() => {
    getPost();
    // eslint-disable-next-line
  }, [params]);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {singlePost.photo && (
          <img className="singlePostImg" src={PF + singlePost.photo} alt="" />
        )}

        <h1 className="singlePostTitle">
          {singlePost.title}
          {singlePost.username === user?.username && (
            <div className="singlePostEdit">
              <i className="singlePostIcon fas fa-edit"></i>
              <i
                className="singlePostIcon fas fa-trash-alt"
                onClick={() => handleDelete(singlePost._id)}
              ></i>
            </div>
          )}
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${singlePost.username}`} className="link">
              <b>{singlePost.username}</b>
            </Link>
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
