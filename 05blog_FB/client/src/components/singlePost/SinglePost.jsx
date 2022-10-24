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
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  const getPost = async () => {
    await axios
      .get(`http://localhost:5000/api/posts/${params.postId}`)
      .then((res) => {
        setSinglePost(res.data);
        setTitle(res.data.title);
        setDesc(res.data.desc);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Edit
  const handleUpdate = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/posts/${id}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false);
    } catch (e) {
      console.log(e);
    }
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

        {updateMode ? (
          <input
            type="text"
            className="singlePostTitleInput"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {singlePost.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon fas fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon fas fa-trash-alt"
                  onClick={() => handleDelete(singlePost._id)}
                ></i>
              </div>
            )}
          </h1>
        )}
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

        {updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}

        {updateMode && (
          <button
            className="singlePostButton"
            onClick={() => handleUpdate(singlePost._id)}
          >
            Update
          </button>
        )}
      </div>
    </div>
  );
};

export default SinglePost;
