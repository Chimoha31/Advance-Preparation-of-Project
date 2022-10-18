import React, { useEffect } from "react";
import "./SinglePost.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const SinglePost = () => {
  const params = useParams();
  console.log(params)

  const getPost = async () => {
    await axios
      .get(`http://localhost:5000/api/posts/${params.postId}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPost();
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
          Lorem ipsum dolor sit amet elit.
          <div className="singlePostEdit">
            <i className="singlePostIcon fas fa-edit"></i>
            <i className="singlePostIcon fas fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Chiho</b>
          </span>
          <span className="singlePostDate">1hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, ut
          earum. Dicta excepturi libero natus, labore eius fugiat vitae officiis
          inventore tenetur, eaque asperiores obcaecati doloremque eveniet quasi
          minus. Itaque. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Officiis, ut earum. Dicta excepturi libero natus, labore eius
          fugiat vitae officiis inventore tenetur, eaque asperiores obcaecati
          doloremque eveniet quasi minus. Itaque. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Officiis, ut earum. Dicta excepturi
          libero natus, labore eius fugiat vitae officiis inventore tenetur,
          eaque asperiores obcaecati doloremque eveniet quasi minus. Itaque.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, ut
          earum. Dicta excepturi libero natus, labore eius fugiat vitae officiis
          inventore tenetur, eaque asperiores obcaecati doloremque eveniet quasi
          minus. Itaque. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Officiis, ut earum. Dicta excepturi libero natus, labore eius
          fugiat vitae officiis inventore tenetur, eaque asperiores obcaecati
          doloremque eveniet quasi minus. Itaque. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Officiis, ut earum. Dicta excepturi
          libero natus, labore eius fugiat vitae officiis inventore tenetur,
          eaque asperiores obcaecati doloremque eveniet quasi minus. Itaque.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, ut
          earum. Dicta excepturi libero natus, labore eius fugiat vitae officiis
          inventore tenetur, eaque asperiores obcaecati doloremque eveniet quasi
          minus. Itaque.
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
