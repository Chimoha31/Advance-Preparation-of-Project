import React from "react";
import "./SinglePost.css";

const SinglePost = () => {
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
          minus. Itaque.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, ut
          earum. Dicta excepturi libero natus, labore eius fugiat vitae officiis
          inventore tenetur, eaque asperiores obcaecati doloremque eveniet quasi
          minus. Itaque.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, ut
          earum. Dicta excepturi libero natus, labore eius fugiat vitae officiis
          inventore tenetur, eaque asperiores obcaecati doloremque eveniet quasi
          minus. Itaque.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, ut
          earum. Dicta excepturi libero natus, labore eius fugiat vitae officiis
          inventore tenetur, eaque asperiores obcaecati doloremque eveniet quasi
          minus. Itaque.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, ut
          earum. Dicta excepturi libero natus, labore eius fugiat vitae officiis
          inventore tenetur, eaque asperiores obcaecati doloremque eveniet quasi
          minus. Itaque.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, ut
          earum. Dicta excepturi libero natus, labore eius fugiat vitae officiis
          inventore tenetur, eaque asperiores obcaecati doloremque eveniet quasi
          minus. Itaque.
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
