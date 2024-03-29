import React, { useEffect, useState } from "react";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { auth, db } from "../firenase-config";

const Home = ({isAuth}) => {
  const [postLists, setPostLists] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  const getPosts = async () => {
    const data = await getDocs(postsCollectionRef);
    setPostLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deletePost = async (id) => {
    console.log(id);
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
    getPosts();
  };
  useEffect(() => {
    getPosts();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="homePage">
      {postLists.map((post) => (
        <div className="post" key={post.id}>
          <div className="postHeader">
            <div className="title">
              <h1>{post.title}</h1>
            </div>
            <div className="deletePost">
              {isAuth && post.author.id === auth.currentUser.uid && (
                <button onClick={() => deletePost(post.id)}>🗑</button>
              )}
            </div>
          </div>
          <div className="postTextContainer">{post.postText}</div>
          <h3>{post.author.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Home;
