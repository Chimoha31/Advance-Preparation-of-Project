import React from "react";
import "./Settings.css";
import SideBar from "../../components/sidebar/SideBar";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">Delete Your Account</span>
        </div>

        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fas fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>

          <label>Username</label>
          <input type="text" placeholder="Chiho" />
          <label>Email</label>
          <input type="email" placeholder="Chiho@gmail.com" />
          <label>Password</label>
          <input type="password" />
        </form>
        <button className="settingsSubmitButton">Update</button>
      </div>
      <SideBar />
    </div>
  );
};

export default Settings;
