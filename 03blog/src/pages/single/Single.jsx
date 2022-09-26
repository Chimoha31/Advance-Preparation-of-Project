import React from 'react';
import './Single.css';
import SideBar from '../../components/sidebar/SideBar';
import SinglePost from '../../components/singlePost/SinglePost';

const Single = () => {
  return (
    <div className="single">
      {/* {post} */}
      <SinglePost />
      <SideBar />
    </div>
  )
}

export default Single
