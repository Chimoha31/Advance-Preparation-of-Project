import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import SideBar from "../../components/sidebar/SideBar";
import "./Home.css";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      await axios.get("http://localhost:5000/api/posts")
        .then((res) => {
          setPosts(res)
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchPosts();
  }, []);
  
  console.log(posts);

  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <SideBar />
      </div>
    </>
  );
};

export default Home;
