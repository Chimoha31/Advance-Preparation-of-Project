import React, { useEffect, useState } from "react";
import "./SideBar.css";
import axios from "axios";
import {Link} from 'react-router-dom';

const SideBar = () => {
  const [cats, setCats] = useState([]);

  const getCats = async () => {
    await axios
      .get("http://localhost:5000/api/categories")
      .then((res) => {
        setCats(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCats();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://images.unsplash.com/photo-1631651738795-b89313eb68d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          style={{ width: "200px", height: "180px" }}
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          dolores cumque animi et, doloribus laboriosam aspernatur.
        </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((cat) => (
            <Link to={`/cat?=${cat.name}`} className="link" key={cat._id}>
            <li className="sidebarListItem">{cat.name}</li>
            </Link>
          ))}
        </ul>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
