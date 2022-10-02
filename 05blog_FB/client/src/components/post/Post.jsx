import React from "react";
import "./Post.css";

const Post = () => {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sity</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quae
        doloremque inventore repellat, voluptatum veritatis nemo vitae mollitia
        excepturi commodi nobis suscipit eos reprehenderit, sapiente facilis
        accusantium expedita ut dicta!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quae
        doloremque inventore repellat, voluptatum veritatis nemo vitae mollitia
        excepturi commodi nobis suscipit eos reprehenderit, sapiente facilis
        accusantium expedita ut dicta!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quae
        doloremque inventore repellat, voluptatum veritatis nemo vitae mollitia
        excepturi commodi nobis suscipit eos reprehenderit, sapiente facilis
        accusantium expedita ut dicta!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quae
        doloremque inventore repellat, voluptatum veritatis nemo vitae mollitia.
      </p>
    </div>
  );
};

export default Post;